import React, { useState } from 'react';
import '../CommonTemplate.css';
import Old_SideBar from '../../Components/SlideBar/Old_SideBar';
import PlacesBar from '../../Components/PlacesBar/PlacesBar';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import './../../styles/addreservation.css';

function AddReservations() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <div className="Common">
      <div className="CommonGlass">
        <Old_SideBar />
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
              Make a reservation in OLD CC
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="from">From:</label>
              <input
                type="time"
                id="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="to">To:</label>
              <input
                type="time"
                id="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="details">Details:</label>
              <textarea
                id="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              ></textarea>
            </div>
            <div className="button-container">
              <button type="submit">Add Reservation</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddReservations;
