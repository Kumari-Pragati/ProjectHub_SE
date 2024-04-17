

import React from 'react';
import img from '../images/img';
import logo from './logo.png'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Upload">
                  Upload
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/View">
                  View
                </a>
              </li>
              
              <li className="nav-item">
              <a className="nav-link" href="/Login">
                  Login
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="/Register">
                  Register
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
            <img
                src={logo}
                alt="Image"
                style={{ marginRight: '10px', width: '50px', height: '50px' }} // Adjust width and height as needed
            />
              <h1 className="mb-0">E-KAKSH</h1>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
