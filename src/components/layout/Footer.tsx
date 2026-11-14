'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Globe,
  Sparkles,
  Eye,
} from 'lucide-react';
import { profileData } from '@/data/profile';

const mainNavItems = [
  { name: 'Home', href: '/' },
  { name: 'Education', href: '/education/' },
  { name: 'Experience', href: '/experience/' },
  { name: 'Research', href: '/research/' },
  { name: 'Extracurricular', href: '/extracurricular/' },
  { name: 'Hobby', href: '/hobby/' },
  { name: 'Contact', href: '/contact/' },
];

export default function Footer() {
  const [visitCount, setVisitCount] = useState<number | null>(null);
  const [isNewVisitor, setIsNewVisitor] = useState(false);

  // Dynamic unique-by-IP visitor counter
  useEffect(() => {
    const STORAGE_KEY = 'oh_portfolio_unique_visits_v2';
    const HASH_KEY = 'oh_portfolio_known_hashes_v2';
    const BASE_COUNT = 232;

    let isMounted = true;

    async function computeSha256(str: string): Promise<string> {
      try {
        if (typeof window !== 'undefined' && window.crypto?.subtle) {
          const encoder = new TextEncoder();
          const data = encoder.encode(str);
          const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
        }
      } catch {
        // Fallback below
      }
      // Lightweight fallback hash
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
      }
      return Math.abs(hash).toString(16);
    }

    async function trackUniqueVisitor() {
      // 1. Instantly read existing count so UI never flickers
      let currentCount = BASE_COUNT;
      let knownHashes: string[] = [];

      try {
        const storedCount = localStorage.getItem(STORAGE_KEY);
        if (storedCount) {
          const parsed = parseInt(storedCount, 10);
          if (!isNaN(parsed) && parsed >= BASE_COUNT) {
            currentCount = parsed;
          }
        }
        const storedHashes = localStorage.getItem(HASH_KEY);
        if (storedHashes) {
          knownHashes = JSON.parse(storedHashes);
        }
      } catch {
        // storage disabled or private mode
      }

      if (isMounted) {
        setVisitCount(currentCount);
      }

      // 2. Fetch visitor IP to check uniqueness
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);

        const res = await fetch('https://api.ipify.org?format=json', {
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (!res.ok) return;

        const data = await res.json();
        if (!data?.ip) return;

        // Hash the IP to protect visitor privacy
        const ipHash = await computeSha256(data.ip.trim());

        // Check if this IP is already counted
        const alreadyCounted = knownHashes.includes(ipHash);

        if (!alreadyCounted) {
          currentCount += 1;
          knownHashes.push(ipHash);

          try {
            localStorage.setItem(STORAGE_KEY, currentCount.toString());
            localStorage.setItem(HASH_KEY, JSON.stringify(knownHashes));
          } catch {
            // private browsing ignore
          }

          if (isMounted) {
            setVisitCount(currentCount);
            setIsNewVisitor(true);
          }
        }
      } catch {
        // Network timeout / ad-blocker blocked ipify - keep current count
      }
    }

    trackUniqueVisitor();

    return () => {
      isMounted = false;
    };
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full border-t border-surface-border/80 bg-surface/35 backdrop-blur-sm mt-12 sm:mt-16 transition-colors">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 space-y-4">
        {/* Tier 1: Identity + Visit Counter + Horizontal Navigation + Back to Top */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-surface-border/60">
          {/* Identity & Visit Counter */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              prefetch={true}
              className="flex items-center gap-2 group text-ink-primary"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-canvas border border-surface-border text-accent-primary font-bold text-xs shadow-soft-sm group-hover:border-accent-primary transition-colors">
                OH
              </span>
              <span className="font-bold text-sm tracking-tight group-hover:text-accent-primary transition-colors">
                {profileData.name}
              </span>
            </Link>

            {/* Dynamic Unique-by-IP Visit Counter Pill */}
            <div
              title="Dynamic unique visitors (deduplicated by IP address)"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-canvas border border-surface-border text-[11px] font-mono text-ink-primary shadow-soft-sm transition-all"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-ink-subtle">Unique Visits:</span>
              <span className="font-semibold text-accent-primaryDark">
                {visitCount !== null ? visitCount.toLocaleString() : '...'}
              </span>
            </div>
          </div>

          {/* Horizontal Navigation Links with Left-to-Right Hover Line */}
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={true}
                className="group relative inline-block font-medium text-ink-muted hover:text-ink-primary transition-colors py-0.5"
              >
                <span className="relative">
                  {item.name}
                  {/* Left-to-right line indicator animation */}
                  <span className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-accent-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                </span>
              </Link>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group relative inline-flex items-center gap-1.5 text-xs font-semibold text-ink-muted hover:text-accent-primary transition-colors py-0.5 self-end lg:self-auto cursor-pointer"
          >
            <span className="relative">
              Top
              {/* Left-to-right line indicator animation */}
              <span className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-accent-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
            </span>
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>

        {/* Tier 2: Meta, Timezone & Inline Socials */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-ink-muted">
          {/* Copyright & Location Timezone */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-ink-subtle text-[11px] font-mono">
            <span>© {new Date().getFullYear()} Obaidul Haque</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Globe className="w-3 h-3 text-accent-primary" />
              <span>Dhaka, BD (UTC+06:00)</span>
            </span>
          </div>

          {/* Inline Social Channels with Left-to-Right Hover Line */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-1 text-ink-muted hover:text-ink-primary transition-colors py-0.5"
            >
              <Github className="w-3 h-3 text-accent-primary" />
              <span className="relative">
                GitHub
                {/* Left-to-right line indicator animation */}
                <span className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-accent-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
              </span>
            </a>

            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-1 text-ink-muted hover:text-ink-primary transition-colors py-0.5"
            >
              <Linkedin className="w-3 h-3 text-accent-primary" />
              <span className="relative">
                LinkedIn
                {/* Left-to-right line indicator animation */}
                <span className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-accent-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
              </span>
            </a>

            <a
              href={`mailto:${profileData.socials.email}`}
              className="group relative inline-flex items-center gap-1 text-ink-muted hover:text-ink-primary transition-colors py-0.5"
            >
              <Mail className="w-3 h-3 text-accent-primary" />
              <span className="relative">
                Email
                {/* Left-to-right line indicator animation */}
                <span className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-accent-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
              </span>
            </a>

            <a
              href={`https://wa.me/${profileData.socials.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-1 text-ink-muted hover:text-ink-primary transition-colors py-0.5"
            >
              <Sparkles className="w-3 h-3 text-accent-primary" />
              <span className="relative">
                WhatsApp
                {/* Left-to-right line indicator animation */}
                <span className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-accent-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
