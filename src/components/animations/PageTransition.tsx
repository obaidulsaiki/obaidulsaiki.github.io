'use client';

import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Featherweight route crossfade without vertical jumping or subpixel text blurring.
 */
export default function PageTransition({ children, className = '' }: PageTransitionProps) {
  const pathname = usePathname();
  const routeKey = pathname.replace(/\/$/, '') || '/';

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        key={routeKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.12,
          ease: 'easeOut',
        }}
        className={`w-full min-h-[calc(100vh-140px)] ${className}`}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
