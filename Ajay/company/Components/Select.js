// Select.js
import React from 'react';

const Select = ({ name, value, onChange, options, required = false }) => {
    return (
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="w-full p-2 border rounded"
            required={required}
        >
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
