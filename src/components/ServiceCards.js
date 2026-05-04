import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const services = [
  {
    image: '/images/card-outlet.jpg',
    title: 'Electrical Repairs (Outlets\u2013Breakers)',
    subtitle: 'If You Have:',
    items: [
      { green: 'Hot outlets', text: ' that provide 0 power.' },
      { green: 'Flickering lights', text: ' and inconsistent power.' },
      { green: 'Sparks and burning smells', text: ' from outlets.' },
    ],
    cta: 'Get 3% Off',
  },
  {
    image: '/images/card-potlights.png',
    title: 'Pot Lights (Recessed Lighting)',
    subtitle: 'If You Have:',
    items: [
      { green: 'Bulbs are flickering or burnt-out', text: '.' },
      { green: 'Sagging light trim', text: ' or blown sockets.' },
      { green: 'Faulty switches', text: ' or loose connections.' },
    ],
    cta: null,
  },
  {
    image: 'images/ChatGPT-Image-Apr-7-2026-05_09_28-AM.png',
    title: 'Panel Upgrades / Replacements',
    subtitle: 'If You Have:',
    items: [
      { green: 'Frequent breaker trips', text: ' / power issues.' },
      { green: 'higher energy usage', text: ' in homes.' },
      { green: '', text: 'Home is old with outdated panels.' },
    ],
    cta: 'Upgrade Today',
  },
  {
    image: 'images/card-panel.png',
    title: 'Knob & Tube Wiring Replacement',
    subtitle: 'If You Have an Old Home:',
    items: [
      { green: 'Knob & tube wiring', text: ' (pre-1950s).' },
      { green: 'Flickering lights', text: ', blown fuses.' },
      { green: 'Burning smells', text: ' or warm outlets.' },
    ],
    cta: 'Get Free Estimate',
  },
  {
    image: '/images/8.jpg' ,
    title: 'EV Charger Installation',
    subtitle: 'Pick Your Charger:',
    items: [
      { green: 'Level 1:', text: ' Basic home charging.' },
      { green: 'Level 2:', text: ' Faster daily use.' },
      { green: 'Level 3:', text: ' High-speed charging.' },
      { green: 'Install within 1 day (Start Charging ASAP)', text: '' },
    ],
    cta: null,
  },
  {
    image: '/images/card-notsure.png',
    title: "Not Sure What\u2019s Wrong?",
    subtitle: '',
    items: [
      { green: '', text: 'If you have power issues with no clear cause...' },
      { green: 'exact problem', text: "We'll find the ", after: ' fast.' },
      { green: 'expert electrician near you', text: 'Call an ', after: '.' },
    ],
    cta: 'Talk to an Electrician',
  },
];

function ServiceCards() {
  return (
    <section className="service-cards" id="services">
      <div className="service-cards-inner">
        <div className="container">
          <div className="section-header">
            <div className="section-header-accent" />
            <h2 className="section-title">What Electrical Solution Do You Need?</h2>
            <p className="section-subtitle">
              Choose the exact service that matches your issue and get a licensed electrician
              dispatched fast&mdash;no guesswork, no delays.
            </p>
          </div>
          <div className="cards-grid">
            {services.map((service, i) => (
              <div className="service-card" key={i}>
                <div className="card-image-wrapper">
                  <img src={service.image} alt={service.title} className="card-image" />
                  <div className="card-image-overlay" />
                </div>
                <div className="card-body">
                  <h3>{service.title}</h3>
                  {service.subtitle && <p className="card-subtitle">{service.subtitle}</p>}
                  <ul>
                    {service.items.map((item, j) => (
                      <li key={j}>
                        {item.text && !item.after && (
                          <span>&bull; {item.green && <span className="green-text">{item.green}</span>}{item.text}</span>
                        )}
                        {item.after && (
                          <span>&bull; {item.text}<span className="green-text">{item.green}</span>{item.after}</span>
                        )}
                        {!item.text && item.green && (
                          <span>&bull; <span className="green-text">{item.green}</span></span>
                        )}
                      </li>
                    ))}
                  </ul>
                  {service.cta && (
                    <a href="#contact" className="card-cta">
                      {service.cta} <FaArrowRight className="cta-arrow" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceCards;
