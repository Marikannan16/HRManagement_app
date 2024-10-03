import React, { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import SideNavbar from "../Navbar/SideNavbar";
import MainNavbar from "../Navbar/MainNavbar";
import Login from "../login/Login";
import DemoCompany from "../Pages/company/DemoCompany";
import CreateCompany from "../Pages/company/CreateCompany";
import CreateBranch from "../Pages/company/CreateBranch";
import CreateUser from "../Pages/user/CreateUser";
import CreateCompliance from "../Pages/compliance/CreateCompliance";
import ComplianceList from "../Pages/compliance/ComplianceList";
import CreateCategory from "../Pages/category/CreateCategory";
import CreateSubCategory from "../Pages/subCategory/CreateSubCategory";

const ProtectedRoute = ({ isAuth }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <BrowserRouter>
      <div className="flex">
        <div
          className={`shadow-lg ${
            isSidebarOpen ? "translate-x-0 w-60" : "-translate-x-full w-0"
          }
           transition-transform-w duration-300 ease-in-out fixed lg:static`}
        >
          <SideNavbar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        </div>
        <div className="flex-1">
          <MainNavbar toggleSidebar={toggleSidebar} />
          <div className="p-4">
            <Routes>
              <Route path="/home" element={<DemoCompany />}>
                <Route path="/createCompany" element={<CreateCompany />} />
                <Route path="/createBranch" element={<CreateBranch />} />
                <Route path="/createUser" element={<CreateUser />} />
                <Route
                  path="/createCompliance"
                  element={<CreateCompliance />}
                />
                <Route path="/ComplianceList" element={<ComplianceList />} />
                <Route path="/createCategory" element={<CreateCategory />} />
                <Route
                  path="/createSubCategory"
                  element={<CreateSubCategory />}
                />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default ProtectedRoute;
