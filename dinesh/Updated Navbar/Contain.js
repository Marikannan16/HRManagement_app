import React, { useState } from 'react'
import NavbarMain from './NavbarMain'
import NavbarSide from './NavbarSide'

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
            <NavbarSide isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

            {/* Main Content Area */}
            <div className="flex-1">
                {/* Main Navbar with Toggle */}
                <NavbarMain toggleSidebar={toggleSidebar} />

                {/* Main Content */}
                {/* <div className="p-4">
                    <h1 className="text-2xl">Main Content Area</h1>
                    <p>This is where your main content will go.</p>
                </div> */}
            </div>
        </div>
    );
}

export default Contain

