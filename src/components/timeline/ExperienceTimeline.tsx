'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  Cpu,
  Bot,
  RotateCcw,
  ArrowUp,
  Flame,
  Terminal,
} from 'lucide-react';
import { experienceData, featuredProjects } from '@/data/experience';

/**
 * Aerodynamic Aerospace Rocket Craft
 * Custom SVG vector with directional exhaust flame trail.
 * Clean, box-less silhouette that eliminates double-circle collisions on timeline waypoints.
 */
function AerospaceRocketCraft() {
  return (
    <div className="relative flex flex-col items-center select-none pointer-events-none transform-gpu">
      {/* Thruster Exhaust Flame Trail (Shoots upwards opposite to flight direction) */}
      <div className="absolute -top-7 w-4 h-9 flex items-center justify-center overflow-visible">
        {/* Core dynamic flame */}
        <motion.div
          animate={{
            height: [18, 28, 16, 26],
            opacity: [0.85, 1, 0.75, 0.95],
            scaleX: [0.9, 1.15, 0.85, 1.05],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-2.5 rounded-full bg-gradient-to-t from-accent-primary via-amber-400 to-transparent blur-[1px] shadow-[0_0_14px_rgba(227,106,106,0.95)]"
        />
        {/* Ambient atmospheric heat haze */}
        <div className="absolute inset-0 w-5 h-9 -top-1 rounded-full bg-accent-soft/40 blur-sm" />
      </div>

      {/* Aerodynamic Rocket Fuselage pointing downwards */}
      <svg
        width="28"
        height="40"
        viewBox="0 0 28 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_4px_14px_rgba(227,106,106,0.6)]"
      >
        {/* Thruster Nozzle at top */}
        <path d="M11 6 L17 6 L16 9 L12 9 Z" fill="#374151" />

        {/* Port Stabilizer Fin */}
        <path
          d="M8 17 L2 26 C2 29 4.5 29 7 27 L8 24 Z"
          fill="#C94E4E"
          stroke="#FFFBF1"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* Starboard Stabilizer Fin */}
        <path
          d="M20 17 L26 26 C26 29 23.5 29 21 27 L20 24 Z"
          fill="#C94E4E"
          stroke="#FFFBF1"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* Main Aerodynamic Fuselage Hull pointing down */}
        <path
          d="M14 38 C17.5 30 20.5 20 20.5 9 C20.5 7 17.5 6 14 6 C10.5 6 7.5 7 7.5 9 C7.5 20 10.5 30 14 38 Z"
          fill="#E36A6A"
          stroke="#FFFBF1"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Central Fuselage Spine Accent */}
        <path d="M14 7 L14 34" stroke="#FFFBF1" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round" />

        {/* Cockpit Window Glint */}
        <circle cx="14" cy="15" r="3.2" fill="#FFFBF1" stroke="#C94E4E" strokeWidth="1" />
        <circle cx="14" cy="15" r="1.8" fill="#991B1B" opacity="0.65" />
        <circle cx="15" cy="14" r="0.8" fill="#FFFFFF" />

        {/* Downward Nose Beacon Tip */}
        <circle cx="14" cy="36" r="1.2" fill="#FFFBF1" />
      </svg>
    </div>
  );
}

export default function ExperienceTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const flightTrackRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 0: launch pad, 1: Saask Task, 2: AKS Global, 3: Featured Projects, 4: Terminal Landing Pad
  const [activeStep, setActiveStep] = useState<number>(0);
  const [thresholds, setThresholds] = useState<number[]>([0.22, 0.55, 0.85, 0.98]);
  const [trackBottomOffset, setTrackBottomOffset] = useState<number>(24);

  // Scroll direction detection for bi-directional rocket orientation
  const lastScrollY = useRef<number>(0);
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(false);

  // Motion value tracking scroll progress from 0% (top departure pad) to 100% (docked at Landing Pad)
  const rawProgress = useMotionValue(0);

  const smoothProgress = useSpring(rawProgress, {
    stiffness: 220,
    damping: 28,
    mass: 0.35,
  });

  // Calculate rocket vertical descent down the parallel flight lane
  const rocketTop = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  // Viewport scroll listener with direction sensing and top-pad auto-reset
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const currentScroll = window.scrollY;
      const diff = currentScroll - lastScrollY.current;

      // Direction detection with 4px deadband to prevent scroll flutter
      if (currentScroll <= 25) {
        // Returned to top departure pad: reset orientation to point down (0deg) ready for launch
        setIsScrollingUp(false);
      } else if (diff < -4) {
        // Scrolling up: rocket turns 180deg to face upward
        setIsScrollingUp(true);
      } else if (diff > 4) {
        // Scrolling down: rocket turns back to 0deg to face downward
        setIsScrollingUp(false);
      }
      lastScrollY.current = currentScroll;

      // Viewport scroll progress towards terminal landing stop
      const windowHeight = window.innerHeight;
      const landingEl = lineRefs.current[3];

      let endScroll: number;
      if (landingEl) {
        const landingRect = landingEl.getBoundingClientRect();
        const landingY = landingRect.top + window.scrollY;
        // Reach 100% when Landing Pad arrives comfortably in lower-mid viewport
        endScroll = Math.max(150, landingY - windowHeight * 0.65);
      } else {
        const rect = timelineRef.current.getBoundingClientRect();
        const timelineTop = rect.top + window.scrollY;
        endScroll = Math.max(150, timelineTop + timelineRef.current.offsetHeight - windowHeight * 0.7);
      }

      const progress = Math.max(0, Math.min(1, currentScroll / endScroll));
      rawProgress.set(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [rawProgress]);

  // Smooth scroll directly to a clicked milestone station or section
  const scrollToMilestone = (idx: number) => {
    const lineEl = lineRefs.current[idx];
    if (!lineEl) return;
    const lineRect = lineEl.getBoundingClientRect();
    const targetY = lineRect.top + window.scrollY - window.innerHeight * 0.35;
    if (targetY < window.scrollY) {
      setIsScrollingUp(true);
    } else {
      setIsScrollingUp(false);
    }
    window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
  };

  // Smooth re-launch glide back to top departure pad
  const scrollToTop = () => {
    setIsScrollingUp(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Measure exact vertical line positions for all stations and landing pad
  useEffect(() => {
    const calculatePositions = () => {
      if (!flightTrackRef.current || !timelineRef.current) return;
      const trackRect = flightTrackRef.current.getBoundingClientRect();
      const trackTop = trackRect.top + window.scrollY;
      const trackHeight = trackRect.height;
      if (trackHeight <= 0) return;

      const newThresholds: number[] = [];
      lineRefs.current.forEach((el) => {
        if (!el) return;
        const lineRect = el.getBoundingClientRect();
        const lineCenterY = lineRect.top + window.scrollY + lineRect.height / 2;
        const fraction = (lineCenterY - trackTop) / trackHeight;
        newThresholds.push(Math.max(0.01, Math.min(0.99, fraction)));
      });

      if (newThresholds.length === 4) {
        setThresholds(newThresholds);
      }

      // Lock bottom of flight rail and stem line exactly to the center of Landing Pad
      const lastEl = lineRefs.current[3];
      if (lastEl && timelineRef.current) {
        const lastRect = lastEl.getBoundingClientRect();
        const timelineRect = timelineRef.current.getBoundingClientRect();
        const bottomOffset = timelineRect.bottom - (lastRect.top + lastRect.height / 2);
        if (bottomOffset > 0) {
          setTrackBottomOffset(Math.round(bottomOffset));
        }
      }
    };

    calculatePositions();
    const timer = setTimeout(calculatePositions, 200);
    window.addEventListener('resize', calculatePositions);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculatePositions);
    };
  }, []);

  // Dynamic station ignition: strictly triggers only when rocket arrives parallel
  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (latest) => {
      const t1 = thresholds[0] ?? 0.22;
      const t2 = thresholds[1] ?? 0.55;
      const t3 = thresholds[2] ?? 0.85;
      const t4 = thresholds[3] ?? 0.98;

      if (latest >= t4) {
        setActiveStep(4); // Touchdown confirmed at landing pad
      } else if (latest >= t3) {
        setActiveStep(3); // Reached Station 03: Featured Production Projects
      } else if (latest >= t2) {
        setActiveStep(2); // Reached Station 02: AKS Global IT Services
      } else if (latest >= t1) {
        setActiveStep(1); // Reached Station 01: Saask Task
      } else {
        setActiveStep(0); // Launch standby (dormant)
      }
    });
    return () => unsubscribe();
  }, [smoothProgress, thresholds]);

  // Lane 2: Active vertical stem progress starting at Station 01 and tracking down to Landing Pad
  const t1 = thresholds[0] ?? 0.22;
  const t4 = thresholds[3] ?? 0.98;

  const stemProgress = useTransform(smoothProgress, (latest) => {
    if (latest <= t1) return 0;
    if (latest >= t4) return 1;
    return (latest - t1) / (t4 - t1);
  });

  return (
    <div className="space-y-16">
      {/* Continuous Runway Container Wrapping Roles, Commercial Deliverables & Terminal Landing Pad */}
      <div ref={timelineRef} className="relative space-y-14 -ml-2 sm:-ml-4 lg:-ml-6 xl:-ml-8 pt-2">
        {/* Lane 1: Dedicated Rocket Flight Track (Positioned Far Left into Gutter) */}
        <div
          ref={flightTrackRef}
          style={{ bottom: `${trackBottomOffset}px` }}
          className="absolute top-2 left-3 sm:left-4 md:left-5 lg:left-6 -translate-x-1/2 w-1 pointer-events-none z-10"
        >
          {/* Launch Beacon Origin Indicator */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-primary border border-canvas shadow-[0_0_10px_rgba(227,106,106,1)]" />
          </div>

          {/* Guide Wire Track (Background) */}
          <div className="absolute inset-0 w-0.5 mx-auto bg-surface-border/80 rounded-full" />

          {/* Glowing Drawn Plasma Trail (Scroll Driven) */}
          <motion.div
            style={{ scaleY: smoothProgress, originY: 0 }}
            className="absolute inset-0 w-1 mx-auto bg-gradient-to-b from-accent-primary via-amber-400 to-accent-primary shadow-[0_0_14px_rgba(227,106,106,0.95)] rounded-full origin-top"
          />

          {/* Moving Aerodynamic Rocket Craft with Bi-Directional Flip */}
          <motion.div
            style={{ top: rocketTop, x: '-50%', y: '-50%' }}
            className="absolute left-1/2 z-30 pointer-events-none"
          >
            <motion.div
              animate={{ rotate: isScrollingUp ? 180 : 0 }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 26,
                mass: 0.4,
              }}
              style={{ transformOrigin: 'center 20px' }}
              className="flex items-center justify-center"
            >
              <AerospaceRocketCraft />
            </motion.div>
          </motion.div>

          {/* Terminal Touchdown Base Ring at Track End */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center">
            <span
              className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                activeStep >= 4
                  ? 'bg-emerald-500 border-canvas shadow-[0_0_12px_rgba(16,185,129,1)] scale-110'
                  : 'bg-canvas border-surface-border'
              }`}
            />
          </div>
        </div>

        {/* Lane 2: Milestone Stem Wire Connecting Station Nodes (01 through 03 and down to Landing Pad) */}
        <div
          style={{ bottom: `${trackBottomOffset}px` }}
          className="absolute top-10 left-16 sm:left-22 md:left-26 lg:left-30 -translate-x-1/2 w-0.5 pointer-events-none z-0"
        >
          {/* Dormant guide wire */}
          <div className="absolute inset-0 w-0.5 bg-surface-border/70 rounded-full" />

          {/* Active glowing stem line that grows downwards tracking the rocket */}
          <motion.div
            style={{ scaleY: stemProgress, originY: 0 }}
            className="absolute inset-0 w-1 -left-[1px] bg-gradient-to-b from-accent-primary via-accent-soft to-accent-primary shadow-[0_0_12px_rgba(227,106,106,0.9)] rounded-full origin-top"
          />

          {/* Terminal Stem Base Pin */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center justify-center">
            <span
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                activeStep >= 4 ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]' : 'bg-surface-border'
              }`}
            />
          </div>
        </div>

        {/* 1. Career Roles & Milestones (Stations 01 & 02) */}
        {experienceData.map((item, index) => {
          const isCurrent = item.status === 'Current';
          const isReached = activeStep >= index + 1;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative flex items-start group"
            >
              {/* Left Telemetry Column: Shifted into Left Margin Runway */}
              <div className="w-20 sm:w-28 md:w-32 lg:w-36 shrink-0 relative flex items-start pt-5">
                {/* Dynamic Glowing Telemetry Bridge */}
                <div
                  ref={(el) => {
                    lineRefs.current[index] = el;
                  }}
                  className="absolute left-3 sm:left-4 md:left-5 lg:left-6 right-auto top-10 pointer-events-none z-10 flex items-center"
                >
                  <div
                    className={`transition-all duration-500 rounded-full ${
                      isReached
                        ? 'h-[2.5px] w-[52px] sm:w-[72px] md:w-[84px] lg:w-[96px] bg-gradient-to-r from-accent-primary via-accent-soft to-accent-primary shadow-[0_0_16px_rgba(227,106,106,1)] opacity-100'
                        : 'h-[1.5px] w-[52px] sm:w-[72px] md:w-[84px] lg:w-[96px] bg-surface-border/60 border-t border-dashed border-surface-border opacity-35'
                    }`}
                  />
                  {isReached && (
                    <span className="w-2 h-2 rounded-full bg-accent-primary -ml-1 shrink-0 animate-ping shadow-[0_0_8px_rgba(227,106,106,1)]" />
                  )}
                </div>

                {/* Lane 2: Milestone Endpoint Station Node with Click-to-Scroll */}
                <div
                  onClick={() => scrollToMilestone(index)}
                  title={`Jump to ${item.role}`}
                  className="absolute left-16 sm:left-22 md:left-26 lg:left-30 -translate-x-1/2 top-5 z-20 cursor-pointer"
                >
                  <div
                    className={`relative flex items-center justify-center rounded-2xl transition-all duration-500 hover:scale-110 ${
                      isReached
                        ? 'w-9 h-9 sm:w-10 sm:h-10 bg-canvas border-2 border-accent-primary text-accent-primary shadow-[0_0_18px_rgba(227,106,106,0.65)] scale-105'
                        : 'w-9 h-9 sm:w-10 sm:h-10 bg-surface/90 border border-surface-border text-ink-muted/70 shadow-soft-sm'
                    }`}
                  >
                    {/* Milestone Sequential Pip */}
                    <span
                      className={`absolute -top-1.5 -right-1 font-mono text-[8px] font-bold px-1.5 py-0.2 rounded-full border transition-all duration-300 ${
                        isReached
                          ? 'bg-accent-primary text-canvas border-accent-primary shadow-[0_0_8px_rgba(227,106,106,0.8)]'
                          : 'bg-surface border-surface-border text-ink-subtle'
                      }`}
                    >
                      0{index + 1}
                    </span>

                    {/* Active Radar Pulse Halo */}
                    {isReached && (
                      <span className="absolute inset-0 rounded-2xl border-2 border-accent-soft animate-ping opacity-35 pointer-events-none" />
                    )}

                    {/* Icon */}
                    {index === 0 ? (
                      <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-accent-primary" />
                    ) : (
                      <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-accent-primary" />
                    )}
                  </div>

                  {/* Persistent Glowing Docking Link from Milestone Station into Card */}
                  <div
                    className={`hidden sm:block absolute left-full top-1/2 -translate-y-1/2 w-2.5 sm:w-3.5 transition-all duration-300 rounded-full ${
                      isReached
                        ? 'h-[2px] bg-accent-primary shadow-[0_0_10px_rgba(227,106,106,0.9)] opacity-100'
                        : 'h-[1.5px] bg-surface-border opacity-40'
                    }`}
                  />
                </div>
              </div>

              {/* Right Column: Modern 3D Floating Role Card */}
              <div className="flex-1 min-w-0 pl-2 sm:pl-4 w-full">
                <div
                  className={`relative overflow-hidden p-5 sm:p-6.5 rounded-3xl bg-surface/50 border transition-all duration-300 shadow-soft-sm space-y-4 transform-gpu hover:-translate-y-1 ${
                    isReached
                      ? 'border-accent-primary/60 bg-surface/75'
                      : 'border-surface-border group-hover:border-accent-primary/40'
                  }`}
                >
                  {/* Subtle Radiant Top Highlight Line */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent-primary via-amber-400 to-accent-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Card Header: Role & Organization */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-surface-border/60 pb-3">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {item.highlightBadge && (
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent-soft/30 text-accent-primary border border-accent-soft/50">
                            {item.highlightBadge}
                          </span>
                        )}
                        {isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-canvas border border-emerald-500/30 text-[10px] font-mono font-semibold text-emerald-700 dark:text-emerald-400 shadow-soft-sm">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <span>Current Focus</span>
                          </span>
                        )}
                        <span className="text-[10px] font-mono text-ink-subtle px-2 py-0.5 rounded-full bg-canvas border border-surface-border">
                          {item.organizationType}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-ink-primary tracking-tight group-hover:text-accent-primary transition-colors">
                        {item.role}
                      </h3>

                      <p className="text-xs sm:text-sm font-semibold text-accent-primaryDark flex flex-wrap items-center gap-2">
                        <span>{item.organization}</span>
                        <span className="text-ink-subtle hidden sm:inline">·</span>
                        <span className="text-xs font-normal text-ink-muted flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-accent-primary" /> {item.location}
                        </span>
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-canvas border border-surface-border text-xs font-mono text-ink-primary shrink-0 self-start sm:self-auto shadow-soft-sm">
                      <Calendar className="w-3.5 h-3.5 text-accent-primary" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Justified Narrative Overview */}
                  <p className="text-xs sm:text-sm text-ink-muted text-justify [text-justify:inter-word] leading-relaxed">
                    {item.overview}
                  </p>

                  {/* Key Deliverables & Technical Accomplishments */}
                  <div className="space-y-1.5 pt-1">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-ink-primary flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-accent-primary" />
                      <span>Key Deliverables &amp; Technical Accomplishments</span>
                    </h4>
                    <ul className="space-y-1.5">
                      {item.achievements.map((ach, aIdx) => (
                        <li
                          key={aIdx}
                          className="flex items-start gap-2 text-xs text-ink-muted text-justify [text-justify:inter-word] leading-relaxed"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Compact Micro-Badges for Tech Stack */}
                  <div className="pt-2.5 border-t border-surface-border/60 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold text-ink-subtle uppercase tracking-wider">
                      Technologies Utilized
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-canvas border border-surface-border hover:border-accent-primary hover:text-accent-primary text-[10px] font-mono font-medium text-ink-primary transition-all hover:scale-105 shadow-soft-sm cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* 2. Station 03: Featured Production Projects (Commercial Deliverables) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex items-start group pt-2"
        >
          {/* Left Telemetry Column for Station 03 */}
          <div className="w-20 sm:w-28 md:w-32 lg:w-36 shrink-0 relative flex items-start pt-5">
            {/* Dynamic Glowing Telemetry Bridge */}
            <div
              ref={(el) => {
                lineRefs.current[2] = el;
              }}
              className="absolute left-3 sm:left-4 md:left-5 lg:left-6 right-auto top-10 pointer-events-none z-10 flex items-center"
            >
              <div
                className={`transition-all duration-500 rounded-full ${
                  activeStep >= 3
                    ? 'h-[2.5px] w-[52px] sm:w-[72px] md:w-[84px] lg:w-[96px] bg-gradient-to-r from-accent-primary via-accent-soft to-accent-primary shadow-[0_0_16px_rgba(227,106,106,1)] opacity-100'
                    : 'h-[1.5px] w-[52px] sm:w-[72px] md:w-[84px] lg:w-[96px] bg-surface-border/60 border-t border-dashed border-surface-border opacity-35'
                }`}
              />
              {activeStep >= 3 && (
                <span className="w-2 h-2 rounded-full bg-accent-primary -ml-1 shrink-0 animate-ping shadow-[0_0_8px_rgba(227,106,106,1)]" />
              )}
            </div>

            {/* Lane 2: Milestone Endpoint Station Node (03) */}
            <div
              onClick={() => scrollToMilestone(2)}
              title="Jump to Featured Production Projects"
              className="absolute left-16 sm:left-22 md:left-26 lg:left-30 -translate-x-1/2 top-5 z-20 cursor-pointer"
            >
              <div
                className={`relative flex items-center justify-center rounded-2xl transition-all duration-500 hover:scale-110 ${
                  activeStep >= 3
                    ? 'w-9 h-9 sm:w-10 sm:h-10 bg-canvas border-2 border-accent-primary text-accent-primary shadow-[0_0_18px_rgba(227,106,106,0.65)] scale-105'
                    : 'w-9 h-9 sm:w-10 sm:h-10 bg-surface/90 border border-surface-border text-ink-muted/70 shadow-soft-sm'
                }`}
              >
                <span
                  className={`absolute -top-1.5 -right-1 font-mono text-[8px] font-bold px-1.5 py-0.2 rounded-full border transition-all duration-300 ${
                    activeStep >= 3
                      ? 'bg-accent-primary text-canvas border-accent-primary shadow-[0_0_8px_rgba(227,106,106,0.8)]'
                      : 'bg-surface border-surface-border text-ink-subtle'
                  }`}
                >
                  03
                </span>

                {activeStep >= 3 && (
                  <span className="absolute inset-0 rounded-2xl border-2 border-accent-soft animate-ping opacity-35 pointer-events-none" />
                )}

                <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-accent-primary" />
              </div>

              {/* Persistent Glowing Docking Link */}
              <div
                className={`hidden sm:block absolute left-full top-1/2 -translate-y-1/2 w-2.5 sm:w-3.5 transition-all duration-300 rounded-full ${
                  activeStep >= 3
                    ? 'h-[2px] bg-accent-primary shadow-[0_0_10px_rgba(227,106,106,0.9)] opacity-100'
                    : 'h-[1.5px] bg-surface-border opacity-40'
                }`}
              />
            </div>
          </div>

          {/* Right Column: Station 03 Header + 2-Column Modern 3D Bento Production Showcase */}
          <div className="flex-1 min-w-0 pl-2 sm:pl-4 w-full space-y-6">
            {/* Section Lead Banner */}
            <div className="p-5 sm:p-6 rounded-3xl bg-surface/40 border border-surface-border/80 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
                <Cpu className="w-3.5 h-3.5" />
                <span>Commercial Production Systems</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-ink-primary tracking-tight">
                Featured Production Projects
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted text-justify [text-justify:inter-word] leading-relaxed">
                Commercial software platforms and production-grade architectures delivered across enterprise AI SaaS, voice agent pipelines, and on-premise retail desktop ERP environments.
              </p>
            </div>

            {/* 2-Column Responsive 3D Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
              {featuredProjects.map((project, pIdx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: pIdx * 0.1 }}
                  className="group relative overflow-hidden p-5 sm:p-6 rounded-3xl bg-surface/50 border border-surface-border hover:border-accent-primary/60 hover:bg-surface/80 transition-all duration-300 shadow-soft-sm hover:shadow-soft-md transform-gpu hover:-translate-y-1 flex flex-col justify-between space-y-4"
                >
                  {/* Subtle Radiant Top Highlight Line */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent-primary via-amber-400 to-accent-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="space-y-3">
                    {/* Project Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 border-b border-surface-border/60 pb-3">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-[10px] font-mono font-bold text-accent-primary">
                            <Bot className="w-3 h-3" />
                            <span>{project.stats}</span>
                          </span>
                          <span className="text-[10px] font-mono text-ink-subtle px-2 py-0.5 rounded-full bg-canvas border border-surface-border">
                            {project.period}
                          </span>
                        </div>

                        <h4 className="text-lg sm:text-xl font-bold text-ink-primary tracking-tight group-hover:text-accent-primary transition-colors">
                          {project.title}
                        </h4>

                        <p className="text-xs font-semibold text-accent-primaryDark">
                          {project.subtitle}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-canvas border border-surface-border text-[10px] font-mono font-medium text-ink-subtle shrink-0 self-start sm:self-auto shadow-soft-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/70" />
                        <span>Client System</span>
                      </div>
                    </div>

                    {/* Justified Narrative Description */}
                    <p className="text-xs text-ink-muted text-justify [text-justify:inter-word] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Architecture & Technical Deliverables */}
                    <div className="space-y-1 pt-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-ink-primary flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-accent-primary" />
                        <span>Architecture &amp; Technical Deliverables</span>
                      </span>
                      <ul className="space-y-1.5">
                        {project.highlights.map((h, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-ink-muted text-justify [text-justify:inter-word] leading-relaxed flex items-start gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Compact Micro-Badges for Technology Stack */}
                  <div className="pt-2.5 border-t border-surface-border/60 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold text-ink-subtle uppercase tracking-wider">
                      Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md bg-canvas border border-surface-border text-[10px] font-mono font-medium text-ink-primary hover:border-accent-primary hover:text-accent-primary transition-colors cursor-default shadow-soft-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Station 04: Compact Terminal Landing Pad Bar */}
            <div
              ref={(el) => {
                lineRefs.current[3] = el;
              }}
              className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-surface-border/60"
            >
              {/* Touchdown Status Micro-Pill */}
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-medium transition-all duration-500 shadow-soft-sm ${
                  activeStep >= 4
                    ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.15)]'
                    : 'bg-surface/80 border-surface-border text-ink-muted'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    activeStep >= 4
                      ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)] animate-pulse'
                      : 'bg-surface-border'
                  }`}
                />
                <span>
                  {activeStep >= 4 ? 'Touchdown Confirmed · 100.0000% Traversed' : 'Approaching Terminal Runway'}
                </span>
              </div>

              {/* Re-launch to Departure Pad Quick Action */}
              <button
                onClick={scrollToTop}
                type="button"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas border border-surface-border hover:border-accent-primary text-xs font-semibold text-ink-primary hover:text-accent-primary transition-all shadow-soft-sm hover:scale-105 active:scale-95 cursor-pointer group/btn"
              >
                <RotateCcw className="w-3.5 h-3.5 text-accent-primary transition-transform duration-300 group-hover/btn:-rotate-90" />
                <span>Re-launch to Departure Pad</span>
                <ArrowUp className="w-3.5 h-3.5 text-ink-subtle group-hover/btn:text-accent-primary group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
