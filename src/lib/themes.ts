/**
 * Theme Definitions
 * Inspired by Teenage Engineering's product line aesthetic
 */

export type ThemeId =
  | 'te-classic'     // PO-12 orange on black
  | 'te-modular'     // OP-1 blue on dark gray
  | 'te-field'       // OP-1 Field cream with orange
  | 'te-crt'         // Retro terminal amber on green-black
  | 'te-neon'        // Synthwave pink/cyan

export interface Theme {
  id: ThemeId;
  name: string;
  description: string;
  inspiration: string;
  colors: {
    background: string;
    foreground: string;
    accent: string;
    accentSecondary: string;
    muted: string;
    panel: string;
    // LED display colors
    ledOn: string;
    ledOff: string;
    ledGlow: string;
  };
  // For preview swatches
  previewColors: [string, string, string];
}

export const themes: Record<ThemeId, Theme> = {
  'te-classic': {
    id: 'te-classic',
    name: 'Classic',
    description: 'The original PO-series look',
    inspiration: 'PO-12 Rhythm',
    colors: {
      background: '#000000',
      foreground: '#FFFFFF',
      accent: '#FF6B00',
      accentSecondary: '#00A3FF',
      muted: '#808080',
      panel: '#1A1A1A',
      ledOn: '#FF6B00',
      ledOff: '#2A2A2A',
      ledGlow: 'rgba(255, 107, 0, 0.3)',
    },
    previewColors: ['#000000', '#FF6B00', '#FFFFFF'],
  },

  'te-modular': {
    id: 'te-modular',
    name: 'Modular',
    description: 'Cool blue modular vibes',
    inspiration: 'OP-1 / TX-6',
    colors: {
      background: '#0A0A0F',
      foreground: '#E8E8EC',
      accent: '#00A3FF',
      accentSecondary: '#FF6B00',
      muted: '#6B7280',
      panel: '#16161F',
      ledOn: '#00A3FF',
      ledOff: '#1F1F2E',
      ledGlow: 'rgba(0, 163, 255, 0.3)',
    },
    previewColors: ['#0A0A0F', '#00A3FF', '#E8E8EC'],
  },

  'te-field': {
    id: 'te-field',
    name: 'Field',
    description: 'Warm cream tones for daylight',
    inspiration: 'OP-1 Field',
    colors: {
      background: '#F5F0E8',
      foreground: '#1A1A1A',
      accent: '#FF6B00',
      accentSecondary: '#2563EB',
      muted: '#9CA3AF',
      panel: '#FFFFFF',
      ledOn: '#FF6B00',
      ledOff: '#E5E0D8',
      ledGlow: 'rgba(255, 107, 0, 0.2)',
    },
    previewColors: ['#F5F0E8', '#FF6B00', '#1A1A1A'],
  },

  'te-crt': {
    id: 'te-crt',
    name: 'CRT',
    description: 'Retro terminal phosphor glow',
    inspiration: 'Vintage oscilloscopes',
    colors: {
      background: '#0A0F0A',
      foreground: '#33FF33',
      accent: '#FFB000',
      accentSecondary: '#33FF33',
      muted: '#1F3F1F',
      panel: '#0F150F',
      ledOn: '#FFB000',
      ledOff: '#1A1F1A',
      ledGlow: 'rgba(255, 176, 0, 0.4)',
    },
    previewColors: ['#0A0F0A', '#FFB000', '#33FF33'],
  },

  'te-neon': {
    id: 'te-neon',
    name: 'Neon',
    description: 'Synthwave night aesthetics',
    inspiration: 'Night drives',
    colors: {
      background: '#0D0D1A',
      foreground: '#F0F0FF',
      accent: '#FF2D92',
      accentSecondary: '#00D4FF',
      muted: '#4A4A6A',
      panel: '#1A1A2E',
      ledOn: '#FF2D92',
      ledOff: '#2A2A3E',
      ledGlow: 'rgba(255, 45, 146, 0.4)',
    },
    previewColors: ['#0D0D1A', '#FF2D92', '#00D4FF'],
  },
};

export const themeIds = Object.keys(themes) as ThemeId[];
export const defaultTheme: ThemeId = 'te-classic';
