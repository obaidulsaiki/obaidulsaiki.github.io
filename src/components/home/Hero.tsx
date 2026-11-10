'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Microscope, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { profileData } from '@/data/profile';

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-surface/50 border border-surface-border p-6 sm:p-10 lg:p-12 shadow-soft-sm transition-all duration-300">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 rounded-full bg-accent-soft/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 rounded-full bg-surface-hover/40 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Headline & Action */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-5 text-center lg:text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas border border-surface-border text-xs font-medium text-ink-primary shadow-soft-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{profileData.status}</span>
          </div>

          {/* Title & Tagline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-ink-primary tracking-tight leading-[1.15]">
              Hello, I&apos;m{' '}
              <span className="text-accent-primary relative inline-block">
                {profileData.name}
                <span className="absolute left-0 -bottom-1 w-full h-1.5 bg-accent-soft/60 rounded-full" />
              </span>
            </h1>
            <div className="space-y-1">
              <p className="text-xl sm:text-2xl font-bold text-accent-primaryDark">
                {profileData.title}
              </p>
              <p className="text-sm sm:text-base font-semibold text-accent-primary tracking-wide">
                Medical Imaging & Computer Vision · Natural Language Processing · Biomedical Signals
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
            {profileData.tagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-primary hover:bg-accent-primaryDark text-canvas font-medium text-sm shadow-soft-md transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/research/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-canvas border border-surface-border text-ink-primary font-medium text-sm hover:border-accent-primary hover:bg-surface-hover transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Microscope className="w-4 h-4 text-accent-primary" />
              <span>Explore Research</span>
            </Link>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pl-2">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-canvas border border-surface-border text-ink-muted hover:text-accent-primary hover:border-accent-primary transition-all duration-200 hover:scale-110"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-canvas border border-surface-border text-ink-muted hover:text-accent-primary hover:border-accent-primary transition-all duration-200 hover:scale-110"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.socials.email}`}
                aria-label="Email Me"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-canvas border border-surface-border text-ink-muted hover:text-accent-primary hover:border-accent-primary transition-all duration-200 hover:scale-110"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Profile Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Ambient Warm Backing Glow */}
            <div className="absolute inset-0 bg-accent-soft/40 rounded-3xl blur-xl group-hover:bg-accent-soft/60 transition-all duration-500 scale-95" />

            {/* Outer Frame */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-4 border-surface shadow-soft-lg bg-surface-hover group-hover:border-accent-soft transition-all duration-300">
              <Image
                src="/images/MyPicture.png"
                alt="Obaidul Haque - Profile Portrait"
                fill
                priority
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Location & University Pill */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:-right-3 rounded-full bg-canvas/95 backdrop-blur-md border border-surface-border px-3.5 py-1.5 text-xs font-medium text-ink-primary shadow-soft-sm flex items-center gap-1.5 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-accent-primary" />
              <span>{profileData.location}</span>
              <span className="text-ink-subtle">·</span>
              <span className="text-accent-primary font-semibold">{profileData.universityShort}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <div className="mt-10 pt-8 border-t border-surface-border/70 grid grid-cols-2 md:grid-cols-4 gap-4">
        {profileData.stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-2xl bg-canvas/70 border border-surface-border/80 text-center sm:text-left transition-all hover:bg-canvas"
          >
            <div className="text-lg sm:text-xl font-extrabold text-accent-primary tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs font-semibold text-ink-primary mt-0.5">
              {stat.label}
            </div>
            <div className="text-[11px] text-ink-muted hidden sm:block">
              {stat.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
