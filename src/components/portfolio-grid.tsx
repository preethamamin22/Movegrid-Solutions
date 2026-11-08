'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { categories, projects } from '@/lib/data';

export function PortfolioGrid() {
  const [active, setActive] = useState('All work');
  const shown = projects.filter(
    (p) => active === 'All work' || p.tag === active
  );

  return (
    <>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10" role="group" aria-label="Filter portfolio projects">
        {categories.map((c) => (
          <button
            key={c}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              active === c
                ? 'bg-blue-600 text-white'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
            onClick={() => setActive(c)}
            aria-pressed={active === c}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shown.map((p) => (
          <article
            key={p.number}
            className="minimal-card flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 font-mono mb-4">
                <span>0{p.number}</span>
                <span className="text-slate-400 uppercase tracking-wider">{p.tag}</span>
              </div>

              <div className="text-xs font-semibold text-blue-400 mb-1">
                {p.type}
              </div>

              <h3 className="text-lg font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {p.title}
              </h3>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Concept Prototype</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 group-hover:text-white transition-colors"
              >
                <span>Discuss</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
