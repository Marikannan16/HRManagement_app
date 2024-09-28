import React from 'react';

const Label = ({ text }) => {
    return (
        <label className="block font-semibold text-gray-700">
            {text}
        </label>
    );
};

export default Label;
