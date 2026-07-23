'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, X, ArrowRight, HelpCircle } from 'lucide-react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Pricing } from '@/components/home/Pricing';
import { AuroraBackground } from '@/components/shared/AuroraBackground';

const plans = ['Starter', 'Professional', 'Business', 'Enterprise', 'Managed Security'];

const comparisonRows = [
  {
    category: 'Core Platform',
    features: [
      { label: 'Endpoints', values: ['50', '250', '1,000', 'Unlimited', 'Unlimited'] },
      { label: 'Dashboard users', values: ['1', '5', '20', 'Unlimited', 'Unlimited'] },
      { label: 'Data retention', values: ['30 days', '90 days', '1 year', '3 years', '3 years'] },
      { label: 'API access', values: [false, true, true, true, true] },
    ],
  },
  {
    category: 'Security Modules',
    features: [
      { label: 'EDR', values: [true, true, true, true, true] },
      { label: 'SIEM', values: [true, true, true, true, true] },
      { label: 'NDR', values: [false, true, true, true, true] },
      { label: 'SOAR playbooks', values: [false, 'Basic', 'Custom', 'Custom', 'Custom + managed'] },
      { label: 'AI Copilot', values: ['Basic', 'Full', 'Full', 'Full + tuning', 'Full + tuning'] },
      { label: 'Threat Intelligence', values: ['Basic', 'Real-time', 'Real-time', 'Real-time + custom', 'Real-time + custom'] },
      { label: 'Compliance monitoring', values: [false, true, true, true, true] },
      { label: 'Vulnerability management', values: [false, true, true, true, true] },
      { label: 'Attack surface management', values: [false, false, true, true, true] },
      { label: 'Dark web monitoring', values: [false, false, true, true, true] },
    ],
  },
  {
    category: 'Support & Services',
    features: [
      { label: 'Support level', values: ['Email & chat', 'Priority', '24/7 priority', '24/7 + CSM', '24/7 + dedicated team'] },
      { label: 'Onboarding', values: ['Self-service', 'Guided', 'Guided', 'White-glove', 'White-glove'] },
      { label: 'Dedicated CSM', values: [false, false, false, true, true] },
      { label: 'SOC monitoring (24/7)', values: [false, false, false, false, true] },
      { label: 'Incident response on-call', values: [false, false, false, false, true] },
      { label: 'Threat hunting', values: [false, false, false, false, true] },
    ],
  },
];

const faqLinks = [
  {
    question: 'What is included in the free trial?',
    answer:
      'Every plan includes a 14-day free trial with full access to all modules. No credit card required.',
    href: '/start-trial',
  },
  {
    question: 'Can I change plans later?',
    answer:
      'Yes, you can upgrade or downgrade at any time. Changes take effect immediately and are prorated.',
    href: '/contact',
  },
  {
    question: 'Is data stored in Africa?',
    answer:
      'Yes, we offer data residency options with infrastructure hosted in African data centers.',
    href: '/about',
  },
  {
    question: 'Do you offer discounts for non-profits?',
    answer:
      'We offer special pricing for non-profits, educational institutions, and early-stage startups. Contact our team to learn more.',
    href: '/contact',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank transfers, credit cards, and local payment methods for African businesses.',
    href: '/contact',
  },
  {
    question: 'What is the difference between Enterprise and Managed Security?',
    answer:
      'Enterprise gives you the full platform to run yourself. Managed Security adds a dedicated team of CyberGuard analysts who run your SOC 24/7.',
    href: '/contact',
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="w-4 h-4 text-blue-400 mx-auto" />;
  }
  if (value === false) {
    return <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />;
  }
  return <span className="text-sm text-muted-foreground">{value}</span>;
}

export default function PricingPage() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Pricing"
          title={
            <>
              Pricing that scales{' '}
              <span className="text-gradient-blue">with your business.</span>
            </>
          }
          description="Replace ten fragmented tools with one unified platform. Every plan includes the full AI engine — you only pay for scale. Start with a 14-day free trial, no credit card required."
        />

        {/* Pricing Component */}
        <Pricing />

        {/* Comparison Table */}
        <section className="relative py-24 overflow-hidden">
          <AuroraBackground />
          <div className="absolute inset-0 bg-grid mask-fade-bottom opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading
              eyebrow="Compare Plans"
              title={
                <>
                  Every feature,{' '}
                  <span className="text-gradient-blue">side by side.</span>
                </>
              }
              description="A detailed breakdown of what's included in each CyberGuard plan. Not sure which is right for you? Talk to our team and we'll help you choose."
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 glass-strong rounded-2xl overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-5 font-display text-sm font-bold text-muted-foreground uppercase tracking-wider sticky left-0 bg-background/80 backdrop-blur-sm">
                        Features
                      </th>
                      {plans.map((plan) => (
                        <th
                          key={plan}
                          className="text-center p-5 font-display text-sm font-bold min-w-[140px]"
                        >
                          {plan === 'Professional' && (
                            <span className="block text-xs text-blue-400 font-mono mb-1">
                              MOST POPULAR
                            </span>
                          )}
                          {plan}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((section) => (
                      <Fragment key={section.category}>
                        <tr className="bg-white/5">
                          <td
                            colSpan={plans.length + 1}
                            className="p-3 px-5 font-display text-sm font-bold text-blue-400 uppercase tracking-wider sticky left-0"
                          >
                            {section.category}
                          </td>
                        </tr>
                        {section.features.map((feature) => (
                          <tr
                            key={feature.label}
                            className="border-b border-white/5 hover:bg-white/5 transition-colors"
                          >
                            <td className="p-4 px-5 text-sm text-muted-foreground sticky left-0 bg-background/80 backdrop-blur-sm whitespace-nowrap">
                              {feature.label}
                            </td>
                            {feature.values.map((value, vIdx) => (
                              <td
                                key={vIdx}
                                className="p-4 text-center"
                              >
                                <CellValue value={value} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/start-trial"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-sky-400 text-white px-7 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-sky-500 transition-all hover:shadow-[0_0_50px_-5px_hsla(199,89%,48%,0.6)]"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 glass px-7 py-3 rounded-xl font-semibold hover:bg-white/5 transition-all"
              >
                Talk to Sales
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQ Links */}
        <section className="relative py-24 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <SectionHeading
              eyebrow="Pricing FAQ"
              title={
                <>
                  Common pricing{' '}
                  <span className="text-gradient-blue">questions.</span>
                </>
              }
              description="Quick answers to the questions we hear most. Need more detail? Our team is one message away."
            />

            <div className="mt-12 grid md:grid-cols-2 gap-4">
              {faqLinks.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
                >
                  <Link
                    href={faq.href}
                    className="glass rounded-xl p-6 block h-full hover:border-blue-500/20 hover:bg-white/5 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 flex-shrink-0">
                        <HelpCircle className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                          {faq.question}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {faq.answer}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 group-hover:gap-2 transition-all">
                          Learn more
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
