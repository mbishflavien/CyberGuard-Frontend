'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, Calendar, ShieldCheck, Zap, Activity, Play } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* High-performance zero-latency cyber telemetry & dynamic video background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Dynamic network map layout */}
        <div className="absolute inset-0 bg-grid opacity-[0.06] dark:opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_90%)]" />

        {/* Concentric rotating radar circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-blue-500/[0.04] dark:border-blue-500/[0.07] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-dashed border-sky-400/[0.03] dark:border-sky-400/[0.05] animate-spin" style={{ animationDuration: '90s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] rounded-full border border-blue-500/[0.02] dark:border-blue-500/[0.03]" />

        {/* SVG flowing data channels */}
        <svg className="absolute inset-0 w-full h-full opacity-15 dark:opacity-35" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M -100 200 C 400 50, 800 350, 1800 200"
            fill="none"
            stroke="url(#hero-flow-1)"
            strokeWidth="1.5"
            strokeDasharray="10 15"
            initial={{ strokeDashoffset: 120 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
          />
          <motion.path
            d="M -100 400 C 500 550, 1000 150, 1800 450"
            fill="none"
            stroke="url(#hero-flow-2)"
            strokeWidth="1"
            strokeDasharray="6 20"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -120 }}
            transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          />
          <defs>
            <linearGradient id="hero-flow-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="hero-flow-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Dynamic theme-aware overlays for premium contrast and readability */}
        <div className="absolute inset-0 bg-slate-50/20 dark:bg-slate-950/25 transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/10 via-transparent to-slate-50 dark:from-slate-950/15 dark:via-transparent dark:to-slate-950" />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full"
      >
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.02] mb-8 text-slate-900 dark:text-white"
          >
            <span className="block">One Platform.</span>
            <span className="block">Zero Blind Spots.</span>
            <span className="block text-gradient-blue gradient-animate">Cybersecurity Built for Africa.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-10"
          >
            CyberGuard unifies AI Security Operations, EDR, NDR, SIEM, SOAR, Threat
            Intelligence, and Compliance into a single intelligent platform — replacing
            10+ fragmented tools with one source of truth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/start-trial"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-sky-400 text-white px-7 py-4 rounded-xl font-semibold overflow-hidden transition-all hover:shadow-[0_0_50px_-5px_hsla(199,89%,48%,0.6)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 glass px-7 py-4 rounded-xl font-semibold hover:bg-foreground/5 text-slate-800 dark:text-white border border-slate-300/40 dark:border-white/10 transition-all shadow-sm"
            >
              <Calendar className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              Book a Demo
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-4 py-4 font-medium transition-colors"
            >
              <Play className="w-4 h-4" />
              Watch Platform Tour
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-10"
          >
            {[
              { icon: ShieldCheck, label: 'SOC 2 Type II' },
              { icon: Zap, label: '< 3 min response' },
              { icon: Activity, label: '24/7 AI monitoring' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <item.icon className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                {item.label}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}
