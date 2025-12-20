import React from 'react';

interface IconProps {
  className?: string;
  color?: string;
}

export const Icons = {
  Home: ({ className = '', color = 'currentColor' }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="2" strokeLinecap="square">
      <path d="M4 10L12 2L20 10V20H14V14H10V20H4V10Z" />
    </svg>
  ),
  Work: ({ className = '', color = 'currentColor' }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="2" strokeLinecap="square">
       <rect x="2" y="7" width="20" height="14" rx="2" />
       <path d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21" />
       <line x1="2" y1="12" x2="22" y2="12" />
    </svg>
  ),
  User: ({ className = '', color = 'currentColor' }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="2" strokeLinecap="square">
      <circle cx="12" cy="7" r="4" />
      <path d="M4 21V17C4 15.3431 5.34315 14 7 14H17C18.6569 14 20 15.3431 20 17V21" />
    </svg>
  ),
  Mail: ({ className = '', color = 'currentColor' }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="2" strokeLinecap="square">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 6L12 13L22 6" />
    </svg>
  ),
  Grid: ({ className = '', color = 'currentColor' }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="2" strokeLinecap="square">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  Wave: ({ className = '', color = 'currentColor' }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="2" strokeLinecap="square">
       <path d="M2 12C2 12 5 2 8 2C11 2 13 22 16 22C19 22 22 12 22 12" />
    </svg>
  ),
};
