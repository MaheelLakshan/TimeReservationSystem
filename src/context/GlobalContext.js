import React from 'react';

const GlobalContext = React.createContext({
  dataSelect: null,
  setDataSelect: (index) => {},
  showPopUp: false,
  setShowPopUp: (index) => {},
  // setRefresh: (index) => {},
  //   reservations: [],
  //   setReservations: (index) => {},
  selectedEvent: [],
  setSelectedEvent: () => {},
  dispatchCalEvent: ({ type, payload }) => {},
  savedEvents: [],
  passStart: null,
  passEnd: null,
  credential: null, // Add the user state object
  setCredential: (index) => {}, // Add the user dispatcher function
});

export default GlobalContext;
