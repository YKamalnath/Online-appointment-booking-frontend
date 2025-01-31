
import React, { useState } from 'react';
import './Help.css';

function Help() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/contact-doctor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Error sending message');
    }
  };

  return (
    <div className="help-container">
      <h1 className="title">How Can We Help You?</h1>
      <div className="help-content">
        <section className="faq-section">
          <h2>FAQs</h2>
          <div className="faq">
            <h3>How do I book an appointment?</h3>
            <p>
              To book an appointment, go to the appointments page, select your preferred doctor,
              choose a time slot, and confirm your booking.
            </p>
          </div>
          <div className="faq">
            <h3>How can I contact a doctor?</h3>
            <p>
              Once you’ve booked an appointment, you can find the doctor's contact information on
              the confirmation page.
            </p>
          </div>
          <div className="faq">
            <h3>What if I need to cancel an appointment?</h3>
            <p>
              You can cancel an appointment by visiting the "My Appointments" section in your
              profile and selecting "Cancel."
            </p>
          </div>
        </section>

        <section className="contact-section">
          <h2>Contact Us</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Help;
