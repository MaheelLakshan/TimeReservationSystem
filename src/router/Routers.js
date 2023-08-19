import React from 'react'
import {Routes, Route,Navigate } from 'react-router-dom'
import Home from '../Pages/Users/HomePage/Home';
import About from '../Pages/Users/About/About';
import Facility from '../Pages/Users/FacilitiesPage/Facility';
//import Calendar from '../Pages/Users/UserCalanderPage/UserCalanderPage';
import AdminCalender from '../Pages/Admin/AdminCalender/AdminCalender'; 
import AdminFacilityPage from '../Pages/Admin/AdminFacilityPage/AdminFacilityPage';
import UserCalanderPage from '../Pages/Users/UserCalanderPage/UserCalanderPage';


const Routers = () => {

  return (
    <Routes>
    <Route path='/' element={<Navigate to='/home'/>}/>
    
    <Route path="/home" element={<Home />} />
    <Route path="/calander" element={<UserCalanderPage />} />
    <Route path="/facility" element={<Facility />} />
    <Route path="/about" element={<About />} />
    {/*<Route path="/admin-userdetails" element={<UserDetails />} />*/}
    <Route path="/admin-calander" element={<AdminCalender />} />
    <Route path="/admin-facility" element={<AdminFacilityPage />} />
    {/*<Route path="/admin-about" element={<AdminAbout />} />*/}
  </Routes>
  )
}

export default Routers