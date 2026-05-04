import React from 'react';
import { FaShieldAlt, FaClock, FaArrowRight } from 'react-icons/fa';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-overlay" />
      <div className="container">
        <div className="hero-content">
          <span className="hero-badge">Residential Electrician Services Near Me - Toronto</span>
          <h1 className="hero-title">
            Get Your Home Wired in <span>1 Hour</span> for <span>3% Less!</span>
          </h1>
          <p className="hero-subtitle">
            Find Your Electrical Service
          </p>
          <div className="hero-credentials">
            <div className="hero-credential">
              <FaShieldAlt className="icon" />
              <span>ESA Licensed</span>
            </div>
            <div className="hero-credential">
              <FaClock className="icon" />
              <span>40+ Years of Experience</span>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Get An Estimate <FaArrowRight />
            </a>
            <a href="tel:416-503-2033" className="btn-secondary">
              Call 416-503-2033
            </a>
          </div>
          <div className="hero-locations">
            <button className="hero-location-btn">Scarborough | North York | Markham</button>
            <button className="hero-location-btn">Mississauga | Brampton | Oakville</button>
            <button className="hero-location-btn">Vaughan | Burlington</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
