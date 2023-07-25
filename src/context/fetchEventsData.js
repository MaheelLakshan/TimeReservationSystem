import axios from 'axios';

const fetchEventsData = () => {
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
};

export default fetchEventsData;
