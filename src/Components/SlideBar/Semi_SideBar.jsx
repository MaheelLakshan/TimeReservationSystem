import React from 'react';
import './SideBar.css';
// import Logo from '../../Asserts/logo.png';
import { Semi_SidebarData } from '../../Data/Data';

import { NavLink } from 'react-router-dom'; // routers for SideBar not assigned
const SideBar = () => {
  const navLinkStyles = {
    textDecoration: 'none',
    // margin: '0.15rem',
    color: 'black',
  };

  return (
    <div>
      {/* <div className="logo">
        <img src={Logo} alt="logo" />
      </div> */}
      <div className="menu">
        {Semi_SidebarData.map((item, index) => (
          <NavLink
            to={`${item.path}`}
            style={navLinkStyles}
            // className={selected === index ? 'menuItem active' : 'menuItem'}
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
    </div>
  );
};

export default SideBar;
