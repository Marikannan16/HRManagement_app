// import React from 'react';
// import Viewcompliance from './components/view/viewcompliance';
// import ComplianceForm from './components/ComplianceForm';
// import Compliancelist from './components/list/Compliancelist';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Editcompliance from './components/edit/Editcompliance';

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/complianceform' element={<ComplianceForm />} />
//           <Route path='/' element={<Compliancelist />} />
//           <Route path='/viewcompliance/:sno' element={<Viewcompliance />} />
//           <Route path='/editcompliance/:sno' element={<Editcompliance />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;



// import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './Dashboard/Board1/store';
// import Board from './Dashboard/Board1/Board';

// import Client from './Dashboard/Board2/Client';
// import Admin from './Dashboard/Board3/Admin';
// import Staff from './Dashboard/Board1/Staff'
// function App() {
//   return (
//     // <Provider store={store}>
//       <div>
//         {/* <Board /> */}
//         {/* <Client/> */}
//         {/* <Admin/> */}
//         <Staff/>
//       </div>
//     // </Provider>
//   );
// }
// export default App;


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Staff from './Dashboard/Board1/Staff';
import Client from './Dashboard/Board2/Client';
import Admin from './Dashboard/Board3/Admin';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Staff />} />
          <Route path="/client" element={<Client />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

