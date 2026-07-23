'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { FlipCard } from '@/components/shared/FlipCard';
import {
  Landmark,
  HeartPulse,
  Briefcase,
  GraduationCap,
  Factory,
  Building2,
  ArrowRight,
} from 'lucide-react';

const industries = [
  {
    icon: Landmark,
    name: 'Financial Services',
    description: 'Protect customer data, meet regulatory requirements, and detect fraud in real-time across banking and fintech.',
    challenges: ['PCI DSS compliance pressure', 'Sophisticated fraud schemes', 'Regulatory audits'],
    solution: 'Real-time fraud detection, continuous compliance monitoring, and audit-ready reporting for POPIA, NDPR, and PCI DSS.',
  },
  {
    icon: HeartPulse,
    name: 'Healthcare',
    description: 'Safeguard patient records, secure medical devices, and maintain HIPAA-equivalent standards across facilities.',
    challenges: ['Ransomware targeting hospitals', 'IoT medical device vulnerabilities', 'Patient data privacy'],
    solution: 'IoT device security, ransomware defense with automated isolation, and 24/7 monitoring of patient data access.',
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    description: 'Protect client confidentiality, secure communications, and demonstrate compliance to win enterprise contracts.',
    challenges: ['Client data isolation', 'Secure collaboration needs', 'Audit-ready posture'],
    solution: 'Client data isolation, encrypted communications, and continuous compliance visibility for enterprise contracts.',
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'Secure student records, protect research data, and defend against ransomware targeting institutions.',
    challenges: ['Ransomware attacks on schools', 'Student privacy compliance', 'Research IP protection'],
    solution: 'Ransomware defense, student record protection, and research IP monitoring with automated threat response.',
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Secure OT/IT convergence, protect supply chain data, and prevent production disruption from cyber attacks.',
    challenges: ['OT/IT convergence risks', 'Supply chain attacks', 'Production downtime'],
    solution: 'OT/IT security monitoring, supply chain threat intelligence, and production continuity protection.',
  },
  {
    icon: Building2,
    name: 'Government (Future)',
    description: 'Protect national infrastructure, secure citizen data, and build sovereign cybersecurity capability.',
    challenges: ['Sovereign data residency', 'National threat sharing', 'Critical infrastructure protection'],
    solution: 'Sovereign data storage, national threat intelligence sharing, and critical infrastructure monitoring.',
  },
];

export function Industries() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Industries"
          title={
            <>
              Built for the sectors that <span className="text-gradient-blue">power Africa</span>
            </>
          }
          description="Each industry faces unique threats. CyberGuard tailors detection rules, compliance frameworks, and response playbooks to your sector. Flip a card to see how."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="h-64"
            >
              <FlipCard
                front={
                  <div className="bg-white/60 dark:bg-slate-950/50 border border-slate-200/50 dark:border-white/10 backdrop-blur-md rounded-3xl h-full p-6 flex flex-col hover:border-blue-500/40 dark:hover:border-blue-500/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden select-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 dark:from-blue-500/0 dark:to-indigo-500/0 opacity-50" />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500/10 mb-5 transform-gpu backface-hidden" style={{ transform: 'translate3d(0,0,0)' }}>
                        <industry.icon className="w-6 h-6 text-blue-500 dark:text-blue-400 transform-gpu backface-hidden" style={{ transform: 'translate3d(0,0,0)' }} />
                      </div>
                      <h3 className="font-display text-xl font-bold mb-2 text-slate-900 dark:text-white">{industry.name}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                        {industry.description}
                      </p>
                      <div className="flex items-center gap-1.5 text-sm text-blue-500 dark:text-blue-400 font-semibold mt-4">
                        Flip to see challenges <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                }
                back={
                  <div className="bg-white/80 dark:bg-slate-950/80 border border-blue-500/30 dark:border-blue-500/20 backdrop-blur-lg rounded-3xl h-full p-6 flex flex-col relative overflow-hidden select-none shadow-md">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-50" />
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <h3 className="font-display text-lg font-bold mb-3 text-blue-600 dark:text-blue-400">{industry.name}</h3>
                        <div className="mb-4">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Challenges</div>
                          <ul className="space-y-1">
                            {industry.challenges.map((c) => (
                              <li key={c} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1.5 font-bold">CyberGuard Solution</div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">{industry.solution}</p>
                      </div>
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
