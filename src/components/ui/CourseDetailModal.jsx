import React from 'react';
import { X, Clock, Users, CheckCircle2, MessageSquare, Plus, Check, ArrowRight } from 'lucide-react';
import { openWhatsApp, buildCourseInquiry } from '../../utils/whatsapp';

export default function CourseDetailModal({ course, isOpen, onClose, onToggleCourse, isSelected }) {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="bg-[#181816] text-white p-6 sm:p-8 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md bg-[#2A2C27] text-[#C5A059] text-xs font-mono font-bold">
                Module #{course.id < 10 ? `0${course.id}` : course.id}
              </span>
              <span className="text-xs text-slate-400 font-medium capitalize">
                {course.category.replace('-', ' ')}
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
              {course.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm">
          {/* Key Parameters Row */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#F6F3EC] border border-[#E7E2D6]">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#787A71] block">Duration:</span>
              <span className="font-bold text-[#181816] flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                {course.days} {course.days > 1 ? (course.days > 30 ? 'Days (Multi-month)' : 'Days') : 'Day'}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#787A71] block">Batch Capacity:</span>
              <span className="font-bold text-[#181816] flex items-center gap-1 mt-0.5">
                <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                Max {course.maxParticipants} Seats
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#787A71] block">Standard Fee:</span>
              <span className="font-extrabold text-[#181816] text-base mt-0.5 block">
                ₹{course.totalCost.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-[#181816] uppercase tracking-wider mb-1.5">
              Course Scope & Objectives
            </h4>
            <p className="text-slate-600 leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Target Audience */}
          {course.targetAudience && (
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">
                Target Audience / Recommended Attendees:
              </span>
              <p className="font-semibold text-slate-800">
                {course.targetAudience}
              </p>
            </div>
          )}

          {/* Detailed Syllabus */}
          {course.syllabus && (
            <div>
              <h4 className="text-xs font-bold text-[#181816] uppercase tracking-wider mb-2.5">
                Curriculum & Key Learning Modules:
              </h4>
              <div className="space-y-2">
                {course.syllabus.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Extra Services Notice if any */}
          {course.extraServices && (
            <div className="p-3.5 rounded-xl bg-amberGold-50 border border-amberGold-200 text-xs text-amberGold-900 leading-relaxed">
              <span className="font-bold block mb-0.5">Extended Retainer Available:</span>
              {course.extraServices}
            </div>
          )}
        </div>

        {/* Modal Actions Footer */}
        <div className="p-4 sm:p-6 bg-[#FAF9F5] border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              if (onToggleCourse) onToggleCourse(course);
            }}
            className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              isSelected
                ? 'bg-amberGold-600 text-white shadow-sm'
                : 'bg-white text-slate-800 hover:bg-slate-100 border border-slate-300'
            }`}
          >
            {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            <span>{isSelected ? "In Your Estimate" : "Add to Estimator"}</span>
          </button>

          <button
            onClick={() => openWhatsApp(buildCourseInquiry(course))}
            className="px-6 py-3 rounded-full bg-[#181816] hover:bg-[#2A2C27] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Inquire on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
