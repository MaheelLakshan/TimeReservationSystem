import React, { useEffect, useReducer, useState } from 'react';
import GlobalContext from './GlobalContext';
import axios from 'axios';

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case 'SET_EVENTS':
      // When the action type is 'SET_EVENTS', update the state with the new events data
      return payload;
    case 'push':
      axios
        .post('http://localhost:5000/api/events', payload)
        .then((response) => {
          return [...state, response.data];
        })
        .catch((error) => {
          console.error('Error adding reservation:', error);
          // Return the existing state without any modifications on error
          return state;
        });

      return state;
    case 'update':
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case 'delete':
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}
function fetchEventsData() {
  return axios
    .get('http://localhost:5000/api/events')
    .then((response) => {
      // Handle the response here
      const eventsData = response.data;
      // Now you have the data from the API and can use it as needed
      return eventsData;
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error('Error fetching events:', error);
      throw error; // Re-throw the error to propagate it further if needed
    });
}
// function initEvents() {
//   const storageEvents = localStorage.getItem('savedEvents');
//   const parsedEvents = storageEvents ? storageEvents : [];
//   return parsedEvents;
// }
const initEvents = [];

export default function ContextWrapper(props) {
  const [dataSelect, setDataSelect] = useState('');
  const [showPopUp, setShowPopUp] = useState(false);
  const [reservations, setReservations] = useState([]);
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
        // Dispatch the events data to the reducer
        dispatchCalEvent({ type: 'SET_EVENTS', payload: eventsData });
      })
      .catch((error) => {
        // Handle any errors that occurred during data fetching
        // You can show an error message or take appropriate action here
      });
  }, [savedEvents]);

  // useEffect(() => {
  //   // localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  // }, [savedEvents]);

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
