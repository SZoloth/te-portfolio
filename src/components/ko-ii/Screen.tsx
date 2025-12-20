import React from 'react';
import { ScreenBackground } from './ScreenBackground';
import { GroupSelector } from './GroupSelector';

interface ScreenProps {
  children: React.ReactNode;
  header?: React.ReactNode;
}

export const Screen: React.FC<ScreenProps> = ({ children, header }) => {
  return (
    <div className="relative flex-1 bg-black rounded-[2px] overflow-hidden flex flex-col shadow-[inset_0_0_30px_rgba(0,0,0,1)] border-8 border-[#111]">
      {/* Glare/Reflection */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-50 mix-blend-overlay opacity-30" />
      
      {/* Ghost Segments */}
      <ScreenBackground />

      {/* Active Layer */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row flex-1 p-4 md:p-6 gap-4 md:gap-6 h-full overflow-hidden">
        
        {/* Navigation Groups (Bottom on Mobile, Left on Desktop) */}
        <div className="flex md:flex-col justify-center items-center border-t md:border-t-0 md:border-r border-[#1a1a1a] pt-4 md:pt-0 md:pr-6 shrink-0">
           <GroupSelector />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
           {/* Top Status Bar (passed as header) */}
           {header && (
             <div className="flex justify-between items-start mb-4 md:mb-6 border-b border-[#1a1a1a] pb-4 shrink-0">
               {header}
             </div>
           )}
           
           {/* Scrollable Content */}
           <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide text-[#E0E0E0]">
             {children}
           </div>
        </div>
      </div>
    </div>
  );
};
