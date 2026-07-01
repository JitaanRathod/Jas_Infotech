import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BarChart3, MessageCircle, Cloud, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ProductCard from '../components/ProductCard';

import img1 from '../assets/image1.png';
import img2 from '../assets/image2.png';
import img3 from '../assets/image3.png';
import img4 from '../assets/image4.png';
import img5 from '../assets/image5.png';
import img6 from '../assets/image6.png';
import img8 from '../assets/image8.png';
import img9 from '../assets/image9.png';

import '../styles/products.css';

const SOFTWARE_PRODUCTS = [
  {
    icon: BarChart3,
    title: 'Tally Prime',
    description: 'Complete ERP & accounting for SMEs. GST-ready, fast, and easy to use.',
    features: ['Inventory', 'GST', 'Payroll', 'Reports', 'Multi-Currency', 'Audit Trail'],
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Integration with Tally',
    description: 'Send invoices, payment reminders, and statements via WhatsApp directly from Tally without switching apps.',
    features: ['Auto Invoices', 'Payment Reminders', 'Statements', 'Ledger Reports'],
  },
  {
    icon: Cloud,
    title: 'Tally on Cloud',
    description: 'Access your company data anytime, anywhere on any device — hosted on secure enterprise cloud infrastructure.',
    features: ['Remote Access', 'Daily Backups', '99.9% Uptime', 'Multi-User', 'Secure Hosting'],
  },
];

const HARDWARE_PRODUCTS = [
  { image: img9, name: 'Business Laptops',     category: 'Computing',    badge: 'Popular',      description: 'HP, Dell, Lenovo — for offices & field use.' },
  { image: img2, name: 'HP Printers',          category: 'Printing',     badge: 'Best Seller',  description: 'LaserJet & InkJet for office use.' },
  { image: img6, name: 'Printer Ink & Toner',  category: 'Consumables',  badge: null,            description: 'Genuine cartridges for all major brands.' },
  { image: img1, name: 'Netgear Routers',      category: 'Networking',   badge: null,            description: 'High-speed wired & wireless routers.' },
  { image: img5, name: 'Exo Routers',          category: 'Networking',   badge: null,            description: 'Budget-friendly reliable routers.' },
  { image: img4, name: 'D-Link Switches',      category: 'Networking',   badge: null,            description: 'Managed & unmanaged network switches.' },
  { image: img8, name: 'Access Points',        category: 'Networking',   badge: null,            description: 'Ceiling & wall-mount enterprise WiFi.' },
  { image: img3, name: 'WD SSDs & HDDs',       category: 'Storage',      badge: null,            description: 'Fast NVMe SSDs and high-capacity HDDs.' },
];

const TABS = ['All', 'Software', 'Networking', 'Computing', 'Printing', 'Storage'];

const CATEGORY_MAP = {
  Software:   () => [],
  Networking: ['Networking'],
  Computing:  ['Computing'],
  Printing:   ['Printing', 'Consumables'],
  Storage:    ['Storage'],
};

const Products = () => {
  const [activeTab, setActiveTab] = useState('All');
  const navigate = useNavigate();

  const showSoftware = activeTab === 'All' || activeTab === 'Software';
  const showHardware = activeTab === 'All' || activeTab !== 'Software';

  const filteredHardware = activeTab === 'All' || activeTab === 'Software'
    ? HARDWARE_PRODUCTS
    : HARDWARE_PRODUCTS.filter((p) => {
        const cats = CATEGORY_MAP[activeTab] || [];
        return cats.includes(p.category);
      });

  return (
    <>
      {/* ========== PAGE HERO ========== */}
      <section className="page-hero" aria-label="Products page hero">
        <div className="page-hero__diagonal" aria-hidden="true" />
        <div className="container">
          <div className="page-hero__content">
            <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page">Products</span>
            </nav>
            <h1>Our Products &amp; Solutions</h1>
            <p>Hardware. Software. Everything your business needs — all in one place.</p>
          </div>
        </div>
      </section>

      {/* ========== TAB FILTER ========== */}
      <nav className="products-filter" aria-label="Product category filter">
        <div className="container">
          <div className="products-filter__tabs" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab}
                className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
                role="tab"
                aria-selected={activeTab === tab}
                id={`tab-${tab.toLowerCase()}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ========== HARDWARE GRID ========== */}
      {showHardware && filteredHardware.length > 0 && (
        <section className="hardware-section" aria-labelledby="hardware-heading">
          <div className="container">
            <ScrollReveal>
              <span className="section-label">Enterprise Hardware</span>
              <h2 id="hardware-heading" className="section-heading">
                <span>Hardware</span> Products
              </h2>
            </ScrollReveal>

            <div className="products-grid" role="list">
              {filteredHardware.map((product, i) => (
                <ScrollReveal key={product.name} delay={i * 60}>
                  <div role="listitem">
                    <ProductCard
                      image={product.image}
                      name={product.name}
                      category={product.category}
                      badge={product.badge}
                      description={product.description}
                      onEnquire={() => navigate('/contact')}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========== SOFTWARE ========== */}
      {showSoftware && (
        <section className="software-section" aria-labelledby="software-heading">
          <div className="container">
            <ScrollReveal>
              <span className="section-label">Authorized Reseller</span>
              <h2 id="software-heading" className="section-heading">
                <span>Software</span> Solutions
              </h2>
            </ScrollReveal>

            <div className="software-cards">
              {SOFTWARE_PRODUCTS.map((product, i) => (
                <ScrollReveal key={product.title} delay={i * 100}>
                  <div className="software-card">
                    <div className="software-card__icon" aria-hidden="true">
                      <product.icon size={30} />
                    </div>
                    <div className="software-card__body">
                      <h3 className="software-card__title">{product.title}</h3>
                      <p className="software-card__desc">{product.description}</p>
                      <div className="software-card__features">
                        {product.features.map((f) => (
                          <span key={f} className="feature-tag">{f}</span>
                        ))}
                      </div>
                      <button
                        className="btn btn--outline-red"
                        onClick={() => navigate('/contact')}
                        id={`enquire-${product.title.toLowerCase().replace(/\s+/g, '-')}`}
                        aria-label={`Enquire about ${product.title}`}
                      >
                        Enquire Now
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========== ADD-ON SERVICES STRIP ========== */}
      <section className="addon-strip" aria-label="Additional services">
        <div className="container">
          <div className="addon-strip__inner">
            <p>
              <strong>We also offer:</strong>{' '}
              Annual Maintenance Contracts &nbsp;·&nbsp; On-site Installation &nbsp;·&nbsp;
              Network Setup &nbsp;·&nbsp; Data Backup Solutions
            </p>
            <Link to="/contact" className="btn btn--white" id="addon-enquire-btn">
              Get a Custom Quote
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
