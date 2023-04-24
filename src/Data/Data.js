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

// Sidebar Data for New CC
export const SidebarData = [
  {
    icon: UilHospitalSquareSign,
    heading: 'Home',
    path: '/newcc',
  },
  {
    icon: UilThLarge,
    heading: 'All Reservations',
    path: '/newccallreservation',
  },
  {
    icon: UilPlusSquare,
    heading: 'Add Reservations',
    path: '/newccaddreservation',
  },
  {
    icon: UilChart,
    heading: 'Off Hour Reservations',
    path: '/newccoffhourreservation',
  },
  {
    icon: UilUserSquare,
    heading: 'My Reservations',
    path: '/newccmyreservation',
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

//Slidebar data for Old CC
export const Old_SidebarData = [
  {
    icon: UilHospitalSquareSign,
    heading: 'Home',
    path: '/oldcc',
  },
  {
    icon: UilThLarge,
    heading: 'All Reservations',
    path: '/oldccallreservation',
  },
  {
    icon: UilPlusSquare,
    heading: 'Add Reservations',
    path: '/oldccaddreservation',
  },
  {
    icon: UilChart,
    heading: 'Off Hour Reservations',
    path: '/oldccoffhourreservation',
  },
  {
    icon: UilUserSquare,
    heading: 'My Reservations',
    path: '/oldccmyreservation',
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

//Slidebar data for Seminar
export const Semi_SidebarData = [
  {
    icon: UilHospitalSquareSign,
    heading: 'Home',
    path: '/seminaroom',
  },
  {
    icon: UilThLarge,
    heading: 'All Reservations',
    path: '/seminaroomallreservation',
  },
  {
    icon: UilPlusSquare,
    heading: 'Add Reservations',
    path: '/seminaroomaddreservation',
  },
  {
    icon: UilChart,
    heading: 'Off Hour Reservations',
    path: '/seminaroomoffhourreservation',
  },
  {
    icon: UilUserSquare,
    heading: 'My Reservations',
    path: '/seminaroommyreservation',
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
