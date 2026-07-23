'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Brain,
  ShieldCheck,
  Radar,
  Database,
  Workflow,
  Globe2,
  ClipboardCheck,
  Bug,
  SatelliteDish,
  EyeOff,
  ArrowRight,
  Calendar,
  Cloud,
  Webhook,
  Plug,
  Cpu,
  Network,
  Layers,
  Zap,
  LineChart,
} from 'lucide-react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GlassCard } from '@/components/shared/GlassCard';
import { AuroraBackground } from '@/components/shared/AuroraBackground';

const modules = [
  {
    icon: Brain,
    name: 'AI SOC',
    description:
      'An AI-driven Security Operations Center that triages alerts, correlates events, and surfaces real threats — 24/7, without the headcount.',
  },
  {
    icon: ShieldCheck,
    name: 'EDR',
    description:
      'Endpoint detection and response with behavioural analytics, automated containment, and rollback for every workstation and server.',
  },
  {
    icon: Radar,
    name: 'NDR',
    description:
      'Network detection and response that inspects every packet, identifies anomalous traffic, and maps lateral movement in real time.',
  },
  {
    icon: Database,
    name: 'SIEM',
    description:
      'A unified log lake that ingests every source — cloud, on-prem, SaaS — and lets you query years of telemetry in milliseconds.',
  },
  {
    icon: Workflow,
    name: 'SOAR',
    description:
      'Security orchestration and automated response playbooks that contain incidents in seconds, not hours, with full audit trails.',
  },
  {
    icon: Globe2,
    name: 'Threat Intelligence',
    description:
      'Curated, Africa-focused threat feeds enriched with IOCs, TTPs, and adversary profiles so your detections are always current.',
  },
  {
    icon: ClipboardCheck,
    name: 'Compliance Monitoring',
    description:
      'Continuous control validation against ISO 27001, SOC 2, PCI DSS, POPIA, and NDPR with audit-ready reporting on demand.',
  },
  {
    icon: Bug,
    name: 'Vulnerability Management',
    description:
      'Prioritised vulnerability scanning across assets, cloud, and applications — scored by exploitability and business impact.',
  },
  {
    icon: SatelliteDish,
    name: 'External Attack Surface Management',
    description:
      'Discover and monitor every internet-facing asset, shadow IT, and exposed service before attackers do.',
  },
  {
    icon: EyeOff,
    name: 'Dark Web Monitoring',
    description:
      'Continuous surveillance of dark web marketplaces, paste sites, and forums for leaked credentials and brand impersonation.',
  },
];

const integrations = [
  { name: 'AWS', category: 'Cloud' },
  { name: 'Azure', category: 'Cloud' },
  { name: 'GCP', category: 'Cloud' },
  { name: 'Slack', category: 'Collaboration' },
  { name: 'Jira', category: 'ITSM' },
  { name: 'ServiceNow', category: 'ITSM' },
  { name: 'Microsoft Teams', category: 'Collaboration' },
  { name: 'Okta', category: 'Identity' },
  { name: 'Splunk', category: 'SIEM' },
  { name: 'PagerDuty', category: 'Alerting' },
];

const flowSteps = [
  {
    icon: Plug,
    step: '01',
    title: 'Connect',
    description:
      'Deploy lightweight agents to endpoints, configure network sensors, and connect cloud accounts via OAuth. Most environments are fully integrated in under 48 hours.',
  },
  {
    icon: Layers,
    step: '02',
    title: 'Correlate',
    description:
      'Every module feeds a shared data lake. The AI engine correlates signals across EDR, NDR, SIEM, and threat intel to build a single, coherent picture of your risk.',
  },
  {
    icon: Cpu,
    step: '03',
    title: 'Analyse',
    description:
      'Machine-learning models trained on African threat data score, enrich, and triage every event. False positives are suppressed; real threats are prioritised.',
  },
  {
    icon: Zap,
    step: '04',
    title: 'Respond',
    description:
      'SOAR playbooks execute automatically — isolating hosts, blocking IPs, and notifying your team. You stay in control with one-click approval for any action.',
  },
  {
    icon: LineChart,
    step: '05',
    title: 'Report',
    description:
      'Executive dashboards, compliance reports, and AI-generated summaries keep every stakeholder informed. Export to any format or forward to your existing tools.',
  },
];

export default function PlatformPage() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Platform"
          title={
            <>
              One unified platform.{' '}
              <span className="text-gradient-blue">Total visibility.</span>
            </>
          }
          description="CyberGuard unifies ten security modules into a single AI-native platform. No more switching between dashboards, stitching together logs, or paying for tools that do not talk to each other. One platform. Zero blind spots."
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
              href="/start-trial"
              className="inline-flex items-center gap-2 glass px-7 py-3.5 rounded-xl font-semibold hover:bg-white/5 transition-all"
            >
              Start Free Trial
            </Link>
          </div>
        </PageHero>

        {/* Modules Grid */}
        <section className="relative py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading
              eyebrow="Ten Modules"
              title={
                <>
                  Every layer of your security,{' '}
                  <span className="text-gradient-blue">working as one.</span>
                </>
              }
              description="Each module is powerful on its own. Together, they share intelligence, context, and automated response — so a threat detected on one endpoint instantly informs your network, compliance, and response teams."
            />

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {modules.map((module, i) => (
                <GlassCard
                  key={module.name}
                  delay={i * 0.05}
                  className="p-6 group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <module.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">
                    {module.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {module.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section
          id="integrations"
          className="relative py-24 overflow-hidden scroll-mt-20"
        >
          <AuroraBackground />
          <div className="absolute inset-0 bg-grid mask-fade-bottom opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading
              eyebrow="Integrations"
              title={
                <>
                  Connects with the tools{' '}
                  <span className="text-gradient-blue">you already use.</span>
                </>
              }
              description="CyberGuard plays well with your existing stack. Pre-built connectors sync data in minutes, and our open REST API lets you build custom integrations for anything else."
            />

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {integrations.map((integration, i) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="glass rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-white/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Cloud className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-sm">{integration.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {integration.category}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 flex items-center justify-center gap-3 text-sm text-muted-foreground"
            >
              <Webhook className="w-4 h-4 text-blue-400" />
              <span>
                Plus 200+ integrations via our open API and webhook system.
              </span>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="relative py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading
              eyebrow="How It Works"
              title={
                <>
                  From signal to response,{' '}
                  <span className="text-gradient-blue">in five steps.</span>
                </>
              }
              description="Data flows through CyberGuard in a continuous loop — connect, correlate, analyse, respond, and report. Each stage feeds the next, creating a self-improving security engine."
            />

            <div className="mt-16 relative">
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {flowSteps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="glass rounded-2xl p-6 h-full hover:border-blue-500/20 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-500/10">
                          <step.icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="font-mono text-xs text-blue-400/70 tracking-widest">
                          {step.step}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    {i < flowSteps.length - 1 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                        <ArrowRight className="w-5 h-5 text-blue-400/40" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Architecture highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 glass-strong rounded-3xl p-8 sm:p-12"
            >
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-blue-400/80 px-3 py-1 rounded-full glass mb-5">
                    Shared Intelligence Layer
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
                    One brain. Every module benefits.
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Traditional security stacks are siloed — your EDR does not
                    know what your SIEM sees, and your threat intel feeds do not
                    inform your compliance checks. CyberGuard&apos;s shared
                    intelligence layer means a detection in one module
                    instantly enriches every other module. The result: faster
                    detections, fewer false positives, and a security posture
                    that compounds over time.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['Shared data lake', 'Cross-module correlation', 'AI enrichment'].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1.5 rounded-full glass text-muted-foreground"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div className="relative">
                  <div className="glass rounded-2xl p-8 space-y-4">
                    {[
                      { icon: Network, label: 'Network sensors', value: 'Streaming' },
                      { icon: ShieldCheck, label: 'Endpoint agents', value: '2,847 active' },
                      { icon: Cloud, label: 'Cloud connectors', value: '12 connected' },
                      { icon: Database, label: 'Events / second', value: '184,302' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between p-3 rounded-lg bg-white/5"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="w-4 h-4 text-blue-400" />
                          <span className="text-sm text-muted-foreground">
                            {item.label}
                          </span>
                        </div>
                        <span className="text-sm font-mono font-semibold text-blue-400">
                          {item.value}
                        </span>
                      </div>
                    ))}
                    <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-glow" />
                      All systems streaming in real time
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
                See the platform{' '}
                <span className="text-gradient-blue">in action.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                Book a 30-minute demo and we will walk you through every module,
                show you the AI Copilot in real time, and tailor the conversation
                to your industry.
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
                  href="/start-trial"
                  className="group inline-flex items-center gap-2 glass px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-all"
                >
                  Start Free Trial
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
