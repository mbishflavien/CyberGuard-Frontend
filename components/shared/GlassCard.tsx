'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function GlassCard({
  children,
  className,
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        hover
          ? { y: -4, transition: { duration: 0.2 } }
          : undefined
      }
      className={cn(
        'glass rounded-2xl relative overflow-hidden',
        hover && 'transition-shadow hover:shadow-[0_0_40px_-10px_hsla(199,89%,48%,0.3)]',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
