import React from 'react';
import { FaPlug, FaLightbulb, FaBolt, FaHome, FaChargingStation, FaTools, FaArrowRight, FaCircle } from 'react-icons/fa';

const services = [
  {
    icon: <FaPlug />,
    title: 'Electrical Repairs (Outlets-Breakers)',
    subtitle: 'If You Have:',
    items: [
      { bold: 'Hot outlets', text: 'that provide 0 power.' },
      { bold: 'Flickering lights', text: 'and inconsistent power.' },
      { bold: 'Sparks and burning smells', text: 'from outlets.' },
    ],
    cta: 'Get 3% Off',
  },
  {
    icon: <FaLightbulb />,
    title: 'Pot Lights (Recessed Lighting)',
    subtitle: 'If You Have:',
    items: [
      { bold: 'Bulbs are flickering', text: 'or burnt-out.' },
      { bold: 'Sagging light trim', text: 'or blown sockets.' },
      { bold: 'Faulty switches', text: 'or loose connections.' },
    ],
    cta: 'Check Prices',
  },
  {
    icon: <FaBolt />,
    title: 'Panel Upgrades / Replacements',
    subtitle: 'If You Have:',
    items: [
      { bold: 'Frequent breaker trips', text: '/ power issues.' },
      { bold: 'Higher energy usage', text: 'in homes.' },
      { bold: 'Old home', text: 'with outdated panels.' },
    ],
    cta: 'Upgrade Today',
  },
  {
    icon: <FaHome />,
    title: 'Knob & Tube Wiring Replacement',
    subtitle: 'If You Have an Old Home:',
    items: [
      { bold: 'Knob & tube wiring', text: '(pre-1950s).' },
      { bold: 'Flickering lights', text: ', blown fuses.' },
      { bold: 'Burning smells', text: 'or warm outlets.' },
    ],
    cta: 'Get Free Estimate',
  },
  {
    icon: <FaChargingStation />,
    title: 'EV Charger Installation',
    subtitle: 'Pick Your Charger:',
    items: [
      { bold: 'Level 1:', text: 'Basic home charging.' },
      { bold: 'Level 2:', text: 'Faster daily use.' },
      { bold: 'Level 3:', text: 'High-speed charging.' },
    ],
    cta: 'Install Now',
    extra: 'Install within 1 day (Start Charging ASAP)',
  },
  {
    icon: <FaTools />,
    title: "Not Sure What's Wrong?",
    subtitle: 'If you have power issues with no clear cause...',
    items: [
      { bold: '', text: "We'll find the exact problem fast." },
      { bold: '', text: 'Call an expert electrician near you.' },
    ],
    cta: 'Talk to an Electrician',
  },
];

function ServiceCards() {
  return (
    <section className="service-cards" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">What Electrical Solution Do You Need?</h2>
          <p className="section-subtitle">
            Choose the exact service that matches your issue and get a licensed electrician dispatched fast — no guesswork, no delays.
          </p>
        </div>
        <div className="cards-grid">
          {services.map((service, i) => (
            <div className="service-card" key={i}>
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="card-subtitle">{service.subtitle}</p>
              <ul>
                {service.items.map((item, j) => (
                  <li key={j}>
                    <FaCircle className="bullet" />
                    <span>
                      {item.bold && <strong>{item.bold} </strong>}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
              {service.extra && (
                <p style={{ fontSize: '13px', color: '#28a745', fontWeight: 600, marginBottom: 16 }}>
                  {service.extra}
                </p>
              )}
              <a href="#contact" className="card-cta">
                {service.cta} <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCards;
