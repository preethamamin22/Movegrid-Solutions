'use client';

import { useState } from 'react';
import { MessageCircle, Zap, ShieldCheck, Clock, Users } from 'lucide-react';

export function DarkStoreCalculator() {
  const [stores, setStores] = useState(4);
  const [ridersPerStore, setRidersPerStore] = useState(25);
  const [city, setCity] = useState('Bengaluru');
  const [shiftType, setShiftType] = useState('Full Shift (10h)');

  const totalRiders = stores * ridersPerStore;

  const estimatedDays =
    totalRiders <= 30
      ? '24 to 48 Hours'
      : totalRiders <= 100
      ? '2 to 3 Business Days'
      : totalRiders <= 250
      ? '3 to 5 Business Days'
      : '5 to 7 Days (Staggered Batches)';

  const whatsappMessage = encodeURIComponent(
    `*Dark Store Fleet Inquiry — Movegrid Solutions*\n` +
    `• Number of Dark Stores: ${stores}\n` +
    `• Riders per Store: ${ridersPerStore}\n` +
    `• Total Target Fleet: ${totalRiders} Delivery Partners\n` +
    `• Primary City / Cluster: ${city}\n` +
    `• Shift Model: ${shiftType}\n\n` +
    `We would like to discuss deployment timelines, KYC verification workflows, and partner onboarding rates.`
  );

  return (
    <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#0B1528] to-[#070D1A] border border-cyan-500/20 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
            <Zap size={14} />
            <span>Interactive Fleet Estimator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Plan Dark Store Fleet Mobilization
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Estimate headcount, turnaround timeline, and KYC SLAs for your micro-fulfillment hubs.
          </p>
        </div>

        <div className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-right">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Target Fleet</div>
          <div className="text-2xl font-black text-cyan-300 font-mono">{totalRiders} Riders</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Controls */}
        <div className="space-y-5">
          {/* Slider 1: Dark Stores */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
              <span>Number of Dark Stores / Hubs</span>
              <span className="text-cyan-400 font-mono font-bold">{stores} Hubs</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={stores}
              onChange={(e) => setStores(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
              <span>1 Hub</span>
              <span>10 Hubs</span>
              <span>20+ Hubs</span>
            </div>
          </div>

          {/* Slider 2: Riders per Store */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
              <span>Riders per Dark Store</span>
              <span className="text-cyan-400 font-mono font-bold">{ridersPerStore} Riders / Hub</span>
            </div>
            <input
              type="range"
              min="10"
              max="60"
              step="5"
              value={ridersPerStore}
              onChange={(e) => setRidersPerStore(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
              <span>10 (Lean)</span>
              <span>25 (Standard 10-Min)</span>
              <span>60 (High Volume)</span>
            </div>
          </div>

          {/* City Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              Primary City / Cluster
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="minimal-input bg-[#0D1322] text-xs !py-2.5"
            >
              <option value="Bengaluru">Bengaluru (HSR, Koramangala, Indiranagar, Whitefield, etc.)</option>
              <option value="Delhi NCR">Delhi NCR (Gurugram, Noida, South/West Delhi)</option>
              <option value="Mumbai & MMR">Mumbai &amp; MMR (Andheri, Bandra, Thane, Navi Mumbai)</option>
              <option value="Hyderabad">Hyderabad (Hitec City, Gachibowli, Madhapur, Kukatpally)</option>
              <option value="Pune">Pune (Kothrud, Viman Nagar, Hinjewadi, Wakad)</option>
              <option value="Chennai">Chennai (Adyar, Velachery, Anna Nagar, OMR)</option>
              <option value="Kolkata">Kolkata (Salt Lake, New Town, South Kolkata)</option>
              <option value="Tier-2 Cities">Tier-2 Cities (Jaipur, Lucknow, Ahmedabad, Chandigarh, etc.)</option>
            </select>
          </div>

          {/* Shift Type */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              Operational Shift Structure
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Full Shift (10h)', 'Peak Evening Surge', 'Split Shift (Morning + Night)', '24/7 Rotational'].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setShiftType(s)}
                  className={`text-xs p-2 rounded-lg border text-left transition-all ${
                    shiftType === s
                      ? 'bg-blue-600/20 border-blue-400 text-white font-semibold'
                      : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live SLA & Deployment Output */}
        <div className="p-5 rounded-xl bg-black/40 border border-white/5 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 pb-2 border-b border-white/10 flex items-center justify-between">
              <span>Mobilization Projection</span>
              <span className="text-emerald-400 font-bold">100% KYC Verified</span>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <div className="text-xs text-slate-400 mb-0.5">Estimated Mobilization Timeline</div>
                <div className="text-lg font-bold text-white flex items-center gap-2">
                  <Clock size={16} className="text-cyan-400" />
                  <span>{estimatedDays}</span>
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-400 mb-0.5">Verification &amp; Compliance Handover</div>
                <div className="text-xs text-slate-200 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                  <span>Aadhaar, DL, PAN, Vehicle RC, Bank Account validation &amp; BGV dossier.</span>
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-400 mb-0.5">On-Ground Support Included</div>
                <div className="text-xs text-slate-200 flex items-center gap-2">
                  <Users size={16} className="text-blue-400 shrink-0" />
                  <span>Dedicated hub coordinator for Day-1 attendance, app login &amp; bag dispatch.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-2.5">
            <a
              href={`https://wa.me/918296748983?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full justify-center !py-3 !text-xs !bg-emerald-600 hover:!bg-emerald-500 !border-emerald-500/40"
            >
              <MessageCircle size={15} />
              <span>Get Instant Fleet Proposal on WhatsApp</span>
            </a>

            <div className="text-center">
              <span className="text-[11px] text-slate-500">
                Direct Line to Fleet Procurement: <strong className="text-slate-300">+91 82967 48983</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
