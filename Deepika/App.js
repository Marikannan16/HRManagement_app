// src/App.js
import React from 'react';
import Viewcompliance from './components/view/viewcompliance';
import ComplianceForm from './components/ComplianceForm';
import Compliancelist from './components/list/Compliancelist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditCompliance from './components/edit/Editcompliance'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/complianceform' element={<ComplianceForm/>}/>
        <Route path='/' element={<Compliancelist/>}/>
        <Route path='/viewcompliance' element={<Viewcompliance/>}/>
        <Route path='/editcompliance' element={<EditCompliance/>}/>

      </Routes>
      </BrowserRouter>
     {/* <EditCompliance /> */}
        {/* <Viewcompliance /> */}
    </div>
  );
};

export default App;
