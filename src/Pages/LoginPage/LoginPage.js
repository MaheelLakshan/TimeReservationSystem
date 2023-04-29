import React, { useState } from 'react';
import './LoginPage.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function LoginPage() {
  // const [signUpClassName, setSignUpClassName] = useState('container');
  // const [logInClassName, setLogInClassName] = useState('container');
  const [toggleClassName, setToggleClassName] = useState('container');

  const handleLogIn = () => {
    setToggleClassName('container log-in-mode');
  };

  const handleSignUp = () => {
    setToggleClassName('container sign-up-mode');
  };

  const handlerLogIn = () => {
    setToggleClassName('container sign-up-mode2');
  };

  const handlerSignup = () => {
    setToggleClassName('container sign-up-mode2');
  };

  // const login = useState('');
  // const signup = useState('');
  return (
    <div className={toggleClassName}>
      <div className="signin-signup">
        <form action="" className="signin-form">
          <h2 className="title">Log In</h2>
          <div className="input-field">
            <FontAwesomeIcon icon={faLock} className="lll" />
            <input type="text" className="mytext" placeholder="Username" />
          </div>
          <div className="input-field">
            <FontAwesomeIcon icon={faLock} className="lll" />
            <input type="password" placeholder="Password" />
          </div>
          {/* <input type="submit" value={login} className="btn" /> */}
          <div className="btn">LoG IN</div>
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
          <p className="accout-text">
            Do not have an Account..?{' '}
            <a href="#" id="sign-up-btn2" onClick={handlerSignup}>
              Sign Up
            </a>
          </p>
        </form>

        <form action="" className="signup-form">
          <h2 className="title">Sign up</h2>
          <div className="input-field">
            <FontAwesomeIcon icon={faLock} className="lll" />
            <input type="text" className="mytext" placeholder="Username" />
          </div>
          <div className="input-field">
            <FontAwesomeIcon icon={faLock} className="lll" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="input-field">
            <FontAwesomeIcon icon={faEnvelope} className="lll" />
            <input type="text" className="mytext" placeholder="Email" />
          </div>
          {/* <input type="submit" value={signup} className="btn" /> */}
          <input type="submit" className="btn" />
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
          <p className="accout-text">
            Already have an Account..?{' '}
            <a href="#" id="log-in-btn2" onClick={handlerLogIn}>
              Log In
            </a>
          </p>
        </form>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Member of Brand?</h3>
            <p>asdadadsadad</p>
            <button className="btn" id="log-in-btn" onClick={handleLogIn}>
              Log IN
            </button>
          </div>
          {/* <img src='asdad.svg' alt='' classname='image' */}
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>New to Brand?</h3>
            <p>asdadadsadad</p>
            <button className="btn" id="sign-up-btn" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
          {/* <img src='sad.svg' alt='' classname='image' */}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
