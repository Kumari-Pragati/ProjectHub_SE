import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Create a navigate instance

  const handleLogin = async () => {
    if (username.trim() !== '' && password.trim() !== '') {
      // Perform login action
      // Example: Perform API request to verify the user's credentials

      // Assuming you have a function `authenticateUser` that takes a username and password and returns a promise
      navigate('/home');
    } else {
      // Show error message if either username or password is empty
      alert('Please enter both username and password.');
    }
  };

  const handleSignUp = () => {
    // Navigate to the sign-up page
    navigate('/signup'); // Specify the correct route for sign-up
  };

  return (
    <div className="container">
      <div className="text-center">
        <h1>Login as Client</h1>
      </div>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

export default LoginPage;
