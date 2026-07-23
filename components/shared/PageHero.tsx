'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { AuroraBackground } from '@/components/shared/AuroraBackground';
import { CyberBackgroundVideo } from '@/components/shared/CyberBackgroundVideo';

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
      {/* High-performance dynamic cyber telemetry background for zero-latency page loading */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <AuroraBackground className="opacity-70 dark:opacity-50" />
        
        {/* Dynamic Matrix Rain layered with immersive high-contrast cybersecurity background video */}
        <CyberBackgroundVideo videoOpacity={0.50} canvasOpacity={0.06} />
        
        {/* Interactive network grid layout */}
        <div className="absolute inset-0 bg-grid opacity-[0.08] dark:opacity-[0.14] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_95%)]" />
        
        {/* Concentric glowing defensive/radar rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-blue-500/[0.06] dark:border-blue-500/[0.09] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-dashed border-sky-400/[0.04] dark:border-sky-400/[0.06] animate-spin" style={{ animationDuration: '75s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[1300px] rounded-full border border-blue-500/[0.02] dark:border-blue-500/[0.03]" />
        
        {/* Dynamic flowing data streams (SVG vector paths animating endlessly) */}
        <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-45" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M -100 150 C 300 50, 700 250, 1600 150"
            fill="none"
            stroke="url(#hero-telemetry-gradient-1)"
            strokeWidth="1.5"
            strokeDasharray="8 12"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
          />
          <motion.path
            d="M -100 280 C 400 380, 900 120, 1600 320"
            fill="none"
            stroke="url(#hero-telemetry-gradient-2)"
            strokeWidth="1.2"
            strokeDasharray="6 18"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -100 }}
            transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
          />
          <defs>
            <linearGradient id="hero-telemetry-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="hero-telemetry-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating security indicators/glowing signals */}
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-blue-500/40 blur-[1px] animate-ping" style={{ animationDuration: '4.5s' }} />
        <div className="absolute top-2/3 left-2/3 w-2 h-2 rounded-full bg-sky-400/35 blur-[1px] animate-ping" style={{ animationDuration: '5.5s' }} />
        <div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 rounded-full bg-emerald-500/30 blur-[1.5px] animate-ping" style={{ animationDuration: '6.5s' }} />

        {/* Dynamic theme-aware overlays for premium contrast and readability */}
        <div className="absolute inset-0 bg-slate-50/25 dark:bg-slate-950/30 transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/10 via-transparent to-slate-50 dark:from-slate-950/15 dark:via-transparent dark:to-slate-950" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400/80 px-3 py-1 rounded-full glass mb-6"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
