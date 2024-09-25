import React, { useState, useEffect } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { GoUpload } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Data from '../list Compliance/Dummy';// Import your dummy data
import pdf from '../../../assets/pdf.png';

const ViewCompliance = () => {
  const { sno } = useParams(); // Get the sno from the URL params
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Initialize formData with default values
  const [formData, setFormData] = useState({
    sno: '',
    activity: '',
    formname: '',
    applicablelaw: '',
    acttype: '',
    duedate: '',
    period: '',
    section: '',
    priority: '',
    state:'',
    uploadDocument: ''
  });

  // Fetch the compliance data based on the sno
  useEffect(() => {
    const complianceData = Data.find(item => item.sno === Number(sno)); // Find the compliance by sno
    if (complianceData) {
      setFormData(complianceData);
    }
  }, [sno]);

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
    dispatch({ type: 'RESET_FORM' });
    setFormData({
      sno: '',
      activity: '',
      formname: '',
      applicablelaw: '',
      acttype: '',
      duedate: '',
      period: '',
      section: '',
      priority: '',
      state:'',
      uploadDocument: ''
    });
  };

  const handleBackClick = () => {
    dispatch({ type: 'SET_CURRENT_VIEW', payload: 'list' });
    navigate('/home/compliancelist');
  };

  const handleEditClick = () => {
    navigate(`/home/editcompliance/${formData.sno}`);
  };

  return (
    <div className="w-screen h-screen px-10 py-5">
      <div className="grid grid-cols-1 px-5 gap-10 lg:grid-cols-2 lg:px-0">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 ms-2 text-start mb-5">View Compliance</h2>
        </div>
        <div className="flex justify-end">
          <button onClick={handleBackClick} className="flex items-center px-8 py-2 bg-yellow-600 text-white rounded">
            <AiOutlineLeft />
            <span>Back to List</span>
          </button>
        </div>
      </div>

      <form>
        <div className="grid grid-cols-1 px-5 gap-10 lg:grid-cols-2 lg:px-0 mt-5 pt-2">
          <div>
            {/* Activity */}
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Activity</label>
              <input
                type="text"
                name="activity"
                value={formData.activity}
                className="w-full p-2 border rounded"
                readOnly
              />
            </div>

            {/* Type of Act */}
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Type of Act</label>
              <input
                type="text"
                name="acttype"
                value={formData.acttype}
                className="w-full p-2 border rounded"
                readOnly
              />
            </div>

            {/* Applicable Labor Act */}
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Applicable Labor Act</label>
              <input
                type="text"
                name="applicablelaw"
                value={formData.applicablelaw}
                className="w-full p-2 border rounded"
                readOnly
              />
            </div>

            {/* Due Date */}
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Due Date</label>
              <input
                type="text"
                name="duedate"
                value={formData.duedate}
                className="w-full p-2 border rounded"
                readOnly
              />
            </div>

            {/* Section */}
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Section</label>
              <input
                type="text"
                name="section"
                value={formData.section}
                className="w-full p-2 border rounded"
                readOnly
              />
            </div>

            {/* Remarks */}
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Remarks</label>
              <input
                type="text"
                name="remarks"
                value={formData.remarks}
                className="w-full p-2 border rounded"
                readOnly
              />
            </div>
          </div>

          <div>
            {/* Name of the Form */}
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Name of the Form</label>
              <input
                type="text"
                name="formname"
                value={formData.formname}
                className="w-full p-2 border rounded"
                readOnly
              />
            </div>
            <div className="mb-4">              
              <label className="block text-gray-700 pb-2">State</label>              
              <select
              name="state"
              value={formData.state}
              className="w-full p-2 border rounded"
              disabled
            >
              <option value="">Select Your State</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Tamilnadu">Tamilnadu</option>
              <option value="Kerala">kerala</option>
            </select>
            </div>
            
            {/* Applicability */}
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Applicability</label>
              <input
                type="text"
                name="applicability"
                value={formData.applicability}
                className="w-full p-2 border rounded"
                readOnly
              />
            </div>

            {/* Frequency of Compliance */}
            <div className="mb-4">
              <label className="block text-gray-700 pb-2">Frequency of Compliance</label>
              <select
                name="frequencyofcompliance"
                value={formData.period}
                className="w-full p-2 border rounded"
                disabled
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
                name="priority"
                value={formData.priority}
                className="w-full p-2 border rounded"
                disabled
              >
                <option value="">Select Frequency of Compliance</option>
                <option value="High">High</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
              </select>
            </div>

        <label className="block mb-2">Upload Document</label>             <label className='flex items-center gap-7 w-1/3 h-12 mt-2 px-8 py-2 bg-yellow-600 text-white rounded'>
             <div className="w-11 h-9 shadow-md rounded-xl overflow-hidden flex items-center justify-center ">                {formData.uploadDocument ? (
                  <img src={pdf} alt="document" className="w-full h-full object-cover" />
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
                disabled
              />
            </label>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          <button
            type="button"
            onClick={handleCancel}
            className='rounded-md bg-white p-2 text-black text-sm py-2 w-32 border border-1 border-black me-4'          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleEditClick}
            className='rounded-md bg-yellow-600 p-2 text-white text-sm py-3 ms-2 w-32'          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ViewCompliance;
