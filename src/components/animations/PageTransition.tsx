'use client';

import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Re-animates route views smoothly when switching between Navbar tabs in Next.js App Router.
 */
export default function PageTransition({ children, className = '' }: PageTransitionProps) {
  const pathname = usePathname();
  const routeKey = pathname.replace(/\/$/, '') || '/';

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        key={routeKey}
        initial={{ opacity: 0, y: 10, scale: 0.996 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.24,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`w-full min-h-[calc(100vh-140px)] ${className}`}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
