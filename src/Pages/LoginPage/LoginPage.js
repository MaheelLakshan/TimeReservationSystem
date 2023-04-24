import React from 'react';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="container">
      <div className="signin-signup">
        <form action="" className="signin-form"></form>
        <h2 className="title"> Sign in</h2>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input type="text" placeholder="Username"></input>
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password"></input>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
