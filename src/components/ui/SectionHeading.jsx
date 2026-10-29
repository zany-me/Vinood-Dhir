import React from 'react';

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
  dark = false
}) {
  const isCenter = align === 'center';
  
  return (
    <div className={`mb-6 sm:mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        <span className={`inline-flex items-center gap-1.5 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-tracked mb-2 sm:mb-3.5 ${
          dark 
            ? 'bg-brass-500/15 text-brass-400 border border-brass-500/30' 
            : 'bg-amberGold-50 text-amberGold-800 border border-amberGold-200/80 shadow-xs'
        }`}>
          {badge}
        </span>
      )}
      
      <h2 className={`text-2xl sm:text-3.5xl lg:text-4.5xl font-extrabold tracking-tight leading-tight sm:leading-[1.2] ${
        dark ? 'text-white' : 'text-industrial-950'
      }`}>
        {title}{' '}
        {highlight && (
          <span className="text-amberGold-600 dark:text-brass-400">
            {highlight}
          </span>
        )}
      </h2>
      
      {subtitle && (
        <p className={`mt-2 sm:mt-4 text-xs sm:text-base md:text-lg leading-relaxed font-normal ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
