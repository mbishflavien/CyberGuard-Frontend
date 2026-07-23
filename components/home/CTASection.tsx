'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { AuroraBackground } from '@/components/shared/AuroraBackground';
import { CyberMatrixBackground } from '@/components/shared/CyberMatrixBackground';

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden bg-slate-950/25 border-t border-slate-200/5 dark:border-white/5">
      <AuroraBackground />
      <div className="absolute inset-0 bg-grid mask-fade-bottom opacity-10" />
      
      {/* Immersive cybersecurity matrix background animation */}
      <CyberMatrixBackground className="opacity-30 dark:opacity-25 pointer-events-none z-0" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Your security shouldn&apos;t be <br />
            <span className="text-gradient-blue">a patchwork of tools.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Join 2,400+ African businesses protecting their future with CyberGuard.
            Start your free trial today — no credit card, no commitment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/start-trial"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-sky-400 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-[0_0_50px_-5px_hsla(199,89%,48%,0.6)] transition-all"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 glass px-8 py-4 rounded-xl font-semibold hover:bg-white/5 text-slate-800 dark:text-white border border-slate-300/40 dark:border-white/10 transition-all"
            >
              <Calendar className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              Book a Demo
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            <span>14-day free trial</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-muted-foreground/30" />
            <span>No credit card required</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-muted-foreground/30" />
            <span>Cancel anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
