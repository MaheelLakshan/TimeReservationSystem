import React, { useState } from 'react';
import './AdminAbout.css';
import HeaderNew from '../../../Components/Header/HeaderNew';
import Modal from 'react-modal';
import{ Container, Row, Col} from 'reactstrap';
import maheelImage from '../../../Assets/maheel.jpg';
import anupamaImage from '../../../Assets/anupama.jpg';
import jeewanthaImage from '../../../Assets/jeewantha.jpg';
import sachiniImage from '../../../Assets/sachini.jpg';
import Subtitle


from '../../../shared/Subtitle';
function About() {
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);

  const developers = [
    {
      name: 'Lakshan R.A.M.',
      image: maheelImage,
      description: '3rd year undergraduate',
      phone: '011223366',
    },
    {
      name: 'Morapitiya M.A.V.',
      image: anupamaImage,
      description: '3rd year undergraduate',
      phone: '011223366',
    },
    {
      name: 'Jeewanatha K.H.C',
      image: jeewanthaImage,
      description: '3rd year undergraduate',
      phone: '011223366',
    },
    {
      name: 'Ranaweera S.C.',
      image: sachiniImage,
      description: '3rd year undergraduate',
      phone: '011223366',
    },
  ];

  const handleDeveloperClick = (index) => {
    setSelectedDeveloper(developers[index]);
  };

  const closeModal = () => {
    setSelectedDeveloper(null);
  };

  return (
    <div className="AboutBackground">
      <HeaderNew />
<Container>
      <div className="TeamSection">
        <h2 className="TeamTitle">
          Meet the Team Behind the Online Reservation System for the IS
          Department
          
        </h2>
      </div>

      <div className="DeveloperPhotos">
        {developers.map((developer, index) => (
          <div
            className="DeveloperPhoto"
            key={index}
            onClick={() => handleDeveloperClick(index)}
          >
            <img src={developer.image} alt={developer.name} />
            <div className="DeveloperName">{developer.name}</div>
          </div>
        ))}
      </div>

      <div className="TeamSection">
        <h3 className="TeamDescription">
          We are a group of developers who are passionate about making it easier
          for students and faculty to reserve common facilities in the IS
          department. Our system is easy to use and secure, and it allows you to
          reserve a facility with just a few clicks.
        </h3>
        <h3 className="TeamDescription">
          We are always looking for ways to improve our system, and we welcome
          your feedback. Thank you for using our system!
        </h3>
        <h3 className="TeamDescription">Contact Us - 0775858582</h3>
      </div>

      <Modal
        isOpen={selectedDeveloper !== null}
        onRequestClose={closeModal}
        className="DeveloperModal"
        overlayClassName="DeveloperModalOverlay"
      >
        <img
          src={selectedDeveloper?.image}
          alt={selectedDeveloper?.name}
          className="DeveloperModalImage"
        />
        <div className="DeveloperInfo">{selectedDeveloper?.name}</div>
        <div className="DeveloperInfo">{selectedDeveloper?.description}</div>
        <div className="DeveloperInfo">{selectedDeveloper?.phone}</div>
        <button className="CloseButton" onClick={closeModal}>
          Close
        </button>
      </Modal>
      </Container>
    </div>
   
  );
}

export default About;
