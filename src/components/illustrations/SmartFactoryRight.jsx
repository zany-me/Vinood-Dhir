import React from 'react';

export default function SmartFactoryRight({ className = "" }) {
  return (
    <div className={`pointer-events-none select-none relative ${className}`}>
      <svg
        viewBox="0 0 340 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
      >
        <defs>
          {/* Subtle gradient fades to blend toward center */}
          <linearGradient id="fadeToCenterRight" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#181816" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#181816" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#181816" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="cmmBeamRight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="brassGaugeRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8E7032" stopOpacity="0.3" />
          </linearGradient>

          <style>{`
            @keyframes cmmProbeMove {
              0%, 100% { transform: translateY(0px) translateX(0px); }
              33% { transform: translateY(18px) translateX(-6px); }
              66% { transform: translateY(8px) translateX(10px); }
            }
            @keyframes scanLaserVertical {
              0%, 100% { transform: translateY(0px); opacity: 0.2; }
              50% { transform: translateY(60px); opacity: 0.9; }
            }
            @keyframes greenPing {
              0%, 100% { opacity: 0.3; transform: scale(0.9); }
              50% { opacity: 1; transform: scale(1.15); }
            }
            @keyframes dialRotate {
              0% { transform: rotate(0deg); }
              50% { transform: rotate(70deg); }
              100% { transform: rotate(0deg); }
            }
            @keyframes dataStream {
              0% { stroke-dashoffset: 24; }
              100% { stroke-dashoffset: 0; }
            }
            .animate-probe {
              animation: cmmProbeMove 7s ease-in-out infinite;
            }
            .animate-cmm-laser {
              animation: scanLaserVertical 4s ease-in-out infinite;
            }
            .animate-green-pulse {
              transform-origin: center;
              animation: greenPing 2.5s ease-in-out infinite;
            }
            .animate-dial {
              transform-origin: 220px 210px;
              animation: dialRotate 9s ease-in-out infinite;
            }
            .animate-stream {
              stroke-dasharray: 4 4;
              animation: dataStream 1.5s linear infinite;
            }
          `}</style>
        </defs>

        {/* --- 1. ARCHITECTURAL METROLOGY LAB ENVIRONMENT --- */}
        <g stroke="#DCD5C5" strokeWidth="1" strokeOpacity="0.7">
          {/* High precision anti-vibration floor grid */}
          <line x1="20" y1="420" x2="320" y2="420" />
          <line x1="10" y1="440" x2="330" y2="440" strokeWidth="1.5" stroke="#C8BFA8" />
          <line x1="60" y1="420" x2="60" y2="460" />
          <line x1="130" y1="420" x2="150" y2="460" />
          <line x1="210" y1="420" x2="250" y2="460" />
          <line x1="290" y1="420" x2="330" y2="460" />
          
          {/* Cleanroom ceiling filtration bay */}
          <line x1="40" y1="40" x2="300" y2="40" stroke="#C8BFA8" strokeDasharray="4 4" />
          <line x1="60" y1="60" x2="300" y2="60" stroke="#DCD5C5" />
          <line x1="280" y1="40" x2="280" y2="240" stroke="#DCD5C5" strokeDasharray="3 3" />
        </g>

        {/* --- 2. CMM (COORDINATE MEASURING MACHINE) GANTRY BRIDGE --- */}
        {/* Granite Surface Plate Foundation */}
        <rect x="70" y="320" width="200" height="100" rx="4" fill="#E8E2D4" stroke="#6D7068" strokeWidth="2" />
        <rect x="85" y="335" width="170" height="70" rx="2" fill="#D9D2C2" stroke="#9C9E94" strokeWidth="1" />

        {/* Gantry Dual Vertical Columns */}
        <rect x="75" y="100" width="20" height="220" rx="3" fill="#DFD8C8" stroke="#5D6058" strokeWidth="1.5" />
        <rect x="245" y="100" width="20" height="220" rx="3" fill="#DFD8C8" stroke="#5D6058" strokeWidth="1.5" />
        
        {/* Top Horizontal Traverse Cross-Beam */}
        <rect x="70" y="90" width="200" height="24" rx="3" fill="#C8BFAC" stroke="#5D6058" strokeWidth="1.5" />
        <line x1="90" y1="102" x2="250" y2="102" stroke="#181816" strokeWidth="2" />

        {/* --- 3. PRECISION MEASUREMENT PROBE CARRIAGE (Animated) --- */}
        <g className="animate-probe">
          {/* X-Axis Carriage Block */}
          <rect x="150" y="95" width="40" height="30" rx="3" fill="#181816" stroke="#C5A059" strokeWidth="1.2" />
          
          {/* Vertical Z-Axis Quill Spindle */}
          <rect x="166" y="125" width="8" height="90" fill="#EFEAE0" stroke="#4A4C46" strokeWidth="1.5" />
          <line x1="170" y1="125" x2="170" y2="215" stroke="#C5A059" strokeWidth="1" strokeDasharray="3 3" />

          {/* Motorized Renishaw-Style Probe Head */}
          <circle cx="170" cy="220" r="10" fill="#181816" stroke="#C5A059" strokeWidth="1.5" />
          
          {/* Ruby Styli Stylus Tip */}
          <line x1="170" y1="230" x2="170" y2="255" stroke="#8E9086" strokeWidth="1.5" />
          <circle cx="170" cy="256" r="3" fill="#DC2626" /> {/* Precision Ruby Ball */}

          {/* Optical Laser Metrology Beam */}
          <polygon points="170,256 140,335 200,335" fill="url(#cmmBeamRight)" className="animate-cmm-laser" />
        </g>

        {/* --- 4. PRECISION WORKPIECE UNDER TEST (Crankcase/Housing) --- */}
        <g transform="translate(140, 310)">
          {/* Machined Workpiece */}
          <rect x="0" y="0" width="60" height="30" rx="3" fill="#FAF8F5" stroke="#181816" strokeWidth="1.8" />
          <circle cx="18" cy="15" r="7" fill="#EFEAE0" stroke="#4A4C46" strokeWidth="1.2" />
          <circle cx="42" cy="15" r="5" fill="#EFEAE0" stroke="#4A4C46" strokeWidth="1.2" />
          
          {/* Dynamic Metrology Target Crosshair */}
          <circle cx="18" cy="15" r="11" stroke="#10B981" strokeWidth="0.8" strokeDasharray="2 2" />
          <circle cx="18" cy="15" r="2" fill="#10B981" className="animate-green-pulse" />
        </g>

        {/* --- 5. TIER-1 QUALITY AUDIT READOUT & DIAL PANEL --- */}
        <g transform="translate(195, 170)">
          {/* Digital Inspection Display Panel */}
          <rect x="0" y="0" width="105" height="75" rx="5" fill="#181816" stroke="#C5A059" strokeWidth="1.2" />
          
          {/* Header */}
          <rect x="0" y="0" width="105" height="18" rx="4" fill="#242621" />
          <text x="8" y="13" fill="#C5A059" fontSize="7.5" fontFamily="monospace" fontWeight="bold">IATF 16949 AUDIT</text>
          
          {/* Live Metric Data */}
          <text x="8" y="32" fill="#FAF8F5" fontSize="7" fontFamily="monospace">TOLERANCE: ±0.002mm</text>
          <text x="8" y="44" fill="#10B981" fontSize="7" fontFamily="monospace" fontWeight="bold">Cp / Cpk: 1.84 [PASS]</text>
          <text x="8" y="56" fill="#A8A497" fontSize="6.5" fontFamily="monospace">STATUS: MACE GREEN</text>
          
          {/* Pulsing Inspection Beacon */}
          <circle cx="92" cy="62" r="4" fill="#10B981" className="animate-green-pulse" />
          <circle cx="92" cy="62" r="8" stroke="#10B981" strokeWidth="0.8" opacity="0.4" className="animate-green-pulse" />
        </g>

        {/* Telemetry Stream Connection Line */}
        <path d="M195 200 L170 200" stroke="#10B981" strokeWidth="1" className="animate-stream" />

        {/* Overhead Coordinates */}
        <text x="210" y="75" fill="#A8A497" fontSize="8" fontFamily="monospace">CMM ACCURACY: 0.9µm</text>
        <text x="210" y="87" fill="#C5A059" fontSize="8" fontFamily="monospace">VDA 6.3: CLASS A (96%)</text>
      </svg>
    </div>
  );
}
