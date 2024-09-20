import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './Pages/UserForm'
import UserFormView from './Pages/UserFormView';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/first-form" element={<UserForm />} />
        <Route path="/second-form" element={<UserFormView />} />
        <Route path="/" element={<UserForm />} />
      </Routes>
    </Router>
  )
}

export default App