import React from 'react';
import './AddResFeaturesBar.css';
import SlideBarCalender from '../slidebarCalender/SlideBarCalender';

function Semi_AddResFeaturesBar() {
  return (
    <div className="FMenu">
      <div className="calback">
        <SlideBarCalender />
      </div>
      <div className="Ftopic">Events On selected day</div>
      <div className="alli">
        <div style={{ color: 'white', fontSize: '20px' }}>
          {/* <div>Events</div> */}
          <div style={{ paddingLeft: '5px' }}>
            <li>No events has been allocated yet</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Semi_AddResFeaturesBar;
