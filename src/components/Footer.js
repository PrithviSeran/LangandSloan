import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <img
              src="https://langstaffandsloan.com/wp-content/uploads/2026/02/Langstaff-Sloan-Logo.png"
              alt="Langstaff & Sloan"
              className="footer-logo"
            />
            <p>
              Licensed electrical contractors serving Toronto and the GTA since 1991.
              We provide dependable residential and commercial electrical services
              including repairs, rewiring, lighting retrofits, service upgrades, and sub-metering.
            </p>
            <p>
              Known for our methodical process, clear documentation, and strict code
              compliance, we help property owners and businesses maintain safe, reliable
              electrical systems built for long-term performance.
            </p>
          </div>
          <div className="footer-col">
            <h4>Residential</h4>
            <ul>
              <li><a href="#services">Aluminum Wiring Replacement</a></li>
              <li><a href="#services">Breaker Panel Installations</a></li>
              <li><a href="#services">Cloth/Rubber Wiring</a></li>
              <li><a href="#services">Electrical Panel Upgrade</a></li>
              <li><a href="#services">Knob and Tube Rewiring</a></li>
              <li><a href="#services">Pot Light Repair & Replace</a></li>
              <li><a href="#services">Service Calls</a></li>
              <li><a href="#services">Service Upgrades</a></li>
              <li><a href="#services">Whole Home Assessments</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Commercial</h4>
            <ul>
              <li><a href="#services">Leasehold Improvements</a></li>
              <li><a href="#services">New and Retrofit Lighting</a></li>
              <li><a href="#services">Service Calls</a></li>
              <li><a href="#services">Sub Metering</a></li>
              <li><a href="#services">EV Chargers</a></li>
              <li><a href="#services">Electrical Construction</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-contact-item">
              <FaMapMarkerAlt className="icon" />
              <span>6-300 New Toronto Street, Toronto, Ontario M8V 2E8</span>
            </div>
            <div className="footer-contact-item">
              <FaPhone className="icon" />
              <a href="tel:416-503-2033">416-503-2033</a>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope className="icon" />
              <a href="mailto:rob@langstaffandsloan.ca">rob@langstaffandsloan.ca</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Langstaff & Sloan Inc. All rights reserved.</span>
          <div className="footer-social">
            <a href="https://www.facebook.com/LangstaffandSloan/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
