'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { Theme, ThemeId, themes, defaultTheme } from '@/lib/themes';

interface ThemeContextValue {
  theme: Theme;
  themeId: ThemeId;
  setTheme: (id: ThemeId) => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = 'te-portfolio-theme';

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const { colors, layout, typography, components } = theme;

  // ═══════════════════════════════════════════════════════════════
  // COLORS
  // ═══════════════════════════════════════════════════════════════
  root.style.setProperty('--background', colors.background);
  root.style.setProperty('--foreground', colors.foreground);
  root.style.setProperty('--accent', colors.accent);
  root.style.setProperty('--accent-secondary', colors.accentSecondary);
  root.style.setProperty('--muted', colors.muted);
  root.style.setProperty('--panel', colors.panel);
  root.style.setProperty('--border', colors.border);

  // LED colors for seven-segment displays
  root.style.setProperty('--te-led-orange', colors.ledOn);
  root.style.setProperty('--te-led-off', colors.ledOff);
  root.style.setProperty('--te-led-glow', colors.ledGlow);

  // Override base TE colors for components using them directly
  root.style.setProperty('--te-orange', colors.accent);
  root.style.setProperty('--te-blue', colors.accentSecondary);
  root.style.setProperty('--te-white', colors.foreground);
  root.style.setProperty('--te-black', colors.background);
  root.style.setProperty('--te-bg-panel', colors.panel);
  root.style.setProperty('--te-mid-gray', colors.muted);
  root.style.setProperty('--te-light-gray', colors.muted);

  // ═══════════════════════════════════════════════════════════════
  // LAYOUT
  // ═══════════════════════════════════════════════════════════════
  root.style.setProperty('--layout-max-width', layout.maxWidth);
  root.style.setProperty('--layout-grid-columns', String(layout.gridColumns));

  // Spacing scale
  const spacingScale = {
    compact: { section: '2rem', element: '0.5rem', padding: '1rem' },
    normal: { section: '4rem', element: '1rem', padding: '2rem' },
    spacious: { section: '6rem', element: '1.5rem', padding: '3rem' },
  };
  const spacing = spacingScale[layout.spacing];
  root.style.setProperty('--spacing-section', spacing.section);
  root.style.setProperty('--spacing-element', spacing.element);
  root.style.setProperty('--spacing-padding', spacing.padding);

  // ═══════════════════════════════════════════════════════════════
  // TYPOGRAPHY
  // ═══════════════════════════════════════════════════════════════
  root.style.setProperty('--font-heading', typography.headingFont);
  root.style.setProperty('--font-body', typography.bodyFont);
  root.style.setProperty('--font-heading-weight', typography.headingWeight);
  root.style.setProperty('--font-body-weight', typography.bodyWeight);
  root.style.setProperty('--text-transform-heading',
    typography.headingCase === 'uppercase' ? 'uppercase' : 'none'
  );

  // Typography scale
  const typeScale = {
    compact: { h1: '2rem', h2: '1.25rem', h3: '1rem', body: '0.875rem' },
    normal: { h1: '2.5rem', h2: '1.5rem', h3: '1.125rem', body: '1rem' },
    large: { h1: '3.5rem', h2: '2rem', h3: '1.25rem', body: '1.125rem' },
  };
  const type = typeScale[typography.scale];
  root.style.setProperty('--text-h1', type.h1);
  root.style.setProperty('--text-h2', type.h2);
  root.style.setProperty('--text-h3', type.h3);
  root.style.setProperty('--text-body', type.body);

  // ═══════════════════════════════════════════════════════════════
  // COMPONENTS
  // ═══════════════════════════════════════════════════════════════
  root.style.setProperty('--border-radius', components.borderRadius);

  // Transition speeds
  const transitions = {
    instant: '0ms',
    fast: '150ms',
    smooth: '300ms',
  };
  root.style.setProperty('--transition-speed', transitions[components.transitionSpeed]);

  // ═══════════════════════════════════════════════════════════════
  // DATA ATTRIBUTES (for CSS selectors)
  // ═══════════════════════════════════════════════════════════════
  root.setAttribute('data-theme', theme.id);
  root.setAttribute('data-layout', layout.style);
  root.setAttribute('data-typography', typography.style);
  root.setAttribute('data-card-style', components.cardStyle);
  root.setAttribute('data-hover-effect', components.hoverEffect);
  root.setAttribute('data-show-seven-segment', String(components.showSevenSegment));
  root.setAttribute('data-header-style', layout.headerStyle);
  root.setAttribute('data-footer-style', layout.footerStyle);

  // Color scheme for browser UI
  const isLight = ['te-field', 'editorial'].includes(theme.id);
  root.style.colorScheme = isLight ? 'light' : 'dark';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeId | null;
    if (saved && themes[saved]) {
      setThemeId(saved);
      applyTheme(themes[saved]);
    } else {
      applyTheme(themes[defaultTheme]);
    }
    setMounted(true);
  }, []);

  // Apply theme when it changes
  useEffect(() => {
    if (mounted) {
      applyTheme(themes[themeId]);
      localStorage.setItem(STORAGE_KEY, themeId);
    }
  }, [themeId, mounted]);

  const setTheme = useCallback((id: ThemeId) => {
    if (themes[id]) {
      setThemeId(id);
    }
  }, []);

  const cycleTheme = useCallback(() => {
    const ids = Object.keys(themes) as ThemeId[];
    const currentIndex = ids.indexOf(themeId);
    const nextIndex = (currentIndex + 1) % ids.length;
    setTheme(ids[nextIndex]);
  }, [themeId, setTheme]);

  const value: ThemeContextValue = {
    theme: themes[themeId],
    themeId,
    setTheme,
    cycleTheme,
  };

  // Prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
