import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';
import profilePic from '../../Assets/logo512.png';
import Logo from '../../Assets/TimeReservationLogo2.jpg';
// import { MdClose } from 'react-icons/md';
import './Header.css';

import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  // UilUser,
  // UilBalanceScale,
} from '@iconscout/react-unicons';

const pages = [
  { icon: UilEstate, heading: 'Home', where: '/home' },
  // { icon: UilBalanceScale, heading: 'Compare', where: '/compare' },
  { icon: UilClipboardAlt, heading: 'Features', where: '/features' },
  { icon: UilUsersAlt, heading: 'About', where: '/about' },
];
const settings = ['Logout'];

function HeaderNew() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ background: '#03a9f4' }}>
        <Toolbar disableGutters>
          <NavLink to="/home" style={{ textDecoration: 'none' }}>
            <Avatar
              alt="Logo"
              src={Logo}
              sx={{ width: '100%', height: '75px', padding: '8px' }}
              variant="square"
            />
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              PaperProps={{
                sx: {
                  background: 'grey', // Set the desired background color
                },
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <NavLink
                    to={page.where}
                    key={index}
                    className="menuItem"
                    // activeClassName="active"
                  >
                    {page.heading}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* this is after shorten the length of the header this is the middle of header <Typography
            variant="h5"
            noWrap
            component={NavLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                component={NavLink}
                to={page.where}
                onClick={handleCloseNavMenu}
                sx={{
                  mx: 1,
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  ...(window.location.pathname === page.where && {
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    /* Add any other styles you want for the active button */
                  }),
                }}
              >
                <page.icon />
                {page.heading}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={profilePic} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                // <MenuItem key={setting} onClick={handleLogout}>
                //   <Typography textAlign="center">{setting}</Typography>
                // </MenuItem>
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <NavLink
                    to="/"
                    key={index}
                    // className="menuItem"
                    // activeClassName="active"
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* 
          <Box sx={{ flexGrow: 0, mr: 2 }}>
            <Tooltip title="Notifications">
              <IconButton color="inherit" onClick={toggleNotification}>
                <NotificationsIcon />
              </IconButton>
            </Tooltip>
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
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Profile" src={profilePic} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {pages.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <NavLink
                    to={setting.where}
                    key={index}
                    className="menuItem"
                    activeClassName="active"
                  >
                    {setting.heading}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HeaderNew;
