// src/components/ComplianceForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setComplianceField, resetForm } from '../components/complianceSlice';
import { GoUpload } from 'react-icons/go';
import { AiOutlineLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const ComplianceForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formData = useSelector((state) => state.compliance);
  const [formState, setFormState] = useState({
    activity: formData.activity || '', typeOfAct: formData.typeOfAct || '',
    formname: formData.formname || '', applicablelaboract: formData.applicablelaboract || '',
    remarks: formData.remarks || '', dueDate: formData.dueDate || '', Section: formData.Section || '',
    state: formData.state || '', applicability: formData.applicability || '', priorityType: formData.priorityType || '', frequencyofcompliance: formData.frequencyofcompliance || '', uploadDocument: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // dispatch(setComplianceField({ field: name, value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormState((prevState) => ({
        ...prevState,
        uploadDocument: URL.createObjectURL(file),
      }));
    }
    // dispatch(setComplianceField({ field: 'document', value: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setComplianceField(formData));
    // alert('Form Submitted');
    setFormState({
      activity: '', typeOfAct: '',
      formname: '', applicableLaborAct: '',
      remarks: '', customization: '', dueDate: '', Section: '',
      state: '', applicability: '', priorityType: '', frequencyofcompliance: '', uploadDocument: null,
    })
  };
  const handleCancel = () => {
    dispatch(resetForm());
    setFormState({
      activity: '', typeOfAct: '',
      formname: '', applicableLaborAct: '',
      remarks: '', customization: '', dueDate: '', Section: '',
      state: '', applicability: '', priorityType: '', frequencyofcompliance: '', uploadDocument: null,
    })
  };
  const handleBackClick = () => {
    // Optional: Dispatch action to update state if necessary
    dispatch({ type: 'SET_CURRENT_VIEW', payload: 'list' });

    // Navigate back to the compliance list
    navigate('/');
  };
  return (
    <div className="w-screen h-screen px-10 py-5">
      <div className="grid grid-cols-1 px-5 gap-10 lg:grid-cols-2 lg:px-0">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 ms-2 text-start mb-5">Create Compliance</h2>
        </div>

        <div className='flex justify-end'>
          <button
            className="flex items-center px-8 py-2 bg-yellow-600 text-white rounded"
            onClick={handleBackClick}
          >
            <AiOutlineLeft />  {/* Left arrow icon */}
            <span>Back to List</span>
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 px-5 gap-10 lg:grid-cols-2 lg:px-0 mt-5 pt-2">
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Activity</label>
              <input
                type="text"
                name="activity"
                placeholder="Enter Your Activity"
                value={formState.activity}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 pb-2 ">Type of act</label>
              <input type='text'
                name="typeOfAct"
                value={formState.typeOfAct}
                placeholder='Enter the Act'
                onChange={handleInputChange}
                className="w-full p-2  border rounded"
                required />

            </div>
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Applicable Labor Act</label>
              <input
                type="text"
                name="applicableLaborAct"
                placeholder="Enter Your Applicable Low"
                value={formState.applicableLaborAct}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Due Date</label>
              <input
                type="text"
                name="dueDate"
                placeholder='Enter the Due Date'
                value={formState.dueDate}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Section</label>
              <input
                type="text"
                name="Section"
                placeholder="Enter Your Section"
                value={formState.Section}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Remarks</label>
              <input
                type="text"
                name="remarks"
                placeholder="Enter Your Remarks"
                value={formState.remarks}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <div>


            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Name of the form</label>
              <input
                type="text"
                name="formname"
                placeholder="Enter Your Name of the form"
                value={formState.formname}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 pb-2">State</label>
              <select
                name="state"
                value={formState.state}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required >
                <option value="">Enter Your State</option>
                <option value="State  1">State   1</option>
                <option value="State  2">State 2</option>
                <option value="State  3">State 3</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Applicability</label>
              <input type='text'
                name="applicability"
                value={formState.applicability}
                placeholder='Enter the Applicability'
                onChange={handleInputChange}
                className="w-full p-2 border rounded "
                required />
            </div>



            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Frequency of compliance</label>
              <select
                name="frequencyofcompliance"
                value={formState.frequencyofcompliance}
                onChange={handleInputChange}
                className="w-full p-2 border rounded "
                required
              >
                <option value="">Select Frequency of compliance</option>
                <option value="Frequency of compliance1">Frequency of compliance  1</option>
                <option value="Frequency of compliance2">Frequency of compliance   2</option>
                <option value="Frequency of compliance3">Frequency of compliance  3</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 pb-2">priorityType</label>
              <select
                name="priorityType"
                value={formState.priorityType}
                onChange={handleInputChange}
                className="w-full p-2 border rounded "
                required >
                <option value="">Select your priorityType</option>
                <option value="priorityType  1">priorityType  1</option>
                <option value="priorityType  2">priorityType   2</option>
                <option value="priorityType  3">priorityType   3</option>
              </select>
            </div>

            <label>Upload Document</label>
            <label className='flex items-center gap-7  w-1/3 h-12 mt-2 px-8 py-2 bg-yellow-600 text-white rounded'>

              <div className="w-11 h-9 shadow-md rounded-xl overflow-hidden flex items-center justify-center ">
                {formState.uploadDocument ? (
                  <img src={formState.uploadDocument} alt="document" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white-500 text-3xl">
                    <GoUpload />
                  </span>
                )}
              </div>
              <span>upload</span>

              <input
                id="file-upload"
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>

          </div>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          <button
            type="Submit"
            onClick={handleCancel}
            className="px-8 py-2 bg-gray-300 text-black rounded me-5"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-8 py-2 bg-yellow-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComplianceForm;
