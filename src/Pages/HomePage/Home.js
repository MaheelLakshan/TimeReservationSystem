import './Home.css';
import SideBar from '../../Components/SideBar/SideBar';
import TheCalendar from '../../Components/Calender/Thecalendar';
import Header from '../../Components/Header/Header';
import { HeaderTitles } from '../../Components/Header/HeaderTitles';
import React, { useState } from 'react';

function Home() {
  const [selectedPlace, setSelectedPlace] = useState('');

  const places = ['Old Computer Center', 'New Computer Center', 'Seminar Room'];

  const handlePlaceChange = (e) => {
    setSelectedPlace(e.target.value);
  };

  return (
    <div className="background">
      <Header content={HeaderTitles} />
      <div className="Glassy">
        <SideBar />
        <div className="Calender">
          <div>
            <h3 className="filter-heading">
              Filter the Reservations have been done in each places
            </h3>
            <div className="filter">
              {places.map((place) => (
                <label key={place} className="filter-option">
                  <input
                    type="radio"
                    value={place}
                    checked={selectedPlace === place}
                    onChange={handlePlaceChange}
                  />
                  <div className="places">{place}</div>
                </label>
              ))}
            </div>
          </div>
          <div>
            <TheCalendar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
