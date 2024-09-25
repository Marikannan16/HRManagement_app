import logo from './logo.svg';
import './App.css';
import MainNavbar from './pages/NavBar/MainnavBar';
import SideNavbar from './pages/NavBar/SidenavBar';
import { BrowserRouter, Outlet,Route,Routes } from 'react-router-dom';
import ComplianceForm from './pages/Compliance pages/ComplianceForm';
import Contain from './pages/NavBar/Contain';
import ViewCompliance from './pages/Compliance pages/View Compliance/ViewCompliance';
import EditCompliance from './pages/Compliance pages/Edit Compliance/EditCompliance';
import Login from './pages/login/login';
import Compliancelist from './pages/Compliance pages/list Compliance/Compliancelist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path='/home' element={<Contain/>}>
          <Route path="/home/compliance" element={<ComplianceForm/>}/>
          <Route path="/home/viewcompliance" element={<ViewCompliance/>}/>
          <Route path="/home/editcompliance" element={<EditCompliance/>}/>
          <Route path="/home/compliancelist" element={<Compliancelist/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}
function NotFound(){
  return(
    <div className='w-screen h-screen '>
      <center><h1 className='text-4xl font-bold my-60'>Page Not Found</h1></center>
    </div>
  );
}

export default App;
