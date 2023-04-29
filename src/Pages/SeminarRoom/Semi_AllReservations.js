import React from 'react';
import '../CommonTemplate.css';
import Semi_SideBar from '../../Components/SlideBar/Semi_SideBar';
import PlacesBar from '../../Components/PlacesBar/PlacesBar';

function AllReservations() {
  return (
    <div className="Common">
      <div className="CommonGlass">
        <Semi_SideBar />
        <div className="MainDash">
          <div>
            <PlacesBar />
            <h3
              style={{
                paddingLeft: '20px',
                color: '#fcc81f',
                background: '#6B6E70',
                marginBottom: '10px',
              }}
            >
              All reservations in Seminar Room
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllReservations;
