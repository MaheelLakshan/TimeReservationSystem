import { React, useContext, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './AdminCalander.css';
import GlobalContext from '../../context/GlobalContext';
import PopUp from '../PopUp/PopUp';
import AdminClickPopUp from '../PopUp/AdminClickPopUp';

const localizer = momentLocalizer(moment);

const AdminCalander = () => {
  // console.log('check');

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [clickshowPopUp, setClickShowPopUp] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

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
    selectedPlace,
  } = useContext(GlobalContext);

  // const selectedEventDetails = {
  //   id: event.id, // Replace 'id' with the actual property name for the event ID
  //   title: event.title,
  //   // Include other properties you need here
  // };

  const handleSelect = ({ start, end }) => {
    // const title = window.prompt('New Event name');
    setShowPopUp(true);
    setPassStart(start);
    setPassEnd(end);
  };
  const minTime = moment().set({ hour: 7, minute: 30 }).toDate();
  const maxTime = moment().set({ hour: 21, minute: 30 }).toDate();

  const navigate = (date, view) => {
    setDataSelect(date);
  };

  // const mappedEvents = Object.values(savedEvents).map((event) => ({
  //   id: String(event._id),
  //   place: event.place,
  //   createdBy: event.createdBy,
  //   creationTime: event.creationTime,
  //   start: moment(event.start).toDate(),
  //   end: moment(event.end).toDate(),
  //   title: String(event.title),
  // }));
  const mappedEvents = Object.values(savedEvents)
    .filter((event) => event.place === selectedPlace) // Filter events by selected place
    .map((event) => ({
      id: String(event._id),
      place: event.place,
      createdBy: event.createdBy,
      creationTime: event.creationTime,
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
      title: String(event.title),
    }));

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setClickShowPopUp(true);
    setSelectedSlot(event);
  };
  const handleClosePopUp = () => {
    setSelectedEvent(null); // Reset the selected event state
    setShowPopUp(false); // Close the pop-up
    setSelectedSlot(null);
  };

  return (
    <div className="the-calendar">
      {showPopUp && <PopUp />}
      {clickshowPopUp && (
        <AdminClickPopUp event={selectedEvent} onClose={handleClosePopUp} />
      )}
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
        selected={selectedSlot}
        onSelectSlot={handleSelect}
        onSelectEvent={handleEventClick}
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
export default AdminCalander;
