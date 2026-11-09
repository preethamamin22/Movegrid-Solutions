import { HeadphonesIcon, ShoppingCart, Code, ArrowRight, Video, Bike } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import divithPhoto from '../assets/divith.jpg';

export default function Services() {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Web Design & Development",
      featured: true,
      badge: "✦ FLAGSHIP DIGITAL STUDIO",
      desc: "We build modern, ultra-fast, and high-converting websites & web applications. From custom React & Next.js platforms to Shopify e-commerce storefronts, our web solutions are engineered for growth.",
      tags: ["React.js & Next.js Apps", "Shopify Stores", "Framer Micro-Animations", "SEO & Performance Optimization"],
      color: "var(--primary)",
      bg: "rgba(168, 85, 247, 0.15)"
    },
    {
      icon: <Video size={40} />,
      title: "Videography & Editing",
      featured: false,
      badge: "✦ CREATIVE MEDIA STUDIO",
      lead: "Divith B P (Creative Lead)",
      leadPhoto: divithPhoto,
      desc: "Turn your brand vision into captivating visual stories. Led by Divith B P, we produce cinematic commercial shoots, high-converting social media reels, product showcases, corporate event coverage, and YouTube content with professional color grading, sound design, and dynamic video editing.",
      tags: ["4K Cinematic Shoots", "Social Media Reels & Shorts", "Corporate Video Production", "Motion Graphics & VFX", "Color Grading & Audio Mastering"],
      color: "var(--primary)",
      bg: "rgba(168, 85, 247, 0.12)"
    },
    {
      icon: <Bike size={40} />,
      title: "Riders Onboarding",
      featured: false,
      desc: "Comprehensive delivery partner recruitment, KYC document verification, background checks, and fleet training for quick-commerce, food delivery, and hyperlocal logistics companies. We help you scale rider fleets rapidly and compliantly.",
      tags: ["Fleet Sourcing & Acquisition", "KYC & Document Verification", "Rider Induction & Training", "Pan-India Fleet Scaling", "Compliance & SLA Tracking"],
      color: "var(--primary)",
      bg: "rgba(124, 58, 237, 0.12)"
    },
    {
      icon: <HeadphonesIcon size={40} />,
      title: "Telecalling Services",
      featured: false,
      desc: "Drive growth with our professional telecalling team. We handle outbound lead generation, appointment setting, surveys, and customer retention campaigns with a high conversion focus.",
      tags: ["Outbound Lead Gen", "Appointment Booking", "Surveys & Qualification"],
      color: "var(--primary)",
      bg: "rgba(153, 118, 207, 0.08)"
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "E-commerce Customer Support",
      featured: false,
      desc: "Provide your shoppers with a seamless experience. We offer 24/7 multi-channel support (chat, email, phone), order processing, dispute resolution, and returns management.",
      tags: ["24/7 Multi-Channel", "Order & Return Mgmt", "Zendesk & Intercom"],
      color: "var(--primary)",
      bg: "rgba(124, 58, 237, 0.08)"
    }
  ];

  return (
    <div className="services-page" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      <SEO 
        title="Our Services - Web Studio, Videography, Rider Onboarding & BPO"
        description="Explore Movegrid Solutions comprehensive services: custom React & Next.js web development, 4K commercial videography & editing, pan-India delivery fleet onboarding, and 24/7 customer support."
      />
      <div className="container">
        <div className="section-header animate-fade-up">
          <h2>Our <span className="text-gradient">Services</span></h2>
          <p>Comprehensive solutions designed to elevate your business operations and digital presence.</p>
        </div>

        <div className="services-list-grid">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`glass-panel service-card animate-fade-up delay-${idx+1}`} 
              style={{ 
                border: service.featured ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                background: service.featured ? 'linear-gradient(135deg, rgba(153, 118, 207, 0.08) 0%, rgba(34, 15, 61, 0.4) 100%)' : 'var(--glass-bg)',
                boxShadow: service.featured ? '0 12px 40px rgba(153, 118, 207, 0.18)' : '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}
            >
              {service.featured && (
                <div className="service-featured-badge" style={{ position: 'absolute', top: '-14px', left: '40px', background: 'var(--primary)', color: '#ffffff', padding: '4px 14px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {service.badge}
                </div>
              )}
              <div className="service-icon-box" style={{ width: '84px', height: '84px', borderRadius: '22px', background: service.bg, color: service.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(153, 118, 207, 0.2)' }}>
                {service.icon}
              </div>
              <div className="service-content-box" style={{ flex: '1 1 260px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <h3 className="service-title" style={{ fontSize: '1.75rem', margin: 0 }}>{service.title}</h3>
                  {service.lead && (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(168, 85, 247, 0.12)', border: '1px solid rgba(168, 85, 247, 0.35)', padding: '3px 12px', borderRadius: '20px' }}>
                      {service.leadPhoto && <img src={service.leadPhoto} alt={service.lead} style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover' }} />}
                      <span style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: '500' }}>{service.lead}</span>
                    </div>
                  )}
                </div>
                <p style={{ fontSize: '1.02rem', marginBottom: '20px', color: 'var(--text-muted)' }}>{service.desc}</p>
                {service.tags && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                    {service.tags.map((tag, tIdx) => (
                      <span key={tIdx} style={{ fontSize: '0.8rem', color: '#ffffff', background: 'rgba(255,255,255,0.06)', padding: '4px 12px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.12)' }}>
                        ✦ {tag}
                      </span>
                    ))}
                  </div>
                )}
                <Link to="/contact" className={service.featured ? "btn btn-primary" : "btn btn-outline"} style={{ fontSize: '0.9rem' }}>
                  Get Started <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
