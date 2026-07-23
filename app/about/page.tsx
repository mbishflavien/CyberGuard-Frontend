'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Target,
  ShieldCheck,
  Lightbulb,
  Globe2,
  Unlock,
  ArrowRight,
  Calendar,
  Rocket,
  CheckCircle2,
  Building2,
  Users,
  Heart,
} from 'lucide-react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GlassCard } from '@/components/shared/GlassCard';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { AuroraBackground } from '@/components/shared/AuroraBackground';

const stats = [
  { value: 2400, suffix: '+', label: 'Organizations protected' },
  { value: 14, suffix: '', label: 'Countries across Africa' },
  { value: 180, suffix: '+', label: 'Team members' },
  { value: 99, suffix: '%', label: 'Customer retention rate' },
];

const values = [
  {
    icon: ShieldCheck,
    title: 'Trust',
    description:
      "We protect our customers' most sensitive data and systems. Trust is earned through transparency, reliability, and doing what we say we will do — every single time.",
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      "We build what doesn't exist yet. Our AI-native approach isn't a feature — it's our foundation. We push the boundaries of what's possible in cybersecurity.",
  },
  {
    icon: Globe2,
    title: 'African Excellence',
    description:
      "We prove that world-class technology can be built in Africa, by Africans, for Africans. We're proud of our roots and committed to raising the bar for the entire continent.",
  },
  {
    icon: Unlock,
    title: 'Accessibility',
    description:
      "Enterprise-grade security shouldn't be reserved for enterprises. We make cybersecurity accessible to businesses of every size, from startups to multinationals.",
  },
];

const timeline = [
  {
    year: '2019',
    title: 'The idea is born',
    description:
      "Our founders — veterans of African banking and telecom security — grew frustrated with tools built for Western enterprises that didn't fit African realities. CyberGuard was conceived as a different kind of security platform.",
    icon: Lightbulb,
  },
  {
    year: '2020',
    title: 'Founding & first prototype',
    description:
      'CyberGuard Technologies is incorporated in Lagos. The first prototype combines EDR and SIEM into a single platform with an early AI correlation engine.',
    icon: Rocket,
  },
  {
    year: '2021',
    title: 'First customers & seed round',
    description:
      'We sign our first ten customers — Nigerian fintechs and banks — and close a seed round led by pan-African investors who share our vision.',
    icon: Building2,
  },
  {
    year: '2022',
    title: 'Platform expansion & Nairobi office',
    description:
      "We expand to ten modules, open our Nairobi office, and grow to 50 team members. The AI Copilot launches as the first natural-language security assistant in Africa.",
    icon: Users,
  },
  {
    year: '2023',
    title: 'Series A & regional expansion',
    description:
      'We close a Series A round, open our Johannesburg office, and cross 1,000 customers. Our threat intelligence team begins publishing Africa-specific threat reports.',
    icon: Globe2,
  },
  {
    year: '2024',
    title: 'Managed Security & 2,400+ customers',
    description:
      'We launch our Managed Security service, bringing 24/7 SOC capabilities to organizations without security teams. We now protect 2,400+ businesses across 14 African countries.',
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <PageHero
          eyebrow="About"
          title={
            <>
              Built in Africa.{' '}
              <span className="text-gradient-blue">For Africa.</span>
            </>
          }
          description="CyberGuard was founded by security practitioners who lived the challenges of protecting African businesses with tools built for someone else. We set out to build a platform that understands our continent — its threats, its regulations, and its potential."
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-sky-400 text-white px-7 py-3.5 rounded-xl font-semibold hover:from-blue-600 hover:to-sky-500 transition-all hover:shadow-[0_0_50px_-5px_hsla(199,89%,48%,0.6)]"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </PageHero>

        {/* Mission */}
        <section className="relative py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-blue-400/80 px-3 py-1 rounded-full glass mb-6">
                  Our Mission
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] mb-6">
                  Make world-class cybersecurity{' '}
                  <span className="text-gradient-blue">
                    accessible to every African business.
                  </span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Africa is the fastest-growing digital economy on the planet.
                    But as businesses digitise, they become targets. Too many
                    African organisations are defending themselves with tools
                    built for different markets, different threats, and different
                    realities.
                  </p>
                  <p>
                    We believe every business — from the fintech startup in Lagos
                    to the hospital in Nairobi to the manufacturer in
                    Johannesburg — deserves security that understands their
                    world. That is why we built CyberGuard: an AI-native platform
                    that unifies ten security modules, trained on African threat
                    data, hosted in African data centers, and designed for
                    African teams.
                  </p>
                  <p>
                    We are not just building a product. We are building the
                    infrastructure for a more secure digital Africa.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="glass-strong rounded-3xl p-8">
                  <Target className="w-12 h-12 text-blue-400 mb-6" />
                  <div className="space-y-6">
                    {[
                      {
                        title: 'Unify',
                        description:
                          'Ten security modules in one platform — no more stitching tools together.',
                      },
                      {
                        title: 'Localise',
                        description:
                          'Threat intelligence, compliance, and playbooks built for African realities.',
                      },
                      {
                        title: 'Democratise',
                        description:
                          'AI and automation that deliver enterprise security without an enterprise team.',
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-4">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative py-24 overflow-hidden">
          <AuroraBackground />
          <div className="absolute inset-0 bg-grid mask-fade-bottom opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading
              eyebrow="By the Numbers"
              title={
                <>
                  Protecting Africa&apos;s{' '}
                  <span className="text-gradient-blue">digital future.</span>
                </>
              }
              description="Our impact is measured in the businesses we protect, the threats we stop, and the trust we have earned across the continent."
            />

            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-2xl p-8 text-center"
                >
                  <div className="font-display text-4xl sm:text-5xl font-bold text-gradient-blue mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="relative py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading
              eyebrow="Our Values"
              title={
                <>
                  What we stand{' '}
                  <span className="text-gradient-blue">for.</span>
                </>
              }
              description="Our values are not posters on a wall — they are the principles that guide every decision, every line of code, and every customer interaction."
            />

            <div className="mt-16 grid sm:grid-cols-2 gap-6">
              {values.map((value, i) => (
                <GlassCard
                  key={value.title}
                  delay={(i % 2) * 0.1}
                  className="p-8 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                      <value.icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="relative py-24 overflow-hidden">
          <AuroraBackground />
          <div className="absolute inset-0 bg-grid mask-fade-bottom opacity-20" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
            <SectionHeading
              eyebrow="Our Journey"
              title={
                <>
                  From idea to{' '}
                  <span className="text-gradient-blue">continent-wide impact.</span>
                </>
              }
              description="Five years. Three offices. One mission. Here is how we got here."
            />

            <div className="mt-16 relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-blue-400/40 via-blue-400/20 to-transparent" />

              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="relative flex gap-6"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center relative z-10">
                        <item.icon className="w-5 h-5 text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-display text-2xl font-bold text-gradient-blue">
                          {item.year}
                        </span>
                        <span className="h-px flex-1 bg-white/10" />
                      </div>
                      <h3 className="font-display text-lg font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team teaser */}
        <section className="relative py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading
              eyebrow="Our Team"
              title={
                <>
                  Security people who{' '}
                  <span className="text-gradient-blue">get it.</span>
                </>
              }
              description="Our team has defended banks, telcos, hospitals, and governments across Africa. We have been in the SOC at 3 AM. We have responded to breaches. We know what works because we have lived it."
            />
            <div className="mt-16 grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: Heart,
                  title: 'Mission-driven',
                  description:
                    'Every team member joined because they believe African businesses deserve better security.',
                },
                {
                  icon: Users,
                  title: '180+ strong',
                  description:
                    'Engineers, analysts, and researchers across Lagos, Nairobi, and Johannesburg.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Battle-tested',
                  description:
                    'Decades of combined experience on the front lines of African cybersecurity.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-2xl p-8"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 mb-4">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">
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
                Join us in securing{' '}
                <span className="text-gradient-blue">Africa&apos;s digital future.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                Whether you are looking to protect your business or join our
                mission, we would love to hear from you.
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
