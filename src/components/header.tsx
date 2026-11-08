'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Brand } from './brand';

const navItems = [
  { label: 'Overview', href: '/' },
  { label: 'Services & Divisions', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  return (
    <header className={`minimal-header-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="container flex items-center justify-between">
        {/* Brand */}
        <Brand light />

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${active ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Group */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/918296748983"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex btn-secondary !py-2 !px-3.5 !text-xs !gap-1.5"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={14} className="text-[#25D366]" />
            <span>WhatsApp</span>
          </a>

          <Link
            href="/contact"
            className="btn-primary !py-2 !px-4 !text-xs"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={14} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-white"
            aria-label={open ? 'Close Menu' : 'Open Menu'}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="fixed inset-0 top-[72px] z-50 bg-[#070B14] p-6 flex flex-col justify-between md:hidden">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block text-lg font-medium p-3 rounded-lg transition-colors ${
                  pathname === item.href
                    ? 'bg-white/10 text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full justify-center !py-3"
            >
              <span>Start a Project</span>
              <ArrowUpRight size={15} />
            </Link>

            <a
              href="https://wa.me/918296748983"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="btn-secondary w-full justify-center !py-3 text-sm"
            >
              <MessageCircle size={16} className="text-[#25D366]" />
              <span>WhatsApp: +91 82967 48983</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
