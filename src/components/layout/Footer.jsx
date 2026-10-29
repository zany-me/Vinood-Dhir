import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  ChevronUp, 
  Factory,
  Sparkles
} from 'lucide-react';
import { profileData } from '../../data/profileData';
import { openWhatsApp } from '../../utils/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-[#E2D8C7] text-stone-800 border-t border-[#C7BBA5]">
      
      {/* Subtle Historical Engineering Watermark in Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/historical_plant.jpg"
          alt=""
          className="w-full h-full object-cover grayscale sepia opacity-[0.05]"
        />
        <div className="absolute inset-0 bg-[#E2D8C7]/75" />
      </div>

      <div className="relative z-10">
        
        {/* 1. Top Executive Consultation Ribbon (Slightly Darker Warm Linen) */}
        <div className="border-b border-[#C7BBA5]/80 bg-[#EAE0D0]/85 py-4 sm:py-8 px-3.5 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-6">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span className="text-[9px] sm:text-[10px] font-mono font-bold text-[#86512B] uppercase tracking-widest">
                  Plant Turnaround & QMS Governance
                </span>
              </div>
              <h3 className="text-base sm:text-2xl font-black text-industrial-950 tracking-tight leading-snug">
                Ready to Upgrade Your Quality & Audit Performance?
              </h3>
              <p className="text-[11px] sm:text-sm text-stone-600 mt-0.5 sm:mt-1 max-w-2xl font-medium leading-relaxed">
                Connect directly with Vinood Dhir for IATF 16949, MACE Green audit defense, or tailored on-site manufacturing training across Punjab and NCR.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto shrink-0 pt-1 sm:pt-0">
              <button
                onClick={() => openWhatsApp("Hello Mr. Vinood Dhir, I would like to schedule an introductory audit consultation for our manufacturing plant.")}
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider transition-all shadow-xs hover:shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp</span>
              </button>
              
              <a
                href="#contact"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-industrial-950 hover:bg-stone-800 text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider transition-all shadow-xs hover:shadow-sm"
              >
                <span>Submit RFQ</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* 2. Main Executive Grid - 2 Columns on Phone */}
        <div className="max-w-7xl mx-auto px-3.5 sm:px-8 py-6 sm:py-14 grid grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-10">
          
          {/* Col 1: Brand & Authority (Full-width 2-cols on mobile, Cols 1-4 on desktop) */}
          <div className="col-span-2 lg:col-span-4 space-y-2.5 sm:space-y-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-industrial-950 text-amberGold-400 flex items-center justify-center font-black text-sm sm:text-base shadow-xs">
                VD
              </div>
              <div>
                <h4 className="font-black text-industrial-950 text-sm sm:text-base tracking-tight leading-tight">
                  DHIR CONSULTANCY SERVICES
                </h4>
                <p className="text-[10px] sm:text-[11px] text-[#86512B] font-mono font-bold tracking-wider">
                  QMS & MANUFACTURING EXCELLENCE
                </p>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed font-medium">
              Over 34 years of industrial plant management and corporate QMS leadership. Directed operations for casting, machining, and surface coating lines commanding 500+ workforce with sustained Maruti Suzuki MACE Green audits.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 pt-0.5 text-[10px] sm:text-xs">
              <div className="flex items-center gap-1.5 text-stone-800 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span className="leading-tight">MACE Green Sustained (2019–2024)</span>
              </div>
              <div className="flex items-center gap-1.5 text-stone-800 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span className="leading-tight">Lead Auditor (ISO 45001 / VDA 6.3)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core Standards & Audits (1 Col on mobile, Cols 5-7 on desktop) */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="text-industrial-950 font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-2 sm:mb-3.5 border-l-2 border-amberGold-600 pl-2 font-mono">
              Audits & Standards
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs text-stone-600 font-medium">
              <li>
                <a href="#audits" className="hover:text-industrial-950 hover:underline transition-colors flex items-center gap-1">
                  <span className="text-amberGold-700 text-[9px]">▸</span>
                  <span>IATF 16949 Auto</span>
                </a>
              </li>
              <li>
                <a href="#audits" className="hover:text-industrial-950 hover:underline transition-colors flex items-center gap-1">
                  <span className="text-amberGold-700 text-[9px]">▸</span>
                  <span>MACE Audit (MSIL)</span>
                </a>
              </li>
              <li>
                <a href="#audits" className="hover:text-industrial-950 hover:underline transition-colors flex items-center gap-1">
                  <span className="text-amberGold-700 text-[9px]">▸</span>
                  <span>VDA 6.3 Process</span>
                </a>
              </li>
              <li>
                <a href="#audits" className="hover:text-industrial-950 hover:underline transition-colors flex items-center gap-1">
                  <span className="text-amberGold-700 text-[9px]">▸</span>
                  <span>CQI-27 Casting</span>
                </a>
              </li>
              <li>
                <a href="#audits" className="hover:text-industrial-950 hover:underline transition-colors flex items-center gap-1">
                  <span className="text-amberGold-700 text-[9px]">▸</span>
                  <span>ISO 9001 / 14001</span>
                </a>
              </li>
              <li>
                <a href="#audits" className="hover:text-industrial-950 hover:underline transition-colors flex items-center gap-1">
                  <span className="text-amberGold-700 text-[9px]">▸</span>
                  <span>BIS Licensing</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Operational Tools & Training (1 Col on mobile, Cols 8-9 on desktop) */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-industrial-950 font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-2 sm:mb-3.5 border-l-2 border-amberGold-600 pl-2 font-mono">
              Excellence & Tools
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs text-stone-600 font-medium">
              <li>
                <a href="#catalog" className="hover:text-industrial-950 hover:underline transition-colors flex items-center gap-1">
                  <span className="text-amberGold-700 text-[9px]">▸</span>
                  <span>APQP & PPAP (AIAG)</span>
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-industrial-950 hover:underline transition-colors flex items-center gap-1">
                  <span className="text-amberGold-700 text-[9px]">▸</span>
                  <span>5S & Kaizen Culture</span>
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-industrial-950 hover:underline transition-colors flex items-center gap-1">
                  <span className="text-amberGold-700 text-[9px]">▸</span>
                  <span>4M Change Control</span>
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-industrial-950 hover:underline transition-colors flex items-center gap-1">
                  <span className="text-amberGold-700 text-[9px]">▸</span>
                  <span>COPQ Reduction</span>
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-industrial-950 hover:underline transition-colors flex items-center gap-1">
                  <span className="text-amberGold-700 text-[9px]">▸</span>
                  <span>OEE Optimization</span>
                </a>
              </li>
              <li>
                <a href="#staffing" className="hover:text-industrial-950 hover:underline transition-colors flex items-center gap-1">
                  <span className="text-amberGold-700 text-[9px]">▸</span>
                  <span>Technical Staffing</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Executive Headquarters & Terms (Full-width 2-cols on mobile, Cols 10-12 on desktop) */}
          <div className="col-span-2 lg:col-span-3 space-y-2.5 sm:space-y-3.5">
            <h4 className="text-industrial-950 font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-2 sm:mb-3.5 border-l-2 border-amberGold-600 pl-2 font-mono">
              Advisory Office & Protocol
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 text-[10px] sm:text-xs text-stone-700">
              <p className="col-span-2 flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amberGold-700 shrink-0 mt-0.5" />
                <span className="leading-tight">
                  {profileData.contact.address.line1}, {profileData.contact.address.line2}, {profileData.contact.address.state}
                </span>
              </p>
              
              <p className="flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-amberGold-700 shrink-0" />
                <a href={`tel:${profileData.contact.primaryPhone.replace(/\s+/g, '')}`} className="font-mono font-bold hover:text-industrial-950 transition-colors truncate">
                  {profileData.contact.primaryPhone}
                </a>
              </p>

              <p className="flex items-center gap-1.5">
                <Mail className="w-3 h-3 text-amberGold-700 shrink-0" />
                <a href={`mailto:${profileData.contact.primaryEmail}`} className="font-mono font-medium hover:text-industrial-950 transition-colors truncate">
                  {profileData.contact.primaryEmail}
                </a>
              </p>
            </div>

            <div className="p-2 sm:p-3 rounded-lg bg-[#EAE0D0] border border-[#C7BBA5] text-[10px] sm:text-[11px] text-stone-700 leading-tight space-y-0.5 sm:space-y-1 shadow-2xs">
              <span className="font-bold text-industrial-950 block font-mono uppercase text-[9px] sm:text-[10px] tracking-wider">
                Commercial Protocol:
              </span>
              <p>• Local Ludhiana: Standard turnkey rates apply.</p>
              <p>• Outstation: Travel & boarding expenses at actuals.</p>
              <p>• Milestone: 60% advance & 40% on project delivery.</p>
            </div>
          </div>

        </div>

        {/* 3. Bottom Legal, Industrial Seal & Back to Top */}
        <div className="border-t border-[#C7BBA5]/80 py-5 px-4 sm:px-8 bg-[#EAE0D0]/70">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
            
            <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
              <span>© {currentYear} Dhir Consultancy Services. All Rights Reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-stone-700 font-medium">Ludhiana & NCR Industrial Quality Governance</span>
            </div>

            <div className="flex items-center gap-5">
              <span className="text-[11px] font-mono text-stone-700">
                Principal Advisor: <strong className="text-industrial-950">Vinood Dhir</strong>
              </span>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EAE0D0] hover:bg-[#DFD3C0] text-stone-900 border border-[#C7BBA5] text-[11px] font-mono font-bold transition-colors shadow-2xs"
                title="Scroll back to top"
              >
                <span>Top</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
