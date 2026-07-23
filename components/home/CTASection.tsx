'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, ShieldCheck } from 'lucide-react';
import { CyberMatrixBackground } from '@/components/shared/CyberMatrixBackground';

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden bg-slate-950 border-t border-slate-800">
      <div className="absolute inset-0 bg-grid mask-fade-bottom opacity-10 pointer-events-none" />
      
      {/* Sovereign tactical grid telemetry backdrop */}
      <CyberMatrixBackground className="opacity-30 pointer-events-none z-0" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
        <div className="flex flex-col items-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-bold tracking-wider uppercase mb-8"
          >
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            Consolidated Sovereign Security
          </motion.div>

          {/* Main animated headline — Crisp, prominent, high contrast with zero blur lag */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="block mb-3 text-white drop-shadow-md"
            >
              Your security shouldn&apos;t be
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-100 font-black tracking-tight"
            >
              a patchwork of tools.
            </motion.span>
          </h2>

          {/* Refined Blue Accent Line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="w-40 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full mb-10"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
          >
            Join 2,400+ African businesses protecting their future with CyberGuard.
            Start your free trial today — no credit card, no commitment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/start-trial"
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-0.5"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold border border-slate-700 transition-all shadow-sm transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-blue-400" />
              Book a Demo
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 font-medium"
          >
            <span>14-day free trial</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
            <span>No credit card required</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
            <span>Cancel anytime</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
