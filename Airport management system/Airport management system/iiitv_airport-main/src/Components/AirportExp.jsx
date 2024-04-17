import React from 'react';
import './AirportExp.css'

const ButtonGroup = () => {
  const handleClick = () => {
    window.open('src/assets/stuff/sus.html', '_self');
  };

  return (
    <div>
        <h2 style={{textAlign: "center"}}>Our Airport Services</h2>
    <div className="button-group">
      <button className="purple-button" onClick={handleClick}>Departure</button>
      <button className="purple-button" onClick={handleClick}>Arrival</button>
    </div>
    </div>
  );
};

export default ButtonGroup;
