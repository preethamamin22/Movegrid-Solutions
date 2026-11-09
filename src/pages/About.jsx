import { Sparkles, Video, Award, Users, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import founderPhoto from '../assets/founder.jpg';
import divithPhoto from '../assets/divith.jpg';

export default function About() {
  return (
    <div className="about-page" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      <SEO 
        title="About Us | Preetham B R - Founder of Movegrid Solutions"
        description="Preetham B R is the Founder of Movegrid Solutions. Learn about our leadership, mission, and how we empower businesses with smart BPO, rider onboarding, videography, and web development."
        keywords="Preetham B R, founder of Movegrid Solutions, Preetham B R founder, Movegrid Solutions founder, who founded Movegrid Solutions, Divith B P, Movegrid leadership"
      />
      <div className="container">
        <div className="section-header animate-fade-up">
          <h2>About <span className="text-gradient">Movegrid Solutions</span></h2>
          <p>We are a premium BPO, creative media, and digital agency dedicated to helping businesses scale with smart solutions.</p>
        </div>
        
        <div className="about-intro-grid">
          <div className="glass-panel animate-fade-up" style={{ padding: '20px' }}>
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Team" style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
          </div>
          <div className="animate-fade-up delay-1">
            <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Mission</h3>
            <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
              At Movegrid Solutions, our mission is to empower startups, fast-scaling enterprises, and brands with top-tier customer support, professional videography &amp; editing, rapid delivery rider onboarding, and cutting-edge web development. We bridge the gap between businesses and their audiences through seamless operations and robust digital experiences.
            </p>
            <h3 style={{ fontSize: '2rem', marginBottom: '20px', marginTop: '40px' }}>Our Vision</h3>
            <p style={{ fontSize: '1.1rem' }}>
              To be the globally recognized leader in providing integrated outsourcing, creative multimedia, and digital solutions, setting the industry standard for quality, speed, and client success.
            </p>
          </div>
        </div>

        {/* Leadership & Team Section */}
        <div style={{ marginTop: '80px' }}>
          <div className="section-header animate-fade-up">
            <div className="badge-pill" style={{ marginBottom: '16px' }}>
              <Sparkles size={14} color="var(--primary)" />
              <span>LEADERSHIP & TALENT</span>
            </div>
            <h2>Meet Our <span className="text-gradient">Team</span></h2>
            <p>The visionaries and creative experts driving innovation, execution, and client success at Movegrid Solutions.</p>
          </div>

          <div className="team-grid" style={{ marginTop: '40px' }}>
            {/* Preetham B R - Founder */}
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
              <p itemProp="jobTitle" style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.95rem', marginBottom: '14px' }}>Founder</p>
              <p itemProp="description" style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '20px' }}>
                Preetham B R is the Founder of Movegrid Solutions, driving overall business vision, strategic partnerships, operational scale, and client success across all BPO, fleet onboarding, and web development verticals.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.78rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: '4px 12px', borderRadius: '16px', color: '#ffffff' }}>Strategy</span>
                <span style={{ fontSize: '0.78rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: '4px 12px', borderRadius: '16px', color: '#ffffff' }}>Operations</span>
                <span style={{ fontSize: '0.78rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: '4px 12px', borderRadius: '16px', color: '#ffffff' }}>Client Growth</span>
              </div>
            </div>

            {/* Divith B P - Videography and Editing */}
            <div className="glass-panel team-card animate-fade-up delay-2" style={{ position: 'relative', border: '1px solid rgba(168, 85, 247, 0.25)', background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.06) 0%, rgba(30, 13, 54, 0.45) 100%)', boxShadow: '0 12px 35px rgba(147, 51, 234, 0.15)', borderRadius: '20px' }}>
              <div style={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #9333ea 0%, #a855f7 100%)', color: '#ffffff', padding: '4px 16px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', boxShadow: '0 4px 14px rgba(147, 51, 234, 0.4)' }}>
                ✦ CREATIVE LEAD
              </div>
              <div style={{ width: '150px', height: '190px', margin: '14px auto 20px', borderRadius: '16px', overflow: 'hidden', border: '2px solid rgba(168, 85, 247, 0.45)', boxShadow: '0 8px 28px rgba(147, 51, 234, 0.28)', background: '#0a0414' }}>
                <img src={divithPhoto} alt="Divith B P - Videography & Editing" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '4px', color: '#ffffff' }}>Divith B P</h3>
              <p style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.95rem', marginBottom: '14px' }}>Videography &amp; Editing</p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '20px' }}>
                Leading high-impact video production, cinematic commercial shoots, dynamic social reels, sound engineering, and creative visual editing for brand growth.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.78rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: '4px 12px', borderRadius: '16px', color: '#ffffff' }}>Cinematography</span>
                <span style={{ fontSize: '0.78rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: '4px 12px', borderRadius: '16px', color: '#ffffff' }}>Reel Editing</span>
                <span style={{ fontSize: '0.78rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: '4px 12px', borderRadius: '16px', color: '#ffffff' }}>Color Grading</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
