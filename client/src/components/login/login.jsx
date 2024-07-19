
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './login.css';

function Login() {
  return (
    <div className="wrapper">
      <form>
        <div className="inputBox">
          <input id="usernameInput" type="text" placeholder="Username" />
          <i className='bx bxs-user'></i>
        </div>
        <div className="inputBoxx">
          <input id="passwordInput" type="password" placeholder="Password" />
          <i className='bx bxs-lock-alt'></i>
        </div>
        <button type="submit" className="btn" to="/dashbord">LOGIN</button>
        <Link className='btn' to="/dashbord">Signup</Link>
      </form>
    </div>
  );
}

export default Login;
