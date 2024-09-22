import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPagination, setFilters } from './actions';
import { FaSearch } from 'react-icons/fa';
import { GoDownload } from 'react-icons/go'
import { Checkbox } from 'rsuite';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './list.css'
const Compliancelist= () => {

    const [activePage, setActivePage] = useState(1); 
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [formData, setFormData] = useState({
        compliance: '',
        nameofform: '',
        typeOfAct: '',
        priority: '',
        frequency: '',
    });

    const handlePageClick = (page) => {
        setActivePage(page);
        handlePageChange(page); // Update pagination in Redux
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(Number(event.target.value));
        setActivePage(1); // Reset to first page on rows per page change
    };
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    // Add fallback for undefined states
    const { complianceList = [], filters = {}, pagination = {} } = useSelector((state) => state.compliance);

    const { compliance = '', nameofform = '', typeOfAct = '', priority = '', frequency = '' } = filters;

    // Handle page change
    const handlePageChange = (page) => {
        dispatch(setPagination({ ...pagination, currentPage: page }));
    };
    const [showMenu,setShowMenu] = useState()
    const menuRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState('');
    const toggleMenu = () => setIsOpen(!isOpen);

    const handleOptionClick = (action) => {
        // alert(option); // Example action on menu option click
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const handleCancel = () => {
        setFormData({
            compliance: '',
            nameofform: '',
            typeOfAct: '',
            priority: '',
            frequency: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Form Data:', formData);
    };
    const handleSearch = () => {
        console.log('Searching for:', searchTerm);
        // Add your search logic here
      };
      

    return (
        <div className="p-6">
            <div className="grid grid-cols-1 px-5 gap-10 lg:grid-cols-2 lg:px-0">
                <div>
                    <h2 className="text-xl font-semibold  ms-2 text-start mb-5">Compliance List</h2>
                </div>
                <div className='flex justify-end'>
                <div className='flex justify-evenly gap-2 me-5'>
                        <button className='rounded-full bg-yellow-500 px-3 text-white'><GoDownload size={15}/></button>
                    </div>
                    <button className="bg-yellow-500  text-white px-4 py-2 rounded">
                        + Add Compliance
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-4 mb-4 pt-5 ">
                <select className="border p-2 pe-4 me-4 rounded" value={compliance} onChange={(e) => dispatch(setFilters({ ...filters, compliance: e.target.value }))}>
                    <option value="">Compliance</option>
               
                </select>

                <select className="border p-2 pe-4 me-4 rounded" value={nameofform} onChange={(e) => dispatch(setFilters({ ...filters, applicationType: e.target.value }))}>
                    <option value="">Name of the form</option>
                
                </select>
                <select className="border p-2 pe-4 me-4 rounded" value={typeOfAct} onChange={(e) => dispatch(setFilters({ ...filters, applicationType: e.target.value }))}>
                    <option value="">Type of act</option>
                  
                </select>
                <select className="border p-2 pe-4 me-4 rounded" value={priority} onChange={(e) => dispatch(setFilters({ ...filters, applicationType: e.target.value }))}>
                    <option value="">Priority</option>
                   
                </select>
                <select className="border p-2 pe-4 me-4 rounded" value={frequency} onChange={(e) => dispatch(setFilters({ ...filters, applicationType: e.target.value }))}>
                    <option value="">Frequency</option>
                
                </select>
                

                <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div className="px-3 text-gray-500">
                        <FaSearch />
                    </div>
                    <input
                        type="text"
                        value={searchTerm}
                        placeholder="Search"
                        onChange={(e) => setSearchTerm(e.target.value)} 
                        className="w-full p-2 focus:outline-none  text-black  placeholder-black-700"
                    />
                </div>
                <div>
                    <img src='images/filter.png' className='ms-5 rounded-lg border flex justify-end' alt='' style={{ width: "px" }} />
                </div>
            </div>


            {/* Compliance List Table */}
            <table className="min-w-full bg-white shadow-md pe-5   rounded-lg overflow-hidden">
                <thead>
                    <tr className="text-left border-b bg-black  text-white">
                        <th className='p-3'>
                        {/* <th className="p-3 "><Checkbox>S.No</Checkbox></th>
                        <th className="p-3">Activity</th>
                        <th className="p-3">Name of the form</th>
                        <th className="p-5">Applicable Low</th>
                        <th className="p-3">Type of Act</th>
                        <th className="p-3">Due Date</th>
                        <th className="p-3">Period</th>
                        <th className="p-3">Section</th>
                        <th className="p-3">Priority</th>
                        <th className="p-3">Action</th> */}

                        {/* Add more columns as needed */}
                        <span class="flex items-center">
                    <Checkbox>S.NO</Checkbox>
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th data-type="date" data-format="YYYY/DD/MM" className='p-3'>
                <span class="flex items-center">
                    Activity
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th className='p-3'>
                <span class="flex items-center">
                    Name of the form
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th className='p-3'>
                <span class="flex items-center">
                    applicable Low
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
                </th>
                <th className='p-3'>
                <span class="flex items-center">
                    type of Act
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
                </th>
                <th>
                <span class="flex items-center">
                    Due Date
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
                </th>
                <th className='p-3'>
                <span class="flex items-center">
                    period
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
                </th>
                <th className='p-3'>
                <span class="flex items-center">
                    section
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
                </th>
                <th className='p-3'>
                <span class="flex items-center">
                    Priority
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
                </th>
                <th className='p-3'>
                <span class="flex items-center">
                    Action
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
                </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='ps-3'>
                            <Checkbox>1</Checkbox>
                        </td>
                        <td className='ps-3'>PF Remittance</td>
                        <td className='ps-3'>PF Challance</td>
                        <td className='ps-3'>Provident Fund & Miscellaneous Act, 1952</td>
                        <td className='ps-3'>Central</td>
                        <td className='ps-3'>15 of every month</td>
                        <td className='ps-3'>Monthly</td>
                        <td className='ps-3'>Payment Receipt</td>
                        <td className='ps-3'>High</td>
                        <td> <div className="three-dot-menu" ref={menuRef}>
                            <div className="three-dot-icon" onClick={toggleMenu} aria-label="More options">
                                <FontAwesomeIcon icon={faEllipsisV} size="lg" />
                            </div>
                            {isOpen && (
                                <div className="menu-popup">
                                    <div className="menu">
                                        <div>
                                        <Link to="/editcompliance" onClick={() => handleOptionClick('Edit')}>
                                            <FontAwesomeIcon icon={faEdit} /> Edit </Link>
                                        </div>
                                        <div >
                                            <Link to="/viewcompliance" onClick={() => handleOptionClick('Details')}>
                                            <FontAwesomeIcon icon={faEye} /> View</Link>
                                        </div>
                                        <div onClick={() => handleOptionClick('Delete')}>
                                            <FontAwesomeIcon icon={faTrash} /> Delete
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div></td>
                    </tr>
                    {complianceList.map((item, index) => (
                        <tr key={index} className="border-b hover:bg-gray-100">
                            <td className="p-4">{item.id}</td>
                            <td className="p-4">{item.activity}</td>
                            <td className="p-4">{item.nameofform}</td>
                            <td className="p-4">{item.typeOfAct}</td>
                            <td className="p-4">{item.priority}</td>
                            <td className="p-4">{item.applicablelow}</td>
                            <td className="p-4">{item.duedate}</td>
                            <td className="p-4">{item.period}</td>
                            <td className="p-4">{item.section}</td>
                            <td className="p-4">{item.action}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <nav aria-label="Page navigation example">
                <ul className="flex -space-x-px text-sm justify-end pt-5 mt-5">

                    {[...Array(5)].map((_, index) => (
                        <li key={index}>
                            <a
                                // href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handlePageClick(index + 1);
                                }}
                                className={`flex items-center justify-center w-10 h-10 leading-tight ${activePage === index + 1 ? 'text-blue-600 bg-blue-50' : 'text-gray-500 bg-white'}  rounded-full hover:bg-gray-100 hover:text-gray-700`}
                            >
                                {index + 1}
                            </a>
                        </li>
                    ))}
                    </ul>
            </nav>

            <div className="flex items-center mb-4 ">                
                <div>
                    <select
                        className="border p-2 rounded "
                        value={rowsPerPage}
                        onChange={handleRowsPerPageChange}>
                        <option value={10}>Show 10</option>
                        <option value={25}>Show 25</option>
                        <option value={50}>Show 50</option>
                        <option value={100}>Show 100</option>
                    </select>
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
            type="button"
            onClick={handleSubmit}
            className="px-8 py-2 bg-yellow-600 text-white rounded"
          >
            Save
          </button>
          </div>
        </div >
        
    );
};

export default Compliancelist;

