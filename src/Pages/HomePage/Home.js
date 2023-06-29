import './Home.css';
import SideBar from '../../Components/SideBar/SideBar';
import TheCalendar from '../../Components/Calender/Thecalendar';
import Header from '../../Components/Header/Header';
import { HeaderTitles } from '../../Components/Header/HeaderTitles';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { calanderDateSelect } from '../../context/context';

function Home() {
  const [selectedPlace, setSelectedPlace] = useState('Old Computer Center');
  const places = ['Old Computer Center', 'New Computer Center', 'Seminar Room'];

  const handlePlaceChange = (e) => {
    setSelectedPlace(e.target.value);
  };
  const SearchClick = () => {};

  const [dataSelect, setDataSelect] = useState('');

  return (
    <div className="background">
      <Header content={HeaderTitles} />
      <div className="fiiltercolumn">
        <div className="filter-heading">
          <h3>Filter the Reservations have been done in each places</h3>
          <div className="SearchBar">
            <input
              type="text"
              placeholder="Search places"
              className="searchcontainer"
            ></input>
            <div className="searchicon" onClick={SearchClick}>
              <FaSearch />
            </div>
          </div>
        </div>
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
      <calanderDateSelect.Provider value={{ dataSelect, setDataSelect }}>
        <div className="Glassy">
          <SideBar />
          <div>
            <TheCalendar />
          </div>
        </div>
      </calanderDateSelect.Provider>
    </div>
  );
}

export default Home;
