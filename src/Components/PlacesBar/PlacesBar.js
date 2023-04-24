import React, { useState } from 'react';
import './PlacesBar.css';
import { NavLink, useLocation } from 'react-router-dom';

function PlacesBar() {
  const [activePlace, setActivePlace] = useState('');
  const location = useLocation();
  console.log(location);

  function handleClick(place) {
    setActivePlace(place);
  }

  return (
    <div className="placesContainer">
      <NavLink
        to="/newcc"
        // isActive={(match, location) => {
        //   // Define the paths where the NavLink should be active
        //   const activePaths = [
        //     '/',
        //     '/allreservation',
        //     '/myreservations',
        //     '/addreservation',
        //   ];

        //   // Check if the current location matches any of the active paths
        //   return activePaths.includes(location.pathname);
        // }}
        onClick={() => handleClick('newcc')}
        className={({ isActive }) =>
          isActive ? 'tab Normal PlaceActive ' : ' tab Normal'
        }
        // className={`${
        //   activePlace === 'newcc' ? 'tab PlaceActive ' : ' tab Normal'
        // }`}
      >
        New CC
      </NavLink>

      <NavLink
        to="/oldcc"
        onClick={() => handleClick('oldcc')}
        className={({ isActive }) =>
          isActive ? 'tab Normal PlaceActive ' : ' tab Normal'
        }
        // className={`${
        //   activePlace === 'oldcc' ? 'tab PlaceActive ' : ' tab Normal'
        // }`}
      >
        OLD CC
      </NavLink>
      <NavLink
        to="/seminaroom"
        onClick={() => handleClick('seminaroom')}
        className={({ isActive }) =>
          isActive ? 'tab Normal PlaceActive ' : ' tab Normal'
        }
        // className={`${
        //   activePlace === 'seminaroom' ? 'tab PlaceActive ' : ' tab Normal'
        // }`}
      >
        SEMINAR ROOM
      </NavLink>
    </div>
  );
}

export default PlacesBar;
