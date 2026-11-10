'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1], // ease-out cubic
      }}
      className={`w-full min-h-[calc(100vh-140px)] ${className}`}
    >
      {children}
    </motion.div>
  );
}

