import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import type { Service } from '@/lib/data';

export function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  const Icon = service.icon;
  const isDigital = service.category.includes('Digital');
  const isOps = service.category.includes('Operations');

  const iconStyles = isDigital
    ? 'bg-blue-500/10 border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20 group-hover:border-blue-400/50'
    : isOps
    ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50'
    : 'bg-purple-500/10 border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 group-hover:border-purple-400/50';

  const cardHoverBorder = isDigital
    ? 'group-hover:border-blue-500/40 group-hover:shadow-[0_12px_32px_-8px_rgba(37,99,235,0.2)]'
    : isOps
    ? 'group-hover:border-cyan-500/40 group-hover:shadow-[0_12px_32px_-8px_rgba(6,182,212,0.2)]'
    : 'group-hover:border-purple-500/40 group-hover:shadow-[0_12px_32px_-8px_rgba(168,85,247,0.2)]';

  const linkColor = isDigital
    ? 'text-blue-400'
    : isOps
    ? 'text-cyan-400'
    : 'text-purple-400';

  return (
    <Link
      href={`/services/${service.slug}`}
      className={`p-6 rounded-2xl bg-gradient-to-b from-[#0D1424] to-[#070B14] border border-white/8 transition-all duration-300 flex flex-col justify-between group ${cardHoverBorder}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-300 ${iconStyles}`}>
            <Icon size={20} strokeWidth={1.8} />
          </div>
          <span className="text-xs font-mono text-slate-500 font-semibold">
            0{index + 1}
          </span>
        </div>

        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
          {service.category}
        </span>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">
          {service.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
          {service.short}
        </p>

        {/* Deliverables snippet */}
        <div className="space-y-1.5 mb-6">
          {service.items.slice(0, 3).map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
              <Check size={12} className={linkColor} />
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={`flex items-center gap-1.5 text-xs font-semibold ${linkColor} group-hover:text-white transition-colors pt-4 border-t border-white/5`}>
        <span>Explore Deliverables &amp; Process</span>
        <ArrowUpRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </Link>
  );
}
