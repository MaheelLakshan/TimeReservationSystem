import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import reportWebVitals from './reportWebVitals';

import Home from './Pages/HomePage/Home';
import CheckPlaces from './Pages/CheckPlaces/CheckPlaces';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/checks" element={<CheckPlaces />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
