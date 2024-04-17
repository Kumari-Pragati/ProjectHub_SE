import React, { useState } from 'react';
import './FlightDetails.css'; // Import your CSS file

function FlightDetails() {
  const [showMore, setShowMore] = useState(false);

  const flightData = [
    {
      airline: 'Indigo',
      flightNumber: '6E 7342',
      status: 'Arrived',
      terminal: 'T2',
      time: '10:15 AM',
      destination: 'Delhi',
    },
    {
      airline: 'SpiceJet',
      flightNumber: 'SG 8123',
      status: 'Departing',
      terminal: 'T1',
      time: '11:30 AM',
      destination: 'Mumbai',
    },
    // Add more flight data objects as needed
  ];

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flight-details">
      <h2>Flight Information</h2>
      <ul className="flight-list">
        {flightData.slice(0, showMore ? flightData.length : 2).map((flight) => (
          <li key={flight.flightNumber}>
            <div className="flight-info">
              <span className="airline">{flight.airline}</span>
              <span className="flight-number">{flight.flightNumber}</span>
              <span className="status">{flight.status}</span>
            </div>
            <div className="flight-details">
              <span className="terminal">Terminal: {flight.terminal}</span>
              <span className="time">{flight.time}</span>
              <span className="destination">To: {flight.destination}</span>
            </div>
          </li>
        ))}
      </ul>
      {flightData.length > 2 && (
        <button className="show-more" onClick={toggleShowMore}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
}

export default FlightDetails;
