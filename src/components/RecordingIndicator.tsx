'use client';

import React from 'react';

interface RecordingIndicatorProps {
  label?: string;
  active?: boolean;
  className?: string;
}

/**
 * RecordingIndicator - Pulsing "recording" style indicator
 * Used for "currently working on" or active status
 */
export const RecordingIndicator: React.FC<RecordingIndicatorProps> = ({
  label = 'NOW',
  active = true,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Pulsing dot */}
      <span
        className={`
          relative w-3 h-3 rounded-full
          ${active ? 'bg-[var(--te-red)]' : 'bg-[var(--te-mid-gray)]'}
        `}
      >
        {active && (
          <span className="absolute inset-0 rounded-full bg-[var(--te-red)] animate-ping opacity-75" />
        )}
      </span>

      {/* Label */}
      <span className="text-xs font-mono uppercase tracking-wider text-[var(--te-light-gray)]">
        {label}
      </span>
    </div>
  );
};

export default RecordingIndicator;
