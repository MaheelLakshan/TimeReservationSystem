import axios from 'axios';

const savedEventsReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_EVENTS':
      // When the action type is 'SET_EVENTS', update the state with the new events data
      return payload;
    case 'push':
      axios
        .post('https://timereservationsystem.onrender.com/api/events', payload)
        .then((response) => {
          return [...state, response.data];
        })
        .catch((error) => {
          alert('Selected Time already have been selected');
          console.error('Error adding reservation:', error);
          // Return the existing state without any modifications on error
          return state;
        });

      return state;

    case 'update':
      return state.map((evt) => (evt.id === payload.id ? payload : evt));

    case 'deleteEvent':
      try {
        axios.delete(
          `https://timereservationsystem.onrender.com/api/events/${payload}`
        );
        return state.filter((evt) => evt.id !== payload);
      } catch (error) {
        console.error('Error deleting event:', error);
        return state;
      }
    default:
      throw new Error();
  }
};

export default savedEventsReducer;

// const handleDeleteClick = async (id) => {
//   // Delete the user from the database
//   try {
//     await axios.delete(`https://timereservationsystem.onrender.com/deleteUser/${id}`);
//     fetchUsersData(); // Fetch data again to get the updated records from the server
//   } catch (error) {
//     console.log(error);
//   }
// };
