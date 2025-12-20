# Sam Zoloth Portfolio

A product manager portfolio built with Next.js 16, featuring a Teenage Engineering-inspired design system with a **unified theme system** that goes beyond colors to transform the entire visual paradigm.

## Design Philosophy

The site draws inspiration from [Teenage Engineering](https://teenage.engineering/) hardware aesthetics:

- **Control Surface Layout**: Header/content/footer structure mimics hardware panels
- **Monospace Typography**: Geist Mono throughout for that technical feel
- **Seven-Segment Displays**: LED-style number displays for metrics
- **Sequencer Grid**: Projects displayed as a step sequencer pattern
- **Transport Controls**: Navigation styled like play/stop/record buttons
- **Color Tokens**: Orange (primary), blue (secondary), green (success), red (danger)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Theme System

The theme system goes beyond simple color switching - each theme represents a complete visual paradigm with its own layout, typography, and component behaviors.

### What Themes Control

| Category | Options |
|----------|---------|
| **Colors** | Background, foreground, accent, muted, panel, border, LED colors |
| **Layout** | Max width, spacing scale, grid columns, header/footer style |
| **Typography** | Heading font, body font, weights, case, scale |
| **Components** | Border radius, card style, hover effect, show seven-segment |

### Available Themes

| Theme | Style | Description |
|-------|-------|-------------|
| **Classic** | Hardware | PO-12 orange on black - the original |
| **Modular** | Hardware | OP-1/TX-6 blue on dark gray |
| **Field** | Hardware | OP-1 Field warm cream tones |
| **CRT** | Hardware | Retro terminal amber phosphor glow |
| **Neon** | Hardware | Synthwave pink/cyan night aesthetics |
| **Editorial** | Editorial | Refined, spacious, serif headlines |

### Hardware vs Editorial Paradigms

```
Hardware Theme (default)          Editorial Theme
├── Full-width layout             ├── Centered, constrained width
├── Monospace typography          ├── Serif headings, sans-serif body
├── Seven-segment LED displays    ├── Clean number display
├── Recording indicator visible   ├── Minimal chrome
├── Panel cards with borders      ├── Bottom-border separators
├── 3-column project grid         ├── Single column
└── Border hover effects          └── Underline hover effects
```

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with providers
│   ├── globals.css               # Theme-aware CSS with data attributes
│   ├── page.tsx                  # Home page
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   └── projects/[slug]/page.tsx
│
├── components/
│   ├── ThemeProvider.tsx         # Theme context + CSS variable application
│   ├── ThemeSwitcher.tsx         # Dropdown UI for theme selection
│   ├── ControlSurface.tsx        # Hardware panel layout wrapper
│   ├── TransportNav.tsx          # Navigation styled as transport controls
│   ├── MetricsDisplay.tsx        # Dual-mode: seven-segment or simple numbers
│   ├── RecordingIndicator.tsx    # Pulsing "active" indicator
│   ├── KeyboardNav.tsx           # Keyboard shortcuts handler
│   └── te-design-system/         # TE component library
│       ├── SevenSegment.tsx
│       └── ...
│
├── lib/
│   ├── themes.ts                 # Theme definitions and types
│   └── case-studies.ts           # Project/case study data
│
└── styles/
    └── te-tokens.css             # Base TE design tokens
```

## How Theme Switching Works

1. **Theme definitions** in `src/lib/themes.ts` contain all configuration
2. **ThemeProvider** applies CSS variables to `:root` on theme change
3. **Data attributes** (`data-layout`, `data-card-style`, etc.) enable CSS selectors
4. **CSS in globals.css** uses these attributes for paradigm-specific styles
5. **localStorage** persists the selected theme

```typescript
// Theme structure (simplified)
interface Theme {
  id: ThemeId;
  colors: ThemeColors;      // background, accent, muted, etc.
  layout: ThemeLayout;      // maxWidth, spacing, gridColumns
  typography: ThemeTypography;  // fonts, weights, scale
  components: ThemeComponents;  // cardStyle, hoverEffect, etc.
}
```

## Adding a New Theme

1. Add theme ID to `ThemeId` type in `src/lib/themes.ts`
2. Define the full theme object with colors, layout, typography, components
3. Add to the `themes` record
4. ThemeSwitcher automatically includes it

## Features

- **Keyboard Navigation**: `H` (home), `P` (projects), `A` (about), `T` (cycle themes), `1-9` (projects)
- **Theme Switching**: 6 visual paradigms from hardware to editorial
- **Responsive Design**: Mobile-friendly across all themes
- **Static Generation**: All pages statically generated at build time
- **localStorage Persistence**: Theme preference saved

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + CSS Variables
- **Fonts**: Geist Mono, Geist Sans, Playfair Display

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## License

Private - Sam Zoloth
