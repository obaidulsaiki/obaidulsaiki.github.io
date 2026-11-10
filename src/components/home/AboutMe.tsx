'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Cpu, Code2, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { profileData } from '@/data/profile';

export default function AboutMe() {
  const pillars = [
    {
      icon: Code2,
      title: 'Full-Stack Engineering',
      desc: 'Crafting responsive, accessible, and fast web applications using Next.js, React, TypeScript, and modern CSS architectures.',
      badge: 'Architecture',
    },
    {
      icon: Cpu,
      title: 'Biomedical Signal & ML',
      desc: 'Developing deep learning algorithms, convolutional attention networks, and time-series feature extraction for automated seizure detection.',
      badge: 'Research',
    },
    {
      icon: Sparkles,
      title: 'Artisanal Craft & Reliability',
      desc: 'Focusing on micro-animations, type safety, test verification, and intuitive human-centric software design.',
      badge: 'Philosophy',
    },
  ];

  return (
    <section className="space-y-8 py-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-surface-border/80 pb-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-primary tracking-tight">
            Career Summary & Philosophy
          </h2>
        </div>

        <Link
          href="/experience/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-primary hover:text-accent-primaryDark transition-colors group self-start sm:self-auto"
        >
          <span>View Career History</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Narrative & Pillars Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative Text */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-6 space-y-4 text-sm sm:text-base text-ink-muted leading-relaxed"
        >
          {profileData.bioParagraphs.map((paragraph, idx) => (
            <p key={idx} className="bg-surface/30 p-4 rounded-2xl border border-surface-border/60">
              {paragraph}
            </p>
          ))}

          <div className="p-4 rounded-2xl bg-canvas border border-surface-border flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <span className="text-xs font-semibold text-ink-primary">Looking for collaboration?</span>
              <p className="text-xs text-ink-muted">Available for software engineering roles and research projects.</p>
            </div>
            <Link
              href="/contact/"
              className="px-4 py-2 rounded-xl bg-accent-primary text-canvas text-xs font-medium hover:bg-accent-primaryDark transition-all shrink-0 shadow-soft-sm"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Right Column: 3 Pillars */}
        <div className="lg:col-span-6 space-y-4">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="group p-5 rounded-2xl bg-surface/50 border border-surface-border hover:border-accent-primary/70 hover:bg-surface/80 transition-all duration-300 shadow-soft-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-soft/30 border border-accent-soft/50 text-accent-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-ink-primary text-base group-hover:text-accent-primary transition-colors">
                        {pillar.title}
                      </h3>
                      <span className="text-[10px] uppercase tracking-wider font-mono font-semibold px-2 py-0.5 rounded-md bg-canvas border border-surface-border text-ink-subtle">
                        {pillar.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
