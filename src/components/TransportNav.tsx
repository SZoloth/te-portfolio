'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LCDSegmentGroup } from './te-design-system/LCD';

const NAV_ITEMS = [
  { label: 'A', desc: 'MAIN', href: '/' },
  { label: 'B', desc: 'SOUND', href: '/projects' }, // "SOUND" is consistent with KO II "Sound" mode, mapped to Projects
  { label: 'C', desc: 'TEMPO', href: '/about' },    // "TEMPO" mapped to About (Experience/Time)
  { label: 'D', desc: 'SYSTEM', href: 'mailto:sam@example.com' }, // "SYSTEM" mapped to Contact
];

export const TransportNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-4">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        
        // For external links (mailto), we might not want to highlight as active page
        // unless we want to hack it. For now, D is just a link.
        
        return (
          <Link key={item.label} href={item.href}>
            <LCDSegmentGroup 
              label={item.label}
              description={item.desc}
              active={isActive}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default TransportNav;
