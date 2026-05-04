import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const steps = [
  {
    number: 1,
    title: 'Fix Problems in 1 Day',
    description: "You'll have a master electrician at your doorstep in 40 minutes, ready to fix most issues on the spot.",
    cta: 'Get Now',
  },
  {
    number: 2,
    title: '3% Spring Discount',
    description: 'Get 3% off your first hour on service calls with clear, competitive pricing.',
    cta: 'Check Prices',
  },
  {
    number: 3,
    title: '100% Risk Free',
    description: "You're protected with licensed work done right the first time — no stress, no guesswork.",
    cta: 'Get Started',
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Fast. Safe. Reliable.</span>
          <h2 className="section-title">The Fastest & Safest Way to Get It Fixed!</h2>
        </div>
        <p className="hiw-description">
          Everything works the way it should again — with solutions designed to last 3+ years without recurring issues.
        </p>
        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>
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
    </section>
  );
}

export default HowItWorks;
