import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateCompany from './Pages/company/CreateCompany';
import CreateBranch from './Pages/company/CreateBranch';
import DemoCompany from './Pages/company/DemoCompany';
import CreateUser from './Pages/user/CreateUser';
import CreateCompliance from './Pages/compliance/CreateCompliance';
import CreateCategory from './Pages/category/CreateCategory';
import CreateSubCategory from './Pages/subCategory/CreateSubCategory';
import SideNavbar from './Navbar/SideNavbar';
import MainNavbar from './Navbar/MainNavbar';
import Login from './login/Login';
import ProtectedRoute from './Components/ProtectedRoutes';
import ComplianceList from './Pages/compliance/ComplianceList';
import Outlets from './Navbar/Outlets';
import CompanywiseReport from './Pages/Reports/CompanyWiseReport';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <BrowserRouter>
      {/* <div className="flex">
        <div
          className={`shadow-lg ${isSidebarOpen ? 'translate-x-0 w-60' : '-translate-x-full w-0'}
           transition-transform-w duration-300 ease-in-out fixed lg:static`}
        >
          <SideNavbar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        </div>
        <div className="flex-1">
          <MainNavbar toggleSidebar={toggleSidebar} />
          <div className="p-4"> */}
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route element={<Outlets />}>
                <Route path="/home" element={<DemoCompany/>}/>
                <Route path="/company" element={<CreateCompany />} />
                <Route path="/branch" element={<CreateBranch />} />
                <Route path="/user" element={<CreateUser />} />
                <Route path="/compliance" element={<CreateCompliance />} />
                <Route path="/compliancelist" element={<ComplianceList/>}/>
                <Route path="/complianceList" element={<ComplianceList/>} />
                <Route path="/category" element={<CreateCategory />} />
                <Route path="/subCategory" element={<CreateSubCategory />} />
                {/* <Route path="/reportCompany" element={<CompanywiseReport/>}/> */}
              </Route>
            </Routes>
          {/* </div>
        </div>
      </div> */}
    </BrowserRouter>
  );
};

export default App;
