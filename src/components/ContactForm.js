import React, { useState } from 'react';
import { FaPhone, FaArrowRight } from 'react-icons/fa';

function ContactForm() {
  const [formData, setFormData] = useState({
    needs: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly.');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-left">
          <h2>Get An Electrician Sent to Your Doorstep in 40 Minutes!</h2>
          <p>
            Call a licensed electrician now for fast, reliable service. We handle
            everything from simple repairs to full rewiring projects.
          </p>
          <a href="tel:416-503-2033" className="btn-primary">
            <FaPhone /> Call A Licensed Electrician Now!
          </a>
        </div>
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Get Your Free Estimate</h3>
            <div className="form-group">
              <label>Your Electrical Needs *</label>
              <select name="needs" value={formData.needs} onChange={handleChange} required>
                <option value="">Select a service...</option>
                <option value="repairs">Electrical Repairs</option>
                <option value="pot-lights">Pot Lights</option>
                <option value="panel">Panel Upgrade</option>
                <option value="knob-tube">Knob & Tube Replacement</option>
                <option value="ev-charger">EV Charger Installation</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
            <div className="form-group">
              <label>Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(416) 000-0000" />
            </div>
            <button type="submit" className="form-submit">
              Send <FaArrowRight style={{ marginLeft: 8 }} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
