'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { AuroraBackground } from '@/components/shared/AuroraBackground';
import { CyberMatrixBackground } from '@/components/shared/CyberMatrixBackground';

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden bg-slate-950 border-t border-slate-200/10 dark:border-white/10">
      <AuroraBackground />
      <div className="absolute inset-0 bg-grid mask-fade-bottom opacity-15" />
      
      {/* Immersive cybersecurity matrix background animation */}
      <CyberMatrixBackground className="opacity-40 dark:opacity-35 pointer-events-none z-0" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
        <div className="flex flex-col items-center">
          {/* Main animated headline with vibrant high-contrast entrance */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] mb-8 text-white">
            <motion.span
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block mb-2 text-slate-100"
            >
              Your security shouldn&apos;t be
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 32, scale: 0.92, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 drop-shadow-[0_0_35px_rgba(56,189,248,0.65)] font-black"
            >
              a patchwork of tools.
            </motion.span>
          </h2>

          {/* Animated Glowing Accent Beam */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="w-48 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent rounded-full mb-10 shadow-[0_0_20px_#38bdf8]"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
          >
            Join 2,400+ African businesses protecting their future with CyberGuard.
            Start your free trial today — no credit card, no commitment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/start-trial"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-sky-400 text-white px-8 py-4 rounded-xl font-bold shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_50px_rgba(56,189,248,0.7)] transition-all transform hover:-translate-y-0.5"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 glass-strong px-8 py-4 rounded-xl font-bold hover:bg-white/10 text-white border border-white/20 transition-all shadow-sm transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-sky-400" />
              Book a Demo
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 font-medium"
          >
            <span>14-day free trial</span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400/50" />
            <span>No credit card required</span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400/50" />
            <span>Cancel anytime</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
