import { useState } from 'react';
import { ArrowRight, HeadphonesIcon, ShoppingCart, Code, CheckCircle, Users, Clock, TrendingUp, Zap, MessageSquare, Layout, Sparkles, Layers, Globe, ChevronDown, ChevronUp, Video, Bike } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import founderPhoto from '../assets/founder.jpg';
import divithPhoto from '../assets/divith.jpg';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="home-page">
      <SEO 
        title="Movegrid Solutions | Founded by Preetham B R | BPO, Fleet & Web Studio"
        description="Movegrid Solutions, founded by Preetham B R, powers business growth with smart 24/7 customer support, outbound telecalling, delivery rider onboarding, commercial videography, and custom web development."
        keywords="Movegrid Solutions, Preetham B R, founder of Movegrid Solutions, Preetham B R founder, Movegrid Solutions founder, who is the founder of Movegrid Solutions, BPO services, telecalling, riders onboarding, videography, web design, Bengaluru agency"
      />
      <div className="bg-glow" style={{ top: '-10%', left: '-10%' }}></div>
      <div className="bg-glow" style={{ top: '40%', right: '-10%', background: 'radial-gradient(circle at center, rgba(24, 24, 27, 0.015) 0%, transparent 70%)' }}></div>
      
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '80px', paddingBottom: '40px' }}>
        <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
          <div className="animate-fade-up">
            <div className="badge-pill">
              <span className="status-dot"></span>
              <span>PREMIUM BPO & DIGITAL AGENCY</span>
            </div>
            <h1 className="hero-title">
              Powering Your Growth with <span className="text-gradient">Smart Support</span> & Digital Solutions
            </h1>
            <p className="hero-subtitle">
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
          <p className="trusted-by-title">Trusted by Our Growing Clients &amp; Partners</p>
        </div>
        
        <div className="marquee-container">
          {/* First Track */}
          <div className="marquee-content">
            {[1, 2, 3].map((set) => (
              [
                {
                  name: 'ZenNuc™',
                  domain: 'zennuc.com',
                  url: 'https://zennuc.com',
                  badgeText: 'ZN',
                  domainColor: '#38bdf8',
                },
                {
                  name: 'Shree Varaha',
                  domain: 'shreevaraha.com',
                  url: 'https://shreevaraha.com',
                  logoImg: '/logos/shreevaraha-logo.png',
                  domainColor: '#38bdf8',
                },
                {
                  name: 'Ananya Homestays',
                  domain: 'ananyahomestays.com',
                  url: 'https://www.ananyahomestays.com',
                  logoImg: '/logos/ananya-transparent.png',
                  domainColor: '#4ade80',
                },
              ].map((client, idx) => (
                <a
                  key={`track1-${set}-${idx}`}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="client-logo-card"
                  title={`Visit ${client.domain}`}
                >
                  {client.logoImg ? (
                    <div style={{ height: '36px', display: 'flex', alignItems: 'center' }}>
                      <img
                        src={client.logoImg}
                        alt={client.name}
                        style={{
                          maxHeight: '36px',
                          maxWidth: '56px',
                          objectFit: 'contain',
                          filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))'
                        }}
                      />
                    </div>
                  ) : (
                    <div style={{
                      width: '36px',
                      height: '36px',
                      background: 'linear-gradient(135deg, #151c36 0%, #0a66c2 100%)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '800',
                      fontSize: '0.95rem',
                      color: '#ffffff',
                      letterSpacing: '-0.5px',
                      boxShadow: '0 4px 12px rgba(10, 102, 194, 0.35)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      flexShrink: 0
                    }}>
                      {client.badgeText}
                    </div>
                  )}
                  <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: '1.2' }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '1.02rem', color: '#ffffff', letterSpacing: '-0.2px' }}>
                      {client.name}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: client.domainColor, fontWeight: '600', letterSpacing: '0.4px' }}>
                      {client.domain}
                    </span>
                  </div>
                </a>
              ))
            ))}
          </div>
          
          {/* Second Track (for infinite loop) */}
          <div className="marquee-content" aria-hidden="true">
            {[1, 2, 3].map((set) => (
              [
                {
                  name: 'ZenNuc™',
                  domain: 'zennuc.com',
                  url: 'https://zennuc.com',
                  badgeText: 'ZN',
                  domainColor: '#38bdf8',
                },
                {
                  name: 'Shree Varaha',
                  domain: 'shreevaraha.com',
                  url: 'https://shreevaraha.com',
                  logoImg: '/logos/shreevaraha-logo.png',
                  domainColor: '#38bdf8',
                },
                {
                  name: 'Ananya Homestays',
                  domain: 'ananyahomestays.com',
                  url: 'https://www.ananyahomestays.com',
                  logoImg: '/logos/ananya-transparent.png',
                  domainColor: '#4ade80',
                },
              ].map((client, idx) => (
                <a
                  key={`track2-${set}-${idx}`}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="client-logo-card"
                  tabIndex={-1}
                  title={`Visit ${client.domain}`}
                >
                  {client.logoImg ? (
                    <div style={{ height: '36px', display: 'flex', alignItems: 'center' }}>
                      <img
                        src={client.logoImg}
                        alt={client.name}
                        style={{
                          maxHeight: '36px',
                          maxWidth: '56px',
                          objectFit: 'contain',
                          filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))'
                        }}
                      />
                    </div>
                  ) : (
                    <div style={{
                      width: '36px',
                      height: '36px',
                      background: 'linear-gradient(135deg, #151c36 0%, #0a66c2 100%)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '800',
                      fontSize: '0.95rem',
                      color: '#ffffff',
                      letterSpacing: '-0.5px',
                      boxShadow: '0 4px 12px rgba(10, 102, 194, 0.35)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      flexShrink: 0
                    }}>
                      {client.badgeText}
                    </div>
                  )}
                  <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: '1.2' }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '1.02rem', color: '#ffffff', letterSpacing: '-0.2px' }}>
                      {client.name}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: client.domainColor, fontWeight: '600', letterSpacing: '0.4px' }}>
                      {client.domain}
                    </span>
                  </div>
                </a>
              ))
            ))}
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
          
          <div className="home-services-grid">
            {/* Featured Flagship Service: Web Design & Development */}
            <div className="glass-panel animate-fade-up delay-1" style={{ padding: '36px 24px', textAlign: 'center', position: 'relative', border: '1px solid var(--primary)', background: 'linear-gradient(135deg, rgba(153, 118, 207, 0.08) 0%, rgba(34, 15, 61, 0.4) 100%)', boxShadow: '0 12px 35px rgba(153, 118, 207, 0.15)' }}>
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: '#ffffff', padding: '4px 14px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>
                ✦ FLAGSHIP SERVICE
              </div>
              <div style={{ width: '70px', height: '70px', background: 'rgba(153, 118, 207, 0.15)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px auto 24px', color: 'var(--primary)', border: '1px solid rgba(153, 118, 207, 0.3)' }}>
                <Code size={34} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Web Design & Development</h3>
              <p style={{ marginBottom: '24px' }}>Custom high-converting websites, modern UI/UX design, React web apps, and Shopify stores built for speed.</p>
              <Link to="/services" className="btn btn-primary" style={{ fontSize: '0.88rem', padding: '10px 22px' }}>
                Explore Web Studio <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="glass-panel animate-fade-up delay-2" style={{ padding: '36px 24px', textAlign: 'center' }}>
              <div style={{ width: '70px', height: '70px', background: 'rgba(153, 118, 207, 0.1)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--primary)', border: '1px solid rgba(153, 118, 207, 0.2)' }}>
                <Video size={32} />
              </div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '16px' }}>Videography &amp; Editing</h3>
              <p style={{ marginBottom: '24px' }}>Cinematic video shoots, social media reels, corporate promos, sound design, and high-retention video editing.</p>
              <Link to="/services" style={{ color: 'var(--primary)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>Learn More <ArrowRight size={16} /></Link>
            </div>

            <div className="glass-panel animate-fade-up delay-3" style={{ padding: '36px 24px', textAlign: 'center' }}>
              <div style={{ width: '70px', height: '70px', background: 'rgba(124, 58, 237, 0.1)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--primary)', border: '1px solid rgba(124, 58, 237, 0.2)' }}>
                <Bike size={32} />
              </div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '16px' }}>Riders Onboarding</h3>
              <p style={{ marginBottom: '24px' }}>Delivery fleet sourcing, KYC document verification, induction training, and high-volume fleet expansion.</p>
              <Link to="/services" style={{ color: 'var(--primary)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>Learn More <ArrowRight size={16} /></Link>
            </div>

            <div className="glass-panel animate-fade-up delay-4" style={{ padding: '36px 24px', textAlign: 'center' }}>
              <div style={{ width: '70px', height: '70px', background: 'rgba(153, 118, 207, 0.08)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--primary)' }}>
                <HeadphonesIcon size={32} />
              </div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '16px' }}>Telecalling Services</h3>
              <p style={{ marginBottom: '24px' }}>Expert B2B & B2C lead generation, appointment setting, and customer surveys.</p>
              <Link to="/services" style={{ color: 'var(--primary)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>Learn More <ArrowRight size={16} /></Link>
            </div>

            <div className="glass-panel animate-fade-up delay-5" style={{ padding: '36px 24px', textAlign: 'center' }}>
              <div style={{ width: '70px', height: '70px', background: 'rgba(124, 58, 237, 0.08)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--primary)' }}>
                <ShoppingCart size={32} />
              </div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '16px' }}>E-commerce Support</h3>
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
          <div className="bento-grid">
            
            {/* Bento Card 1: Main Feature */}
            <div className="glass-panel animate-fade-up delay-1" style={{ padding: '32px 24px', background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(153, 118, 207, 0.08) 100%)' }}>
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
            <div className="glass-panel animate-fade-up delay-2" style={{ padding: '32px 24px', background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(34, 15, 61, 0.4) 100%)' }}>
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
            <div className="glass-panel animate-fade-up delay-3" style={{ padding: '32px 24px', background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(153, 118, 207, 0.08) 100%)' }}>
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
          <div className="tech-stack-banner">
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
          <div className="why-us-grid">
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
            
            <div className="glass-panel animate-fade-up delay-2 why-us-image-panel" style={{ position: 'relative' }}>
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
          <div className="process-grid">
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
          <div className="stats-grid">
            {[
              { count: '25+', label: 'Clients Served' },
              { count: '100K+', label: 'Customer Interactions' },
              { count: '98%+', label: 'Client Satisfaction' },
              { count: '24/7', label: 'Support Available' }
            ].map((stat, i) => (
              <div key={i} className="animate-fade-up">
                <div className="stat-number" style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '10px' }}>{stat.count}</div>
                <div className="stat-label" style={{ fontSize: '1.1rem', fontWeight: '500' }}>{stat.label}</div>
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
          <div className="testimonials-grid">
            {[
              { name: 'Sarah J.', role: 'CEO, TechFlow', text: 'Movegrid Solutions built a high-performing custom website and streamlined our customer support. Response times are fast and overall client satisfaction is at an all-time high.' },
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
              { q: 'Who is the founder of Movegrid Solutions?', a: 'Preetham B R is the Founder of Movegrid Solutions. Under his leadership, Movegrid Solutions delivers end-to-end BPO telecalling, delivery fleet onboarding, creative videography & editing, and modern web design and development.' },
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

      {/* Leadership & Team Section */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="section-header animate-fade-up">
            <div className="badge-pill" style={{ marginBottom: '16px' }}>
              <Sparkles size={14} color="var(--primary)" />
              <span>LEADERSHIP & EXPERTISE</span>
            </div>
            <h2>Meet Our <span className="text-gradient">Team</span></h2>
            <p>The dedicated leadership driving business operations, creative media, and digital innovation at Movegrid Solutions.</p>
          </div>

          <div className="team-grid">
            {/* Preetham B R */}
            <div 
              className="glass-panel team-card animate-fade-up delay-1" 
              itemScope 
              itemType="https://schema.org/Person"
              style={{ position: 'relative', border: '1px solid rgba(168, 85, 247, 0.35)', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(30, 13, 54, 0.45) 100%)', boxShadow: '0 12px 35px rgba(168, 85, 247, 0.18)', borderRadius: '20px' }}
            >
              <div style={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)', color: '#ffffff', padding: '4px 16px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', boxShadow: '0 4px 14px rgba(168, 85, 247, 0.4)' }}>
                ✦ FOUNDER
              </div>
              <div style={{ width: '150px', height: '190px', margin: '14px auto 20px', borderRadius: '16px', overflow: 'hidden', border: '2px solid rgba(168, 85, 247, 0.45)', boxShadow: '0 8px 28px rgba(168, 85, 247, 0.28)', background: '#0a0414' }}>
                <img itemProp="image" src={founderPhoto} alt="Preetham B R - Founder of Movegrid Solutions" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }} />
              </div>
              <h3 itemProp="name" style={{ fontSize: '1.5rem', marginBottom: '4px', color: '#ffffff' }}>Preetham B R</h3>
              <p itemProp="jobTitle" style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.92rem', marginBottom: '14px' }}>Founder</p>
              <p itemProp="description" style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Preetham B R is the Founder of Movegrid Solutions, driving company vision, strategic partnerships, and operational execution across BPO, web development, fleet onboarding, and client solutions.
              </p>
            </div>

            {/* Divith B P */}
            <div className="glass-panel team-card animate-fade-up delay-2" style={{ position: 'relative', border: '1px solid rgba(168, 85, 247, 0.25)', background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.06) 0%, rgba(30, 13, 54, 0.45) 100%)', boxShadow: '0 12px 35px rgba(147, 51, 234, 0.15)', borderRadius: '20px' }}>
              <div style={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #9333ea 0%, #a855f7 100%)', color: '#ffffff', padding: '4px 16px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', boxShadow: '0 4px 14px rgba(147, 51, 234, 0.4)' }}>
                ✦ CREATIVE LEAD
              </div>
              <div style={{ width: '150px', height: '190px', margin: '14px auto 20px', borderRadius: '16px', overflow: 'hidden', border: '2px solid rgba(168, 85, 247, 0.45)', boxShadow: '0 8px 28px rgba(147, 51, 234, 0.28)', background: '#0a0414' }}>
                <img src={divithPhoto} alt="Divith B P - Videography & Editing" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '4px', color: '#ffffff' }}>Divith B P</h3>
              <p style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.92rem', marginBottom: '14px' }}>Videography &amp; Editing</p>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Leading cinematic video shoots, social media reels, motion graphics, and high-retention video editing that elevates brand storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="glass-panel cta-banner-inner" style={{ padding: '60px 40px', textAlign: 'center', background: 'var(--bg-lighter)', borderColor: 'var(--border-color)', boxShadow: '0 10px 40px rgba(0,0,0,0.4)' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready to Scale Your Operations?</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 30px' }}>Join hundreds of fast-growing companies that trust Movegrid Solutions for their customer support and digital needs.</p>
            <Link to="/contact" className="btn btn-primary">
              Get Your Free Proposal <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
