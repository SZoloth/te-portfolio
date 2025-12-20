import React from 'react';

interface DeviceProps {
  children: React.ReactNode;
  className?: string;
}

export const Device: React.FC<DeviceProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen w-full bg-[#111] md:bg-[#dcdcdc] flex items-center justify-center p-0 md:p-8 ${className}`}>
      {/* The EP-133 Unit - Hidden chrome on mobile for full screen app feel */}
      <div 
        className="
          relative w-full md:max-w-[1000px] md:aspect-[16/10] h-screen md:h-auto
          bg-black md:bg-[#e3e3e3] md:rounded-[4px] md:shadow-2xl
          flex flex-col p-0 md:p-6 gap-0 md:gap-6
          md:border-b-4 md:border-[#c0c0c0]
        "
      >
        {/* Top Branding / Speaker Area - Desktop Only */}
        <div className="hidden md:flex justify-between items-start px-2">
           <div className="flex flex-col gap-1">
             <div className="flex gap-2">
                {/* Speaker Grill Holes */}
                <div className="grid grid-cols-4 gap-1">
                   {[...Array(16)].map((_, i) => (
                     <div key={i} className="w-1 h-1 rounded-full bg-[#bbb] shadow-inner" />
                   ))}
                </div>
             </div>
           </div>
           
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f0f0f0] border border-[#d0d0d0] shadow-md flex items-center justify-center">
                 <div className="w-1 h-5 bg-[#333] rounded-full" />
              </div>
              <div className="text-[10px] font-bold text-[#999] tracking-[0.2em] uppercase">
                EP-133 K.O. II
              </div>
           </div>
        </div>

        {/* Main Interface Area */}
        <div className="flex-1 flex flex-col relative z-10">
          {children}
        </div>

        {/* Bottom decorative edge */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-[#d0d0d0] rounded-full" />
      </div>
    </div>
  );
};
