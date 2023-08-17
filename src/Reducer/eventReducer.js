// eventsReducer.js

import axios from 'axios';

const initialState = {
  events: [],
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EVENTS':
      return {
        ...state,
        events: action.payload,
      };
    default:
      return state;
  }
};

export default eventsReducer;

// eventActions.js

export const setEvents = (events) => ({
  type: 'SET_EVENTS',
  payload: events,
});

export const fetchEvents = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/events');
      dispatch(setEvents(response.data));
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };
};

export const saveEvent = (event) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/events', event);
      dispatch(fetchEvents());
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };
};
