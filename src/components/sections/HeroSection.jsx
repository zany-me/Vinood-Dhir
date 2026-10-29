import React from 'react';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import SmartFactoryLeft from '../illustrations/SmartFactoryLeft';
import SmartFactoryRight from '../illustrations/SmartFactoryRight';
import { openWhatsApp } from '../../utils/whatsapp';

export default function HeroSection() {
  return (
    <section id="overview" className="relative bg-[#F6F3EC] text-[#181816] overflow-hidden pt-12 pb-14 sm:pt-20 sm:pb-24 md:pt-28 md:pb-32 border-b border-[#E7E2D6]/80">
      
      {/* --- LEFT SIDE ANIMATED SMART FACTORY FLOOR ILLUSTRATION --- */}
      <div 
        className="absolute -left-12 sm:left-0 top-1/2 -translate-y-1/2 w-[260px] sm:w-[300px] md:w-[340px] xl:w-[380px] h-[480px] opacity-20 sm:opacity-35 lg:opacity-90 pointer-events-none z-0 transition-opacity duration-500"
        style={{
          maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)'
        }}
      >
        <SmartFactoryLeft />
      </div>

      {/* --- RIGHT SIDE ANIMATED SMART FACTORY INSPECTION ILLUSTRATION --- */}
      <div 
        className="absolute -right-12 sm:right-0 top-1/2 -translate-y-1/2 w-[260px] sm:w-[300px] md:w-[340px] xl:w-[380px] h-[480px] opacity-20 sm:opacity-35 lg:opacity-90 pointer-events-none z-0 transition-opacity duration-500"
        style={{
          maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)'
        }}
      >
        <SmartFactoryRight />
      </div>

      {/* --- CENTERED HERO CONTENT (Z-10) --- */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-10 text-center">
        
        {/* 1. Centered Uppercase Kicker */}
        <div className="mb-3 sm:mb-6 md:mb-8">
          <span className="inline-block px-3 py-0.5 sm:px-4 sm:py-1 rounded-full bg-[#EBE5D8]/70 border border-[#DDD5C5]/80 text-[9px] sm:text-[11px] font-sans font-bold uppercase tracking-loose-tracked text-[#6B6D64]">
            QUALITY MANAGEMENT & INDUSTRIAL EXCELLENCE
          </span>
        </div>

        {/* 2. Main Editorial Serif Headline */}
        <h1 className="font-serif text-[32px] sm:text-5xl md:text-7xl lg:text-[5.1rem] font-medium tracking-tight text-[#181816] leading-[1.18] sm:leading-[1.12] mb-4 sm:mb-8 max-w-4xl mx-auto">
          <span>Rigorous, </span>
          <span className="relative inline-block px-2 sm:px-3 py-0.5 sm:py-1 mx-1 rounded bg-[#EBE5D8] italic font-normal text-[#1A1C19] shadow-xs">
            not theoretical.
          </span>
          <br className="hidden sm:inline" />
          <span className="block mt-1.5 sm:mt-2">
            The proven standard of plant excellence.
          </span>
        </h1>

        {/* 3. Centered Editorial Lead Paragraph */}
        <p className="text-xs sm:text-base md:text-lg text-[#52554E] max-w-2xl mx-auto leading-relaxed font-normal mb-6 sm:mb-10">
          Directed by <strong className="text-[#181816] font-semibold">Vinood Dhir</strong> — Corporate QMS Head with 
          34+ years leading 5 industrial plants and a 500+ workforce. Turnkey implementation for 
          <span className="text-[#181816] font-medium"> IATF 16949, MACE Green sustenance, VDA 6.3</span>, and 29+ specialized training modules.
        </p>

        {/* 4. Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-8 sm:mb-16">
          <a
            href="#catalog"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 sm:px-8 sm:py-4 rounded-full bg-[#181816] hover:bg-[#2A2C27] text-[#FAF8F5] font-sans font-semibold text-[11px] sm:text-xs uppercase tracking-subtle-tracked transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore 29+ Modules</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
          </a>

          <button
            onClick={() => openWhatsApp("Hello Mr. Vinood Dhir, I would like to schedule a consultation regarding QMS implementation/audits for our manufacturing plant.")}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 sm:px-8 sm:py-4 rounded-full bg-white/80 hover:bg-[#EDE8DC] text-[#181816] border border-[#2B2D28] font-sans font-semibold text-[11px] sm:text-xs uppercase tracking-subtle-tracked transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
            <span>WhatsApp Consultation</span>
          </button>
        </div>

        {/* 5. 2-Column on Mobile Metric Strip */}
        <div className="pt-6 sm:pt-10 border-t border-[#E3DDD1] grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center max-w-4xl mx-auto">
          <div className="space-y-0.5 sm:space-y-1 p-2 sm:p-0 bg-white/40 sm:bg-transparent rounded-lg border sm:border-0 border-[#E3DDD1]">
            <span className="font-serif text-xl sm:text-3xl font-bold text-[#181816] block">
              34+ Years
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-subtle-tracked text-[#787A71] block">
              Industrial Mastery
            </span>
          </div>

          <div className="space-y-0.5 sm:space-y-1 p-2 sm:p-0 bg-white/40 sm:bg-transparent rounded-lg border sm:border-0 border-[#E3DDD1] md:border-l md:border-[#E3DDD1]">
            <span className="font-serif text-xl sm:text-3xl font-bold text-[#181816] block">
              MACE Green
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-subtle-tracked text-[#787A71] block">
              Sustained 2019–2024
            </span>
          </div>

          <div className="space-y-0.5 sm:space-y-1 p-2 sm:p-0 bg-white/40 sm:bg-transparent rounded-lg border sm:border-0 border-[#E3DDD1] md:border-l md:border-[#E3DDD1]">
            <span className="font-serif text-xl sm:text-3xl font-bold text-[#181816] block">
              500+ Personnel
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-subtle-tracked text-[#787A71] block">
              Workforce Commanded
            </span>
          </div>

          <div className="space-y-0.5 sm:space-y-1 p-2 sm:p-0 bg-white/40 sm:bg-transparent rounded-lg border sm:border-0 border-[#E3DDD1] md:border-l md:border-[#E3DDD1]">
            <span className="font-serif text-xl sm:text-3xl font-bold text-[#181816] block">
              29 Modules
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-subtle-tracked text-[#787A71] block">
              Curriculum Catalog
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
