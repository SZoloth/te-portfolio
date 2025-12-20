import React from 'react';

export const Screw: React.FC<{ className?: string, rotation?: number }> = ({ className = '', rotation = 0 }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    style={{ transform: `rotate(${rotation}deg)` }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" className="fill-[var(--te-mid-gray)] opacity-40" />
    <path
      d="M8 8L16 16M16 8L8 16"
      stroke="var(--background)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
