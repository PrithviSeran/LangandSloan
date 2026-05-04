import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const faqs = [
  {
    question: 'Do you serve Toronto and surrounding areas?',
    answer: 'We serve Toronto and surrounding GTA areas. Contact us to confirm your location.',
  },
  {
    question: 'Are your prices transparent?',
    answer: 'Yes. We provide clear quotes so you know exactly what to expect before work begins.',
  },
  {
    question: 'Do you offer emergency electrical services?',
    answer: 'Yes. We handle urgent issues like power loss, tripping breakers, and faulty outlets.',
  },
  {
    question: 'What type of EV chargers do you install?',
    answer: 'We install Level 1, Level 2, and advanced charging systems based on your needs.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes. We are fully licensed and insured for both residential and commercial work.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className={`faq-item ${openIndex === i ? 'active' : ''}`} key={i}>
              <button className="faq-question" onClick={() => toggle(i)}>
                {faq.question}
                <FaPlus className={`faq-icon ${openIndex === i ? 'open' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
