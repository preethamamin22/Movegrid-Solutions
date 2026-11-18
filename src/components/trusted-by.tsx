'use client';

import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Building2 } from 'lucide-react';

export function TrustedBy() {
  return (
    <section className="py-16 border-y border-white/5 bg-[#050811] relative overflow-hidden">
      {/* Subtle ambient back-glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-4xl h-32 bg-blue-500/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-slate-400 text-[11px] font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck size={13} className="text-blue-400" />
            <span>Trusted Client Partnerships</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Trusted by Forward-Thinking Enterprises
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Empowering innovative organizations across scientific technology, quick-commerce, and logistics.
          </p>
        </div>

        {/* Featured Client Banner: Xennov Scientific */}
        <div className="max-w-4xl mx-auto">
          <a
            href="https://www.xennovscientific.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0C1528] via-[#091122] to-[#070D1A] border border-blue-500/20 hover:border-cyan-400/40 shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            {/* Ambient hover light */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
              <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                {/* Xennov Scientific Custom Vector Emblem */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-cyan-400"
                  >
                    {/* Hexagonal scientific lens & atomic orbital */}
                    <path
                      d="M16 3L27 9.5V22.5L16 29L5 22.5V9.5L16 3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <circle cx="16" cy="16" r="4.5" fill="#38BDF8" fillOpacity="0.3" stroke="#38BDF8" strokeWidth="1.5" />
                    <line x1="16" y1="3" x2="16" y2="11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="27" y1="22.5" x2="19.5" y2="18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="5" y1="22.5" x2="12.5" y2="18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      XENNOV <span className="text-cyan-400 font-semibold">SCIENTIFIC</span>
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <CheckCircle2 size={10} />
                      Verified Client Partner
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Premier Scientific Research, Laboratory Instrumentation &amp; Analytical Technology Solutions.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mt-2 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-slate-300 font-medium">
                      <span>Domain:</span>
                      <strong className="text-cyan-400 font-mono">xennovscientific.com</strong>
                    </span>
                    <span>&bull;</span>
                    <span>Digital Transformation &amp; Platform Architecture</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="sm:self-center shrink-0">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-all shadow-sm">
                  <span>Visit Client Site</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </a>

          {/* Complementary Ecosystem Trust Strip */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-center">
              <div className="text-xs font-bold text-white mb-0.5">Scientific &amp; Lab Tech</div>
              <div className="text-[11px] text-slate-400">Research Instrumentation</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-center">
              <div className="text-xs font-bold text-white mb-0.5">Quick Commerce</div>
              <div className="text-[11px] text-slate-400">10-Min Dark Store Fleets</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-center">
              <div className="text-xs font-bold text-white mb-0.5">Last-Mile Logistics</div>
              <div className="text-[11px] text-slate-400">E-Commerce Sortation Hubs</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-center">
              <div className="text-xs font-bold text-white mb-0.5">D2C &amp; High-Growth</div>
              <div className="text-[11px] text-slate-400">Performance Marketing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
