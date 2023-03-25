import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from '../src/Pages/NewCC/Home/Home';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/allreservation" element={<AllReservations />} />
      <Route path="/addreservation" element={<AddReservations />} />
      <Route path="/offhourreservation" element={<OffHourReservations />} />
      <Route path="/myreservation" element={<MyReservations />} />
      <Route path="/profile" element={<Profile />} /> */}
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
