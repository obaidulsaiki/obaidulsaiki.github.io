'use client';

import React, { useRef, useState } from 'react';
import {
  LayoutGroup,
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion';

/**
 * Fast, crisp spring preset shared across gliding button pills.
 */
export const SNAPPY_SPRING = {
  type: 'spring' as const,
  stiffness: 520,
  damping: 32,
  mass: 0.65,
};

/**
 * Tactile magnetic return spring used on cursor-tracking controls.
 */
export const MAGNETIC_SPRING = {
  stiffness: 360,
  damping: 22,
  mass: 0.45,
};

interface MagneticPullProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

/**
 * Applies subtle pointer-tracking magnetic translation and crisp tap compression
 * without re-rendering React state on pointer move.
 */
export function MagneticPull({
  children,
  strength = 0.22,
  className = 'inline-flex',
}: MagneticPullProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, MAGNETIC_SPRING);
  const y = useSpring(rawY, MAGNETIC_SPRING);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    rawX.set(offsetX * strength);
    rawY.set(offsetY * strength);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={SNAPPY_SPRING}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export interface FilterTabOption {
  id: string;
  label: string;
}

interface SlidingFilterTabsProps {
  items: readonly FilterTabOption[];
  selectedId: string;
  onSelect: (id: string) => void;
  layoutPrefix: string;
  roundedClass?: string;
  buttonPaddingClass?: string;
  prefixNode?: React.ReactNode;
  containerClassName?: string;
}

/**
 * Shared filter button strip featuring dual Framer Motion gliding pills:
 * a subtle magnetic hover pill under the pointer and an accent pill on selection.
 */
export function SlidingFilterTabs({
  items,
  selectedId,
  onSelect,
  layoutPrefix,
  roundedClass = 'rounded-full',
  buttonPaddingClass = 'px-3.5 py-1.5 text-xs',
  prefixNode,
  containerClassName = 'flex flex-wrap items-center gap-2',
}: SlidingFilterTabsProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <LayoutGroup id={layoutPrefix}>
      <div
        className={containerClassName}
        onMouseLeave={() => setHoveredId(null)}
      >
        {prefixNode}
        {items.map((item) => {
          const active = selectedId === item.id;
          const hovered = !active && hoveredId === item.id;

          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              onMouseEnter={() => setHoveredId(item.id)}
              onFocus={() => setHoveredId(item.id)}
              onBlur={() => setHoveredId(null)}
              whileTap={{ scale: 0.95 }}
              transition={SNAPPY_SPRING}
              className={`relative cursor-pointer font-semibold border transition-colors duration-150 ${roundedClass} ${buttonPaddingClass} ${
                active
                  ? 'text-canvas border-transparent'
                  : 'text-ink-muted hover:text-ink-primary bg-surface/50 border-surface-border'
              }`}
            >
              {hovered && (
                <motion.span
                  layoutId={`${layoutPrefix}-hover`}
                  transition={SNAPPY_SPRING}
                  className={`absolute inset-0 z-0 ${roundedClass} bg-surface-hover border border-accent-primary/35 shadow-soft-sm`}
                />
              )}

              {active && (
                <motion.span
                  layoutId={`${layoutPrefix}-active`}
                  transition={SNAPPY_SPRING}
                  className={`absolute inset-0 z-[1] ${roundedClass} bg-accent-primary shadow-soft-sm`}
                />
              )}

              <span className="relative z-10">{item.label}</span>
            </motion.button>
          );
        })}
      </div>
    </LayoutGroup>
  );
}
