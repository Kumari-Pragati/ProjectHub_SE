import { useState, React} from 'react';
import './Navbar.css'; // Import your CSS file
import sidebarSvg from './sidebar.svg'
import Login from './Login';
import NavbarE from './NavExtention';


function Navbar() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          IIITV Airport
        </a>

        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-links">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-links">
              <Login />
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-links">
              Search
            </a>
          </li>
          <li className="nav-item" onClick={() => {setIsOpened(!isOpened)}}>
            <a href="" onClick={(e) => {e.preventDefault()}}>
                <img src={sidebarSvg} alt="" />
            </a>
          </li>

        </ul>
      </div>
      <NavbarE opened={isOpened}/>
    </nav>
  );
}

export default Navbar;
