import React from "react";

const TextInput = ({ label, name, value, placeholder, onChange, type = "text" }) => {
    return (
        <div className="mb-2">
            <label className="block mb-2 font-semibold">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full p-2 border border-gray-300 rounded"
                required
            />
        </div>
    );
};

export default TextInput;
