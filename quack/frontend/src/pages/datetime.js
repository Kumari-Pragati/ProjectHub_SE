import React, { useState, useEffect } from 'react';

const DateAndTime = () => {
  const [selectedDay, setSelectedDay] = useState(2);
  const [selectedRepeat, setSelectedRepeat] = useState(0);
  const [selectedHour, setSelectedHour] = useState('01:00');

  useEffect(() => {
    const timer = setTimeout(() => {
      // Scroll logic here
      // Assuming the scrolling functionality is handled by a library or custom function
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const days = [
    [1, 'Fri'], [2, 'Sat'], [3, 'Sun'], [4, 'Mon'], [5, 'Tue'], [6, 'Wed'], [7, 'Thu'],
    [8, 'Fri'], [9, 'Sat'], [10, 'Sun'], [11, 'Mon'], [12, 'Tue'], [13, 'Wed'], [14, 'Thu'],
    [15, 'Fri'], [16, 'Sat'], [17, 'Sun'], [18, 'Mon'], [19, 'Tue'], [20, 'Wed'], [21, 'Thu'],
    [22, 'Fri'], [23, 'Sat'], [24, 'Sun'], [25, 'Mon'], [26, 'Tue'], [27, 'Wed'], [28, 'Thu'],
    [29, 'Fri'], [30, 'Sat']
  ];

  const hours = [
    '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30',
    '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
    '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'
  ];

  const repeatOptions = ['No repeat', 'Every day', 'Every week', 'Every month'];

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleHourClick = (hour) => {
    setSelectedHour(hour);
  };

  const handleRepeatClick = (index) => {
    setSelectedRepeat(index);
  };

  return (
    <div className="date-time-container">
      <div className="header">
        <h1>Select Date <br/> and Time</h1>
      </div>
      <div className="date-selector">
        <h3>September 2023</h3>
        <div className="days">
          {days.map((day, index) => (
            <div
              key={index}
              className={`day ${selectedDay === day[0] ? 'selected' : ''}`}
              onClick={() => handleDayClick(day[0])}
            >
              <span>{day[0]}</span>
              <span>{day[1]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="time-selector">
        <h3>Time</h3>
        <div className="hours">
          {hours.map((hour, index) => (
            <div
              key={index}
              className={`hour ${selectedHour === hour ? 'selected' : ''}`}
              onClick={() => handleHourClick(hour)}
            >
              <span>{hour}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="repeat-selector">
        <h3>Repeat</h3>
        <div className="repeat-options">
          {repeatOptions.map((option, index) => (
            <div
              key={index}
              className={`repeat-option ${selectedRepeat === index ? 'selected' : ''}`}
              onClick={() => handleRepeatClick(index)}
            >
              <span>{option}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="description">
        <h3>Description</h3>
        <textarea rows="4" placeholder="Enter description..."></textarea>
      </div>
      <div className="upload-attachments">
        <button>Upload Attachments</button>
      </div>
      <div className="submit-button">
        <button>Submit</button>
      </div>
    </div>
  );
};

export default DateAndTime;
