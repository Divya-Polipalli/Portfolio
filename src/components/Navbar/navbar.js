import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import './navbar.css';

function Navbar() {
  const location = useLocation(); 
  const isActive = (path) => {
   
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">PD</div>
      <ul className="navbar-nav">
        <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
          <Link to="/home">Home</Link>
        </li>
        <li className={`nav-item ${isActive('/about') ? 'active' : ''}`}>
          <Link to="/about">About</Link>
        </li>
        <li className={`nav-item ${isActive('/skills') ? 'active' : ''}`}>
          <Link to="/skills">Skills</Link>
        </li>
        <li className={`nav-item ${isActive('/projects') ? 'active' : ''}`}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;