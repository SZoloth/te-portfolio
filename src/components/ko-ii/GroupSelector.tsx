'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const GROUPS = [
  { id: 'A', label: 'MAIN', path: '/', color: '#FF5700', shadow: 'rgba(255,87,0,0.6)' },
  { id: 'B', label: 'WORK', path: '/projects', color: '#0091FF', shadow: 'rgba(0,145,255,0.6)' },
  { id: 'C', label: 'INFO', path: '/about', color: '#00FF84', shadow: 'rgba(0,255,132,0.6)' },
  { id: 'D', label: 'CHAT', path: 'mailto:smzoloth@gmail.com', color: '#FF003C', shadow: 'rgba(255,0,60,0.6)' },
];

export const GroupSelector: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row md:flex-col gap-4 md:gap-3 justify-center md:justify-start">
      {GROUPS.map((group) => {
        const isActive = pathname === group.path;
        
        return (
          <Link 
            key={group.id} 
            href={group.path}
            className="group relative flex items-center gap-3 cursor-pointer select-none outline-none"
          >
            {/* The Box Segment - Animated */}
            <motion.div 
              className="relative w-10 h-10 md:w-8 md:h-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
               {/* Ghost Background (Off) */}
               <div className="absolute inset-0 border-2 border-[#1a1a1a] rounded-[2px]" />
               
               {/* Active State (On) */}
               <motion.div 
                 className={`
                   absolute inset-0 border-2 rounded-[2px] flex items-center justify-center
                 `}
                 animate={{
                    backgroundColor: isActive ? group.color : 'rgba(0,0,0,0)',
                    borderColor: isActive ? group.color : 'transparent',
                    boxShadow: isActive ? `0 0 15px ${group.shadow}` : 'none',
                    color: isActive ? '#000000' : '#1a1a1a'
                 }}
                 // Subtle pulse when active
                 whileHover={isActive ? { scale: 1.05 } : { borderColor: '#333' }}
               >
                 <span className="font-mono font-bold text-lg leading-none">{group.id}</span>
               </motion.div>
            </motion.div>

            {/* The Label Segment - Hidden on mobile, visible on desktop */}
            <div className="hidden md:block">
              <span 
                className={`
                  font-mono text-[10px] tracking-widest font-bold uppercase
                  ${isActive ? 'text-[#e0e0e0] drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]' : 'text-[#1a1a1a]'}
                `}
              >
                {group.label}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
