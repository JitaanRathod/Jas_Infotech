import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';
import '../styles/footer.css';

const QUICK_LINKS = [
  { to: '/',           label: 'Home' },
  { to: '/about',      label: 'About Us' },
  { to: '/products',   label: 'Products' },
  { to: '/industries', label: 'Industries' },
  { to: '/contact',    label: 'Contact Us' },
];

const SERVICES = [
  'Tally Prime',
  'WhatsApp Integration',
  'Tally on Cloud',
  'Annual Maintenance Contracts',
  'Network Setup & Support',
  'On-site Installation',
];

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">

            {/* Column 1 — Brand */}
            <div>
              <img src={logo} alt="JAS Infotech" className="footer__brand-logo" />
              <p className="footer__tagline">
                Your trusted technology partner in Vapi — providing Tally solutions,
                cloud services, and enterprise hardware since day one.
              </p>
              <div className="footer__socials">
                <a
                  href="https://facebook.com"
                  className="footer__social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://instagram.com"
                  className="footer__social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="footer__social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="mailto:jasit.vapi@gmail.com"
                  className="footer__social-btn"
                  aria-label="Email JAS Infotech"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div>
              <p className="footer__col-title">Quick Links</p>
              <ul className="footer__links" role="list">
                {QUICK_LINKS.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Services */}
            <div>
              <p className="footer__col-title">Our Services</p>
              <ul className="footer__links" role="list">
                {SERVICES.map((s) => (
                  <li key={s}>
                    <Link to="/products">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Contact */}
            <div>
              <p className="footer__col-title">Contact Info</p>
              <div className="footer__contact-item">
                <Phone size={16} />
                <div>
                  <a href="tel:+919824186968">+91 98241 86968</a>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>
                    Mon–Sat, 9:00 AM – 7:00 PM
                  </div>
                </div>
              </div>
              <div className="footer__contact-item">
                <Mail size={16} />
                <a href="mailto:jasit.vapi@gmail.com">jasit.vapi@gmail.com</a>
              </div>
              <div className="footer__contact-item">
                <MapPin size={16} />
                <address style={{ fontStyle: 'normal' }}>
                  Shop No. 9, Skylon Building,<br />
                  Char Rasta, Silvassa–Vapi Road,<br />
                  GIDC, Vapi – 396195, Gujarat
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copyright">
              © 2025 JAS Infotech. All rights reserved.
            </p>
            <div className="footer__bottom-links">
              <Link to="/about">About</Link>
              <Link to="/contact">Support</Link>
              <a href="mailto:jasit.vapi@gmail.com">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
