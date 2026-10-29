import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const leftLinks = [
    { label: "Audits & ISO", href: "#audits" },
    { label: "Curriculum", href: "#catalog" },
    { label: "Staffing", href: "#staffing" },
  ];

  const rightLinks = [
    { label: "Estimator", href: "#estimator" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const handleScroll = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F6F3EC]/95 backdrop-blur-md border-b border-[#E7E2D6]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 h-16 sm:h-24 flex items-center justify-between">
        
        {/* Left: Minimal Text Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {leftLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(link.href);
              }}
              className="font-sans text-xs sm:text-sm font-semibold text-[#2E302B] hover:text-[#C5A059] tracking-wide transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Center: Stacked Architectural Wordmark */}
        <a 
          href="#overview" 
          onClick={(e) => {
            e.preventDefault();
            handleScroll("#overview");
          }}
          className="flex flex-col items-center text-center group cursor-pointer"
        >
          <span className="font-sans text-base sm:text-lg font-black tracking-tight text-[#181816] leading-none group-hover:text-[#C5A059] transition-colors">
            VINOOD DHIR
          </span>
          <span className="text-[9px] sm:text-[10px] font-sans font-extrabold tracking-loose-tracked text-[#7D7F77] uppercase mt-1">
            CONSULTANCY
          </span>
        </a>

        {/* Right: Secondary Links & Minimalist 2-line Toggle */}
        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex items-center gap-8">
            {rightLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link.href);
                }}
                className="font-sans text-xs sm:text-sm font-semibold text-[#2E302B] hover:text-[#C5A059] tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#contact");
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#232521] text-xs font-sans font-semibold tracking-subtle-tracked uppercase text-[#181816] hover:bg-[#181816] hover:text-white transition-all"
          >
            <span>Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Minimal 2-Line Menu Icon (Visible only on mobile/tablet) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className={`w-6 h-[1.5px] bg-[#181816] transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
            <span className={`w-6 h-[1.5px] bg-[#181816] transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F6F3EC] border-b border-[#E7E2D6] px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4 text-center">
            {[...leftLinks, ...rightLinks].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link.href);
                }}
                className="font-sans text-sm sm:text-base font-bold text-[#181816] hover:text-[#C5A059] py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E7E2D6]/80">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("#contact");
                }}
                className="inline-block w-full py-3 rounded-full bg-[#181816] text-[#F6F3EC] font-sans text-xs font-bold uppercase tracking-tracked"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
