import React, { useState } from 'react';
import { FaPhone, FaChevronLeft, FaChevronRight, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const areas = [
  {
    name: 'Burlington',
    electricians: 2,
    image: '/images/area-burlington.png',
  },
  {
    name: 'Oakville',
    electricians: 3,
    image: '/images/area-oakville.webp',
  },
  {
    name: 'Toronto',
    electricians: 5,
    image: '/images/area-toronto.jpg',
  },
  {
    name: 'Mississauga',
    electricians: 3,
    image: '/images/area-mississauga.jpg',
  },
];

function ContactForm() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [formData, setFormData] = useState({
    needs: '',
    name: '',
    email: '',
    phone: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.needs.trim()) newErrors.needs = 'Please describe your electrical needs.';
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email.';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus('sending');

    // Build mailto link as a functional fallback (opens user's email client)
    const subject = encodeURIComponent('Electrical Service Request - Langstaff & Sloan');
    const body = encodeURIComponent(
      `Electrical Needs:\n${formData.needs}\n\nName: ${formData.name}\nEmail: ${formData.email}${formData.phone ? `\nPhone: ${formData.phone}` : ''}`
    );

    // Simulate a short delay for UX, then open mailto
    await new Promise((resolve) => setTimeout(resolve, 600));

    window.location.href = `mailto:rob@langstaffandsloan.ca?subject=${subject}&body=${body}`;

    setStatus('sent');
    setFormData({ needs: '', name: '', email: '', phone: '' });

    setTimeout(() => setStatus('idle'), 5000);
  };

  const prevSlide = () => setSlideIndex((prev) => (prev === 0 ? areas.length - 1 : prev - 1));
  const nextSlide = () => setSlideIndex((prev) => (prev === areas.length - 1 ? 0 : prev + 1));

  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg" />
      <div className="container">
        <div className="contact-left">
          <h2>Get An Electrician Sent to Your Doorstep in 40 Minutes!</h2>
          <a href="tel:416-503-2033" className="call-btn">
            Call A Licensed Electrician Now! <FaPhone />
          </a>
          <form className="contact-form-wrapper" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <textarea
                name="needs"
                placeholder="Tell Us About Your Electrical Needs *"
                value={formData.needs}
                onChange={handleChange}
                className={errors.needs ? 'field-error' : ''}
              />
              {errors.needs && <span className="error-msg">{errors.needs}</span>}
            </div>
            <div className="form-row">
              <div className="form-field">
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'field-error' : ''}
                />
                {errors.name && <span className="error-msg">{errors.name}</span>}
              </div>
              <div className="form-field">
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'field-error' : ''}
                />
                {errors.email && <span className="error-msg">{errors.email}</span>}
              </div>
            </div>
            <div className="phone-input-wrapper">
              <span className="phone-flag">🇨🇦 +</span>
              <input
                type="tel"
                name="phone"
                placeholder="Number (optional)"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="send-btn" disabled={status === 'sending'}>
              {status === 'sending' && <FaSpinner className="spin-icon" />}
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send'}
            </button>
            {status === 'sent' && (
              <div className="form-success">
                <FaCheckCircle /> Your request has been sent. We'll be in touch shortly!
              </div>
            )}
          </form>
        </div>
        <div className="contact-right">
          <h3 className="teams-title">Available Teams Around Toronto</h3>
          <div className="team-slider">
            <div className="team-slide">
              <img src={areas[slideIndex].image} alt={areas[slideIndex].name} />
              <div className="team-slide-overlay">
                <h4>{areas[slideIndex].name}</h4>
                <p>{areas[slideIndex].electricians} Electricians Available.</p>
                <a href="tel:416-503-2033" className="call-now-btn">Call Now</a>
              </div>
            </div>
            <div className="slider-arrows">
              <button className="slider-arrow" onClick={prevSlide} type="button"><FaChevronLeft /></button>
              <button className="slider-arrow" onClick={nextSlide} type="button"><FaChevronRight /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
