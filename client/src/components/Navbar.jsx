
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import './Navbar.css';
import Search from '@mui/icons-material/Search';

function Navbar() {
  const [user, setUser] = useState(null); // Add this line

  // Simulate a user login
  const handleLogin = () => {
    setUser('John Doe');
  };

  const handleRegister=(e)=>{
    e.preventDefault();
  }

  // Simulate a user logout
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="navbar">
      <div className="logo">Auctioneer</div>
      <div className="links">
        <Link className="link" to={"/"}>
          Home
        </Link>
        <Link className="link" to={"/auctions"}>
          Auctions
        </Link>
        <Link className="link" to={"/myauctions"}>
          My Auctions
        </Link>
      </div>
      <div className="searchBar">
        <input type="search" placeholder="Search Auctions" className="search" />
        <Search />
      </div>
      <div className="profile">
        {user ? (
          <div>
            <div className="profileCircle">
              {/* Add your profile circle component here */}
            </div>
            <button onClick={handleLogout}>Logout</button>{" "}
            {/* Add this button */}
          </div>
        ) : (
          <div className="auth">
            <button onClick={handleLogin}>
              <Link to={"/login"} className="authLink">
                {" "}
                Login
              </Link>
            </button>
            <button onClick={handleRegister}>
              <Link to={"/register"} className="authLink">
                {" "}
                Register
              </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
