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
 * Hidden in editorial/non-hardware themes via CSS
 */
export const RecordingIndicator: React.FC<RecordingIndicatorProps> = ({
  label = 'NOW',
  active = true,
  className = '',
}) => {
  return (
    <div className={`recording-indicator flex items-center gap-2 ${className}`}>
      {/* Pulsing dot */}
      <span
        className={`
          relative w-3 h-3 rounded-full
          ${active ? 'bg-[var(--accent)]' : 'bg-[var(--muted)]'}
        `}
      >
        {active && (
          <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-ping opacity-75" />
        )}
      </span>

      {/* Label */}
      <span className="text-xs uppercase tracking-wider text-[var(--muted)]">
        {label}
      </span>
    </div>
  );
};

export default RecordingIndicator;
