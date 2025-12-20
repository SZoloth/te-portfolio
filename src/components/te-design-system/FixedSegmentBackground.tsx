'use client';

import React from 'react';

export const FixedSegmentBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-10 select-none">
      {/* Grid of "ghost" segments mimicking the fixed LCD display */}
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="segment-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M10 10h20v20h-20z" fill="none" stroke="#333" strokeWidth="1" />
            <circle cx="20" cy="20" r="2" fill="#333" />
          </pattern>
        </defs>
        
        {/* Background Grid Pattern */}
        <rect width="100%" height="100%" fill="url(#segment-grid)" />
        
        {/* Scattered "Ghost" Icons (mimicking the KO II display) */}
        {/* Left grouping */}
        <g transform="translate(20, 60)" fill="#333">
           <rect x="0" y="0" width="30" height="20" rx="2" />
           <rect x="0" y="25" width="30" height="20" rx="2" />
           <rect x="0" y="50" width="30" height="20" rx="2" />
           <text x="5" y="15" fontFamily="monospace" fontSize="10" fill="#222">A</text>
        </g>

        {/* Top right grouping */}
        <g transform="translate(calc(100% - 100px), 40)" fill="#333">
           <path d="M0 0h60v30h-60z" fill="none" stroke="#333" strokeWidth="2" />
           <text x="10" y="20" fontFamily="monospace" fontSize="12" fill="#333">BPM</text>
        </g>
        
        {/* Random scattered elements */}
        <circle cx="50%" cy="50%" r="100" stroke="#222" strokeWidth="1" fill="none" />
        <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#222" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );
};
