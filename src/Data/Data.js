// Sidebar imports
import {
  UilThLarge,
  UilUser,
  UilUserSquare,
  UilChart,
  UilPlusSquare,
  UilHospitalSquareSign,
  UilSignOutAlt,
  UilCompass,
} from '@iconscout/react-unicons';

// Sidebar Data
export const SidebarData = [
  {
    icon: UilHospitalSquareSign,
    heading: 'Home',
    path: '/',
  },
  {
    icon: UilThLarge,
    heading: 'All Reservations',
    path: '/allreservation',
  },
  {
    icon: UilPlusSquare,
    heading: 'Add Reservations',
    path: '/addreservation',
  },
  {
    icon: UilChart,
    heading: 'Off Hour Reservations',
    path: '/offhourreservation',
  },
  {
    icon: UilUserSquare,
    heading: 'My Reservations',
    path: '/myreservation',
  },
  {
    icon: UilUser,
    heading: 'Profile',
    path: '/profile',
  },
  {
    icon: UilCompass,
    heading: 'Guidline',
    path: '/guidline',
  },
  {
    icon: UilSignOutAlt,
    heading: 'Log Out',
    path: '/Logout',
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: 'New CC',
    color: {
      backGround: 'linear-gradient(180deg,  #d7b140 10%, #FC929D 90%)',
      boxShadow: '0px 10px 20px 0px #FDC0C7',
    },
  },
  {
    title: 'Old CC',
    color: {
      backGround: 'linear-gradient(180deg,  #d7b140 10%, #FC929D 90%)',
      boxShadow: '0px 10px 20px 0px #FDC0C7',
    },
  },
  {
    title: 'Seminar Room',
    color: {
      backGround: 'linear-gradient(180deg,  #d7b140 10%, #FC929D 90%)',
      boxShadow: '0px 10px 20px 0px #FDC0C7',
    },
  },
];
