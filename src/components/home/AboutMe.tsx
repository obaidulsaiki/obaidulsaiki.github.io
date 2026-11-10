'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Eye, MessageSquareCode, Activity, Coffee, ArrowRight, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { profileData } from '@/data/profile';

export default function AboutMe() {
  const pillars = [
    {
      icon: Eye,
      title: 'Computer Vision & Signal Processing',
      desc: 'Developing deep convolutional networks, spatial-temporal attention mechanisms, and biomedical signal processing algorithms (e.g. EEG seizure prediction).',
      badge: 'Core Focus',
    },
    {
      icon: MessageSquareCode,
      title: 'Natural Language Processing (NLP)',
      desc: 'Investigating transformer architectures, text tokenization, embeddings, and linguistic feature extraction for contextual intelligence.',
      badge: 'Core Focus',
    },
    {
      icon: Coffee,
      title: 'Enterprise Roots: Java & Spring Boot',
      desc: 'Proven background in building robust backend services with Java, Spring Boot, and SQL, seamlessly integrated with modern JavaScript frontends.',
      badge: 'Engineering',
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
            Career Journey & Research Focus
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted">
            From enterprise Java/Spring Boot development to dedicated AI research in Computer Vision, NLP, and Signal Processing at IUBAT.
          </p>
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

          {/* Academic Affiliation Card */}
          <div className="p-4 rounded-2xl bg-canvas border border-surface-border flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-soft/30 border border-accent-soft/50 text-accent-primary flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-semibold text-ink-primary">{profileData.university}</span>
                <p className="text-[11px] text-ink-muted">Department of Computer Science & Engineering</p>
              </div>
            </div>
            <Link
              href="/education/"
              className="px-3.5 py-1.5 rounded-xl bg-surface border border-surface-border hover:border-accent-primary text-ink-primary text-xs font-medium transition-all shrink-0"
            >
              Details →
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
