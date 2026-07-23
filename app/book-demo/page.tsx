'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  Users,
  Eye,
  Bot,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Lightbulb,
} from 'lucide-react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { PageHero } from '@/components/shared/PageHero';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const teamSizes = [
  '1–10 employees',
  '11–50 employees',
  '51–200 employees',
  '201–500 employees',
  '501–1,000 employees',
  '1,000+ employees',
];

const expectations = [
  {
    icon: Monitor,
    title: 'Live platform tour',
    description:
      'We’ll walk you through the full CyberGuard platform — every module, every dashboard — tailored to your industry and use case.',
  },
  {
    icon: Eye,
    title: 'Real threat detection',
    description:
      'See the AI engine detect and triage a live threat in real time, from initial alert to automated response.',
  },
  {
    icon: Bot,
    title: 'AI Copilot in action',
    description:
      'Ask the AI Copilot natural-language questions about security data and get instant, context-aware answers.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance walkthrough',
    description:
      'See how the compliance dashboard maps your controls to ISO 27001, SOC 2, POPIA, NDPR, and more.',
  },
  {
    icon: Users,
    title: 'Q&A with our experts',
    description:
      'Bring your toughest security questions. Our team has defended banks, hospitals, and governments across Africa.',
  },
  {
    icon: Lightbulb,
    title: 'Tailored recommendations',
    description:
      'We’ll recommend the right plan, modules, and deployment approach based on your environment and goals.',
  },
];

export default function BookDemoPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    preferredDate: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Book a Demo"
          title={
            <>
              See CyberGuard{' '}
              <span className="text-gradient-blue">in action.</span>
            </>
          }
          description="A 30-minute, personalised walkthrough of the CyberGuard platform. We’ll tailor the demo to your industry, show you the AI Copilot in real time, and answer your specific security questions."
        />

        <section className="relative py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="glass-strong rounded-3xl p-8 sm:p-10">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center text-center py-16">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 mb-6">
                        <CheckCircle2 className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-3">
                        Demo request received
                      </h3>
                      <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
                        Thank you, {form.name || 'there'}! Our team will reach out
                        within one business day to confirm your demo. We’re
                        excited to show you what CyberGuard can do.
                      </p>
                      <div className="glass rounded-xl p-4 w-full max-w-sm">
                        <div className="flex items-center gap-3 text-sm">
                          <Clock className="w-4 h-4 text-blue-400" />
                          <span className="text-muted-foreground">
                            Expected response: within 24 hours
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10">
                          <Calendar className="w-5 h-5 text-blue-400" />
                        </div>
                        <h2 className="font-display text-2xl font-bold">
                          Request your demo
                        </h2>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full name *</Label>
                            <Input
                              id="name"
                              required
                              value={form.name}
                              onChange={(e) =>
                                handleChange('name', e.target.value)
                              }
                              placeholder="Kwame Mensah"
                              className="bg-background/50"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Work email *</Label>
                            <Input
                              id="email"
                              type="email"
                              required
                              value={form.email}
                              onChange={(e) =>
                                handleChange('email', e.target.value)
                              }
                              placeholder="kwame@company.com"
                              className="bg-background/50"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <Label htmlFor="company">Company *</Label>
                            <Input
                              id="company"
                              required
                              value={form.company}
                              onChange={(e) =>
                                handleChange('company', e.target.value)
                              }
                              placeholder="Your organization"
                              className="bg-background/50"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="teamSize">Team size</Label>
                            <Select
                              value={form.teamSize}
                              onValueChange={(value) =>
                                handleChange('teamSize', value)
                              }
                            >
                              <SelectTrigger className="bg-background/50">
                                <SelectValue placeholder="Select team size" />
                              </SelectTrigger>
                              <SelectContent>
                                {teamSizes.map((size) => (
                                  <SelectItem key={size} value={size}>
                                    {size}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="preferredDate">
                            Preferred date & time
                          </Label>
                          <Input
                            id="preferredDate"
                            type="datetime-local"
                            value={form.preferredDate}
                            onChange={(e) =>
                              handleChange('preferredDate', e.target.value)
                            }
                            className="bg-background/50"
                          />
                          <p className="text-xs text-muted-foreground">
                            We’ll do our best to accommodate your preferred time.
                            All times are in your local timezone.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">
                            What would you like to see?
                          </Label>
                          <Textarea
                            id="message"
                            value={form.message}
                            onChange={(e) =>
                              handleChange('message', e.target.value)
                            }
                            placeholder="Tell us about your security challenges, what modules you’re most interested in, or any specific questions you’d like addressed during the demo..."
                            rows={4}
                            className="bg-background/50 resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-gradient-to-r from-blue-500 to-sky-400 text-white hover:from-blue-600 hover:to-sky-500 font-semibold"
                        >
                          Request Demo
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>

              {/* What to expect */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-blue-400/80 px-3 py-1 rounded-full glass mb-5">
                  What to Expect
                </span>
                <h2 className="font-display text-3xl font-bold tracking-tight mb-4">
                  A demo that’s{' '}
                  <span className="text-gradient-blue">worth your time.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  No generic slide decks. No sales pitch. Just a focused,
                  personalised walkthrough of the platform showing how CyberGuard
                  solves your specific security challenges.
                </p>

                <div className="space-y-4">
                  {expectations.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="glass rounded-xl p-5 flex items-start gap-4 hover:border-blue-500/20 transition-colors"
                    >
                      <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-500/10 flex-shrink-0">
                        <item.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 glass-strong rounded-2xl p-6 flex items-center gap-4">
                  <Clock className="w-8 h-8 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">30 minutes. That’s it.</p>
                    <p className="text-sm text-muted-foreground">
                      We respect your time. The demo is focused, efficient, and
                      packed with value.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
