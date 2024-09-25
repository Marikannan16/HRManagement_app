import React, { useState } from 'react'
import MainnavBar from './MainnavBar';
import SidenavBar from './SidenavBar';
import { Outlet } from 'react-router-dom';

const Contain = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className={`${isSidebarOpen ? "translate-x-0 w-64" : "-translate-x-full w-0"} transition-transform-w duration-300 ease-in-out h-screen`}>
            <SidenavBar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
            </div>
            {/* Main Content Area */}
            <div className="flex-1">
                {/* Main Navbar with Toggle */}
                <MainnavBar toggleSidebar={toggleSidebar} />

                {/* Main Content */}
                {/* <div className="p-4">
                    <h1 className="text-2xl">Main Content Area</h1>
                    <p>This is where your main content will go.</p>
                </div> */}
                <Outlet/>
            </div>
        </div>
    );
}

export default Contain;
