import React from 'react';

const Input = ({ type, name, placeholder, value, onChange, required = false }) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full p-2 border rounded"
            required={required}
        />
    );
};

export default Input;
