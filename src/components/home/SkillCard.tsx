'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  FileCode,
  FileCode2,
  Cpu,
  Database,
  Atom,
  Layers,
  Palette,
  Sparkles,
  Layout,
  Server,
  Network,
  HardDrive,
  Flame,
  Boxes,
  BrainCircuit,
  Activity,
  Table,
  GitBranch,
  Container,
  Terminal,
  type LucideIcon,
} from 'lucide-react';
import { SkillItem } from '@/data/skills';

const iconMap: Record<string, LucideIcon> = {
  Code,
  FileCode,
  FileCode2,
  Cpu,
  Database,
  Atom,
  Layers,
  Palette,
  Sparkles,
  Layout,
  Server,
  Network,
  HardDrive,
  Flame,
  Boxes,
  BrainCircuit,
  Activity,
  Table,
  GitBranch,
  Container,
  Terminal,
};

interface SkillCardProps {
  skill: SkillItem;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const IconComponent = iconMap[skill.iconName] || Code;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-surface/50 border border-surface-border hover:border-accent-primary hover:bg-surface/80 transition-all duration-300 shadow-soft-sm"
    >
      <div className="space-y-3">
        {/* Top Header */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-canvas border border-surface-border text-accent-primary shadow-soft-sm group-hover:scale-110 group-hover:bg-accent-soft/30 transition-all duration-300">
            <IconComponent className="h-5 w-5" />
          </div>
          <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-canvas border border-surface-border text-ink-muted">
            {skill.experience}
          </span>
        </div>

        {/* Title & Category */}
        <div>
          <h3 className="font-bold text-ink-primary text-base tracking-tight group-hover:text-accent-primary transition-colors">
            {skill.name}
          </h3>
          <span className="text-xs font-medium text-accent-primaryDark">
            {skill.categoryLabel}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-ink-muted leading-relaxed line-clamp-2">
          {skill.description}
        </p>
      </div>

      {/* Bottom Proficiency Tag */}
      <div className="mt-4 pt-3 border-t border-surface-border/60 flex items-center justify-between text-[11px]">
        <span className="text-ink-subtle">Proficiency</span>
        <span
          className={`font-semibold px-2 py-0.5 rounded-md ${
            skill.proficiency === 'Advanced'
              ? 'bg-accent-soft/40 text-accent-primary'
              : 'bg-canvas text-ink-primary border border-surface-border'
          }`}
        >
          {skill.proficiency}
        </span>
      </div>
    </motion.div>
  );
}
