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
  const { colors } = theme;

  // Apply CSS custom properties
  root.style.setProperty('--background', colors.background);
  root.style.setProperty('--foreground', colors.foreground);
  root.style.setProperty('--accent', colors.accent);
  root.style.setProperty('--accent-secondary', colors.accentSecondary);
  root.style.setProperty('--muted', colors.muted);
  root.style.setProperty('--panel', colors.panel);

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

  // Set color scheme for browser UI
  const isLight = theme.id === 'te-field';
  root.style.colorScheme = isLight ? 'light' : 'dark';

  // Set data attribute for CSS targeting
  root.setAttribute('data-theme', theme.id);
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
