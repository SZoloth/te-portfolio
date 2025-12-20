'use client';

import { useState, useRef, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { themes, themeIds, Theme } from '@/lib/themes';
import { LCDText } from './te-design-system/LCD';

interface ThemeSwatchProps {
  theme: Theme;
  isActive: boolean;
  onClick: () => void;
}

function ThemeSwatch({ theme, isActive, onClick }: ThemeSwatchProps) {
  const [bg, accent, fg] = theme.previewColors;

  return (
    <button
      onClick={onClick}
      className={`
        group relative flex items-center gap-3 w-full p-2
        border transition-all duration-200
        ${isActive
          ? 'border-[#FF6B00] bg-[#111]'
          : 'border-[#333] hover:border-[#555] bg-transparent'
        }
      `}
      aria-pressed={isActive}
    >
      {/* Color preview dots */}
      <div className="flex gap-1">
        {[bg, accent, fg].map((color, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Theme info */}
      <div className="flex-1 text-left">
        <LCDText text={theme.name} size="xs" color={isActive ? 'orange' : 'white'} active={true} />
      </div>

      {/* Active indicator */}
      {isActive && (
        <div className="w-1.5 h-1.5 bg-[#FF6B00] animate-pulse" />
      )}
    </button>
  );
}

export function ThemeSwitcher() {
  const { theme, themeId, setTheme, cycleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard shortcut: T to cycle themes
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      // Don't trigger if typing in an input
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (event.key === 't' && !event.metaKey && !event.ctrlKey) {
        cycleTheme();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [cycleTheme]);

  return (
    <div ref={containerRef} className="relative z-50">
      {/* Trigger button - Screen Mode Look */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 group outline-none"
        aria-label="Change theme"
        title="Press T to cycle themes"
      >
        <div className={`px-2 py-1 border border-[#333] group-hover:border-[#555] transition-colors ${isOpen ? 'border-[#FF6B00]' : ''}`}>
           <LCDText text="THEME" size="xs" color="white" className="opacity-60" />
        </div>
        <div className={`px-2 py-1 border transition-colors ${isOpen ? 'border-[#FF6B00] bg-[#FF6B00] text-black' : 'border-[#FF6B00] text-[#FF6B00]'}`}>
           <span className={`font-mono font-bold text-xs tracking-wider ${isOpen ? 'text-black' : ''}`}>
             {theme.name.toUpperCase()}
           </span>
        </div>
      </button>

      {/* Dropdown panel */}
      {isOpen && (
        <div
          className="
            absolute right-0 top-full mt-2
            w-64 border-2 border-[#333] bg-black
            shadow-[0_0_20px_rgba(0,0,0,0.8)]
          "
        >
          {/* Header */}
          <div className="px-3 py-2 border-b border-[#333]">
            <LCDText text="SELECT MODE" size="xs" color="white" className="opacity-50" />
          </div>

          {/* Theme list */}
          <div className="p-2 flex flex-col gap-1">
            {themeIds.map((id) => (
              <ThemeSwatch
                key={id}
                theme={themes[id]}
                isActive={id === themeId}
                onClick={() => {
                  setTheme(id);
                  setIsOpen(false);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Compact version for mobile/minimal UI
 */
export function ThemeSwitcherCompact() {
  const { theme, cycleTheme } = useTheme();

  return (
    <button
      onClick={cycleTheme}
      className="
        flex items-center justify-center w-8 h-8
        border border-[var(--muted)] hover:border-[var(--accent)]
        transition-colors
      "
      aria-label={`Current theme: ${theme.name}. Click to change.`}
      title="Press T to cycle themes"
    >
      <div className="flex gap-0.5">
        {theme.previewColors.map((color, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </button>
  );
}
