import React from 'react';

export const ScreenBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
        <pattern id="lcd-grid" width="4" height="4" patternUnits="userSpaceOnUse">
           <rect width="1" height="1" fill="#333" />
        </pattern>
        
        {/* Fill with micro-grid noise */}
        {/* <rect width="100%" height="100%" fill="url(#lcd-grid)" opacity="0.5" /> */}

        {/* Top Status Bar Ghosts */}
        <g transform="translate(40, 30)" fill="#111" fontSize="10" fontFamily="monospace" fontWeight="bold">
           <text x="0" y="0">AVAIL</text>
           <text x="40" y="0">LOC</text>
           <text x="70" y="0">ROLE</text>
           <rect x="0" y="5" width="20" height="8" rx="1" stroke="#111" fill="none" />
           <circle cx="55" cy="9" r="4" stroke="#111" fill="none" />
        </g>

        {/* Right Side Ghosts */}
        <g transform="translate(calc(100% - 150px), 30)" fill="#111">
           <text x="0" y="0" fontSize="10" fontFamily="monospace" fontWeight="bold">EXP</text>
           {/* Big 888 for EXP */}
           <path d="M0 10 h40 v30 h-40 z" fill="#080808" />
           <path d="M50 10 h40 v30 h-40 z" fill="#080808" />
        </g>
        
        {/* Bottom Icons */}
        <g transform="translate(calc(100% - 200px), calc(100% - 40px))" fill="#111">
            <text x="0" y="0" fontSize="10" fontFamily="monospace">FX</text>
            <text x="30" y="0" fontSize="10" fontFamily="monospace">SETUP</text>
            <text x="70" y="0" fontSize="10" fontFamily="monospace">ERASE</text>
        </g>

        {/* Center Ghost Area */}
        <rect x="20%" y="20%" width="60%" height="60%" fill="none" stroke="#080808" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    </div>
  );
};
