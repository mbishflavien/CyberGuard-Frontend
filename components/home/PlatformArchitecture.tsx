'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import {
  MonitorSmartphone,
  Network,
  Cloud,
  Brain,
  Radar,
  Zap,
  LayoutDashboard,
  ChevronLeft,
  ChevronRight,
  Shield,
  Activity,
  CheckCircle2,
} from 'lucide-react';

const layers = [
  {
    icon: MonitorSmartphone,
    name: 'Endpoints Protection',
    description: 'Lightweight agents on every device — laptops, servers, mobile — providing real-time EDR with behavioral detection.',
    detail: 'Process monitoring, file integrity, memory scanning, and automated containment. Works online and offline.',
    metrics: ['Automated Containment', 'Offline Protection', 'Zero System Latency'],
  },
  {
    icon: Network,
    name: 'Network Defense',
    description: 'Network sensors inspect every packet, identifying lateral movement, C2 communication, and data exfiltration.',
    detail: 'Full-packet capture, protocol analysis, encrypted traffic inspection, and flow visualization.',
    metrics: ['Full Packet Capture', 'Encrypted Traffic Inspection', 'Lateral Threat Detection'],
  },
  {
    icon: Cloud,
    name: 'Cloud Security',
    description: 'Cloud security posture management across AWS, Azure, and GCP. Detect misconfigurations and unauthorized access.',
    detail: 'CSPM, CWPP, CIEM, and Kubernetes workload protection in one module.',
    metrics: ['Multi-Cloud Posture', 'Kubernetes Security', 'Access Guardrails'],
  },
  {
    icon: Brain,
    name: 'Autonomous AI Engine',
    description: 'The core. Our AI correlates signals across all layers, using ML models trained on African threat patterns.',
    detail: 'Supervised + unsupervised ML, behavioral baselines, anomaly detection, and automated triage.',
    metrics: ['Localized Threat Model', 'Anomalous Baseline Detection', 'Auto Incident Triage'],
  },
  {
    icon: Radar,
    name: 'Threat Intelligence',
    description: 'Real-time feeds from global and regional sources, enriched with local context for African threat landscapes.',
    detail: 'IOCs, TTPs, dark web monitoring, attack surface management, and proactive hunting.',
    metrics: ['Localized Threat Feeds', 'Dark Web Scanning', 'Proactive Hunt Engine'],
  },
  {
    icon: Zap,
    name: 'Automated Response',
    description: 'SOAR playbooks automate containment, isolation, and remediation — reducing response time from hours to seconds.',
    detail: 'Pre-built playbooks, custom automation, integrations with ITSM, and human-in-the-loop approval.',
    metrics: ['Instant Isolation Playbooks', 'Custom IT Integrations', 'One-Click Quarantine'],
  },
  {
    icon: LayoutDashboard,
    name: 'Unified Command Dashboard',
    description: 'One unified view. SOC analysts, executives, and compliance teams each get purpose-built dashboards.',
    detail: 'Real-time metrics, incident timelines, risk scores, and board-ready reports.',
    metrics: ['Executive Risk Scoring', 'SOC Incident Timelines', 'SLA Tracking & Reporting'],
  },
];

export function PlatformArchitecture() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % layers.length);
    }, 4500); // Transition spontaneously every 4.5 seconds
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + layers.length) % layers.length);
    startAutoScroll();
  };

  const handleNext = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % layers.length);
    startAutoScroll();
  };

  const handleSelect = (idx: number) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
    startAutoScroll();
  };

  // Get index helpers
  const getPrevIdx = () => (active - 1 + layers.length) % layers.length;
  const getNextIdx = () => (active + 1) % layers.length;

  return (
    <section className="relative py-24 overflow-hidden bg-slate-950/20">
      {/* Extremely soft, blurred ambient orbs for a peaceful and harmonious background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[200px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Platform Architecture"
          title={
            <>
              Every signal, <span className="text-gradient-blue">one pipeline</span>
            </>
          }
          description="Data flows seamlessly from every layer of your infrastructure. Unified under an elegant, structured card display that cycles automatically."
        />

        {/* Outer Card Display Container */}
        <div className="mt-16 relative flex flex-col items-center">
          
          {/* Deck Slider Area */}
          <div className="relative w-full max-w-5xl h-[460px] flex items-center justify-center overflow-visible">
            
            {/* Left Card (Peeking) */}
            <div 
              onClick={handlePrev}
              className="absolute left-0 w-1/4 h-[360px] hidden lg:block opacity-35 hover:opacity-55 scale-90 blur-[1px] transition-all duration-500 cursor-pointer select-none origin-left z-10"
            >
              <div className="glass rounded-3xl p-6 h-full flex flex-col justify-between border border-white/5 bg-slate-950/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    {(() => {
                      const Icon = layers[getPrevIdx()].icon;
                      return <Icon className="w-5 h-5 text-blue-400" />;
                    })()}
                  </div>
                  <h4 className="font-display font-semibold text-sm text-white/80">{layers[getPrevIdx()].name}</h4>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-4 leading-relaxed">{layers[getPrevIdx()].description}</p>
                <div className="h-2 w-12 bg-white/5 rounded-full" />
              </div>
            </div>

            {/* Active Center Card with Framer Motion */}
            <div className="relative w-full max-w-xl h-full px-4 sm:px-0 z-20">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={active}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.92,
                    y: 20,
                    x: direction * 50,
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: 0,
                    x: 0,
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.94,
                    y: -10,
                    x: -direction * 50,
                  }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full rounded-[32px] p-8 sm:p-10 flex flex-col justify-between border border-blue-500/30 shadow-[0_25px_60px_-15px_rgba(59,130,246,0.22)] bg-slate-950/95 backdrop-blur-2xl relative overflow-hidden"
                >
                  {/* Decorative faint glow */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
                  
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 flex items-center justify-center">
                          {(() => {
                            const Icon = layers[active].icon;
                            return <Icon className="w-7 h-7 text-blue-400" />;
                          })()}
                        </div>
                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-widest text-sky-400 font-bold">Layer {active + 1} of {layers.length}</span>
                          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-none mt-1">
                            {layers[active].name}
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1.5 bg-blue-500/15 px-3 py-1 rounded-full border border-blue-500/30 text-[10px] font-mono font-bold text-sky-300">
                        <Shield className="w-3.5 h-3.5 text-sky-400" />
                        SECURED
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-100 dark:text-slate-100 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {layers[active].description}
                    </p>

                    {/* Specs Section */}
                    <div className="bg-slate-900/90 border border-slate-700/60 dark:border-white/10 rounded-2xl p-4 sm:p-5 mb-6 shadow-inner">
                      <p className="text-xs sm:text-sm text-slate-200 dark:text-slate-200 leading-relaxed font-medium">
                        {layers[active].detail}
                      </p>
                    </div>

                    {/* Mini Spec Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {layers[active].metrics.slice(0, 2).map((metric, mi) => (
                        <div key={mi} className="flex items-center gap-2 text-xs text-slate-100 font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Manual Controls inside the focused frame */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                    <button 
                      onClick={handlePrev}
                      className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white transition-all border border-white/10 hover:border-blue-500/40"
                      aria-label="Previous layer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    {/* Core pipeline indicator dots */}
                    <div className="flex gap-2">
                      {layers.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => handleSelect(i)}
                          className={`h-2.5 rounded-full transition-all duration-500 ${
                            i === active ? 'w-8 bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.6)]' : 'w-2.5 bg-white/20 hover:bg-white/40'
                          }`}
                          aria-label={`Go to layer ${i + 1}`}
                        />
                      ))}
                    </div>

                    <button 
                      onClick={handleNext}
                      className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white transition-all border border-white/10 hover:border-blue-500/40"
                      aria-label="Next layer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Card (Peeking) */}
            <div 
              onClick={handleNext}
              className="absolute right-0 w-1/4 h-[360px] hidden lg:block opacity-35 hover:opacity-55 scale-90 blur-[1px] transition-all duration-500 cursor-pointer select-none origin-right z-10"
            >
              <div className="glass rounded-3xl p-6 h-full flex flex-col justify-between border border-white/5 bg-slate-950/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    {(() => {
                      const Icon = layers[getNextIdx()].icon;
                      return <Icon className="w-5 h-5 text-blue-400" />;
                    })()}
                  </div>
                  <h4 className="font-display font-semibold text-sm text-white/80">{layers[getNextIdx()].name}</h4>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-4 leading-relaxed">{layers[getNextIdx()].description}</p>
                <div className="h-2 w-12 bg-white/5 rounded-full" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

