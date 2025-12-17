# Sam Zoloth Portfolio

A product manager portfolio built with Next.js 16, featuring a Teenage Engineering-inspired design system with two levels of customization: **CSS theme switching** (colors/tokens) and **experience switching** (entire UI implementations).

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

## Two-Level Customization System

### Level 1: Theme Switcher (CSS Variables)

The **theme switcher** changes colors, fonts, and visual tokens while keeping the same layout and components. This is like changing the "paint" on existing UI.

**Goal**: Allow visitors to personalize the visual appearance (dark/light modes, accent colors, etc.) without changing the underlying structure.

```
src/styles/themes/
├── te-dark.css      # Default TE dark theme
├── te-light.css     # Light variant
├── midnight.css     # Deep blue variant
└── forest.css       # Green accent variant
```

Themes use CSS custom properties:
```css
:root[data-theme="te-dark"] {
  --te-orange: #ff6b00;
  --te-blue: #00a3ff;
  --te-green: #00ff87;
  --te-red: #ff3366;
  --te-bg: #1a1a1a;
  --te-light-gray: #888;
  --te-mid-gray: #444;
}
```

The `ThemeContext` manages theme state with localStorage persistence.

### Level 2: Experience Switcher (Component Swapping)

The **experience switcher** goes beyond theming - it swaps entire UI implementations while keeping the same underlying content. Different layouts, components, and interaction patterns.

**Goal**: Demonstrate versatility by showing the same portfolio content rendered through completely different design systems. Visitors can toggle between experiences like switching between "TE mode" and "minimal mode."

```
Content Layer (shared)              Experience Layer (swappable)
┌─────────────────────────┐        ┌────────────────────────────────┐
│ lib/case-studies.ts     │───────▶│ experiences/te/                │
│ lib/profile-data.ts     │        │   pages/HomePage.tsx           │
│                         │        │   components/SequencerGrid.tsx │
│ (data + types)          │        │   layout/ExperienceLayout.tsx  │
└─────────────────────────┘        ├────────────────────────────────┤
                                   │ experiences/minimal/ (future)  │
                                   │   pages/HomePage.tsx           │
                                   │   components/ProjectCard.tsx   │
                                   └────────────────────────────────┘
```

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Home page
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   └── projects/[slug]/page.tsx
│
├── experiences/                  # Experience switching system
│   ├── types.ts                  # Interface contracts
│   ├── context.tsx               # ExperienceProvider + useExperience
│   ├── registry.ts               # Experience loader
│   └── te/                       # Teenage Engineering experience
│       ├── index.ts
│       ├── layout/
│       ├── pages/
│       └── components/
│
├── contexts/
│   └── ThemeContext.tsx          # CSS theme switching
│
├── styles/
│   └── themes/                   # CSS variable themes
│
├── components/                   # Shared/global components
│   ├── ControlSurface.tsx
│   ├── TransportNav.tsx
│   ├── SequencerGrid.tsx
│   ├── SevenSegment.tsx
│   ├── MetricsDisplay.tsx
│   ├── RecordingIndicator.tsx
│   ├── KeyboardNav.tsx
│   ├── ThemeSwitcher.tsx         # UI for CSS themes
│   └── ExperienceSwitcher.tsx    # UI for experience switching
│
└── lib/                          # Shared content layer
    ├── case-studies.ts           # Project/case study data
    └── profile-data.ts           # About page profile data
```

## Key Differences: Theme vs Experience

| Aspect | Theme Switcher | Experience Switcher |
|--------|---------------|---------------------|
| **What changes** | Colors, fonts, spacing tokens | Entire components, layouts, interactions |
| **Implementation** | CSS variables swap | React component swap |
| **Use case** | Dark/light mode, accent colors | Different design systems |
| **Content** | Same markup, different styles | Same data, different markup |
| **Complexity** | Low - just CSS | High - full component sets |

## Adding a New Theme (CSS)

1. Create `src/styles/themes/{name}.css`
2. Define all CSS custom properties
3. Register in ThemeContext

## Adding a New Experience (Components)

1. Create `src/experiences/{name}/` with same structure as `te/`
2. Implement all page components satisfying type contracts
3. Register in `src/experiences/registry.ts`
4. ExperienceSwitcher UI auto-updates

## Features

- **Keyboard Navigation**: `H` (home), `P` (projects), `A` (about), `1-9` (jump to project)
- **CSS Theme Switching**: Multiple color themes via CSS variables
- **Experience Switching**: Swap entire UI implementations
- **Static Generation**: All pages statically generated at build time
- **localStorage Persistence**: Theme and experience preferences saved

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + CSS Variables
- **Font**: Geist Mono

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## License

Private - Sam Zoloth
