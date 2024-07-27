"use client";
import React, { useState } from 'react';

const Filters = () => {
    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="w-[500px] rounded shadow-lg p-4 border border-gray-200">
            <div className="w-full h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
                {image ? (
                    <img src={image} alt="Uploaded Design" className="object-cover h-full w-full" />
                ) : (
                    <div className="bg-white text-gray-700 font-semibold py-2 border border-gray-300 rounded mt-4 w-1/2 flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                        + Add Filters
                    </div>
                )}
            </div>
        </div>

    );
};

export default Filters;