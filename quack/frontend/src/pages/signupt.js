import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpPageT() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [selectedProfession, setSelectedProfession] = useState('Electrician');
  const [experience, setExperience] = useState('');
  const [places, setPlaces] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (
      username.trim() !== '' &&
      name.trim() !== '' &&
      email.trim() !== '' &&
      password.trim() !== '' &&
      mobile.trim() !== '' &&
      address.trim() !== '' &&
      experience.trim() !== '' &&
      places.trim() !== ''
    ) {
      // Perform sign-up logic here
      // For example, you can navigate to the home page
      // You may use react-router-dom for navigation
      // Example: history.push('/home');
      navigate('/logint');
    } else {
      // Show error dialog
      alert('Please fill up all the fields');
    }
  };

  return (
    <div className="container">
      <div className="text-center">
        <h1>Create an Account</h1>
      </div>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <div className="form-group">
        <label>Mobile Number</label>
        <input
          type="tel"
          className="form-control"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          className="form-control"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Willing to work as</label>
        <select
          className="form-control"
          value={selectedProfession}
          onChange={(e) => setSelectedProfession(e.target.value)}
        >
          <option value="Electrician">Electrician</option>
          <option value="Plumber">Plumber</option>
          <option value="Carpenter">Carpenter</option>
          <option value="Mechanic">Mechanic</option>
        </select>
      </div>
      <div className="form-group">
        <label>Years of Experience</label>
        <input
          type="number"
          className="form-control"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Places available to work</label>
        <input
          type="text"
          className="form-control"
          value={places}
          onChange={(e) => setPlaces(e.target.value)}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUpPageT;
