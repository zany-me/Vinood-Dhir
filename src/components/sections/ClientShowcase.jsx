import React, { useState } from 'react';
import { 
  Building2, 
  Factory, 
  Award, 
  MapPin, 
  CheckCircle2, 
  Compass
} from 'lucide-react';
import { clientsData, oemEcosystem } from '../../data/clientsData';
import SectionHeading from '../ui/SectionHeading';

const historicalImages = [
  '/images/historical_foundry.jpg',
  '/images/historical_lathe.jpg',
  '/images/historical_plant.jpg'
];

const regionalHubs = [
  { id: 'all', label: 'All Manufacturing Hubs (12)' },
  { id: 'ludhiana', label: 'Ludhiana & Focal Point (8)' },
  { id: 'punjab', label: 'Punjab Corridor (2)' },
  { id: 'national', label: 'NCR & National (2)' }
];

export default function ClientShowcase() {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const filteredClients = clientsData.filter((client) => {
    if (selectedRegion === 'all') return true;
    return client.region === selectedRegion;
  });

  return (
    <section id="clients" className="py-10 sm:py-20 md:py-24 px-3 sm:px-8 bg-[#F6F3EC] border-b border-[#E7E2D6]/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Verified Client Ecosystem"
          title="Trusted by Premier"
          highlight="Automotive & Engineering Manufacturers"
          subtitle="A proven track record of sustaining quality compliance, defect reduction, and audit green ratings across leading industrial hubs in Punjab, Haryana, and NCR."
        />

        {/* 1. OEM & Tier-1 Audit Defense Experience (Soft Precision Ice-Blue, Space-Efficient, Faded Design Behind) */}
        <div className="relative overflow-hidden mb-6 sm:mb-10 p-2.5 sm:p-4 rounded-xl bg-[#DEEDFA] border border-[#B8D5EE] shadow-xs">
          {/* Faded Historical Background Watermark Design Behind */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img
              src="/images/historical_plant.jpg"
              alt=""
              className="w-full h-full object-cover grayscale opacity-[0.08]"
            />
            <div className="absolute inset-0 bg-[#DEEDFA]/45" />
          </div>

          <div className="relative z-10">
            {/* Compact Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2 pb-1.5 sm:pb-2 border-b border-[#B8D5EE]/80">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-white border border-[#B8D5EE] flex items-center justify-center text-[#1D4ED8] shrink-0 shadow-2xs">
                  <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#1E40AF]" />
                </div>
                <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-[#1E40AF]">
                    OEM & Tier-1 Audit Defense:
                  </span>
                  <h4 className="text-[11px] sm:text-[13px] font-bold text-[#0A2038] tracking-tight">
                    Direct Audits Conducted & Sustained
                  </h4>
                </div>
              </div>

              <div className="text-[8px] sm:text-[10px] font-mono font-bold text-[#1E3A5F] bg-white px-2 py-0.5 rounded border border-[#B8D5EE] shrink-0 self-start sm:self-auto shadow-2xs">
                MACE • VDA 6.3 • QAV
              </div>
            </div>

            {/* 6 Compact OEM Tiles (2-Column Grid on Mobile!) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5 sm:gap-2">
              {oemEcosystem.map((oem, idx) => (
                <div
                  key={idx}
                  className="p-1.5 sm:p-2.5 rounded-lg bg-white/90 hover:bg-white border border-[#B8D5EE] text-center flex flex-col justify-center items-center transition-all duration-200 shadow-2xs hover:shadow-xs hover:border-[#1E40AF] group"
                >
                  <span className="font-extrabold text-[#0A2038] text-[11px] sm:text-xs block mb-0.5 group-hover:text-[#1E40AF] transition-colors">
                    {oem.name}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-slate-600 font-medium leading-tight line-clamp-1">
                    {oem.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Distinguished Engineering & Manufacturing Clientele */}
        <div>
          {/* Header & Section Title */}
          <div className="text-center mb-5 sm:mb-7">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#ECE4D5] border border-[#D3C7B2] text-[10px] sm:text-xs font-bold font-mono text-stone-800 mb-2">
              <Compass className="w-3 h-3 text-amberGold-700" />
              <span>REGIONAL INDUSTRIAL FOOTPRINT</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-industrial-950 tracking-tight">
              Distinguished Engineering & Manufacturing Clientele
            </h3>
            <p className="text-[11px] sm:text-sm text-stone-600 mt-1 max-w-2xl mx-auto font-medium">
              Direct plant consulting, QMS turnaround, and shopfloor systems sustained across premier industrial zones.
            </p>
          </div>

          {/* Simple Regional Hub Filter - Swipeable on Phone */}
          <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 -mx-3 px-3 sm:mx-0 sm:px-0 sm:flex-wrap mb-4 sm:mb-8">
            {regionalHubs.map((hub) => (
              <button
                key={hub.id}
                onClick={() => setSelectedRegion(hub.id)}
                className={`whitespace-nowrap shrink-0 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-200 ${
                  selectedRegion === hub.id
                    ? 'bg-industrial-950 text-white shadow-xs ring-1 ring-industrial-950'
                    : 'bg-[#ECE4D5] text-stone-800 hover:bg-[#E2D7C5] border border-[#D3C7B2]'
                }`}
              >
                {hub.label}
              </button>
            ))}
          </div>

          {/* Compact Client Cards Grid (2 Columns on Mobile!) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5">
            {filteredClients.map((client, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden p-2.5 sm:p-3.5 rounded-lg bg-[#ECE4D5] border border-[#D3C7B2] shadow-2xs hover:shadow-sm hover:border-amberGold-600 transition-all duration-200 flex flex-col justify-between group"
              >
                {/* Faded Historical Background Watermark Image */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                  <img
                    src={historicalImages[idx % historicalImages.length]}
                    alt=""
                    className="w-full h-full object-cover grayscale sepia opacity-[0.09] group-hover:opacity-[0.16] group-hover:scale-105 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-[#ECE4D5]/35" />
                </div>

                {/* Clean Foreground Content */}
                <div className="relative z-10">
                  {/* MAIN FOCUS: CITY NAME - Guaranteed Fully Visible, Never Truncated */}
                  <div className="mb-1.5 pb-1 border-b border-[#D6CAB4]/60">
                    <div className="flex items-center justify-between gap-1">
                      <div className="flex items-center gap-1 shrink-0">
                        <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#A66C3E] shrink-0" />
                        <span className="font-serif text-[12px] sm:text-[15px] font-bold text-[#86512B] tracking-tight whitespace-nowrap leading-tight group-hover:text-[#683D1F] transition-colors">
                          {client.location}
                        </span>
                      </div>
                      {client.hubBadge && (
                        <span className="text-[8px] sm:text-[9px] font-mono text-stone-600 font-semibold px-1 sm:px-1.5 py-0.2 rounded bg-[#FAF3E6]/95 border border-[#D6CAB4]/70 truncate max-w-[68px] sm:max-w-[110px]">
                          {client.hubBadge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Company Name */}
                  <h4 className="font-bold text-industrial-950 text-xs sm:text-[13px] tracking-tight leading-snug line-clamp-1 mb-0.5">
                    {client.name}
                  </h4>

                  {/* Sector / Domain */}
                  <p className="text-[10px] sm:text-[11px] text-stone-600 leading-tight line-clamp-1">
                    {client.category}
                  </p>
                </div>

                {/* Bottom Engagement Strip - Ultra Compact */}
                <div className="relative z-10 mt-2.5 pt-1.5 border-t border-[#D6CAB4]/60 flex items-center justify-between text-[10px]">
                  <span className="font-mono text-stone-500 truncate max-w-[150px]">
                    {client.plantType}
                  </span>
                  <span className="flex items-center gap-1 text-emerald-800 font-bold font-mono shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                    Audited
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Simple Proof Note */}
          <div className="mt-8 text-center text-xs text-stone-600 font-medium">
            <span>Primary Industrial Cluster: <strong>Ludhiana Focal Point & Industrial Areas (A & B)</strong> • 100% On-Site Plant Deployments</span>
          </div>

        </div>

      </div>
    </section>
  );
}
