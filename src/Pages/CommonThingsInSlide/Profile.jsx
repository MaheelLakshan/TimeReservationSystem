import React, { useState } from 'react';
import '../CommonTemplate.css';
import SlideBar from '../../Components/SlideBar/SideBar';
import './profile.css';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';

function Profile() {
  const [name, setName] = useState('Ranaweera S.C.');
  const [designation, setDesignation] = useState('Ms.');
  const [department, setDepartment] = useState(
    'Department of Electrical and Information Engineering'
  );
  const [modules, setModules] = useState('EE5209, EE5305');
  const [contactNumber, setContactNumber] = useState('0771824684');
  const [emailAddress, setEmailAddress] = useState('ranaweerasc@gmail.com');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleModulesChange = (e) => {
    setModules(e.target.value);
  };

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  const handleEmailAddressChange = (e) => {
    setEmailAddress(e.target.value);
  };

  const handleSave = () => {
    // TODO: Save the updated profile information
    alert('Profile information saved successfully!');
  };

  return (
    <div className="Common">
      <div className="CommonGlass">
        <SlideBar />
        <div className="Profile">
          <div className="formprofile">
            <Form>
              <h1>Profile</h1>
              <div className="formgroupprofile">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>

              <div className="formgroupprofile">
                <label htmlFor="designation">Designation:</label>
                <select
                  id="designation"
                  value={designation}
                  onChange={handleDesignationChange}
                >
                  <option value="Prof.">Prof.</option>
                  <option value="Dr.">Dr.</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Ms.">Ms.</option>
                </select>
              </div>

              <div className="formgroupprofile">
                <label htmlFor="department">Department:</label>
                <select
                  id="department"
                  value={department}
                  onChange={handleDepartmentChange}
                >
                  <option value="Electrical">
                    Department of Electrical and Information Engineering
                  </option>
                  <option value="Civil">
                    Department of Civil and Environmental Engineering
                  </option>
                  <option value="Mechanical">
                    Department of Mechanical and Manufacturing Engineering
                  </option>
                  <option value="IS">
                    Department of Interdisciplinary Studies
                  </option>
                  <option value="Marine">
                    Department of Marine and Naval Architecture
                  </option>
                </select>
              </div>

              <div className="formgroupprofile">
                <label htmlFor="modules">Modules:</label>
                <textarea
                  id="modules"
                  value={modules}
                  onChange={handleModulesChange}
                />
              </div>

              <div className="formgroupprofile">
                <label htmlFor="contactNumber">Contact Number:</label>
                <input
                  type="text"
                  id="contactNumber"
                  value={contactNumber}
                  onChange={handleContactNumberChange}
                />
              </div>

              <div className="formgroupprofile">
                <label htmlFor="emailAddress">Email Address:</label>
                <input
                  type="email"
                  id="emailAddress"
                  value={emailAddress}
                  onChange={handleEmailAddressChange}
                />
              </div>

              <div className="button-container">
                <button onClick={handleSave}>Save</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
