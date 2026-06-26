import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ContactForm from '../components/ContactForm';
import '../styles/contact.css';

const Contact = () => {
  return (
    <>
      {/* ========== PAGE HERO ========== */}
      <section className="page-hero" aria-label="Contact page hero">
        <div className="page-hero__diagonal" aria-hidden="true" />
        <div className="container">
          <div className="page-hero__content">
            <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page">Contact</span>
            </nav>
            <h1>Get in Touch</h1>
            <p>
              We're here to help. Reach out for quotes, support, or general queries —
              our team responds within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ========== INFO CARDS ========== */}
      <section className="contact-info" aria-labelledby="contact-info-heading">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Reach Us</span>
            <h2 id="contact-info-heading" className="section-heading">
              How to <span>Contact Us</span>
            </h2>
          </ScrollReveal>

          <div className="contact-info__cards">
            {/* Phone */}
            <ScrollReveal delay={0}>
              <div className="contact-info-card">
                <div className="contact-info-card__icon" aria-hidden="true">
                  <Phone size={26} />
                </div>
                <h3>Call Us</h3>
                <a href="tel:+919824186968">+91 98241 86968</a>
                <p className="contact-info-card__hours">Mon–Sat, 9:00 AM – 7:00 PM</p>
              </div>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal delay={120}>
              <div className="contact-info-card">
                <div className="contact-info-card__icon" aria-hidden="true">
                  <Mail size={26} />
                </div>
                <h3>Email Us</h3>
                <a href="mailto:jasit.vapi@gmail.com">jasit.vapi@gmail.com</a>
                <p className="contact-info-card__hours">Quick email response guaranteed</p>
              </div>
            </ScrollReveal>

            {/* Address */}
            <ScrollReveal delay={240}>
              <div className="contact-info-card">
                <div className="contact-info-card__icon" aria-hidden="true">
                  <MapPin size={26} />
                </div>
                <h3>Visit Us</h3>
                <p>
                  Shop No. 9, Skylon Building,<br />
                  Char Rasta, GIDC Vapi – 396195
                </p>
                <p className="contact-info-card__hours">Gujarat, India</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== FORM + MAP ========== */}
      <section className="contact-split" aria-labelledby="contact-form-heading">
        <div className="container">
          <div className="contact-split__inner">
            {/* Form */}
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal delay={200}>
              <div className="contact-map">
                <h3>Find Us on the Map</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.1741607097143!2d72.90582687501766!3d20.371498381262703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0d046f9bca975%3A0x2c3b39b024fce9fb!2sGIDC%2C%20Vapi%2C%20Gujarat%20396195!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="420"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JAS Infotech Location — GIDC Vapi"
                  aria-label="Google Maps showing JAS Infotech location in GIDC Vapi"
                />
                <div className="contact-map__address">
                  <MapPin size={16} />
                  <address style={{ fontStyle: 'normal' }}>
                    Shop No. 9, Skylon Building, Char Rasta,<br />
                    Silvassa–Vapi Road, GIDC, Vapi – 396195, Gujarat
                  </address>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== WHATSAPP STRIP ========== */}
      <section className="whatsapp-strip" aria-label="WhatsApp contact option">
        <div className="container">
          <div className="whatsapp-strip__inner">
            <div className="whatsapp-strip__text">
              <MessageCircle size={40} aria-hidden="true" />
              <div>
                <h3>Prefer WhatsApp?</h3>
                <p>Chat with us directly — quick response guaranteed!</p>
              </div>
            </div>
            <a
              href="https://wa.me/919824186968?text=Hello%20JAS%20Infotech%2C%20I%20need%20help%20with..."
              className="btn btn--whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              id="whatsapp-chat-btn"
              aria-label="Open WhatsApp chat with JAS Infotech"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Open WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
