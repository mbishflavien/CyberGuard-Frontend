'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  LayoutDashboard,
  Gauge,
  ClipboardCheck,
  Globe2,
  Bot,
  Siren,
  Boxes,
  EyeOff,
  ArrowRight,
  Check,
  Calendar,
} from 'lucide-react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GlassCard } from '@/components/shared/GlassCard';
import { AuroraBackground } from '@/components/shared/AuroraBackground';

const products = [
  {
    icon: LayoutDashboard,
    name: 'SOC Workspace',
    tagline: 'The analyst’s command center',
    description:
      'A unified workspace where your security team triages alerts, investigates incidents, and collaborates in real time. Built for analysts, by analysts.',
    features: [
      'Unified alert queue with AI-prioritised triage',
      'One-click incident escalation and assignment',
      'Built-in collaboration and case notes',
      'Customisable views per analyst and per shift',
      'Full MITRE ATT&CK mapping on every alert',
      'Timeline reconstruction with event replay',
    ],
  },
  {
    icon: Gauge,
    name: 'Executive Dashboard',
    tagline: 'Security posture at a glance',
    description:
      'A real-time, board-ready view of your security posture. Translate technical metrics into business risk so leadership always knows where you stand.',
    features: [
      'Real-time risk score and trend visualisation',
      'Compliance posture across all frameworks',
      'Incident metrics with MTTR and SLA tracking',
      'Auto-generated weekly executive summaries',
      'Exportable reports in PDF, PowerPoint, and CSV',
      'Customisable KPIs per stakeholder role',
    ],
  },
  {
    icon: ClipboardCheck,
    name: 'Compliance Dashboard',
    tagline: 'Audit-ready, every day',
    description:
      'Stop scrambling before audits. Continuously monitor your controls against every framework you follow and generate audit-ready reports on demand.',
    features: [
      'Continuous control monitoring for ISO 27001, SOC 2, PCI DSS',
      'POPIA, NDPR, and GDPR compliance tracking',
      'Real-time gap analysis with remediation guidance',
      'Audit-ready evidence collection and storage',
      'Automated policy mapping and control inheritance',
      'Scheduled compliance reports for stakeholders',
    ],
  },
  {
    icon: Globe2,
    name: 'Threat Intelligence',
    tagline: 'Know the threat before it knows you',
    description:
      'Africa-focused threat intelligence enriched with local context. Track adversaries targeting your sector and region, and turn intel into detections instantly.',
    features: [
      'Curated feeds focused on African threat actors',
      'IOC and TTP enrichment on every alert',
      'Adversary profiling and campaign tracking',
      'Automated detection rule generation from intel',
      'Integration with global intel partners',
      'Threat landscape reports per industry',
    ],
  },
  {
    icon: Bot,
    name: 'AI Copilot',
    tagline: 'Your always-on security analyst',
    description:
      'Ask questions in plain English and get instant, context-aware answers from your security data. The AI Copilot triages, investigates, and writes reports for you.',
    features: [
      'Natural-language queries across all security data',
      'Proactive investigation suggestions',
      'Automatic SOAR playbook generation',
      'Executive incident summaries in one click',
      'Anomaly explanations with evidence trails',
      'Custom model tuning for your environment',
    ],
  },
  {
    icon: Siren,
    name: 'Incident Response',
    tagline: 'From alert to containment in seconds',
    description:
      'Orchestrate your response with automated playbooks, stakeholder notifications, and post-incident reviews — all in one guided workflow.',
    features: [
      'Pre-built and custom SOAR playbooks',
      'Automated host isolation and IP blocking',
      'Stakeholder notification templates',
      'One-click approval for sensitive actions',
      'Full incident timeline and audit trail',
      'Post-incident review and lessons-learned tracking',
    ],
  },
  {
    icon: Boxes,
    name: 'Asset Inventory',
    tagline: 'You can’t protect what you can’t see',
    description:
      'A living, breathing inventory of every asset — endpoints, servers, cloud, SaaS, and shadow IT — enriched with risk context and ownership.',
    features: [
      'Auto-discovery of on-prem, cloud, and SaaS assets',
      'Shadow IT detection and classification',
      'Risk scoring per asset with exploitability context',
      'Ownership and criticality tagging',
      'Change tracking with historical diffing',
      'Integration with CMDBs and ITSM tools',
    ],
  },
  {
    icon: EyeOff,
    name: 'Dark Web Monitoring',
    tagline: 'Find your leaked data before attackers do',
    description:
      'Continuous surveillance of dark web marketplaces, paste sites, and forums for leaked credentials, brand impersonation, and planned attacks.',
    features: [
      'Monitoring of dark web markets and paste sites',
      'Credential leak alerts with breach context',
      'Brand impersonation and typosquat detection',
      'Executive and VIP monitoring',
      'Automated password reset recommendations',
      'Threat actor chatter tracking per organisation',
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Products"
          title={
            <>
              Every module.{' '}
              <span className="text-gradient-blue">Working together.</span>
            </>
          }
          description="CyberGuard’s products aren’t a collection of disconnected tools — they’re a tightly integrated suite where each module shares intelligence with every other. Discover what each one does, and why they’re better together."
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

        {/* Products Grid */}
        <section className="relative py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading
              eyebrow="Product Modules"
              title={
                <>
                  Eight products.{' '}
                  <span className="text-gradient-blue">One platform.</span>
                </>
              }
              description="Each product is a complete solution for a specific security need. Deploy one, deploy all, or start small and scale — the shared intelligence layer means every module gets smarter as you add more."
            />

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {products.map((product, i) => (
                <GlassCard
                  key={product.name}
                  delay={(i % 2) * 0.1}
                  className="p-8 group"
                >
                  <div className="flex items-start gap-5 mb-5">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                      <product.icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-blue-400 font-medium">
                        {product.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-2.5">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Better Together */}
        <section className="relative py-24 overflow-hidden">
          <AuroraBackground />
          <div className="absolute inset-0 bg-grid mask-fade-bottom opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading
              eyebrow="Better Together"
              title={
                <>
                  The sum is greater than{' '}
                  <span className="text-gradient-blue">the parts.</span>
                </>
              }
              description="When you deploy multiple CyberGuard products, they share a common data lake, AI engine, and automation framework. A threat detected by EDR is instantly correlated by SIEM, enriched by Threat Intelligence, contained by Incident Response, and logged by Compliance — all automatically."
            />

            <div className="mt-16 grid md:grid-cols-3 gap-6">
              {[
                {
                  stat: '10x',
                  label: 'Faster detection',
                  description:
                    'Cross-module correlation catches threats that siloed tools miss entirely.',
                },
                {
                  stat: '87%',
                  label: 'Fewer false positives',
                  description:
                    'Shared context means the AI can distinguish real threats from noise.',
                },
                {
                  stat: '6–10',
                  label: 'Tools replaced',
                  description:
                    'Most customers retire their existing point tools after deploying CyberGuard.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-2xl p-8 text-center"
                >
                  <div className="font-display text-4xl sm:text-5xl font-bold text-gradient-blue mb-3">
                    {item.stat}
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">
                    {item.label}
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
                Ready to see them{' '}
                <span className="text-gradient-blue">all in action?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                Your 14-day free trial includes every product module. Deploy
                agents, connect your cloud, and experience the full platform —
                no credit card required.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/start-trial"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-sky-400 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-sky-500 transition-all hover:shadow-[0_0_50px_-5px_hsla(199,89%,48%,0.6)]"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/book-demo"
                  className="inline-flex items-center gap-2 glass px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-all"
                >
                  <Calendar className="w-4 h-4 text-blue-400" />
                  Book a Demo
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
