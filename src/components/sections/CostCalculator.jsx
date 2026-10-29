import React from 'react';
import { Calculator, Trash2, MessageSquare, Send, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { coursesData } from '../../data/coursesData';
import { openWhatsApp, buildEstimateInquiry } from '../../utils/whatsapp';

export default function CostCalculator({ selectedCourses = [], onRemoveCourse, onClearAll, onSelectPreset }) {
  const totalDays = selectedCourses.reduce((sum, c) => sum + (c.days || 1), 0);
  const totalCost = selectedCourses.reduce((sum, c) => sum + (c.totalCost || 0), 0);

  // Quick Preset Packs
  const presets = [
    {
      name: "Core Tools Pack (APQP + PPAP)",
      courseIds: [17, 18],
      description: "Complete AIAG 5-phase APQP and PPAP/Control Plan documentation mastery."
    },
    {
      name: "ISO Triple Auditor Pack",
      courseIds: [5, 6, 7],
      description: "Certified Internal Auditor training for ISO 9001, ISO 14001, and ISO 45001."
    },
    {
      name: "Shopfloor 5S & Productivity Pack",
      courseIds: [19, 20, 22, 23, 25],
      description: "Kanban, 4M Change, 7 QC Tools, 5S & Kaizen, and OEE improvement."
    }
  ];

  return (
    <section id="estimator" className="py-24 px-4 sm:px-8 bg-[#F6F3EC] border-b border-[#E7E2D6]/80">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Interactive Budget Tool"
          title="Corporate Training &"
          highlight="Cost Estimator"
          subtitle="Select modules from the curriculum above or pick a curated industrial package below to estimate training duration and fee structure."
        />

        {/* Preset Packs Strip */}
        <div className="mb-12">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-tracked block mb-4 text-center sm:text-left">
            Or Load a Recommended Curriculum Package:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {presets.map((preset, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-[#D3C7B2] bg-[#ECE4D5] shadow-md hover:bg-[#E6DDCF] hover:border-amberGold-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-industrial-950 text-sm mb-1.5">{preset.name}</h4>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">{preset.description}</p>
                </div>
                <button
                  onClick={() => {
                    const presetCourses = coursesData.filter(c => preset.courseIds.includes(c.id));
                    if (onSelectPreset) onSelectPreset(presetCourses);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amberGold-700 hover:text-amberGold-800 uppercase tracking-wider self-start group"
                >
                  <Sparkles className="w-3.5 h-3.5 text-brass-500" />
                  <span>Apply This Pack</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Calculator Display Box */}
        <div className="bg-industrial-950 text-white rounded-3xl p-7 sm:p-12 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Selected Courses List (Cols 1-7) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/90">
                <div className="flex items-center gap-2.5">
                  <Calculator className="w-5 h-5 text-brass-400" />
                  <h3 className="font-bold text-base sm:text-lg text-white">
                    Selected Modules ({selectedCourses.length})
                  </h3>
                </div>

                {selectedCourses.length > 0 && (
                  <button
                    onClick={onClearAll}
                    className="text-xs text-slate-400 hover:text-rose-400 flex items-center gap-1.5 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All</span>
                  </button>
                )}
              </div>

              {selectedCourses.length === 0 ? (
                <div className="py-14 text-center text-slate-400 border border-dashed border-slate-800/80 rounded-2xl bg-industrial-900/30">
                  <p className="text-sm font-medium text-slate-300">No training modules selected yet.</p>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                    Click "Add" on any module in the catalog above to build your customized training schedule.
                  </p>
                </div>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                  {selectedCourses.map((c) => (
                    <div
                      key={c.id}
                      className="p-4 rounded-xl bg-industrial-900 border border-slate-800 flex items-center justify-between gap-4 text-xs"
                    >
                      <div className="flex-1 min-w-0">
                        <span className="font-bold text-slate-100 block truncate">
                          #{c.id < 10 ? `0${c.id}` : c.id}. {c.title}
                        </span>
                        <span className="text-slate-400 text-[11px] mt-0.5 block">
                          {c.days} Day(s) • Max {c.maxParticipants} participants
                        </span>
                      </div>

                      <div className="flex items-center gap-3.5 shrink-0">
                        <span className="font-extrabold text-brass-400 text-sm">
                          ₹{c.totalCost.toLocaleString('en-IN')}
                        </span>
                        <button
                          onClick={() => onRemoveCourse && onRemoveCourse(c.id)}
                          className="text-slate-500 hover:text-rose-400 p-1.5 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Summary Card & Action Buttons (Cols 8-12) */}
            <div className="lg:col-span-5 bg-industrial-900 p-7 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-tracked mb-5 border-b border-slate-800 pb-3">
                  Training Scope & Fee Summary
                </h4>

                <div className="space-y-3.5 text-xs mb-7">
                  <div className="flex justify-between text-slate-300">
                    <span>Total Selected Modules:</span>
                    <strong className="font-bold text-white">{selectedCourses.length}</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Estimated Training Days:</span>
                    <strong className="font-bold text-white">{totalDays} Day(s)</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Typical Batch Size:</span>
                    <strong className="font-bold text-white">10 – 20 Engineers</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Location Baseline:</span>
                    <strong className="font-bold text-white">Ludhiana Local</strong>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-industrial-950 border border-slate-800 mb-7">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                    Total Estimated Investment:
                  </span>
                  <div className="text-3xl font-black text-brass-400 tracking-tight">
                    ₹{totalCost.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1.5 block">
                    Exclusive of certification body audit fees & outstation travel.
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  disabled={selectedCourses.length === 0}
                  onClick={() => openWhatsApp(buildEstimateInquiry(selectedCourses, totalDays, totalCost))}
                  className="w-full py-4 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Estimate via WhatsApp</span>
                </button>

                <a
                  href="#contact"
                  className="w-full py-4 px-4 rounded-xl bg-amberGold-600 hover:bg-amberGold-500 text-industrial-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md text-center hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Request Formal Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
