import React from 'react';
import './About.css';
import HeaderNew from '../../Components/Header/HeaderNew';

import maheelImage from '../../Assets/maheel.jpg';
import anupamaImage from '../../Assets/anupama.jpg';
import jeewanthaImage from '../../Assets/jeewantha.jpg';
import sachiniImage from '../../Assets/sachini.jpg';

function CheckPlaces() {
  return (
    <div className="AboutBackground">
      <HeaderNew />

      <div className="TeamSection">
        <h2 className="TeamTitle">Meet the Team Behind the Online Reservation System for the IS Department</h2>
        
      </div>

      <div className="DeveloperPhotos">
        <div className="DeveloperPhoto">
          <img src={maheelImage} alt="Maheel" />
          <div className="DeveloperName">Lakshan R.A.M.</div>
        </div>
        <div className="DeveloperPhoto">
          <img src={anupamaImage} alt="Anupama" />
          <div className="DeveloperName">Morapitiya M.A.V.</div>
        </div>
        <div className="DeveloperPhoto">
          <img src={jeewanthaImage} alt="Jeewantha" />
          <div className="DeveloperName">Jeewanatha K.H.C</div>
        </div>
        <div className="DeveloperPhoto">
          <img src={sachiniImage} alt="Sachini" />
          <div className="DeveloperName">Ranaweera S.C.</div>
        </div>
      </div>

      <div className="TeamSection">
        
        <h3 className="TeamDescription">
          We are a group of developers who are passionate about making it easier for students and faculty to reserve common facilities in the IS department.
          Our system is easy to use and secure, and it allows you to reserve a facility with just a few clicks.
        </h3>
        <h3 className="TeamDescription">
          We are always looking for ways to improve our system, and we welcome your feedback. Thank you for using our system!
        </h3>
        <h3 className="TeamDescription">Contact Us - 0775858582</h3>
      </div>


      

    </div>
  );
}

export default CheckPlaces;
