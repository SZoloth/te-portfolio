/**
 * Theme Definitions
 * Beyond colors: layout, typography, components, and personality
 */

export type ThemeId =
  | 'te-classic'     // PO-12 orange on black - hardware aesthetic
  | 'te-modular'     // OP-1 blue on dark gray
  | 'te-field'       // OP-1 Field cream with orange
  | 'te-crt'         // Retro terminal amber on green-black
  | 'te-neon'        // Synthwave pink/cyan
  | 'editorial'      // Refined, spacious, serif headlines

export type LayoutStyle = 'hardware' | 'editorial';
export type TypographyStyle = 'mono' | 'editorial';

export interface ThemeColors {
  background: string;
  foreground: string;
  accent: string;
  accentSecondary: string;
  muted: string;
  panel: string;
  border: string;
  // LED display colors (hardware themes)
  ledOn: string;
  ledOff: string;
  ledGlow: string;
}

export interface ThemeLayout {
  style: LayoutStyle;
  maxWidth: string;           // Content max width
  spacing: 'compact' | 'normal' | 'spacious';
  headerStyle: 'control-surface' | 'minimal';
  footerStyle: 'transport' | 'minimal';
  gridColumns: number;        // Project grid columns
}

export interface ThemeTypography {
  style: TypographyStyle;
  headingFont: string;        // CSS font-family
  bodyFont: string;
  headingWeight: string;
  bodyWeight: string;
  headingCase: 'none' | 'uppercase';
  scale: 'compact' | 'normal' | 'large';
}

export interface ThemeComponents {
  borderRadius: string;       // 0 for sharp, 8px/12px for rounded
  cardStyle: 'panel' | 'bordered' | 'elevated' | 'minimal';
  buttonStyle: 'sharp' | 'rounded' | 'pill';
  showSevenSegment: boolean;  // Use LED displays for numbers
  showRecordingIndicator: boolean;
  transitionSpeed: 'instant' | 'fast' | 'smooth';
  hoverEffect: 'border' | 'lift' | 'glow' | 'underline';
}

export interface Theme {
  id: ThemeId;
  name: string;
  description: string;
  inspiration: string;
  colors: ThemeColors;
  layout: ThemeLayout;
  typography: ThemeTypography;
  components: ThemeComponents;
  // For preview swatches
  previewColors: [string, string, string];
}

// Shared layout presets
const hardwareLayout: ThemeLayout = {
  style: 'hardware',
  maxWidth: '100%',
  spacing: 'compact',
  headerStyle: 'control-surface',
  footerStyle: 'transport',
  gridColumns: 3,
};

const editorialLayout: ThemeLayout = {
  style: 'editorial',
  maxWidth: '48rem',  // ~768px, comfortable reading width
  spacing: 'spacious',
  headerStyle: 'minimal',
  footerStyle: 'minimal',
  gridColumns: 1,
};

// Shared typography presets
const monoTypography: ThemeTypography = {
  style: 'mono',
  headingFont: 'var(--font-geist-mono), monospace',
  bodyFont: 'var(--font-geist-mono), monospace',
  headingWeight: '700',
  bodyWeight: '400',
  headingCase: 'none',
  scale: 'normal',
};

const editorialTypography: ThemeTypography = {
  style: 'editorial',
  headingFont: 'var(--font-playfair), Georgia, serif',
  bodyFont: 'var(--font-geist-sans), system-ui, sans-serif',
  headingWeight: '400',
  bodyWeight: '400',
  headingCase: 'none',
  scale: 'large',
};

// Shared component presets
const hardwareComponents: ThemeComponents = {
  borderRadius: '0',
  cardStyle: 'panel',
  buttonStyle: 'sharp',
  showSevenSegment: true,
  showRecordingIndicator: true,
  transitionSpeed: 'fast',
  hoverEffect: 'border',
};

const editorialComponents: ThemeComponents = {
  borderRadius: '0',
  cardStyle: 'minimal',
  buttonStyle: 'sharp',
  showSevenSegment: false,
  showRecordingIndicator: false,
  transitionSpeed: 'smooth',
  hoverEffect: 'underline',
};

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
      border: '#3A3A3A',
      ledOn: '#FF6B00',
      ledOff: '#2A2A2A',
      ledGlow: 'rgba(255, 107, 0, 0.3)',
    },
    layout: hardwareLayout,
    typography: monoTypography,
    components: hardwareComponents,
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
      border: '#2A2A3A',
      ledOn: '#00A3FF',
      ledOff: '#1F1F2E',
      ledGlow: 'rgba(0, 163, 255, 0.3)',
    },
    layout: hardwareLayout,
    typography: monoTypography,
    components: hardwareComponents,
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
      border: '#E5E0D8',
      ledOn: '#FF6B00',
      ledOff: '#E5E0D8',
      ledGlow: 'rgba(255, 107, 0, 0.2)',
    },
    layout: hardwareLayout,
    typography: monoTypography,
    components: hardwareComponents,
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
      border: '#1A2F1A',
      ledOn: '#FFB000',
      ledOff: '#1A1F1A',
      ledGlow: 'rgba(255, 176, 0, 0.4)',
    },
    layout: hardwareLayout,
    typography: monoTypography,
    components: {
      ...hardwareComponents,
      hoverEffect: 'glow',
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
      border: '#2A2A4E',
      ledOn: '#FF2D92',
      ledOff: '#2A2A3E',
      ledGlow: 'rgba(255, 45, 146, 0.4)',
    },
    layout: hardwareLayout,
    typography: monoTypography,
    components: {
      ...hardwareComponents,
      hoverEffect: 'glow',
    },
    previewColors: ['#0D0D1A', '#FF2D92', '#00D4FF'],
  },

  'editorial': {
    id: 'editorial',
    name: 'Editorial',
    description: 'Refined, spacious, serif headlines',
    inspiration: 'Design publications',
    colors: {
      background: '#FAFAFA',
      foreground: '#1A1A1A',
      accent: '#000000',
      accentSecondary: '#666666',
      muted: '#999999',
      panel: '#FFFFFF',
      border: '#E5E5E5',
      ledOn: '#1A1A1A',
      ledOff: '#E5E5E5',
      ledGlow: 'transparent',
    },
    layout: editorialLayout,
    typography: editorialTypography,
    components: editorialComponents,
    previewColors: ['#FAFAFA', '#1A1A1A', '#999999'],
  },
};

export const themeIds = Object.keys(themes) as ThemeId[];
export const defaultTheme: ThemeId = 'te-classic';

// Helper to check if theme uses hardware layout
export const isHardwareTheme = (themeId: ThemeId): boolean => {
  return themes[themeId].layout.style === 'hardware';
};
