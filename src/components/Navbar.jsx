import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.png';
import '../styles/navbar.css';

const NAV_LINKS = [
  { to: '/',            label: 'Home' },
  { to: '/about',       label: 'About' },
  { to: '/products',    label: 'Products' },
  { to: '/industries',  label: 'Industries' },
  { to: '/contact',     label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change or Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo" onClick={closeMenu} aria-label="JAS Infotech Home">
            <img src={logo} alt="JAS Infotech" />
          </Link>

          {/* Desktop nav links */}
          <ul className="navbar__links" role="list">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => isActive ? 'active' : ''}
                  end={to === '/'}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="tel:+919824186968"
            className="btn btn--red btn--pill navbar__cta desktop"
            aria-label="Call JAS Infotech"
          >
            <Phone size={15} />
            Get a Quote
          </a>

          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile overlay */}
        <div className={`navbar__mobile-overlay ${menuOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={closeMenu}
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="tel:+919824186968"
            className="btn btn--red"
            onClick={closeMenu}
            aria-label="Call JAS Infotech"
          >
            <Phone size={15} />
            Call Now
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
