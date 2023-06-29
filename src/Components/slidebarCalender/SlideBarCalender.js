import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import './SlideBarCalender.css';
import { calanderDateSelect } from '../../context/context';
import { useContext } from 'react';

function SlideBarCalender() {
  const { dataSelect, setDataSelect } = useContext(calanderDateSelect);

  const handleDateChange = (date) => {
    const parsedDate = dayjs(date); // Parse the date string using dayjs
    const formattedDate = parsedDate.format('YYYY-MM-DD'); // Format the date as desired
    setDataSelect(formattedDate);
  };

  return (
    <div className="calsize">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar onChange={handleDateChange} />
      </LocalizationProvider>
    </div>
  );
}

export default SlideBarCalender;
