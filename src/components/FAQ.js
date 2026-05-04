import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: 'Do you offer same-day service?',
    answer: 'Yes. For most repairs and urgent issues, we can provide same-day service depending on availability.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve Toronto and surrounding GTA areas including Scarborough, North York, Etobicoke, Mississauga, Oakville, Burlington, Vaughan, Brampton, and Markham. Contact us to confirm your location.',
  },
  {
    question: 'Do you provide free quotes?',
    answer: 'Yes. We provide clear quotes so you know exactly what to expect before work begins.',
  },
  {
    question: 'Can you handle emergency electrical repairs?',
    answer: 'Yes. We handle urgent issues like power loss, tripping breakers, and faulty outlets.',
  },
  {
    question: 'What types of EV chargers do you install?',
    answer: 'We install Level 1, Level 2, and advanced charging systems based on your needs.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes. We are fully licensed and insured for both residential and commercial work.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}>
              <button className="faq-question" onClick={() => toggle(i)}>
                {faq.question}
                {openIndex === i ? (
                  <FaMinus className="faq-icon open" />
                ) : (
                  <FaPlus className="faq-icon" />
                )}
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
