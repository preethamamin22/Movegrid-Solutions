import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  MessageCircle,
  Mail,
  ShieldCheck,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import { services } from '@/lib/data';
import { serviceDetailsMap } from '@/lib/service-details-data';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return { title: 'Service Not Found' };

  return {
    title: `${s.title} — Movegrid Solutions`,
    description: `${s.short} Explore professional ${s.title.toLowerCase()} services from Movegrid Solutions. Dedicated execution for startups, SMEs and enterprises.`,
    openGraph: {
      title: `${s.title} | Movegrid Solutions`,
      description: s.description,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return notFound();

  const details = serviceDetailsMap[slug];
  const Icon = s.icon;
  const related = services.filter((x) => x.slug !== slug).slice(0, 3);

  const isDigital = s.category.includes('Digital');
  const isOps = s.category.includes('Operations');

  const accentColor = isDigital
    ? 'text-blue-400 bg-blue-500/10 border-blue-500/20'
    : isOps
    ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
    : 'text-purple-400 bg-purple-500/10 border-purple-500/20';

  return (
    <>
      {/* ── Page Hero ────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden">
        <div className="ambient-glow-top" aria-hidden="true" />
        <div className="ambient-grid" aria-hidden="true" />

        <div className="container relative z-10 max-w-4xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            <span>Back to All Services</span>
          </Link>

          <div className="consuma-pill">
            <span className="consuma-pill-dot" />
            <span>{s.category.toUpperCase()}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            {s.title}<br />
            <span className="text-cyan-gradient">Engineered for Velocity.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
            {s.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-framer-primary !py-3 !px-6 text-sm">
              <span>Inquire About {s.title}</span>
              <ArrowUpRight size={15} />
            </Link>

            <a
              href={`https://wa.me/918296748983?text=Hi%20Movegrid%2C%20I%20am%20interested%20in%20${encodeURIComponent(s.title)}`}
              target="_blank"
              rel="noreferrer"
              className="btn-framer-secondary !py-3 !px-6 text-sm text-[#25D366] hover:text-[#25D366]"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Quick Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Detail Content Grid ──────────────────────────────── */}
      <section className="section-pad border-t border-white/5 bg-[#030712]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Header Box */}
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-[#080E1E] border border-white/10">
                <span className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${accentColor} shrink-0`}>
                  <Icon size={28} />
                </span>
                <div>
                  <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-500">
                    DIVISION / {s.category}
                  </div>
                  <h2 className="text-2xl font-bold text-white mt-0.5">
                    Scope &amp; Core Deliverables
                  </h2>
                </div>
              </div>

              <p className="text-slate-400 text-base leading-relaxed">
                At Movegrid Solutions, our <strong>{s.title}</strong> practice is structured to address both immediate operational requirements and long-term business scalability. We combine dedicated domain specialists with structured reporting to ensure full transparency and measurable ROI at every stage.
              </p>

              {/* Deliverables List */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">
                  Key Service Deliverables:
                </h3>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-[#080E1E] border border-white/5 text-sm text-slate-300"
                    >
                      <CheckCircle size={18} className="text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits Cards */}
              {details?.benefits && (
                <div>
                  <div className="consuma-pill !mb-3">
                    <span className="consuma-pill-dot" />
                    <span>COMMERCIAL ADVANTAGES</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Why Partner with Movegrid for {s.title}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {details.benefits.map((b, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-[#080E1E] border border-white/10"
                      >
                        <Sparkles size={18} className="text-sky-400 mb-3" />
                        <h4 className="text-sm font-bold text-white mb-1.5">
                          {b.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {b.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Process Steps */}
              {details?.process && (
                <div>
                  <div className="consuma-pill !mb-3">
                    <span className="consuma-pill-dot" />
                    <span>OUR ROADMAP</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Execution Methodology
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {details.process.map((step) => (
                      <div
                        key={step.step}
                        className="p-5 rounded-xl bg-[#080E1E] border border-white/10"
                      >
                        <span className="text-2xl font-extrabold text-white/10 block mb-2 font-mono">
                          {step.step}
                        </span>
                        <h4 className="text-sm font-bold text-white mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Frequently Asked Questions */}
              {details?.faqs && (
                <div>
                  <div className="consuma-pill !mb-3">
                    <span className="consuma-pill-dot" />
                    <span>FREQUENTLY ASKED QUESTIONS</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Questions Regarding {s.title}
                  </h3>

                  <div className="space-y-3">
                    {details.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-[#080E1E] border border-white/10"
                      >
                        <h4 className="flex items-start gap-2.5 text-sm font-semibold text-white mb-2">
                          <HelpCircle size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span>{faq.q}</span>
                        </h4>
                        <p className="text-xs text-slate-400 pl-6 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quality Guarantee Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 to-[#080E1E] border border-blue-500/20">
                <div className="flex items-center gap-2 text-sm font-bold text-sky-400 uppercase tracking-wider mb-2">
                  <ShieldCheck size={18} />
                  <span>The Movegrid Quality Guarantee</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every client engagement includes an assigned project coordinator, transparent milestone reporting, weekly status reviews, and clearly documented SLAs to ensure dependable, high-velocity execution.
                </p>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="p-7 rounded-2xl bg-[#080E1E] border border-white/10 space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Start Your {s.title} Project
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Connect with our solutions director for an actionable scope review and tailored commercial proposal.
                </p>

                <div className="pt-2 space-y-2.5">
                  <Link
                    href="/contact"
                    className="btn-framer-primary w-full justify-center !py-3 text-xs"
                  >
                    <span>Request Proposal</span>
                    <ArrowUpRight size={14} />
                  </Link>

                  <a
                    href={`https://wa.me/918296748983?text=Hi%20Movegrid%2C%20I%20want%20to%20discuss%20${encodeURIComponent(s.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-framer-secondary w-full justify-center !py-3 text-xs text-[#25D366] hover:text-[#25D366]"
                  >
                    <MessageCircle size={15} />
                    <span>WhatsApp: +91 82967 48983</span>
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#080E1E] border border-white/10 space-y-3">
                <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-500">
                  Direct Verification
                </div>
                <a
                  href="mailto:preetham@movegridsolutions.com"
                  className="flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <Mail size={14} className="text-sky-400" />
                  <span className="truncate">preetham@movegridsolutions.com</span>
                </a>
                <div className="text-[11px] text-slate-500 pt-1">
                  Response SLA: Under 24 Business Hours
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Related Services ─────────────────────────────────── */}
      <section className="section-pad border-t border-white/5 bg-[#020612]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="consuma-pill">
              <span className="consuma-pill-dot" />
              <span>COMPLEMENTARY CAPABILITIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Explore More Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="p-5 rounded-xl bg-[#080E1E] border border-white/10 hover:border-white/25 flex items-center justify-between text-sm font-semibold text-white transition-all group"
              >
                <span>{item.title}</span>
                <ArrowUpRight size={15} className="text-slate-500 group-hover:text-white transition-colors" />
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-white transition-colors"
            >
              <span>View All 6 Services</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
