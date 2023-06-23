import React from 'react';
import './About.css';
import Header from '../../Components/Header/Header';
import { HeaderTitles } from '../../Components/Header/HeaderTitles';

function CheckPlaces() {
  return (
    <div className="AboutBackground">
      <Header content={HeaderTitles} />
      <div className="AboutGlass">About us</div>
    </div>
  );
}

export default CheckPlaces;
