import { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please complete all required fields.');
      return;
    }
    setStatus('Thank you! Your message has been prepared for sending.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact">
      <div className="section-heading">Contact</div>
      <motion.div
        className="glass-card contact-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-grid">
            <label>
              Name
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" />
            </label>
            <label className="full-width">
              Subject
              <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
            </label>
            <label className="full-width">
              Message
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message" rows="5" />
            </label>
          </div>
          <div className="contact-actions">
            <button type="submit" className="button-primary">Send Message</button>
            <span className="contact-status">{status}</span>
          </div>
        </form>
        <p className="contact-note">
          Optional backend integration can be added for email notifications using Node.js or serverless form handlers.
        </p>
      </motion.div>
    </section>
  );
}

export default Contact;
