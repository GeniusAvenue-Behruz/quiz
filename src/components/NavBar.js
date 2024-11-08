import React, { useState } from 'react';
import '../css/NavBar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__brand">
          <a className="navbar__brand-link" href="#!">Ta'limiy Savollar</a>
        </div>
        <div className="navbar__menu-toggle">
          <button onClick={() => setIsOpen(!isOpen)} className="navbar__menu-toggle-button">
            <svg className="navbar__menu-toggle-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`} id="nav-content">
          <ul className="navbar__menu-list">
            <li className="navbar__menu-item">
              <a className="navbar__menu-link" href="/home">Home</a>
            </li>
            <li className="navbar__menu-item">
              <a className="navbar__menu-link navbar__menu-link--secondary" href="/about">About</a>
            </li>
            <li className="navbar__menu-item">
              <a className="navbar__menu-link navbar__menu-link--secondary" href="/ratings">Rating</a>
            </li>
            <li className="navbar__menu-item">
              <a className="navbar__menu-link navbar__menu-link--secondary" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
