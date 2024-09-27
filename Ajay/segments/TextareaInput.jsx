import React from "react";

const TextareaInput = ({ label, name, value, onChange }) => {
    return (
        <div>
            <label className="block mb-2">{label}:</label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded"
            />
        </div>
    );
};

export default TextareaInput;
