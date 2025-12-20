import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}

const KoIconBase: React.FC<IconProps> = ({ 
  color = 'currentColor', 
  size = 24, 
  children, 
  className,
  ...props 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="1.5" 
    strokeLinecap="square" 
    strokeLinejoin="miter"
    className={className}
    {...props}
  >
    {children}
  </svg>
);

export const KoIcons = {
  // 1. The Fader (Vertical slider control)
  Fader: (props: IconProps) => (
    <KoIconBase {...props}>
      <path d="M12 20V4" />
      <path d="M4 20V16" opacity="0.5" />
      <path d="M20 20V12" opacity="0.5" />
      <rect x="9" y="12" width="6" height="4" fill={props.color || 'currentColor'} stroke="none" />
      <line x1="8" y1="4" x2="16" y2="4" strokeWidth="1" />
      <line x1="8" y1="20" x2="16" y2="20" strokeWidth="1" />
    </KoIconBase>
  ),

  // 2. The Knob (Potentiometer)
  Knob: (props: IconProps) => (
    <KoIconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 12L12 5" strokeWidth="2" />
      <circle cx="12" cy="12" r="2" fill={props.color || 'currentColor'} stroke="none" />
      {/* Ticks */}
      <path d="M12 2V3" opacity="0.5" />
      <path d="M12 22V21" opacity="0.5" />
      <path d="M22 12H21" opacity="0.5" />
      <path d="M2 12H3" opacity="0.5" />
    </KoIconBase>
  ),

  // 3. The Waveform (Sample/Sound)
  Wave: (props: IconProps) => (
    <KoIconBase {...props}>
      <path d="M2 12C2 12 4 4 7 4C10 4 12 20 15 20C18 20 20 12 22 12" />
      <line x1="2" y1="12" x2="22" y2="12" opacity="0.3" strokeDasharray="2 2" />
    </KoIconBase>
  ),

  // 4. The Envelope (ADSR)
  Envelope: (props: IconProps) => (
    <KoIconBase {...props}>
      <path d="M3 20L7 4L12 12L17 12L21 20" strokeLinejoin="round" />
      <line x1="3" y1="20" x2="21" y2="20" opacity="0.5" />
    </KoIconBase>
  ),

  // 5. The Grid (Pattern/Sequencer)
  Grid: (props: IconProps) => (
    <KoIconBase {...props}>
       <rect x="3" y="3" width="5" height="5" />
       <rect x="10" y="3" width="5" height="5" />
       <rect x="17" y="3" width="5" height="5" />
       
       <rect x="3" y="10" width="5" height="5" />
       <rect x="10" y="10" width="5" height="5" opacity="0.5" />
       <rect x="17" y="10" width="5" height="5" />
       
       <rect x="3" y="17" width="5" height="5" />
       <rect x="10" y="17" width="5" height="5" />
       <rect x="17" y="17" width="5" height="5" />
    </KoIconBase>
  ),

  // 6. The Metronome (Timing)
  Metronome: (props: IconProps) => (
    <KoIconBase {...props}>
       <path d="M12 20V6" />
       <path d="M5 20H19" />
       <path d="M12 6L8 15" strokeDasharray="2 2" opacity="0.5" />
       <path d="M12 6L16 15" />
       <circle cx="12" cy="18" r="1" />
       <path d="M10 3L14 3" />
    </KoIconBase>
  ),

  // 7. The Boxing Glove (K.O.)
  Fist: (props: IconProps) => (
    <KoIconBase {...props}>
       {/* Stylized boxing glove outline */}
       <path d="M6 10C6 7.79086 7.79086 6 10 6H13C15.7614 6 18 8.23858 18 11V14C18 16.7614 15.7614 19 13 19H10C7.79086 19 6 17.2091 6 15V10Z" />
       <path d="M6 11H4C2.89543 11 2 11.8954 2 13V15C2 16.1046 2.89543 17 4 17H6" />
       <path d="M18 12H20" />
       <path d="M18 15H20" />
    </KoIconBase>
  ),

  // 8. Battery (Status)
  Battery: (props: IconProps) => (
    <KoIconBase {...props}>
       <rect x="2" y="7" width="18" height="10" rx="2" />
       <path d="M22 10V14" />
       <path d="M6 10V14" />
       <path d="M10 10V14" />
       <path d="M14 10V14" />
    </KoIconBase>
  ),

  // 9. Input (Mic)
  Mic: (props: IconProps) => (
    <KoIconBase {...props}>
       <rect x="9" y="3" width="6" height="10" rx="3" />
       <path d="M5 11V13C5 16.866 8.13401 20 12 20C15.866 20 19 16.866 19 13V11" />
       <line x1="12" y1="20" x2="12" y2="24" />
       <line x1="8" y1="24" x2="16" y2="24" />
    </KoIconBase>
  ),

  // 10. Play (Transport)
  Play: (props: IconProps) => (
    <KoIconBase {...props}>
       <polygon points="6 4 20 12 6 20 6 4" fill={props.color || 'currentColor'} stroke="none" />
    </KoIconBase>
  ),

  // 11. Stop (Transport)
  Stop: (props: IconProps) => (
    <KoIconBase {...props}>
       <rect x="6" y="6" width="12" height="12" fill={props.color || 'currentColor'} stroke="none" />
    </KoIconBase>
  ),

  // 12. Record (Transport)
  Record: (props: IconProps) => (
    <KoIconBase {...props}>
       <circle cx="12" cy="12" r="8" fill={props.color || 'currentColor'} stroke="none" />
    </KoIconBase>
  ),
  
  // 13. Loop/Cycle
  Loop: (props: IconProps) => (
    <KoIconBase {...props}>
       <path d="M4 12V8C4 5.79086 5.79086 4 8 4H16C18.2091 4 20 5.79086 20 8V16C20 18.2091 18.2091 20 16 20H12" />
       <path d="M10 17L12 20L10 23" />
    </KoIconBase>
  ),

  // 14. MIDI/Connector
  Connector: (props: IconProps) => (
    <KoIconBase {...props}>
       <circle cx="12" cy="12" r="9" />
       <path d="M7 15L17 15" strokeDasharray="1 3" />
       <circle cx="7" cy="9" r="1" fill="currentColor" stroke="none" />
       <circle cx="17" cy="9" r="1" fill="currentColor" stroke="none" />
       <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
    </KoIconBase>
  ),
  
  // 15. The "Smile" (User/Happy) - TE often has faces
  Face: (props: IconProps) => (
    <KoIconBase {...props}>
       <rect x="3" y="3" width="18" height="18" rx="2" />
       <circle cx="8" cy="9" r="1" fill="currentColor" stroke="none" />
       <circle cx="16" cy="9" r="1" fill="currentColor" stroke="none" />
       <path d="M8 14C8 14 10 16 12 16C14 16 16 14 16 14" />
    </KoIconBase>
  ),
};
