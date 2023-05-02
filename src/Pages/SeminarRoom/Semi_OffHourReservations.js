import React, { useState } from 'react';
import '../CommonTemplate.css';
import Semi_SideBar from '../../Components/SlideBar/Semi_SideBar';
import PlacesBar from '../../Components/PlacesBar/PlacesBar';
import Semi_FeaturesBar from '../../Components/FeaturesBar/Semi_FeaturesBar';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import './../../styles/offhourreservations.css';
import Semi_OffResFeaturesBar from '../../Components/OffResFeaturesBar/Semi_OffResFeaturesBar';

function Semi_OffHourReservations() {
  const [title, setTitle] = useState('');
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
              Make a Off-Hour reservation in Seminar Room
            </h3>
          </div>
          <div>
            <h4>
              For Off Hour reservations you need to contact the administration
              staff
            </h4>
          </div>
          <div className="formoffhour">
            <Form onSubmit={handleSubmit}>
              <div className="formgroupoffhour">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="formgroupoffhour">
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="formgroupoffhour">
                <label htmlFor="from">From:</label>
                <input
                  type="time"
                  id="from"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
              </div>
              <div className="formgroupoffhour">
                <label htmlFor="to">To:</label>
                <input
                  type="time"
                  id="to"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
              </div>
              <div className="formgroupoffhour">
                <label htmlFor="details">Details:</label>
                <textarea
                  id="details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                ></textarea>
              </div>

              <Button className="btn_send">Send</Button>
            </Form>
          </div>
        </div>
        <div className="feat-a">
          <Semi_OffResFeaturesBar />
        </div>
      </div>
    </div>
  );
}

export default Semi_OffHourReservations;
