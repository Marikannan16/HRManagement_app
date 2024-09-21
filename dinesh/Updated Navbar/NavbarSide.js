import React, { useState } from 'react'
import logo from './images/logo.png'
import { AiOutlinePieChart } from 'react-icons/ai';
import { FaChevronDown, FaChevronRight, FaRegBell, FaRegUserCircle, FaTimes, FaPlus}  from 'react-icons/fa';
import { TbBuildingSkyscraper, TbReportAnalytics, TbReportSearch } from 'react-icons/tb';

const NavbarSide = ({ isOpen, closeSidebar }) => {
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
                } transition-transform duration-300 ease-in-out`}
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
                        <ul className="mt-2 space-y-2">
                            <li className="pl-12 py-1 hover:bg-yellow-500 hover:border-black hover:border-e-4">
                                Compliance
                            </li>
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

export default NavbarSide


