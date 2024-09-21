import React from 'react'
import { FaBars, FaRegBell, FaRegUserCircle } from "react-icons/fa";

const NavbarMain = ({ toggleSidebar }) => {
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

export default NavbarMain




