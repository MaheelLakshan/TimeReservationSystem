import React, { useState, useContext } from 'react';
import axios from 'axios'; // Import Axios library
import { Link, NavLink, Navigate } from 'react-router-dom';
import './LoginPage.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGoogle,
  faLastfmSquare,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';

import GlobalContext from '../../context/GlobalContext';

function LoginPage() {
  const { credential, setCredential } = useContext(GlobalContext);
  const [toggleClassName, setToggleClassName] = useState('loginContainer');
  const [userType, setUsertype] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [login, setLogin] = useState(false);
  const [openDialogLogin, setOpenDialogLogin] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleLogIn = () => {
    setToggleClassName('loginContainer log-in-mode');
  };

  const handleSignUp = () => {
    setToggleClassName('loginContainer sign-up-mode');
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleLogCloseDialog = () => {
    setOpenDialogLogin(false);
  };
  const handleSignupCloseDialog = () => {
    setOpenDialog(false);
    setSignupSuccess(false);
    if (signupSuccess) {
      handleRefresh();
    }
  };
  const handleRefresh = () => {
    window.location.reload(); // Reload the page
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // const data = {
    //   username: formData.get('username'),
    //   password: formData.get('password'),
    // };
    const data = {
      userName: userName,
      password: password,
    };
    try {
      const response = await axios.post(
        'https://timereservationsystem.onrender.com/login-user', // Change the URL to match your backend route for login
        data
      );
      if (response.data.status === 'ok') {
        console.log('Login successful');
        setCredential(response.data.data.userName);

        setState(response.data.data.userType);
        if (
          response.data.data.permission ||
          response.data.data.userType == 'Admin'
        ) {
          setLogin(true);
        } else {
          alert('Permission is not given by the Admin yet');
        }

        // Redirect or do whatever you need for a successful login
      } else {
        setOpenDialogLogin(true);
        // console.error('Invalid credentials');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const handleSignupSubmit = async (event) => {
    const fieldsToCheck = {
      userName: userName,
      password: password,
      email: email,
      userType: userType,
    };
    const emptyFieldsArray = Object.entries(fieldsToCheck)
      .filter(([_, value]) => !value.trim())
      .map(([field]) => field);

    if (emptyFieldsArray.length > 0) {
      setEmptyFields(emptyFieldsArray);
      setOpenDialog(true);
      event.preventDefault();
    } else {
      if (userType == 'Admin' && secretKey != 'timeReservation') {
        event.preventDefault();
        alert('INVALID ADMIN');
      } else {
        event.preventDefault();
        const data = {
          userName: userName,
          password: password,
          email: email,
          userType: userType,
        };

        try {
          const response = await axios.post(
            'https://timereservationsystem.onrender.com/register', // Change the URL to match your backend route for signup
            data
          );
          if (response.data.status === 'ok') {
            console.log('Signup successful');
            setSignupSuccess(true); // Set the signup success status to true to trigger the dialog
            setOpenDialog(true);
            // Redirect or do whatever you need for a successful signup
          } else {
            alert('Failed to create user may be duplicated users');
          }
        } catch (error) {
          alert('Failed to create');
          console.error('Error occurred:', error);
        }
      }
    }
  };

  return (
    <div className="loginbody">
      {/* login credential */}
      <Dialog open={openDialogLogin} onClose={handleLogCloseDialog}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          Invalid credentials. Please check your username and password.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogCloseDialog} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      {/* signup status dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {signupSuccess ? 'Signup Successful' : 'Missing Information'}
        </DialogTitle>
        <DialogContent>
          {signupSuccess ? (
            <div>
              <CheckCircleOutline
                color="success"
                sx={{ fontSize: 40, marginRight: 10 }}
              />
              Signup was successful! You can now login with your credentials.
            </div>
          ) : (
            <div>
              Please enter the following details:{' '}
              <strong>{emptyFields.join(', ')}</strong>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSignupCloseDialog} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <div className={toggleClassName}>
        <div className="signin-signup">
          <form action="" className="log-in-form" onSubmit={handleLoginSubmit}>
            <div className="title">RESERVE SLOTS</div>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="lll" />
              <input
                type="text"
                className="mytext"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="lll" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <input type="submit" value={login} className="btn" /> */}
            {/* <button className="btn" onClick={handlerloginto}>
            Log IN
          </button> */}
            {/* <NavLink to="/home">
              <button className="btnn">Log IN</button>
            </NavLink> */}
            <button className="btnn">Log IN</button>

            {login ? (
              state === 'User' ? (
                <Navigate to="/home" />
              ) : state === 'Admin' ? (
                <Navigate to="/admin-calander" />
              ) : (
                alert('User type is wrong')
              )
            ) : null}

            <p className="social-text">OR sign in with social platform</p>
            <div className="social-media">
              <Link href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </Link>
              <Link href="#" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </div>
            <div className="accout-text">
              Do not have an Account?{' '}
              <div style={{ justifyContent: 'center', display: 'flex' }}>
                <a href="#" id="sign-up-btn2" onClick={handleSignUp}>
                  Sign Up
                </a>
              </div>
            </div>
          </form>

          <form
            action=""
            className="sign-up-form"
            onSubmit={handleSignupSubmit}
          >
            <div className="title">SIGN UP</div>
            <div className="input-user-type ">
              {/* <FontAwesomeIcon icon={faUser} className="lll" /> */}
              Register AS
              <input
                type="radio"
                className="mytext"
                name="userType"
                value="User"
                checked={userType === 'User'}
                onChange={(e) => setUsertype(e.target.value)}
              />
              User
              <input
                type="radio"
                className="mytext"
                name="userType"
                value="Admin"
                checked={userType === 'Admin'}
                onChange={(e) => setUsertype(e.target.value)}
              />
              Admin
            </div>

            <div>
              {userType == 'Admin' ? (
                <div style={{ marginTop: '10px' }}>
                  <label style={{ fontWeight: 'bold' }}>Secret Key</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Secret Key"
                    value={secretKey}
                    onChange={(e) => setSecretKey(e.target.value)}
                  />
                </div>
              ) : null}
            </div>

            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="lll" />
              <input
                type="text"
                className="mytext"
                placeholder="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="lll" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="lll" />
              <input
                type="text"
                className="mytext"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* <input type="submit" value={signup} className="btn" /> */}
            <input type="submit" className="btnn" />
            <p className="social-text">OR sign in with social platform</p>
            <div className="social-media">
              <Link href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </Link>
              <Link href="#" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </div>
            <div className="accout-text">
              Already have an Account?{' '}
              <div style={{ justifyContent: 'center', display: 'flex' }}>
                <a href="/" id="log-in-btn2" onClick={handleLogIn}>
                  Log In
                </a>
              </div>
            </div>
          </form>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3 style={{ fontWeight: '800' }}>
                {' '}
                ALEADY A MEMBER OF THE SYSTEM?
              </h3>
              <div className="para">
                if you already have an account click here to the log in
              </div>
              <button className="btnn" id="log-in-btn" onClick={handleLogIn}>
                Log IN
              </button>
            </div>
            {/* <img src='asdad.svg' alt='' classname='image' */}
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3 style={{ fontWeight: '800' }}>NEW TO THE SYSTEM?</h3>
              <div className="para">
                {' '}
                if you do not have an account, 1st register with your credential
                here!!
              </div>
              <button className="btnn" id="sign-up-btn" onClick={handleSignUp}>
                Sign Up
              </button>
            </div>
            {/* <img src='sad.svg' alt='' classname='image' */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
