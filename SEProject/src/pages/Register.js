import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import '../style/Registration.css'; // Import CSS file for styling
import Navbar from '../Components/Navbar';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/register', {
        name,
        email,
        password,
        age
      });

      console.log(response.data); // Log response data

      // Clear form fields after successful registration
      setName('');
      setEmail('');
      setPassword('');
      setAge('');
      setErrorMessage('');

      // Navigate to login page
      navigate('/login');
    } catch (error) {
      console.error('Error registering:', error.message);
      setErrorMessage('Registration failed. Please try again.'); // Set error message
    }
  };

  return (
    <div>
        <Navbar/>
    <div className="registration-container">
      <div className="registration-box">
        <h2>Registration</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="registration-form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
            required
          />
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
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="input-field"
            required
          />
          <button type="submit" className="submit-button">Register</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Registration;
