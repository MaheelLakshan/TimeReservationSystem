import './Home.css';
import SideBar from '../../Components/SideBar/SideBar';
import TheCalendar from '../../Components/Calender/Thecalendar';
import Header from '../../Components/Header/Header';
import HeaderNew from '../../Components/Header/HeaderNew';
import { HeaderTitles } from '../../Components/Header/HeaderTitles';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import ContextWrapper from '../../context/ContextWrapper';

function Home() {
  const [selectedPlace, setSelectedPlace] = useState('Old Computer Center');
  const places = ['Old Computer Center', 'New Computer Center', 'Seminar Room'];

  const handlePlaceChange = (place) => {
    setSelectedPlace(place);
  };
  const SearchClick = () => {};

  return (
    <div className="background">
      <HeaderNew />
      <ContextWrapper>
        <div className="fiiltering">
          <div>
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
            <div className="filter-heading">
              <div className="filter-options">
                {places.map((place) => (
                  <button
                    key={place}
                    className={`filter-option ${
                      selectedPlace === place ? 'selected' : ''
                    }`}
                    onClick={() => handlePlaceChange(place)}
                  >
                    {place}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <SideBar />
          </div>
          <div>
            <SideBar />
          </div>
          <div>
            <SideBar />
          </div>
        </div>

        <div className="Glassy">
          <div>
            <TheCalendar />
          </div>
        </div>
      </ContextWrapper>
    </div>
  );
}

export default Home;
