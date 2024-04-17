import React, { useState } from 'react';
import '../css/choose.css';
import { useNavigate } from 'react-router-dom';

function ChoosePage() {
  const [selectedValue, setSelectedValue] = useState(null);
  const navigate = useNavigate(); // Create a navigate instance

  const handleRadioButtonChange = (value) => {
    setSelectedValue(value);
    if (value === 0) {
      // Navigate to client login page
      navigate('/login'); // Specify the correct route for client login
    } else if (value === 1) {
      // Navigate to technician login page
      navigate('/logint'); // Specify the correct route for technician login
    }
  };

  return (
    <div className="container">
      <div className="text-center">
        <h1>Login as</h1>
      </div>
      <div className="row mt-4">
        <div className="col">
          <CustomRadioButton
            label="Client"
            image="assets/client.jpg" 
            value={0}
            checked={selectedValue === 0}
            onChange={handleRadioButtonChange}
          />
        </div>
        <div className="col">
          <CustomRadioButton
            label="Technician"
            image="assets/technician.jpg" 
            value={1}
            checked={selectedValue === 1}
            onChange={handleRadioButtonChange}
          />
        </div>
      </div>
    </div>
  );
}

function CustomRadioButton({ label, image, value, checked, onChange }) {
  return (
    <div className="text-center">
      <img src={image} alt={label} style={{ width: '100px', height: '200px' }} />
      <h2>{label}</h2>
      <input type="radio" value={value} checked={checked} onChange={() => onChange(value)} />
    </div>
  );
}

export default ChoosePage;
