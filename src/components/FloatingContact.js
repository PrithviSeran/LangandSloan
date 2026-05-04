import React from 'react';
import { FaPhone, FaEnvelope, FaArrowUp } from 'react-icons/fa';

function FloatingContact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="floating-contact">
        <a href="tel:416-503-2033" className="floating-btn floating-call" title="Call Now">
          <FaPhone />
        </a>
        <a href="mailto:rob@langstaffandsloan.ca" className="floating-btn floating-email" title="Email Us">
          <FaEnvelope />
        </a>
      </div>
      <button className="scroll-top" onClick={scrollToTop} title="Back to top">
        <FaArrowUp />
      </button>
    </>
  );
}

export default FloatingContact;
