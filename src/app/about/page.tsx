import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowUpRight,
  Compass,
  Layers3,
  Handshake,
  Globe,
  Users2,
  Award,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — Movegrid Solutions',
  description:
    'Learn about Movegrid Solutions — a multi-service business solutions company combining digital innovation, operational excellence and creative growth.',
};

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden">
        <div className="ambient-glow-top" aria-hidden="true" />
        <div className="ambient-grid" aria-hidden="true" />

        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <div className="consuma-pill">
            <span className="consuma-pill-dot" />
            <span>ABOUT MOVEGRID SOLUTIONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Moving Businesses Forward,<br />
            <span className="text-cyan-gradient">One Thoughtful Step at a Time.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We are a multi-service business solutions partner combining digital innovation, operational logistics excellence, and creative growth for ambitious businesses across India and international markets.
          </p>
        </div>
      </section>

      {/* ── Narrative & Mission ──────────────────────────────── */}
      <section className="section-pad border-t border-white/5 bg-[#030712]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="consuma-pill !mb-4">
                <span className="consuma-pill-dot" />
                <span>OUR PERSPECTIVE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                True Business Acceleration Requires Connected Execution.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-5 text-slate-400 text-sm sm:text-base leading-relaxed">
              <p>
                In today&apos;s fast-moving economy, businesses rarely grow in a single silo. Building an exceptional web application accomplishes little if fulfillment operations cannot scale; equally, seamless logistics stumble if digital experiences and brand narratives fail to inspire confidence.
              </p>
              <p>
                <strong className="text-white">Movegrid Solutions</strong> was founded to bridge this divide. We combine the technical precision of a digital product studio, the hands-on reliability of an operational logistics partner, and the storytelling prowess of a creative agency under one unified roof.
              </p>
              <p>
                Headquartered in India with capabilities serving both domestic and international enterprises, we partner with startups, SMEs, and enterprise leaders who demand clear accountability and tangible business results.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-400">100%</div>
                  <div className="text-[11px] text-slate-500 font-medium">Transparent Reporting</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400">3 Divisions</div>
                  <div className="text-[11px] text-slate-500 font-medium">Digital, Ops &amp; Media</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-purple-400">Global</div>
                  <div className="text-[11px] text-slate-500 font-medium">Market Reach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Serve Bento ───────────────────────────────── */}
      <section className="section-pad border-t border-white/5 bg-[#050A19]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="consuma-pill">
              <span className="consuma-pill-dot" />
              <span>TARGET AUDIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
              Partners to Ambitious Organizations
            </h2>
            <p className="text-slate-400">
              We calibrate our execution models specifically around the challenges faced by growing enterprises and operational networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#080E1E] border border-white/10 hover:border-white/25 transition-all">
              <span className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
                <Users2 size={24} />
              </span>
              <h3 className="text-xl font-bold text-white mb-2">Startups &amp; Scaleups</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Fast-track go-to-market with rapid prototyping, high-converting web apps, and agile candidate sourcing without overhead bloat.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#080E1E] border border-white/10 hover:border-white/25 transition-all">
              <span className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6">
                <Globe size={24} />
              </span>
              <h3 className="text-xl font-bold text-white mb-2">Logistics &amp; Quick-Commerce</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Rider sourcing, document verification coordination, and fleet onboarding assistance built to sustain rigorous operational SLAs.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#080E1E] border border-white/10 hover:border-white/25 transition-all">
              <span className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                <Award size={24} />
              </span>
              <h3 className="text-xl font-bold text-white mb-2">Enterprises &amp; Corporates</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Enterprise design systems, customized supplier management support, and cinematic corporate video storytelling for market leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Operating Principles ─────────────────────────────── */}
      <section className="section-pad border-t border-white/5 bg-[#030712]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="consuma-pill">
              <span className="consuma-pill-dot" />
              <span>CORE VALUES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
              What Guides Every Movegrid Project
            </h2>
            <p className="text-slate-400">
              Our culture is anchored in commercial clarity, engineering discipline, and dependable follow-through.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#080E1E] border border-white/10">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-4">
                01 / PRINCIPLE
              </span>
              <div className="flex items-center gap-3 mb-3">
                <Compass size={20} className="text-blue-400" />
                <h3 className="text-lg font-bold text-white">Understand First</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Every project begins with active listening. We analyze your commercial constraints, user behavior, and operational nuances before drafting a solution.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#080E1E] border border-white/10">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-4">
                02 / PRINCIPLE
              </span>
              <div className="flex items-center gap-3 mb-3">
                <Layers3 size={20} className="text-cyan-400" />
                <h3 className="text-lg font-bold text-white">Connect the Dots</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                We look for the synergies between software code, operational workflows, and creative assets so that every investment compounds in value.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#080E1E] border border-white/10">
              <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block mb-4">
                03 / PRINCIPLE
              </span>
              <div className="flex items-center gap-3 mb-3">
                <Handshake size={20} className="text-purple-400" />
                <h3 className="text-lg font-bold text-white">Collaborate as Partners</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                We do not operate as detached vendors. We function as a proactive extension of your team, providing transparent updates and dependable follow-through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Band ────────────────────────────────────────── */}
      <section className="section-pad border-t border-white/5 bg-[#020612] text-center">
        <div className="container max-w-3xl">
          <div className="consuma-pill">
            <span className="consuma-pill-dot" />
            <span>WORK WITH MOVEGRID</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            Ready to Accelerate Your Next Growth Phase?
          </h2>

          <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
            Bring us a business goal, a technical challenge, or an operational bottleneck. We&apos;ll chart the path forward.
          </p>

          <Link href="/contact" className="btn-framer-primary !py-3.5 !px-8 text-base">
            <span>Let&apos;s Connect</span>
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
