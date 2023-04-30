import React, { useState } from 'react';
import '../CommonTemplate.css';
import Semi_SideBar from '../../Components/SlideBar/Semi_SideBar';
import PlacesBar from '../../Components/PlacesBar/PlacesBar';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import './../../styles/addreservation.css';

function AddReservations() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [details, setDetails] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isRecurring) {
      // Make recurring reservations
      let currDate = new Date(date);
      let end = new Date(endDate);
      while (currDate <= end) {
        // Make a reservation for the current date
        // code to make the reservation goes here
        currDate.setDate(currDate.getDate() + 7); // Increment the date by 7 days for weekly recurrence
      }
    } else {
      // Make a one-time reservation
      // code to make the reservation goes here
    }
  };

  return (
    <div className="Common">
      <div className="CommonGlass">
      <Semi_SideBar />
        <div className="MainDash">
          <PlacesBar />

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
            <div className="form-group">
              <label htmlFor="isRecurring">Make weekly recurring reservation here:</label>
              <input
                type="checkbox"
                id="isRecurring"
                checked={isRecurring}
                onChange={(e) => setIsRecurring(e.target.checked)}
              />
            </div>
            {isRecurring && (
              <div className="form-group">
                <label htmlFor="endDate">End date:</label>
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            )}
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



/*import React, { useState } from 'react';
import '../CommonTemplate.css';
import Semi_SideBar from '../../Components/SlideBar/Semi_SideBar';
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
  };

  return (
    <div className="Common">
      <div className="CommonGlass">
        <Semi_SideBar />
        <div className="MainDash">
          <PlacesBar />

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
*/