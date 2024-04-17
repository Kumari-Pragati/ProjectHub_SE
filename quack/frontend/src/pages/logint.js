import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function LoginPageT() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Create a navigate function
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      // Perform login action here, such as sending a request to a server
      // and handling the response. For example, you could use a function
      // like `performLogin(username, password)` to make the request.

      // For demonstration purposes, we'll just log a success message:
      console.log('Login successful!');

      // After a successful login, navigate to the home page
      navigate('/homet');
    } else {
      // Show error dialog if the credentials are invalid
      alert('Invalid username or password');
    }
  };

  const handleSignUp = () => {
    // Navigate to the sign-up page using navigate function
    navigate('/signupt');
  };

  return (
    <div className="container">
      <div className="text-center">
        <h1>Login as Technician</h1>
      </div>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
        <button className="btn btn-outline-primary" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default LoginPageT;
