import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logoFlamme from '../assets/images/logo_flamme.png'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logoFlamme} alt="Logo" className="logo-image" />
          <span>Paris 2024 | LaFlamme</span>
        </Link>
      </div>
      <div className="navbar-icons">
        <Link to="/basket" className="basket-icon">
          <ShoppingCartIcon />
        </Link>
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            <span className="hamburger-icon"></span>
          </button>
          <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
            <li><Link to="/sport-list">Sport List</Link></li>
            <li><Link to="/order-history">Order History</Link></li>
            <li><Link to="/account">Account</Link></li>
            <li><Link to="/signup">Login</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
