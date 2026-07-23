'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Landmark,
  HeartPulse,
  Briefcase,
  GraduationCap,
  Factory,
  Building2,
  ArrowRight,
  Check,
  Calendar,
  Shield,
} from 'lucide-react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GlassCard } from '@/components/shared/GlassCard';
import { AuroraBackground } from '@/components/shared/AuroraBackground';

const industries = [
  {
    icon: Landmark,
    name: 'Financial Services',
    challenges: [
      'Sophisticated business email compromise and fraud campaigns',
      'Strict regulatory requirements (CBK, CBN, SARB, POPIA)',
      'High-value targets for nation-state and cybercriminal actors',
      'Mobile money and digital banking attack vectors',
    ],
    solutions: [
      'Real-time fraud pattern detection trained on African banking data',
      'Compliance dashboards for CBK, CBN, SARB, and POPIA',
      'Dark web monitoring for leaked customer credentials',
      'SOAR playbooks for rapid incident containment',
    ],
    stat: { value: '340+', label: 'Financial institutions protected' },
  },
  {
    icon: HeartPulse,
    name: 'Healthcare',
    challenges: [
      'Ransomware targeting hospitals and patient data',
      'HIPAA, POPIA, and NDPR compliance for patient records',
      'Legacy medical devices with unpatchable vulnerabilities',
      'Limited security staff and budget constraints',
    ],
    solutions: [
      'Ransomware-specific detection and automated isolation',
      'Continuous compliance monitoring for healthcare frameworks',
      'Medical device discovery and vulnerability assessment',
      'Managed Security option for teams without a SOC',
    ],
    stat: { value: '120+', label: 'Hospitals and clinics secured' },
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    challenges: [
      'Client data breaches that damage reputation and trust',
      'Phishing and credential theft targeting consultants',
      'Need to demonstrate security maturity to win contracts',
      'Distributed workforce across multiple client sites',
    ],
    solutions: [
      'Endpoint protection for distributed and remote teams',
      'Client data access monitoring and anomaly detection',
      'Security posture reports for client due diligence',
      'Email security and phishing simulation integration',
    ],
    stat: { value: '580+', label: 'Professional firms protected' },
  },
  {
    icon: GraduationCap,
    name: 'Education',
    challenges: [
      'Open network environments with thousands of student devices',
      'Ransomware and data breaches targeting student records',
      'Limited IT and security budgets',
      'BYOD policies that expand the attack surface',
    ],
    solutions: [
      'Affordable pricing tiers designed for educational institutions',
      'Network segmentation monitoring for student and admin networks',
      'Automated threat response without large security teams',
      'Student data protection and privacy compliance',
    ],
    stat: { value: '85+', label: 'Universities and schools secured' },
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    challenges: [
      'OT/IT convergence creating new attack vectors',
      'Supply chain attacks targeting production systems',
      'Downtime costs that can exceed millions per day',
      'Legacy industrial control systems with limited security',
    ],
    solutions: [
      'OT-aware network detection and response',
      'Supply chain risk monitoring and vendor assessment',
      'Incident response playbooks for production environments',
      'Asset discovery for industrial control systems',
    ],
    stat: { value: '200+', label: 'Manufacturing facilities protected' },
  },
  {
    icon: Building2,
    name: 'Government',
    challenges: [
      'Nation-state threats targeting critical infrastructure',
      'Mandated compliance with national cybersecurity frameworks',
      'Sovereign data residency requirements',
      'Large, complex environments with legacy systems',
    ],
    solutions: [
      'Sovereign data hosting in African data centers',
      'Threat intelligence focused on state-sponsored actors',
      'Compliance monitoring for national cybersecurity standards',
      'On-premise deployment option for classified environments',
    ],
    stat: { value: '45+', label: 'Government agencies secured' },
  },
];

export default function IndustriesPage() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Industries"
          title={
            <>
              Security tailored to{' '}
              <span className="text-gradient-blue">your sector.</span>
            </>
          }
          description="Every industry faces unique threats. CyberGuard’s AI models are trained on sector-specific attack patterns, and our playbooks address the challenges that matter most to your business."
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book-demo"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-sky-400 text-white px-7 py-3.5 rounded-xl font-semibold hover:from-blue-600 hover:to-sky-500 transition-all hover:shadow-[0_0_50px_-5px_hsla(199,89%,48%,0.6)]"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 glass px-7 py-3.5 rounded-xl font-semibold hover:bg-white/5 transition-all"
            >
              Talk to an Expert
            </Link>
          </div>
        </PageHero>

        {/* Industry Cards */}
        <section className="relative py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading
              eyebrow="Sector Solutions"
              title={
                <>
                  Built for the threats{' '}
                  <span className="text-gradient-blue">you actually face.</span>
                </>
              }
              description="From mobile money fraud in Nairobi to ransomware in Johannesburg, CyberGuard understands the African threat landscape because we’re built here. Each industry solution combines the right modules, playbooks, and intelligence for your sector."
            />

            <div className="mt-16 space-y-8">
              {industries.map((industry, i) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                >
                  <GlassCard hover={false} className="p-8 lg:p-10">
                    <div className="grid lg:grid-cols-12 gap-8">
                      {/* Header */}
                      <div className="lg:col-span-4">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 mb-5">
                          <industry.icon className="w-7 h-7 text-blue-400" />
                        </div>
                        <h3 className="font-display text-2xl font-bold mb-3">
                          {industry.name}
                        </h3>
                        <div className="glass rounded-xl p-4 mt-6">
                          <div className="font-display text-3xl font-bold text-gradient-blue">
                            {industry.stat.value}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {industry.stat.label}
                          </p>
                        </div>
                      </div>

                      {/* Challenges */}
                      <div className="lg:col-span-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                          <span className="w-1 h-4 rounded-full bg-red-400/60" />
                          Key Challenges
                        </h4>
                        <ul className="space-y-3">
                          {industry.challenges.map((challenge) => (
                            <li
                              key={challenge}
                              className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400/60 flex-shrink-0 mt-1.5" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Solutions */}
                      <div className="lg:col-span-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                          <span className="w-1 h-4 rounded-full bg-blue-400/60" />
                          How CyberGuard Helps
                        </h4>
                        <ul className="space-y-3">
                          {industry.solutions.map((solution) => (
                            <li
                              key={solution}
                              className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                            >
                              <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why African Businesses Choose Us */}
        <section className="relative py-24 overflow-hidden">
          <AuroraBackground />
          <div className="absolute inset-0 bg-grid mask-fade-bottom opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading
              eyebrow="Why CyberGuard"
              title={
                <>
                  Built in Africa.{' '}
                  <span className="text-gradient-blue">For Africa.</span>
                </>
              }
              description="We understand the unique challenges African businesses face — from limited security talent to unreliable infrastructure. CyberGuard is designed to deliver enterprise-grade security that works in African conditions."
            />

            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Africa-focused threat intel',
                  description:
                    'Our intelligence team tracks threat actors and campaigns specifically targeting African businesses.',
                },
                {
                  icon: Check,
                  title: 'Local compliance built-in',
                  description:
                    'POPIA, NDPR, and central bank regulations are pre-configured — not bolted on as an afterthought.',
                },
                {
                  icon: Building2,
                  title: 'Sovereign data residency',
                  description:
                    'Your data stays in African data centers, meeting local data protection and sovereignty requirements.',
                },
                {
                  icon: Calendar,
                  title: 'Designed for resource constraints',
                  description:
                    'Automated response and managed security options mean you don’t need a large SOC team to be secure.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-500/10 mb-4">
                    <item.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="font-display text-base font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-32 overflow-hidden">
          <AuroraBackground />
          <div className="absolute inset-0 bg-grid mask-fade-bottom opacity-20" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Let’s secure your{' '}
                <span className="text-gradient-blue">industry together.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                Tell us about your sector and we’ll show you exactly how CyberGuard
                addresses your most pressing security challenges.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/book-demo"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-sky-400 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-sky-500 transition-all hover:shadow-[0_0_50px_-5px_hsla(199,89%,48%,0.6)]"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Demo
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 glass px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-all"
                >
                  Contact Our Team
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
