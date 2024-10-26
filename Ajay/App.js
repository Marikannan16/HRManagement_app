// import React, { useState } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import CreateCompany from './Pages/company/CreateCompany';
// import CreateBranch from './Pages/company/CreateBranch';
// import DemoCompany from './Pages/company/DemoCompany';
// import CreateUser from './Pages/user/CreateUser';
// import CreateCompliance from './Pages/compliance/CreateCompliance';
// import CreateCategory from './Pages/category/CreateCategory';
// import CreateSubCategory from './Pages/subCategory/CreateSubCategory';
// import SideNavbar from './Navbar/SideNavbar';
// import MainNavbar from './Navbar/MainNavbar';

// const App = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//   };
//   return (
//     <BrowserRouter>
//       <div className="flex">
//         <div className={`${isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0'} transition-transition-w duration-300 ease-in-out h-screen`}>
//           <SideNavbar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
//         </div>
//         <div className="flex-1">
//           <MainNavbar toggleSidebar={toggleSidebar} />
//           <div className="p-4">
//             {/* <Outlet /> */}
//             {/* <Container /> */}
//             <Routes>
//               <Route path='/' element={<DemoCompany />} />
//               <Route path='/createCompany' element={<CreateCompany />} />
//               <Route path='/createBranch' element={<CreateBranch />} />
//               <Route path='/createUser' element={<CreateUser />} />
//               <Route path='/createCompliance' element={<CreateCompliance />} />
//               <Route path='/createCategory' element={<CreateCategory />} />
//               <Route path='/createSubCategory' element={<CreateSubCategory />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </BrowserRouter>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateCompany from './Pages/company/CreateCompany';
import CreateBranch from './Pages/company/CreateBranch';
import DemoCompany from './Demo/DemoCompany';
import CreateUser from './Pages/user/CreateUser';
import CreateCompliance from './Pages/compliance/CreateCompliance';
import CreateCategory from './Pages/category/CreateCategory';
import CreateSubCategory from './Pages/subCategory/CreateSubCategory';
import Login from './Pages/Login';
import UserList from './Pages/user/UserList';
import Container from './Navbar/Container';
import EditUser from './Pages/user/EditUser';
import CompanyList from './Pages/company/CompanyList';
import EditCompliance from './Pages/compliance/EditCompliance';
import NatureOfCompliance from './Pages/natureOfCompliance/NatureOfCompliance';
import EditCompliances from './Pages/company/EditCompliances';
import Alpha from './Demo/Alpha';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Container />}>
          <Route path="/home" element={<DemoCompany />} />
          <Route path="/createCompany" element={<CreateCompany />} />
          <Route path="/createBranch" element={<CreateBranch />} />
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/natureOfCompliance" element={<NatureOfCompliance />} />
          <Route path="/createCompliance" element={<CreateCompliance />} />
          <Route path="/editCompliance" element={<EditCompliance />} />
          <Route path="/createCategory" element={<CreateCategory />} />
          <Route path="/createSubCategory" element={<CreateSubCategory />} />
          <Route path='/userList' element={<UserList />} />
          <Route path='/editUser' element={<EditUser />} />
          <Route path='/demo' element={<Alpha />} />
          <Route path='/companyList' element={<CompanyList />} />
          <Route path="/editCompliances" element={<EditCompliances />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
