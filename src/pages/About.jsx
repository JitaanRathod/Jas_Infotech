import { Link } from 'react-router-dom';
import { Target, Eye, Users, Award, Clock, TrendingUp, MapPin } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import img7 from '../assets/image7.png';
import '../styles/about.css';

const About = () => {
  return (
    <>
      {/* ========== PAGE HERO ========== */}
      <section className="page-hero" aria-label="About page hero">
        <div className="page-hero__diagonal" aria-hidden="true" />
        <div className="container">
          <div className="page-hero__content">
            <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page">About Us</span>
            </nav>
            <h1>About JAS Infotech</h1>
            <p>
              Your trusted technology partner in the Vapi–Silvassa corridor — delivering
              enterprise-grade IT solutions to businesses of every size.
            </p>
          </div>
        </div>
      </section>

      {/* ========== OUR STORY ========== */}
      <section className="about-story" aria-labelledby="story-heading">
        <div className="container">
          <div className="about-story__inner">
            <ScrollReveal>
              <blockquote className="about-story__quote">
                "Empowering businesses with technology since day one."
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div>
                <span className="section-label">Our Story</span>
                <p className="about-story__body">
                  JAS Infotech was founded with a simple mission: make enterprise-grade
                  technology accessible to every business in the Vapi–Silvassa corridor.
                  From Tally accounting solutions to network infrastructure, we've been
                  the trusted technology partner for hundreds of businesses across
                  manufacturing, retail, education, and healthcare.
                </p>
                <p className="about-story__body" style={{ marginTop: '16px' }}>
                  Located at the heart of Vapi's GIDC industrial belt, we understand
                  the unique technology challenges faced by SMEs in South Gujarat — and
                  we're here to solve them with practical, cost-effective solutions.
                </p>
                <div className="about-story__since">
                  ✦ Established in Vapi, Gujarat
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== MISSION & VISION ========== */}
      <section className="about-mission" aria-labelledby="mission-heading">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Our Purpose</span>
            <h2 id="mission-heading" className="section-heading">
              Mission &amp; <span>Vision</span>
            </h2>
          </ScrollReveal>

          <div className="about-mission__cards">
            <ScrollReveal delay={0}>
              <div className="mission-card mission-card--red">
                <div className="mission-card__icon">
                  <Target size={28} />
                </div>
                <h3>Our Mission</h3>
                <p>
                  To deliver reliable, affordable technology solutions that help businesses
                  grow — with honest advice, genuine products, and dedicated support.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="mission-card mission-card--dark">
                <div className="mission-card__icon">
                  <Eye size={28} />
                </div>
                <h3>Our Vision</h3>
                <p>
                  To be the most trusted IT partner in South Gujarat — a company that
                  businesses recommend to each other because we consistently exceed expectations.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== CORE VALUES ========== */}
      <section className="about-values" aria-labelledby="values-heading">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">What We Stand For</span>
            <h2 id="values-heading" className="section-heading">
              Our Core <span>Values</span>
            </h2>
          </ScrollReveal>

          <div className="about-values__grid">
            {[
              { icon: Users,      title: 'Customer First',     desc: 'Every decision starts with what\'s best for our clients.' },
              { icon: Award,      title: 'Quality Assured',    desc: 'Genuine products and certified solutions only.' },
              { icon: Clock,      title: 'Timely Support',     desc: 'We show up when you need us, not when it\'s convenient.' },
              { icon: TrendingUp, title: 'Innovation Driven',  desc: 'Constantly evolving to bring you the latest tech.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 100}>
                <div className="value-card">
                  <div className="value-card__icon" aria-hidden="true">
                    <Icon size={26} />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHAT WE OFFER ========== */}
      <section className="about-offer" aria-labelledby="offer-heading">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Our Portfolio</span>
            <h2 id="offer-heading" className="section-heading">
              What We <span>Offer</span>
            </h2>
          </ScrollReveal>

          <div className="about-offer__panels">
            <ScrollReveal delay={0}>
              <div className="offer-panel offer-panel--red">
                <div className="offer-panel__title">💻 Software Services</div>
                <ul className="offer-panel__list">
                  {['Tally Prime', 'WhatsApp Integration', 'Tally on Cloud', 'Annual Maintenance Contracts', 'Tally Training & Support', 'GST Filing Assistance'].map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="offer-panel offer-panel--dark">
                <div className="offer-panel__title">🖥️ Hardware Products</div>
                <ul className="offer-panel__list">
                  {['Laptops & Desktops', 'Monitors', 'Printers & Ink', 'SSDs & HDDs', 'Routers & Switches', 'Access Points', 'Network Cabling', 'UPS & Power Solutions'].map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== LOCATION & REACH ========== */}
      <section className="about-location" aria-label="Location and service area">
        <div className="about-location__bg">
          <img src={img7} alt="JAS Infotech serves the Vapi-Silvassa industrial belt" />
          <div className="about-location__overlay">
            <div className="container">
              <div className="about-location__text">
                <ScrollReveal>
                  <span className="section-label" style={{ color: 'rgba(255,100,100,0.9)' }}>Our Reach</span>
                  <h2>Serving the Industrial Belt</h2>
                  <p>
                    Serving the Vapi–Silvassa–Daman industrial belt with on-site support
                    and next-day delivery. Whether you're a startup or a large enterprise,
                    JAS Infotech has the resources to keep your technology running smoothly.
                  </p>
                  <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <span style={{ background: 'rgba(204,31,26,0.8)', color: '#fff', padding: '6px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600 }}>Vapi</span>
                    <span style={{ background: 'rgba(204,31,26,0.8)', color: '#fff', padding: '6px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600 }}>Silvassa</span>
                    <span style={{ background: 'rgba(204,31,26,0.8)', color: '#fff', padding: '6px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600 }}>Daman</span>
                    <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '6px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600 }}>Umbergaon</span>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
