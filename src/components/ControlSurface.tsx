'use client';

import React from 'react';
import { FixedSegmentBackground } from './te-design-system/FixedSegmentBackground';

interface ControlSurfaceProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  sidebar?: React.ReactNode;
}

/**
 * ControlSurface - EP-133 K.O. II Hardware Simulation
 * Features a light grey chassis, distinctive knobs, and a glossy fixed-segment display.
 */
export const ControlSurface: React.FC<ControlSurfaceProps> = ({
  children,
  header,
  footer,
  sidebar,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#dcdcdc] p-4 md:p-8 font-mono select-none">
      {/* The Device Chassis */}
      <div className="relative w-full max-w-5xl bg-[#e3e3e3] shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-sm p-3 ring-1 ring-white/40">
        
        {/* Hardware Controls (Knobs/Speaker) */}
        <div className="absolute -left-12 top-20 hidden lg:block">
           {/* Volume Knob (White) */}
           <div className="w-16 h-16 rounded-full bg-[#f0f0f0] shadow-[0_5px_10px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(0,0,0,0.1)] flex items-center justify-center transform -rotate-45">
              <div className="w-1.5 h-6 bg-[#333] rounded-full mb-6" />
           </div>
        </div>

        {/* The Display Assembly */}
        <div className="relative bg-black rounded-sm overflow-hidden min-h-[600px] flex flex-col shadow-[inset_0_2px_10px_rgba(255,255,255,0.1),inset_0_-2px_20px_rgba(0,0,0,0.5)] border-4 border-[#111]">
          
          {/* Glass Reflection / Glare */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-50 mix-blend-overlay" />
          
          {/* Ghost Segment Background Layer */}
          <FixedSegmentBackground />

          {/* Active Content Layer */}
          <div className="relative z-10 flex flex-col flex-1 h-full">
            {/* Header (Status Bar) */}
            {header && (
              <header className="px-8 py-6 flex items-start justify-between z-20">
                {header}
              </header>
            )}

            <div className="flex flex-1 overflow-hidden relative z-10">
               {/* Sidebar (Groups A/B/C/D) */}
               {sidebar && (
                 <aside className="pl-6 py-4 flex flex-col gap-6 justify-center">
                   {sidebar}
                 </aside>
               )}

              {/* Main Area */}
              <main className="flex-1 px-8 py-4 overflow-auto scrollbar-hide text-[#E8E8E8]">
                {children}
              </main>
            </div>

            {/* Footer (Transport/Modes) */}
            {footer && (
              <footer className="px-8 py-6 mt-auto z-20">
                {footer}
              </footer>
            )}
          </div>
        </div>
        
        {/* Branding on the case */}
        <div className="absolute bottom-4 right-6 text-[10px] font-bold text-[#999] tracking-[0.2em] uppercase pointer-events-none">
          EP-133 K.O. II
        </div>
      </div>
    </div>
  );
};

export default ControlSurface;
