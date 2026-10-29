import React, { useState } from 'react';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import CinematicScrollExperience from './components/common/CinematicScrollExperience';
import DualPillars from './components/sections/DualPillars';
import AuditMatrix from './components/sections/AuditMatrix';
import CourseCatalog from './components/sections/CourseCatalog';
import AboutLeader from './components/sections/AboutLeader';
import ClientShowcase from './components/sections/ClientShowcase';
import StaffingSection from './components/sections/StaffingSection';
import ContactSection from './components/sections/ContactSection';
import PredictiveArcSignal from './components/originkit/ui/predictive-arc-03';

export default function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  // Check if standalone Originkit preview is requested via URL query (?preview=arc)
  const isArcPreview = typeof window !== 'undefined' && (
    window.location.search.includes('preview=arc') || 
    window.location.search.includes('preview=originkit')
  );

  if (isArcPreview) {
    return (
      <div className="fixed inset-0 w-screen h-screen bg-[#F6F3EC] flex items-center justify-center overflow-hidden">
        <PredictiveArcSignal
          background="#F6F3EC"
          baseColor="#D6CAB6"
          accentColor="#86512B"
          highlight="#382110"
          style={{ width: "100vw", height: "100vh", minWidth: "100vw", minHeight: "100vh" }}
        />
      </div>
    );
  }

  const handleToggleCourse = (course) => {
    setSelectedCourses(prev => {
      const exists = prev.some(c => c.id === course.id);
      if (exists) {
        return prev.filter(c => c.id !== course.id);
      } else {
        return [...prev, course];
      }
    });
  };

  const handleRemoveCourse = (courseId) => {
    setSelectedCourses(prev => prev.filter(c => c.id !== courseId));
  };

  const handleClearAll = () => {
    setSelectedCourses([]);
  };

  const handleSelectPreset = (presetCourses) => {
    setSelectedCourses(presetCourses);
    // Smooth scroll to estimator anchor
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F3EC] text-[#181816] flex flex-col font-sans selection:bg-[#C5A059] selection:text-white">
      {/* 1. Direct Quick Contact Bar */}
      <TopBar />

      {/* 2. Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* 3. Main Content Flow */}
      <main className="flex-1">
        {/* Executive Hero (Includes integrated metrics strip) */}
        <HeroSection />

        {/* Continuous Cinematic Scroll Sequence: Dual Engine Architecture -> Audit Matrix -> Industrial Curriculum & Live Estimator */}
        <CinematicScrollExperience>
          {/* The Modernized Dual Engine Architecture: QMS Audits vs Technical Staffing */}
          <DualPillars />

          {/* Comprehensive Standards & Audit Matrix (With Cards & Matrix Table Toggle) */}
          <AuditMatrix />

          {/* 29 Courses Catalog with Unified Master-Detail Console & Live Estimator Dock */}
          <CourseCatalog
            selectedCourses={selectedCourses}
            onToggleCourse={handleToggleCourse}
            onClearAll={handleClearAll}
            onRemoveCourse={handleRemoveCourse}
            onSelectPreset={handleSelectPreset}
          />
        </CinematicScrollExperience>

        {/* Leader Bio & 34-Year Career Timeline */}
        <AboutLeader />

        {/* Verified Regional Clientele & OEM Ecosystem */}
        <ClientShowcase />

        {/* Dual Portal: Technical Staffing for Employers & Job Seekers */}
        <StaffingSection />

        {/* Direct RFQ & Consultation Section */}
        <ContactSection />
      </main>

      {/* 4. Complete Footer with Regional Terms */}
      <Footer />
    </div>
  );
}
