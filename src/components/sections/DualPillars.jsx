import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  Layers, 
  Gauge, 
  ChevronRight,
  TrendingUp,
  Crosshair
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

export default function DualPillars() {
  const [activeEngine, setActiveEngine] = useState('both'); // '01', '02', 'both'

  return (
    <section id="dual-engine" className="relative py-10 sm:py-16 sm:pb-28 px-3.5 sm:px-8 border-b border-[#E7E2D6]/80 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-amberGold-100/70 border border-amberGold-200/80 mb-3 sm:mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amberGold-600 animate-ping" />
            <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-tracked text-amberGold-900">
              Dual Engine Architecture
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-industrial-950 tracking-tight leading-[1.15]">
            Two Unified Systems.{' '}
            <span className="font-serif italic font-normal text-amberGold-700 block sm:inline">
              Zero Operational Gaps.
            </span>
          </h2>

          <p className="mt-2.5 sm:mt-5 text-xs sm:text-base md:text-lg text-stone-600 leading-relaxed font-normal max-w-2xl mx-auto">
            World-class manufacturing requires both rigid audit-proof governance and skilled, shopfloor-disciplined engineers. We deploy both simultaneously.
          </p>
        </div>

        {/* Dual Engine Split Display - Borderless Modern Layout */}
        <div className="relative">
          
          {/* Subtle Central Architectural Axis (Hidden on mobile) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-stone-200/20 via-stone-300/80 to-stone-200/20 -translate-x-1/2 pointer-events-none">
            <div className="sticky top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-50/95 backdrop-blur-md border border-amberGold-300 shadow-xs flex items-center justify-center text-stone-400">
              <Crosshair className="w-4 h-4 text-amberGold-600 animate-spin-slow" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            
            {/* ========================================================
                ENGINE 01: Turnkey QMS Systems & OEM Audit Defense
               ======================================================== */}
            <div className="relative group transition-all duration-300">
              
              {/* Massive Watermark Numeral in Vibrant Amber Gold */}
              <div className="absolute -top-8 -left-2 sm:-top-12 sm:-left-4 text-7xl sm:text-[11rem] font-serif font-black text-amber-500/35 sm:text-amber-500/45 select-none pointer-events-none group-hover:text-amber-500/70 transition-colors duration-500">
                01
              </div>

              <div className="relative z-10 pt-2 sm:pt-4">
                {/* Engine Metadata Badge */}
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-5">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-industrial-950 text-amberGold-400 text-[10px] sm:text-xs font-mono tracking-wider uppercase font-extrabold shadow-xs">
                    Engine 01
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-stone-800 font-bold tracking-wider uppercase">
                    Audit Defense & QMS Advisory
                  </span>
                </div>

                {/* Editorial Title */}
                <h3 className="text-xl sm:text-3xl font-black text-industrial-950 tracking-tight mb-2 sm:mb-4 leading-snug">
                  Turnkey QMS Systems & <br className="hidden sm:inline" />
                  <span className="font-serif italic font-normal text-amberGold-900">
                    OEM Audit Readiness
                  </span>
                </h3>

                <p className="text-xs sm:text-base text-stone-900 font-medium leading-relaxed mb-4 sm:mb-8">
                  End-to-end consulting, shopfloor restructuring, and defense for tier-1 automotive and global export certifications.
                </p>

                {/* Interactive Capability Strips - 2 Columns on Phone */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-10">
                  
                  {/* Item 1 */}
                  <div className="p-2.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F7EAC7] border border-[#DFC996] border-l-2 sm:border-l-4 border-l-amberGold-600 shadow-xs hover:bg-[#F3E2B6] transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                        <span className="text-[11px] sm:text-sm font-mono font-extrabold text-industrial-950 uppercase tracking-wide leading-tight">
                          Tier-1 Auto
                        </span>
                        <span className="text-[8px] sm:text-[10px] font-mono text-amberGold-950 font-bold px-1.5 py-0.5 rounded bg-amberGold-200/90 border border-amberGold-400 shrink-0 self-start">
                          IATF 16949
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-stone-900 font-medium leading-relaxed line-clamp-3 sm:line-clamp-none">
                        Rigorous gap analysis, daily management (DWM), Poka-Yoke error-proofing, and on-site audit escort.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="p-2.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F5E7C4] border border-[#DFC996] border-l-2 sm:border-l-4 border-l-stone-600 shadow-xs hover:border-l-amberGold-600 hover:bg-[#F3E2B6] transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                        <span className="text-[11px] sm:text-sm font-mono font-extrabold text-industrial-950 uppercase tracking-wide leading-tight">
                          Special Process
                        </span>
                        <span className="text-[8px] sm:text-[10px] font-mono text-stone-900 font-bold px-1.5 py-0.5 rounded bg-stone-300/80 border border-stone-400 shrink-0 self-start">
                          AIAG CQI-27
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-stone-900 font-medium leading-relaxed line-clamp-3 sm:line-clamp-none">
                        HPDC & GDC Aluminium / Zinc casting validation, degassing, thermal profiling, and VDA 6.3 alignment.
                      </p>
                    </div>
                  </div>

                  {/* Item 3 - Spans 2 cols on mobile for balance */}
                  <div className="col-span-2 p-2.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F5E7C4] border border-[#DFC996] border-l-2 sm:border-l-4 border-l-stone-600 shadow-xs hover:border-l-amberGold-600 hover:bg-[#F3E2B6] transition-all">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] sm:text-sm font-mono font-extrabold text-industrial-950 uppercase tracking-wide">
                        29 Practical Industrial Courses
                      </span>
                      <span className="text-[8px] sm:text-[10px] font-mono text-emerald-950 font-bold px-1.5 py-0.5 rounded bg-emerald-200/90 border border-emerald-400 shrink-0">
                        APQP • PPAP • 5S
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-stone-900 font-medium leading-relaxed">
                      Hands-on curriculum conducted directly on the factory floor to eliminate recurring defects, improve OEE, and reduce COPQ.
                    </p>
                  </div>

                </div>

                {/* Engine Readout Footer with Enhanced Dark Numbers */}
                <div className="pt-3 sm:pt-6 border-t border-stone-300 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3 sm:gap-6">
                    <div>
                      <div className="text-lg sm:text-2.5xl font-black font-serif text-industrial-950 tracking-tight">100%</div>
                      <div className="text-[9px] sm:text-[10px] font-mono text-stone-700 font-extrabold uppercase tracking-wider">Pass Rate</div>
                    </div>
                    <div className="w-[1.5px] h-6 sm:h-8 bg-stone-300" />
                    <div>
                      <div className="text-lg sm:text-2.5xl font-black font-serif text-industrial-950 tracking-tight">1–6 Mo</div>
                      <div className="text-[9px] sm:text-[10px] font-mono text-stone-700 font-extrabold uppercase tracking-wider">Retainer</div>
                    </div>
                  </div>

                  <a
                    href="#audits"
                    className="inline-flex items-center gap-1 sm:gap-2 text-[11px] sm:text-xs font-extrabold text-industrial-950 hover:text-amberGold-800 uppercase tracking-subtle-tracked transition-all duration-200 group/link"
                  >
                    <span>Standards</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            </div>

            {/* ========================================================
                ENGINE 02: Specialized Technical & Engineering Staffing
               ======================================================== */}
            <div className="relative group transition-all duration-300">
              
              {/* Massive Watermark Numeral in Vibrant Cobalt Blue */}
              <div className="absolute -top-8 -left-2 sm:-top-12 sm:-left-4 text-7xl sm:text-[11rem] font-serif font-black text-blue-500/35 sm:text-blue-500/45 select-none pointer-events-none group-hover:text-blue-500/70 transition-colors duration-500">
                02
              </div>

              <div className="relative z-10 pt-2 sm:pt-4">
                {/* Engine Metadata Badge */}
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-5">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-industrial-950 text-blue-400 text-[10px] sm:text-xs font-mono tracking-wider uppercase font-extrabold shadow-xs">
                    Engine 02
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-stone-800 font-bold tracking-wider uppercase">
                    Technical Talent Matrix
                  </span>
                </div>

                {/* Editorial Title */}
                <h3 className="text-xl sm:text-3xl font-black text-industrial-950 tracking-tight mb-2 sm:mb-4 leading-snug">
                  Specialized Technical & <br className="hidden sm:inline" />
                  <span className="font-serif italic font-normal text-cobalt-800">
                    Engineering Staffing
                  </span>
                </h3>

                <p className="text-xs sm:text-base text-stone-900 font-medium leading-relaxed mb-4 sm:mb-8">
                  Connecting North India's engineering plants with pre-vetted manufacturing specialists who already know drawing interpretation and CMM measurement.
                </p>

                {/* Interactive Capability Strips - 2 Columns on Phone */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-10">
                  
                  {/* Item 1 */}
                  <div className="p-2.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#DEEDFA] border border-[#B8D7F2] border-l-2 sm:border-l-4 border-l-cobalt-600 shadow-xs hover:bg-[#D2E6F7] transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                        <span className="text-[11px] sm:text-sm font-mono font-extrabold text-industrial-950 uppercase tracking-wide leading-tight">
                          Quality (QA/QC)
                        </span>
                        <span className="text-[8px] sm:text-[10px] font-mono text-cobalt-950 font-bold px-1.5 py-0.5 rounded bg-cobalt-200/90 border border-cobalt-400 shrink-0 self-start">
                          VETTED
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-stone-900 font-medium leading-relaxed line-clamp-3 sm:line-clamp-none">
                        Quality Heads, Lead Auditors, CMM Metrology Programmers, and SQA engineers.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="p-2.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#E2F0FC] border border-[#BEDBF5] border-l-2 sm:border-l-4 border-l-stone-600 shadow-xs hover:border-l-cobalt-600 hover:bg-[#D2E6F7] transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                        <span className="text-[11px] sm:text-sm font-mono font-extrabold text-industrial-950 uppercase tracking-wide leading-tight">
                          Foundry / CNC
                        </span>
                        <span className="text-[8px] sm:text-[10px] font-mono text-stone-900 font-bold px-1.5 py-0.5 rounded bg-stone-300/80 border border-stone-400 shrink-0 self-start">
                          PRECISION
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-stone-900 font-medium leading-relaxed line-clamp-3 sm:line-clamp-none">
                        Plant Heads, Machine Shop Managers (CNC/VMC), HPDC Shift Incharges, and Heat Treatment.
                      </p>
                    </div>
                  </div>

                  {/* Item 3 - Spans 2 cols on mobile */}
                  <div className="col-span-2 p-2.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#E2F0FC] border border-[#BEDBF5] border-l-2 sm:border-l-4 border-l-stone-600 shadow-xs hover:border-l-cobalt-600 hover:bg-[#D2E6F7] transition-all">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] sm:text-sm font-mono font-extrabold text-industrial-950 uppercase tracking-wide">
                        Toolroom & Maintenance
                      </span>
                      <span className="text-[8px] sm:text-[10px] font-mono text-emerald-950 font-bold px-1.5 py-0.5 rounded bg-emerald-200/90 border border-emerald-400 shrink-0">
                        CRITICAL UPTIME
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-stone-900 font-medium leading-relaxed">
                      Die & Mould Maintenance Specialists, SPM Hydraulic/Pneumatic Breakdown Engineers, and Electrical PLC Automation Technicians.
                    </p>
                  </div>

                </div>

                {/* Engine Readout Footer with Enhanced Dark Numbers */}
                <div className="pt-3 sm:pt-6 border-t border-stone-300 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3 sm:gap-6">
                    <div>
                      <div className="text-lg sm:text-2.5xl font-black font-serif text-industrial-950 tracking-tight">48-72h</div>
                      <div className="text-[9px] sm:text-[10px] font-mono text-stone-700 font-extrabold uppercase tracking-wider">Shortlist</div>
                    </div>
                    <div className="w-[1.5px] h-6 sm:h-8 bg-stone-300" />
                    <div>
                      <div className="text-lg sm:text-2.5xl font-black font-serif text-industrial-950 tracking-tight">Zero</div>
                      <div className="text-[9px] sm:text-[10px] font-mono text-stone-700 font-extrabold uppercase tracking-wider">Fluff</div>
                    </div>
                  </div>

                  <a
                    href="#staffing"
                    className="inline-flex items-center gap-1 sm:gap-2 text-[11px] sm:text-xs font-extrabold text-industrial-950 hover:text-cobalt-800 uppercase tracking-subtle-tracked transition-all duration-200 group/link"
                  >
                    <span>Request Talent</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* Central Operational Synergy Banner (Why Dual Engine?) */}
          <div className="mt-8 sm:mt-16 pt-4 sm:pt-8 border-t border-[#E7E2D6]/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 bg-[#E5DCCF] rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-[#C8BDAB] shadow-xs">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-stone-900 text-amberGold-400 flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-industrial-950 uppercase tracking-wide">
                  The Dual Engine Multiplier
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed mt-0.5 sm:mt-1 max-w-2xl">
                  Audits fail when systems lack competent personnel. Talent stalls when factories lack standard operating procedures. By combining turnkey QMS defense with vetted shopfloor engineers, Dhir Consultancy solves manufacturing bottlenecks permanently.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-3 w-full sm:w-auto">
              <a
                href="#estimator"
                className="w-full sm:w-auto text-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-industrial-950 hover:bg-stone-800 text-white text-[11px] sm:text-xs font-bold transition-all duration-200 shadow-xs"
              >
                Calculate Retainer
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
