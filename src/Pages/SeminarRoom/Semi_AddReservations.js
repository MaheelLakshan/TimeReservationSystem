import React,{useState} from 'react';
import '../CommonTemplate.css';
import SlideBar from '../../Components/SlideBar/SideBar';
import PlacesBar from '../../Components/PlacesBar/PlacesBar';
import{Container,Row,Col,Form,FormGroup,Button} from 'reactstrap'
import './../../styles/addreservation.css'






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
        <SlideBar />
        <div className="MainDash">
          <PlacesBar />
          
          <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="from">From:</label>
        <input type="time" id="from" value={from} onChange={(e) => setFrom(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="to">To:</label>
        <input type="time" id="to" value={to} onChange={(e) => setTo(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="details">Details:</label>
        <textarea id="details" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
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

