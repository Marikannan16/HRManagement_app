import React from 'react'
import { FaBars, FaRegBell, FaRegUserCircle } from "react-icons/fa";

const MainnavBar = ({ toggleSidebar }) => {
    return (
        <div className="bg-white shadow-lg text-white py-3 px-3 flex items-center justify-between">
            <FaBars onClick={toggleSidebar} className='cursor-pointer text-2xl rounded bg-yellow-300 p-1 ' />

            <div className="flex gap-2">
                <FaRegBell className='cursor-pointer text-3xl rounded-full bg-yellow-300 p-1' />
                <FaRegUserCircle className='cursor-pointer text-3xl rounded-full bg-yellow-300 p-1' />
            </div>
        </div>
    )
}

export default MainnavBar;












// import React from 'react';
// import { FaBars } from "react-icons/fa6";
// import { IoNotificationsOutline } from "react-icons/io5";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { useDispatch } from 'react-redux';
// import { toggleSideNav } from '../../features/NavbarSlice';


// const MainNavbar = () => {
//     const dispatch = useDispatch();
//     function handleClick() {
//         dispatch(toggleSideNav())
//     }

//     return (

//         <nav className="bg-white shadow-md p-3 flex justify-between items-center ">
//             <FaBars className='cursor-pointer text-xl' onClick={handleClick} />
//             <div className='flex justify-evenly w-20'>
//                 <IoNotificationsOutline className='cursor-pointer text-lg' />
//                 <FaRegCircleUser className='cursor-pointer text-lg' />
//             </div>
//         </nav>
//     );
// };

// export default MainNavbar;
