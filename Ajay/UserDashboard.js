// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const UserDashboard = () => {
//     const navigate = useNavigate();
//     // Fetch users list from Redux store
//     const users = useSelector((state) => state.usersList.users);

//     // State to manage search and filters
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filterCompany, setFilterCompany] = useState('');
//     const [filterDesignation, setFilterDesignation] = useState('');
//     const [filterModules, setFilterModules] = useState('');

//     // Handle filtering and searching
//     const filteredUsers = users.filter(user => {
//         const matchesSearch = (user.username.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase()) || user.access.toLowerCase().includes(searchTerm.toLowerCase()) || user.designation.toLowerCase().includes(searchTerm.toLowerCase()) || user.modules.toLowerCase().includes(searchTerm.toLowerCase()));
//         const matchesCompany = filterCompany ? user.access === filterCompany : true;
//         const matchesDesignation = filterDesignation ? user.designation === filterDesignation : true;
//         const matchesModules = filterModules ? user.modules === filterModules : true;

//         return matchesSearch && matchesCompany && matchesDesignation && matchesModules;
//     });

//     function handleCreate() {
//         navigate('/first-form');
//     }

//     return (
//         <div className="bg-gray-100 min-h-screen p-5">
//             <h1 className="text-3xl font-bold text-center mb-6">User Dashboard</h1>

//             {/* Filters and Search Bar */}
//             <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between items-center">
//                 <input
//                     type="text"
//                     placeholder="Search by username"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="p-2 border border-gray-300 rounded-md w-full md:w-1/4"
//                 />

//                 <select
//                     value={filterCompany}
//                     onChange={(e) => setFilterCompany(e.target.value)}
//                     className="p-2 border border-gray-300 rounded-md w-full md:w-1/4"
//                 >
//                     <option value="">Filter by Company</option>
//                     <option value="Client A">Client A</option>
//                     <option value="Client B">Client B</option>
//                     <option value="Client C">Client C</option>
//                 </select>

//                 <select
//                     value={filterDesignation}
//                     onChange={(e) => setFilterDesignation(e.target.value)}
//                     className="p-2 border border-gray-300 rounded-md w-full md:w-1/4"
//                 >
//                     <option value="">Filter by Designation</option>
//                     <option value="Branch X">Branch X</option>
//                     <option value="Branch Y">Branch Y</option>
//                     <option value="Branch Z">Branch Z</option>
//                 </select>

//                 <select
//                     value={filterModules}
//                     onChange={(e) => setFilterModules(e.target.value)}
//                     className="p-2 border border-gray-300 rounded-md w-full md:w-1/4"
//                 >
//                     <option value="">Filter by Modules</option>
//                     <option value="Module 1">Module 1</option>
//                     <option value="Module 2">Module 2</option>
//                     <option value="Module 3">Module 3</option>
//                 </select>
//             </div>

//             {/* Users List */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {filteredUsers.length === 0 ? (
//                     <p className="text-center col-span-full">No users found.</p>
//                 ) : (
//                     filteredUsers.map((user, index) => (
//                         <div key={index} className="bg-white shadow-md rounded-lg p-6">
//                             <div className="flex justify-center mb-4">
//                                 <img
//                                     src={user.profilePhoto || 'https://via.placeholder.com/100'}
//                                     alt="Profile"
//                                     className="w-24 h-24 rounded-full object-cover"
//                                 />
//                             </div>
//                             <h2 className="text-xl font-semibold text-center mb-2">{user.username}</h2>
//                             <p className="text-gray-600 text-center">{user.email}</p>
//                             <div className="mt-4 space-y-2">
//                                 <p className="text-gray-600">
//                                     <span className="font-semibold">Company Access: </span>
//                                     {user.access}
//                                 </p>
//                                 <p className="text-gray-600">
//                                     <span className="font-semibold">Designation: </span>
//                                     {user.designation}
//                                 </p>
//                                 <p className="text-gray-600">
//                                     <span className="font-semibold">Modules Access: </span>
//                                     {user.modules}
//                                 </p>
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>

//             {/* Create Button */}
//             <div className="flex justify-center mt-8">
//                 <button
//                     onClick={handleCreate}
//                     className="bg-yellow-400 py-2 px-6 text-white rounded-md text-lg"
//                 >
//                     Create User
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default UserDashboard;



// src/components/UserDashboard.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    setSearchTerm, setFilterCompany, setFilterDesignation, setFilterModules,
    selectFilteredUsers
} from '../Slices/filterSlice';
import { FaPrint, FaEnvelope, FaDownload, FaUserPlus } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import {RiDeleteBinLine} from "react-icons/ri";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const UserDashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Get filtered users from Redux store
    const users = useSelector(selectFilteredUsers);

    // Local state (you can initialize with filter values from Redux)
    const [searchInput, setSearchInput] = useState('');
    const [companyInput, setCompanyInput] = useState('');
    const [designationInput, setDesignationInput] = useState('');
    const [modulesInput, setModulesInput] = useState('');

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchInput(value);
        dispatch(setSearchTerm(value));
    };

    const handleCompanyChange = (e) => {
        const value = e.target.value;
        setCompanyInput(value);
        dispatch(setFilterCompany(value));
    };

    const handleDesignationChange = (e) => {
        const value = e.target.value;
        setDesignationInput(value);
        dispatch(setFilterDesignation(value));
    };

    const handleModulesChange = (e) => {
        const value = e.target.value;
        setModulesInput(value);
        dispatch(setFilterModules(value));
    };


    // Logic for printing the current page
    const handlePrint = () => {
        window.print();
    };

    // Logic for emailing the current page
    const handleEmail = () => {
        const mailtoLink = `mailto:?subject=User Dashboard&body=Check out the user dashboard: ${window.location.href}`;
        window.location.href = mailtoLink;
    };

    // Logic for downloading the current page as a PDF
    const handleDownloadPDF = () => {
        const dashboard = document.getElementById('user-dashboard');
        html2canvas(dashboard).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
            pdf.save('user_dashboard.pdf');
        });
    };


    function handleCreate() {
        navigate('/first-form');
    }

    return (
        <div className="bg-gray-100 min-h-screen p-5">
            {/* <h1 className="text-3xl font-bold text-center mb-6">User Dashboard</h1> */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">User Dashboard</h1>

                {/* Icons Row */}
                <div className="flex space-x-4">
                    <button
                        onClick={handlePrint}
                        className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full text-xl"
                        title="Print Page"
                    >
                        <FaPrint />
                    </button>
                    <button
                        onClick={handleEmail}
                        className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full text-xl"
                        title="Email Page"
                    >
                        <FaEnvelope />
                    </button>
                    <button
                        onClick={handleDownloadPDF}
                        className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full text-xl"
                        title="Download as PDF"
                    >
                        <FaDownload />
                    </button>
                    <button
                        onClick={handleCreate}
                        className="p-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-full text-xl"
                        title="Add New User"
                    >
                        <FaUserPlus />
                    </button>
                </div>
            </div>




            {/* Filters and Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between items-center">
                <input
                    type="text"
                    placeholder="Search by username"
                    value={searchInput}
                    onChange={handleSearchChange}
                    className="p-2 border border-gray-300 rounded-md w-full md:w-1/4"
                />

                <select
                    value={companyInput}
                    onChange={handleCompanyChange}
                    className="p-2 border border-gray-300 rounded-md w-full md:w-1/4"
                >
                    <option value="">Filter by Company</option>
                    <option value="Client A">Client A</option>
                    <option value="Client B">Client B</option>
                    <option value="Client C">Client C</option>
                </select>

                <select
                    value={designationInput}
                    onChange={handleDesignationChange}
                    className="p-2 border border-gray-300 rounded-md w-full md:w-1/4"
                >
                    <option value="">Filter by Designation</option>
                    <option value="Branch X">Branch X</option>
                    <option value="Branch Y">Branch Y</option>
                    <option value="Branch Z">Branch Z</option>
                </select>

                <select
                    value={modulesInput}
                    onChange={handleModulesChange}
                    className="p-2 border border-gray-300 rounded-md w-full md:w-1/4"
                >
                    <option value="">Filter by Modules</option>
                    <option value="Module 1">Module 1</option>
                    <option value="Module 2">Module 2</option>
                    <option value="Module 3">Module 3</option>
                </select>
            </div>

            {/* Users List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {users.length === 0 ? (
                    <p className="text-center col-span-full">No users found.</p>
                ) : (
                    users.map((user, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-6">
                            <div className="flex justify-center mb-4">
                                <img
                                    src={user.profilePhoto || 'https://via.placeholder.com/100'}
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                            </div>
                            <h2 className="text-xl font-semibold text-center mb-2">{user.username}</h2>
                            <p className="text-gray-600 text-center">{user.email}</p>
                            <div className="mt-4 space-y-2">
                                <p className="text-gray-600">
                                    <span className="font-semibold">Company Access: </span>
                                    {user.access}
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-semibold">Designation: </span>
                                    {user.designation}
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-semibold">Modules Access: </span>
                                    {user.modules}
                                </p>
                            </div>
                            <div className='flex gap-2'>
                                <IoNotificationsOutline className='p-1 text-2xl bg-yellow-500' />
                                <HiOutlineMail className='p-1 text-2xl bg-yellow-500' />
                                <LuPencil className='p-1 text-2xl bg-yellow-500' />
                                <RiDeleteBinLine className='p-1 text-2xl bg-yellow-500' />
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Create Button */}
            <div className="flex justify-center mt-8">
                <button
                    onClick={handleCreate}
                    className="bg-yellow-400 py-2 px-6 text-white rounded-md text-lg"
                >
                    Create User
                </button>
            </div>
        </div>
    );
};

export default UserDashboard;
