import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password
      });

      localStorage.setItem('token', response.data.token);
      alert('Login successful');
      
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Invalid credentials');
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div className="inputBox">
          <input
            id="emailInput"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className='bx bxs-user'></i>
        </div>
        <div className="inputBoxx">
          <input
            id="passwordInput"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className='bx bxs-lock-alt'></i>
        </div>
        <button className="btn" type="submit">LOGIN</button>
      </form>
    </div>
  );
}

export default Login;
