'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Puzzle,
  ClipboardCheck,
  Laptop,
  Cloud,
  Siren,
  TrendingDown,
  ArrowRight,
  Calendar,
  Check,
} from 'lucide-react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GlassCard } from '@/components/shared/GlassCard';
import { AuroraBackground } from '@/components/shared/AuroraBackground';

const solutions = [
  {
    icon: Puzzle,
    title: 'Replace Fragmented Tools',
    problem:
      'You’re juggling 6–10 security tools that don’t talk to each other. Your team spends more time switching dashboards than investigating threats, and your budget is spread across a dozen vendors.',
    solution:
      'CyberGuard unifies ten security modules into one platform with a shared data lake and AI engine. One login, one dashboard, one vendor. Your team works faster, and you cut your tool sprawl overnight.',
    outcomes: [
      'Replace 6–10 point tools with one platform',
      'Eliminate context-switching between dashboards',
      'Reduce licensing and maintenance costs by up to 60%',
      'Single source of truth for all security data',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Meet Compliance Deadlines',
    problem:
      'Audits are a fire drill. You’re manually gathering evidence, mapping controls, and hoping nothing has changed since last quarter. Compliance feels like a burden, not a baseline.',
    solution:
      'CyberGuard continuously monitors your controls against ISO 27001, SOC 2, PCI DSS, POPIA, and NDPR. Evidence is collected automatically, gaps are flagged in real time, and audit-ready reports are one click away.',
    outcomes: [
      'Continuous compliance monitoring — not just point-in-time',
      'Automated evidence collection and storage',
      'Real-time gap analysis with remediation guidance',
      'Audit-ready reports generated on demand',
    ],
  },
  {
    icon: Laptop,
    title: 'Secure Remote Workforce',
    problem:
      'Your employees work from everywhere — home, cafes, client sites — on networks you don’t control. Traditional perimeter security doesn’t apply, and endpoints are your new frontline.',
    solution:
      'CyberGuard’s EDR agents protect every endpoint wherever it connects. Behavioural analytics detect anomalies, automated containment isolates compromised devices, and VPN-independent architecture keeps your team secure without slowing them down.',
    outcomes: [
      'Endpoint protection that follows devices anywhere',
      'Behavioural anomaly detection for remote threats',
      'Automated isolation of compromised devices',
      'No dependency on VPN for security enforcement',
    ],
  },
  {
    icon: Cloud,
    title: 'Protect Cloud Infrastructure',
    problem:
      'Your workloads are spread across AWS, Azure, and GCP. You have limited visibility into misconfigurations, exposed services, and suspicious activity across multiple cloud environments.',
    solution:
      'CyberGuard connects to your cloud accounts via OAuth and continuously monitors for misconfigurations, exposed assets, and anomalous activity. Attack surface management discovers shadow IT before attackers do.',
    outcomes: [
      'Unified visibility across AWS, Azure, and GCP',
      'Continuous misconfiguration and exposure detection',
      'Shadow IT discovery and classification',
      'Cloud-native threat detection and response',
    ],
  },
  {
    icon: Siren,
    title: 'Respond to Incidents Faster',
    problem:
      'When an incident happens, your team scrambles. Manual processes, unclear ownership, and disconnected tools turn a manageable incident into a crisis. Mean-time-to-respond is measured in hours, not seconds.',
    solution:
      'CyberGuard’s SOAR engine automates your response. Pre-built and custom playbooks isolate hosts, block IPs, and notify stakeholders in seconds. One-click approval keeps humans in control while automation does the heavy lifting.',
    outcomes: [
      'Automated incident containment in seconds, not hours',
      'Pre-built playbooks for common incident types',
      'One-click human approval for sensitive actions',
      'Full incident timeline and audit trail',
    ],
  },
  {
    icon: TrendingDown,
    title: 'Reduce Security Costs',
    problem:
      'Your security budget is consumed by tool licensing, maintenance, and the cost of hiring scarce security talent. You’re spending more but not necessarily getting more protection.',
    solution:
      'CyberGuard replaces a dozen tools with one, and our AI engine does the work of multiple analysts. Managed Security option means you don’t need to build a SOC at all. You get enterprise-grade security at a fraction of the cost.',
    outcomes: [
      'Consolidate tool spend into a single predictable cost',
      'AI automation reduces the need for large analyst teams',
      'Managed Security eliminates SOC build-out costs',
      'Pay only for the endpoints and modules you use',
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Solutions"
          title={
            <>
              Solutions for every{' '}
              <span className="text-gradient-blue">security challenge.</span>
            </>
          }
          description="Every security team faces different pressures. Whether you’re drowning in tools, dreading your next audit, or struggling to respond fast enough, CyberGuard has a solution built for your specific challenge."
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

        {/* Solutions Grid */}
        <section className="relative py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading
              eyebrow="Use Cases"
              title={
                <>
                  Find your challenge.{' '}
                  <span className="text-gradient-blue">Find your solution.</span>
                </>
              }
              description="Each solution addresses a real, pressing security problem. Click through to see how CyberGuard turns your biggest challenges into managed risks."
            />

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {solutions.map((solution, i) => (
                <GlassCard
                  key={solution.title}
                  delay={(i % 2) * 0.1}
                  className="p-8 group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                      <solution.icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <h3 className="font-display text-xl font-bold pt-3">
                      {solution.title}
                    </h3>
                  </div>

                  {/* Problem */}
                  <div className="mb-5">
                    <span className="inline-block text-xs font-mono uppercase tracking-wider text-red-400/80 mb-2">
                      The Challenge
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {solution.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <span className="inline-block text-xs font-mono uppercase tracking-wider text-blue-400/80 mb-2">
                      The CyberGuard Solution
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {solution.solution}
                    </p>
                  </div>

                  {/* Outcomes */}
                  <div className="pt-5 border-t border-white/5">
                    <span className="inline-block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                      What You Get
                    </span>
                    <ul className="space-y-2">
                      {solution.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
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
                Which challenge are you{' '}
                <span className="text-gradient-blue">facing today?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                Tell us about your security pressures and we’ll show you exactly
                how CyberGuard can help — with a tailored demo and a 14-day free
                trial.
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
