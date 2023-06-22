import { React } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './TheCalendar.css';

const localizer = momentLocalizer(moment);

const Thecalendar = () => {
  // const [events, setEvents] = useState([]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      // setEvents([...events, { start, end, title }]);
    }
  };

  return (
    <div className="the-calendar">
      <Calendar
        localizer={localizer}
        // events={events}
        defaultView="week"
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelect}
      />
    </div>
  );
};

export default Thecalendar;
