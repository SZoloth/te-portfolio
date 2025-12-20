import React from 'react';

interface HardwareButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'round' | 'rect' | 'pill';
  color?: 'orange' | 'blue' | 'white' | 'gray' | 'dark';
  active?: boolean;
  led?: boolean;
  label?: string;
  subLabel?: string;
}

const COLORS = {
  orange: 'bg-[var(--te-orange)]',
  blue: 'bg-[var(--te-blue)]',
  white: 'bg-[var(--te-white)]',
  gray: 'bg-[var(--te-light-gray)]',
  dark: 'bg-[var(--te-mid-gray)]',
};

const TEXT_COLORS = {
  orange: 'text-black',
  blue: 'text-white',
  white: 'text-black',
  gray: 'text-black',
  dark: 'text-white',
};

export const HardwareButton: React.FC<HardwareButtonProps> = ({
  variant = 'round',
  color = 'dark',
  active = false,
  led = false,
  label,
  subLabel,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = `
    relative flex items-center justify-center
    transition-all duration-100 ease-out
    active:scale-95 active:shadow-inner
    border-none outline-none
    ${active ? 'translate-y-[1px] shadow-inner brightness-110' : 'shadow-lg hover:brightness-110'}
  `;

  const shapeStyles = {
    round: 'rounded-full w-10 h-10',
    rect: 'rounded-sm w-12 h-10',
    pill: 'rounded-full w-16 h-8',
  };

  const bgClass = active ? COLORS[color] : (color === 'orange' || color === 'blue' ? COLORS[color] : 'bg-[#333]'); // Darken inactive unless colorful
  
  // Use specific coloring logic:
  // If active, use the bright color.
  // If inactive, use a dark grey "plastic" color, unless it's a colored key cap.
  const buttonColorClass = active 
    ? COLORS[color] 
    : (color === 'dark' || color === 'gray' ? 'bg-[#2a2a2a]' : COLORS[color]);

  const textColorClass = active ? TEXT_COLORS[color] : 'text-[var(--muted)]';

  return (
    <div className="flex flex-col items-center gap-1">
      <button
        className={`${baseStyles} ${shapeStyles[variant]} ${buttonColorClass} ${className}`}
        {...props}
      >
        {/* Physical bevel/highlight effect */}
        <div className="absolute inset-0 rounded-[inherit] ring-1 ring-white/10 ring-inset" />
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent rounded-b-[inherit]" />

        {/* Content */}
        <span className={`z-10 text-xs font-bold font-mono ${active ? TEXT_COLORS[color] : (color === 'dark' ? 'text-gray-400' : 'text-black/80')}`}>
          {children}
        </span>

        {/* Integrated LED */}
        {led && (
          <div 
            className={`
              absolute top-1 right-1 w-1.5 h-1.5 rounded-full 
              ${active ? 'bg-[var(--te-orange)] shadow-[0_0_4px_var(--te-orange)]' : 'bg-black/50'}
            `} 
          />
        )}
      </button>
      
      {/* Labels printed on the "chassis" below the button */}
      {(label || subLabel) && (
        <div className="flex flex-col items-center leading-none">
          {label && <span className="text-[10px] font-bold text-[var(--muted)] tracking-wider uppercase">{label}</span>}
          {subLabel && <span className="text-[8px] font-mono text-[var(--muted)]/60 uppercase">{subLabel}</span>}
        </div>
      )}
    </div>
  );
};
