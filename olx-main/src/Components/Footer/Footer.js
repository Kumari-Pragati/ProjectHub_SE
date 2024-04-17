import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>Ahmedabad</li>
              <li>Surat</li>
              <li>Mumbai</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About Swap Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>Swap Community</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Free Classifieds in India. © 2024-2029 Swap</p>
      </div>
    </div>
  );
}

export default Footer;
