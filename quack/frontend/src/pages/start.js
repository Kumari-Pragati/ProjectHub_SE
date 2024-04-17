import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/startPage.css';

const StartPage = () => {
  const [selectedService, setSelectedService] = useState(0);
  const navigate = useNavigate(); 

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedService(0); 
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const handleGetStarted = () => {
    navigate('/choose'); 
  };

  return (
    <div className="start-page">
      <div className="logo-container">
        <img src="assets/quack.jpg" alt="Quack Logo" />
      </div>
      <div className="content-container">
        <div className="text-container">
          <h2>Easy, reliable way to take care of your home</h2>
        </div>
        <div className="text-container">
          <p>We provide you with the best people to help take care of your home.</p>
        </div>
        <div className="button-container">
          <button onClick={handleGetStarted}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
