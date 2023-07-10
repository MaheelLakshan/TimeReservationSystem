import './Header.css';
import './HeaderTitles';
import { NavLink, useNavigate } from 'react-router-dom';
import { React, useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import profilePic from '../../Assets/logo512.png';

function Header({ content: ContentComponent }) {
  const [showNotification, setShowNotification] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleLogout = () => {
    // handle logout logic here
    navigate('/login');
  };

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
            <item.icon />

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

        <div className="profile-icon" onClick={toggleProfileMenu}>
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <FaBell />
          {showProfileMenu && (
            <div className="profile-menu">
              <ul>
                <li onClick={handleProfileClick}>Profile</li>
                <li>Notifications</li>
                <li onClick={handleLogout}>Log out</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
