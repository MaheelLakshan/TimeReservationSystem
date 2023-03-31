import React,{useState} from 'react';
import '../CommonTemplate.css';
import SlideBar from '../../Components/SlideBar/SideBar';
import PlacesBar from '../../Components/PlacesBar/PlacesBar';
import './../../styles/myreservations.css'
import { Button, Table } from "reactstrap";


const MyReservations = () => {
  const [reservations, setReservations] = useState([
    { id: 1, date: "2023-04-01", from: "10:00", to: "11:00", details: "EE5304 Lecture" },
    { id: 2, date: "2023-04-02", from: "14:00", to: "15:00", details: "EE4301 Lecture" },
    { id: 3, date: "2023-04-03", from: "09:00", to: "10:30", details: "EE5209 Inclass Evaluation" },
    { id: 4, date: "2023-04-03", from: "09:00", to: "10:30", details: "EE5303 Mid Evaluation" }
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
        <SlideBar />
        <div className="MainDash">
          <PlacesBar />
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
                <Button 
                  color="primary" 
                  style={{ borderRadius: "5px" }} 
                  onClick={() => handleEdit(r.id)}>
                  Edit
                </Button>
                {" "}
                <Button 
                color="danger"
                style={{ borderRadius: "5px" }} 
                onClick={() => handleDelete(r.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
        </div>
      </div>
    </div>
  );
}

export default MyReservations;


