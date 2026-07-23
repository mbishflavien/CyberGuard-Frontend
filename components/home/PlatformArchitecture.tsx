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
  CheckCircle2,
} from 'lucide-react';

const layers = [
  {
    icon: MonitorSmartphone,
    name: 'Endpoints Protection',
    description: 'Lightweight sovereign agents on every device — laptops, servers, mobile — providing real-time EDR with behavioral detection.',
    detail: 'Process monitoring, file integrity, memory scanning, and automated containment. Operates continuously online and offline.',
    metrics: ['Automated Containment', 'Offline Protection', 'Zero System Latency'],
  },
  {
    icon: Network,
    name: 'Network Defense',
    description: 'Deep network inspection sensors monitor every packet, detecting lateral movement, C2 communication, and data exfiltration.',
    detail: 'Full-packet capture, protocol analysis, encrypted traffic inspection, and real-time flow visualization.',
    metrics: ['Full Packet Capture', 'Encrypted Traffic Inspection', 'Lateral Threat Detection'],
  },
  {
    icon: Cloud,
    name: 'Cloud Security Posture',
    description: 'Continuous security management across AWS, Azure, and GCP. Detect misconfigurations and unauthorized access instantly.',
    detail: 'CSPM, CWPP, CIEM, and Kubernetes workload protection in one unified module.',
    metrics: ['Multi-Cloud Posture', 'Kubernetes Security', 'Access Guardrails'],
  },
  {
    icon: Brain,
    name: 'Autonomous AI Engine',
    description: 'Our core intelligence engine correlates signals across all layers using models trained specifically on localized threat patterns.',
    detail: 'Supervised and unsupervised ML, behavioral baselines, anomaly detection, and automated triage.',
    metrics: ['Localized Threat Model', 'Anomalous Baseline Detection', 'Auto Incident Triage'],
  },
  {
    icon: Radar,
    name: 'Threat Intelligence',
    description: 'Real-time telemetry feeds enriched with regional and global context for sovereign security posture.',
    detail: 'IOCs, TTPs, dark web monitoring, attack surface management, and proactive threat hunting.',
    metrics: ['Localized Threat Feeds', 'Dark Web Scanning', 'Proactive Hunt Engine'],
  },
  {
    icon: Zap,
    name: 'Automated SOAR Playbooks',
    description: 'Automate containment, isolation, and remediation — reducing response times from hours to fractions of a second.',
    detail: 'Pre-built playbooks, custom automation, ITSM integrations, and human-in-the-loop approval.',
    metrics: ['Instant Isolation Playbooks', 'Custom IT Integrations', 'One-Click Quarantine'],
  },
  {
    icon: LayoutDashboard,
    name: 'Unified Command Dashboard',
    description: 'One single pane of glass. SOC analysts, executives, and compliance teams get tailored operational views.',
    detail: 'Real-time metrics, incident timelines, risk scores, and executive-ready reports.',
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
    }, 6000); // 6s smooth steady cycle
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

  const getPrevIdx = () => (active - 1 + layers.length) % layers.length;
  const getNextIdx = () => (active + 1) % layers.length;

  return (
    <section className="relative py-28 overflow-hidden bg-slate-950 border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Platform Architecture"
          title={
            <>
              Every signal, <span className="text-blue-400">one sovereign pipeline</span>
            </>
          }
          description="Data flows securely across every layer of your infrastructure in an enterprise unified pipeline."
        />

        {/* Outer Card Deck Display Container */}
        <div className="mt-16 relative flex flex-col items-center">
          
          <div className="relative w-full max-w-5xl h-[470px] flex items-center justify-center overflow-visible">
            
            {/* Left Peeking Card */}
            <div 
              onClick={handlePrev}
              className="absolute left-0 w-1/4 h-[370px] hidden lg:block opacity-30 hover:opacity-60 scale-90 transition-all duration-700 cursor-pointer select-none origin-left z-10"
            >
              <div className="rounded-3xl p-6 h-full flex flex-col justify-between border border-slate-800 bg-slate-900/60 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    {(() => {
                      const Icon = layers[getPrevIdx()].icon;
                      return <Icon className="w-5 h-5 text-blue-400" />;
                    })()}
                  </div>
                  <h4 className="font-display font-bold text-sm text-slate-200">{layers[getPrevIdx()].name}</h4>
                </div>
                <p className="text-xs text-slate-400 line-clamp-4 leading-relaxed">{layers[getPrevIdx()].description}</p>
                <div className="h-1.5 w-12 bg-slate-800 rounded-full" />
              </div>
            </div>

            {/* Active Focused Card - Fly in smoothly and slowly with no lag */}
            <div className="relative w-full max-w-xl h-full px-4 sm:px-0 z-20">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={active}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.94,
                    y: 28,
                    x: direction * 60,
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: 0,
                    x: 0,
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.95,
                    y: -16,
                    x: -direction * 60,
                  }}
                  transition={{ 
                    duration: 0.7, 
                    ease: [0.22, 1, 0.36, 1], // Ultra smooth, natural decelerating spring-like curve
                  }}
                  className="w-full h-full rounded-[28px] p-8 sm:p-10 flex flex-col justify-between border border-slate-700/80 bg-slate-900 shadow-2xl shadow-black/80 relative overflow-hidden"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center shadow-inner">
                          {(() => {
                            const Icon = layers[active].icon;
                            return <Icon className="w-7 h-7 text-blue-400" />;
                          })()}
                        </div>
                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                            Layer {active + 1} of {layers.length}
                          </span>
                          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none mt-1">
                            {layers[active].name}
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-400">
                        <Shield className="w-3.5 h-3.5 text-emerald-400" />
                        ACTIVE
                      </div>
                    </div>

                    {/* Main Description - High contrast & readable */}
                    <p className="text-slate-100 text-base leading-relaxed mb-6 font-normal">
                      {layers[active].description}
                    </p>

                    {/* Detail Frame */}
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-5 mb-6">
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                        {layers[active].detail}
                      </p>
                    </div>

                    {/* Metrics Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {layers[active].metrics.slice(0, 2).map((metric, mi) => (
                        <div key={mi} className="flex items-center gap-2 text-xs text-slate-200 font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Manual Navigation Bar */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-800 mt-auto">
                    <button 
                      onClick={handlePrev}
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
                      aria-label="Previous layer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    {/* Dots indicator */}
                    <div className="flex gap-2">
                      {layers.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => handleSelect(i)}
                          className={`h-2 rounded-full transition-all duration-500 ${
                            i === active ? 'w-8 bg-blue-400' : 'w-2 bg-slate-700 hover:bg-slate-600'
                          }`}
                          aria-label={`Go to layer ${i + 1}`}
                        />
                      ))}
                    </div>

                    <button 
                      onClick={handleNext}
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
                      aria-label="Next layer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Peeking Card */}
            <div 
              onClick={handleNext}
              className="absolute right-0 w-1/4 h-[370px] hidden lg:block opacity-30 hover:opacity-60 scale-90 transition-all duration-700 cursor-pointer select-none origin-right z-10"
            >
              <div className="rounded-3xl p-6 h-full flex flex-col justify-between border border-slate-800 bg-slate-900/60 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    {(() => {
                      const Icon = layers[getNextIdx()].icon;
                      return <Icon className="w-5 h-5 text-blue-400" />;
                    })()}
                  </div>
                  <h4 className="font-display font-bold text-sm text-slate-200">{layers[getNextIdx()].name}</h4>
                </div>
                <p className="text-xs text-slate-400 line-clamp-4 leading-relaxed">{layers[getNextIdx()].description}</p>
                <div className="h-1.5 w-12 bg-slate-800 rounded-full" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
