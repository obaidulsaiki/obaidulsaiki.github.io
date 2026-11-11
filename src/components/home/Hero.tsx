'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Microscope,
  Github,
  Linkedin,
  Mail,
  MapPin,
  BookOpen,
  Briefcase,
  GraduationCap,
} from 'lucide-react';
import { HeroStatBadge, HeroStatItem, profileData } from '@/data/profile';
import { MagneticPull } from '@/components/animations/MotionPrimitives';

const statIconMap: Record<HeroStatItem['id'], React.ComponentType<{ className?: string }>> = {
  papers: BookOpen,
  experience: Briefcase,
  cgpa: GraduationCap,
};

const badgeToneClasses: Record<NonNullable<HeroStatBadge['tone']>, string> = {
  default: 'bg-surface/60 text-ink-muted border-surface-border',
  emerald: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/25',
  amber: 'bg-amber-500/10 text-amber-700 border-amber-500/25',
  accent: 'bg-accent-soft/35 text-accent-primaryDark border-accent-soft/60',
};

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
            <p className="text-xl sm:text-2xl font-bold text-accent-primaryDark">
              {profileData.title}
            </p>
          </div>

          <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
            {profileData.tagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
            <MagneticPull strength={0.2}>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-primary hover:bg-accent-primaryDark text-canvas font-medium text-sm shadow-soft-md transition-colors duration-200"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticPull>

            <MagneticPull strength={0.2}>
              <Link
                href="/research/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-canvas border border-surface-border text-ink-primary font-medium text-sm hover:border-accent-primary hover:bg-surface-hover transition-colors duration-200"
              >
                <Microscope className="w-4 h-4 text-accent-primary" />
                <span>Explore Research</span>
              </Link>
            </MagneticPull>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pl-2">
              <MagneticPull strength={0.3}>
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-canvas border border-surface-border text-ink-muted hover:text-accent-primary hover:border-accent-primary transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>
              </MagneticPull>
              <MagneticPull strength={0.3}>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-canvas border border-surface-border text-ink-muted hover:text-accent-primary hover:border-accent-primary transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </MagneticPull>
              <MagneticPull strength={0.3}>
                <a
                  href={`mailto:${profileData.socials.email}`}
                  aria-label="Email Me"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-canvas border border-surface-border text-ink-muted hover:text-accent-primary hover:border-accent-primary transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </MagneticPull>
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

      {/* Highlight Cards Row (Papers, Experience, CGPA) */}
      <div className="mt-10 pt-8 border-t border-surface-border/70 grid grid-cols-1 md:grid-cols-3 gap-4">
        {profileData.stats.map((stat) => {
          const IconComponent = statIconMap[stat.id];
          return (
            <Link
              key={stat.id}
              href={stat.href}
              className={`group p-4 sm:p-5 rounded-2xl border transition-all duration-200 shadow-soft-sm hover:-translate-y-0.5 flex flex-col justify-between gap-3.5 ${
                stat.highlight
                  ? 'bg-gradient-to-br from-canvas via-canvas to-accent-soft/25 border-accent-soft hover:border-accent-primary'
                  : 'bg-canvas/80 border-surface-border/90 hover:border-accent-primary/60 hover:bg-canvas'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-accent-primary tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-ink-primary mt-0.5 group-hover:text-accent-primaryDark transition-colors">
                    {stat.label}
                  </div>
                </div>

                <div
                  className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${
                    stat.highlight
                      ? 'bg-accent-soft/40 border-accent-soft text-accent-primaryDark'
                      : 'bg-surface/60 border-surface-border text-accent-primary'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {stat.badges.map((badge) => {
                  const tone = badge.tone ?? 'default';
                  const showDot = tone === 'emerald' || tone === 'amber';
                  return (
                    <span
                      key={badge.text}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-semibold ${badgeToneClasses[tone]}`}
                    >
                      {showDot && (
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            tone === 'emerald' ? 'bg-emerald-500' : 'bg-amber-500'
                          }`}
                        />
                      )}
                      <span>{badge.text}</span>
                    </span>
                  );
                })}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
