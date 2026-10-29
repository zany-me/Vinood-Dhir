import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, ShieldCheck, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { profileData } from '../../data/profileData';
import { openWhatsApp } from '../../utils/whatsapp';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'IATF 16949 / MACE Audit Implementation',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formatted = `*NEW WEBSITE CONSULTATION RFQ*\n\n*Name:* ${formData.name}\n*Company:* ${formData.company}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Interested Service:* ${formData.service}\n*Plant Requirements / Scope:* ${formData.message}`;
    openWhatsApp(formatted);
    setFormStatus("Inquiry formatted! WhatsApp opened to send directly to Vinood Dhir.");
  };

  return (
    <section id="contact" className="py-10 sm:py-20 md:py-24 px-3 sm:px-8 bg-[#F6F3EC] border-b border-[#E7E2D6]/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Direct Advisory"
          title="Schedule a Consultation with"
          highlight="Vinood Dhir"
          subtitle="Whether you require an urgent pre-audit gap assessment, a multi-month IATF implementation roadmap, or customized shopfloor training, get in touch today."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          
          {/* Left: Contact Info & Commercial Terms (Cols 1-5) - Soft Precision Blueprint Theme */}
          <div className="lg:col-span-5 h-full flex">
            <div className="w-full relative overflow-hidden p-4 sm:p-7 rounded-xl bg-[#DEEDFA] border border-[#B8D5EE] shadow-xs flex flex-col justify-between h-full">
              
              {/* Faded Historical Background Watermark Design Behind */}
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <img
                  src="/images/historical_plant.jpg"
                  alt=""
                  className="w-full h-full object-cover grayscale opacity-[0.07]"
                />
                <div className="absolute inset-0 bg-[#DEEDFA]/50" />
              </div>

              <div className="relative z-10 flex flex-col justify-between h-full space-y-3 sm:space-y-4">
                {/* Header Strip */}
                <div className="pb-2 sm:pb-3 border-b border-[#B8D5EE]/80 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-[#1E40AF] block">
                      Direct Principal Advisory
                    </span>
                    <h3 className="text-base sm:text-lg font-black tracking-tight text-[#0A2038]">
                      Dhir Consultancy Services
                    </h3>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white border border-[#B8D5EE] text-[#1E3A5F]">
                    Ludhiana Hub
                  </span>
                </div>

                {/* Contact List (2 Columns on Mobile!) */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {/* Address */}
                  <div className="col-span-2 flex items-start gap-2 p-2 sm:p-2.5 rounded-lg bg-white/90 border border-[#B8D5EE]">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1E40AF] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0A2038] block font-bold text-[11px] sm:text-xs">Office:</strong>
                      <span className="text-slate-600 text-[10px] sm:text-[11px] leading-relaxed block">
                        {profileData.contact.address.line1}, {profileData.contact.address.line2}, {profileData.contact.address.state}
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-1.5 sm:gap-2.5 p-2 sm:p-2.5 rounded-lg bg-white/90 border border-[#B8D5EE]">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1E40AF] shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <strong className="text-[#0A2038] block font-bold text-[10px] sm:text-xs truncate">Phone:</strong>
                      <div className="mt-0.5">
                        {profileData.contact.phones.map((phone, idx) => (
                          <a
                            key={idx}
                            href={`tel:${phone.replace(/\s+/g, '')}`}
                            className="text-[10px] sm:text-[11px] font-mono font-bold text-[#1E40AF] hover:underline block truncate"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-1.5 sm:gap-2.5 p-2 sm:p-2.5 rounded-lg bg-white/90 border border-[#B8D5EE]">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1E40AF] shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <strong className="text-[#0A2038] block font-bold text-[10px] sm:text-xs truncate">Email:</strong>
                      <div className="mt-0.5">
                        {profileData.contact.emails.map((email, idx) => (
                          <a
                            key={idx}
                            href={`mailto:${email}`}
                            className="text-[10px] sm:text-[11px] font-mono text-slate-700 hover:text-[#1E40AF] hover:underline block truncate"
                          >
                            {email}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp CTA */}
                <button
                  onClick={() => openWhatsApp("Hello Mr. Vinood Dhir, I would like to arrange an in-person or virtual consultation regarding our plant's quality systems.")}
                  className="w-full py-2.5 sm:py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs hover:shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Directly on WhatsApp</span>
                </button>

                {/* Commercial Terms Notice - Compact & Soft */}
                <div className="p-2 sm:p-3 rounded-lg bg-white/85 border border-[#B8D5EE] text-[10px] sm:text-[11px] text-slate-700 leading-relaxed space-y-0.5 sm:space-y-1">
                  <span className="font-bold text-[#0A2038] block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider">
                    Commercial Protocol:
                  </span>
                  <p className="text-[9px] sm:text-[10px] text-slate-600">• Local Ludhiana: standard turnkey rates apply.</p>
                  <p className="text-[9px] sm:text-[10px] text-slate-600">• Outstation: boarding & travel at actuals.</p>
                  <p className="text-[9px] sm:text-[10px] text-slate-600">• Milestone: 60% advance, 40% on delivery.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Consultation Request Form (Cols 6-12) - Soft Sand & Warm Linen */}
          <div className="lg:col-span-7 h-full flex">
            <div className="w-full relative overflow-hidden p-3.5 sm:p-7 rounded-xl bg-[#ECE4D5] border border-[#D3C7B2] shadow-xs flex flex-col justify-between h-full">
              {/* Subtle Faded Historical Watermark in Background */}
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <img
                  src="/images/historical_lathe.jpg"
                  alt=""
                  className="w-full h-full object-cover grayscale sepia opacity-[0.06]"
                />
                <div className="absolute inset-0 bg-[#ECE4D5]/50" />
              </div>

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm sm:text-lg font-black text-industrial-950 tracking-tight">
                      Submit an Audit or Training RFQ
                    </h3>
                    <span className="text-[9px] sm:text-[10px] font-mono text-stone-600 font-semibold bg-[#FAF3E6] px-1.5 py-0.5 rounded border border-[#D3C7B2]">
                      Quick Dispatch
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-stone-600 mb-2.5 sm:mb-4 font-medium leading-tight">
                    Fill in your manufacturing plant parameters to receive an immediate structured response and roadmap.
                  </p>

                  {formStatus && (
                    <div className="mb-3 p-2.5 rounded-lg bg-emerald-100/90 border border-emerald-300 text-xs text-emerald-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>{formStatus}</span>
                    </div>
                  )}
                </div>

              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3.5">
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div>
                    <label className="text-[10px] sm:text-[11px] font-bold text-industrial-950 block mb-0.5 sm:mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Rajesh Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-[#D3C7B2] text-xs text-industrial-950 placeholder:text-stone-400 focus:outline-none focus:border-amberGold-600 bg-[#FAF3E6] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] sm:text-[11px] font-bold text-industrial-950 block mb-0.5 sm:mb-1">
                      Company / Plant *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Precision Castings"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-[#D3C7B2] text-xs text-industrial-950 placeholder:text-stone-400 focus:outline-none focus:border-amberGold-600 bg-[#FAF3E6] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div>
                    <label className="text-[10px] sm:text-[11px] font-bold text-industrial-950 block mb-0.5 sm:mb-1">
                      Phone (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-[#D3C7B2] text-xs text-industrial-950 placeholder:text-stone-400 focus:outline-none focus:border-amberGold-600 bg-[#FAF3E6] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] sm:text-[11px] font-bold text-industrial-950 block mb-0.5 sm:mb-1">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rajesh@plant.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-[#D3C7B2] text-xs text-industrial-950 placeholder:text-stone-400 focus:outline-none focus:border-amberGold-600 bg-[#FAF3E6] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold text-industrial-950 block mb-0.5 sm:mb-1">
                    Primary Area of Interest *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-[#D3C7B2] text-xs text-industrial-950 focus:outline-none focus:border-amberGold-600 bg-[#FAF3E6] focus:bg-white transition-colors"
                  >
                    <option>IATF 16949 / MACE Audit Implementation</option>
                    <option>VDA 6.3 Process Audit Preparation</option>
                    <option>CQI-27 Special Process (Casting) Audit</option>
                    <option>ISO 9001, 14001, or 45001 Certification</option>
                    <option>Corporate Training (5S, APQP, PPAP, OEE)</option>
                    <option>Technical & Engineering Staffing</option>
                    <option>Comprehensive Plant Quality Retainer</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold text-industrial-950 block mb-0.5 sm:mb-1">
                    Plant Details & Requirements
                  </label>
                  <textarea
                    rows="3"
                    placeholder="e.g. Die casting, CNC machining, upcoming customer audits, or rejection challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-2.5 py-2 sm:px-3 sm:py-2 rounded-lg border border-[#D3C7B2] text-xs text-industrial-950 placeholder:text-stone-400 focus:outline-none focus:border-amberGold-600 bg-[#FAF3E6] focus:bg-white transition-colors resize-none leading-relaxed min-h-[72px] sm:min-h-[80px]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-3 rounded-lg bg-industrial-950 hover:bg-stone-800 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <Send className="w-3.5 h-3.5 text-amberGold-400" />
                  <span>Submit RFQ / Dispatch to WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}
