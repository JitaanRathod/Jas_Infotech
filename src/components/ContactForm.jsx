import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-form__success">
        <div className="contact-form__success__icon">
          <CheckCircle2 size={72} />
        </div>
        <h3>Message Received! 🎉</h3>
        <p>We'll reach out within 24 hours.<br />
          For urgent help, call us at{' '}
          <a href="tel:+919824186968" style={{ color: 'var(--red-primary)' }}>
            +91 98241 86968
          </a>
        </p>
        <button
          className="btn btn--outline-red"
          style={{ marginTop: '24px' }}
          onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', service: '', message: '' }); }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h3>Send Us a Message</h3>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="service">I'm Interested In</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">— Select a service —</option>
          <option value="tally">Tally Prime</option>
          <option value="whatsapp">WhatsApp Integration</option>
          <option value="cloud">Tally on Cloud</option>
          <option value="laptop">Laptop / Desktop</option>
          <option value="printer">Printer</option>
          <option value="networking">Networking Equipment</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your requirement..."
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn--red contact-form__submit" id="send-enquiry-btn">
        <Send size={16} />
        Send Enquiry →
      </button>
    </form>
  );
};

export default ContactForm;
