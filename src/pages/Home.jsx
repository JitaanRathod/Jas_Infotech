import { Link } from 'react-router-dom';
import {
  BadgeCheck, ArrowRight, BarChart3, MessageCircle, Cloud,
  ShieldCheck, Headphones, Zap, MapPin, Users, Clock, Package,
  Factory, ShoppingBag, GraduationCap, HeartPulse,
  Phone
} from 'lucide-react';

import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import ProductCard from '../components/ProductCard';
import ServiceCard from '../components/ServiceCard';

import img1 from '../assets/image1.png';
import img2 from '../assets/image2.png';
import img8 from '../assets/image8.png';
import img9 from '../assets/image9.png';

import '../styles/home.css';

/* ---- Data ---- */
const SERVICES = [
  {
    icon: BarChart3,
    title: 'Tally Prime',
    description:
      'Complete accounting & business management software — from GST billing to payroll, inventory, and financial reports.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Integration',
    description:
      'Send invoices, payment reminders, and statements directly via WhatsApp from inside Tally. No third-party apps needed.',
  },
  {
    icon: Cloud,
    title: 'Tally on Cloud',
    description:
      'Access your Tally data anywhere, anytime — hosted securely on enterprise cloud with daily backups.',
  },
];

const FEATURED_PRODUCTS = [
  { image: img9, name: 'Business Laptops', category: 'Computing', badge: 'Popular', description: 'HP, Dell, Lenovo — built for office & field use.' },
  { image: img2, name: 'HP Printers', category: 'Printing', badge: 'Best Seller', description: 'LaserJet & InkJet for professional office printing.' },
  { image: img1, name: 'Netgear Routers', category: 'Networking', description: 'High-speed wired & wireless routers for SMEs.' },
  { image: img8, name: 'Access Points', category: 'Networking', description: 'Enterprise ceiling & wall-mount WiFi solutions.' },
];

const WHY_FEATURES = [
  { icon: ShieldCheck, title: 'Authorized Partner', desc: 'Certified dealer for Tally & top hardware brands like HP, Netgear, D-Link & WD.' },
  { icon: Headphones, title: 'After-Sales Support', desc: 'Dedicated support team for troubleshooting, maintenance & upgrades.' },
  { icon: Zap, title: 'Fast Delivery & Installation', desc: 'Delivery and installation within a week.' },
  { icon: MapPin, title: 'Local & Reliable', desc: 'Serving Vapi, Silvassa, Daman & surrounding industrial belt since inception.' },
];

const INDUSTRY_TEASERS = [
  { icon: Factory,      label: 'Manufacturing' },
  { icon: GraduationCap, label: 'Education' },
  { icon: ShoppingBag, label: 'Retail' },
  { icon: HeartPulse,  label: 'Healthcare' },
];

/* ---- Component ---- */
const Home = () => {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="hero" aria-label="Hero">
        <div className="hero__bg-grid" aria-hidden="true" />

        <div className="hero__inner">
          {/* Left content */}
          <div className="hero__content">
            <div className="hero__badge">
              <BadgeCheck size={14} />
              Authorized Hardware and Software Solutions Provider
            </div>

            <h1 className="hero__title">
              Powering Your Business<br />
              with <span>Smart Technology</span>
            </h1>

            <p className="hero__subtitle">
              Tally solutions, cloud services, and enterprise hardware —
              all from one trusted partner in Vapi.
            </p>

            <div className="hero__ctas">
              <Link to="/products" className="btn btn--red" id="hero-explore-btn">
                Explore Products
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn--ghost" id="hero-contact-btn">
                Contact Us →
              </Link>
            </div>
          </div>

          {/* Right visual */}
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__image-card">
              <img src={img9} alt="Business laptop for enterprise use" />
              <div className="hero__image-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS BAR ========== */}
      <section className="stats-bar" aria-label="Company statistics">
        <div className="container">
          <div className="stats-bar__inner">
            {[
              { icon: Users,   target: 500, suffix: '+', label: 'Happy Clients' },
              { icon: Clock,   target: 15,  suffix: '+', label: 'Years Experience' },
              { icon: Package, target: 1000, suffix: '+', label: 'Products Sold' },
              { icon: Headphones, target: 24, suffix: '/7', label: 'Support' },
            ].map(({ icon: Icon, target, suffix, label }) => (
              <div className="stats-bar__item" key={label}>
                <div className="stats-bar__icon" aria-hidden="true">
                  <Icon size={20} />
                </div>
                <div className="stats-bar__number">
                  <AnimatedCounter target={target} suffix={suffix} />
                </div>
                <div className="stats-bar__label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED HARDWARE ========== */}
      <section className="featured-products" aria-labelledby="hardware-heading">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Hardware</span>
            <h2 id="hardware-heading" className="section-heading">
              Hardware <span>Built for Business</span>
            </h2>
          </ScrollReveal>

          <div className="featured-products__grid">
            {FEATURED_PRODUCTS.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 100}>
                <ProductCard
                  image={p.image}
                  name={p.name}
                  category={p.category}
                  badge={p.badge}
                  description={p.description}
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="featured-products__footer">
              <Link to="/products" className="btn btn--red" id="view-all-products-btn">
                View All Products
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SOFTWARE SERVICES ========== */}
      <section className="services-section" aria-labelledby="services-heading">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">What We Offer</span>
            <h2 id="services-heading" className="section-heading">
              Tally Solutions &amp; <span>Cloud Services</span>
            </h2>
          </ScrollReveal>

          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 120}>
                <ServiceCard icon={s.icon} title={s.title} description={s.description} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="why-us" aria-labelledby="why-heading">
        <div className="container">
          <div className="why-us__inner">
            <ScrollReveal>
              <div>
                <span className="section-label">Why JAS Infotech</span>
                <h2 id="why-heading" className="why-us__heading">
                  Your Trusted <span style={{ color: 'var(--red-primary)' }}>Technology Partner</span>
                </h2>
                <p className="why-us__lead">
                  We don't just sell products — we build long-term technology
                  partnerships. From setup to support, we're with you every step.
                </p>
              </div>
            </ScrollReveal>

            <div className="why-us__features">
              {WHY_FEATURES.map((f, i) => (
                <ScrollReveal key={f.title} delay={i * 80}>
                  <div className="why-feature">
                    <div className="why-feature__icon" aria-hidden="true">
                      <f.icon size={20} />
                    </div>
                    <div>
                      <div className="why-feature__title">{f.title}</div>
                      <div className="why-feature__desc">{f.desc}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <section className="cta-banner" aria-label="Call to action">
        <div className="container">
          <ScrollReveal>
            <div className="cta-banner__inner">
              <h2>Ready to Upgrade Your Business Technology?</h2>
              <p>Talk to our experts today — no commitment required.</p>
              <a
                href="tel:+919824186968"
                className="btn btn--white"
                id="cta-call-btn"
                aria-label="Call JAS Infotech"
              >
                <Phone size={16} />
                Call Now: +91 98241 86968
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== INDUSTRIES TEASER ========== */}
      <section className="industries-teaser" aria-labelledby="industries-heading">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Sectors We Serve</span>
            <h2 id="industries-heading" className="section-heading">
              Trusted Across <span>Every Industry</span>
            </h2>
          </ScrollReveal>

          <div className="industries-teaser__strip">
            {INDUSTRY_TEASERS.map(({ icon: Icon, label }, i) => (
              <ScrollReveal key={label} delay={i * 80}>
                <Link to="/industries" className="industry-teaser-card" aria-label={`${label} sector`}>
                  <div className="industry-teaser-card__icon" aria-hidden="true">
                    <Icon size={26} />
                  </div>
                  <span className="industry-teaser-card__label">{label}</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
