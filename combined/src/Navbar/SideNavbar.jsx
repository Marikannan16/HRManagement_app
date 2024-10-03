import React, { useState } from 'react'
import ENHR from '../Images/ENHR.png'
import { AiOutlinePieChart } from 'react-icons/ai';
import { FaChevronDown, FaChevronRight, FaPlus, FaRegBell, FaRegUserCircle, FaTimes } from 'react-icons/fa';
import { TbBuildingSkyscraper, TbReportAnalytics, TbReportSearch } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const SideNavbar = ({ isOpen, closeSidebar }) => {
    const [isComplianceOpen, setIsComplianceOpen] = useState(false);
    const [isReportOpen, setIsReportOpen] = useState(false);
    const toggleComplianceMaster = () => {
        setIsComplianceOpen(!isComplianceOpen);
    };
    const toggleReports = () => {
        setIsReportOpen(!isReportOpen);
    };
    return (
        <div className={`fixed top-0 left-0 py-3 h-screen bg-white w-60
            transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
            transition-transform duration-300 ease-in-out`}
        >
            <div className="px-3 flex justify-between items-center">
                <div className='flex items-center gap-2'>
                    <img src={ENHR} alt="ENCompliance HR" width={50} />
                    <h3 className="text-sm lg:text-base font-bold">ENCOMPLIANCE HR</h3>
                </div>
                <FaTimes className="text-lg cursor-pointer lg:hidden" onClick={closeSidebar} />
            </div>
            <ul className="space-y-4 mt-6">
                <li className="px-4 py-2 cursor-pointer flex items-center gap-2
                  hover:bg-yellow-600 hover:border-black hover:border-e-4"
                >
                    <AiOutlinePieChart className='text-2xl' /><span>Dashboard</span>
                </li>

                <li>
                    <div
                        className="px-4 py-2 cursor-pointer flex items-center justify-between
                        hover:bg-yellow-600 hover:border-black hover:border-e-4" onClick={toggleComplianceMaster}
                    >
                        <div className='flex items-center gap-2'>
                            <TbReportSearch className='text-2xl' /><span>Compliance Master</span>
                        </div>
                        {isComplianceOpen ? <FaChevronDown /> : <FaChevronRight />}
                    </div>
                    {isComplianceOpen && (
                        <ul className="flex flex-col gap-2">
                            <Link to="/compliance" className="px-12 py-2 flex items-center justify-between hover:bg-yellow-600 hover:border-black hover:border-e-4 cursor-pointer">
                                Compliance<FaPlus className='text-sm' />
                            </Link>
                            <Link to="/category" className="px-12 py-2 flex items-center justify-between hover:bg-yellow-600 hover:border-black hover:border-e-4 cursor-pointer">
                                Category<FaPlus className='text-sm' />
                            </Link>
                            <Link to="/subCategory" className="px-12 py-2 flex items-center justify-between hover:bg-yellow-600 hover:border-black hover:border-e-4 cursor-pointer">
                                Sub-Category<FaPlus className='text-sm' />
                            </Link>
                        </ul>
                    )}
                </li>

                <li>
                    <Link to="/company" className="px-4 py-2 cursor-pointer flex items-center justify-between
                        hover:bg-yellow-600 hover:border-black hover:border-e-4">
                        <div className='flex items-center gap-2'>
                            <TbBuildingSkyscraper className='text-2xl' /><span>Company Master</span>
                        </div>
                        <FaPlus className='text-sm' />
                    </Link>
                </li>

                <li className="px-4 py-2 hover:bg-yellow-600 hover:border-black hover:border-e-4 cursor-pointer flex items-center gap-2">
                    <TbReportSearch className='text-2xl' /><span>Compliance Filling</span>
                </li>

                <li>
                    <Link to="/user" className="px-4 py-2 cursor-pointer flex items-center justify-between
                        hover:bg-yellow-600 hover:border-black hover:border-e-4">
                        <div className='flex items-center gap-2'>
                            <FaRegUserCircle className='text-2xl' />
                            <span>User Management</span>
                        </div>
                        <FaPlus className='text-sm' />
                    </Link>
                </li>

                <li>
                    <div
                        className="px-4 py-2 cursor-pointer flex items-center justify-between
                         hover:bg-yellow-600 hover:border-black hover:border-e-4" onClick={toggleReports}
                    >
                        <div className='flex items-center gap-2'>
                            <TbReportAnalytics className='text-2xl' /><span>Reports</span>
                        </div>
                        {isReportOpen ? <FaChevronDown /> : <FaChevronRight />}
                    </div>
                    {isReportOpen && (
                        <ul className="flex flex-col gap-2">
                            <li className="pl-12 py-2 hover:bg-yellow-600 hover:border-black hover:border-e-4 cursor-pointer">
                                Compliance Report
                            </li>
                            {/* <Link to="/reportcompany"> */}
                            <li className="pl-12 py-2 hover:bg-yellow-600 hover:border-black hover:border-e-4 cursor-pointer">
                                Company Report
                            </li>
                            {/* </Link> */}
                        </ul>
                    )}
                </li>

                <li className="px-4 py-2 hover:bg-yellow-600 hover:border-black hover:border-e-4 cursor-pointer flex items-center gap-2">
                    <FaRegBell className='text-2xl' /><span>Notifications</span>
                </li>
            </ul>
        </div>
    );
}

export default SideNavbar


