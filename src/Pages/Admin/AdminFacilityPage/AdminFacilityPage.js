import React, { useState } from 'react';
import './AdminFacilityPage.css';
import { Button } from 'reactstrap';
import HeaderNew from '../../../Components/Header/HeaderNew';
import Subtitle from '../../../shared/Subtitle';
// import img1 from '../../../Assets/img1.jpg';
// import img2 from '../../../Assets/img2.png';
// import img3 from '../../../Assets/img3.png';
import img6 from '../../../Assets/img6.jpg';
import img4 from '../../../Assets/img4.png';
// import img5 from '../../../Assets/img5.png';
// import img7 from '../../../Assets/img7.jpg';
import img8 from '../../../Assets/img8.jpg';

function Facility() {
  const [selectedPlace, setSelectedPlace] = useState('');
  const [displayBox, setDisplayBox] = useState(false);

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    setDisplayBox(true);
  };

  return (
    <div className="CheckPlacesContainer">
      <HeaderNew />
      <div className="CheckBackground">
        
          <div className="BoxContainer">
            <div className="PlaceBox">
            <Subtitle subtitle={'New Computer Center '}/>
              <div className="InfoImages">
                <img src={img6} alt="Computer Center" />
              </div>
              <div className="InfoText">
                <h3>Available Computers: 125</h3>
                <h4>Available Software</h4>
                <ul className="infosoftwares">
                  <li>Microsoft Office</li>
                  <li>Mathcad</li>
                  <li>Matlab</li>
                  <li>Python</li>
                  <li>Rhino</li>
                  <li>Microsoft Excel</li>
                </ul>
              </div>
              <Button className="EditButton" color="primary">
                Request a new software
              </Button>
            </div>

            <div className="PlaceBox">
            <Subtitle subtitle={'Old Computer Center '}/>
              <div className="InfoImages">
                <img src={img4} alt="Computer Center" />
              </div>
              <div className="InfoText">
                <h3>Available Computers: 70</h3>
                <h4>Available Software</h4>
                <ul className="infosoftwares">
                  <li>Microsoft Office</li>
                  <li>Mathcad</li>
                  <li>Matlab</li>
                  <li>Python</li>
                  <li>Rhino</li>
                  <li>Microsoft Excel</li>
                </ul>
              </div>
              <Button className="EditButton" color="primary">
                Request a new software
              </Button>
            </div>

            <div className="PlaceBox">
            <Subtitle subtitle={'Seminar Room'}/>
              <div className="InfoImages">
                <img src={img8} alt="Seminar Room" />
              </div>
              <div className="InfoText">
                <h3>Seating Capacity: 125</h3>
                <div className="infoseminar">
                  <p>
                    Seminar Room is equipped with audio and video facilities and
                    has a seating capacity of 125. It is available for other
                    departments of the faculty. Reservation has to be made in
                    advance with the approval of the Head/Department of
                    Interdisciplinary Studies.
                  </p>
                </div>
              </div>
              <Button className="EditButton" color="primary">
                Request a new software
              </Button>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default Facility;
