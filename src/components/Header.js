import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-left">
            <a href="tel:416-503-2033">
              <FaPhone /> 416-503-2033
            </a>
            <a href="mailto:rob@langstaffandsloan.ca">
              <FaEnvelope /> rob@langstaffandsloan.ca
            </a>
          </div>
          <div className="header-social">
            <a href="https://www.facebook.com/LangstaffandSloan/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="header-main">
        <div className="container">
          <a href="/" className="logo">
            <img
              src="/images/logo.png"
              alt="Langstaff & Sloan"
            />
          </a>
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <a href="#services">Services</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#reviews">Testimonials</a>
            <a href="#faq">FAQ</a>
            <a href="#areas">Locations</a>
            <a href="#contact" className="nav-cta">Get An Estimate</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
