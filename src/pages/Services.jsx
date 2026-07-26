import { HeadphonesIcon, ShoppingCart, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      bg: "rgba(153, 118, 207, 0.15)"
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
      <div className="container">
        <div className="section-header animate-fade-up">
          <h2>Our <span className="text-gradient">Services</span></h2>
          <p>Comprehensive solutions designed to elevate your business operations and digital presence.</p>
        </div>

        <div style={{ display: 'grid', gap: '30px' }}>
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`glass-panel animate-fade-up delay-${idx+1}`} 
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '30px', 
                padding: '40px', 
                alignItems: 'center',
                position: 'relative',
                border: service.featured ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                background: service.featured ? 'linear-gradient(135deg, rgba(153, 118, 207, 0.08) 0%, rgba(34, 15, 61, 0.4) 100%)' : 'var(--glass-bg)',
                boxShadow: service.featured ? '0 12px 40px rgba(153, 118, 207, 0.18)' : '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}
            >
              {service.featured && (
                <div style={{ position: 'absolute', top: '-14px', left: '40px', background: 'var(--primary)', color: '#03000a', padding: '4px 14px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {service.badge}
                </div>
              )}
              <div style={{ width: '90px', height: '90px', borderRadius: '24px', background: service.bg, color: service.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(153, 118, 207, 0.2)' }}>
                {service.icon}
              </div>
              <div style={{ flex: '1 1 260px' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{service.title}</h3>
                <p style={{ fontSize: '1.05rem', marginBottom: '20px', color: 'var(--text-muted)' }}>{service.desc}</p>
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
