// import React, { useState } from 'react';
// import './LoginPage.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faFacebook,
//   faGoogle,
//   faTwitter,
// } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
// import { Link, NavLink } from 'react-router-dom';

// function LoginPage() {
//   // const [signUpClassName, setSignUpClassName] = useState('container');
//   // const [logInClassName, setLogInClassName] = useState('container');
//   const [toggleClassName, setToggleClassName] = useState('container');

//   // const handlerloginto = () => {
//   //   // <NavLink to="/newcc"></NavLink>; this is not work
//   // };

//   const handleLogIn = () => {
//     setToggleClassName('container log-in-mode');
//   };

//   const handleSignUp = () => {
//     setToggleClassName('container sign-up-mode');
//   };

//   const handlerLogIn = () => {
//     setToggleClassName('container sign-up-mode2');
//   };

//   const handlerSignup = () => {
//     setToggleClassName('container sign-up-mode2');
//   };

//   // const login = useState('');
//   // const signup = useState('');
//   return (
//     <div className={toggleClassName}>
//       <div className="signin-signup">
//         <form action="" className="log-in-form">
//           <div className="title">RESERVE SLOTS</div>
//           <div className="input-field">
//             <FontAwesomeIcon icon={faUser} className="lll" />
//             <input type="text" className="mytext" placeholder="Username" />
//           </div>
//           <div className="input-field">
//             <FontAwesomeIcon icon={faLock} className="lll" />
//             <input type="password" placeholder="Password" />
//           </div>
//           {/* <input type="submit" value={login} className="btn" /> */}
//           {/* <button className="btn" onClick={handlerloginto}>
//             Log IN
//           </button> */}
//           <NavLink to="/home">
//             <button className="btnn">Log IN</button>
//           </NavLink>
//           <p className="social-text">OR sign in with social platform</p>
//           <div className="social-media">
//             <Link href="#" className="social-icon">
//               <FontAwesomeIcon icon={faFacebook} />
//             </Link>
//             <Link href="#" className="social-icon">
//               <FontAwesomeIcon icon={faGoogle} />
//             </Link>
//             <Link href="#" className="social-icon">
//               <FontAwesomeIcon icon={faTwitter} />
//             </Link>
//           </div>
//           <div className="accout-text">
//             Do not have an Account?{' '}
//             <div style={{ justifyContent: 'center', display: 'flex' }}>
//               <a href="#" id="sign-up-btn2" onClick={handlerSignup}>
//                 Sign Up
//               </a>
//             </div>
//           </div>
//         </form>

//         <form action="" className="sign-up-form">
//           <div className="title">SIGN UP</div>
//           <div className="input-field">
//             <FontAwesomeIcon icon={faUser} className="lll" />
//             <input type="text" className="mytext" placeholder="Username" />
//           </div>
//           <div className="input-field">
//             <FontAwesomeIcon icon={faLock} className="lll" />
//             <input type="password" placeholder="Password" />
//           </div>
//           <div className="input-field">
//             <FontAwesomeIcon icon={faEnvelope} className="lll" />
//             <input type="text" className="mytext" placeholder="Email" />
//           </div>
//           {/* <input type="submit" value={signup} className="btn" /> */}
//           <input type="submit" className="btnn" />
//           <p className="social-text">OR sign in with social platform</p>
//           <div className="social-media">
//             <Link href="#" className="social-icon">
//               <FontAwesomeIcon icon={faFacebook} />
//             </Link>
//             <Link href="#" className="social-icon">
//               <FontAwesomeIcon icon={faGoogle} />
//             </Link>
//             <Link href="#" className="social-icon">
//               <FontAwesomeIcon icon={faTwitter} />
//             </Link>
//           </div>
//           <div className="accout-text">
//             Already have an Account?{' '}
//             <div style={{ justifyContent: 'center', display: 'flex' }}>
//               <a href="/" id="log-in-btn2" onClick={handlerLogIn}>
//                 Log In
//               </a>
//             </div>
//           </div>
//         </form>
//       </div>
//       <div className="panels-container">
//         <div className="panel left-panel">
//           <div className="content">
//             <h3 style={{ fontWeight: '800' }}>
//               {' '}
//               ALEADY A MEMBER OF THE SYSTEM?
//             </h3>
//             <div className="para">
//               if you already have an account click here to the log in
//             </div>
//             <button className="btnn" id="log-in-btn" onClick={handleLogIn}>
//               Log IN
//             </button>
//           </div>
//           {/* <img src='asdad.svg' alt='' classname='image' */}
//         </div>

//         <div className="panel right-panel">
//           <div className="content">
//             <h3 style={{ fontWeight: '800' }}>NEW TO THE SYSTEM?</h3>
//             <div className="para">
//               {' '}
//               if you do not have an account, 1st register with your credential
//               here!!
//             </div>
//             <button className="btnn" id="sign-up-btn" onClick={handleSignUp}>
//               Sign Up
//             </button>
//           </div>
//           {/* <img src='sad.svg' alt='' classname='image' */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;
