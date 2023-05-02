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
      <div className="menu">
        {/* <div className="logo">
        <img src={Logo} alt="logo" />
      </div> */}
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
            <div className="iconslidebar">
              <item.icon />
            </div>

            {item.heading}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
