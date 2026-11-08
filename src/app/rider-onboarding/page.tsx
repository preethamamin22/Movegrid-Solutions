import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Users,
  ShieldCheck,
  Clock,
  Building2,
  CheckCircle2,
  Zap,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  Check,
  FileCheck,
  PhoneCall,
} from 'lucide-react';
import { DarkStoreCalculator } from '@/components/dark-store-calculator';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Rider Onboarding & Dark Store Fleet Sourcing | Movegrid Solutions',
  description:
    'High-velocity delivery partner sourcing, digital KYC verification, and dark store workforce mobilization for quick-commerce (Zepto, Blinkit, Instamart) and e-commerce leaders (Flipkart, Amazon).',
  keywords: [
    'Rider Onboarding Services India',
    'Dark Store Delivery Fleet',
    'Delivery Partner Recruitment',
    'Quick Commerce Staffing India',
    'Zepto Blinkit Rider Sourcing',
    'Flipkart Delivery Fleet Onboarding',
    'Movegrid Fleet Operations',
  ],
};

export default function RiderOnboardingPage() {
  return (
    <>
      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden">
        <div className="subtle-hero-glow" aria-hidden="true" />

        <div className="container max-w-4xl text-center mx-auto relative z-10">
          <div className="inline-flex justify-center mb-6">
            <div className="minimal-pill">
              <span className="minimal-pill-dot bg-emerald-400" />
              <span>Enterprise Logistics &amp; Quick-Commerce Staffing</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight">
            High-Velocity Rider Onboarding for{' '}
            <span className="text-cyan-400">Dark Stores</span> &amp;{' '}
            <span className="text-blue-400">Last-Mile Hubs.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Movegrid Solutions coordinates end-to-end delivery partner recruitment, 100% digital KYC verification, and Day-1 on-ground activation for India&apos;s leading quick-commerce and e-commerce networks.
          </p>

          {/* Quick Commerce Alignment Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 text-xs text-slate-400">
            <span className="text-slate-500 font-semibold">Specialized for:</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white font-medium">
              ⚡ 10-Min Dark Stores (Zepto, Blinkit, Instamart)
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white font-medium">
              📦 E-Commerce Hubs (Flipkart Minutes, Flipkart, Amazon)
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white font-medium">
              🛵 Intra-City Couriers (Porter, Shadowfax, Borzo)
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/918296748983?text=Hi%20Movegrid%20Operations%2C%20we%20need%20rider%20onboarding%20support%20for%20our%20dark%20stores"
              target="_blank"
              rel="noreferrer"
              className="btn-primary !py-3.5 !px-8 text-sm w-full sm:w-auto !bg-emerald-600 hover:!bg-emerald-500 !border-emerald-500/40"
            >
              <MessageCircle size={16} />
              <span>Talk to Fleet Ops on WhatsApp</span>
            </a>

            <a
              href="#calculator"
              className="btn-secondary !py-3.5 !px-8 text-sm w-full sm:w-auto"
            >
              <Zap size={16} className="text-cyan-400" />
              <span>Estimate Fleet Turnaround</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 4 CORE PERFORMANCE PILLARS ──────────────────────────── */}
      <section className="py-16 border-t border-white/5 bg-[#050914]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                <Clock size={20} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">24–48h Hub Turnaround</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pre-screened rider pipelines ready for rapid deployment when launching new dark stores or handling peak volume surges.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">100% Verified KYC</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Zero-compromise digital audit trail: Aadhaar, Driving License, PAN, Vehicle RC, smartphone check, and background verification.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <Building2 size={20} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">EV &amp; 2-Wheeler Fleet</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Active sourcing of riders with their own vehicles and seamless alignment with commercial EV battery-swapping networks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Day-1 Shift Attendance</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                On-ground field coordinators ensure riders report to the designated dark store, complete order app training, and activate immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE FLEET CALCULATOR ────────────────────────── */}
      <section id="calculator" className="py-20 border-t border-white/5 bg-[#070B14]">
        <div className="container max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-2">
              SLA &amp; Headcount Planner
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Configure Your Dark Store Fleet Requirements
            </h2>
            <p className="text-sm text-slate-400">
              Select your hub count, required riders per store, and target city to view instant deployment timelines and generate a customized procurement proposal.
            </p>
          </div>

          <DarkStoreCalculator />
        </div>
      </section>

      {/* ── 4-STEP ONBOARDING WORKFLOW ─────────────────────────── */}
      <section className="py-20 border-t border-white/5 bg-[#050A19]">
        <div className="container max-w-5xl">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-2">
              Operational Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              How Movegrid Mobilizes Dark Store Fleets
            </h2>
            <p className="text-sm text-slate-400">
              A disciplined four-stage execution pipeline designed to eliminate dark store staffing delays and driver attrition bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono text-cyan-400 font-bold mb-2">STAGE 01</div>
              <h3 className="text-lg font-bold text-white mb-2">Dark Store Demand Mapping</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We align with your city operations leads by dark store PIN codes, shift requirements (morning rush, peak evening surge, late night), vehicle mix (EV vs petrol), and target launch dates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono text-cyan-400 font-bold mb-2">STAGE 02</div>
              <h3 className="text-lg font-bold text-white mb-2">Hyperlocal Sourcing &amp; Field Drives</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Deploying geo-targeted digital acquisition campaigns, on-ground recruitment kiosks, and localized delivery partner referral networks within a 5km radius of each dark store.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono text-cyan-400 font-bold mb-2">STAGE 03</div>
              <h3 className="text-lg font-bold text-white mb-2">Rigorous Digital KYC &amp; Verification</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Standardized verification collecting and auditing Aadhaar, Driving License, PAN card, Vehicle Registration (RC), bank credentials, and clean background verification checks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono text-cyan-400 font-bold mb-2">STAGE 04</div>
              <h3 className="text-lg font-bold text-white mb-2">On-Ground Hub Reporting &amp; Activation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Movegrid hub coordinators physically manage Day-1 dark store reporting, partner mobile app onboarding, delivery bag distribution, and initial order dispatch tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE & VERIFICATION CHECKLIST ────────────────── */}
      <section className="py-20 border-t border-white/5 bg-[#070B14]">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
                Enterprise Compliance
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                100% Audit-Ready Rider Verification
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                We protect your enterprise reputation and delivery SLAs by ensuring every single delivery partner dispatched to your dark store is thoroughly vetted.
              </p>

              <div className="space-y-3">
                {[
                  'Aadhaar Digital Verification & Address Check',
                  'Valid Commercial / Personal Driving License (DL)',
                  'PAN Card Validation for Payout Compliance',
                  'Vehicle Registration Certificate (RC) & Insurance Check',
                  'Smartphone Readiness & GPS Navigation Capability',
                  'Clean Background Verification (BGV) Dossier',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 p-8 rounded-2xl bg-gradient-to-br from-blue-950/40 via-[#0C1527] to-slate-900 border border-blue-500/20">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                <FileCheck size={16} />
                <span>Enterprise Case Scenario</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Dark Store Fleet Mobilization (Bengaluru &amp; NCR)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                When a leading quick-commerce operator required rapid staffing for 12 new dark store openings, Movegrid sourced, verified, and activated 250+ riders within 48 hours with a 98% Day-1 shift attendance rate.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">250+</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Riders Onboarded</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">48h</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Turnaround Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400">98%</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Day-1 Attendance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RFP ENQUIRY FORM ───────────────────────────────────── */}
      <section id="rfp" className="py-20 border-t border-white/5 bg-[#050914]">
        <div className="container max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-2">
              Procurement &amp; Fleet Sourcing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Submit Your Dark Store Fleet Requirement
            </h2>
            <p className="text-sm text-slate-400">
              Speak directly with our Fleet Operations team. We provide customized proposals and deployment schedules within 24 hours.
            </p>
          </div>

          <div className="p-6 md:p-10 rounded-2xl bg-[#0D1322] border border-white/10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
