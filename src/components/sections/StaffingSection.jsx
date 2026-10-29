import React, { useState } from 'react';
import { Briefcase, Building, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { openWhatsApp } from '../../utils/whatsapp';
import PredictiveArcSignal from '../originkit/ui/predictive-arc-03';

export default function StaffingSection() {
  const [activeTab, setActiveTab] = useState('employer'); // 'employer' or 'candidate'
  const [submittedMessage, setSubmittedMessage] = useState('');

  // Employer Form State
  const [empData, setEmpData] = useState({
    company: '',
    contactPerson: '',
    phone: '',
    email: '',
    role: 'Quality & QMS Engineer',
    vacancies: '1',
    location: '',
    details: ''
  });

  // Candidate Form State
  const [candData, setCandData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: '3–5 Years',
    specialization: 'Quality Assurance / QMS',
    location: '',
    skills: ''
  });

  const handleEmployerSubmit = (e) => {
    e.preventDefault();
    const msg = `*NEW EMPLOYER HIRING REQUIREMENT*\n\n*Company:* ${empData.company}\n*Contact Person:* ${empData.contactPerson}\n*Phone:* ${empData.phone}\n*Email:* ${empData.email}\n*Target Role:* ${empData.role}\n*No. of Vacancies:* ${empData.vacancies}\n*Plant Location:* ${empData.location}\n*Requirements:* ${empData.details}`;
    openWhatsApp(msg);
    setSubmittedMessage("Hiring requirement prepared! Your WhatsApp has been opened to dispatch directly.");
  };

  const handleCandidateSubmit = (e) => {
    e.preventDefault();
    const msg = `*NEW JOB SEEKER PROFILE APPLICATION*\n\n*Candidate Name:* ${candData.name}\n*Mobile:* ${candData.phone}\n*Email:* ${candData.email}\n*Experience:* ${candData.experience}\n*Domain:* ${candData.specialization}\n*Preferred Location:* ${candData.location}\n*Key Qualifications & Skills:* ${candData.skills}`;
    openWhatsApp(msg);
    setSubmittedMessage("Job application prepared! Your WhatsApp has been opened to dispatch your profile directly.");
  };

  return (
    <section id="staffing" className="relative py-10 sm:py-20 md:py-24 px-3 sm:px-8 bg-[#F6F3EC] border-b border-[#E7E2D6]/80 overflow-hidden">
      
      {/* Originkit Predictive Arc 3 Dynamic WebGL Waveform (Harmonized with Application Theme #F6F3EC) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-90">
        <PredictiveArcSignal
          background="#F6F3EC"
          baseColor="#D6CAB6"
          accentColor="#86512B"
          highlight="#382110"
          density={140}
          dotSize={90}
          speed={40}
          hover={120}
          signal={{ level: 50, amplitude: 18, wavelength: 65, thickness: 110 }}
          style={{ minWidth: 0, minHeight: 0, width: "100%", height: "100%" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeading
          badge="Specialized Placement"
          title="Technical & Industrial"
          highlight="Staffing Portal"
          subtitle="Connecting top-tier manufacturing companies with qualified quality heads, plant supervisors, machining technicians, and foundry specialists."
          dark={false}
        />

        {/* Tab Toggle (Compact on Phone) */}
        <div className="flex justify-center mb-6 sm:mb-10">
          <div className="bg-[#ECE4D5]/90 backdrop-blur-sm p-1 sm:p-1.5 rounded-xl sm:rounded-2xl flex items-center gap-1 sm:gap-1.5 shadow-2xs border border-[#D3C7B2]">
            <button
              onClick={() => { setActiveTab('employer'); setSubmittedMessage(''); }}
              className={`flex items-center gap-1.5 px-3 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === 'employer'
                  ? 'bg-industrial-950 text-white shadow-xs'
                  : 'text-stone-700 hover:text-industrial-950'
              }`}
            >
              <Building className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>For Employers (Hire)</span>
            </button>
            <button
              onClick={() => { setActiveTab('candidate'); setSubmittedMessage(''); }}
              className={`flex items-center gap-1.5 px-3 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === 'candidate'
                  ? 'bg-industrial-950 text-white shadow-xs'
                  : 'text-stone-700 hover:text-industrial-950'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>For Job Seekers (Apply)</span>
            </button>
          </div>
        </div>

        {/* Form Container (2-Column Grid on Mobile, Reduced Height) */}
        <div className="bg-[#ECE4D5]/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 border border-[#D3C7B2] shadow-sm">
          {submittedMessage && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
              <span>{submittedMessage}</span>
            </div>
          )}

          {activeTab === 'employer' ? (
            /* EMPLOYER FORM (2 Columns on Mobile!) */
            <form onSubmit={handleEmployerSubmit} className="space-y-3 sm:space-y-5">
              <div className="grid grid-cols-2 gap-2.5 sm:gap-5">
                <div>
                  <label className="text-[11px] sm:text-xs font-bold text-stone-700 block mb-1">Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Auto Components"
                    value={empData.company}
                    onChange={(e) => setEmpData({...empData, company: e.target.value})}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#D3C7B2] text-xs focus:outline-none focus:border-amberGold-600 bg-white/95 text-stone-900 shadow-2xs transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[11px] sm:text-xs font-bold text-stone-700 block mb-1">Contact Person *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar (HR)"
                    value={empData.contactPerson}
                    onChange={(e) => setEmpData({...empData, contactPerson: e.target.value})}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#D3C7B2] text-xs focus:outline-none focus:border-amberGold-600 bg-white/95 text-stone-900 shadow-2xs transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-5">
                <div>
                  <label className="text-[11px] sm:text-xs font-bold text-stone-700 block mb-1">Mobile (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={empData.phone}
                    onChange={(e) => setEmpData({...empData, phone: e.target.value})}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#D3C7B2] text-xs focus:outline-none focus:border-amberGold-600 bg-white/95 text-stone-900 shadow-2xs transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[11px] sm:text-xs font-bold text-stone-700 block mb-1">Official Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="hr@company.com"
                    value={empData.email}
                    onChange={(e) => setEmpData({...empData, email: e.target.value})}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#D3C7B2] text-xs focus:outline-none focus:border-amberGold-600 bg-white/95 text-stone-900 shadow-2xs transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-5">
                <div className="col-span-2 sm:col-span-1">
                  <label className="text-[11px] sm:text-xs font-bold text-stone-700 block mb-1">Role Needed *</label>
                  <select
                    value={empData.role}
                    onChange={(e) => setEmpData({...empData, role: e.target.value})}
                    className="w-full px-2.5 py-2 sm:px-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#D3C7B2] text-xs focus:outline-none focus:border-amberGold-600 bg-white text-stone-900 shadow-2xs transition-colors"
                  >
                    <option>Quality & QMS Engineer</option>
                    <option>Quality Manager / Head</option>
                    <option>Production & Machine Shop Incharge</option>
                    <option>Die Casting Engineer (HPDC/GDC)</option>
                    <option>Maintenance & Toolroom Tech</option>
                    <option>PPC & Operations Planner</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] sm:text-xs font-bold text-stone-700 block mb-1">Vacancies</label>
                  <input
                    type="number"
                    min="1"
                    value={empData.vacancies}
                    onChange={(e) => setEmpData({...empData, vacancies: e.target.value})}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#D3C7B2] text-xs focus:outline-none focus:border-amberGold-600 bg-white/95 text-stone-900 shadow-2xs transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[11px] sm:text-xs font-bold text-stone-700 block mb-1">Plant Location *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ludhiana"
                    value={empData.location}
                    onChange={(e) => setEmpData({...empData, location: e.target.value})}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#D3C7B2] text-xs focus:outline-none focus:border-amberGold-600 bg-white/95 text-stone-900 shadow-2xs transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] sm:text-xs font-bold text-stone-700 block mb-1">Role Description & Experience</label>
                <textarea
                  rows="3"
                  placeholder="Mention machine types, CNC exposure, IATF internal audit knowledge, salary budget, etc."
                  value={empData.details}
                  onChange={(e) => setEmpData({...empData, details: e.target.value})}
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl border border-[#D3C7B2] text-xs focus:outline-none focus:border-amberGold-600 bg-white/95 text-stone-900 shadow-2xs transition-colors resize-none leading-relaxed min-h-[72px] sm:min-h-[80px]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 sm:py-4 rounded-xl bg-industrial-950 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Submit Hiring Requirement via WhatsApp</span>
              </button>
            </form>
          ) : (
            /* CANDIDATE FORM (2 Columns on Mobile!) */
            <form onSubmit={handleCandidateSubmit} className="space-y-3 sm:space-y-5">
              <div className="grid grid-cols-2 gap-2.5 sm:gap-5">
                <div>
                  <label className="text-[11px] sm:text-xs font-bold text-stone-700 block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amit Sharma"
                    value={candData.name}
                    onChange={(e) => setCandData({...candData, name: e.target.value})}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#D3C7B2] text-xs focus:outline-none focus:border-amberGold-600 bg-white/95 text-stone-900 shadow-2xs transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[11px] sm:text-xs font-bold text-stone-700 block mb-1">Mobile (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={candData.phone}
                    onChange={(e) => setCandData({...candData, phone: e.target.value})}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#D3C7B2] text-xs focus:outline-none focus:border-amberGold-600 bg-white/95 text-stone-900 shadow-2xs transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-5">
                <div className="col-span-2 sm:col-span-1">
                  <label className="text-[11px] sm:text-xs font-bold text-stone-700 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="amit@gmail.com"
                    value={candData.email}
                    onChange={(e) => setCandData({...candData, email: e.target.value})}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#D3C7B2] text-xs focus:outline-none focus:border-amberGold-600 bg-white/95 text-stone-900 shadow-2xs transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[11px] sm:text-xs font-bold text-stone-700 block mb-1">Experience *</label>
                  <select
                    value={candData.experience}
                    onChange={(e) => setCandData({...candData, experience: e.target.value})}
                    className="w-full px-2.5 py-2 sm:px-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#D3C7B2] text-xs focus:outline-none focus:border-amberGold-600 bg-white text-stone-900 shadow-2xs transition-colors"
                  >
                    <option>Fresher / Trainee</option>
                    <option>1–2 Years</option>
                    <option>3–5 Years</option>
                    <option>6–10 Years</option>
                    <option>10+ Years (Lead)</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] sm:text-xs font-bold text-stone-700 block mb-1">Domain *</label>
                  <select
                    value={candData.specialization}
                    onChange={(e) => setCandData({...candData, specialization: e.target.value})}
                    className="w-full px-2.5 py-2 sm:px-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#D3C7B2] text-xs focus:outline-none focus:border-amberGold-600 bg-white text-stone-900 shadow-2xs transition-colors"
                  >
                    <option>Quality / QMS</option>
                    <option>Production & Machining</option>
                    <option>Die Casting</option>
                    <option>Maintenance & Toolroom</option>
                    <option>PPC & Supply Chain</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] sm:text-xs font-bold text-stone-700 block mb-1">Preferred Location</label>
                <input
                  type="text"
                  placeholder="e.g. Ludhiana, Rajpura, Baddi, Gurugram"
                  value={candData.location}
                  onChange={(e) => setCandData({...candData, location: e.target.value})}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#D3C7B2] text-xs focus:outline-none focus:border-amberGold-600 bg-white/95 text-stone-900 shadow-2xs transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] sm:text-xs font-bold text-stone-700 block mb-1">Qualifications & Skills</label>
                <textarea
                  rows="2"
                  placeholder="Mention degree (Diploma/B.Tech), machinery exposure, current CTC, etc."
                  value={candData.skills}
                  onChange={(e) => setCandData({...candData, skills: e.target.value})}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#D3C7B2] text-xs focus:outline-none focus:border-amberGold-600 bg-white/95 text-stone-900 shadow-2xs transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 sm:py-4 rounded-xl bg-cobalt-600 hover:bg-cobalt-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.01] active:scale-[0.99]"
              >
                <Send className="w-4 h-4 text-amberGold-400" />
                <span>Submit Job Application via WhatsApp</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
