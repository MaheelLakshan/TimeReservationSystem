import './Header.css';
import { NavLink } from 'react-router-dom';
import { React, useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import profilePic from '../../Assets/logo512.png';

function Header({ content: ContentComponent }) {
  const [showNotification, setShowNotification] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  // const handleLogout = () => {
  //   // handle logout logic here
  // };

  return (
    <div className="menu">
      <div className="header-left">
        {ContentComponent.map((item, index) => (
          <NavLink
            to={`${item.where}`}
            key={index}
            className={({ isActive }) =>
              isActive ? 'menuItem active' : 'menuItem'
            }
          >
            {/* <item.icon /> */}

            {item.heading}
          </NavLink>
        ))}
      </div>

      <div className="header-right">
        <div className="notification-icon" onClick={toggleNotification}>
          <FaBell />
          {showNotification && (
            <div className="notification-window">
              <div className="notification-header">
                <h3>Notifications</h3>
                <button onClick={toggleNotification}>
                  <MdClose className="close" />
                </button>
              </div>
              <ul>
                <li>Notification 1</li>
                <li>Notification 2</li>
                <li>Notification 3</li>
              </ul>
            </div>
          )}
        </div>

        <div className="profile-pic" onClick={toggleLogout}>
          <img src={profilePic} alt="Pro" />
          {showLogout && (
            <div className="logout-window">
              <h3>Log out?</h3>
              <div className="logout-buttons">
                {/* <button onClick={handleLogout}>Yes</button> */}
                <NavLink to="/" activeClassName="active" onClick={toggleLogout}>
                  Yes
                </NavLink>
                <button onClick={toggleLogout}>No</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;

// <div className="cart-icon" onClick={toggleCart}>
//           {/* <img src={cartIcon} alt="Cart Icon" /> */}
//           <FaShoppingCart />
//           {showCart && (
//             <div className="cart-window">
//               <div className="cart-header">
//                 <h3>Cart</h3>
//                 <button onClick={toggleCart}>
//                   <MdClose className="close" />
//                 </button>
//               </div>
//               <ul>
//                 <li>Item 1</li>
//                 <li>Item 2</li>
//                 <li>Item 3</li>
//               </ul>
//             </div>
//           )}
//         </div>
