import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import reportWebVitals from './reportWebVitals';

// import Compare from './Pages/HomePage/Home';
import Home from './Pages/HomePage/Home';
import Features from './Pages/FeaturesPage/Features';
import About from './Pages/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/compare" element={<Compare />} /> */}
      <Route path="/features" element={<Features />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
