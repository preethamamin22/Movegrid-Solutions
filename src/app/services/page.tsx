import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Layers, Workflow, TrendingUp } from 'lucide-react';
import { services } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';

export const metadata: Metadata = {
  title: 'Service Divisions & Capabilities',
  description:
    'Explore Movegrid Solutions capabilities organized into three divisions: Digital Studio, Operations & Partnerships, and Creative & Growth.',
};

export default function ServicesPage() {
  const digitalServices = services.filter((s) => s.category.includes('Digital'));
  const opsServices = services.filter((s) => s.category.includes('Operations'));
  const creativeServices = services.filter((s) => s.category.includes('Creative'));

  return (
    <>
      {/* ── Page Hero ────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden">
        <div className="ambient-glow-top" aria-hidden="true" />
        <div className="ambient-grid" aria-hidden="true" />

        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <div className="consuma-pill">
            <span className="consuma-pill-dot" />
            <span>THE 3 BUSINESS DIVISIONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Three Disciplines.<br />
            <span className="text-cyan-gradient">One Velocity Partner.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Movegrid Solutions organizes its 6 capabilities into three focused business divisions. Engage us for a single focused requirement or tap into our full multidisciplinary ecosystem.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#digital-studio" className="btn-framer-secondary !py-2 !px-4 text-xs">
              &darr; 01 Digital Studio
            </a>
            <a href="#operations-partnerships" className="btn-framer-secondary !py-2 !px-4 text-xs">
              &darr; 02 Operations &amp; Fleet
            </a>
            <a href="#creative-growth" className="btn-framer-secondary !py-2 !px-4 text-xs">
              &darr; 03 Creative &amp; Growth
            </a>
          </div>
        </div>
      </section>

      {/* ── Division 01: Digital Studio ──────────────────────── */}
      <section id="digital-studio" className="section-pad border-t border-white/5 bg-[#030712]">
        <div className="container">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center">
              <Layers size={16} />
            </span>
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-blue-400">
              DIVISION 01 / BUILD
            </span>
          </div>

          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-white">
              Digital Studio
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We design and build bespoke web applications, enterprise corporate websites, e-commerce platforms, and Figma design systems engineered for conversion and speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {digitalServices.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Division 02: Operations & Partnerships ───────────── */}
      <section id="operations-partnerships" className="section-pad border-t border-white/5 bg-[#050A19]">
        <div className="container">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
              <Workflow size={16} />
            </span>
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-400">
              DIVISION 02 / CONNECT
            </span>
          </div>

          <div className="max-w-2xl mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-white">
              Operations &amp; Partnerships
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              High-velocity delivery partner recruitment, verified KYC document collection, dark store staffing, and vendor network management for logistics and e-commerce leaders.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium">
              <span>⚡ Specialized Dark Store &amp; Fleet Staffing for Zepto, Blinkit, Flipkart &amp; Hyperlocal Hubs</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opsServices.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i + 2} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Division 03: Creative & Growth ───────────────────── */}
      <section id="creative-growth" className="section-pad border-t border-white/5 bg-[#030712]">
        <div className="container">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center">
              <TrendingUp size={16} />
            </span>
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-purple-400">
              DIVISION 03 / GROW
            </span>
          </div>

          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-white">
              Creative &amp; Growth
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              From targeted customer acquisition campaigns to corporate videography and viral reels, we produce content that builds enduring brand equity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {creativeServices.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i + 4} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Synergy Advantage Bento ──────────────────────────── */}
      <section className="section-pad border-t border-white/5 bg-gradient-to-b from-[#030712] to-[#08122B]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="consuma-pill">
              <span className="consuma-pill-dot" />
              <span>THE VELOCITY MULTIPLIER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
              Why Multi-Service Synergy Matters
            </h2>
            <p className="text-slate-400">
              How connecting code, operations, and media eliminates handoff delays and compounds business performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#080E1E] border border-white/10">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block mb-3">
                Synergy 01
              </span>
              <h3 className="text-lg font-bold text-white mb-2">Tech-Enabled Logistics</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Our Digital Studio builds custom verification landing pages and onboarding workflows that supercharge our rider and vendor management operations.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#080E1E] border border-white/10">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-3">
                Synergy 02
              </span>
              <h3 className="text-lg font-bold text-white mb-2">Campaigns Grounded in Reality</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Our Creative &amp; Growth team creates video assets and social ads that feature real operational strengths and driver success stories, driving genuine trust.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#080E1E] border border-white/10">
              <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider block mb-3">
                Synergy 03
              </span>
              <h3 className="text-lg font-bold text-white mb-2">Single Point of Accountability</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                One executive relationship, unified billing, and cohesive roadmapping across all design, engineering, workforce, and marketing touchpoints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── High-Impact CTA Band ─────────────────────────────── */}
      <section className="section-pad border-t border-white/5 bg-[#020612] text-center">
        <div className="container max-w-3xl">
          <div className="consuma-pill">
            <span className="consuma-pill-dot" />
            <span>LET&apos;S TALK SCOPE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            Not Sure Which Division Fits Your Current Stage?
          </h2>

          <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
            Schedule a 20-minute discovery call with our solutions director to pinpoint your highest-leverage growth opportunities.
          </p>

          <Link href="/contact" className="btn-framer-primary !py-3.5 !px-8 text-base">
            <span>Schedule Discovery Call</span>
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
