'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, Layers, Sparkles, Filter } from 'lucide-react';
import { skillsData, skillCategories } from '@/data/skills';
import SkillCard from '@/components/home/SkillCard';

export default function SkillsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSkills =
    selectedCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section className="space-y-8 py-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-surface-border/80 pb-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-primary tracking-tight">
            Skills Collected Throughout the Years
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted">
            Interactive breakdown of programming languages, frontend frameworks, backend engines, and AI/ML libraries.
          </p>
        </div>

        {/* Counter Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-surface-border text-xs font-mono text-ink-primary shrink-0 self-start sm:self-auto">
          <Sparkles className="w-3.5 h-3.5 text-accent-primary" />
          <span>Showing {filteredSkills.length} of {skillsData.length} Skills</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-ink-subtle flex items-center gap-1 mr-1">
          <Filter className="w-3 h-3" /> Filter:
        </span>
        {skillCategories.map((cat) => {
          const active = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                active
                  ? 'text-canvas font-semibold shadow-soft-sm'
                  : 'text-ink-muted hover:text-ink-primary bg-surface/60 hover:bg-surface border border-surface-border'
              }`}
            >
              {active && (
                <motion.div
                  layoutId="activeSkillCategoryPill"
                  className="absolute inset-0 rounded-full bg-accent-primary"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Animated Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

