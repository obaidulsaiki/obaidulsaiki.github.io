# Pitfalls Research

**Domain:** Modern Next.js Portfolio on GitHub Pages
**Researched:** 2026-11-10
**Confidence:** HIGH

## Common Pitfalls & Prevention Strategies

### 1. GitHub Pages Routing 404 on Direct Subpage Refresh
- **The Issue**: On GitHub Pages, navigating to `/education` works via client-side Next.js routing, but refreshing or directly navigating to `https://obaidulsaiki.github.io/education` causes a GitHub 404 because there is no server to route URLs.
- **Prevention**:
  1. Set `trailingSlash: true` in `next.config.mjs` so Next.js generates `out/education/index.html`.
  2. Generate or duplicate `out/index.html` as `out/404.html` during the build script to provide SPA fallback handling.

### 2. Broken Images with `next/image` in Static Export
- **The Issue**: Next.js's standard Image component defaults to server-side optimization requiring an active Node.js server. In static export, this throws a build error or fails at runtime.
- **Prevention**: Configure `images: { unoptimized: true }` in `next.config.mjs`.

### 3. Hydration Mismatch with Framer Motion and SSR
- **The Issue**: Differences in server-rendered initial markup versus client-rendered motion components can trigger React hydration warnings.
- **Prevention**:
  1. Mark animation wrapper components with `"use client"`.
  2. Delay entrance animations until mounted, or use initial CSS classes matching the motion initial state.

### 4. Color Contrast & Accessibility with Pastel Backgrounds
- **The Issue**: The palette (`#FFFBF1`, `#FFF2D0`, `#FFB2B2`, `#E36A6A`) features warm, light surfaces. Using low-contrast gray or pastel text will fail WCAG 2.1 AA standards.
- **Prevention**: Pair `#FFFBF1` and `#FFF2D0` with deep charcoal/espresso text (`#2D2424` or `#241818`, contrast ratio > 10:1). Use `#E36A6A` primarily for accents, buttons, and borders where contrast is preserved.

### 5. Excessive Animation Lag on Mobile Devices
- **The Issue**: Too many parallax listeners and complex physics calculations cause frame drops on mobile devices.
- **Prevention**: Use GPU-accelerated CSS transforms (`translate3d`, `opacity`, `transform`) managed by Framer Motion, and respect `prefers-reduced-motion`.

---
*Pitfalls research for: Modern Next.js Portfolio Website*
*Researched: 2026-11-10*

