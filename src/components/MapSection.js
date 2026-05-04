import React from 'react';

function MapSection() {
  return (
    <section className="map-section">
      <iframe
        title="Langstaff & Sloan Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.123!2d-79.5073!3d43.6012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b47a4c3e0b0c1%3A0x1234567890abcdef!2s300%20New%20Toronto%20St%20%236%2C%20Etobicoke%2C%20ON%20M8V%202E8!5e0!3m2!1sen!2sca!4v1234567890"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}

export default MapSection;
