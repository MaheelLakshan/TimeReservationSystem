// import React from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import './TheCalendar.css';

// const localizer = momentLocalizer(moment);

// const CustomToolbar = ({ label, onView, onNavigate, views }) => {
//   const handleViewChange = (view) => {
//     if (onView) {
//       onView(view);
//     }
//   };

//   const handleNavigate = (action) => {
//     if (onNavigate) {
//       onNavigate(action);
//     }
//   };

//   const formattedDate = moment(label).format('MM/DD/YYYY');
//   const toolbarText = `Reservations in place1 at ${formattedDate}`;

//   return (
//     <div className="rbc-toolbar">
//       <span className="rbc-toolbar-label">{toolbarText}</span>
//       <div className="rbc-btn-group">
//         {views.map((view, index) => (
//           <button
//             key={index}
//             type="button"
//             className="rbc-btn-nav"
//             onClick={() => handleViewChange(view)}
//           >
//             {view}
//           </button>
//         ))}
//       </div>
//       <div className="rbc-btn-group">
//         <button
//           type="button"
//           className="rbc-btn-nav rbc-btn-prev"
//           onClick={() => handleNavigate('PREV')}
//         >
//           Prev
//         </button>
//         <button
//           type="button"
//           className="rbc-btn-nav rbc-btn-next"
//           onClick={() => handleNavigate('NEXT')}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// const TheCalendar = () => {
//   return (
//     <div className="the-calendar">
//       <Calendar
//         localizer={localizer}
//         defaultView="month"
//         components={{
//           toolbar: CustomToolbar,
//         }}
//       />
//     </div>
//   );
// };

// export default TheCalendar;
