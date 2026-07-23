'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { FlipCard } from '@/components/shared/FlipCard';
import { ArrowRight, Check, Brain, ShieldCheck, Radar, Zap, FileCheck, EyeOff, Database, Network, Globe } from 'lucide-react';

const fragmentedTools = [
  'SIEM',
  'EDR',
  'NDR',
  'SOAR',
  'Threat Intel',
  'Vuln Mgmt',
  'Compliance',
  'DLP',
  'Firewall',
  'Email Security',
];

const unifiedModules = [
  {
    icon: Brain,
    name: 'AI SOC',
    benefit: 'Correlates signals across every module — one incident queue, zero noise.',
  },
  {
    icon: ShieldCheck,
    name: 'EDR',
    benefit: 'Behavioral detection with automated containment on every endpoint.',
  },
  {
    icon: Network,
    name: 'NDR',
    benefit: 'Full-packet inspection catches lateral movement and data exfiltration.',
  },
  {
    icon: Database,
    name: 'SIEM',
    benefit: 'Unified log lake with AI-powered search and retention built in.',
  },
  {
    icon: Zap,
    name: 'SOAR',
    benefit: 'Pre-built playbooks isolate threats in seconds, not hours.',
  },
  {
    icon: Radar,
    name: 'Threat Intelligence',
    benefit: 'Regional threat feeds enriched with African attack context.',
  },
  {
    icon: FileCheck,
    name: 'Compliance',
    benefit: 'Continuous monitoring against ISO, SOC 2, POPIA, NDPR and more.',
  },
  {
    icon: Globe,
    name: 'Attack Surface Mgmt',
    benefit: 'Discovers shadow IT and exposed assets across your perimeter.',
  },
  {
    icon: EyeOff,
    name: 'Dark Web Monitoring',
    benefit: 'Scans forums for leaked credentials and brand impersonation.',
  },
];

export function WhyCyberGuard() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why CyberGuard"
          title={
            <>
              Stop juggling 10+ security tools.
              <br />
              <span className="text-gradient-blue">Unify everything.</span>
            </>
          }
          description="Most African businesses cobble together a dozen point solutions, each with its own dashboard, alerts, and blind spots. CyberGuard replaces all of them with a single AI-powered platform."
        />

        {/* Merge animation: fragmented tools converging */}
        <div className="mt-16 relative h-64 flex items-center justify-center overflow-hidden">
          {/* Fragmented tools converging to center */}
          {fragmentedTools.map((tool, i) => {
            const angle = (i * 2 * Math.PI) / fragmentedTools.length;
            const radius = 150; // Radius distance in pixels from center
            const startX = Number((Math.cos(angle) * radius).toFixed(2));
            const startY = Number((Math.sin(angle) * radius).toFixed(2));

            return (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.6, x: startX, y: startY }}
                whileInView={{
                  opacity: [0, 0.75, 0.75, 0],
                  scale: [0.6, 1, 0.8, 0.3],
                  x: [startX, startX, startX * 0.1, 0],
                  y: [startY, startY, startY * 0.1, 0]
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 3,
                  delay: i * 0.15,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  ease: "easeInOut"
                }}
                className="absolute px-3 py-1 rounded-lg glass text-xs font-mono text-muted-foreground whitespace-nowrap select-none pointer-events-none"
              >
                {tool}
              </motion.span>
            );
          })}

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: [0.8, 1.05, 1], opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative z-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 text-white font-semibold text-base shadow-[0_0_30px_rgba(59,130,246,0.3)] select-none pointer-events-none"
          >
            <Check className="w-5 h-5" />
            CyberGuard Unified Platform
          </motion.div>
        </div>

        {/* FlipCard grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {unifiedModules.map((module, i) => (
            <motion.div
              key={module.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="h-[210px]"
            >
              <FlipCard
                front={
                  <div className="glass-card rounded-2xl h-full p-4 flex flex-col items-center justify-center text-center hover:border-blue-500/20 transition-colors">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-500/10 mb-3">
                      <module.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="font-display font-semibold text-sm leading-snug text-slate-900 dark:text-slate-100">{module.name}</div>
                  </div>
                }
                back={
                  <div className="glass-strong rounded-2xl h-full p-4 flex flex-col items-center justify-center text-center border border-blue-500/20">
                    <module.icon className="w-5 h-5 text-blue-400 mb-2" />
                    <p className="text-[11px] text-slate-700 dark:text-slate-200 leading-relaxed font-sans">{module.benefit}</p>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-300 font-medium"
        >
          <span>Tap a card to see the benefit</span>
          <ArrowRight className="w-4 h-4 text-blue-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
