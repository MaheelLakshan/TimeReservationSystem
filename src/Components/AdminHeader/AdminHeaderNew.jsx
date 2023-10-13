import React, { useState, useEffect } from 'react';
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
// import MailIcon from '@mui/icons-material/Mail';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';
import profilePic from '../../Assets/logo512.png';
import Logo from '../../Assets/TimeReservationLogo2.jpg';
// import { MdClose } from 'react-icons/md';
import './AdminHeader.css';
import Paper from '@mui/material/Paper'; // Import Paper component
import List from '@mui/material/List'; // Import List component
import ListItem from '@mui/material/ListItem'; // Import ListItem component
import ListItemIcon from '@mui/material/ListItemIcon'; // Import ListItemIcon component
import ListItemText from '@mui/material/ListItemText'; // I
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon component
import Divider from '@mui/material/Divider';

import {
  // UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilCalender,
  // UilUser,
  // UilBalanceScale,
} from '@iconscout/react-unicons';

const pages = [
  { icon: UilCalender, heading: 'Calender', where: '/admin-calander' },
  {
    icon: UilClipboardAlt,
    heading: 'User Details',
    where: '/admin-userdetails',
  },
  // { icon: UilBalanceScale, heading: 'Compare', where: '/compare' },
  { icon: UilClipboardAlt, heading: 'Facility', where: '/admin-facility' },
  { icon: UilUsersAlt, heading: 'About', where: '/admin-about' },
];
const settings = ['Logout'];

function AdminHeaderNew() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const handleOpenNotification = (event) => {
    setNotificationOpen(true);
  };

  const handleCloseNotification = () => {
    setNotificationOpen(false);
  };

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
  const handleNotificationClick = (event) => {
    // Prevent click event from reaching parent elements
    event.stopPropagation();
  };
  const handleDocumentClick = (event) => {
    if (notificationOpen && !event.target.closest('#notification-dropdown')) {
      handleCloseNotification();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [handleDocumentClick]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ background: '#03a9f4' }}>
        <Toolbar disableGutters>
          <NavLink to="/admin-calander" style={{ textDecoration: 'none' }}>
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

          {/* notification */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                marginRight: '12px',
                position: 'relative',
              }}
            >
              <IconButton
                size="large"
                aria-label="show notifications"
                color="inherit"
                onClick={handleOpenNotification}
              >
                <Badge badgeContent={10} max={99} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              {/* Notification Dropdown */}
              {notificationOpen && (
                <Paper
                  onClick={handleNotificationClick}
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    width: '300px',
                    maxHeight: '300px', // Adjust the maximum height
                    overflowY: 'auto',
                    zIndex: 9999,
                    boxShadow: 2,
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column', // Display notifications in a column
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      padding: '8px',
                    }}
                  >
                    <IconButton onClick={handleCloseNotification}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <Divider variant="middle" /> {/* Add a centered divider */}
                  <List sx={{ flex: 1, overflow: 'auto' }}>
                    {/* Notifications */}
                    <ListItem>
                      <ListItemIcon>
                        <NotificationsIcon />
                      </ListItemIcon>
                      <ListItemText primary="Notification 1" />
                    </ListItem>
                    <Divider variant="inset" /> {/* Add a dividing line */}
                    <ListItem>
                      <ListItemIcon>
                        <NotificationsIcon />
                      </ListItemIcon>
                      <ListItemText primary="Notification 2" />
                    </ListItem>
                    {/* Add more notifications */}
                  </List>
                </Paper>
              )}
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
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <NavLink to="/" key={index}>
                      <Typography textAlign="center">{setting}</Typography>
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AdminHeaderNew;
