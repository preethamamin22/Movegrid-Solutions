import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import movegridLogo from '../assets/movegrid-logo.svg';

/* ── Inline SVG brand icons (lucide-react doesn't ship brand logos) ── */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const TwitterXIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer() {
  const socialLinks = [
    {
      icon: <FacebookIcon />,
      href: 'https://www.facebook.com/movegridsolutions',
      label: 'Facebook',
      color: '#1877F2',
    },
    {
      icon: <TwitterXIcon />,
      href: 'https://twitter.com/movegridsolutions',
      label: 'X (Twitter)',
      color: '#1DA1F2',
    },
    {
      icon: <InstagramIcon />,
      href: 'https://www.instagram.com/movegridsolutions',
      label: 'Instagram',
      color: '#E1306C',
    },
    {
      icon: <LinkedInIcon />,
      href: 'https://www.linkedin.com/company/movegrid-solutions/',
      label: 'LinkedIn',
      color: '#0A66C2',
    },
  ];

  const handleEmailClick = (e) => {
    const email = 'preetham@movegridsolutions.com';
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      // On desktop browsers without a default mail client, directly open Gmail Web Compose
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="footer-logo-link" style={{ marginBottom: '20px', display: 'inline-block' }}>
              <img src={movegridLogo} alt="Movegrid Solutions" style={{ height: '64px', width: 'auto' }} />
            </Link>
            <p style={{ marginBottom: '24px', lineHeight: '1.6' }}>
              Professional BPO, delivery fleet onboarding, creative media, and custom web solutions. Founded by <strong style={{ color: '#ffffff', fontWeight: '600' }}>Preetham B R</strong> to power rapid business growth.
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="footer-social-icon"
                  style={{ '--social-color': social.color }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li><Link to="/services">Web Design &amp; Dev</Link></li>
              <li><Link to="/services">Videography &amp; Editing</Link></li>
              <li><Link to="/services">Riders Onboarding</Link></li>
              <li><Link to="/services">Telecalling Services</Link></li>
              <li><Link to="/services">E-commerce Support</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                <span>Bengaluru, Karnataka, India</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <a href="tel:+918296748983" style={{ color: 'var(--text-muted)' }}>+91 8296748983</a>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <a 
                  href="mailto:preetham@movegridsolutions.com" 
                  onClick={handleEmailClick}
                  title="Click to email preetham@movegridsolutions.com"
                  style={{ color: 'var(--text-muted)', wordBreak: 'break-all' }}
                >
                  preetham@movegridsolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Movegrid Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
