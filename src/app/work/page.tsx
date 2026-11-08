import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { PortfolioGrid } from '@/components/portfolio-grid';

export const metadata: Metadata = {
  title: 'Our Work & Prototypes — Movegrid Solutions',
  description:
    'Explore concept prototypes and multi-disciplinary solutions across digital studio, operations support, and creative marketing by Movegrid Solutions.',
};

export default function WorkPage() {
  return (
    <>
      {/* ── Page Hero ────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden">
        <div className="ambient-glow-top" aria-hidden="true" />
        <div className="ambient-grid" aria-hidden="true" />

        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <div className="consuma-pill">
            <span className="consuma-pill-dot" />
            <span>PORTFOLIO &amp; PROTOTYPES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Transforming Complex Challenges<br />
            <span className="text-cyan-gradient">Into High-Velocity Solutions.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Explore our multidisciplinary portfolio across digital engineering, operational logistics infrastructure, and creative brand campaigns.
          </p>
        </div>
      </section>

      {/* ── Portfolio Grid ───────────────────────────────────── */}
      <section className="section-pad border-t border-white/5 bg-[#030712]">
        <div className="container">
          <PortfolioGrid />
        </div>
      </section>

      {/* ── High-Impact CTA Band ─────────────────────────────── */}
      <section className="section-pad border-t border-white/5 bg-[#020612] text-center">
        <div className="container max-w-3xl">
          <div className="consuma-pill">
            <span className="consuma-pill-dot" />
            <span>HAVE A SPECIFIC REQUIREMENT?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            Let&apos;s Design a Solution Tailored to Your Exact Scope
          </h2>

          <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
            Whether building a new digital platform from scratch or mobilizing workforce onboarding workflows, we&apos;re ready to help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-framer-primary !py-3.5 !px-8 text-base w-full sm:w-auto">
              <span>Start Project Discussion</span>
              <ArrowUpRight size={17} />
            </Link>

            <a
              href="https://wa.me/918296748983"
              target="_blank"
              rel="noreferrer"
              className="btn-framer-secondary !py-3.5 !px-8 text-base w-full sm:w-auto"
            >
              <MessageCircle size={17} className="text-[#25D366]" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
