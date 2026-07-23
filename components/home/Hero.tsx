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
      {/* High-performance zero-latency telemetry background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute inset-0 bg-grid opacity-[0.06] dark:opacity-[0.10] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_90%)]" />

        {/* Tactical radar rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-blue-500/[0.05] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-dashed border-blue-500/[0.04] animate-spin" style={{ animationDuration: '90s' }} />

        {/* Dynamic overlays for contrast */}
        <div className="absolute inset-0 bg-slate-950/20 transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950" />
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
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.02] mb-8 text-slate-900 dark:text-white drop-shadow-md"
          >
            <span className="block">One Platform.</span>
            <span className="block">Zero Blind Spots.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 dark:from-blue-400 dark:via-indigo-300 dark:to-slate-100 font-extrabold">
              Cybersecurity Built for Africa.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl mb-10 font-normal"
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
              className="group relative inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-4 rounded-xl font-bold shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-0.5"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-7 py-4 rounded-xl font-semibold border border-slate-700 transition-all shadow-sm"
            >
              <Calendar className="w-4 h-4 text-blue-400" />
              Book a Demo
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white px-4 py-4 font-medium transition-colors"
            >
              <Play className="w-4 h-4 text-blue-400" />
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
              <div key={item.label} className="flex items-center gap-2 text-sm text-slate-400">
                <item.icon className="w-4 h-4 text-blue-400" />
                {item.label}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
