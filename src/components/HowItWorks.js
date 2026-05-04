import React from 'react';
import { FaBolt, FaTag, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

const steps = [
  {
    icon: <FaBolt />,
    number: 1,
    title: 'Fix Problems in 1 Day',
    description: "You'll have a master electrician at your doorstep in 40 minutes, ready to fix most issues on the spot.",
    cta: 'Get Now',
  },
  {
    icon: <FaTag />,
    number: 2,
    title: '10% Spring Discount',
    description: 'Get 10% off your first hour on service calls with clear, competitive pricing.',
    cta: 'Check Prices',
  },
  {
    icon: <FaShieldAlt />,
    number: 3,
    title: '100% Risk Free',
    description: "You're protected with licensed work done right the first time\u2014no stress, no guesswork.",
    cta: 'Get Started',
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="hiw-inner">
        <div className="container">
          <div className="hiw-badge">
            <span className="hiw-dot" />
            <span>FAST. SAFE. RELIABLE.</span>
          </div>
          <h2 className="section-title">The Fastest & Safest Way to Get It Fixed!</h2>
          <p className="hiw-description">
            Everything works the way it should again&mdash;with solutions designed to last
            3+ years without recurring issues.
          </p>
          <div className="steps-grid">
            {steps.map((step) => (
              <div className="step-card" key={step.number}>
                <div className="step-icon-ring">
                  <div className="step-icon">{step.icon}</div>
                </div>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <a href="#contact" className="step-cta">
                  {step.cta} <FaArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
