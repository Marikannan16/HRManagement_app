import React from 'react';
import Label from './Label';
import Select from './Select';

const FormFieldSelect = ({ labelText, selectProps }) => {
    return (
        <div className="mb-5 flex flex-col gap-2">
            <Label text={labelText} />
            <Select {...selectProps} />
        </div>
    );
};

export default FormFieldSelect;
