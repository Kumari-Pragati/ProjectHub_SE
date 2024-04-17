import React, { useState } from 'react';
import '../css/CleaningPage.css';

const CleaningPage = () => {
  const [rooms, setRooms] = useState([
    ['Living Room', 'https://img.icons8.com/officel/2x/living-room.png', 'red', 0],
    ['Bedroom', 'https://img.icons8.com/fluency/2x/bedroom.png', 'orange', 1],
    ['Bathroom', 'https://img.icons8.com/color/2x/bath.png', 'blue', 1],
    ['Kitchen', 'https://img.icons8.com/dusk/2x/kitchen.png', 'purple', 0],
    ['Office', 'https://img.icons8.com/color/2x/office.png', 'green', 0]
  ]);
  const [selectedRooms, setSelectedRooms] = useState([]);

  const handleRoomSelection = (index) => {
    setSelectedRooms((prevSelectedRooms) => {
      if (prevSelectedRooms.includes(index)) {
        return prevSelectedRooms.filter((item) => item !== index);
      } else {
        return [...prevSelectedRooms, index];
      }
    });
  };

  return (
    <div className="cleaning-page">
      <div className="header">
        <h1>Where do you want to get service?</h1>
      </div>
      <div className="room-list">
        {rooms.map((room, index) => (
          <div
            key={index}
            className={`room-card ${selectedRooms.includes(index) ? 'selected' : ''}`}
            onClick={() => handleRoomSelection(index)}
          >
            <img src={room[1]} alt={room[0]} />
            <p>{room[0]}</p>
            {selectedRooms.includes(index) && room[3] >= 1 && (
              <div className="quantity-selection">
                <p>How many {room[0]}s?</p>
                <div className="quantity-buttons">
                  {[1, 2, 3, 4].map((quantity) => (
                    <div
                      key={quantity}
                      className={`quantity-button ${room[3] === quantity ? 'selected' : ''}`}
                      onClick={() => {
                        const updatedRooms = [...rooms];
                        updatedRooms[index][3] = quantity;
                        setRooms(updatedRooms);
                      }}
                    >
                      {quantity}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {selectedRooms.length > 0 && (
        <div className="action-button">
          <button onClick={() => console.log('Navigate to DateAndTime')}>
            <span>{selectedRooms.length}</span>
            <i className="material-icons">arrow_forward_ios</i>
          </button>
        </div>
      )}
    </div>
  );
};

export default CleaningPage;
