'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, Layers, Workflow, TrendingUp, CheckCircle2 } from 'lucide-react';
import { categories, projects, type Project } from '@/lib/data';

export function PortfolioGrid() {
  const [active, setActive] = useState('All work');
  const shown = projects.filter(
    (p) => active === 'All work' || p.tag === active
  );

  const getTagColor = (tag: string) => {
    if (tag.includes('Digital')) return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
    if (tag.includes('Operations')) return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
    return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
  };

  const getTagIcon = (tag: string) => {
    if (tag.includes('Digital')) return <Layers size={13} className="text-blue-400" />;
    if (tag.includes('Operations')) return <Workflow size={13} className="text-cyan-400" />;
    return <TrendingUp size={13} className="text-purple-400" />;
  };

  return (
    <>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10" role="group" aria-label="Filter portfolio projects">
        {categories.map((c) => {
          const isSelected = active === c;
          const count = c === 'All work' ? projects.length : projects.filter((p) => p.tag === c).length;
          return (
            <button
              key={c}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all inline-flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400'
                  : 'bg-white/[0.03] text-slate-400 border border-white/5 hover:text-white hover:bg-white/[0.08] hover:border-white/10'
              }`}
              onClick={() => setActive(c)}
              aria-pressed={isSelected}
            >
              <span>{c}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-500'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shown.map((p: Project) => {
          const isDigital = p.tag.includes('Digital');
          const isOps = p.tag.includes('Operations');

          const accentGlow = isDigital
            ? 'group-hover:border-blue-500/40 group-hover:shadow-[0_16px_36px_-10px_rgba(37,99,235,0.25)]'
            : isOps
            ? 'group-hover:border-cyan-500/40 group-hover:shadow-[0_16px_36px_-10px_rgba(6,182,212,0.25)]'
            : 'group-hover:border-purple-500/40 group-hover:shadow-[0_16px_36px_-10px_rgba(168,85,247,0.25)]';

          const headerGradient = isDigital
            ? 'from-blue-950/50 via-slate-900/60 to-transparent'
            : isOps
            ? 'from-cyan-950/50 via-slate-900/60 to-transparent'
            : 'from-purple-950/50 via-slate-900/60 to-transparent';

          return (
            <article
              key={p.number}
              className={`p-6 rounded-2xl bg-gradient-to-b from-[#0D1424] to-[#070B14] border border-white/8 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${accentGlow}`}
            >
              {/* Subtle top ambient sheen */}
              <div
                className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${headerGradient} pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity`}
              />

              <div className="relative z-10">
                {/* Meta Bar */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${getTagColor(p.tag)}`}>
                    {getTagIcon(p.tag)}
                    <span>{p.tag}</span>
                  </span>

                  <span className="text-xs font-mono font-semibold text-slate-500">
                    0{p.number}
                  </span>
                </div>

                {/* Subtitle / Type */}
                <div className="text-xs font-medium text-slate-400 mb-1.5">
                  {p.type}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                  {p.title}
                </h3>

                {/* Impact Statement */}
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {p.impact}
                </p>

                {/* Metric Callout Pill */}
                {p.metric && (
                  <div className="mb-5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2">
                    <Sparkles size={13} className="text-cyan-400 shrink-0" />
                    <span className="text-xs font-semibold text-white">{p.metric}</span>
                  </div>
                )}

                {/* Tech Stack Chips */}
                {p.stack && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.stack.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5 text-slate-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-emerald-400" />
                  <span>Production Ready</span>
                </span>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-white transition-colors"
                >
                  <span>Inquire Now</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
