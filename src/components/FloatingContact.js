import React from 'react';
import { FaPhone, FaFileAlt } from 'react-icons/fa';

function FloatingContact() {
  return (
    <div className="floating-contact">
      <a href="#contact" className="floating-btn floating-estimate" title="Get an Estimate">
        <FaFileAlt />
      </a>
      <a href="tel:416-503-2033" className="floating-btn floating-call" title="Call Now">
        <FaPhone />
      </a>
    </div>
  );
}

export default FloatingContact;
