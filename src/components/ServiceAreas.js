import React from 'react';

const areas = [
  'Toronto', 'Scarborough', 'North York', 'East York', 'York',
  'Etobicoke', 'Mississauga', 'Brampton', 'Oakville', 'Burlington',
  'Vaughan', 'Markham', 'Richmond Hill',
];

function ServiceAreas() {
  return (
    <section className="service-areas" id="areas">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Available Teams Around Toronto</span>
          <h2 className="section-title">Service Areas</h2>
          <p className="section-subtitle">
            We serve Toronto and the Greater Toronto Area with fast, reliable electrical services.
          </p>
        </div>
        <div className="areas-grid">
          {areas.map((area) => (
            <span className="area-tag" key={area}>{area}</span>
          ))}
        </div>
        <p className="areas-note">Please contact us if you are outside of these areas</p>
      </div>
    </section>
  );
}

export default ServiceAreas;
