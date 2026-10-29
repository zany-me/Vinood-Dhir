import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Clock, FileText, ArrowRight, MessageSquare, LayoutGrid, Table } from 'lucide-react';
import { auditsData } from '../../data/auditsData';
import SectionHeading from '../ui/SectionHeading';
import { openWhatsApp, buildAuditInquiry } from '../../utils/whatsapp';

export default function AuditMatrix() {
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'table'
  const [activeCategory, setActiveCategory] = useState(auditsData.categories[0].id);

  const currentCategory = auditsData.categories.find(c => c.id === activeCategory) || auditsData.categories[0];

  const comparisons = [
    {
      name: "IATF 16949:2016",
      mandate: "Global Automotive Tier-1/Tier-2 Mandatory",
      governingBody: "IATF / OEM CSRs",
      timeline: "4 – 6 Months",
      deliverables: "Full QMS manual, 18 PPAP elements, CSR alignment, Stage 1 & 2 audit escort",
      investment: "₹1,25,000 – ₹1,70,000",
      bestFor: "Automotive component suppliers to Hero, Maruti, Tata, Mahindra & Global OEMs"
    },
    {
      name: "Maruti MACE Audit",
      mandate: "Maruti Suzuki Tier-1 & Tier-2 Mandatory",
      governingBody: "Maruti Centre for Excellence",
      timeline: "4 Months Retainer",
      deliverables: "MACE Green audit sheet scoring, 5S zoning, Poka-Yoke deployment, daily DWM",
      investment: "₹80,000 (₹20,000/mo) / ₹1,70,000 full",
      bestFor: "Vendors seeking Green status & continuous vendor rating enhancement with Maruti"
    },
    {
      name: "VDA 6.3 Process Audit",
      mandate: "European Automotive OEMs (VW, BMW, Valeo)",
      governingBody: "VDA QMC (Germany)",
      timeline: "3 Months Retainer",
      deliverables: "Potential analysis (P1-P7), risk downgrading mitigation, process capability Cp/Cpk",
      investment: "₹60,000 – ₹1,70,000",
      bestFor: "Exporters & Tier-1 suppliers to European auto giants and global Tier-1s"
    },
    {
      name: "CQI-27 Special Process",
      mandate: "Aluminium & Zinc Die Casting Plants",
      governingBody: "AIAG (Automotive Industry Action Group)",
      timeline: "4 Days – 2 Months",
      deliverables: "Melt degassing audit, pyrometer/thermal logs, die PM registers, porosity containment",
      investment: "₹60,000 Intensive",
      bestFor: "HPDC, GDC & Sand casting foundries supplying structural & engine components"
    },
    {
      name: "ISO 9001 / 14001 / 45001",
      mandate: "All Engineering & Manufacturing Plants",
      governingBody: "International Organization for Standardization",
      timeline: "2 – 4 Months",
      deliverables: "Quality manual, Aspect-Impact, HIRA safety register, SOPs, internal audit & MRM",
      investment: "₹50,000 – ₹1,00,000 per standard",
      bestFor: "Engineering companies requiring baseline quality, safety, and environmental compliance"
    }
  ];

  return (
    <section id="audits" className="py-10 sm:py-20 md:py-24 px-3 sm:px-8 border-b border-[#E7E2D6]/80 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Audit & Certification Standards"
          title="End-to-End Implementation &"
          highlight="Audit Readiness"
          subtitle="From initial Gap Analysis to Stage 1 & Stage 2 audits, our hands-on methodology guarantees documentation rigor, employee compliance, and successful certification."
        />

        {/* View Mode & Category Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-12">
          {/* Category Tabs (Active in 'cards' mode) */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
            {auditsData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setViewMode('cards');
                }}
                className={`px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-subtle-tracked transition-all duration-200 ${
                  viewMode === 'cards' && activeCategory === cat.id
                    ? 'bg-[#181816] text-[#FAF8F5] shadow-sm'
                    : 'bg-[#ECE4D5] text-stone-800 hover:bg-[#E4D9C7] border border-[#D3C7B2]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Toggle between Card View and Side-by-Side Matrix */}
          <div className="bg-[#ECE4D5] p-1 rounded-full flex items-center border border-[#D3C7B2] shrink-0 shadow-2xs">
            <button
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-1 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all ${
                viewMode === 'cards'
                  ? 'bg-industrial-950 text-white shadow-xs'
                  : 'text-stone-700 hover:text-industrial-950'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Cards</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-1 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all ${
                viewMode === 'table'
                  ? 'bg-industrial-950 text-white shadow-xs'
                  : 'text-stone-700 hover:text-industrial-950'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>Matrix Table</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: Cards Grid (2 Columns on Mobile, Reduced Height) */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-2 gap-2 sm:gap-6 md:gap-8 animate-in fade-in duration-200">
            {currentCategory.standards.map((std, idx) => (
              <div
                key={idx}
                className="p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl bg-[#ECE4D5] border border-[#D3C7B2] shadow-2xs sm:shadow-md hover:bg-[#E6DDCF] hover:border-amberGold-500 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Standard Code & Duration */}
                  <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2 sm:mb-4">
                    <span className="px-2 py-0.5 sm:px-3.5 sm:py-1.5 rounded-md sm:rounded-lg bg-industrial-950 text-amberGold-400 font-black text-[10px] sm:text-xs font-mono tracking-wider shadow-xs border border-industrial-800">
                      {std.code}
                    </span>
                    {(std.durationMonths || std.durationDays) && (
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-stone-800 font-bold">
                        <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amberGold-700" />
                        <span>{std.durationMonths || std.durationDays}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-xs sm:text-xl font-black text-industrial-950 mb-1.5 sm:mb-3 tracking-tight leading-snug line-clamp-2 sm:line-clamp-none">
                    {std.title}
                  </h3>

                  <p className="text-[11px] sm:text-sm text-stone-700 leading-relaxed mb-2 sm:mb-6 font-medium line-clamp-2 sm:line-clamp-none">
                    {std.description}
                  </p>

                  {/* Deliverables Checklist (Compact on mobile) */}
                  {std.deliverables && (
                    <div className="space-y-1 sm:space-y-2 mb-2 sm:mb-6 pt-2 sm:pt-5 border-t border-[#D6CAB4]/70">
                      <span className="text-[9px] sm:text-[11px] font-bold text-industrial-900 uppercase tracking-tracked block">
                        Deliverables:
                      </span>
                      <div className="grid grid-cols-1 gap-1 text-[10px] sm:text-xs text-stone-700">
                        {std.deliverables.slice(0, 2).map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Action & Cost Summary */}
                <div className="pt-2 sm:pt-6 border-t border-[#D6CAB4]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    {std.costWithDoc ? (
                      <div className="text-[10px] sm:text-xs">
                        <span className="text-stone-500 block text-[9px] uppercase font-bold tracking-wider">Fee:</span>
                        <span className="font-extrabold text-industrial-950 text-xs sm:text-base font-mono">
                          ₹{std.costWithDoc.toLocaleString('en-IN')}
                        </span>
                      </div>
                    ) : std.costTotal ? (
                      <div className="text-[10px] sm:text-xs">
                        <span className="text-stone-500 block text-[9px] uppercase font-bold tracking-wider">Fee:</span>
                        <span className="font-extrabold text-industrial-950 text-xs sm:text-base font-mono">₹{std.costTotal.toLocaleString('en-IN')}</span>
                      </div>
                    ) : (
                      <span className="text-[10px] sm:text-xs text-stone-600 font-semibold">Custom Retainer</span>
                    )}
                  </div>

                  <button
                    onClick={() => openWhatsApp(buildAuditInquiry(std))}
                    className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 sm:px-5 sm:py-3 rounded-lg sm:rounded-full bg-industrial-950 hover:bg-stone-800 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs"
                  >
                    <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                    <span>Inquire</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW 2: Side-by-Side Matrix Table */}
        {viewMode === 'table' && (
          <div className="animate-in fade-in duration-200">
            <div className="overflow-x-auto rounded-3xl border border-slate-200/90 shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#181816] text-[#FAF8F5]">
                    <th className="py-5 px-6 font-serif font-bold text-sm tracking-wide">Audit Standard</th>
                    <th className="py-5 px-6 font-sans font-bold text-xs uppercase tracking-wider text-[#C5A059]">Mandate & Industry</th>
                    <th className="py-5 px-6 font-sans font-bold text-xs uppercase tracking-wider">Governing Body</th>
                    <th className="py-5 px-6 font-sans font-bold text-xs uppercase tracking-wider">Timeline</th>
                    <th className="py-5 px-6 font-sans font-bold text-xs uppercase tracking-wider">Estimated Fee</th>
                    <th className="py-5 px-6 font-sans font-bold text-xs uppercase tracking-wider text-right">Inquiry</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80 bg-white">
                  {comparisons.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#F6F3EC]/50 transition-colors">
                      <td className="py-5 px-6 font-bold text-industrial-950 align-top">
                        <span className="text-base font-serif block text-[#181816]">{item.name}</span>
                        <span className="text-[11px] font-normal text-slate-500 mt-1 block max-w-xs">{item.bestFor}</span>
                      </td>
                      <td className="py-5 px-6 align-top">
                        <span className="font-semibold text-slate-800 block">{item.mandate}</span>
                        <span className="text-[11px] text-slate-500 mt-1 block">{item.deliverables}</span>
                      </td>
                      <td className="py-5 px-6 font-medium text-slate-700 align-top whitespace-nowrap">
                        {item.governingBody}
                      </td>
                      <td className="py-5 px-6 align-top whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700">
                          <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                          {item.timeline}
                        </span>
                      </td>
                      <td className="py-5 px-6 align-top whitespace-nowrap">
                        <span className="font-extrabold text-[#181816] block">{item.investment}</span>
                        <span className="text-[10px] text-slate-400">Exclusive of CB fee</span>
                      </td>
                      <td className="py-5 px-6 text-right align-top whitespace-nowrap">
                        <button
                          onClick={() => openWhatsApp(`Hello Mr. Vinood Dhir, I would like to consult with you regarding *${item.name}* implementation for our manufacturing plant.`)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#181816] hover:bg-[#2A2C27] text-white text-xs font-bold uppercase tracking-wider transition-all"
                        >
                          <MessageSquare className="w-3 h-3 text-emerald-400" />
                          <span>Consult</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-[#F6F3EC] border border-[#E7E2D6] text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>All implementations include on-site gap assessment, personnel coaching, and audit stage 1 & 2 defense.</span>
              </div>
              <span className="text-[11px] text-[#787A71] font-semibold">
                60% Mobilization Advance • 40% Milestone Delivery
              </span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
