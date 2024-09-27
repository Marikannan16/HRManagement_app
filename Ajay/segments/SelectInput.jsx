import React from "react";

const SelectInput = ({ label, name, value, onChange, options }) => {
    return (
        <div>
            <label className="block mb-2">{label}</label>
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
