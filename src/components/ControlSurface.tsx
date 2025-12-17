'use client';

import React from 'react';

interface ControlSurfaceProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

/**
 * ControlSurface - Main layout wrapper styled like a TE hardware interface
 * Provides the device frame aesthetic with header/footer chrome
 */
export const ControlSurface: React.FC<ControlSurfaceProps> = ({
  children,
  header,
  footer,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Top chrome - product branding area */}
      {header && (
        <header className="border-b border-[var(--te-mid-gray)] px-6 py-4">
          {header}
        </header>
      )}

      {/* Main display area */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>

      {/* Bottom chrome - transport/status area */}
      {footer && (
        <footer className="border-t border-[var(--te-mid-gray)] px-6 py-3">
          {footer}
        </footer>
      )}
    </div>
  );
};

export default ControlSurface;
