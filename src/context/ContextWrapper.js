import React, { useEffect, useReducer, useState } from 'react';
import GlobalContext from './GlobalContext';
import savedEventsReducer from './savedEventsReducer';
import fetchEventsData from './fetchEventsData';

const initEvents = [];

export default function ContextWrapper(props) {
  const [dataSelect, setDataSelect] = useState('');
  const [showPopUp, setShowPopUp] = useState(false);
  // const [refresh, setRefresh] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    initEvents
  );
  const [passStart, setPassStart] = useState();
  const [passEnd, setPassEnd] = useState();

  useEffect(() => {
    // Fetch data when the component mounts
    fetchEventsData()
      .then((eventsData) => {
        // if (eventsData.length === savedEvents.length) {
        //   setRefresh(false);
        // }
        dispatchCalEvent({ type: 'SET_EVENTS', payload: eventsData });
      })

      .catch((error) => {
        console.log(error);
      });
  }, [savedEvents]);

  return (
    <GlobalContext.Provider
      value={{
        dataSelect,
        setDataSelect,
        showPopUp,
        setShowPopUp,
        selectedEvent,
        setSelectedEvent,
        dispatchCalEvent,
        savedEvents,
        passStart,
        setPassStart,
        passEnd,
        setPassEnd,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
