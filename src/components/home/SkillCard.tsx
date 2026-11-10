'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PyTorchIcon,
  MambaIcon,
  SSMIcon,
  HuggingFaceIcon,
  BanglaBERTIcon,
  OpenCVIcon,
  TorchvisionIcon,
  SciPyIcon,
  GradCAMIcon,
  LangChainIcon,
  OllamaIcon,
  TensorFlowIcon,
  KerasIcon,
  ScikitLearnIcon,
  NumPyIcon,
  PandasIcon,
  PythonIcon,
  CppIcon,
  JavaIcon,
  SpringBootIcon,
  ReactIcon,
  NextJsIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  PostgresIcon,
  DockerIcon,
  GitIcon,
  GitHubIcon,
  TailwindIcon,
  LinuxIcon,
  MySQLIcon,
  CLangIcon,
} from '@/components/icons/TechIcons';
import { Code2 } from 'lucide-react';
import { SkillItem } from '@/data/skills';

interface SkillCardProps {
  skill: SkillItem;
}

const techIconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  pytorch: PyTorchIcon,
  mamba: MambaIcon,
  ssm: SSMIcon,
  huggingface: HuggingFaceIcon,
  banglabert: BanglaBERTIcon,
  opencv: OpenCVIcon,
  torchvision: TorchvisionIcon,
  scipy: SciPyIcon,
  gradcam: GradCAMIcon,
  langchain4j: LangChainIcon,
  ollama: OllamaIcon,
  tensorflow: TensorFlowIcon,
  keras: KerasIcon,
  'scikit-learn': ScikitLearnIcon,
  numpy: NumPyIcon,
  pandas: PandasIcon,
  python: PythonIcon,
  cpp: CppIcon,
  java: JavaIcon,
  typescript: TypeScriptIcon,
  javascript: JavaScriptIcon,
  'c-lang': CLangIcon,
  sql: PostgresIcon,
  'spring-boot': SpringBootIcon,
  postgresql: PostgresIcon,
  mysql: MySQLIcon,
  'rest-api': SpringBootIcon,
  react: ReactIcon,
  nextjs: NextJsIcon,
  tailwind: TailwindIcon,
  framer: ReactIcon,
  git: GitIcon,
  github: GitHubIcon,
  linux: LinuxIcon,
  docker: DockerIcon,
};

export default function SkillCard({ skill }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = techIconMap[skill.id] || Code2;
  const brand = skill.color;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.18 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative p-3 sm:p-3.5 rounded-xl bg-surface/50 border transition-all duration-200 flex items-center gap-3.5 cursor-pointer overflow-hidden shadow-soft-sm"
      style={{
        borderColor: isHovered ? brand.hex : 'rgba(215, 203, 185, 0.55)',
        backgroundColor: isHovered ? `${brand.hex}0C` : undefined,
        boxShadow: isHovered
          ? `0 0 24px -2px ${brand.hex}45, 0 8px 18px -4px ${brand.hex}30`
          : '0 2px 4px rgba(45, 36, 36, 0.03)',
      }}
    >
      {/* Dynamic Hover Flash Radial Aura */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(ellipse at 30% 50%, ${brand.hex}22 0%, transparent 75%)`,
        }}
      />

      {/* Authentic Original Brand Logo with Color Reaction */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-200 relative z-10"
        style={{
          backgroundColor: isHovered ? `${brand.hex}28` : `${brand.hex}14`,
          borderColor: isHovered ? brand.hex : `${brand.hex}35`,
          transform: isHovered ? 'scale(1.08)' : 'scale(1)',
          boxShadow: isHovered ? `0 0 14px ${brand.hex}50` : 'none',
        }}
      >
        <IconComponent size={24} className="shrink-0" />
      </div>

      {/* Modular Content without '&' or paragraphs */}
      <div className="min-w-0 flex-1 space-y-0.5 relative z-10">
        <div className="flex items-center justify-between gap-2">
          <h3
            className="font-bold text-sm sm:text-base tracking-tight truncate transition-colors duration-150"
            style={{
              color: isHovered ? brand.hex : 'var(--color-ink-primary, #2D2424)',
            }}
          >
            {skill.name}
          </h3>
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-canvas/90 text-ink-muted border border-surface-border shrink-0">
            {skill.experience}
          </span>
        </div>

        <p className="text-xs font-semibold tracking-wide truncate" style={{ color: brand.hex }}>
          {skill.categoryLabel}
        </p>
      </div>
    </motion.div>
  );
}
