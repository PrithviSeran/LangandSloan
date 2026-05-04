import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1 - Logo & Description */}
          <div className="footer-col">
            <img
              src="/images/logo.png"
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
            <div className="footer-social">
              <a href="https://www.facebook.com/LangstaffandSloan/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com/LangstaffSloan" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.linkedin.com/company/langstaff-sloan/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Residential</a></li>
              <li><a href="#services">Commercial</a></li>
              <li><a href="#reviews">Testimonials</a></li>
              <li><a href="#faq">Blogs</a></li>
              <li><a href="#areas">Locations</a></li>
              <li><a href="#faq">Sitemap</a></li>
            </ul>
          </div>

          {/* Column 3 - Residential */}
          <div className="footer-col">
            <h4>Residential</h4>
            <ul>
              <li><a href="#services">Aluminum Wiring Replacement</a></li>
              <li><a href="#services">Breaker Panel Installations</a></li>
              <li><a href="#services">Cloth & Rubber Wiring</a></li>
              <li><a href="#services">Electrical Panel Upgrade</a></li>
              <li><a href="#services">Knob and Tube Rewiring</a></li>
              <li><a href="#services">Pot Light Repair & Replace</a></li>
              <li><a href="#services">Service Calls</a></li>
              <li><a href="#services">Service Upgrades</a></li>
              <li><a href="#services">Whole Home Assessments</a></li>
              <li><a href="#services">Electrical Rewiring</a></li>
              <li><a href="#services">Electrical System Design & Build</a></li>
              <li><a href="#services">EV Chargers</a></li>
              <li><a href="#services">Generators</a></li>
              <li><a href="#services">Solar</a></li>
              <li><a href="#services">Electrical Contractors</a></li>
              <li><a href="#services">Residential Electrical Services</a></li>
            </ul>
          </div>

          {/* Column 4 - Commercial */}
          <div className="footer-col">
            <h4>Commercial</h4>
            <ul>
              <li><a href="#services">New and Retrofit Lighting</a></li>
              <li><a href="#services">Service Calls/Troubleshooting</a></li>
              <li><a href="#services">Commercial Sub-Metering</a></li>
              <li><a href="#services">Lease Hold Improvements</a></li>
              <li><a href="#services">EV Chargers</a></li>
              <li><a href="#services">Electrical Construction</a></li>
              <li><a href="#services">Electrical Panel Upgrade</a></li>
              <li><a href="#services">Electrical Contractors</a></li>
              <li><a href="#services">Design and Build</a></li>
              <li><a href="#services">Generators</a></li>
              <li><a href="#services">Solar</a></li>
              <li><a href="#services">Commercial Electrical Services</a></li>
            </ul>
          </div>

          {/* Column 5 - Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-contact-item">
              <FaMapMarkerAlt className="icon" />
              <span>6-300 New Toronto Street, Toronto, Ontario M8V 2E8</span>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope className="icon" />
              <a href="mailto:rob@langstaffandsloan.ca">rob@langstaffandsloan.ca</a>
            </div>
            <div className="footer-contact-item">
              <FaPhone className="icon" />
              <a href="tel:647-492-8193">647-492-8193</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            COPYRIGHT&copy; 2026 LANGSTAFF & SLOAN, ALL RIGHTS RESERVED | <a href="/privacy-policy">Privacy Policy</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
