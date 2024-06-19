import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logoFlamme from '../assets/images/logo_flamme.png'; // Importez l'image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logoFlamme} alt="Logo" className="logo-image" />
          <span>Paris 2024 | LaFlamme</span>
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/ticket-purchase">Ticket Purchase</Link></li>
        <li><Link to="/order-history">Order History</Link></li>
        <li><Link to="/sport-list">Sport List</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
