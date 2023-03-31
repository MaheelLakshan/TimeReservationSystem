import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Profile from './Pages/CommonThingsInSlide/Profile';
import Guidline from './Pages/CommonThingsInSlide/Guidline';

import Home from './Pages/NewCC/Home';
import AllReservations from './Pages/NewCC/AllReservations';
import AddReservations from './Pages/NewCC/AddReservations';
import OffHourReservations from './Pages/NewCC/OffHourReservations';
import MyReservations from './Pages/NewCC/MyReservations';

import Old_Home from './Pages/OldCC/Old_Home';
import Old_AllReservations from './Pages/OldCC/Old_AllReservations';
import Old_AddReservations from './Pages/OldCC/Old_AddReservations';
import Old_OffHourReservations from './Pages/OldCC/Old_OffHourReservations';
import Old_MyReservations from './Pages/OldCC/Old_MyReservations';

import Semi_Home from './Pages/SeminarRoom/Semi_Home';
import Semi_AllReservations from './Pages/SeminarRoom/Semi_AllReservations';
import Semi_AddReservations from './Pages/SeminarRoom/Semi_AddReservations';
import Semi_OffHourReservations from './Pages/SeminarRoom/Semi_OffHourReservations';
import Semi_MyReservations from './Pages/SeminarRoom/Semi_MyReservations';



import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/guidline" element={<Guidline />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/" element={<Home />} />
      <Route path="/allreservation" element={<AllReservations />} />
      <Route path="/addreservation" element={<AddReservations />} />
      <Route path="/offhourreservation" element={<OffHourReservations />} />
      <Route path="/myreservation" element={<MyReservations />} />

      <Route path="/oldcc" element={<Old_Home />} />
      <Route path="/oldccallreservation" element={<Old_AllReservations />} />
      <Route path="/oldccaddreservation" element={<Old_AddReservations />} />
      <Route
        path="/oldccoffhourreservation"
        element={<Old_OffHourReservations />}
      />
      <Route path="/oldccmyreservation" element={<Old_MyReservations />} />

      <Route path="/seminaroom" element={<Semi_Home />} />
{/*Not Working*/}
      <Route exact path="/addreservation/newcc" component={AddReservations} /> 
        <Route exact path="/addreservation/oldcc" component={Old_AddReservations} />
        <Route exact path="/addreservation/seminaroom" component={Semi_AddReservations} />
        <Route exact path="/myreservations" component={MyReservations} />



    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
