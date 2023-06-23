import React from 'react';
import './CheckPlaces.css';
import Header from '../../Components/Header/Header';
import { HeaderTitles } from '../../Components/Header/HeaderTitles';

function CheckPlaces() {
  return (
    <div className="CheckBackground">
      <Header content={HeaderTitles} />
      <div className="CommonGlass">Available features in each places</div>
    </div>
  );
}

export default CheckPlaces;
