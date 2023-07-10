import React, { useState } from 'react';
import './CheckPlaces.css';
import { Button } from 'reactstrap';
import HeaderNew from '../../Components/Header/HeaderNew';
// import { HeaderTitles } from '../../Components/Header/HeaderTitles';

import img1 from '../../../src/Assets/img1.jpg';
import img2 from '../../../src/Assets/img2.png';
import img3 from '../../../src/Assets/img3.png';
import img4 from '../../../src/Assets/img4.png';
import img5 from '../../../src/Assets/img5.png';
import img6 from '../../../src/Assets/img6.jpg';
import img7 from '../../../src/Assets/img7.jpg';
import img8 from '../../../src/Assets/img8.jpg';

function CheckPlaces() {
  const [selectedPlace, setSelectedPlace] = useState('');
  const [displayBox, setDisplayBox] = useState(false);

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    setDisplayBox(true);
  };

  const renderInfoBox = () => {
    switch (selectedPlace) {
      case 'New Computer Center':
        return (
          <div className="InfoBox">
            <div className="InfoImages">
              <img src={img6} />
              <img src={img3} />
            </div>

            <div className="InfoText">
              <h3>Available Computers: 125</h3>
              <h4>Available Softwares</h4>
            </div>
            <div className="infosoftwares">
              <ul>Microsoft Office</ul>
              <ul>Mathcad</ul>
              <ul></ul>Matlab
              <ul>Finite Element Analysis Software</ul>
              <ul>Computer-Aided Design Software</ul>
              <ul>Python</ul>
              <ul>Rhino</ul>
              <ul>Visual Basic for Applications </ul>
              <ul>Microsoft Excel</ul>
              <ul>ANSYS DesignSpace</ul>
            </div>
          </div>
        );
      case 'Old Computer Center':
        return (
          <div className="InfoBox">
            <div className="InfoImages">
              <img src={img1} />
              <img src={img2} />
              <img src={img4} />
            </div>

            <div className="InfoText">
              <h3>Available Computers: 70</h3>
              <h4>Available Softwares</h4>
            </div>
            <div className="infosoftwares">
              <ul>Microsoft Office</ul>
              <ul>Mathcad</ul>
              <ul></ul>Matlab
              <ul>Finite Element Analysis Software</ul>
              <ul>Computer-Aided Design Software</ul>
              <ul>Python</ul>
              <ul>Rhino</ul>
              <ul>Visual Basic for Applications </ul>
              <ul>Microsoft Excel</ul>
              <ul>ANSYS DesignSpace</ul>
            </div>
          </div>
        );
      case 'Seminar Room':
        return (
          <div className="InfoBox">
            <div className="InfoImages">
              <img src={img8} />
              <img src={img3} />
            </div>

            <div className="InfoText">
              <h3>Seating capacity: 125</h3>
            </div>
            <div className="infoseminar">
              <p>
                Seminar Room which is equipped with audio and video facilities
                and has a seating capacity of 125. Seminar Room is available for
                other departments of the faculty.Reservation has to be made in
                advance with the approval of the Head / Department of
                Interdisciplinary Studies.git checkout dev
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="CheckBackground">
      <HeaderNew />
      <div className="CommonGlass">
        <div className="ButtonRow">
          <Button
            className={`PlaceButton ${
              selectedPlace === 'New Computer Center' ? 'ActiveButton' : ''
            }`}
            onClick={() => handlePlaceClick('New Computer Center')}
          >
            New Computer Center
          </Button>
          <Button
            className={`PlaceButton ${
              selectedPlace === 'Old Computer Center' ? 'ActiveButton' : ''
            }`}
            onClick={() => handlePlaceClick('Old Computer Center')}
          >
            Old Computer Center
          </Button>
          <Button
            className={`PlaceButton ${
              selectedPlace === 'Seminar Room' ? 'ActiveButton' : ''
            }`}
            onClick={() => handlePlaceClick('Seminar Room')}
          >
            Seminar Room
          </Button>
        </div>
        {displayBox && renderInfoBox()}
      </div>
    </div>
  );
}

export default CheckPlaces;
