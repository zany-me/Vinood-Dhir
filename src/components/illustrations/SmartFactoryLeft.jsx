import React from 'react';

export default function SmartFactoryLeft({ className = "" }) {
  return (
    <div className={`pointer-events-none select-none relative ${className}`}>
      <svg
        viewBox="0 0 340 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
      >
        <defs>
          {/* Subtle gradient fades to blend with #F6F3EC canvas */}
          <linearGradient id="fadeToCenterLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#181816" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#181816" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#181816" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="brassGlowLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#967433" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="laserBeamLeft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0" />
            <stop offset="50%" stopColor="#C5A059" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0" />
          </linearGradient>

          {/* Embedded animations for standalone reliability */}
          <style>{`
            @keyframes armPivot {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(-5deg); }
            }
            @keyframes toolHead {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(8px) rotate(2deg); }
            }
            @keyframes laserSweep {
              0%, 100% { transform: translateY(0px); opacity: 0.3; }
              50% { transform: translateY(45px); opacity: 0.85; }
            }
            @keyframes statusPing {
              0%, 100% { opacity: 0.3; transform: scale(0.9); }
              50% { opacity: 1; transform: scale(1.15); }
            }
            @keyframes conveyorTrack {
              0% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: 32; }
            }
            .animate-arm {
              transform-origin: 90px 240px;
              animation: armPivot 8s ease-in-out infinite;
            }
            .animate-tool {
              transform-origin: 190px 200px;
              animation: toolHead 6s ease-in-out infinite;
            }
            .animate-laser {
              animation: laserSweep 3.5s ease-in-out infinite;
            }
            .animate-ping {
              transform-origin: center;
              animation: statusPing 2.5s ease-in-out infinite;
            }
            .animate-conveyor {
              stroke-dasharray: 6 6;
              animation: conveyorTrack 2s linear infinite;
            }
          `}</style>
        </defs>

        {/* --- 1. ARCHITECTURAL FACTORY FLOOR GRID & PILLARS --- */}
        <g stroke="#DCD5C5" strokeWidth="1" strokeOpacity="0.7">
          {/* Floor perspective grid lines */}
          <line x1="20" y1="420" x2="320" y2="420" />
          <line x1="10" y1="440" x2="330" y2="440" strokeWidth="1.5" stroke="#C8BFA8" />
          <line x1="50" y1="420" x2="10" y2="460" />
          <line x1="130" y1="420" x2="90" y2="460" />
          <line x1="210" y1="420" x2="190" y2="460" />
          <line x1="280" y1="420" x2="280" y2="460" />
          
          {/* Overhead gantry structure */}
          <line x1="40" y1="40" x2="300" y2="40" stroke="#C8BFA8" strokeDasharray="4 4" />
          <line x1="40" y1="60" x2="280" y2="60" stroke="#DCD5C5" />
          <line x1="60" y1="40" x2="60" y2="240" stroke="#DCD5C5" strokeDasharray="3 3" />
        </g>

        {/* --- 2. AUTOMATED PRODUCTION CELL & DIE-CASTING GANTRY --- */}
        {/* Foundation Machine Base */}
        <rect x="40" y="270" width="120" height="150" rx="4" fill="#EFEAE0" stroke="#8E9086" strokeWidth="1.5" />
        <rect x="52" y="290" width="96" height="50" rx="3" fill="#DFD8C8" stroke="#A6A89E" strokeWidth="1" />
        
        {/* Digital Telemetry Readout on Machine */}
        <rect x="58" y="298" width="84" height="34" rx="2" fill="#181816" />
        <text x="64" y="312" fill="#10B981" fontSize="7" fontFamily="monospace" fontWeight="bold">OP-CELL: 01</text>
        <text x="64" y="323" fill="#C5A059" fontSize="6.5" fontFamily="monospace">OEE: 94.8%</text>

        {/* Status Beacon on Base */}
        <circle cx="145" cy="280" r="4" fill="#10B981" className="animate-ping" />
        <circle cx="145" cy="280" r="8" stroke="#10B981" strokeWidth="0.8" opacity="0.4" className="animate-ping" />

        {/* --- 3. ARTICULATED ROBOTIC MACHINING ARM (Animated) --- */}
        <g className="animate-arm">
          {/* Main Turret Base */}
          <circle cx="90" cy="240" r="22" fill="#E4DDD0" stroke="#6D7068" strokeWidth="2" />
          <circle cx="90" cy="240" r="10" fill="#181816" />
          <circle cx="90" cy="240" r="4" fill="#C5A059" />

          {/* Lower Arm Boom */}
          <path d="M85 240 L120 130 L136 135 L100 242 Z" fill="#D5CDBC" stroke="#5D6058" strokeWidth="1.5" />
          
          {/* Mid Elbow Joint */}
          <circle cx="128" cy="132" r="14" fill="#E4DDD0" stroke="#6D7068" strokeWidth="1.5" />
          <circle cx="128" cy="132" r="5" fill="#181816" />

          {/* Upper Forearm & Tool Head (Nested motion) */}
          <g className="animate-tool">
            <path d="M128 132 L205 155 L200 168 L124 142 Z" fill="#C8BFAC" stroke="#5D6058" strokeWidth="1.5" />
            
            {/* Precision Wrist Actuator */}
            <circle cx="202" cy="162" r="9" fill="#181816" stroke="#C5A059" strokeWidth="1.5" />
            
            {/* End Effector Tool (5-Axis Spindle/Laser Nozzle) */}
            <path d="M202 162 L225 185 L220 190 L198 168 Z" fill="#6D7068" />
            <polygon points="225,185 236,196 230,202 220,190" fill="#181816" stroke="#C5A059" strokeWidth="1" />

            {/* Precision Laser Scanning Beam */}
            <polygon points="233,199 210,270 260,270" fill="url(#laserBeamLeft)" className="animate-laser" />
            
            {/* High-intensity focal laser point */}
            <circle cx="235" cy="270" r="3" fill="#C5A059" className="animate-ping" />
          </g>
        </g>

        {/* --- 4. CONVEYOR TRACK WITH WORKPIECE (Die Cast Component) --- */}
        {/* Conveyor Bed */}
        <line x1="160" y1="270" x2="310" y2="270" stroke="#52554E" strokeWidth="3" />
        <line x1="160" y1="274" x2="310" y2="274" stroke="#8E9086" strokeWidth="2" className="animate-conveyor" />
        
        {/* Stanchion legs */}
        <line x1="180" y1="274" x2="180" y2="420" stroke="#A6A89E" strokeWidth="2" />
        <line x1="260" y1="274" x2="260" y2="420" stroke="#A6A89E" strokeWidth="2" />

        {/* Machined Precision Component on Conveyor (Aluminium Die Cast Housing) */}
        <g transform="translate(210, 246)">
          <rect x="0" y="0" width="46" height="24" rx="2" fill="#FAF8F5" stroke="#4A4C46" strokeWidth="1.5" />
          <circle cx="14" cy="12" r="5" fill="#E4DDD0" stroke="#6D7068" />
          <circle cx="32" cy="12" r="4" fill="#C5A059" stroke="#6D7068" />
          {/* Quality verification tick marker */}
          <path d="M38 4 L41 7 L46 2" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" />
        </g>

        {/* --- 5. AUTOMATED GUIDED VEHICLE (AGV) ON SHOPFLOOR --- */}
        <g transform="translate(140, 390)">
          <rect x="0" y="0" width="70" height="22" rx="4" fill="#181816" stroke="#C5A059" strokeWidth="1" />
          <circle cx="14" cy="22" r="4" fill="#52554E" />
          <circle cx="56" cy="22" r="4" fill="#52554E" />
          <line x1="12" y1="11" x2="35" y2="11" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
          <text x="42" y="14" fill="#FAF8F5" fontSize="6" fontFamily="sans-serif" fontWeight="bold">AGV-04</text>
        </g>

        {/* Floating Telemetry Coordinates */}
        <text x="30" y="110" fill="#A8A497" fontSize="8" fontFamily="monospace">X: 412.08 mm</text>
        <text x="30" y="122" fill="#A8A497" fontSize="8" fontFamily="monospace">Y: 884.15 mm</text>
        <text x="30" y="134" fill="#C5A059" fontSize="8" fontFamily="monospace">ISO: 9001 VERIFIED</text>
      </svg>
    </div>
  );
}
