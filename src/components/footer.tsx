import Link from 'next/link';
import { ArrowUpRight, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Brand } from './brand';

export function Footer() {
  return (
    <footer className="minimal-footer">
      <div className="container">
        {/* Top Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 mb-12 border-b border-white/10">
          <div>
            <Brand light />
            <p className="text-sm text-slate-400 mt-2 max-w-sm">
              Moving businesses forward through digital innovation, smarter operations, and creative growth.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="btn-primary !text-xs !py-2.5 !px-5">
              <span>Start a Conversation</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Divisions */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3.5">
              Business Divisions
            </span>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/services#digital-studio" className="hover:text-white transition-colors">
                  01 Digital Studio
                </Link>
              </li>
              <li>
                <Link href="/services#operations-partnerships" className="hover:text-white transition-colors">
                  02 Operations &amp; Fleet
                </Link>
              </li>
              <li>
                <Link href="/services#creative-growth" className="hover:text-white transition-colors">
                  03 Creative &amp; Growth
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors text-blue-400">
                  All 6 Core Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3.5">
              Core Capabilities
            </span>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/services/web-design-development" className="hover:text-white transition-colors">
                  Web Design &amp; Development
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="hover:text-white transition-colors">
                  UI/UX Architecture
                </Link>
              </li>
              <li>
                <Link href="/services/rider-onboarding" className="hover:text-white transition-colors">
                  Rider Onboarding Support
                </Link>
              </li>
              <li>
                <Link href="/services/vendor-management" className="hover:text-white transition-colors">
                  Vendor Management
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/videography-editing" className="hover:text-white transition-colors">
                  Videography &amp; Editing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3.5">
              Company
            </span>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Movegrid
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Our Work &amp; Prototypes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/918296748983"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Verification */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3.5">
              Direct Contact
            </span>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href="mailto:preetham@movegridsolutions.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail size={14} className="text-blue-400 shrink-0" />
                  <span className="truncate">preetham@movegridsolutions.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918296748983"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={14} className="text-emerald-400 shrink-0" />
                  <span>+91 82967 48983</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-slate-500 shrink-0" />
                <span>India &bull; Global Operations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Movegrid Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Digital Innovation</span>
            <span>&bull;</span>
            <span>Smarter Operations</span>
            <span>&bull;</span>
            <span>Creative Growth</span>
          </div>
          <a
            href="https://movegridsolutions.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white flex items-center gap-1 transition-colors"
          >
            <Globe size={13} />
            <span>movegridsolutions.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
