'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { Building2, ShieldX, MonitorSmartphone, Globe2, Timer } from 'lucide-react';

const stats = [
  { icon: Building2, value: 2400, suffix: '+', label: 'Organizations Protected' },
  { icon: ShieldX, value: 48, suffix: 'M+', label: 'Threats Blocked' },
  { icon: MonitorSmartphone, value: 320, suffix: 'K+', label: 'Endpoints Secured' },
  { icon: Globe2, value: 54, label: 'Countries Covered' },
  { icon: Timer, value: 180, prefix: '', suffix: 's', label: 'Average Response Time' },
];

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      <div className="absolute inset-0 bg-mesh opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          style={{ y }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center group hover:border-blue-500/20 transition-all hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 mb-4 group-hover:bg-blue-500/20 transition-colors">
                <stat.icon className="w-5 h-5 text-blue-400" />
              </div>
              <div className="font-display text-3xl md:text-4xl font-bold tracking-tight text-gradient-blue">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>
              <div className="text-sm text-slate-700 dark:text-slate-200 font-semibold mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
