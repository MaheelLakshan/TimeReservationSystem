import React from 'react';
import '../CommonTemplate.css';
import SlideBar from '../../Components/SlideBar/SideBar';
import './guidelines.css';

function Guidelines() {
  return (
    <div className="guidelines-container">
      <h1>Guidelines </h1>
      <ul>

        <li>Register for an account to access the online reservation system.</li>
        <li>Login using your email and password.</li>
        <li>Select the facility you want to reserve, such as a computer center or seminar room.</li>
        <li>Check availability of the facility by selecting the date and time you wish to make the reservation. You will be able to see if the facility is already reserved for that time slot.</li>
        <li>Make a reservation by selecting the date and time slot you want. You may also need to provide additional information, such as the relevant softwares.</li>
        <li>After making a reservation, you will receive a confirmation email with the details of your reservation. Make sure to keep this email for future reference.</li>
        <li>If you need to cancel your reservation, you can do so by logging in to your account and selecting the reservation you want to cancel. You will receive a confirmation email once the cancellation is complete.</li>
        <li>If you want to make off hour reservations you need to contact the administration staff.</li>
        <li>If you have any questions or concerns about the reservation system or the facilities, please contact the appropriate staff member or department for assistance.</li>
      
      </ul>
    </div>
  );
}


function Guideline() {
  return (
    <div className="Common">
      <div className="CommonGlass">
      <SlideBar />
        <Guidelines />
      </div>
    </div>
  );
}



export default Guideline;

