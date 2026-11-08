import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Service } from '@/lib/data';

export function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  const Icon = service.icon;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="minimal-card flex flex-col justify-between group"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-colors">
            <Icon size={20} strokeWidth={1.8} />
          </div>
          <span className="text-xs font-mono text-slate-600 font-semibold">
            0{index + 1}
          </span>
        </div>

        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
          {service.category}
        </span>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          {service.short}
        </p>
      </div>

      <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-white transition-colors pt-4 border-t border-white/5">
        <span>Learn More</span>
        <ArrowUpRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </Link>
  );
}
