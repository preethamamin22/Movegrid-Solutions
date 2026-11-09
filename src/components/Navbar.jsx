import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import movegridLogo from '../assets/movegrid-logo.svg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo with actual image */}
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <img src={movegridLogo} alt="Movegrid Solutions" className="nav-logo-img" />
          </Link>

          {/* Desktop nav links */}
          <div className="nav-links">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link to="/contact" className="btn btn-primary nav-action nav-action-desktop">
            <PhoneCall size={18} /> Let's Talk
          </Link>

          {/* Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0 16px', borderBottom: '1px solid var(--glass-border)', marginBottom: '8px' }}>
            <img src={movegridLogo} alt="Movegrid Solutions" style={{ maxHeight: '40px', width: 'auto', maxWidth: '75%' }} />
            <button onClick={closeMenu} aria-label="Close menu" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', cursor: 'pointer', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <X size={22} />
            </button>
          </div>
          <nav className="mobile-nav-links">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Link to="/contact" className="btn btn-primary mobile-cta" onClick={closeMenu}>
            <PhoneCall size={18} /> Let's Talk
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={closeMenu} />}
    </>
  );
}
