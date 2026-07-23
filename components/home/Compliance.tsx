'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ShieldCheck, FileCheck, Lock, Globe, Scale, Database, Award } from 'lucide-react';

const certifications = [
  { icon: ShieldCheck, name: 'ISO 27001', description: 'Information Security Management Systems' },
  { icon: FileCheck, name: 'SOC 2', description: 'Type II — Security & Availability' },
  { icon: Lock, name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' },
  { icon: Globe, name: 'GDPR', description: 'General Data Protection Regulation (EU)' },
  { icon: Scale, name: 'POPIA', description: 'Protection of Personal Information Act (South Africa)' },
  { icon: Database, name: 'NDPR', description: 'Nigeria Data Protection Regulation' },
  { icon: Award, name: 'NIST', description: 'Cybersecurity Framework Aligned' },
];

export function Compliance() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Compliance"
          title={
            <>
              Continuous compliance, <span className="text-gradient-blue">built in</span>
            </>
          }
          description="CyberGuard continuously monitors your environment against global and regional compliance frameworks — so you're always audit-ready."
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="h-48 perspective-1000 cursor-pointer group"
            >
              <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full preserve-3d"
              >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden glass rounded-2xl p-5 text-center flex flex-col items-center justify-center group-hover:border-blue-500/20 transition-colors">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 mb-4">
                    <cert.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <div className="font-display font-bold text-sm">{cert.name}</div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 glass-strong rounded-2xl p-5 text-center flex flex-col items-center justify-center border border-blue-500/20">
                  <cert.icon className="w-6 h-6 text-blue-400 mb-3" />
                  <div className="font-display font-bold text-sm mb-2">{cert.name}</div>
                  <p className="text-xs text-muted-foreground leading-tight">{cert.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 glass rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-glow" />
            <span className="text-sm text-muted-foreground">
              All frameworks monitored continuously · Audit-ready reports generated on demand
            </span>
          </div>
          <div className="text-sm font-mono text-blue-400">99.2% compliance score avg.</div>
        </motion.div>
      </div>
    </section>
  );
}
