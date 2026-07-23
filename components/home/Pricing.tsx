'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Check, ArrowRight, Sparkles, Building2, Shield } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    icon: Sparkles,
    description: 'For small teams getting started with unified security.',
    monthly: 499,
    yearly: 4990,
    features: [
      'Up to 50 endpoints',
      'EDR + SIEM',
      'AI Copilot (basic)',
      'Email & chat support',
      '1 dashboard user',
      'Basic threat intel',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    icon: Shield,
    description: 'For growing businesses that need full visibility.',
    monthly: 1499,
    yearly: 14990,
    features: [
      'Up to 250 endpoints',
      'All 10 modules',
      'AI Copilot (full)',
      'SOAR playbooks',
      '5 dashboard users',
      'Real-time threat intel',
      'Compliance monitoring',
    ],
    highlighted: true,
  },
  {
    name: 'Business',
    icon: Building2,
    description: 'For mid-market teams with advanced needs.',
    monthly: 3999,
    yearly: 39990,
    features: [
      'Up to 1,000 endpoints',
      'All 10 modules',
      'Custom SOAR playbooks',
      'Dark web monitoring',
      '20 dashboard users',
      'Attack surface management',
      'Priority 24/7 support',
    ],
    highlighted: false,
  },
  {
    name: 'Enterprise',
    icon: Building2,
    description: 'For large organizations with custom requirements.',
    monthly: null,
    yearly: null,
    features: [
      'Unlimited endpoints',
      'All modules + custom',
      'Dedicated AI model tuning',
      'On-premise option',
      'Unlimited users',
      'API & SIEM forwarding',
      'Dedicated CSM',
      'Custom compliance',
    ],
    highlighted: false,
  },
  {
    name: 'Managed Security',
    icon: Shield,
    description: 'CyberGuard runs your SOC for you — 24/7.',
    monthly: null,
    yearly: null,
    features: [
      'Everything in Enterprise',
      '24/7 SOC monitoring',
      'Dedicated analyst team',
      'Incident response on-call',
      'Threat hunting',
      'Executive reporting',
      'SLA-backed response',
    ],
    highlighted: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Simple pricing. <span className="text-gradient-blue">No hidden costs.</span>
            </>
          }
          description="Replace 10+ tools with one platform. Every plan includes the full AI engine — you only pay for scale."
        />

        {/* Toggle */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className={`text-sm ${!yearly ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
          <button
            onClick={() => setYearly(!yearly)}
            className="relative w-14 h-7 rounded-full bg-white/10 transition-colors"
            aria-label="Toggle billing period"
          >
            <motion.div
              animate={{ x: yearly ? 28 : 2 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="absolute top-1 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-sky-400"
            />
          </button>
          <span className={`text-sm ${yearly ? 'text-foreground' : 'text-muted-foreground'}`}>
            Yearly <span className="text-blue-400 text-xs">(Save 2 months)</span>
          </span>
        </div>

        {/* Plans */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.slice(0, 3).map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'glass-strong border-blue-500/30 glow-blue'
                  : 'glass border-white/5'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-sky-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 mb-5">
                <plan.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-5">{plan.description}</p>
              <div className="mb-6">
                {plan.monthly !== null ? (
                  <>
                    <span className="font-display text-4xl font-bold">
                      ${(yearly ? plan.yearly : plan.monthly).toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground">/{yearly ? 'year' : 'month'}</span>
                  </>
                ) : (
                  <span className="font-display text-2xl font-bold text-muted-foreground">Custom</span>
                )}
              </div>
              <Link
                href={plan.monthly !== null ? '/start-trial' : '/contact'}
                className={`block text-center w-full py-3 rounded-xl font-semibold transition-all mb-6 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-blue-500 to-sky-400 text-white hover:shadow-[0_0_40px_-5px_hsla(199,89%,48%,0.5)]'
                    : 'glass hover:bg-white/5'
                }`}
              >
                {plan.monthly !== null ? 'Start Free Trial' : 'Contact Sales'}
              </Link>
              <ul className="space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Enterprise & Managed Security */}
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {plans.slice(3).map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 flex flex-col md:flex-row gap-6"
            >
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 mb-4">
                  <plan.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:gap-3 transition-all"
                >
                  Contact Sales <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex-1">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
