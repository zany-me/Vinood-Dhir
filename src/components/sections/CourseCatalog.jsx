import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  Plus, 
  Check, 
  Clock, 
  Users, 
  MessageSquare, 
  CheckCircle2, 
  ChevronRight, 
  ArrowLeft,
  GraduationCap,
  Sparkles,
  Layers,
  Award,
  Calculator,
  Trash2,
  ChevronDown,
  ArrowRight,
  Send,
  Eye
} from 'lucide-react';
import { coursesData, courseCategories } from '../../data/coursesData';
import SectionHeading from '../ui/SectionHeading';
import { openWhatsApp, buildCourseInquiry, buildEstimateInquiry } from '../../utils/whatsapp';

const categoryBadges = {
  'iso-auditing': { name: 'ISO & Audits', cls: 'bg-amber-100 text-amber-950 border-amber-300' },
  'core-tools': { name: 'Core Tools', cls: 'bg-blue-100 text-blue-950 border-blue-300' },
  'lean-shopfloor': { name: 'Lean & 5S', cls: 'bg-emerald-100 text-emerald-950 border-emerald-300' },
  'production-quality': { name: 'Quality & COPQ', cls: 'bg-rose-100 text-rose-950 border-rose-300' },
  'leadership': { name: 'Leadership', cls: 'bg-stone-200 text-stone-900 border-stone-300' }
};

// Curated 1-Click Factory Package Presets
const presetPacks = [
  {
    name: "Core Tools Pack (APQP + PPAP)",
    courseIds: [17, 18],
    days: "2 Days",
    fee: "₹30,000",
    badge: "AIAG Compliance",
    description: "AIAG 5-phase APQP, Control Plans & PPAP submission rigor."
  },
  {
    name: "ISO Triple Auditor Pack",
    courseIds: [5, 6, 7],
    days: "3 Days",
    fee: "₹45,000",
    badge: "Certified Lead Auditor",
    description: "Certified Internal Auditor training for ISO 9001, 14001 & 45001."
  },
  {
    name: "Shopfloor 5S & Kaizen Pack",
    courseIds: [19, 20, 22, 23, 25],
    days: "5 Days",
    fee: "₹75,000",
    badge: "OEE & Defect Reduction",
    description: "Kanban, 4M Change, 7 QC Tools, 5S & Poka-Yoke error-proofing."
  }
];

export default function CourseCatalog({ 
  selectedCourses = [], 
  onToggleCourse, 
  onClearAll,
  onRemoveCourse,
  onSelectPreset 
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCourseId, setActiveCourseId] = useState(coursesData[0].id);
  const [mobileView, setMobileView] = useState('list'); // 'list' or 'detail' on mobile
  const [showSelectedDrawer, setShowSelectedDrawer] = useState(false);

  // Totals for Live Estimator
  const totalDays = selectedCourses.reduce((sum, c) => sum + (c.days || 1), 0);
  const totalCost = selectedCourses.reduce((sum, c) => sum + (c.totalCost || 0), 0);

  // Filtered courses based on category chip and search query
  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            course.targetAudience?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Keep active course valid when filter changes
  useEffect(() => {
    if (filteredCourses.length > 0) {
      const exists = filteredCourses.some(c => c.id === activeCourseId);
      if (!exists) {
        setActiveCourseId(filteredCourses[0].id);
      }
    }
  }, [filteredCourses, activeCourseId]);

  const activeCourse = useMemo(() => {
    return coursesData.find(c => c.id === activeCourseId) || filteredCourses[0] || coursesData[0];
  }, [activeCourseId, filteredCourses]);

  const isActiveSelected = selectedCourses.some(c => c.id === activeCourse?.id);
  const activeBadge = activeCourse ? categoryBadges[activeCourse.category] : null;

  const handleApplyPreset = (pack) => {
    const packCourses = coursesData.filter(c => pack.courseIds.includes(c.id));
    if (onSelectPreset) {
      onSelectPreset(packCourses);
    }
  };

  return (
    <section id="catalog" className="py-10 sm:py-20 md:py-24 px-3 sm:px-8 border-b border-[#E7E2D6]/80 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <SectionHeading
          badge="Curriculum & Training Estimator"
          title="29 Specialized Modules &"
          highlight="Live Cost Estimator"
          subtitle="Explore hands-on shopfloor syllabi, load 1-click curated plant packs, and calculate training duration and fees in real time."
        />

        {/* 1. Sleek 1-Click Curated Packs Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amberGold-600" />
              <span className="text-[11px] sm:text-xs font-bold text-stone-800 uppercase tracking-wider">
                1-Click Recommended Curriculum Packages:
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-stone-500 font-medium hidden sm:inline">
              Instant multi-course plant packages
            </span>
          </div>

          {/* 2-Column Grid on Mobile! */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3.5">
            {presetPacks.map((pack, idx) => {
              const isPackLoaded = pack.courseIds.length > 0 && pack.courseIds.every(id => selectedCourses.some(c => c.id === id));
              
              return (
                <div
                  key={idx}
                  className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all flex flex-col justify-between ${
                    isPackLoaded 
                      ? 'bg-[#F2ECE0] border-emerald-600 shadow-md ring-1 ring-emerald-600/30' 
                      : 'bg-[#ECE4D5] border-[#D3C7B2] shadow-2xs sm:shadow-sm hover:border-amberGold-500 hover:bg-[#E6DDCF]'
                  }`}
                >
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h4 className="font-extrabold text-industrial-950 text-xs sm:text-sm line-clamp-1">
                        {pack.name}
                      </h4>
                      <span className="text-[10px] sm:text-[11px] font-black font-mono text-amberGold-950 bg-amberGold-100 px-1.5 py-0.5 rounded border border-amberGold-300 shrink-0 self-start sm:self-auto">
                        {pack.fee}
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-stone-600 leading-relaxed mb-2 sm:mb-3 line-clamp-2">
                      {pack.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pt-1.5 sm:pt-2.5 border-t border-[#D6CAB4]/60">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-stone-700 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amberGold-700" />
                      {pack.days} On-Site
                    </span>
                    <button
                      onClick={() => handleApplyPreset(pack)}
                      className={`inline-flex items-center justify-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all shadow-xs group ${
                        isPackLoaded
                          ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                          : 'bg-industrial-950 hover:bg-stone-800 text-white'
                      }`}
                    >
                      <span>{isPackLoaded ? '✓ Loaded' : 'Load Pack'}</span>
                      {!isPackLoaded && <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:translate-x-0.5 transition-transform" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Top Control Filter Bar: Category Chips & Search Input */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
          
          {/* Category Filter Chips - Clean Swipeable Rail on Phone */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 -mx-3 px-3 sm:mx-0 sm:px-0 sm:flex-wrap">
            {courseCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const title = cat.label.replace(/\s*\(\d+\)$/, '');
              const count = (cat.label.match(/\((\d+)\)/) || [])[1];

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setMobileView('list');
                  }}
                  className={`whitespace-nowrap shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-industrial-950 text-white shadow-xs ring-1 ring-industrial-950'
                      : 'bg-[#ECE4D5] text-stone-800 hover:bg-[#E4D9C7] border border-[#D3C7B2]'
                  }`}
                >
                  <span>{title}</span>
                  {count && (
                    <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full font-bold ${
                      isActive
                        ? 'bg-amberGold-500/25 text-amberGold-300'
                        : 'bg-[#DFD6C3] text-stone-700'
                    }`}>
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search 29 courses by topic..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setMobileView('list');
              }}
              className="w-full pl-9 pr-7 py-2 rounded-full bg-[#ECE4D5] border border-[#D3C7B2] text-xs text-stone-900 placeholder:text-stone-500 focus:outline-none focus:border-amberGold-500 shadow-xs transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs font-bold"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* ========================================================
            3. MASTER-DETAIL EXECUTIVE CONSOLE (Synchronized & Unclipped)
           ======================================================== */}
        <div className="rounded-3xl border border-[#D3C7B2] shadow-md bg-[#ECE4D5] overflow-hidden mb-8">
          
          {/* Console Top Header Bar */}
          <div className="px-5 sm:px-6 py-3 bg-[#181816] text-white flex items-center justify-between border-b border-[#D3C7B2]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amberGold-400">
              <Layers className="w-4 h-4" />
              <span>Plant Training Matrix Console</span>
            </div>
            
            <div className="text-[11px] font-mono text-stone-300">
              Showing <span className="text-white font-bold">{filteredCourses.length}</span> of 29 modules
            </div>
          </div>

          {/* Dual-Pane Grid: Exactly 600px high on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:h-[600px]">
            
            {/* ========================================================
                LEFT RAIL: Course Master List (Cols 1–5)
               ======================================================== */}
            <div className={`lg:col-span-5 flex flex-col min-h-0 border-b lg:border-b-0 lg:border-r border-[#D3C7B2] bg-[#ECE4D5] h-full ${
              mobileView === 'detail' ? 'hidden lg:flex' : 'flex'
            }`}>
              
              {/* Rail Sub-Header */}
              <div className="px-4 py-3 bg-[#E4D9C7] border-b border-[#D3C7B2] flex items-center justify-between text-xs shrink-0">
                <span className="font-bold text-industrial-950 uppercase tracking-wider flex items-center gap-1.5">
                  <span>Select Module</span>
                  <span className="text-[10px] font-normal text-stone-600 font-mono">({filteredCourses.length})</span>
                </span>
                <span className="text-[11px] text-stone-600 font-medium">
                  Click to inspect syllabus
                </span>
              </div>

              {/* Scrollable Course Rows */}
              <div className="overflow-y-auto flex-1 min-h-0 divide-y divide-[#D6CAB4]/70">
                {filteredCourses.length === 0 ? (
                  <div className="p-8 text-center text-stone-600 text-xs">
                    No modules match your search query. Try another keyword or reset category filter.
                  </div>
                ) : (
                  filteredCourses.map((course) => {
                    const isActive = course.id === activeCourse?.id;
                    const isSelected = selectedCourses.some(c => c.id === course.id);
                    const badge = categoryBadges[course.category];

                    return (
                      <div
                        key={course.id}
                        onClick={() => {
                          setActiveCourseId(course.id);
                          setMobileView('detail');
                        }}
                        className={`p-3.5 transition-all cursor-pointer flex items-center justify-between gap-3 group ${
                          isActive
                            ? 'bg-[#FAF0D8] border-l-4 border-l-amberGold-600 shadow-xs'
                            : isSelected
                              ? 'bg-[#F3EBDD] border-l-4 border-l-emerald-600 hover:bg-[#EAE0D0]'
                              : 'hover:bg-[#E5DBCB]/70 border-l-4 border-l-transparent'
                        }`}
                      >
                        {/* Course ID & Title */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                            <span className={`px-1.5 py-0.5 rounded font-mono text-[10px] font-black ${
                              isActive ? 'bg-industrial-950 text-amberGold-400' : 'bg-stone-300 text-stone-800'
                            }`}>
                              #{course.id < 10 ? `0${course.id}` : course.id}
                            </span>

                            {badge && (
                              <span className={`text-[9px] font-bold font-mono px-1.5 py-0.5 rounded border ${badge.cls}`}>
                                {badge.name}
                              </span>
                            )}

                            {isSelected && (
                              <span className="text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300 flex items-center gap-0.5">
                                <Check className="w-2.5 h-2.5" />
                                In Estimate
                              </span>
                            )}

                            {isActive && !isSelected && (
                              <span className="text-[9px] font-bold uppercase tracking-wider text-amberGold-800 bg-amberGold-100 px-1.5 py-0.5 rounded">
                                Viewing
                              </span>
                            )}
                          </div>

                          <h4 className={`text-xs sm:text-sm leading-snug line-clamp-1 transition-colors ${
                            isActive ? 'font-black text-industrial-950 text-amberGold-950' : 'font-bold text-industrial-950 group-hover:text-amberGold-900'
                          }`}>
                            {course.title}
                          </h4>

                          <div className="flex items-center gap-3 mt-1 text-[11px] text-stone-600">
                            <span>{course.days} {course.days > 1 ? 'Days' : 'Day'}</span>
                            <span>•</span>
                            <span className="font-bold text-industrial-950">₹{course.totalCost.toLocaleString('en-IN')}</span>
                          </div>
                        </div>

                        {/* Quick Toggle in Rail */}
                        <div className="flex items-center gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => onToggleCourse && onToggleCourse(course)}
                            className={`p-2 rounded-lg text-xs font-bold transition-all ${
                              isSelected
                                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                                : 'bg-[#FAF5EB] hover:bg-stone-200 text-stone-700 border border-[#D3C7B2]'
                            }`}
                            title={isSelected ? "Remove from estimate" : "Add to estimate"}
                          >
                            {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                          </button>

                          <div className="lg:hidden text-stone-400">
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* ========================================================
                RIGHT PANEL: Live Course Syllabus Inspector (Cols 6–12)
                (Flex Column with Scrollable Body + Fixed Sticky Action Footer)
               ======================================================== */}
            <div className={`lg:col-span-7 flex flex-col min-h-0 bg-[#FAF3E6] h-full overflow-hidden ${
              mobileView === 'list' ? 'hidden lg:flex' : 'flex'
            }`}>
              
              {activeCourse ? (
                <>
                  {/* Scrollable Upper Inspector Content */}
                  <div className="flex-1 min-h-0 overflow-y-auto p-5 sm:p-7 space-y-4">
                    
                    {/* Mobile Back Button */}
                    <div className="lg:hidden mb-2">
                      <button
                        onClick={() => setMobileView('list')}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 hover:text-industrial-950 px-3 py-1.5 rounded-full bg-[#ECE4D5] border border-[#D3C7B2]"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back to All 29 Modules</span>
                      </button>
                    </div>

                    {/* Metadata Strip */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-lg bg-industrial-950 text-amberGold-400 text-xs font-mono font-black border border-industrial-800 shadow-xs">
                          Module #{activeCourse.id < 10 ? `0${activeCourse.id}` : activeCourse.id}
                        </span>
                        {activeBadge && (
                          <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded-md border ${activeBadge.cls}`}>
                            {activeBadge.name}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2.5 text-xs text-stone-800 font-bold bg-[#ECE4D5] px-3 py-1 rounded-full border border-[#D3C7B2]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-amberGold-700" />
                          {activeCourse.days} {activeCourse.days > 1 ? 'Days' : 'Day'} On-Site
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-amberGold-700" />
                          Max {activeCourse.maxParticipants} Attendees
                        </span>
                      </div>
                    </div>

                    {/* Course Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-industrial-950 tracking-tight leading-snug">
                      {activeCourse.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                      {activeCourse.description}
                    </p>

                    {/* Target Audience Pill */}
                    {activeCourse.targetAudience && (
                      <div className="p-3.5 rounded-xl bg-[#ECE4D5] border border-[#D3C7B2] flex items-start gap-2.5">
                        <GraduationCap className="w-4 h-4 text-amberGold-800 shrink-0 mt-0.5" />
                        <div className="text-xs">
                          <span className="font-bold text-industrial-950 block uppercase text-[10px] tracking-wider mb-0.5">
                            Target Factory Audience:
                          </span>
                          <span className="text-stone-800 font-medium leading-relaxed">
                            {activeCourse.targetAudience}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Syllabus Deliverables */}
                    {activeCourse.syllabus && (
                      <div className="pt-2 border-t border-[#D6CAB4]/80">
                        <h5 className="text-[11px] font-extrabold text-industrial-950 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-amberGold-800" />
                          <span>Key Syllabus Learning Deliverables:</span>
                        </h5>
                        <div className="space-y-2">
                          {activeCourse.syllabus.map((item, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-2.5 text-xs text-stone-800">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="leading-relaxed font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Turnkey Package Notice */}
                    {activeCourse.extraServices && (
                      <div className="p-3 rounded-xl bg-amberGold-100/80 border border-amberGold-300 text-xs text-amberGold-950 leading-relaxed">
                        <span className="font-bold">Turnkey Package: </span>
                        {activeCourse.extraServices}
                      </div>
                    )}
                  </div>

                  {/* FIXED UNCLIPPED STICKY BOTTOM ACTION FOOTER */}
                  <div className="p-4 sm:p-5 bg-[#FAF3E6] border-t border-[#D3C7B2] flex flex-wrap items-center justify-between gap-3 shrink-0 shadow-[0_-4px_16px_rgba(0,0,0,0.04)] z-10">
                    <div>
                      <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">
                        Standard Batch Fee:
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-black text-industrial-950 font-mono">
                          ₹{activeCourse.totalCost.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-stone-600 font-medium">/ company batch</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onToggleCourse && onToggleCourse(activeCourse)}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-xs ${
                          isActiveSelected
                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                            : 'bg-industrial-950 hover:bg-stone-800 text-white'
                        }`}
                      >
                        {isActiveSelected ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>In Estimate (Remove)</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            <span>Add to Estimate</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => openWhatsApp(buildCourseInquiry(activeCourse))}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                        title="Inquire directly on WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span className="hidden sm:inline">WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </>
              ) : null}

            </div>

          </div>
        </div>

        {/* ========================================================
            4. UNIFIED LIVE ESTIMATOR DOCK (`#estimator`)
           ======================================================== */}
        <div id="estimator" className="scroll-mt-28">
          {selectedCourses.length === 0 ? (
            /* Empty State Prompt (Clean, Lite) */
            <div className="p-5 rounded-2xl bg-[#ECE4D5] border border-[#D3C7B2] text-center text-xs text-stone-600 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-2.5">
                <Calculator className="w-4 h-4 text-amberGold-700 shrink-0" />
                <span>
                  <strong>Interactive Training Estimator:</strong> Click <strong>"+ Add to Estimate"</strong> on any course above or load a 1-click package to see your live duration & fee schedule.
                </span>
              </div>
              <button
                onClick={() => handleApplyPreset(presetPacks[0])}
                className="text-amberGold-900 font-extrabold hover:underline shrink-0"
              >
                Try Core Tools Pack →
              </button>
            </div>
          ) : (
            /* Active Live Estimator Console (High-Contrast, Clean Architecture) */
            <div className="rounded-2xl sm:rounded-3xl bg-industrial-950 text-white p-4 sm:p-8 border border-slate-800 shadow-xl animate-in fade-in duration-300">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6">
                
                {/* Metrics: 2-Column Grid on Mobile */}
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 sm:gap-8 w-full lg:w-auto">
                  <div className="flex items-center gap-2 sm:gap-3 col-span-2 sm:col-span-1">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-amberGold-500/20 text-amberGold-400 flex items-center justify-center shrink-0 border border-amberGold-500/30">
                      <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase text-slate-400 block font-bold tracking-wider">
                        Training Scope
                      </span>
                      <div className="text-sm sm:text-lg font-black text-white">
                        {selectedCourses.length} {selectedCourses.length > 1 ? 'Modules' : 'Module'}
                      </div>
                    </div>
                  </div>

                  <div className="h-8 w-[1px] bg-slate-800 hidden sm:block" />

                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase text-slate-400 block font-bold tracking-wider">
                      On-Site Duration
                    </span>
                    <div className="text-sm sm:text-lg font-black text-amberGold-400">
                      {totalDays} {totalDays > 1 ? 'Days' : 'Day'}
                    </div>
                  </div>

                  <div className="h-8 w-[1px] bg-slate-800 hidden sm:block" />

                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase text-slate-400 block font-bold tracking-wider">
                      Total Corporate Fee
                    </span>
                    <div className="text-lg sm:text-2xl font-black text-white font-mono">
                      ₹{totalCost.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                {/* Right Action Buttons */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full lg:w-auto justify-between sm:justify-end">
                  {/* View / Edit Selected Items Drawer Toggle */}
                  <button
                    onClick={() => setShowSelectedDrawer(!showSelectedDrawer)}
                    className="px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-full bg-industrial-900 hover:bg-industrial-850 text-slate-300 hover:text-white border border-slate-800 text-[10px] sm:text-xs font-bold transition-all flex items-center gap-1 sm:gap-1.5"
                  >
                    <span>{showSelectedDrawer ? 'Hide Details' : `Selected (${selectedCourses.length})`}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showSelectedDrawer ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Clear All */}
                  <button
                    onClick={onClearAll}
                    className="p-1.5 sm:p-2.5 rounded-full bg-industrial-900 hover:bg-rose-950 text-slate-400 hover:text-rose-400 border border-slate-800 transition-colors"
                    title="Clear All Selected Courses"
                  >
                    <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>

                  {/* WhatsApp Quote Dispatch */}
                  <button
                    onClick={() => openWhatsApp(buildEstimateInquiry(selectedCourses, totalDays, totalCost))}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider transition-all shadow-md active:scale-[0.98]"
                  >
                    <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-200" />
                    <span>WhatsApp Quote</span>
                  </button>
                </div>
              </div>

              {/* Expandable Selected Courses Breakdown Drawer */}
              {showSelectedDrawer && (
                <div className="mt-4 pt-4 sm:mt-6 sm:pt-6 border-t border-slate-800/80 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center justify-between mb-2 sm:mb-3 text-[10px] sm:text-xs text-slate-400">
                    <span className="font-bold uppercase tracking-wider">Breakdown of Selected Courses:</span>
                    <span>Click trash icon to remove</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
                    {selectedCourses.map((c) => (
                      <div
                        key={c.id}
                        className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-industrial-900 border border-slate-800 flex items-center justify-between gap-1.5 sm:gap-3 text-xs"
                      >
                        <div className="flex-1 min-w-0">
                          <span className="font-bold text-slate-200 block truncate text-[11px] sm:text-xs">
                            #{c.id < 10 ? `0${c.id}` : c.id}. {c.title}
                          </span>
                          <span className="text-[9px] sm:text-[11px] text-slate-500">
                            {c.days}D • ₹{c.totalCost.toLocaleString('en-IN')}
                          </span>
                        </div>

                        <button
                          onClick={() => onRemoveCourse && onRemoveCourse(c.id)}
                          className="text-slate-500 hover:text-rose-400 p-0.5 sm:p-1 transition-colors shrink-0"
                          title="Remove item"
                        >
                          <Trash2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
