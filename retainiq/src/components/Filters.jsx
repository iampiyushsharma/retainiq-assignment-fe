"use client";
import React, { useEffect, useState } from 'react';
import Modal from './Modal'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Filter } from '../../utils/filters';

const Filters = ({ rowIndex, colIndex, table, setTable }) => {
    const [Filters, setFilters] = useState(table[rowIndex][colIndex]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setFilters(table[rowIndex][colIndex]);
    }, [rowIndex, colIndex, table]);

    useEffect(() => {
        const newTable = [...table];
        newTable[rowIndex][colIndex] = Filters;
        setTable(newTable);
    }, [Filters]);

    return (
        <>
            <div className="w-[500px] rounded shadow-lg p-4 border border-gray-200">
                <div className="relative w-full h-64 flex items-center justify-center group">
                    {Filters ? (
                        <div className="bg-white text-gray-700 font-semibold py-2 border border-gray-300 rounded mt-4 w-1/2 flex items-center justify-center hover:bg-gray-100 cursor-pointe bg-green-300">
                        {Filters}
                        </div>
                    ) : (
                        <div
                            className="bg-white text-gray-700 font-semibold py-2 border border-gray-300 rounded mt-4 w-1/2 flex items-center justify-center hover:bg-gray-100 cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        >
                            + Add Filter
                        </div>
                    )}
                    {Filters && (
                        <div
                            className="absolute inset-0 flex items-center justify-center group-hover:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <div className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 cursor-pointer flex items-center justify-center">
                                <FontAwesomeIcon icon={faEdit} size="lg" className="text-gray-700 hover:text-gray-900" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} setImage={setFilters} variants={Filter} />
        </>
    );
};

export default Filters;
