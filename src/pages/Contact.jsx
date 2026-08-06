import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: 'success', msg: 'Message sent successfully! We will contact you soon.' });
        setFormData({ firstName: '', lastName: '', email: '', service: '', message: '' });
      } else {
        setStatus({ type: 'error', msg: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      setStatus({ type: 'error', msg: 'An error occurred. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };
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
            {status.msg && (
              <div style={{ padding: '12px', marginBottom: '20px', borderRadius: '8px', background: status.type === 'success' ? 'rgba(37, 211, 102, 0.1)' : 'rgba(239, 68, 68, 0.1)', color: status.type === 'success' ? '#25D366' : '#ef4444', border: `1px solid ${status.type === 'success' ? 'rgba(37, 211, 102, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`, display: 'flex', alignItems: 'center', gap: '8px' }}>
                {status.type === 'success' && <CheckCircle size={18} />}
                {status.msg}
              </div>
            )}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="contact-name-grid">
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>First Name</label>
                  <input required type="text" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} placeholder="John" style={{ width: '100%', padding: '14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#ffffff', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Last Name</label>
                  <input type="text" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} placeholder="Doe" style={{ width: '100%', padding: '14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#ffffff', outline: 'none' }} />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email Address</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="john@example.com" style={{ width: '100%', padding: '14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#ffffff', outline: 'none' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Service Interested In</label>
                <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} style={{ width: '100%', padding: '14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#ffffff', outline: 'none', appearance: 'none' }}>
                  <option value="" disabled style={{ color: '#ffffff', background: '#0a0616' }}>Select a service</option>
                  <option value="telecalling" style={{ color: '#ffffff', background: '#0a0616' }}>Telecalling</option>
                  <option value="ecommerce" style={{ color: '#ffffff', background: '#0a0616' }}>E-commerce Support</option>
                  <option value="web" style={{ color: '#ffffff', background: '#0a0616' }}>Web Development</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Message</label>
                <textarea required rows="4" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Tell us about your project..." style={{ width: '100%', padding: '14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#ffffff', outline: 'none', resize: 'vertical' }}></textarea>
              </div>

              <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                {loading ? 'Sending...' : <><Send size={18} /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
