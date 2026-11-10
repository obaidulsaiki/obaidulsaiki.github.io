'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

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

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Normalize pathname to handle trailing slash
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname === '';
    }
    const cleanHref = href.replace(/\/$/, '');
    const cleanPath = pathname.replace(/\/$/, '');
    return cleanPath === cleanHref;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-border/60 bg-canvas/85 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-ink-primary transition-colors"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface border border-surface-border text-accent-primary font-bold shadow-soft-sm group-hover:scale-105 group-hover:border-accent-primary transition-all duration-200">
            OH
          </span>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-ink-primary group-hover:text-accent-primary transition-colors text-base">
              Obaidul Haque
            </span>
            <span className="text-[11px] font-medium text-ink-muted -mt-1 hidden sm:inline-block">
              AI Engineer & Researcher
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-surface/40 p-1.5 rounded-full border border-surface-border/50">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                  active
                    ? 'text-accent-primary font-semibold'
                    : 'text-ink-muted hover:text-ink-primary hover:bg-surface/80'
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-accent-soft/30 border border-accent-soft/50 shadow-soft-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact/"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-canvas bg-accent-primary hover:bg-accent-primaryDark rounded-full shadow-soft-sm transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Say Hello</span>
          </Link>

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
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      active
                        ? 'bg-accent-soft/30 text-accent-primary font-semibold border border-accent-soft/60'
                        : 'text-ink-muted hover:text-ink-primary hover:bg-surface/60'
                    }`}
                  >
                    <span>{item.name}</span>
                    {active && <span className="h-2 w-2 rounded-full bg-accent-primary" />}
                  </Link>
                );
              })}
              <div className="pt-2 border-t border-surface-border/60">
                <Link
                  href="/contact/"
                  onClick={() => setMobileMenuOpen(false)}
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
  );
}
