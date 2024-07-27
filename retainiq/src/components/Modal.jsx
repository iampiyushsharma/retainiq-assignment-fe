"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faLink, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';


const Modal = ({ isOpen, onClose, setImage , variants }) => {
    if (!isOpen) return null;



    const handleCardClick = (variant) => {
        console.log(`Variant selected: ${variant}`);
        setImage(variant);
        onClose();
    };

    const handleInsertClick = (event, variant) => {
        event.stopPropagation(); 
        handleCardClick(variant);
    };
    let filteredVariants = false;
    if (variants.length === 3) {
        filteredVariants = true;
    }

    return (
        <div className="fixed inset-0 w-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 shadow-lg w-3/4 max-w-3xl max-h-[80vh] overflow-y-auto relative rounded-lg">
                <div className="flex justify-between items-center mb-4">
                    <FontAwesomeIcon icon={faLink} size="2x" className="text-green-500" />
                    <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={onClose}
                    >
                        <FontAwesomeIcon icon={faTimes} size="2x" />
                    </button>
                </div>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className="text-xl font-semibold mb-4">Select a design to link</h2>
                    <div className="mb-4 flex items-center">
                        <label>
                            <FontAwesomeIcon icon={faSearch} size='2x' className='mr-1 h-7'/>
                        </label>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-2 h-8 border border-gray-300 rounded"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {variants.map((variant, index) => (
                        <div
                            key={index}
                            className="relative border border-gray-300 p-4 rounded-lg hover:shadow-md cursor-pointer"
                            onClick={() => handleCardClick(variant)}
                        >{filteredVariants ? <>
                        <div>
                            <div> {variant} </div>
                        </div>
                            </> : <>
                            <img
                                src={variant[0]}

                                className="w-full h-48 object-cover rounded-lg"
                            />
                            <p className='justify-center text-center'>{variant[1]}</p>
                            <div
                                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                            >
                                <button
                                    className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
                                    onClick={(event) => handleInsertClick(event, variant)}
                                >
                                    <FontAwesomeIcon icon={faPlus} size="lg" className="text-gray-700 hover:text-gray-900" />
                                </button>
                            </div>
                            </>}
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Modal;
