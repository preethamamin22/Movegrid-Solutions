import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      desc: "Perfect for small businesses and startups.",
      price: "$499",
      period: "/month",
      features: ["1 Dedicated Agent", "8/5 Support Coverage", "Email & Chat Support", "Basic Reporting", "Standard SLA"],
      highlight: false
    },
    {
      name: "Growth",
      desc: "Ideal for growing e-commerce and SaaS brands.",
      price: "$1,299",
      period: "/month",
      features: ["3 Dedicated Agents", "24/7 Support Coverage", "Omnichannel Support", "Advanced Analytics", "Custom Workflows", "Dedicated Account Manager"],
      highlight: true
    },
    {
      name: "Enterprise",
      desc: "Custom solutions for large scale operations.",
      price: "Custom",
      period: "",
      features: ["10+ Dedicated Agents", "24/7 Premium Coverage", "Custom Integrations", "Real-time Dashboard", "Volume Discounts", "Strategic Consulting"],
      highlight: false
    }
  ];

  return (
    <div className="pricing-page" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      <div className="container">
        <div className="section-header animate-fade-up">
          <h2>Transparent <span className="text-gradient">Pricing</span></h2>
          <p>Choose the right plan to scale your customer support and digital operations.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', alignItems: 'center' }}>
          {plans.map((plan, idx) => (
            <div key={idx} className={`glass-panel animate-fade-up delay-${idx+1}`} style={{ padding: '40px 30px', position: 'relative', border: plan.highlight ? '1px solid var(--primary)' : '', boxShadow: plan.highlight ? '0 10px 30px rgba(153, 118, 207, 0.15)' : '' }}>
              {plan.highlight && (
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--primary)', color: 'var(--bg-color)', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '1px', whiteSpace: 'nowrap' }}>
                  MOST POPULAR
                </div>
              )}
              <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{plan.name}</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px', minHeight: '48px' }}>{plan.desc}</p>
              <div style={{ marginBottom: '30px' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-main)' }}>{plan.price}</span>
                <span style={{ color: 'var(--text-muted)' }}>{plan.period}</span>
              </div>
              <ul style={{ listStyle: 'none', marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`btn ${plan.highlight ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%' }}>
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
