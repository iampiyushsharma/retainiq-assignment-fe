"use client";
import React, { useState } from "react";
import AddCard from "./AddCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faGripVertical,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";
import Filters from "./Filters";
import toast from "react-hot-toast";

const Content = () => {
  const [table, setTable] = useState([["", "", "", "", ""]]);

  const addRow = () => {
    const newRow = new Array(table[0].length).fill("");
    setTable([...table, newRow]);
    toast.success("State Added");
  };

  const addColumn = () => {
    const newTable = table.map((row) => [...row, ""]);
    setTable(newTable);
    toast.success("State Added");
  };

  const deleteRow = (rowIndex) => {
    setTable((prevTable) => prevTable.filter((_, index) => index !== rowIndex));
    toast.success("Row Deleted");
  };

  const deleteColumn = (colIndex) => {
    const newTable = table.map((row) =>
      row.filter((_, index) => index !== colIndex)
    );
    setTable(newTable);
    toast.success("Column Deleted");
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("rowIndex", index);
  };

  const handleDrop = (e, index) => {
    const draggedIndex = parseInt(e.dataTransfer.getData("rowIndex"), 10);
    if (draggedIndex !== index) {
      const newTable = [...table];
      const [removed] = newTable.splice(draggedIndex, 1);
      newTable.splice(index, 0, removed);
      setTable(newTable);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-4 overflow-auto rounded-lg max-w-[96vw] h-screen bg-slate-100 mt-8 no-scrollbar">
      <div className="relative overflow-x-auto no-scrollbar">
        <div className="overflow-x-auto no-scrollbar">
          <table className="min-w-full">
            <thead>
              <tr>
                {table[0].map((_, index) => (
                  <th
                    key={index}
                    className={`relative px-4 py-2 bg-slate-100 ${
                      index === 0
                        ? "sticky w-[100px] top-0 left-0 z-20"
                        : index === 1
                        ? "sticky w-[300px] top-0 left-[100px] z-10"
                        : "w-[300px]"
                    }`}
                  >
                    {index === 0
                      ? ""
                      : index === 1
                      ? "Filter"
                      : `Variant ${index - 1}`}
                    {index >= 2 && (
                      <FontAwesomeIcon
                        icon={faRemove}
                        size="xl"
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                        onClick={() => deleteColumn(index)}
                      />
                    )}
                  </th>
                ))}
                <th className="w-[100px] py-2 bg-slate-100"></th>
              </tr>
            </thead>
            <tbody>
              {table.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  draggable
                  onDragStart={(e) => handleDragStart(e, rowIndex)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, rowIndex)}
                >
                  {row.map((cell, colIndex) =>
                    colIndex === 0 ? (
                      <td
                        key={colIndex}
                        className="relative w-[100px] px-4 py-2 text-center sticky left-0 bg-slate-100 z-10 group"
                      >
                        <div className="flex flex-col items-center h-full">
                          {/* Container for the serial number and drag icon */}
                          <div className="relative flex items-center">
                            <FontAwesomeIcon
                              icon={faGripVertical}
                              size="lg"
                              className="text-gray-500 cursor-pointer mr-2"
                            />
                            <p className="text-xl font-bold">{rowIndex + 1}</p>
                          </div>
                          {/* Positioned delete icon */}
                          <div className="absolute bottom-[55%] right-[40%] mt-2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <FontAwesomeIcon
                              icon={faTrash}
                              size="lg"
                              className="text-red-500 cursor-pointer"
                              onClick={() => deleteRow(rowIndex)}
                            />
                          </div>
                        </div>
                      </td>
                    ) : colIndex === 1 ? (
                      <td
                        key={colIndex}
                        className="w-[300px] px-4 py-2 text-center sticky left-[100px] bg-slate-100 z-10"
                      >
                        <Filters
                          rowIndex={rowIndex}
                          colIndex={colIndex}
                          table={table}
                          setTable={setTable}
                        />
                      </td>
                    ) : (
                      <td key={colIndex} className="w-[300px] px-4 py-2">
                        <AddCard
                          rowIndex={rowIndex}
                          colIndex={colIndex}
                          table={table}
                          setTable={setTable}
                        />
                      </td>
                    )
                  )}
                  <td className="w-[100px] px-4 py-2 text-center bg-slate-100">
                    <FontAwesomeIcon
                      icon={faPlus}
                      size="2x"
                      onClick={addColumn}
                      className="mt-10 bg-white w-10 h-10 rounded shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faPlus}
        size="2x"
        onClick={addRow}
        className="ml-[90px] mt-10 bg-white w-10 h-10 rounded shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out cursor-pointer"
      />
    </div>
  );
};

export default Content;
