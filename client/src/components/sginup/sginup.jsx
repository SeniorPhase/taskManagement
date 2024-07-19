import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './sginup.css';

function Signup() {
  return (
    <>
      <div className="wrapper">
        <form action="">
          <div className="inputBox">
            <input id="usernameInput" type="text" placeholder="Username" />
            <i className='bx bxs-user'></i>
          </div>
          <div className="inputBox">
            <input id="emailInput" type="email" placeholder="Email" />
            <i className='bx bxs-envelope'></i>
          </div>
          <div className="inputBox">
            <input id="passwordInput" type="password" placeholder="Password" />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <div className="inputBox">
            <input id="confirmPasswordInput" type="password" placeholder="Confirm Password" />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <button className="btn"><Link  to="/login">SIGNUP</Link></button>
        </form>
      </div>
    </>
  );
}

export default Signup;
