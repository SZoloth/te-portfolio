'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
  shortcut?: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '/', shortcut: 'H' },
  { label: 'PROJECTS', href: '/projects', shortcut: 'P' },
  { label: 'ABOUT', href: '/about', shortcut: 'A' },
];

/**
 * TransportNav - TE-style transport control navigation
 * Mimics the button/indicator aesthetic of TE hardware
 */
export const TransportNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
              relative px-4 py-2 text-xs font-mono uppercase tracking-wider
              border border-[var(--te-mid-gray)]
              transition-all duration-100
              ${isActive
                ? 'bg-[var(--te-orange)] text-black border-[var(--te-orange)]'
                : 'bg-[var(--te-bg-panel)] text-[var(--te-light-gray)] hover:border-[var(--te-orange)] hover:text-white'
              }
            `}
          >
            {/* Active indicator dot */}
            {isActive && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[var(--te-orange)] rounded-full led-glow" />
            )}
            {item.label}
            {item.shortcut && (
              <span className="ml-2 text-[10px] opacity-50">
                [{item.shortcut}]
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default TransportNav;
