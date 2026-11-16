'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';

export const TRIGGER_BUNNY_EVENT = 'trigger-bunny-hello';

export function triggerBunnyHello() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(TRIGGER_BUNNY_EVENT));
  }
}

export default function BunnyPageFlip() {
  const router = useRouter();
  const pathname = usePathname();

  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'idle' | 'peek' | 'flip' | 'retreat'>('idle');
  const [isAlreadyOnContact, setIsAlreadyOnContact] = useState(false);

  const startAnimation = useCallback(() => {
    if (isActive) return;

    const onContact = pathname === '/contact/' || pathname === '/contact';
    setIsAlreadyOnContact(onContact);
    setIsActive(true);
    setPhase('peek');

    if (onContact) {
      // Just peek, wave, show "You're already here!", then retreat smoothly to the right
      setTimeout(() => {
        setPhase('retreat');
      }, 2100);

      setTimeout(() => {
        setIsActive(false);
        setPhase('idle');
      }, 2600);
      return;
    }

    // Sequence for page flip to Contact Hub:
    // 0ms - 850ms: Peek in from right + lively wave + speech bubble
    // 850ms - 1700ms: ONE fluid unbroken right-to-left page sweep (100% -> -100%)
    // 1250ms: router.push('/contact/') while screen is fully covered mid-sweep
    // 1750ms: Carrier is completely off-screen on the left -> silent instant unmount (NO reverse back flip!)
    setTimeout(() => {
      setPhase('flip');
    }, 850);

    setTimeout(() => {
      router.push('/contact/');
    }, 1250);

    setTimeout(() => {
      setIsActive(false);
      setPhase('idle');
    }, 1750);
  }, [isActive, pathname, router]);

  useEffect(() => {
    const handleTrigger = () => {
      startAnimation();
    };

    window.addEventListener(TRIGGER_BUNNY_EVENT, handleTrigger);
    return () => {
      window.removeEventListener(TRIGGER_BUNNY_EVENT, handleTrigger);
    };
  }, [startAnimation]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden select-none">
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            key="bunny-page-carrier"
            initial={{ x: 'calc(100% + 220px)' }}
            animate={{
              x:
                phase === 'peek'
                  ? '100%'
                  : phase === 'flip'
                  ? '-100%'
                  : 'calc(100% + 220px)',
            }}
            // CRITICAL FIX: Instant fade exit with 0 duration so there is NEVER a reverse "back-flip" wipe!
            exit={{ opacity: 0, transition: { duration: 0 } }}
            transition={
              phase === 'peek'
                ? { type: 'spring', stiffness: 360, damping: 26 }
                : phase === 'flip'
                ? { duration: 0.85, ease: [0.32, 0.72, 0, 1] }
                : { duration: 0.45, ease: 'easeInOut' }
            }
            className="absolute inset-y-0 right-0 w-full flex items-center justify-start overflow-visible"
          >
            {/* 1. Animated Bunny Mascot (Mounted on the leading left edge of the page) */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-[calc(100%-26px)] w-32 h-44 sm:w-36 sm:h-48 shrink-0 z-30 pointer-events-none">
              {/* Speech Bubble (Snug to the bunny's head with tail pointing to cheek/mouth) */}
              <AnimatePresence>
                {phase === 'peek' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.35, x: 15 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.3, x: 10 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 25, delay: 0.12 }}
                    className="absolute right-[92%] top-6 mr-1.5 sm:mr-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-[#AA5E7A] shadow-[0_12px_28px_rgba(124,14,68,0.28)] flex items-center gap-1.5 whitespace-nowrap z-40 pointer-events-none"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#7C0E44] dark:text-[#F2DACE]">
                      {isAlreadyOnContact
                        ? "You're already here! 🥕 Hop around!"
                        : 'Saying hello? Hop in! 🥕'}
                    </span>

                    {/* Speech pointer tail aimed directly at the bunny's face */}
                    <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-[#AA5E7A]" />
                    <div className="absolute top-1/2 -right-[7px] -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[7px] border-l-white dark:border-l-zinc-900" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Multi-joint Animated Vector Bunny */}
              <motion.div
                animate={
                  phase === 'flip'
                    ? { rotate: -14, y: [0, -4, 0] }
                    : { rotate: [0, 2, 0], y: [0, -6, 0] }
                }
                transition={
                  phase === 'flip'
                    ? { y: { repeat: Infinity, duration: 0.24, ease: 'easeInOut' }, rotate: { duration: 0.18 } }
                    : {
                        y: { repeat: Infinity, duration: 0.55, ease: 'easeInOut' },
                        rotate: { repeat: Infinity, duration: 1.1, ease: 'easeInOut' },
                      }
                }
                className="w-full h-full relative"
              >
                <svg
                  viewBox="0 0 160 190"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.3)]"
                >
                  {/* Fluffy Cottontail on the right */}
                  <motion.g
                    animate={{ rotate: [-8, 8, -8] }}
                    transition={{ repeat: Infinity, duration: 0.45, ease: 'easeInOut' }}
                    style={{ transformOrigin: '124px 145px' }}
                  >
                    <circle cx="124" cy="145" r="13" fill="#FFFDF9" stroke="#E6D3C8" strokeWidth="2.5" />
                    <circle cx="129" cy="141" r="7" fill="#FFFDF9" />
                    <circle cx="127" cy="149" r="6" fill="#FFFDF9" />
                  </motion.g>

                  {/* Bunny Body */}
                  <ellipse cx="90" cy="142" rx="42" ry="34" fill="#FFFDF9" stroke="#E6D3C8" strokeWidth="2.5" />
                  {/* Soft Belly Warmth */}
                  <ellipse cx="80" cy="145" rx="27" ry="21" fill="#FDF6F0" />

                  {/* Left Ear (Tall, wobbly, floppy ear) */}
                  <motion.g
                    animate={
                      phase === 'flip'
                        ? { rotate: -24 }
                        : { rotate: [-10, 10, -10] }
                    }
                    transition={
                      phase === 'flip'
                        ? { duration: 0.2 }
                        : { repeat: Infinity, duration: 0.75, ease: 'easeInOut' }
                    }
                    style={{ transformOrigin: '60px 72px' }}
                  >
                    <path
                      d="M60 72 C48 34 40 10 54 6 C68 2 74 32 68 72 Z"
                      fill="#FFFDF9"
                      stroke="#E6D3C8"
                      strokeWidth="2.5"
                    />
                    {/* Pink Inner Ear */}
                    <path
                      d="M59 66 C51 36 47 18 55 15 C63 12 66 36 64 66 Z"
                      fill="#F5D3C4"
                    />
                  </motion.g>

                  {/* Right Ear (Playfully tilted cute ear) */}
                  <motion.g
                    animate={
                      phase === 'flip'
                        ? { rotate: -18 }
                        : { rotate: [12, -8, 12] }
                    }
                    transition={
                      phase === 'flip'
                        ? { duration: 0.2 }
                        : { repeat: Infinity, duration: 0.95, ease: 'easeInOut' }
                    }
                    style={{ transformOrigin: '82px 74px' }}
                  >
                    <path
                      d="M82 74 C90 38 102 12 116 14 C128 16 122 44 96 74 Z"
                      fill="#FFFDF9"
                      stroke="#E6D3C8"
                      strokeWidth="2.5"
                    />
                    {/* Pink Inner Ear */}
                    <path
                      d="M85 68 C91 40 98 22 108 24 C116 26 112 46 95 68 Z"
                      fill="#F5D3C4"
                    />
                  </motion.g>

                  {/* Head */}
                  <circle cx="72" cy="98" r="34" fill="#FFFDF9" stroke="#E6D3C8" strokeWidth="2.5" />
                  {/* Chubby Cheeks */}
                  <ellipse cx="72" cy="105" rx="36" ry="24" fill="#FFFDF9" />

                  {/* Rosy Anime Cheek Blushes */}
                  <ellipse cx="48" cy="110" rx="8" ry="5" fill="#E89EB0" opacity="0.75" />
                  <ellipse cx="94" cy="110" rx="8" ry="5" fill="#E89EB0" opacity="0.75" />

                  {/* Left Eye (with blink animation) */}
                  <motion.g
                    animate={{ scaleY: [1, 1, 0.08, 1, 1] }}
                    transition={{ repeat: Infinity, duration: 2.6, times: [0, 0.42, 0.48, 0.54, 1] }}
                    style={{ transformOrigin: '58px 95px' }}
                  >
                    <ellipse cx="58" cy="95" rx="6" ry="8" fill="#3D0B24" />
                    {/* Catchlights */}
                    <circle cx="56" cy="91" r="2.5" fill="white" />
                    <circle cx="60" cy="98" r="1.3" fill="white" />
                  </motion.g>

                  {/* Right Eye (with blink animation) */}
                  <motion.g
                    animate={{ scaleY: [1, 1, 0.08, 1, 1] }}
                    transition={{ repeat: Infinity, duration: 2.6, times: [0, 0.42, 0.48, 0.54, 1] }}
                    style={{ transformOrigin: '86px 95px' }}
                  >
                    <ellipse cx="86" cy="95" rx="6" ry="8" fill="#3D0B24" />
                    {/* Catchlights */}
                    <circle cx="84" cy="91" r="2.5" fill="white" />
                    <circle cx="88" cy="98" r="1.3" fill="white" />
                  </motion.g>

                  {/* Eyebrows (Determined angle when pulling!) */}
                  {phase === 'flip' ? (
                    <g stroke="#AA5E7A" strokeWidth="2" strokeLinecap="round">
                      <path d="M52 83 Q58 87 64 85" />
                      <path d="M80 85 Q86 87 92 83" />
                    </g>
                  ) : (
                    <g stroke="#AA5E7A" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M52 84 Q58 80 64 84" />
                      <path d="M80 84 Q86 80 92 84" />
                    </g>
                  )}

                  {/* Nose (Twitching) */}
                  <motion.polygon
                    points="72,106 68,101 76,101"
                    fill="#AA5E7A"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 0.35 }}
                  />

                  {/* Mouth */}
                  <path
                    d={phase === 'flip' ? 'M68 109 Q72 113 76 109' : 'M66 107 Q72 112 78 107'}
                    stroke="#AA5E7A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Whiskers Left */}
                  <line x1="44" y1="104" x2="26" y2="101" stroke="#AA5E7A" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
                  <line x1="44" y1="108" x2="24" y2="111" stroke="#AA5E7A" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />

                  {/* Whiskers Right */}
                  <line x1="98" y1="104" x2="116" y2="101" stroke="#AA5E7A" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
                  <line x1="98" y1="108" x2="118" y2="111" stroke="#AA5E7A" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />

                  {/* Effort Sweat-Drop (Only during pulling flip) */}
                  {phase === 'flip' && (
                    <motion.path
                      initial={{ scale: 0 }}
                      animate={{ scale: [0.8, 1.2, 1] }}
                      d="M44 82 C42 78 46 74 48 74 C50 74 54 78 52 82 C51 84 45 84 44 82 Z"
                      fill="#60A5FA"
                    />
                  )}

                  {/* PAWS & HANDS INTERACTION */}
                  {phase !== 'flip' ? (
                    /* PEEK MODE: Rest right paw, actively wave left paw with pink toe beans! */
                    <g>
                      {/* Resting Back Paw */}
                      <ellipse cx="106" cy="138" rx="10" ry="7" fill="#FFFDF9" stroke="#E6D3C8" strokeWidth="2" />
                      <circle cx="106" cy="138" r="3.2" fill="#F5D3C4" />

                      {/* Energetically Waving Front Paw! */}
                      <motion.g
                        style={{ transformOrigin: '42px 120px' }}
                        animate={{ rotate: [-28, 25, -28] }}
                        transition={{ repeat: Infinity, duration: 0.32, ease: 'easeInOut' }}
                      >
                        {/* Arm */}
                        <path
                          d="M42 120 C32 105 24 88 30 76 C36 66 48 76 45 102 Z"
                          fill="#FFFDF9"
                          stroke="#E6D3C8"
                          strokeWidth="2.5"
                        />
                        {/* Hand Palm */}
                        <circle cx="30" cy="76" r="9.5" fill="#FFFDF9" stroke="#E6D3C8" strokeWidth="2" />
                        {/* Main Palm Bean */}
                        <circle cx="30" cy="76" r="4" fill="#E89EB0" />
                        {/* 3 Cute Finger Toe Beans */}
                        <circle cx="23" cy="70" r="1.8" fill="#E89EB0" />
                        <circle cx="30" cy="67" r="1.8" fill="#E89EB0" />
                        <circle cx="37" cy="70" r="1.8" fill="#E89EB0" />

                        {/* Cheerful Magic Sparkle beside waving hand */}
                        <motion.text
                          animate={{ scale: [0.8, 1.25, 0.8], opacity: [0.6, 1, 0.6] }}
                          transition={{ repeat: Infinity, duration: 0.55 }}
                          x="10"
                          y="65"
                          fontSize="13"
                        >
                          ✨
                        </motion.text>
                      </motion.g>
                    </g>
                  ) : (
                    /* FLIP MODE: Both hands reach out and visibly CLUTCH the curled page edge! */
                    <g>
                      {/* Top Arm Reaching to Edge */}
                      <path
                        d="M44 110 C72 95 110 94 146 102"
                        stroke="#FFFDF9"
                        strokeWidth="15"
                        strokeLinecap="round"
                      />
                      <path
                        d="M44 110 C72 95 110 94 146 102"
                        stroke="#E6D3C8"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      {/* Top Paw Clamping over the Page Edge */}
                      <ellipse cx="146" cy="102" rx="10" ry="7" fill="#FFFDF9" stroke="#E6D3C8" strokeWidth="2.5" />
                      <circle cx="142" cy="102" r="3.2" fill="#E89EB0" />
                      {/* Finger gripping lines */}
                      <path d="M149 97 C153 99 153 105 149 107" stroke="#E6D3C8" strokeWidth="2" fill="none" />

                      {/* Bottom Arm Reaching to Edge */}
                      <path
                        d="M62 126 C90 118 118 116 150 122"
                        stroke="#FFFDF9"
                        strokeWidth="15"
                        strokeLinecap="round"
                      />
                      <path
                        d="M62 126 C90 118 118 116 150 122"
                        stroke="#E6D3C8"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      {/* Bottom Paw Clamping over the Page Edge */}
                      <ellipse cx="150" cy="122" rx="10" ry="7" fill="#FFFDF9" stroke="#E6D3C8" strokeWidth="2.5" />
                      <circle cx="146" cy="122" r="3.2" fill="#E89EB0" />
                      {/* Finger gripping lines */}
                      <path d="M153 117 C157 119 157 125 153 127" stroke="#E6D3C8" strokeWidth="2" fill="none" />
                    </g>
                  )}
                </svg>
              </motion.div>
            </div>

            {/* 2. The Turning Page Surface (Sweeps continuously across the screen from right to left) */}
            <div className="relative w-full h-full bg-gradient-to-r from-[#7C0E44] via-[#AA5E7A] to-[#D49A9A] shadow-[-25px_0_45px_rgba(0,0,0,0.5)] flex items-center justify-center">
              {/* Curled Paper Fold Glow on the leading left edge */}
              <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-white/35 via-white/10 to-transparent blur-sm pointer-events-none" />
              <div className="absolute top-0 bottom-0 left-0 w-2 bg-white/95 shadow-[0_0_14px_rgba(255,255,255,0.9)] pointer-events-none" />

              {/* Playful Floating Bunny Mascot / Carrot in Center */}
              <div className="flex flex-col items-center gap-2.5 text-white/95 select-none px-4 text-center">
                <span className="text-4xl sm:text-5xl animate-bounce">🥕</span>
                <span className="text-base sm:text-lg font-mono font-extrabold tracking-wider uppercase text-[#F2DACE] drop-shadow-md">
                  Hopping to Contact Hub...
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
