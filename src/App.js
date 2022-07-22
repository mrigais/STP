import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import ContactUs from './pages/contactus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/contact_us" element={<ContactUs/>} exact />
      </Routes>
    </Router>
  );
}   

export default App;