import { Link } from 'react-router-dom';
import {
  Shield, Truck, Wrench,
  Factory, ShoppingBag, GraduationCap, Building2, HeartPulse
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import IndustryCard from '../components/IndustryCard';
import img7 from '../assets/image7.png';
import '../styles/industries.css';

const INDUSTRIES = [
  {
    image: img7,
    icon: null,
    title: 'Safety & Security',
    description: 'Surveillance cameras, access control systems, alarm hardware supported by our enterprise networking setup. We help factories and buildings stay protected.',
  },
  {
    image: null,
    icon: Factory,
    title: 'Manufacturing',
    description: 'ERP with Tally for production tracking, barcode printers, LAN/WAN setup for factory floors. Streamline operations with reliable tech.',
  },
  {
    image: null,
    icon: ShoppingBag,
    title: 'Retail & Trading',
    description: 'POS-ready systems, GST billing with Tally Prime, receipt printers, and networking for multi-branch retail stores.',
  },
  {
    image: null,
    icon: GraduationCap,
    title: 'Education',
    description: 'Laptops, projectors, networking infrastructure for schools and coaching centres. Affordable, reliable, and education-focused.',
  },
  {
    image: null,
    icon: Building2,
    title: 'Real Estate & Construction',
    description: 'Cloud Tally for remote project management, payroll handling, and cost tracking across multiple construction sites.',
  },
  {
    image: null,
    icon: HeartPulse,
    title: 'Healthcare & Clinics',
    description: 'Reliable printers, secure data backup, patient billing integration, and networking for clinics and diagnostic centres.',
  },
];

const TRUST_STATS = [
  {
    icon: Shield,
    value: '100%',
    label: 'Genuine Products',
    sub: 'Authorized dealer for all brands',
  },
  {
    icon: Truck,
    value: 'Same Day',
    label: 'Delivery in Vapi',
    sub: 'Order by 2PM, delivered same day',
  },
  {
    icon: Wrench,
    value: 'On-site',
    label: 'Service Support',
    sub: 'We come to your location',
  },
];

const Industries = () => {
  return (
    <>
      {/* ========== PAGE HERO ========== */}
      <section className="page-hero" aria-label="Industries page hero">
        <div className="page-hero__diagonal" aria-hidden="true" />
        <div className="container">
          <div className="page-hero__content">
            <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page">Industries</span>
            </nav>
            <h1>Industries We Serve</h1>
            <p>
              From factory floors to classrooms — we've got the tech covered.
              Trusted by hundreds of businesses across South Gujarat.
            </p>
          </div>
        </div>
      </section>

      {/* ========== INDUSTRIES GRID ========== */}
      <section className="industries-grid-section" aria-labelledby="industries-main-heading">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Sectors We Serve</span>
            <h2 id="industries-main-heading" className="section-heading">
              Built for Every <span>Industry</span>
            </h2>
          </ScrollReveal>

          <div className="industries-grid" role="list">
            {INDUSTRIES.map((industry, i) => (
              <ScrollReveal key={industry.title} delay={i * 80}>
                <div role="listitem">
                  <IndustryCard
                    image={industry.image}
                    icon={industry.icon}
                    title={industry.title}
                    description={industry.description}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TRUST STATS ========== */}
      <section className="industries-trust" aria-labelledby="trust-heading">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Why Partners Trust Us</span>
            <h2 id="trust-heading" className="section-heading">
              Our <span>Commitment</span> to You
            </h2>
          </ScrollReveal>

          <div className="industries-trust__grid">
            {TRUST_STATS.map(({ icon: Icon, value, label, sub }, i) => (
              <ScrollReveal key={label} delay={i * 120}>
                <div className="trust-stat">
                  <div className="trust-stat__icon" aria-hidden="true">
                    <Icon size={28} />
                  </div>
                  <div className="trust-stat__value">{value}</div>
                  <div className="trust-stat__label">{label}</div>
                  <div className="trust-stat__sub">{sub}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
