# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm install     # Install dependencies
npm run dev     # Start dev server on port 3000 (auto-opens browser)
npm run build   # Build for production (outputs to /build)
```

## Project Overview

This is a React + TypeScript mobile app prototype for an AI-powered conversation practice tool. The project was exported from Figma and uses Vite for development. It renders at a fixed mobile viewport size (390x844px).

## Architecture

### Entry Points
- `src/main.tsx` - React DOM render entry
- `src/App.tsx` - Main app component with page routing state machine

### Page Navigation
The app uses a state-based navigation pattern in `App.tsx`. The `currentPage` state controls which screen is displayed:
- `home` → HomePage
- `setup` → QuickSetup → `setup2` → QuickSetup2 → `setup3` → QuickSetup3
- `review` → PostSimMicroReview
- `voiceChat` → VoiceChat (with demo mode flag)
- `summary` → SimulationSummary
- `playback` → PracticePlayback
- `aiChat` → AIChat

### Key Directories
- `src/components/` - All page and feature components
- `src/components/ui/` - Reusable UI primitives (shadcn/ui style, built on Radix)
- `src/assets/` - Image assets (hash-named files from Figma export)
- `src/imports/` - SVG imports

### Tech Stack
- **React 18** with TypeScript
- **Vite** with SWC for fast builds
- **Tailwind CSS v4** for styling
- **Framer Motion** (`motion/react`) for animations
- **Radix UI** primitives for accessible components
- **Lucide React** for icons

### Vite Configuration
The `vite.config.ts` contains path aliases:
- `@` maps to `./src`
- `figma:asset/*` aliases map hash-named images from Figma export
- Various versioned package aliases for compatibility

### Styling Notes
- Tailwind v4 is used (different from v3 - uses CSS-native approach)
- Base font and color theming defined in `src/index.css`
- Mobile-first design with fixed 390x844 viewport
