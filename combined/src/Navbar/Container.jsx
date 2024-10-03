
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import MainNavbar from './MainNavbar'
import SideNavbar from './SideNavbar'

const Container = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    return (
        <div className="flex">
            <SideNavbar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
            <div className="flex-1">
                <MainNavbar toggleSidebar={toggleSidebar} />
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Container
