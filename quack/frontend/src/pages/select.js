import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/selectService.css';

const SelectService = () => {
  const [selectedService, setSelectedService] = useState(-1);
  const navigate = useNavigate(); 

  const services = [
    { name: 'Cleaning', imageURL: 'https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/2x/external-cleaning-labour-day-vitaliy-gorbachev-flat-vitaly-gorbachev.png' },
    { name: 'Plumber', imageURL: 'https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/2x/external-plumber-labour-day-vitaliy-gorbachev-flat-vitaly-gorbachev.png' },
    { name: 'Electrician', imageURL: 'https://img.icons8.com/external-wanicon-flat-wanicon/2x/external-multimeter-car-service-wanicon-flat-wanicon.png' },
    { name: 'Painter', imageURL: 'https://img.icons8.com/external-itim2101-flat-itim2101/2x/external-painter-male-occupation-avatar-itim2101-flat-itim2101.png' },
    { name: 'Carpenter', imageURL: 'https://img.icons8.com/fluency/2x/drill.png' },
    { name: 'Gardener', imageURL: 'https://img.icons8.com/external-itim2101-flat-itim2101/2x/external-gardener-male-occupation-avatar-itim2101-flat-itim2101.png' },
    { name: 'Tailor', imageURL: 'https://img.icons8.com/fluency/2x/sewing-machine.png' },
    { name: 'Maid', imageURL: 'https://img.icons8.com/color/2x/housekeeper-female.png' },
    { name: 'Driver', imageURL: 'https://img.icons8.com/external-sbts2018-lineal-color-sbts2018/2x/external-driver-women-profession-sbts2018-lineal-color-sbts2018.png' },
    { name: 'Cook', imageURL: 'https://img.icons8.com/external-wanicon-flat-wanicon/2x/external-cooking-daily-routine-wanicon-flat-wanicon.png' },
  ];

  const handleServiceClick = (index) => {
    setSelectedService(selectedService === index ? -1 : index);
  };

  const handleNextClick = () => {
    if (selectedService >= 0) {
      navigate('/cleaning'); 
    }
  };

  return (
    <div className="select-service">
      <div className="header">
        <h1>Which service do you need?</h1>
      </div>
      <div className="service-list">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-container ${selectedService === index ? 'active' : ''}`}
            onClick={() => handleServiceClick(index)}
          >
            <img src={service.imageURL} alt={service.name} />
            <div className="service-name">{service.name}</div>
          </div>
        ))}
      </div>
      <div className="footer">
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default SelectService;
