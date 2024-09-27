import React from "react";

const FileInput = ({ label, name, onChange }) => {
    return (
        <div>
            <label className="block mb-2">{label}</label>
            <input type="file" name={name} onChange={onChange} className="w-full" />
        </div>
    );
};

export default FileInput;
