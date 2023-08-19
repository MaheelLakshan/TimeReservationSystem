import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import Layout from './Components/Layout/Layout';
// import Compare from './Pages/HomePage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import App from "./App";


//import admin pages



const root = ReactDOM.createRoot(document.getElementById('root'));

{/*root.render(
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/calander" element={<Calander />} />
      
      <Route path="/facility" element={<Facility />} />
      <Route path="/about" element={<About />} />

      <Route path="/admin-userdetails" element={<UserDetails />} />
      <Route path="/admin-calander" element={<AdminCalender />} />
      <Route path="/admin-facility" element={<AdminFacilityPage />} />
      <Route path="/admin-about" element={<AdminAbout />} />
    </Routes>
</Router>
);*/}

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

