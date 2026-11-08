'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export function FloatingWhatsApp() {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <a
        href="https://wa.me/918296748983?text=Hi%20Movegrid%20Solutions%2C%20I%20have%20an%20inquiry%20about%20your%20services"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Movegrid Solutions on WhatsApp"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: '#25D366',
          color: '#ffffff',
          padding: '10px 18px',
          borderRadius: '100px',
          boxShadow: '0 8px 30px rgba(37,211,102,0.4), 0 2px 8px rgba(0,0,0,0.15)',
          fontWeight: 600,
          fontSize: '0.875rem',
          textDecoration: 'none',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
          e.currentTarget.style.boxShadow =
            '0 12px 36px rgba(37,211,102,0.5), 0 4px 12px rgba(0,0,0,0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow =
            '0 8px 30px rgba(37,211,102,0.4), 0 2px 8px rgba(0,0,0,0.15)';
        }}
      >
        <MessageCircle size={20} fill="#ffffff" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>

      <button
        onClick={() => setClosed(true)}
        aria-label="Dismiss WhatsApp quick button"
        style={{
          background: 'rgba(2,6,23,0.6)',
          border: '1px solid rgba(255,255,255,0.15)',
          color: '#ffffff',
          borderRadius: '50%',
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          padding: 0,
          backdropFilter: 'blur(8px)',
        }}
      >
        <X size={13} />
      </button>
    </div>
  );
}

