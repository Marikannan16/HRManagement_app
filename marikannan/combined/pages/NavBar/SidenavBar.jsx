import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { AiOutlinePieChart } from 'react-icons/ai';
import { FaChevronDown, FaChevronRight, FaRegBell, FaRegUserCircle, FaTimes, FaPlus}  from 'react-icons/fa';
import { TbBuildingSkyscraper, TbReportAnalytics, TbReportSearch } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const SidenavBar = ({ isOpen, closeSidebar }) => {
    const [isComplianceOpen, setIsComplianceOpen] = useState(false);
    const [isReportOpen, setIsReportOpen] = useState(false);

    const toggleComplianceMaster = () => {
        setIsComplianceOpen(!isComplianceOpen);
    };

    const toggleReports = () => {
        setIsReportOpen(!isReportOpen);
    };
    return (
        <div
            className={`fixed top-0 left-0 h-full bg-white shadow-lg border w-64 overflow-y-scroll  transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out z-50`}
        >
            <div className="p-3 flex justify-between  items-center">
                <div className='flex items-center gap-2'>
                    <img src={logo} alt="ENCompliance HR" width={50} />
                    <h3 className="text-sm font-bold">ENCOMPLIANCE HR</h3>
                </div>
                <button
                    className="text-sm"
                    onClick={closeSidebar}
                >
                    <FaTimes />
                </button>
            </div>

            <ul className="space-y-4 mt-6">
                <li className="px-4 py-2 hover:bg-yellow-500 hover:border-black hover:border-e-4 cursor-pointer flex items-center gap-2">
                    <AiOutlinePieChart className='text-2xl ' />
                    Dashboard
                </li>

                <li>
                    <div
                        className="px-4 py-2 cursor-pointer flex items-center justify-between hover:bg-yellow-500 hover:border-black hover:border-e-4"
                        onClick={toggleComplianceMaster}
                    >
                        <div className='flex items-center gap-2'>
                            <TbReportSearch className='text-2xl' />
                            <span>Compliance Master</span>
                        </div>
                        {isComplianceOpen ? <FaChevronDown /> : <FaChevronRight />}
                    </div>

                    {isComplianceOpen && (
                        <ul className="mt-2 space-y-2"><Link to="/compliance">
                            <li className="pl-12 py-1 hover:bg-yellow-500 hover:border-black hover:border-e-4">
                                Compliance
                            </li></Link>
                            <li className="pl-12 py-1 hover:bg-yellow-500 hover:border-black hover:border-e-4">
                                Category
                            </li>
                            <li className="pl-12 py-1 hover:bg-yellow-500 hover:border-black hover:border-e-4">
                                Sub-Category
                            </li>
                        </ul>
                    )}
                </li>

                <li className="px-4 py-2 hover:bg-yellow-500 hover:border-black hover:border-e-4 cursor-pointer flex items-center gap-2">
                    <TbBuildingSkyscraper className='text-2xl' />
                    Company Master
                </li>
                <li className="px-4 py-2 hover:bg-yellow-500 hover:border-black hover:border-e-4 cursor-pointer flex items-center gap-2">
                    <TbReportSearch className='text-2xl' />
                    Compliance Filling <FaPlus className='text-sm ms-4'/>
                </li>
                <li className="px-4 py-2 hover:bg-yellow-500 hover:border-black hover:border-e-4 cursor-pointer flex items-center gap-2">
                    <FaRegUserCircle className='text-xl' />
                    User Management <FaPlus className='text-sm ms-5'/>
                </li>

                <li>
                    <div
                        className="px-4 py-2 cursor-pointer flex items-center justify-between hover:bg-yellow-500 hover:border-black hover:border-e-4"
                        onClick={toggleReports}
                    >
                        <div className='flex items-center gap-2'>
                            <TbReportAnalytics className='text-2xl' />
                            <span>Reports</span>
                        </div>
                        {isReportOpen ? <FaChevronDown /> : <FaChevronRight />}
                    </div>

                    {isReportOpen && (
                        <ul className="mt-2 space-y-2">
                            <li className="pl-12 py-1 hover:bg-yellow-500 hover:border-black hover:border-e-4">
                                Compliance Report
                            </li>
                            <li className="pl-12 py-1 hover:bg-yellow-500 hover:border-black hover:border-e-4">
                                Company Report
                            </li>
                        </ul>
                    )}
                </li>

                <li className="px-4 py-2 hover:bg-yellow-500 hover:border-black hover:border-e-4 cursor-pointer flex items-center gap-2">
                    <FaRegBell className='text-xl' />
                    Notifications
                </li>
            </ul>
        </div>
    );
    //     return (
    //     <div>NavbarSide</div>
    //   )
}

export default SidenavBar
















// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import logo from '../../assets/logo.png'
// import { RiDashboard3Line } from "react-icons/ri";
// import { TbBuildingSkyscraper } from "react-icons/tb";
// import { FaPlus } from "react-icons/fa6";
// import { AiOutlineFileSearch } from "react-icons/ai";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { TbReportAnalytics } from "react-icons/tb";
// import { IoNotificationsOutline } from "react-icons/io5";
// import { IoCloseOutline } from "react-icons/io5";
// import { toggleSideNav } from '../../features/NavbarSlice'
// import { Link } from 'react-router-dom';


// const SideNavbar = () => {
//     const isSideNavOpen = useSelector((state) => state.navbar.isSideNavOpen);
//     const dispatch = useDispatch()
//     let isOkay = false
//     function handleShake() {
//         isOkay = true
//     }
//     return (
//         <div className={`fixed inset-y-0 left-0 transform ${isSideNavOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform bg-white shadow-xl py-4 duration-300 sm:w-2/4 md:w-1/3 lg:w-1/4 xl:w-1/5`}>
//             <div className='flex items-center justify-between gap-2 px-3'>
//                 <div className='flex items-center gap-2'>
//                     <img src={logo} alt="Pic " width={53} height={50} />
//                     <h3 className="text-gray text-sm font-semibold">ENCOMPLIANCE HR</h3>
//                 </div>
//                 <button className='text-lg' onClick={() => { dispatch(toggleSideNav()) }}> <IoCloseOutline /></button>
//             </div>
//             <ul className='py-8'>
//                 <li className="text-gray text-md hover:border-r-4 hover:border-black hover:bg-yellow-500  p-4 rounded-sm flex items-center gap-2 "> <RiDashboard3Line className='text-2xl' />   Dashboard</li>
//                 <li className="text-gray text-md hover:border-r-4 hover:border-black hover:bg-yellow-500  p-4 rounded-sm flex items-center gap-2 "> <TbBuildingSkyscraper className='text-2xl' onClick={handleShake} />Client Management <FaPlus className='ms-5' size={15} /> </li>
//                 <Link to="compliance"><li className="text-gray text-md hover:border-r-4 hover:border-black hover:bg-yellow-500  p-4 rounded-sm flex items-center gap-2 "> <AiOutlineFileSearch className='text-2xl' />Compliance
//                     <ul className={`${isOkay ? 'hidden' : 'block'} hidden`}>
//                         {/* {/* <li>Compliance</li>
//                         / <li>Category
//                             <ul>
//                                 <li>Sub-Category</li>
//                             </ul>
//                         </li>  */}
//                     </ul> 
//                 </li></Link> 
//                 <Link to="user"><li className="text-gray text-md hover:border-r-4 hover:border-black hover:bg-yellow-500  p-4 rounded-sm flex items-center gap-2 "><FaRegCircleUser className='text-2xl'/>User Management</li></Link>
//                 <li className="text-gray text-md hover:border-r-4 hover:border-black hover:bg-yellow-500  p-4 rounded-sm flex items-center gap-2 "><TbReportAnalytics className='text-2xl' />Reports</li>
//                 <li className="text-gray text-md hover:border-r-4 hover:border-black hover:bg-yellow-500  p-4 rounded-sm flex items-center gap-2 "><IoNotificationsOutline className='text-2xl' />Notification</li>

//             </ul>
//         </div>
//     );
// };

// export default SideNavbar;
