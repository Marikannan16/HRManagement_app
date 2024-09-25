import pdf from '../../../assets/pdf.png';

const Data = [
  {
    sno: 1,
    activity: "PF Remittance",
    formname: "PF Challan",
    applicablelaw: "Provident Fund & Miscellaneous Act, 1952",
    acttype: "Central",
    duedate: "15 of every Month",
    period: "Monthly",
    section: "Payment Receipt",
    priority: "High",
    remarks: "iste natus error sit voluptatem",
    state: "Maharashtra",
    applicability: "20Employees",


  },
  {
    sno: 2,
    activity: "PF Remittance",
    formname: "Form-2 / E-nomination",
    applicablelaw: "Employee State Insurance Act, 1948",
    acttype: "Central",
    duedate: "Annual",
    period: "Annually",
    section: "Preserve Form 2",
    priority: "Medium",
    remarks: "iste natus error sit voluptatem",
    state:"Tamilnadu",
    applicability: "20Employees",
    // frequencyofcompliance: "monthly"
  },
  {
    sno: 3,
    activity: "PF",
    formname: "Form-3",
    applicablelaw: "Insurance Act, 1948",
    acttype: "Central",
    duedate: "Annual",
    period: "Monthly",
    section: "Preserve Form 2",
    priority: "High",
    remarks: "iste natus error sit voluptatem",
    state: "Kerala",
    applicability: "20Employees",
    uploadDocument:pdf
    // frequencyofcompliance: "monthly"


  },
]
export default Data;

// import React, { useState, useEffect } from 'react';
// import { AiOutlineLeft } from 'react-icons/ai';
// import { GoUpload } from 'react-icons/go';
// import { useDispatch } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import Data from '../list/Dummy'; // Import your dummy data

// const ViewCompliance = () => {
//   const { sno } = useParams(); // Get the sno from the URL params
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Initialize formData with default values
//   const [formData, setFormData] = useState({
//     sno: '',
//     activity: '',
//     formname: '',
//     applicablelaw: '',
//     acttype: '',
//     duedate: '',
//     period: '',
//     section: '',
//     priority: '',
//     uploadDocument: ''
//   });

//   // Fetch the compliance data based on the sno
//   useEffect(() => {
//     const complianceData = Data.find(item => item.sno === Number(sno)); // Find the compliance by sno
//     if (complianceData) {
//       setFormData(complianceData);
//     }
//   }, [sno]);

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData((prevState) => ({
//         ...prevState,
//         uploadDocument: URL.createObjectURL(file),
//       }));
//     }
//   };

//   const handleCancel = () => {
//     dispatch({ type: 'RESET_FORM' });
//     setFormData({
//       sno: '',
//       activity: '',
//       formname: '',
//       applicablelaw: '',
//       acttype: '',
//       duedate: '',
//       period: '',
//       section: '',
//       priority: '',
//       uploadDocument: ''
//     });
//   };

//   const handleBackClick = () => {
//     dispatch({ type: 'SET_CURRENT_VIEW', payload: 'list' });
//     navigate('/');
//   };

//   const handleEditClick = () => {
//     navigate(`/editcompliance/${formData.sno}`);
//   };

//   return (
//     <div className="w-screen h-screen px-10 py-5">
//       <div className="grid grid-cols-1 px-5 gap-10 lg:grid-cols-2 lg:px-0">
//         <div>
//           <h2 className="text-xl font-semibold text-gray-800 ms-2 text-start mb-5">View Compliance</h2>
//         </div>
//         <div className="flex justify-end">
//           <button onClick={handleBackClick} className="flex items-center px-8 py-2 bg-yellow-600 text-white rounded">
//             <AiOutlineLeft />
//             <span>Back to List</span>
//           </button>
//         </div>
//       </div>

//       <form>
//         <div className="grid grid-cols-1 px-5 gap-10 lg:grid-cols-2 lg:px-0 mt-5 pt-2">
//           <div>
//             {/* Activity */}
//             <div className="mb-4">
//               <label className="block text-gray-700 pb-2">Activity</label>
//               <input
//                 type="text"
//                 name="activity"
//                 value={formData.activity}
//                 className="w-full p-2 border rounded"
//                 readOnly
//               />
//             </div>

//             {/* Type of Act */}
//             <div className="mb-4">
//               <label className="block text-gray-700 pb-2">Type of Act</label>
//               <input
//                 type="text"
//                 name="acttype"
//                 value={formData.acttype}
//                 className="w-full p-2 border rounded"
//                 readOnly
//               />
//             </div>

//             {/* Applicable Labor Act */}
//             <div className="mb-4">
//               <label className="block text-gray-700 pb-2">Applicable Labor Act</label>
//               <input
//                 type="text"
//                 name="applicablelaw"
//                 value={formData.applicablelaw}
//                 className="w-full p-2 border rounded"
//                 readOnly
//               />
//             </div>

//             {/* Due Date */}
//             <div className="mb-4">
//               <label className="block text-gray-700 pb-2">Due Date</label>
//               <input
//                 type="text"
//                 name="duedate"
//                 value={formData.duedate}
//                 className="w-full p-2 border rounded"
//                 readOnly
//               />
//             </div>

//             {/* Section */}
//             <div className="mb-4">
//               <label className="block text-gray-700 pb-2">Section</label>
//               <input
//                 type="text"
//                 name="section"
//                 value={formData.section}
//                 className="w-full p-2 border rounded"
//                 readOnly
//               />
//             </div>

//             {/* Remarks */}
//             <div className="mb-4">
//               <label className="block text-gray-700 pb-2">Remarks</label>
//               <input
//                 type="text"
//                 name="remarks"
//                 value={formData.remarks}
//                 className="w-full p-2 border rounded"
//                 readOnly
//               />
//             </div>
//           </div>

//           <div>
//             {/* Name of the Form */}
//             <div className="mb-4">
//               <label className="block text-gray-700 pb-2">Name of the Form</label>
//               <input
//                 type="text"
//                 name="formname"
//                 value={formData.formname}
//                 className="w-full p-2 border rounded"
//                 readOnly
//               />
//             </div>

//             {/* Priority Type */}
//             <div className="mb-4">
//               <label className="block text-gray-700 pb-2">Priority</label>
//               <input
//                 type="text"
//                 name="priority"
//                 value={formData.priority}
//                 className="w-full p-2 border rounded"
//                 readOnly
//               />
//             </div>

//             {/* Upload Document */}
//             <label className="block mb-2">Upload Document</label>
//             <label className='flex items-center gap-7 w-1/3 h-12 mt-2 px-8 py-2 bg-yellow-600 text-white rounded'>
//               <div className="w-11 h-9 shadow-md rounded-xl overflow-hidden flex items-center justify-center ">
//                 {formData.uploadDocument ? (
//                   <img src={formData.uploadDocument} alt="document" className="w-full h-full object-cover" />
//                 ) : (
//                   <span className="text-white-500 text-3xl">
//                     <GoUpload />
//                   </span>
//                 )}
//               </div>
//               <span>Upload</span>
//               <input
//                 id="file-upload"
//                 type="file"
//                 accept="application/pdf"
//                 className="hidden"
//                 onChange={handleFileUpload}
//                 disabled
//               />
//             </label>
//           </div>
//         </div>

//         <div className="flex justify-center gap-2 mt-6">
//           <button
//             type="button"
//             onClick={handleCancel}
//             className="px-8 py-2 bg-gray-300 text-black rounded me-5"
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             onClick={handleEditClick}
//             className="px-8 py-2 bg-yellow-600 text-white rounded"
//           >
//             Edit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ViewCompliance;
