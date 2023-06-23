import { React, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './TheCalendar.css';

const localizer = momentLocalizer(moment);

const Thecalendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };
  const minTime = moment().set({ hour: 7, minute: 30 }).toDate();
  const maxTime = moment().set({ hour: 21, minute: 30 }).toDate();

  const place1 = 'check';
  return (
    <div className="the-calendar">
      <Calendar
        localizer={localizer}
        // events={events}
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
