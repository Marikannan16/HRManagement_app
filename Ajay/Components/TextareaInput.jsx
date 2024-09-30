import React from "react";

const TextareaInput = ({ label, name, value, placeholder, onChange }) => {
    return (
        <div className="mb-2">
            <label className="block mb-2 font-semibold">{label}:</label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={3}
                className="w-full p-2 border border-gray-300 rounded"
                required
            />
        </div>
    );
};

export default TextareaInput;
