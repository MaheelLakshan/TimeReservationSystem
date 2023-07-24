import { React, useContext, useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './TheCalendar.css';
import GlobalContext from '../../context/GlobalContext';
import PopUp from '../PopUp/PopUp';

const localizer = momentLocalizer(moment);

const Thecalendar = () => {
  const {
    dataSelect,
    setDataSelect,
    showPopUp,
    setShowPopUp,
    savedEvents,
    setPassStart,
    setPassEnd,
    // reservations,
    // setReservations,
  } = useContext(GlobalContext);

  // const [events, setEvents] = useState(savedEvents);

  const handleSelect = ({ start, end }) => {
    // const title = window.prompt('New Event name');
    setShowPopUp(true);
    setPassStart(start);
    setPassEnd(end);

    // const titles = savedEvents[46].title;

    // if (savedEvents) {
    //   setEvents([...events, { start, end, titles }]);
    // }
    // if (reservations) {
    //   setReservations([...reservations, { start, end, reservations }]);
    // }
  };
  const minTime = moment().set({ hour: 7, minute: 30 }).toDate();
  const maxTime = moment().set({ hour: 21, minute: 30 }).toDate();

  const navigate = (date, view) => {
    setDataSelect(date);
  };

  // console.log(savedEvents);
  // console.log(events);

  // const getCustomEvents = () => {
  //   // Logic to generate custom events array
  //   const customEvents = savedEvents.map((event) => ({
  //     start: event.start,
  //     end: event.end,
  //     title: event.title,
  //   }));
  //   return customEvents;
  // };

  // const check = savedEvents.map((event) => ({
  //   start: moment(event.start).toDate(),
  //   end: moment(event.end).toDate(),
  //   title: String(event.title),
  // }));
  const mappedEvents = Object.values(savedEvents).map((event) => ({
    start: moment(event.start).toDate(),
    end: moment(event.end).toDate(),
    title: String(event.title),
  }));

  return (
    <div className="the-calendar">
      {showPopUp && <PopUp />}
      <Calendar
        localizer={localizer}
        events={mappedEvents}
        defaultView="week"
        views={['month', 'week', 'day', 'agenda']}
        min={minTime}
        date={dataSelect}
        max={maxTime}
        step={60}
        timeslots={1}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelect}
        components={{
          toolbar: CustomToolbar,
        }}
        onNavigate={navigate}
      />
    </div>
  );
};

const CustomToolbar = ({ label, onNavigate, view, onView }) => {
  const handleViewChange = (newView) => {
    if (newView !== view) {
      onView(newView);
    }
  };
  const goToBack = () => {
    onNavigate('PREV');
  };

  const goToNext = () => {
    onNavigate('NEXT');
  };

  const goToToday = () => {
    onNavigate('TODAY');
  };

  return (
    <div className="rbc-toolbar">
      <div className="rbc-btn-group rbc-btn-group-left">
        <button type="button" onClick={goToToday}>
          Today
        </button>
        <button type="button" onClick={goToBack}>
          Back
        </button>
        <button type="button" onClick={goToNext}>
          Next
        </button>
      </div>

      <div className="rbc-toolbar-label">{label}</div>

      <div className="rbc-btn-group rbc-btn-group-right">
        <button
          type="button"
          className={view === 'month' ? 'active' : ''}
          onClick={() => handleViewChange('month')}
        >
          Month
        </button>
        <button
          type="button"
          className={view === 'week' ? 'active' : ''}
          onClick={() => handleViewChange('week')}
        >
          Week
        </button>
        <button
          type="button"
          className={view === 'day' ? 'active' : ''}
          onClick={() => handleViewChange('day')}
        >
          Day
        </button>
        <button
          type="button"
          className={view === 'agenda' ? 'active' : ''}
          onClick={() => handleViewChange('agenda')}
        >
          Agenda
        </button>
      </div>
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
