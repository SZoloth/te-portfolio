'use client';

import { useState, useRef, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { themes, themeIds, Theme } from '@/lib/themes';

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
        group relative flex items-center gap-3 w-full p-3
        border transition-all duration-200
        ${isActive
          ? 'border-[var(--accent)] bg-[var(--panel)]'
          : 'border-[var(--muted)] hover:border-[var(--accent)] bg-transparent'
        }
      `}
      aria-pressed={isActive}
    >
      {/* Color preview dots */}
      <div className="flex gap-1">
        {[bg, accent, fg].map((color, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full border border-[var(--muted)]"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Theme info */}
      <div className="flex-1 text-left">
        <div className="text-sm font-mono font-medium text-[var(--foreground)]">
          {theme.name}
        </div>
        <div className="text-xs font-mono text-[var(--muted)]">
          {theme.inspiration}
        </div>
      </div>

      {/* Active indicator */}
      {isActive && (
        <div className="w-2 h-2 bg-[var(--accent)]" />
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
    <div ref={containerRef} className="relative">
      {/* Trigger button - shows current theme colors */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 px-3 py-2
          border border-[var(--muted)]
          hover:border-[var(--accent)]
          transition-colors font-mono text-xs
          ${isOpen ? 'border-[var(--accent)]' : ''}
        `}
        aria-label="Change theme"
        title="Press T to cycle themes"
      >
        {/* Mini color preview */}
        <div className="flex gap-0.5">
          {theme.previewColors.map((color, i) => (
            <div
              key={i}
              className="w-2 h-2"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <span className="text-[var(--foreground)] uppercase tracking-wider">
          {theme.name}
        </span>
      </button>

      {/* Dropdown panel */}
      {isOpen && (
        <div
          className="
            absolute right-0 top-full mt-2 z-50
            w-64 border border-[var(--muted)] bg-[var(--background)]
            shadow-lg
          "
        >
          {/* Header */}
          <div className="px-3 py-2 border-b border-[var(--muted)]">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
              Select Theme
            </div>
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

          {/* Footer hint */}
          <div className="px-3 py-2 border-t border-[var(--muted)]">
            <div className="text-[10px] font-mono text-[var(--muted)]">
              Press <span className="text-[var(--accent)]">T</span> to cycle themes
            </div>
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
