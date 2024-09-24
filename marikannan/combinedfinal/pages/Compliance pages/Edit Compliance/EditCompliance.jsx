import React, { useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { GoUpload } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { resetForm } from '../../../features/complianceSlice';
import { useNavigate } from 'react-router-dom';

const EditCompliance = () => {

  const navigate = useNavigate();

  const initialData = {
    activity: 'PF Remittance',
    formName: 'PF Challance',
    applicableLaborAct: 'Provident Fund & Miscellaneous Act, 1952',
    state: 'Maharashtra',
    dueDate: '15 of every month',
    remarks: 'Payment Receipt',
    priorityType: 'High',
    typeOfAct: 'state',
    section: 'Iste Natus Error',
    applicability: '20 Employees',
    frequencyofcompliance: 'Monthly',
    uploadDocument: null,
  };

  const [formData, setFormData] = useState(initialData);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevState) => ({
        ...prevState,
        uploadDocument: URL.createObjectURL(file),
      }));
    }
  };

  const handleCancel = () => {
    dispatch(resetForm());
    setFormData(initialData);
    navigate('/compliancelist')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/compliancelist')
    // console.log('Updated Compliance Data:', formData);
  };
 const handleBackClick = () => {
    dispatch({ type: 'SET_CURRENT_VIEW', payload: 'list' });
     navigate('/compliancelist');
  };
  return (
    <div className="w-screen h-screen px-10 py-5">
      <div className="grid grid-cols-1 px-5 gap-10 lg:grid-cols-2 lg:px-0">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 ms-2 text-start mb-5">Edit Compliance</h2>
        </div>
        <div className="flex justify-end">
          <button  onClick={handleBackClick} className="flex items-center px-8 py-2 bg-yellow-600 text-white rounded">
            <AiOutlineLeft /> {/* Left arrow icon */}
            <span>Back to List</span>
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 px-5 gap-10 lg:grid-cols-2 lg:px-0 mt-5 pt-2">
          <div>
            {/* Activity */}
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Activity</label>
              <input
                type="text"
                name="activity"
                value={formData.activity}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            {/* Type of Act */}
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Type of Act</label>
              <input
                type="text"
                name="typeOfAct"
                value={formData.typeOfAct}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            {/* Applicable Labor Act */}
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Applicable Labor Act</label>
              <input
                type="text"
                name="applicableLaborAct"
                value={formData.applicableLaborAct}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            {/* Due Date */}
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Due Date</label>
              <input
                type="text"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            {/* Section */}
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Section</label>
              <input
                type="text"
                name="section"
                value={formData.section}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            {/* Remarks */}
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Remarks</label>
              <input
                type="text"
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div>
            {/* Name of the Form */}
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Name of the Form</label>
              <input
                type="text"
                name="formName"
                value={formData.formName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* State */}
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select Your State</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="State 2">State 2</option>
                <option value="State 3">State 3</option>
              </select>
            </div>

            {/* Applicability */}
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Applicability</label>
              <input
                type="text"
                name="applicability"
                value={formData.applicability}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            {/* Frequency of Compliance */}
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Frequency of Compliance</label>
              <select
                name="frequencyofcompliance"
                value={formData.frequencyofcompliance}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select Frequency of Compliance</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Annually">Annually</option>
              </select>
            </div>

            {/* Priority Type */}
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Priority Type</label>
              <select
                name="priorityType"
                value={formData.priorityType}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select Your Priority Type</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            {/* Upload Document */}
            <label className="block mb-2">Upload Document</label>
            <label className='flex items-center gap-7 w-1/3 h-12 mt-2 px-8 py-2 bg-yellow-600 text-white rounded'>
              <div className="w-11 h-9 shadow-md rounded-xl overflow-hidden flex items-center justify-center ">
                {formData.uploadDocument ? (
                  <img src={formData.uploadDocument} alt="document" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white-500 text-3xl">
                    <GoUpload />
                  </span>
                )}
              </div>
              <span>Upload</span>
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
            type="button"
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

export default EditCompliance;
