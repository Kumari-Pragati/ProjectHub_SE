import React from 'react';
import './Navbar.css';
import "./NavExtention.css"


function Navbar(props) {
  return (
    <div className={`navextention ${props.opened ? "opened" : ""}`}>
        <div>
            <div className='navextentioncolumn'>
                <h2>For travellers</h2>
                <div>
                <a href="src/assets/stuff/sus.html">Flight</a>
                <a href="src/assets/stuff/sus.html">Shop & Dine</a>
                <a href="src/assets/stuff/sus.html">Transport</a>
                <a href="src/assets/stuff/sus.html">Airport Services</a>
                <a href="src/assets/stuff/sus.html">Passenger Guide</a>
                <a href="src/assets/stuff/sus.html">Downloads</a>
                <a href="src/assets/stuff/sus.html">FAQs</a>
                </div>
            </div>
            <div className='navextentioncolumn'>
                <h2>For Business</h2>
                <div>
                <a href="src/assets/stuff/sus.html">Airline Partnership</a>
                <a href="src/assets/stuff/sus.html">Commercials</a>
                <a href="src/assets/stuff/sus.html">Cargo</a>
                <a href="src/assets/stuff/sus.html">Tenders</a>
                <a href="src/assets/stuff/sus.html">Concession Opportunities</a>
                </div>
            </div>
            <div className='navextentioncolumn'>
                <h2>Corporate</h2>
                <div>
                <a href="src/assets/stuff/sus.html">About Us</a>
                <a href="src/assets/stuff/sus.html">Sustainability</a>
                <a href="src/assets/stuff/sus.html">Careers</a>
                <a href="src/assets/stuff/sus.html">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
