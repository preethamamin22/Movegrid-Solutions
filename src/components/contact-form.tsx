'use client';

import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, MessageCircle, Mail } from 'lucide-react';
import { services } from '@/lib/data';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    details: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEmailSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const form = document.querySelector<HTMLFormElement>('#enquiry-form');
    if (!form?.reportValidity()) return;

    const subject = encodeURIComponent(
      `Movegrid Solutions Inquiry — ${formData.service || 'General'}`
    );
    const body = encodeURIComponent(
      `Hello Movegrid Team,\n\n` +
        `Name: ${formData.name}\n` +
        `Company: ${formData.company || 'Not specified'}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || 'Not specified'}\n` +
        `Service Interested In: ${formData.service}\n\n` +
        `Project / Scope Details:\n${formData.details}\n\n` +
        `Submitted via movegridsolutions.com`
    );

    window.location.href = `mailto:preetham@movegridsolutions.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const form = document.querySelector<HTMLFormElement>('#enquiry-form');
    if (!form?.reportValidity()) return;

    const text = encodeURIComponent(
      `*New Project Inquiry — Movegrid Solutions*\n` +
        `*Name:* ${formData.name}\n` +
        `*Company:* ${formData.company || 'N/A'}\n` +
        `*Service:* ${formData.service}\n` +
        `*Email:* ${formData.email}\n` +
        `*Details:* ${formData.details}`
    );

    window.open(`https://wa.me/918296748983?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <form
      id="enquiry-form"
      className="space-y-4"
      onSubmit={handleEmailSend}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Full Name <span className="text-blue-400">*</span>
          </label>
          <input
            name="name"
            autoComplete="name"
            placeholder="Rahul Sharma"
            required
            minLength={2}
            value={formData.name}
            onChange={handleChange}
            className="minimal-input"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Company Name
          </label>
          <input
            name="company"
            autoComplete="organization"
            placeholder="Acme Corp"
            value={formData.company}
            onChange={handleChange}
            className="minimal-input"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Work Email <span className="text-blue-400">*</span>
          </label>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            required
            value={formData.email}
            onChange={handleChange}
            className="minimal-input"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Phone / WhatsApp
          </label>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            pattern="[+0-9() .-]{7,20}"
            title="Enter a valid phone number"
            value={formData.phone}
            onChange={handleChange}
            className="minimal-input"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5">
          Service Interested In <span className="text-blue-400">*</span>
        </label>
        <select
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="minimal-input bg-[#0D1322]"
        >
          <option value="" disabled className="text-slate-500">
            Select a service capability
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title} className="bg-[#0D1322] text-white">
              {s.title} ({s.category})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5">
          Project Details <span className="text-blue-400">*</span>
        </label>
        <textarea
          name="details"
          rows={4}
          minLength={10}
          required
          placeholder="Tell us about your project, timeline, or operational goals…"
          value={formData.details}
          onChange={handleChange}
          className="minimal-input resize-y"
        />
      </div>

      {submitted && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
          <CheckCircle2 size={16} className="shrink-0" />
          <span>Opening your chosen communication channel…</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
        <button
          type="submit"
          className="btn-primary w-full sm:w-auto justify-center !py-2.5 !px-6"
        >
          <Mail size={15} />
          <span>Send via Email</span>
          <ArrowUpRight size={14} />
        </button>

        <button
          type="button"
          onClick={handleWhatsAppSend}
          className="btn-secondary w-full sm:w-auto justify-center !py-2.5 !px-6 text-[#25D366]"
        >
          <MessageCircle size={15} />
          <span>Send via WhatsApp</span>
          <ArrowUpRight size={14} />
        </button>
      </div>

      <p className="text-[11px] text-slate-500 pt-2 border-t border-white/5">
        Direct routing to <strong>preetham@movegridsolutions.com</strong> and WhatsApp <strong>+91 82967 48983</strong>.
      </p>
    </form>
  );
}
