'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, LayoutGroup, MotionConfig } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { MagneticPull } from '@/components/animations/MotionPrimitives';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Education', href: '/education/' },
  { name: 'Experience', href: '/experience/' },
  { name: 'Research', href: '/research/' },
  { name: 'Extracurricular', href: '/extracurricular/' },
  { name: 'Hobby', href: '/hobby/' },
  { name: 'Contact', href: '/contact/' },
];

/**
 * Organic liquid spring for fluid capsule sliding between tabs.
 */
const LIQUID_SPRING = {
  type: 'spring' as const,
  stiffness: 380,
  damping: 28,
  mass: 0.55,
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const [optimisticHref, setOptimisticHref] = useState<string | null>(null);

  // Sync optimistic state when route transition completes
  useEffect(() => {
    setOptimisticHref(null);
  }, [pathname]);

  // Normalize pathname to handle trailing slash and immediate optimistic clicks
  const isActive = (href: string) => {
    const current = optimisticHref ?? pathname;
    if (href === '/') {
      return current === '/' || current === '';
    }
    const cleanHref = href.replace(/\/$/, '');
    const cleanCurrent = current.replace(/\/$/, '');
    return cleanCurrent === cleanHref;
  };

  return (
    <MotionConfig reducedMotion="user">
    <header className="sticky top-0 z-50 w-full border-b border-surface-border/60 bg-canvas/85 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <MagneticPull strength={0.18}>
          <Link
            href="/"
            prefetch={true}
            className="group flex items-center gap-2.5 text-ink-primary transition-colors"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface border border-surface-border text-accent-primary font-bold shadow-soft-sm group-hover:border-accent-primary transition-colors duration-200">
              OH
            </span>
            <div className="flex flex-col">
              <span className="font-semibold tracking-tight text-ink-primary group-hover:text-accent-primary transition-colors text-base">
                Obaidul Haque
              </span>
              <span className="text-[11px] font-medium text-ink-muted -mt-1 hidden sm:inline-block">
                AI Engineer and Researcher
              </span>
            </div>
          </Link>
        </MagneticPull>

        {/* Desktop Navigation */}
        <LayoutGroup id="desktop-navbar">
          <nav
            onMouseLeave={() => setHoveredHref(null)}
            className="hidden md:flex items-center gap-1 bg-surface/60 backdrop-blur-md p-1.5 rounded-full border border-surface-border shadow-soft-sm"
          >
            {navItems.map((item) => {
              const active = isActive(item.href);
              const hovered = !active && hoveredHref === item.href;
              return (
                <div key={item.href} className="relative">
                  <Link
                    href={item.href}
                    prefetch={true}
                    onClick={() => setOptimisticHref(item.href)}
                    onMouseEnter={() => setHoveredHref(item.href)}
                    onFocus={() => setHoveredHref(item.href)}
                    onBlur={() => setHoveredHref(null)}
                    className={`relative block px-4 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-colors duration-150 select-none ${
                      active
                        ? 'text-accent-primaryDark font-semibold'
                        : 'text-ink-muted hover:text-ink-primary'
                    }`}
                  >
                    {/* Ghost Spotlight hover layer */}
                    <AnimatePresence>
                      {hovered && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.94 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.94 }}
                          transition={{ duration: 0.12 }}
                          className="absolute inset-0 z-0 rounded-full bg-surface-hover/70 border border-surface-border/50"
                        />
                      )}
                    </AnimatePresence>

                    {/* Organic Liquid Sliding Capsule */}
                    {active && (
                      <motion.span
                        layoutId="activeLiquidCapsule"
                        transition={LIQUID_SPRING}
                        className="absolute inset-0 z-0 rounded-full bg-canvas border border-accent-soft shadow-[0_2px_10px_-2px_rgba(227,106,106,0.22)]"
                      />
                    )}

                    <span className="relative z-10">{item.name}</span>
                  </Link>
                </div>
              );
            })}
          </nav>
        </LayoutGroup>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <MagneticPull strength={0.24} className="hidden sm:inline-flex">
            <Link
              href="/contact/"
              prefetch={true}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-canvas bg-accent-primary hover:bg-accent-primaryDark rounded-full shadow-soft-sm transition-colors duration-200"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Say Hello</span>
            </Link>
          </MagneticPull>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-xl bg-surface border border-surface-border text-ink-primary hover:text-accent-primary transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-b border-surface-border bg-canvas/95 backdrop-blur-lg px-4 pt-2 pb-4 shadow-soft-md"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={true}
                    onClick={() => {
                      setOptimisticHref(item.href);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      active
                        ? 'bg-accent-soft/35 text-accent-primaryDark font-semibold border border-accent-soft/70 shadow-soft-sm'
                        : 'text-ink-muted hover:text-ink-primary hover:bg-surface/60'
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <div className="pt-2 border-t border-surface-border/60">
                <Link
                  href="/contact/"
                  prefetch={true}
                  onClick={() => {
                    setOptimisticHref('/contact/');
                    setMobileMenuOpen(false);
                  }}
                  className="flex w-full items-center justify-center gap-2 py-2.5 text-sm font-medium text-canvas bg-accent-primary rounded-xl shadow-soft-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </MotionConfig>
  );
}
