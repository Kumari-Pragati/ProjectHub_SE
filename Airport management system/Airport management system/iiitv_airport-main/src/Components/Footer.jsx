import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__column">
          <h3 className="footer__heading">For Travellers</h3>
          <ul className="footer__list">
            <li>
              <a href="#" onClick={() => {window.open('src/assets/stuff/sus.html', '_blank')}}>Flights</a>
            </li>
            <li>
              <a href="#" onClick={() => {window.open('src/assets/stuff/sus.html', '_blank')}}>Shop & Dine</a>
            </li>
            <li>
              <a href="#" onClick={() => {window.open('src/assets/stuff/sus.html', '_blank')}}>Transport</a>
            </li>
            <li>
              <a href="#" onClick={() => {window.open('src/assets/stuff/sus.html', '_blank')}}>Airport Services</a>
            </li>
            <li>
              <a href="#" onClick={() => {window.open('src/assets/stuff/sus.html', '_blank')}}>Passenger Guide</a>
            </li>
            <li>
              <a href="#" onClick={() => {window.open('src/assets/stuff/sus.html', '_blank')}}>Downloads</a>
            </li>
            <li>
              <a href="#" onClick={() => {window.open('src/assets/stuff/sus.html', '_blank')}}>FAQs</a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">For Businesses</h3>
          <ul className="footer__list">
            <li>
              <a href="#" onClick={() => {window.open('src/assets/stuff/sus.html', '_blank')}}>Airline Partnership</a>
            </li>
            <li>
              <a href="#" onClick={() => {window.open('src/assets/stuff/sus.html', '_blank')}}>Commercials</a>
            </li>
            <li>
              <a href="#" onClick={() => {window.open('src/assets/stuff/sus.html', '_blank')}}>Cargo</a>
            </li>
            <li>
              <a href="#" onClick={() => {window.open('src/assets/stuff/sus.html', '_blank')}}>Tenders</a>
            </li>
            <li>
              <a href="#" onClick={() => {window.open('src/assets/stuff/sus.html', '_blank')}}>Concession Opportunities</a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Corporate</h3>
          <ul className="footer__list">
            <li>
              <a href="#" onClick={() => {window.open('src/assets/stuff/sus.html', '_blank')}}>About Us</a>
            </li>
            <li>
              <a href="#" onClick={() => {window.open('src/assets/stuff/sus.html', '_blank')}}>Sustainability</a>
            </li>
            <li>
              <a href="#" onClick={() => {window.open('src/assets/stuff/sus.html', '_blank')}}>Careers</a>
            </li>
            <li>
              <a href="#" onClick={() => {window.open('src/assets/stuff/sus.html', '_blank')}}>Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18&q=YOUR_MAP_LOCATION&amp;zoom=15&amp;amp;marker=YOUR_MAP_MARKER&amp;amp;key=YOUR_API_KEY"
            width="100%"
            height="200px"
            frameBorder="0"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>

      <div className="footer__copyright">
        <p>© 2024 IIITV Airport</p>
      </div>
    </footer>
  );
};

export default Footer;
