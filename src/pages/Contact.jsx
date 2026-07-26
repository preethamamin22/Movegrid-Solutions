import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="contact-page" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      <div className="container">
        <div className="section-header animate-fade-up">
          <h2>Get in <span className="text-gradient">Touch</span></h2>
          <p>Ready to transform your business? Let's discuss how we can help you scale.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px', alignItems: 'flex-start' }}>
          <div className="animate-fade-up delay-1">
            <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Contact Information</h3>
            <p style={{ marginBottom: '40px', fontSize: '1.1rem' }}>
              Fill out the form and our team will get back to you within 24 hours. We're excited to hear from you!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ width: '50px', height: '50px', background: 'var(--bg-lighter)', color: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Our Office</h4>
                  <p style={{ color: 'var(--text-muted)' }}>Bengaluru, Karnataka<br />India</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ width: '50px', height: '50px', background: 'var(--bg-lighter)', color: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Phone Number</h4>
                  <a href="tel:+918296748983" style={{ color: 'var(--text-muted)' }}>+91 8296748983</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ width: '50px', height: '50px', background: 'var(--bg-lighter)', color: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Email Address</h4>
                  <a href="mailto:preetham@outvoxsolution.com" style={{ color: 'var(--text-muted)', wordBreak: 'break-all' }}>
                    info@outvoxsolution.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel animate-fade-up delay-2" style={{ padding: '40px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Send us a Message</h3>
            <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="contact-name-grid">
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>First Name</label>
                  <input type="text" placeholder="John" style={{ width: '100%', padding: '14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#ffffff', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Last Name</label>
                  <input type="text" placeholder="Doe" style={{ width: '100%', padding: '14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#ffffff', outline: 'none' }} />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email Address</label>
                <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#ffffff', outline: 'none' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Service Interested In</label>
                <select style={{ width: '100%', padding: '14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#ffffff', outline: 'none', appearance: 'none' }}>
                  <option value="" disabled defaultValue style={{ color: '#ffffff', background: '#0a0616' }}>Select a service</option>
                  <option value="telecalling" style={{ color: '#ffffff', background: '#0a0616' }}>Telecalling</option>
                  <option value="ecommerce" style={{ color: '#ffffff', background: '#0a0616' }}>E-commerce Support</option>
                  <option value="web" style={{ color: '#ffffff', background: '#0a0616' }}>Web Development</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Message</label>
                <textarea rows="4" placeholder="Tell us about your project..." style={{ width: '100%', padding: '14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#ffffff', outline: 'none', resize: 'vertical' }}></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
