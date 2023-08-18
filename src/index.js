import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import reportWebVitals from './reportWebVitals';

// import Compare from './Pages/HomePage/Home';
import Home from './Pages/Users/HomePage/Home';
import Calander from './Pages/Users/UserCalanderPage/UserCalanderPage';
import Facility from './Pages/Users/FacilitiesPage/Facility';
import About from './Pages/Users/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';

//import admin pages
import UserDetails from './Pages/Admin/AdminUserDetails/AdminUserDetails';
import AdminCalender from './Pages/Admin/AdminCalender/AdminCalender';
import AdminFacilityPage from './Pages/Admin/AdminFacilityPage/AdminFacilityPage';
import AdminAbout from './Pages/Admin/AdminAbout/AdminAbout';

import ContextWrapper from './context/ContextWrapper';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextWrapper>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calander" element={<Calander />} />
        {/* <Route path="/compare" element={<Compare />} /> */}
        <Route path="/facility" element={<Facility />} />
        <Route path="/about" element={<About />} />

        <Route path="/admin-userdetails" element={<UserDetails />} />
        <Route path="/admin-calander" element={<AdminCalender />} />
        <Route path="/admin-facility" element={<AdminFacilityPage />} />
        <Route path="/admin-about" element={<AdminAbout />} />
      </Routes>
    </Router>
  </ContextWrapper>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
