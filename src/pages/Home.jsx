import { useState } from 'react';
import { ArrowRight, HeadphonesIcon, ShoppingCart, Code, CheckCircle, Users, Clock, TrendingUp, Zap, MessageSquare, Layout, Sparkles, Layers, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="home-page">
      <div className="bg-glow" style={{ top: '-10%', left: '-10%' }}></div>
      <div className="bg-glow" style={{ top: '40%', right: '-10%', background: 'radial-gradient(circle at center, rgba(24, 24, 27, 0.015) 0%, transparent 70%)' }}></div>
      
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
        <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
          <div className="animate-fade-up">
            <div className="badge-pill">
              <span className="status-dot"></span>
              <span>PREMIUM BPO & DIGITAL AGENCY</span>
            </div>
            <h1 style={{ fontSize: 'clamp(3rem, 5.5vw, 4.8rem)', marginBottom: '24px', maxWidth: '940px', margin: '0 auto 24px', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
              Powering Your Growth with <span className="text-gradient">Smart Support</span> & Digital Solutions
            </h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '720px', margin: '0 auto 40px', color: 'var(--text-muted)' }}>
              Welcoming friendly support, high-performing lead generation, and custom web designs engineered to accelerate your business goals.
            </p>
            <div className="hero-actions" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                Book Free Consultation <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-outline">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-by">
        <div className="container">
          <p className="trusted-by-title">Trusted by Industry Leaders & Fast-Growing Brands</p>
        </div>
        
        <div className="marquee-container">
          {/* First Set of Logos */}
          <div className="marquee-content">

            <div className="brand-logo-wrapper logo-zepto">
              <svg className="brand-logo-svg" viewBox="0 0 120 35" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="zepto-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#950EDB" />
                    <stop offset="100%" stopColor="#FF007F" />
                  </linearGradient>
                </defs>
                <g transform="translate(4, 2)">
                  <path d="M14 3 L4 17 H11 L8 29 L18 15 H11 Z" fill="url(#zepto-grad)" />
                </g>
                <text x="28" y="25" fontFamily="var(--font-heading)" fontWeight="900" fontStyle="italic" fontSize="23" fill="#5c1d99" letterSpacing="-0.5">zepto</text>
              </svg>
            </div>
            <div className="brand-logo-wrapper logo-delhivery">
              <svg className="brand-logo-svg" viewBox="0 0 170 35" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(4, 3)">
                  <path d="M12 4 L22 9.5 L22 20.5 L12 26 L2 20.5 L2 9.5 Z" fill="none" stroke="#EE3C26" strokeWidth="2.5" strokeLinejoin="round" />
                  <path d="M12 4 L12 15 M2 9.5 L12 15 L22 9.5" fill="none" stroke="#EE3C26" strokeWidth="2" strokeLinejoin="round" />
                </g>
                <text x="32" y="24" fontFamily="var(--font-heading)" fontWeight="800" fontSize="19" fill="#000000" letterSpacing="-0.5">delhivery</text>
                <text x="123" y="24" fontFamily="var(--font-heading)" fontWeight="600" fontSize="16" fill="#EE3C26">.com</text>
              </svg>
            </div>
            <div className="brand-logo-wrapper logo-rapido">
              <svg className="brand-logo-svg" viewBox="0 0 130 35" xmlns="http://www.w3.org/2000/svg">
                <rect className="rapido-bg" x="5" y="4" width="115" height="27" rx="8" fill="#FFF500" />
                <g transform="skewX(-10)">
                  <text className="rapido-text" x="58" y="23" textAnchor="middle" fontFamily="var(--font-heading)" fontWeight="900" fontSize="19" fill="#000000" letterSpacing="-0.5">rapido</text>
                </g>
              </svg>
            </div>
            <div className="brand-logo-wrapper logo-flipkart">
              <svg className="brand-logo-svg" viewBox="0 0 145 35" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(5, 5) scale(0.26)">
                  <path d="M68.052,42.539c2.183,0,4.21-0.075,6.23,0.02c2.458,0.116,4.115-1.064,4.859-3.224c0.651-1.895,1.075-3.935,1.177-5.932c0.135-2.627-1.071-3.642-3.72-3.659c-2.064-0.013-4.129-0.002-6.443-0.002c0.733-3.377,1.209-6.47,2.092-9.443c1.433-4.832,4.964-7.257,10.029-7.301c1.216-0.009,2.449-0.021,3.644-0.222c2.562-0.433,3.392-1.578,3.026-4.095c-0.202-1.407-0.48-2.807-0.827-4.186c-0.759-3.013-2.156-4.255-5.256-4.437c-5.025-0.295-9.885,0.524-14.393,2.833c-8.294,4.248-12.277,11.506-13.929,20.33c-0.396,2.12-0.758,4.246-1.157,6.491c-4.755,0-9.354-0.018-13.953,0.009c-2.313,0.013-2.889,0.772-2.368,3.051c0.56,2.442,1.226,4.862,1.72,7.318c0.357,1.773,1.269,2.5,3.093,2.44c2.968-0.101,5.941-0.028,9.173-0.028c-0.086,0.669-0.114,0.998-0.172,1.321c-1.856,10.404-3.647,20.819-5.601,31.203c-1.054,5.602-4.049,7.893-9.822,7.9c-6.915,0.014-13.829-0.011-20.743,0.007c-2.547,0.007-3.736,0.929-4.344,3.38c-0.684,2.761-1.297,5.539-1.937,8.312c-0.457,1.979-0.022,2.599,2.078,2.603c9.828,0.018,19.662,0.186,29.484-0.07c12.221-0.317,19.691-6.93,21.738-18.715c1.137-6.54,2.287-13.079,3.438-19.617C66.121,53.438,67.079,48.052,68.052,42.539z" fill="#2874F0" />
                </g>
                <text x="36" y="24" fontFamily="var(--font-heading)" fontWeight="800" fontSize="20" fill="#2874f0" letterSpacing="-0.5">Flipkart<tspan fill="#FFE500">✚</tspan></text>
              </svg>
            </div>
          </div>
          
          {/* Second Set of Logos (for infinite loop effect) */}
          <div className="marquee-content" aria-hidden="true">

            <div className="brand-logo-wrapper logo-zepto">
              <svg className="brand-logo-svg" viewBox="0 0 120 35" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="zepto-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#950EDB" />
                    <stop offset="100%" stopColor="#FF007F" />
                  </linearGradient>
                </defs>
                <g transform="translate(4, 2)">
                  <path d="M14 3 L4 17 H11 L8 29 L18 15 H11 Z" fill="url(#zepto-grad-2)" />
                </g>
                <text x="28" y="25" fontFamily="var(--font-heading)" fontWeight="900" fontStyle="italic" fontSize="23" fill="#5c1d99" letterSpacing="-0.5">zepto</text>
              </svg>
            </div>
            <div className="brand-logo-wrapper logo-delhivery">
              <svg className="brand-logo-svg" viewBox="0 0 170 35" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(4, 3)">
                  <path d="M12 4 L22 9.5 L22 20.5 L12 26 L2 20.5 L2 9.5 Z" fill="none" stroke="#EE3C26" strokeWidth="2.5" strokeLinejoin="round" />
                  <path d="M12 4 L12 15 M2 9.5 L12 15 L22 9.5" fill="none" stroke="#EE3C26" strokeWidth="2" strokeLinejoin="round" />
                </g>
                <text x="32" y="24" fontFamily="var(--font-heading)" fontWeight="800" fontSize="19" fill="#000000" letterSpacing="-0.5">delhivery</text>
                <text x="123" y="24" fontFamily="var(--font-heading)" fontWeight="600" fontSize="16" fill="#EE3C26">.com</text>
              </svg>
            </div>
            <div className="brand-logo-wrapper logo-rapido">
              <svg className="brand-logo-svg" viewBox="0 0 130 35" xmlns="http://www.w3.org/2000/svg">
                <rect className="rapido-bg" x="5" y="4" width="115" height="27" rx="8" fill="#FFF500" />
                <g transform="skewX(-10)">
                  <text className="rapido-text" x="58" y="23" textAnchor="middle" fontFamily="var(--font-heading)" fontWeight="900" fontSize="19" fill="#000000" letterSpacing="-0.5">rapido</text>
                </g>
              </svg>
            </div>
            <div className="brand-logo-wrapper logo-flipkart">
              <svg className="brand-logo-svg" viewBox="0 0 145 35" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(5, 5) scale(0.26)">
                  <path d="M68.052,42.539c2.183,0,4.21-0.075,6.23,0.02c2.458,0.116,4.115-1.064,4.859-3.224c0.651-1.895,1.075-3.935,1.177-5.932c0.135-2.627-1.071-3.642-3.72-3.659c-2.064-0.013-4.129-0.002-6.443-0.002c0.733-3.377,1.209-6.47,2.092-9.443c1.433-4.832,4.964-7.257,10.029-7.301c1.216-0.009,2.449-0.021,3.644-0.222c2.562-0.433,3.392-1.578,3.026-4.095c-0.202-1.407-0.48-2.807-0.827-4.186c-0.759-3.013-2.156-4.255-5.256-4.437c-5.025-0.295-9.885,0.524-14.393,2.833c-8.294,4.248-12.277,11.506-13.929,20.33c-0.396,2.12-0.758,4.246-1.157,6.491c-4.755,0-9.354-0.018-13.953,0.009c-2.313,0.013-2.889,0.772-2.368,3.051c0.56,2.442,1.226,4.862,1.72,7.318c0.357,1.773,1.269,2.5,3.093,2.44c2.968-0.101,5.941-0.028,9.173-0.028c-0.086,0.669-0.114,0.998-0.172,1.321c-1.856,10.404-3.647,20.819-5.601,31.203c-1.054,5.602-4.049,7.893-9.822,7.9c-6.915,0.014-13.829-0.011-20.743,0.007c-2.547,0.007-3.736,0.929-4.344,3.38c-0.684,2.761-1.297,5.539-1.937,8.312c-0.457,1.979-0.022,2.599,2.078,2.603c9.828,0.018,19.662,0.186,29.484-0.07c12.221-0.317,19.691-6.93,21.738-18.715c1.137-6.54,2.287-13.079,3.438-19.617C66.121,53.438,67.079,48.052,68.052,42.539z" fill="#2874F0" />
                </g>
                <text x="36" y="24" fontFamily="var(--font-heading)" fontWeight="800" fontSize="20" fill="#2874f0" letterSpacing="-0.5">Flipkart<tspan fill="#FFE500">✚</tspan></text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section>
        <div className="container">
          <div className="section-header animate-fade-up">
            <h2>Our Core <span className="text-gradient">Services</span></h2>
            <p>We provide end-to-end outsourcing and digital solutions tailored to scale your operations.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {/* Featured Flagship Service: Web Design & Development */}
            <div className="glass-panel animate-fade-up delay-1" style={{ padding: '40px 30px', textAlign: 'center', position: 'relative', border: '1px solid var(--primary)', background: 'linear-gradient(135deg, rgba(153, 118, 207, 0.08) 0%, rgba(34, 15, 61, 0.4) 100%)', boxShadow: '0 12px 35px rgba(153, 118, 207, 0.15)' }}>
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: '#03000a', padding: '4px 14px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>
                ✦ FLAGSHIP SERVICE
              </div>
              <div style={{ width: '70px', height: '70px', background: 'rgba(153, 118, 207, 0.15)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px auto 24px', color: 'var(--primary)', border: '1px solid rgba(153, 118, 207, 0.3)' }}>
                <Code size={34} />
              </div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px' }}>Web Design & Development</h3>
              <p style={{ marginBottom: '24px' }}>Custom high-converting websites, modern UI/UX design, React web apps, and Shopify stores built for speed.</p>
              <Link to="/services" className="btn btn-primary" style={{ fontSize: '0.88rem', padding: '10px 22px' }}>
                Explore Web Studio <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="glass-panel animate-fade-up delay-2" style={{ padding: '40px 30px', textAlign: 'center' }}>
              <div style={{ width: '70px', height: '70px', background: 'rgba(153, 118, 207, 0.08)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--primary)' }}>
                <HeadphonesIcon size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Telecalling Services</h3>
              <p style={{ marginBottom: '24px' }}>Expert B2B & B2C lead generation, appointment setting, and customer surveys.</p>
              <Link to="/services" style={{ color: 'var(--primary)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>Learn More <ArrowRight size={16} /></Link>
            </div>

            <div className="glass-panel animate-fade-up delay-3" style={{ padding: '40px 30px', textAlign: 'center' }}>
              <div style={{ width: '70px', height: '70px', background: 'rgba(124, 58, 237, 0.08)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--primary)' }}>
                <ShoppingCart size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>E-commerce Support</h3>
              <p style={{ marginBottom: '24px' }}>24/7 multi-channel support, order processing, and returns management.</p>
              <Link to="/services" style={{ color: 'var(--primary)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>Learn More <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Bento Grid Showcase */}
      <section style={{ background: 'var(--bg-lighter)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="section-header animate-fade-up">
            <div className="badge-pill" style={{ marginBottom: '16px' }}>
              <Sparkles size={14} color="var(--primary)" />
              <span>DIGITAL STUDIO & TECH STACK</span>
            </div>
            <h2>Engineering High-Impact <span className="text-gradient">Web Solutions</span></h2>
            <p>From lightning-fast React web apps to custom Shopify stores, we craft digital products built for growth.</p>
          </div>

          {/* Bento Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            
            {/* Bento Card 1: Main Feature */}
            <div className="glass-panel animate-fade-up delay-1" style={{ padding: '36px', background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(153, 118, 207, 0.08) 100%)' }}>
              <div style={{ width: '56px', height: '56px', background: 'rgba(153, 118, 207, 0.12)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '20px', border: '1px solid rgba(153, 118, 207, 0.3)' }}>
                <Layout size={28} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Custom React & Next.js Apps</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.6' }}>
                Scalable, modular web applications built with modern component architectures. Optimized for fast Lighthouse scores and fluid responsiveness across all devices.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['React.js', 'Next.js', 'Vite', 'TailwindCSS'].map((tag, i) => (
                  <span key={i} style={{ fontSize: '0.78rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: '4px 10px', borderRadius: '20px', color: '#ffffff' }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Bento Card 2: E-Commerce */}
            <div className="glass-panel animate-fade-up delay-2" style={{ padding: '36px', background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(34, 15, 61, 0.4) 100%)' }}>
              <div style={{ width: '56px', height: '56px', background: 'rgba(124, 58, 237, 0.12)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '20px', border: '1px solid rgba(124, 58, 237, 0.3)' }}>
                <ShoppingCart size={28} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Shopify & E-Commerce Stores</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.6' }}>
                Custom Shopify storefronts, fast checkout funnels, automated inventory integration, and payment gateway setups designed for maximum conversion.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Shopify', 'Custom Checkout', 'Payment Gateways'].map((tag, i) => (
                  <span key={i} style={{ fontSize: '0.78rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: '4px 10px', borderRadius: '20px', color: '#ffffff' }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Bento Card 3: UI/UX & Motion Design */}
            <div className="glass-panel animate-fade-up delay-3" style={{ padding: '36px', background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(153, 118, 207, 0.08) 100%)' }}>
              <div style={{ width: '56px', height: '56px', background: 'rgba(153, 118, 207, 0.12)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '20px', border: '1px solid rgba(153, 118, 207, 0.3)' }}>
                <Layers size={28} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Framer-Style UI/UX & Motion</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.6' }}>
                Interactive elements, micro-animations, glassmorphic dark-mode layouts, and pixel-perfect mobile-first design systems.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Figma Design Systems', 'Glassmorphism', 'SEO Ready'].map((tag, i) => (
                  <span key={i} style={{ fontSize: '0.78rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: '4px 10px', borderRadius: '20px', color: '#ffffff' }}>{tag}</span>
                ))}
              </div>
            </div>

          </div>

          {/* Tech Stack Banner */}
          <div style={{ marginTop: '40px', padding: '20px 30px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', textAlign: 'center' }}>
            <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: '600' }}>OUR TECH STACK:</span>
            {['React.js', 'Next.js', 'Shopify', 'Node.js', 'TailwindCSS', 'Figma', 'REST APIs', 'SEO Optimization'].map((tech, idx) => (
              <span key={idx} style={{ fontSize: '0.82rem', color: '#ffffff', background: 'rgba(153, 118, 207, 0.1)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(153, 118, 207, 0.2)' }}>
                ✦ {tech}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ background: 'var(--bg-lighter)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div className="animate-fade-up">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Why <span className="text-gradient">Choose Us</span></h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>We don't just provide services; we partner with you to ensure your business achieves maximum efficiency and growth.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { icon: <Users />, title: 'Skilled Support Team', desc: 'Highly trained professionals ready to represent your brand.' },
                  { icon: <Clock />, title: 'Fast Response Time', desc: 'SLA-backed response times ensuring no customer waits.' },
                  { icon: <TrendingUp />, title: 'Scalable Solutions', desc: 'Easily scale up or down based on your seasonal demands.' },
                  { icon: <Zap />, title: '24/7 Support', desc: 'Round-the-clock availability to serve global customers.' }
                ].map((item, index) => (
                  <div key={index} style={{ display: 'flex', gap: '15px' }}>
                    <div style={{ color: 'var(--primary)', marginTop: '5px' }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.95rem' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-panel animate-fade-up delay-2" style={{ padding: '40px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', background: 'rgba(24, 24, 27, 0.03)', filter: 'blur(40px)' }}></div>
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Customer Support" style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section>
        <div className="container">
          <div className="section-header animate-fade-up">
            <h2>How It <span className="text-gradient">Works</span></h2>
            <p>A simple, transparent process to get your operations running smoothly.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center' }}>
            {[
              { step: '01', title: 'Understand Client Needs', desc: 'We start by analyzing your business goals and requirements.' },
              { step: '02', title: 'Strategy & Setup', desc: 'Developing a customized plan and integrating our tools with yours.' },
              { step: '03', title: 'Execution', desc: 'Our trained team starts executing the strategy seamlessly.' },
              { step: '04', title: 'Growth & Optimization', desc: 'Continuous monitoring, reporting, and scaling up operations.' }
            ].map((p, i) => (
              <div key={i} className={`glass-panel animate-fade-up delay-${i+1}`} style={{ padding: '30px 20px', position: 'relative' }}>
                <div style={{ fontSize: '3rem', fontWeight: '800', color: 'rgba(255,255,255,0.05)', position: 'absolute', top: '10px', right: '20px', lineHeight: 1 }}>{p.step}</div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', marginTop: '20px' }}>{p.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section style={{ background: 'var(--bg-lighter)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center' }}>
            {[
              { count: '25+', label: 'Clients Served' },
              { count: '100K+', label: 'Customer Interactions' },
              { count: '98%+', label: 'Client Satisfaction' },
              { count: '24/7', label: 'Support Available' }
            ].map((stat, i) => (
              <div key={i} className="animate-fade-up">
                <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '10px' }}>{stat.count}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section>
        <div className="container">
          <div className="section-header animate-fade-up">
            <h2>What Our <span className="text-gradient">Clients Say</span></h2>
            <p>Don't just take our word for it. Hear from businesses we've helped grow.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { name: 'Sarah J.', role: 'CEO, TechFlow', text: 'Outvox Solution built a high-performing custom website and streamlined our customer support. Response times are fast and overall client satisfaction is at an all-time high.' },
              { name: 'Michael R.', role: 'Founder, E-Shop', text: 'Their web development team launched our custom store on time and the e-commerce support handles order queries flawlessly.' },
              { name: 'David L.', role: 'Marketing Director', text: 'Their web team built a fast, high-converting landing page for our lead gen campaigns. Extremely satisfied with their quality!' }
            ].map((t, i) => (
              <div key={i} className={`glass-panel animate-fade-up delay-${i+1}`} style={{ padding: '30px' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '15px' }}>
                  <MessageSquare size={30} />
                </div>
                <p style={{ fontStyle: 'italic', marginBottom: '20px', fontSize: '1.05rem' }}>"{t.text}"</p>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>{t.name}</h5>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion Section */}
      <section style={{ background: 'var(--bg-lighter)' }}>
        <div className="container">
          <div className="section-header animate-fade-up">
            <h2>Frequently Asked <span className="text-gradient">Questions</span></h2>
            <p>Everything you need to know about our web development and support services.</p>
          </div>
          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { q: 'What web development technologies do you specialize in?', a: 'We specialize in modern React.js, Next.js, Vite, Shopify, and custom CSS/Tailwind layouts engineered for fast performance, high Lighthouse scores, and sleek dark-mode aesthetics.' },
              { q: 'How fast can you design and deploy a custom website?', a: 'Most custom landing pages and business websites are completed within 1 to 2 weeks, fully optimized for mobile devices and search engines.' },
              { q: 'What customer support and telecalling services do you offer?', a: 'We offer 24/7 B2B & B2C outbound lead generation, appointment booking, e-commerce customer support (chat, email, phone), and dispute management.' },
              { q: 'Do you offer ongoing website maintenance and support?', a: 'Yes! We provide full post-launch maintenance, continuous performance monitoring, security updates, and dedicated 24/7 technical assistance.' }
            ].map((faq, i) => (
              <div 
                key={i} 
                className="glass-panel animate-fade-up" 
                style={{ padding: '24px', cursor: 'pointer', transition: 'all 0.3s ease' }}
                onClick={() => toggleFaq(i)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px' }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: '600', color: '#ffffff' }}>{faq.q}</h4>
                  <div style={{ color: 'var(--primary)', flexShrink: 0 }}>
                    {openFaq === i ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                  </div>
                </div>
                {openFaq === i && (
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.08)', lineHeight: '1.6' }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="glass-panel cta-banner-inner" style={{ padding: '60px 40px', textAlign: 'center', background: 'var(--bg-lighter)', borderColor: 'var(--border-color)', boxShadow: '0 10px 40px rgba(0,0,0,0.4)' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready to Scale Your Operations?</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 30px' }}>Join hundreds of fast-growing companies that trust Outvox Solution for their customer support and digital needs.</p>
            <Link to="/contact" className="btn btn-primary">
              Get Your Free Proposal <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
