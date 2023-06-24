import { React, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './TheCalendar.css';

const localizer = momentLocalizer(moment);

const Thecalendar = () => {
  // const [events, setEvents] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  // const [reservationData, setReservationData] = useState({
  //   title: '',
  //   place: '',
  //   description: '',
  // });

  // const handleSelect = ({ start, end }) => {
  //   const defaultStartTime = moment(start).format('HH:mm');
  //   const defaultDate = moment(start).format('YYYY-MM-DD');
  //   setShowModal(true);
  //   setReservationData({
  //     ...reservationData,
  //     start: `${defaultDate} ${defaultStartTime}`,
  //     end: moment(end).format('YYYY-MM-DD HH:mm'),
  //   });
  // };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setReservationData({ ...reservationData, [name]: value });
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   setEvents([...events, reservationData]);
  //   setShowModal(false);
  //   setReservationData({
  //     title: '',
  //     place: '',
  //     description: '',
  //   });
  // };

  const [events, setEvents] = useState([]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };
  const minTime = moment().set({ hour: 7, minute: 30 }).toDate();
  const maxTime = moment().set({ hour: 21, minute: 30 }).toDate();
  return (
    <div className="the-calendar">
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="week"
        min={minTime}
        max={maxTime}
        step={60}
        timeslots={1}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelect}
      />
    </div>
  );
};

export default Thecalendar;

// {showModal && (
//   <div className="modal-overlay">
//     <div className="modal">
//       <h2>Add Reservation</h2>
//       <form onSubmit={handleFormSubmit}>
//         <label>
//           Title:
//           <input
//             type="text"
//             name="title"
//             value={reservationData.title}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           Place:
//           <input
//             type="text"
//             name="place"
//             value={reservationData.place}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           Description:
//           <textarea
//             name="description"
//             value={reservationData.description}
//             onChange={handleInputChange}
//           />
//         </label>
//         <div className="modal-buttons">
//           <button type="submit">Add Reservation</button>
//           <button type="button" onClick={() => setShowModal(false)}>
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// )}
