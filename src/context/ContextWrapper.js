import React, { useEffect, useReducer, useState } from 'react';
import GlobalContext from './GlobalContext';

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case 'push':
      return [...state, payload];
    case 'update':
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case 'delete':
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

function initEvents() {
  const storageEvents = localStorage.getItem('savedEvents');
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

export default function ContextWrapper(props) {
  const [dataSelect, setDataSelect] = useState('');
  const [showPopUp, setShowPopUp] = useState(false);
  const [reservations, setReservations] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );
  const [passStart, setPassStart] = useState();
  const [passEnd, setPassEnd] = useState();

  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  }, [savedEvents]);

  return (
    <GlobalContext.Provider
      value={{
        dataSelect,
        setDataSelect,
        showPopUp,
        setShowPopUp,
        // reservations,
        // setReservations,
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
