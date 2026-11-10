'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Sparkles, Filter } from 'lucide-react';
import { skillsData, skillCategories } from '@/data/skills';
import SkillCard from '@/components/home/SkillCard';

export default function SkillsShowcase() {
  // Default to AI, Models and Frameworks on Home to anchor primary identity
  const [selectedCategory, setSelectedCategory] = useState<string>('ai-models-tools');

  const filteredSkills =
    selectedCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section className="space-y-6 py-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-surface-border/80 pb-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-primary tracking-tight">
            Tools, Models and Technologies
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted">
            The deep learning frameworks, transformer architectures, programming languages, and backend engines I work with.
          </p>
        </div>

        {/* Counter Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surface-border text-xs font-mono text-ink-primary shrink-0 self-start sm:self-auto shadow-soft-sm">
          <Sparkles className="w-3.5 h-3.5 text-accent-primary" />
          <span>{filteredSkills.length} of {skillsData.length} Tools</span>
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
              className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                active
                  ? 'text-canvas bg-accent-primary shadow-soft-sm'
                  : 'text-ink-muted hover:text-ink-primary bg-surface/60 hover:bg-surface border border-surface-border hover:border-accent-primary/40'
              }`}
            >
              <span className="relative z-10">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Robust Animated Skills Grid */}
      <motion.div
        key={selectedCategory}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5"
      >
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </motion.div>
    </section>
  );
}
