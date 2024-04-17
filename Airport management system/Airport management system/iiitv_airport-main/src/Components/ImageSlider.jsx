import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

import a from '/src/assets/Frame1.png'
import b from '/src/assets/Frame2.png'
import c from '/src/assets/Frame3.png'
import d from '/src/assets/Frame4.png'
import e from '/src/assets/airportservices.webp'

const images = [
  a,
  b,
  c,
  d,
  e,
];

function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Interval for changing images
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <div
        className="slide"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
      <button className="prev" onClick={goToPrevious}>&#10094;</button>
      <button className="next" onClick={goToNext}>&#10095;</button>
    </div>
  );
}

export default ImageSlider;
