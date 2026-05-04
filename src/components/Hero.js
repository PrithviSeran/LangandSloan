import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="container">
        <div className="hero-content">
          <p className="hero-pretitle">
            Residential Electrician Services Near Me – <strong>Toronto</strong> | Langstaff & Sloan Inc
          </p>
          <h1 className="hero-title">
            Get Your Home Wired in <span className="green">1 Hour</span> for <span className="green">3% Less!</span>
          </h1>
          <a href="#services" className="hero-find-btn">Find Your Electrical Service</a>
          <div className="hero-locations">
            <button className="hero-location-btn">Scarborough | North York | Markham</button>
            <button className="hero-location-btn">Mississauga | Brampton | Oakville</button>
            <button className="hero-location-btn">Vaughan | Burlington</button>
          </div>
          <div className="hero-credentials">
            <div className="hero-credential">
              <FaCheckCircle className="check-icon" />
              <span>ESA Licensed</span>
            </div>
            <div className="hero-credential">
              <FaCheckCircle className="check-icon" />
              <span>40+ Years of Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
