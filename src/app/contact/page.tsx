import type { Metadata } from 'next';
import {
  Mail,
  ArrowUpRight,
  MessageCircle,
  Clock,
  MapPin,
} from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us — Movegrid Solutions',
  description:
    'Get in touch with Movegrid Solutions for website development, UI/UX design, rider onboarding, vendor management, digital marketing, and video production.',
};

export default function ContactPage() {
  return (
    <>
      {/* ── Page Hero ────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden">
        <div className="ambient-glow-top" aria-hidden="true" />
        <div className="ambient-grid" aria-hidden="true" />

        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <div className="consuma-pill">
            <span className="consuma-pill-dot" />
            <span>DIRECT ENGAGEMENT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Let&apos;s Build Something<br />
            <span className="text-cyan-gradient">That Moves You Forward.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have a project, an operational requirement or a growth challenge? Reach out to our leadership team for a prompt, structured consultation.
          </p>
        </div>
      </section>

      {/* ── Contact Layout ───────────────────────────────────── */}
      <section className="section-pad border-t border-white/5 bg-[#030712]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="consuma-pill !mb-3">
                  <span className="consuma-pill-dot" />
                  <span>DIRECT CHANNELS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                  Connect With Our Team
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We prioritize direct, transparent discussions. Choose your preferred communication channel below:
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="mailto:preetham@movegridsolutions.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#080E1E] border border-white/10 hover:border-white/25 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-500">
                      Official Company Email
                    </div>
                    <div className="text-sm font-semibold text-white">
                      preetham@movegridsolutions.com
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="ml-auto text-slate-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://wa.me/918296748983"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#080E1E] border border-white/10 hover:border-white/25 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-500">
                      WhatsApp &amp; Direct Phone
                    </div>
                    <div className="text-sm font-semibold text-white">
                      +91 82967 48983
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="ml-auto text-slate-500 group-hover:text-white transition-colors" />
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#080E1E] border border-white/10">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-500">
                      Headquarters &amp; Coverage
                    </div>
                    <div className="text-sm font-semibold text-white">
                      India &bull; Nationwide &amp; Global Operations
                    </div>
                  </div>
                </div>
              </div>

              {/* SLA Response Guarantee Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/30 to-[#080E1E] border border-blue-500/20">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
                  <Clock size={16} />
                  <span>Rapid Response Protocol</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Enquiries submitted via email or WhatsApp are acknowledged within 24 business hours. If requested, an introductory discovery session will be scheduled within 2 business days.
                </p>
              </div>
            </div>

            {/* Right Column: SaaS Contact Form */}
            <div className="lg:col-span-7">
              <div className="saas-form-card">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs text-slate-400">
                    Fields marked with <span className="text-cyan-400">*</span> are required.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Direct WhatsApp CTA ─────────────────────────────── */}
      <section className="section-pad border-t border-white/5 bg-[#020612] text-center">
        <div className="container max-w-3xl">
          <div className="consuma-pill">
            <span className="consuma-pill-dot" />
            <span>PREFER INSTANT MESSAGING?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            Chat with Our Solutions Director on WhatsApp
          </h2>

          <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
            Skip the email draft and speak directly with our team on WhatsApp at <strong>+91 82967 48983</strong>.
          </p>

          <a
            href="https://wa.me/918296748983"
            target="_blank"
            rel="noreferrer"
            className="btn-framer-primary !py-3.5 !px-8 text-base inline-flex"
          >
            <MessageCircle size={18} />
            <span>Open WhatsApp Chat (+91 82967 48983)</span>
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </>
  );
}
