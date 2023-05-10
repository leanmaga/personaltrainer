import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../components/header.css';

function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav >
      <div className="menu-icon z-10 absolute" onClick={toggleMenu}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
      {/* <div className='logo z-10 absolute'>
        <h2 className='banner__h2'>MC</h2>
      </div> */}
      <ul className={open ? 'nav-links show-links' : 'nav-links z-10 absolute'}>
        <li>
          <Link to="/personaltrainer" className="nav-link" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;