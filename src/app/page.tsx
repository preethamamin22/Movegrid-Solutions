'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  Workflow,
  TrendingUp,
  ShieldCheck,
  Zap,
  Users2,
  ChevronDown,
  MessageCircle,
} from 'lucide-react';
import { services } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';
import { PortfolioGrid } from '@/components/portfolio-grid';
import { ContactForm } from '@/components/contact-form';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does Movegrid coordinate digital, operations, and creative services?',
      a: 'We operate three specialized divisions under one leadership team. This allows you to develop digital products, scale on-ground rider or vendor operations, and execute marketing campaigns through a single partner with unified accountability.',
    },
    {
      q: 'Can we engage Movegrid for a single service or pilot project?',
      a: 'Yes. Many clients start with a targeted requirement—such as building a corporate website or coordinating rider onboarding—and expand into other capabilities as needs evolve.',
    },
    {
      q: 'What is the typical kickoff timeline for new engagements?',
      a: 'Following an initial 20-minute discovery consultation, we provide a structured scope and timeline within 24 to 48 hours. Digital sprints typically begin within 3 to 5 business days, while operational pipelines can be mobilized within a week.',
    },
    {
      q: 'How are performance and deliverables tracked?',
      a: 'Every engagement includes documented milestones, clear SLAs, and regular progress reports with direct communication channels to project leads.',
    },
    {
      q: 'Do you work with international clients outside India?',
      a: 'Yes. While our on-ground operational capabilities are based in India, our Digital Studio and Creative teams serve clients across North America, Europe, the Middle East, and Southeast Asia.',
    },
  ];

  return (
    <>
      {/* ── Subtle Hero Ambience ──────────────────────────────── */}
      <div className="subtle-hero-glow" aria-hidden="true" />

      {/* ── SECTION 1 & 2: HERO ───────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container max-w-4xl text-center mx-auto">
          <div className="inline-flex justify-center mb-6">
            <div className="minimal-pill">
              <span className="minimal-pill-dot" />
              <span>Multi-Service Business Solutions</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
            Moving Businesses Forward Through{' '}
            <span className="text-blue-400">Digital Innovation.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            From powerful digital experiences to scalable operational support and creative marketing, Movegrid Solutions helps businesses build, grow and move forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-20">
            <Link href="/services" className="btn-primary !py-3 !px-7 text-sm w-full sm:w-auto">
              <span>Explore Our Services</span>
              <ArrowRight size={15} />
            </Link>

            <Link href="/contact" className="btn-secondary !py-3 !px-7 text-sm w-full sm:w-auto">
              <span>Let&apos;s Discuss Your Project</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Clean 3-Discipline Value Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left pt-8 border-t border-white/10">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
                <Layers size={14} /> 01 Digital Studio
              </div>
              <div className="text-sm font-semibold text-white mb-0.5">Web Engineering &amp; UI/UX</div>
              <p className="text-xs text-slate-400">High-performance corporate sites, custom web apps, and design systems.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
                <Workflow size={14} /> 02 Operations &amp; Fleet
              </div>
              <div className="text-sm font-semibold text-white mb-0.5">Rider &amp; Vendor Onboarding</div>
              <p className="text-xs text-slate-400">Logistics partner recruitment, KYC collection, and supplier coordination.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">
                <TrendingUp size={14} /> 03 Creative &amp; Growth
              </div>
              <div className="text-sm font-semibold text-white mb-0.5">Digital Campaigns &amp; Video</div>
              <p className="text-xs text-slate-400">Targeted lead generation funnels, corporate films, and social content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: INTRODUCTION ───────────────────────────── */}
      <section className="section-spacing border-t border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
                Unified Approach
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                One Partner.<br />
                Multiple Business Solutions.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 text-slate-400 text-sm sm:text-base leading-relaxed">
              <p>
                Modern businesses rarely grow in a single discipline. Building an ambitious product requires custom digital infrastructure; scaling customer fulfillment demands verified on-ground workforce sourcing; and market expansion requires clear brand communication.
              </p>
              <p>
                Movegrid Solutions brings digital design, operational staffing, and creative media production under one accountable relationship—eliminating communication silos and handoff delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: THE THREE BUSINESS DIVISIONS ────────────── */}
      <section className="section-spacing border-t border-white/5 bg-[#050914]">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
              Business Structure
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Three Specialized Divisions
            </h2>
            <p className="text-slate-400 text-sm">
              Engage our teams for a specific vertical or deploy an integrated multi-discipline program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Division 1 */}
            <div className="minimal-card flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-slate-500 mb-3">01 / BUILD</div>
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5">
                  <Layers size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Digital Studio</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Custom corporate websites, e-commerce platforms, web applications, and intuitive UI/UX design systems.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 mb-6">
                  <li>&bull; Web Design &amp; Development</li>
                  <li>&bull; UI/UX &amp; Interactive Prototyping</li>
                  <li>&bull; Design Systems &amp; Maintenance</li>
                </ul>
              </div>

              <Link
                href="/services#digital-studio"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-white transition-colors pt-4 border-t border-white/5"
              >
                <span>Explore Digital Studio</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Division 2 */}
            <div className="minimal-card flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-slate-500 mb-3">02 / CONNECT</div>
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5">
                  <Workflow size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Operations &amp; Partnerships</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Field workforce recruitment, delivery partner onboarding, and vendor network management for logistics networks.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 mb-6">
                  <li>&bull; Rider Sourcing &amp; Recruitment</li>
                  <li>&bull; Document Collection &amp; Verification</li>
                  <li>&bull; Vendor Onboarding &amp; Registration</li>
                </ul>
              </div>

              <Link
                href="/services#operations-partnerships"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-white transition-colors pt-4 border-t border-white/5"
              >
                <span>Explore Operations</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Division 3 */}
            <div className="minimal-card flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-slate-500 mb-3">03 / GROW</div>
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-5">
                  <TrendingUp size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Creative &amp; Growth</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Targeted performance marketing campaigns, lead generation funnels, and cinematic corporate video storytelling.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 mb-6">
                  <li>&bull; Digital Marketing &amp; Lead Generation</li>
                  <li>&bull; Corporate Videography &amp; Brand Films</li>
                  <li>&bull; Instagram Reels &amp; Motion Design</li>
                </ul>
              </div>

              <Link
                href="/services#creative-growth"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-white transition-colors pt-4 border-t border-white/5"
              >
                <span>Explore Creative &amp; Growth</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: ALL 6 SERVICES ─────────────────────────── */}
      <section className="section-spacing border-t border-white/5">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
                Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Our Services
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-white transition-colors"
            >
              <span>View full service catalog</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHY MOVEGRID ───────────────────────────── */}
      <section className="section-spacing border-t border-white/5 bg-[#050914]">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
              Differentiators
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Why Partner With Movegrid
            </h2>
            <p className="text-slate-400 text-sm">
              We combine multi-disciplinary execution with enterprise accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="minimal-card">
              <span className="text-xs font-mono font-bold text-slate-500 block mb-3">01</span>
              <h3 className="text-base font-bold text-white mb-2">One Unified Partner</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Digital, operations, and creative disciplines aligned under single management with zero vendor handoff delays.
              </p>
            </div>

            <div className="minimal-card">
              <span className="text-xs font-mono font-bold text-slate-500 block mb-3">02</span>
              <h3 className="text-base font-bold text-white mb-2">Scalable Solutions</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Flexible engagement models calibrated to scale smoothly with your seasonal demand and expansion goals.
              </p>
            </div>

            <div className="minimal-card">
              <span className="text-xs font-mono font-bold text-slate-500 block mb-3">03</span>
              <h3 className="text-base font-bold text-white mb-2">Clear Accountability</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Transparent milestones, documented SLAs, and direct access to assigned coordinators throughout the project.
              </p>
            </div>

            <div className="minimal-card">
              <span className="text-xs font-mono font-bold text-slate-500 block mb-3">04</span>
              <h3 className="text-base font-bold text-white mb-2">Cross-Vertical Value</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Operational insights inform our software architectures, and real fleet data drives our marketing storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: OUR PROCESS ────────────────────────────── */}
      <section className="section-spacing border-t border-white/5">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Our Four-Step Process
            </h2>
            <p className="text-slate-400 text-sm">
              A collaborative, milestone-driven framework that keeps projects on schedule and aligned.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono text-blue-400 font-bold mb-2">STEP 01</div>
              <h3 className="text-base font-bold text-white mb-2">Discover</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We review your business goals, target audience, technical infrastructure, and operational constraints.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono text-cyan-400 font-bold mb-2">STEP 02</div>
              <h3 className="text-base font-bold text-white mb-2">Strategize</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We design an execution roadmap, architecture specifications, and milestone schedule tailored to your priorities.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono text-purple-400 font-bold mb-2">STEP 03</div>
              <h3 className="text-base font-bold text-white mb-2">Execute</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Agile development sprints, on-ground verification workflows, and media production with transparent status reporting.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono text-emerald-400 font-bold mb-2">STEP 04</div>
              <h3 className="text-base font-bold text-white mb-2">Grow</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Post-launch optimization, continuous operational support, and ongoing reviews to identify new expansion opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FEATURED WORK ──────────────────────────── */}
      <section className="section-spacing border-t border-white/5 bg-[#050914]">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
                Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Selected Work &amp; Prototypes
              </h2>
            </div>

            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-white transition-colors"
            >
              <span>View all projects</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <PortfolioGrid />
        </div>
      </section>

      {/* ── SECTION 9: FREQUENTLY ASKED QUESTIONS ─────────────── */}
      <section className="section-spacing border-t border-white/5">
        <div className="container max-w-3xl">
          <div className="max-w-xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
              FAQs
            </span>
            <h2 className="text-3xl font-bold text-white mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm">
              Common questions regarding our engagement models, timelines, and scope.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="accordion-item">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="accordion-trigger"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={17}
                      className={`text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="accordion-content">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: CONTACT & ENQUIRY ─────────────────────── */}
      <section className="section-spacing border-t border-white/5 bg-[#050914]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
                  Get in Touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                  Let&apos;s Build Something Together.
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Have a project, operational requirement, or growth initiative? Connect directly with our team for a structured consultation.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="mailto:preetham@movegridsolutions.com"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all text-xs"
                >
                  <span className="text-blue-400 font-bold">@</span>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Direct Email</div>
                    <div className="text-white font-medium">preetham@movegridsolutions.com</div>
                  </div>
                  <ArrowUpRight size={14} className="ml-auto text-slate-500" />
                </a>

                <a
                  href="https://wa.me/918296748983"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all text-xs"
                >
                  <MessageCircle size={15} className="text-emerald-400" />
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">WhatsApp Business</div>
                    <div className="text-white font-medium">+91 82967 48983</div>
                  </div>
                  <ArrowUpRight size={14} className="ml-auto text-slate-500" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="minimal-card">
                <div className="mb-5">
                  <h3 className="text-lg font-bold text-white mb-1">
                    Send an Inquiry
                  </h3>
                  <p className="text-xs text-slate-400">
                    Fields marked with <span className="text-blue-400">*</span> are required. We acknowledge all inquiries within 24 business hours.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
