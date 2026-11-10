# Phase 1 Context: Foundation, Design Tokens & Navigation

**Phase:** 1 — Foundation, Design Tokens & Navigation
**Target Scope:** Next.js project structure, Tailwind tokenization, static export pipeline, global layout, responsive navbar & footer, and route stubs for all 7 pages.
**Directives:**
- **Whole Project Structure Scaffolded**: Establish the complete Next.js App Router tree with all 7 routes (`/`, `/education`, `/experience`, `/research`, `/extracurricular`, `/hobby`, `/contact`).
- **Step-by-Step Delivery Strategy**: Build and verify the foundational scaffolding and route stubs first. The immediate next focus is perfecting the **Home page** before expanding other pages one by one.
- **Palette Tokens**:
  - Canvas: `#FFFBF1`
  - Surface / Cards: `#FFF2D0`
  - Soft Accent: `#FFB2B2`
  - Primary Accent: `#E36A6A`
  - Text Primary: `#2D2424` (Deep Espresso Charcoal for WCAG AA compliance)
  - Text Muted: `#6B5B5B`
- **Hosting Constraint**: Static site export (`output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`) for GitHub Pages hosting on `obaidulsaiki.github.io` / `obaidulhaque.me`.
- **Animations**: Framer Motion client wrapper with clean page entrance choreography.
