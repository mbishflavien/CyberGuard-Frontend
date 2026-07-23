'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Marquee } from '@/components/shared/Marquee';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Our banking group struggled with visibility across our regional branches and legacy remote VPN portals. During our first week with CyberGuard, its correlation engine flagged a stealthy credential-harvesting campaign targeting our swift gateways in Lagos. The platform auto-isolated the compromised host in exactly 22 seconds, preventing any lateral escalation. It replaced five separate agents and slashed our incident containment time from 6 hours to 3 minutes.',
    author: 'Adaeze Okonkwo',
    role: 'Chief Information Security Officer, Interswitch Group',
    location: 'Lagos, Nigeria',
    logo: 'IS',
    metric: '94% reduction in MTTR',
  },
  {
    quote:
      'At PayStream, we operate high-throughput microservices. We connected our AWS cloud environments via CyberGuard\'s secure API gateway in under 30 minutes. Its AI Copilot has been a massive force multiplier: our small operations squad can query complex firewall metrics using natural language, automatically generate audited SOAR playbooks, and secure our entire deployment pipeline without needing a multi-million dollar dedicated SOC.',
    author: 'Kwame Mensah',
    role: 'Head of Security & Cloud Infrastructure, PayStream',
    location: 'Accra, Ghana',
    logo: 'PS',
    metric: 'Zero breaches in 18 months',
  },
  {
    quote:
      'With multiple clinics and diagnostic laboratories in East Africa, we manage thousands of IoT medical endpoints and sensitive patient records. Preparing for compliance audits under POPIA and the Data Protection Act was once a weeks-long fire drill. CyberGuard\'s compliance panel continuously maps our live security posture to global standard frameworks, auto-collecting evidence and turning audit preparation into a simple, single-click report generation.',
    author: 'Dr. Sarah Mwangi',
    role: 'Director of Healthcare IT, Sanaa Medical Group',
    location: 'Nairobi, Kenya',
    logo: 'SM',
    metric: 'Audit prep: 3 weeks → 1 click',
  },
  {
    quote:
      'Generic global threat intelligence feeds completely miss localized, regional threat vectors like mobile money phishing templates or specific financial institution scams. CyberGuard\'s Africa-focused threat feed integrates directly into our SIEM, providing high-fidelity telemetry that fits our network realities. It has allowed us to proactively hunt for emerging threat actor campaigns targeting South African telco links.',
    author: 'Thabo Nkosi',
    role: 'VP of Platform Engineering, CloudAfrica Networks',
    location: 'Johannesburg, South Africa',
    logo: 'CA',
    metric: '12,000+ local threat IOCs',
  },
];

const logos = ['FCB', 'PS', 'MC', 'CA', 'NB', 'ET', 'SB', 'AT', 'ZM', 'RG'];

export function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Customer Stories"
          title={
            <>
              Trusted by African <span className="text-gradient-blue">innovators</span>
            </>
          }
          description="From pan-African banks to fast-growing fintechs, organizations choose CyberGuard to protect what matters most."
        />

        {/* Client logos marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 mb-16"
        >
          <Marquee speed="slow">
            {logos.map((logo) => (
              <div
                key={logo}
                className="w-16 h-16 rounded-xl glass flex items-center justify-center text-muted-foreground/40 font-display font-bold text-lg hover:text-blue-400/60 transition-colors"
              >
                {logo}
              </div>
            ))}
          </Marquee>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-8 relative overflow-hidden group hover:border-blue-500/20 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-400/10 group-hover:text-blue-400/20 transition-colors" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-blue-400 text-blue-400" />
                ))}
              </div>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed mb-6 font-normal">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-sky-400/10 flex items-center justify-center text-blue-600 dark:text-blue-400 font-display font-bold text-sm">
                    {t.logo}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm">{t.author}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">{t.role}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t.location}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-blue-400 font-mono text-sm font-semibold">{t.metric}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
