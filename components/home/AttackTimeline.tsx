'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/SectionHeading';
import {
  Scan,
  MonitorSmartphone,
  Network,
  Radar,
  Brain,
  Zap,
  Bell,
  CheckCircle2,
} from 'lucide-react';

const timeline = [
  {
    icon: Scan,
    time: 'T+0s',
    title: 'Attacker scans network',
    description: 'Adversary runs port scan against external-facing services, probing for vulnerabilities.',
    color: 'red',
  },
  {
    icon: MonitorSmartphone,
    time: 'T+3s',
    title: 'Endpoint Agent detects behavior',
    description: 'EDR agent flags anomalous process execution pattern on targeted endpoint.',
    color: 'amber',
  },
  {
    icon: Network,
    time: 'T+8s',
    title: 'Network Sensor observes movement',
    description: 'NDR detects lateral movement attempt across internal subnet.',
    color: 'blue',
  },
  {
    icon: Radar,
    time: 'T+12s',
    title: 'Threat Intelligence enriches data',
    description: 'Attacker IP matched against known malicious infrastructure in threat intel database.',
    color: 'blue',
  },
  {
    icon: Brain,
    time: 'T+15s',
    title: 'AI correlates events',
    description: 'AI engine combines endpoint, network, and intel signals into a single high-confidence incident.',
    color: 'indigo',
  },
  {
    icon: Zap,
    time: 'T+18s',
    title: 'SOAR isolates endpoint',
    description: 'Automated playbook triggers network isolation of compromised endpoint, cutting attacker access.',
    color: 'sky',
  },
  {
    icon: Bell,
    time: 'T+22s',
    title: 'Executive notified',
    description: 'Stakeholders receive real-time alert with incident summary, impact assessment, and actions taken.',
    color: 'blue',
  },
  {
    icon: CheckCircle2,
    time: 'T+180s',
    title: 'Incident closed',
    description: 'Threat neutralized, root cause identified, and preventive controls updated. Total time: 3 minutes.',
    color: 'emerald',
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; glow: string; stroke: string }> = {
  red: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/20', glow: 'shadow-[0_0_20px_-5px_rgba(239,68,68,0.4)]', stroke: 'rgba(239,68,68,0.5)' },
  amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20', glow: 'shadow-[0_0_20px_-5px_rgba(251,191,36,0.4)]', stroke: 'rgba(251,191,36,0.5)' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20', glow: 'shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)]', stroke: 'rgba(59,130,246,0.5)' },
  indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'border-indigo-500/20', glow: 'shadow-[0_0_20px_-5px_rgba(99,102,241,0.4)]', stroke: 'rgba(99,102,241,0.5)' },
  sky: { bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/20', glow: 'shadow-[0_0_20px_-5px_rgba(14,165,233,0.4)]', stroke: 'rgba(14,165,233,0.5)' },
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20', glow: 'shadow-[0_0_20px_-5px_rgba(52,211,153,0.4)]', stroke: 'rgba(52,211,153,0.5)' },
};

export function AttackTimeline() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="How CyberGuard Stops an Attack"
          title={
            <>
              From detection to containment in <span className="text-gradient-blue">180 seconds</span>
            </>
          }
          description="Watch how CyberGuard's unified platform detects, correlates, and neutralizes a real-world attack — automatically."
        />

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-400/30 via-blue-400/30 to-emerald-400/30 md:-translate-x-px" />

          {/* Animated SVG connecting lines */}
          <svg className="absolute left-6 md:left-1/2 top-0 bottom-0 w-2 -translate-x-1/2 pointer-events-none" preserveAspectRatio="none">
            <line x1="1" y1="0" x2="1" y2="100%" stroke="url(#timeline-flow)" strokeWidth="2" strokeDasharray="4 6" className="animate-pulse" />
            <defs>
              <linearGradient id="timeline-flow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(239,68,68,0.6)" />
                <stop offset="50%" stopColor="rgba(59,130,246,0.6)" />
                <stop offset="100%" stopColor="rgba(52,211,153,0.6)" />
              </linearGradient>
            </defs>
          </svg>

          <div className="space-y-8">
            {timeline.map((step, i) => {
              const c = colorMap[step.color];
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ 
                    opacity: 0, 
                    y: 40,
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                  }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.05 
                  }}
                  className={`relative flex items-center gap-6 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Branch Line (Trunk to branch connector) that unravels elegantly */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 pointer-events-none z-0 ${
                    isLeft ? 'right-1/2 pr-6 w-16' : 'left-1/2 pl-6 w-16'
                  }`}>
                    <svg viewBox="0 0 64 24" className="w-full h-6 overflow-visible" fill="none">
                      <motion.path
                        d={isLeft ? "M 64 12 Q 32 0, 0 12" : "M 0 12 Q 32 0, 64 12"}
                        stroke={step.color === 'red' ? '#ef4444' : step.color === 'amber' ? '#fbbf24' : step.color === 'indigo' ? '#6366f1' : step.color === 'sky' ? '#38bdf8' : step.color === 'emerald' ? '#10b981' : '#3b82f6'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.6 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      />
                      <motion.path
                        d={isLeft ? "M 48 9 Q 32 18, 16 14" : "M 16 9 Q 32 18, 48 14"}
                        stroke={step.color === 'red' ? '#ef4444' : step.color === 'amber' ? '#fbbf24' : step.color === 'indigo' ? '#6366f1' : step.color === 'sky' ? '#38bdf8' : step.color === 'emerald' ? '#10b981' : '#3b82f6'}
                        strokeWidth="1"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.35 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </svg>
                  </div>

                  {/* Node */}
                  <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 z-10`}>
                    <div className={`w-12 h-12 rounded-full ${c.bg} ${c.border} border flex items-center justify-center ${c.glow}`}>
                      <step.icon className={`w-5 h-5 ${c.text}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ml-20 md:ml-0 ${isLeft ? 'md:text-right md:pr-16' : 'md:pl-16'} perspective-1000`} style={{ transformStyle: 'preserve-3d' }}>
                    <motion.div
                      initial={{ 
                        rotateY: isLeft ? -75 : 75,
                        rotateX: 12,
                        x: isLeft ? -80 : 80,
                        opacity: 0,
                        scale: 0.85
                      }}
                      whileInView={{ 
                        rotateY: 0,
                        rotateX: 0,
                        x: 0,
                        opacity: 1,
                        scale: 1 
                      }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ 
                        duration: 1.2, 
                        ease: [0.16, 1, 0.3, 1],
                        delay: i * 0.1
                      }}
                      whileHover={{ 
                        y: -6,
                        scale: 1.02,
                        rotateY: isLeft ? -3 : 3,
                        boxShadow: '0 25px 50px -12px rgba(59,130,246,0.25)'
                      }}
                      className="glass rounded-2xl p-6 hover:bg-white/5 transition-colors border-white/5 hover:border-blue-500/20 transform-style-3d origin-center"
                    >
                      <div className={`text-xs font-mono ${c.text} mb-1.5`}>{step.time}</div>
                      <h3 className="font-display text-lg font-semibold mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
