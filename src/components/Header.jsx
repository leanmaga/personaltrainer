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
    <nav>
      <div className="menu-icon" onClick={toggleMenu}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
      <div className='logo'>
        <h2>MC</h2>
      </div>
      <ul className={open ? 'nav-links show-links' : 'nav-links'}>
        <li>
          <Link to="/" className="nav-link" onClick={toggleMenu}>
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