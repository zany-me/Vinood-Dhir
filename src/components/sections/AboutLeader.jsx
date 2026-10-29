import React from 'react';
import { 
  Award, 
  GraduationCap, 
  Briefcase, 
  Factory, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Calendar, 
  Sparkles, 
  MapPin, 
  Building2,
  Layers,
  Clock
} from 'lucide-react';
import { profileData } from '../../data/profileData';
import SectionHeading from '../ui/SectionHeading';

const technicalDomains = [
  "High Pressure Die Casting (HPDC)",
  "Gravity Die Casting (GDC)",
  "CNC Machining Shop",
  "Powder & Liquid Electrostatic Coating",
  "Vibro Finish & Shot Blasting",
  "SAP PP & QM Module",
  "ACMA Advance Cluster",
  "Poka-Yoke & 5S Error-Proofing"
];

export default function AboutLeader() {
  return (
    <section id="about" className="py-10 sm:py-20 md:py-24 px-3 sm:px-8 bg-[#F6F3EC] border-b border-[#E7E2D6]/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Leadership & Track Record"
          title="About Vinood Dhir &"
          highlight="Dhir Consultancy"
          subtitle="34+ years of hands-on industrial plant management, corporate QMS governance, and factory transformation across prestigious engineering and automotive manufacturing groups."
        />

        {/* 1. Top Split: Executive Profile & Qualifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-8 sm:mb-14">
          
          {/* Left Executive Bio Card (Cols 1-7) */}
          <div className="lg:col-span-7 relative overflow-hidden p-4 sm:p-7 md:p-9 rounded-xl sm:rounded-2xl bg-[#ECE4D5] border border-[#D3C7B2] shadow-md flex flex-col justify-between">
            {/* Subtle Faded Historical Watermark in Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              <img
                src="/images/historical_lathe.jpg"
                alt=""
                className="w-full h-full object-cover grayscale sepia opacity-[0.06]"
              />
              <div className="absolute inset-0 bg-[#ECE4D5]/60" />
            </div>

            <div className="relative z-10 space-y-3 sm:space-y-5">
              {/* Header Badge & Title */}
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#FAF3E6] border border-[#D3C7B2] text-[10px] sm:text-[11px] font-mono font-bold text-amberGold-900 mb-1.5 sm:mb-2.5 shadow-2xs">
                  <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amberGold-700" />
                  <span>PRINCIPAL CONSULTANT & QMS ADVISOR</span>
                </div>
                <h3 className="text-xl sm:text-2.5xl md:text-3xl font-black text-industrial-950 tracking-tight leading-snug">
                  A Veteran Engineering Leader Behind MACE Green Standards
                </h3>
              </div>

              {/* Stat Highlights Bar (2 Columns on Mobile!) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 py-2.5 sm:py-3 border-y border-[#D6CAB4]/80 text-center sm:text-left">
                <div className="p-1.5 sm:p-0 bg-white/40 sm:bg-transparent rounded border sm:border-0 border-[#D6CAB4]/60">
                  <span className="text-lg sm:text-2xl font-black font-mono text-industrial-950 block">
                    {profileData.yearsExperience}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-stone-600 block">
                    Plant Mastery
                  </span>
                </div>

                <div className="p-1.5 sm:p-0 bg-white/40 sm:bg-transparent rounded border sm:border-0 border-[#D6CAB4]/60">
                  <span className="text-lg sm:text-2xl font-black font-mono text-amberGold-900 block">
                    {profileData.workforceCommanded}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-stone-600 block">
                    Workforce
                  </span>
                </div>

                <div className="p-1.5 sm:p-0 bg-white/40 sm:bg-transparent rounded border sm:border-0 border-[#D6CAB4]/60">
                  <span className="text-lg sm:text-2xl font-black font-mono text-industrial-950 block">
                    5 Plants
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-stone-600 block">
                    Ludhiana & NCR
                  </span>
                </div>

                <div className="p-1.5 sm:p-0 bg-white/40 sm:bg-transparent rounded border sm:border-0 border-[#D6CAB4]/60">
                  <span className="text-lg sm:text-2xl font-black font-mono text-emerald-800 block">
                    MACE Green
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-stone-600 block">
                    Maruti Audit
                  </span>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                {profileData.experienceSummary}
              </p>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium hidden sm:block">
                Throughout his career commanding up to <strong className="text-industrial-950 font-bold">500+ workforce</strong>, Vinood Dhir has personally directed machining, pressure die casting (HPDC/GDC), surface coating, and assembly lines. His hallmark is converting complex OEM audit frameworks into practical, sustainable daily shopfloor habits.
              </p>

              {/* Specialized Technical Domains */}
              <div className="pt-1 sm:pt-2">
                <span className="text-[10px] sm:text-[11px] font-bold text-industrial-950 uppercase tracking-wider block mb-1.5 sm:mb-2.5 flex items-center gap-1.5">
                  <Factory className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amberGold-700" />
                  <span>Specialized Technical Domains:</span>
                </span>
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {technicalDomains.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#FAF3E6] text-stone-800 text-[10px] sm:text-[11px] font-semibold border border-[#D3C7B2] shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Qualifications Card (Cols 8-12) */}
          <div className="lg:col-span-5 bg-industrial-950 text-white p-4 sm:p-7 md:p-9 rounded-xl sm:rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-6">
              {/* Card Header */}
              <div className="flex items-center gap-2.5 pb-2.5 sm:pb-4 border-b border-slate-800">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amberGold-500/20 flex items-center justify-center border border-amberGold-500/30 text-amberGold-400">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-lg text-white">Qualifications & Credentials</h4>
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-400">Academic & Lead Auditor Certifications</span>
                </div>
              </div>

              {/* Qualifications List */}
              <div className="space-y-2 sm:space-y-3.5 text-xs">
                {profileData.qualifications.map((q, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-industrial-900 border border-slate-800/90">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-bold text-xs sm:text-sm">{q.title}</strong>
                      <span className="text-slate-400 text-[10px] sm:text-[11px] mt-0.5 block font-medium">
                        {q.institute || q.certification} {q.year && `• (${q.year})`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Language Fluency Strip */}
            <div className="p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl bg-industrial-900 border border-slate-800">
              <span className="text-amberGold-400 font-bold block mb-0.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider">
                Language Fluency:
              </span>
              <p className="text-[11px] sm:text-xs text-slate-300 font-medium">
                English (Fluent) • Hindi (Fluent) • Punjabi (Native Plant Fluency)
              </p>
            </div>
          </div>

        </div>

        {/* 2. Flagship Proven Achievements (2-Column Grid on Mobile!) */}
        <div className="mb-10 sm:mb-16">
          <div className="text-center mb-5 sm:mb-8">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold text-amberGold-900 uppercase tracking-widest block mb-1">
              PROVEN RESULTS ON THE FACTORY FLOOR
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-industrial-950 tracking-tight">
              Flagship Operational Milestones
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
            {profileData.achievements.map((ach, idx) => (
              <div
                key={idx}
                className="p-3 sm:p-5 rounded-lg sm:rounded-xl bg-[#ECE4D5] border border-[#D3C7B2] shadow-2xs sm:shadow-sm hover:border-amberGold-600 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] sm:text-xs font-mono font-black text-amberGold-950 bg-amberGold-200/70 border border-amberGold-300 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded inline-block mb-1.5 sm:mb-3">
                    {ach.metric}
                  </span>
                  <h4 className="font-extrabold text-industrial-950 text-xs sm:text-sm mb-1 sm:mb-2 leading-snug">
                    {ach.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-stone-600 leading-relaxed font-medium line-clamp-2 sm:line-clamp-none">
                    {ach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Connected Industrial Career History & Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-industrial-950 text-amberGold-400 flex items-center justify-center shrink-0 shadow-xs">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-industrial-950 tracking-tight">
                Industrial Career History & Major Milestones
              </h3>
              <p className="text-xs text-stone-600 font-medium">
                34-year chronological journey across tier-1 manufacturing, casting, machining, and corporate QMS.
              </p>
            </div>
          </div>

          {/* Timeline Backbone */}
          <div className="relative border-l-2 border-amberGold-600/40 ml-3 sm:ml-5 space-y-6 pl-5 sm:pl-8">
            {profileData.careerTimeline.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Node Bullet */}
                <span className="absolute -left-[27px] sm:-left-[39px] top-4 w-4 h-4 rounded-full bg-industrial-950 border-2 border-amberGold-500 group-hover:scale-125 transition-transform shadow-xs" />

                {/* Milestone Card */}
                <div className="p-5 sm:p-6 rounded-xl bg-[#ECE4D5] border border-[#D3C7B2] shadow-sm hover:shadow-md hover:border-amberGold-600 transition-all flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    {/* Period & Role */}
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-[#FAF3E6] border border-[#D3C7B2] text-amberGold-900">
                        {item.period}
                      </span>
                      <h4 className="text-sm sm:text-base font-extrabold text-industrial-950">
                        {item.role}
                      </h4>
                    </div>

                    {/* Company & Location */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600 mb-2.5 font-medium">
                      <span className="font-bold text-stone-800">{item.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-stone-600">
                        <MapPin className="w-3 h-3 text-amberGold-700" />
                        {item.location}
                      </span>
                    </div>

                    {/* Highlights */}
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                      {item.highlights}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
