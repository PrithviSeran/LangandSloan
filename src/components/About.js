import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <span className="section-label">About Us</span>
          <h2>Langstaff & Sloan Is a Licensed & Reliable Electrical Company</h2>
          <p>
            If you're looking for a reliable <strong>residential electrician in Toronto</strong>,
            Langstaff & Sloan Inc gives you licensed, insured, and professional electrical
            service from a team focused on safe, long-lasting repairs.
          </p>
          <p>
            Electrical work should never be guessed. That's why our electricians follow proper{' '}
            <strong>Ontario electrical safety standards</strong> and handle repairs, upgrades,
            and troubleshooting with the care your home deserves.
          </p>
          <p>
            Whether you're dealing with flickering lights, breaker issues, outdated wiring,
            or a problem you can't identify, our team helps find the{' '}
            <strong>real cause of the issue</strong> and gets it fixed properly.
          </p>
          <p>
            With Langstaff & Sloan Inc, you're not just hiring someone to do quick electrical
            work — you're choosing a local team that prioritizes{' '}
            <strong>safety, reliability, and peace of mind</strong>.
          </p>
        </div>
        <div className="about-image">
          <div className="about-image-wrapper">
            <img
              src="https://langstaffandsloan.com/wp-content/uploads/2014/07/sloan-headshot1-1.jpg"
              alt="President of Langstaff & Sloan Inc"
            />
          </div>
          <div className="about-credentials">
            <div className="about-credential">
              <FaCheckCircle className="icon" />
              <span>President Langstaff & Sloan Inc.</span>
            </div>
            <div className="about-credential">
              <FaCheckCircle className="icon" />
              <span>Certified Electrical Technician</span>
            </div>
            <div className="about-credential">
              <FaCheckCircle className="icon" />
              <span>Master Electrician</span>
            </div>
            <div className="about-credential">
              <FaCheckCircle className="icon" />
              <span>In business since 1991</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
