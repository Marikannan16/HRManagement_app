import logo from './logo.svg';
import './App.css';
import MainNavbar from './pages/NavBar/MainnavBar';
import SideNavbar from './pages/NavBar/SidenavBar';
import { BrowserRouter, Outlet,Route,Routes } from 'react-router-dom';
import UserForm from './pages/User Management/UserForm';
import ComplianceForm from './pages/Compliance pages/ComplianceForm';
import Dashcom from './pages/Compliance pages/Dashcom';
import Contain from './pages/NavBar/Contain';
import ViewCompliance from './pages/Compliance pages/View Compliance/ViewCompliance';
import EditCompliance from './pages/Compliance pages/Edit Compliance/EditCompliance';
import TableData from './components/compliance/TableData';
import Login from './pages/login/login';
import Compliancelist from './pages/Compliance pages/list Compliance/Compliancelist';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/login" element={<Login/>}/>
        <Route path='/' element={<Contain/>}>
          <Route path='/user/' element={<UserForm/>}/>
          <Route path="/compliance" element={<ComplianceForm/>}/>
          <Route path="/viewcompliance" element={<ViewCompliance/>}/>
          <Route path="/editcompliance" element={<EditCompliance/>}/>
          <Route path="/compliancelist" element={<Compliancelist/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}
// function Layout(){
//   return(
//     <div>
//       <Contain/>
//       <Outlet/>
//     </div>
//   );
// }
export default App;
