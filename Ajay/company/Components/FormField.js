import React from 'react';
import Label from './Label';
import Input from './Input';

const FormField = ({ labelText, inputProps }) => {
    return (
        <div className="mb-4 flex flex-col gap-2">
            <Label text={labelText} />
            <Input {...inputProps} />
        </div>
    );
};

export default FormField;
