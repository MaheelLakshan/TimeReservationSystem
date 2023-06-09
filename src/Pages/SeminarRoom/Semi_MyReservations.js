import React, { useState } from 'react';
import '../CommonTemplate.css';
import Semi_SideBar from '../../Components/SlideBar/Semi_SideBar';
import PlacesBar from '../../Components/PlacesBar/PlacesBar';
import './../../styles/myreservations.css';
import { Button, Table } from 'reactstrap';
import Semi_FeaturesBar from '../../Components/FeaturesBar/Semi_FeaturesBar';

const MyReservations = () => {
  const [reservations, setReservations] = useState([
    {
      id: 1,
      date: '2023-04-01',
      from: '10:00',
      to: '11:00',
      details: 'EE5304 Lecture',
    },
    {
      id: 2,
      date: '2023-04-02',
      from: '14:00',
      to: '15:00',
      details: 'EE4301 Lecture',
    },
    {
      id: 3,
      date: '2023-04-03',
      from: '09:00',
      to: '10:30',
      details: 'EE5209 Inclass Evaluation',
    },
    {
      id: 4,
      date: '2023-04-03',
      from: '09:00',
      to: '10:30',
      details: 'EE5303 Mid Evaluation',
    },
  ]);

  const handleEdit = (id) => {
    id.preventDefault();
  };
  const handleDelete = (id) => {
    setReservations(reservations.filter((r) => r.id !== id));
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
              All Your Reservations in Seminar Room
            </h3>
          </div>
          <div>
            <Table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Details</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((r) => (
                  <tr key={r.id}>
                    <td>{r.date}</td>
                    <td>{r.from}</td>
                    <td>{r.to}</td>
                    <td>{r.details}</td>
                    <td>
                      <Button className="bttn" onClick={() => handleEdit(r.id)}>
                        Edit
                      </Button>{' '}
                      <Button
                        className="bttn"
                        onClick={() => handleDelete(r.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        <div className="feat-a">
          <Semi_FeaturesBar />
        </div>
      </div>
    </div>
  );
};

export default MyReservations;
