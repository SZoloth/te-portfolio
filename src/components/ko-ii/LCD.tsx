import React from 'react';

// Color Palette
const COLORS = {
  off: '#1a1a1a', // Dark grey for "ghost" segments
  white: '#E0E0E0', 
  orange: '#FF5700', // TE Orange
  blue: '#0091FF',   // TE Blue
  green: '#00FF84',  // TE Green
  red: '#FF003C',    // TE Red
};

interface LCDTextProps {
  text: string;
  active?: boolean;
  color?: keyof typeof COLORS | 'white';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
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
    ? (color === 'white' ? COLORS.white : COLORS[color as keyof typeof COLORS] || COLORS.orange)
    : COLORS.off;
  
  // Dynamic shadow color based on prop
  const shadowColor = active ? textColor : 'transparent';
  
  const textShadow = (active && glow)
    ? `0 0 10px ${shadowColor}80` // 50% opacity hex
    : 'none';

  const sizeClasses = {
    xs: 'text-[10px]',
    sm: 'text-xs',
    md: 'text-base',
    lg: 'text-2xl',
    xl: 'text-4xl',
    hero: 'text-6xl md:text-8xl',
  };

  return (
    <span 
      className={`font-mono font-bold tracking-widest uppercase leading-none ${sizeClasses[size]} ${className}`}
      style={{ 
        color: textColor,
        textShadow: textShadow,
      }}
    >
      {text}
    </span>
  );
};
