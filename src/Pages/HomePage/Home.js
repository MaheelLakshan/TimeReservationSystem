import './Home.css';
import SideBar from '../../Components/SideBar/SideBar';
import TheCalendar from '../../Components/Calender/Thecalendar';
import Header from '../../Components/Header/Header';
import { HeaderTitles } from '../../Components/Header/HeaderTitles';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { calanderDateSelect } from '../../context/context';
import ModeToggle from '../../Components/modetoggle/ModeToggle';

function Home() {
  const [selectedPlace, setSelectedPlace] = useState('Old Computer Center');
  const places = ['Old Computer Center', 'New Computer Center', 'Seminar Room'];

  const handlePlaceChange = (place) => {
    setSelectedPlace(place);
  };

  const SearchClick = () => {};

  const [dataSelect, setDataSelect] = useState('');

  return (
    <div className="background">
      <Header content={HeaderTitles} />
      <div className="fiiltercolumn">
        <div className="filter-heading">
          <div className="filter-options">
            {places.map((place) => (
              <button
                key={place}
                className={`filter-option ${selectedPlace === place ? 'selected' : ''}`}
                onClick={() => handlePlaceChange(place)}
              >
                {place}
              </button>
            ))}
          </div>
          <div className="searchbar-container">
            <div className="SearchBar">
              <input
                type="text"
                placeholder="Search places"
                className="searchcontainer"
              />
              <div className="searchicon" onClick={SearchClick}>
                <FaSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
      <calanderDateSelect.Provider value={{ dataSelect, setDataSelect }}>
        <div className="Glassy">
          <SideBar />
          <div>
            <TheCalendar />
          </div>
        </div>
      </calanderDateSelect.Provider>
      <ModeToggle />
    </div>
  );
}

export default Home;

