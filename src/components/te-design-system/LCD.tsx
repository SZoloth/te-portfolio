import React from 'react';

// Color Palette based on EP-133 KO II
const COLORS = {
  off: '#282828', // Dark grey for "ghost" segments
  on: '#FF6B00',  // The iconic TE Orange
  white: '#E8E8E8', // For secondary info
  bg: '#050505',  // Deep black
};

interface LCDTextProps {
  text: string;
  active?: boolean;
  color?: 'orange' | 'white';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  glow?: boolean;
}

export const LCDText: React.FC<LCDTextProps> = ({
  text,
  active = true,
  color = 'orange',
  size = 'md',
  className = '',
  glow = true,
}) => {
  const textColor = active 
    ? (color === 'orange' ? COLORS.on : COLORS.white) 
    : COLORS.off;
  
  const textShadow = (active && glow)
    ? `0 0 8px ${color === 'orange' ? 'rgba(255, 107, 0, 0.6)' : 'rgba(232, 232, 232, 0.4)'}`
    : 'none';

  const sizeClasses = {
    xs: 'text-[10px]',
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-xl',
    xl: 'text-4xl',
  };

  return (
    <span 
      className={`font-mono font-bold tracking-widest uppercase ${sizeClasses[size]} ${className}`}
      style={{ 
        color: textColor,
        textShadow: textShadow,
      }}
    >
      {text}
    </span>
  );
};

interface LCDSegmentGroupProps {
  label: string; // e.g. "A"
  description?: string; // e.g. "HOME"
  active: boolean;
  onClick?: () => void;
}

export const LCDSegmentGroup: React.FC<LCDSegmentGroupProps> = ({
  label,
  description,
  active,
  onClick
}) => {
  return (
    <div 
      onClick={onClick}
      className="flex items-center gap-3 cursor-pointer group select-none"
    >
      {/* The Group Box (A/B/C/D) */}
      <div className="relative">
        {/* Ghost Box (Always visible as faint outline) */}
        <div className="absolute inset-0 border-2 border-[#222] rounded-[1px]" />
        
        {/* Active Box */}
        <div 
          className={`
            relative w-8 h-8 flex items-center justify-center
            border-2 rounded-[1px] transition-all duration-100
            ${active 
              ? 'border-[#FF6B00] bg-[#FF6B00] text-black shadow-[0_0_15px_rgba(255,107,0,0.6)]' 
              : 'border-transparent text-[#222] group-hover:border-[#333]'
            }
          `}
        >
          <span className={`font-mono font-bold text-lg ${active ? 'text-black' : 'text-[#222]'}`}>
            {label}
          </span>
        </div>
      </div>

      {/* Description Label */}
      {description && (
        <LCDText 
          text={description} 
          active={active} 
          color="white" 
          size="xs"
          className="hidden md:block" // Hide text on very small screens to keep it iconic
        />
      )}
    </div>
  );
};
