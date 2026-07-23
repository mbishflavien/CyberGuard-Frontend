'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  BookOpen,
  Code2,
  FileText,
  Newspaper,
  FlaskConical,
  AlertTriangle,
  ArrowRight,
  Mail,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GlassCard } from '@/components/shared/GlassCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AuroraBackground } from '@/components/shared/AuroraBackground';

const categories = [
  {
    icon: BookOpen,
    name: 'Documentation',
    description:
      'Comprehensive guides, API references, and setup instructions for every CyberGuard module.',
    count: '120+ articles',
    href: '/docs',
  },
  {
    icon: Code2,
    name: 'Developers',
    description:
      'SDKs, API docs, webhook guides, and code samples to integrate CyberGuard with your stack.',
    count: '45+ resources',
    href: '/developers',
  },
  {
    icon: FileText,
    name: 'Case Studies',
    description:
      'Real stories from African businesses that transformed their security with CyberGuard.',
    count: '20+ stories',
    href: '/case-studies',
  },
  {
    icon: Newspaper,
    name: 'Blog',
    description:
      'Insights, analysis, and commentary on cybersecurity trends shaping Africa and the world.',
    count: '80+ posts',
    href: '/blog',
  },
  {
    icon: FlaskConical,
    name: 'Security Research',
    description:
      'Original threat research from our team — vulnerability disclosures, malware analysis, and more.',
    count: '30+ papers',
    href: '/security',
  },
  {
    icon: AlertTriangle,
    name: 'Threat Reports',
    description:
      'Quarterly Africa-focused threat intelligence reports covering the latest campaigns and actors.',
    count: '12 reports',
    href: '/threat-reports',
  },
];

const featuredResources = [
  {
    category: 'Case Study',
    title: 'How a Nigerian Fintech Stopped 3,000+ Fraud Attempts with CyberGuard',
    description:
      'A leading Lagos-based fintech deployed CyberGuard’s AI SOC and EDR to detect and block sophisticated fraud campaigns targeting their mobile banking platform.',
    readTime: '8 min read',
    date: 'March 2024',
    icon: FileText,
  },
  {
    category: 'Threat Report',
    title: 'Q1 2024 Africa Threat Landscape Report',
    description:
      'Our quarterly analysis of the top threats targeting African businesses — from business email compromise to ransomware trends across the continent.',
    readTime: '15 min read',
    date: 'April 2024',
    icon: AlertTriangle,
  },
  {
    category: 'Security Research',
    title: 'Anatomy of a Business Email Compromise Campaign in East Africa',
    description:
      'A deep dive into a BEC campaign targeting Kenyan financial institutions, including IOCs, TTPs, and recommendations for detection and prevention.',
    readTime: '12 min read',
    date: 'February 2024',
    icon: FlaskConical,
  },
  {
    category: 'Blog',
    title: 'Why African Businesses Need Africa-Focused Threat Intelligence',
    description:
      'Global threat feeds miss the local context that matters most. Here’s why African-specific intelligence is critical for protecting African businesses.',
    readTime: '6 min read',
    date: 'March 2024',
    icon: Newspaper,
  },
  {
    category: 'Developer',
    title: 'Building Custom SOAR Playbooks with the CyberGuard API',
    description:
      'A step-by-step guide to creating automated response playbooks using our REST API, webhooks, and Python SDK.',
    readTime: '10 min read',
    date: 'February 2024',
    icon: Code2,
  },
  {
    category: 'Documentation',
    title: 'Getting Started: Deploying EDR Agents Across Your Fleet',
    description:
      'Everything you need to deploy CyberGuard endpoint agents at scale — from silent installation to GPO deployment and verification.',
    readTime: '5 min read',
    date: 'January 2024',
    icon: BookOpen,
  },
];

export default function ResourcesPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Resources"
          title={
            <>
              Knowledge that{' '}
              <span className="text-gradient-blue">protects.</span>
            </>
          }
          description="Explore documentation, threat research, case studies, and developer resources. Whether you’re getting started with CyberGuard or diving deep into African threat intelligence, you’ll find what you need here."
        />

        {/* Categories */}
        <section className="relative py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading
              eyebrow="Explore by Category"
              title={
                <>
                  Find what you’re{' '}
                  <span className="text-gradient-blue">looking for.</span>
                </>
              }
              description="Six resource categories covering everything from technical documentation to original security research focused on the African threat landscape."
            />

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, i) => (
                <GlassCard key={category.name} delay={i * 0.05} className="p-8 group">
                  <Link href={category.href} className="block h-full">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors mb-5">
                      <category.icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-blue-400/70">
                        {category.count}
                      </span>
                      <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="relative py-24 overflow-hidden">
          <AuroraBackground />
          <div className="absolute inset-0 bg-grid mask-fade-bottom opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading
              eyebrow="Featured Resources"
              title={
                <>
                  Latest insights &{' '}
                  <span className="text-gradient-blue">research.</span>
                </>
              }
              description="Fresh content from our team of analysts, researchers, and engineers. New resources published every week."
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredResources.map((resource, i) => (
                <GlassCard key={i} delay={(i % 3) * 0.1} className="p-6 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 flex-shrink-0">
                      <resource.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-blue-400/80">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold mb-3 group-hover:text-blue-400 transition-colors leading-snug">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-white/5">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {resource.readTime}
                    </span>
                    <span>{resource.date}</span>
                  </div>
                </GlassCard>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 text-center"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:gap-3 transition-all"
              >
                View all resources
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="relative py-24 overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-strong rounded-3xl p-8 sm:p-12 text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 mb-6">
                <Mail className="w-7 h-7 text-blue-400" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                Stay ahead of the threats
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
                Get our weekly threat intelligence briefing — the latest
                African-focused security research, new threat alerts, and
                product updates — delivered straight to your inbox.
              </p>

              {subscribed ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="inline-flex items-center gap-2 text-blue-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-semibold">
                      You’re subscribed! Check your inbox to confirm.
                    </span>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="bg-background/50 flex-1"
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-sky-400 text-white hover:from-blue-600 hover:to-sky-500 font-semibold"
                  >
                    Subscribe
                  </Button>
                </form>
              )}
              <p className="text-xs text-muted-foreground mt-4">
                Join 8,000+ security professionals. Unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
