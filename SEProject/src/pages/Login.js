import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import '../style/Login.css'; // Import CSS file for styling
import Navbar from '../Components/Navbar';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login', {
        email,
        password
      });

      console.log(response.data); // Log response data

      // Clear form fields after successful login
      setEmail('');
      setPassword('');
      setErrorMessage('');

      // Navigate to home page
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error.message);
      setErrorMessage('Login failed. Please try again.'); // Set error message
    }
  };

  return (
    <div>
        <Navbar/>
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
          <button type="submit" className="submit-button">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
