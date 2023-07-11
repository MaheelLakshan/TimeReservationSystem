import './Compare.css';

import TheCalendar from '../../Components/Calender/Thecalendar';
import HeaderNew from '../../Components/Header/HeaderNew';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import ContextWrapper from '../../context/ContextWrapper';
import SlideBarCalender from '../../Components/SlideCalender/SlideBarCalender';

function Compare() {
  const [selectedPlace, setSelectedPlace] = useState('Old Computer Center');
  const places = ['Old Computer Center', 'New Computer Center', 'Seminar Room'];

  const handlePlaceChange = (place) => {
    setSelectedPlace(place);
  };

  const SearchClick = () => {};
  // const today = dayjs();
  // const nextMonth = dayjs.add(1, 'month').month();
  // const currentMonth = dayjs.month();
  // const today = moment();
  // const nextMonth = today.add(1, 'month').month();
  // const currentMonth = today.month();

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
            <SlideBarCalender />
          </div>
          <div>
            <SlideBarCalender />
          </div>
          <div>
            <SlideBarCalender />
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

export default Compare;
