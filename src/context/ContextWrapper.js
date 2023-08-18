import React, { useEffect, useReducer, useState } from 'react';
import GlobalContext from './GlobalContext';
import savedEventsReducer from './savedEventsReducer';
import fetchEventsData from './fetchEventsData';
// import userReducer from '../Reducer/userReducer';

const initEvents = [];
// const initUser = {
//   isLoggedIn: false,
//   userName: '',
//   userType: '',
//   userEmail: '',
// };

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
  // const [userState, userDispatch] = useReducer(userReducer, initUser); // Initialize user state
  const [credential, setCredential] = useState('');
  const [selectedPlace, setSelectedPlace] = useState('Old Computer Center');

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
        //   userState, // Add the user state to the context
        //   userDispatch, // Add the user dispatcher to the context
        // }}
        credential,
        setCredential,
        selectedPlace,
        setSelectedPlace,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
