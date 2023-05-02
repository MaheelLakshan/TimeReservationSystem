import React from 'react';
import './OffResFeaturesBar.css';
import SlideBarCalender from '../slidebarCalender/SlideBarCalender';

function Old_OffResFeaturesBar() {
  return (
    <div className="FMenu">
      <div className="calback">
        <SlideBarCalender />
      </div>
      <div className="Ftopic">Contacts</div>
      <div className="alli">
        <div style={{ color: 'white', fontSize: '20px' }}>
          {/* <div>Events</div> */}
          <div style={{ paddingLeft: '5px' }}>
            <li>Tel : 071 - 34 54 235</li>
            <li>Admin@gmail.com</li>
            <li>IS Department</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Old_OffResFeaturesBar;
