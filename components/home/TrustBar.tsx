'use client';

import { Marquee } from '@/components/shared/Marquee';
import { ShieldCheck, Lock, Globe2, Server, Cloud, Cpu, Database, Network, Eye, Brain } from 'lucide-react';

const items = [
  { icon: ShieldCheck, label: 'AI SOC' },
  { icon: Lock, label: 'EDR' },
  { icon: Network, label: 'NDR' },
  { icon: Server, label: 'SIEM' },
  { icon: Cpu, label: 'SOAR' },
  { icon: Eye, label: 'Threat Intelligence' },
  { icon: Brain, label: 'AI Copilot' },
  { icon: Database, label: 'Asset Inventory' },
  { icon: Cloud, label: 'Cloud Security' },
  { icon: Globe2, label: 'Dark Web Monitoring' },
];

export function TrustBar() {
  return (
    <section className="relative py-12 border-y border-white/5 overflow-hidden">
      <div className="text-center mb-6">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-700 dark:text-slate-300 font-semibold">
          One platform. Ten modules. Zero blind spots.
        </span>
      </div>
      <Marquee speed="slow">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-6 py-3 rounded-xl glass shrink-0"
          >
            <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
