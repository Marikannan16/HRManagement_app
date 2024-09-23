// import React, { useState } from 'react'
// import NavbarMain from './NavbarMain'
// import NavbarSide from './NavbarSide'

// const Contain = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     const closeSidebar = () => {
//         setIsSidebarOpen(false);
//     };

//     return (
//         <div className="flex">
//             <div className={` ${isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0'
//                 } transition-transform-w duration-300 ease-in-out h-screen`}>
//                 {/* Sidebar */}
//                 <NavbarSide isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
//             </div>
//             {/* Main Content Area */}
//             <div className="flex-1">
//                 {/* Main Navbar with Toggle */}
//                 <NavbarMain toggleSidebar={toggleSidebar} />

//                 {/* Main Content */}
//                 <div className="p-4">
//                     <h1 className="text-2xl">Main Content Area</h1>
//                     <p>This is where your main content will go.</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Contain




import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import NavbarMain from './NavbarMain';
import NavbarSide from './NavbarSide';

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
            <div className={` ${isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0'
                } transition-transform-w duration-300 ease-in-out h-screen`}>
                <NavbarSide isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
            </div>

            {/* Main Content Area */}
            <div className="flex-1">
                {/* Main Navbar with Toggle */}
                <NavbarMain toggleSidebar={toggleSidebar} />

                {/* Main Content with Nested Routes */}
                <div className="p-4">
                    {/* Outlet will render the child routes */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Contain;
