# Changelog Page Structure

## Route
`/releases` or `/changelog`

## Page Layout

### Header
- Title: "Release Notes" or "Changelog"
- Tagline: "Monthly firmware updates"

### Navigation
- Year filter (2025, 2024, etc.)
- Quick jump to latest

### Release Entry Format

```markdown
# vYYYY.MM

> Release date: Month Year

---

## SHIPPED
[What you completed - work, projects, personal]

## LEARNED
[Insights, realizations, mindset shifts]

## EXPLORING
[What you're curious about, experiments in progress]

## KNOWN ISSUES
[Challenges, skill gaps, habits you're working on]

## DEPRECATIONS
[What you're moving away from, old approaches retired]

## META
**Theme for [month]:** [word or phrase]
**What worked:** [brief]
**What didn't:** [brief]
**One word:** [single word summary]
```

## Visual Design Notes (TE Theme)

### Recording metaphor
- Each release like a "track" on an album
- Seven-segment display for version numbers
- VU meter could show "output" for the month

### Navigation
- Transport controls: |< < > >| for navigating releases
- "Now Playing" indicator for current/latest

## Content Cadence

### Monthly (primary)
- Full release notes
- All sections

### Quarterly (optional)
- Rollup/retrospective
- Bigger patterns

### Annual (optional)
- Year in review
- Major themes

## Implementation Notes
- Static generation at build time
- MDX files in `/content/releases/`
- Metadata in frontmatter
- Components for consistent formatting
