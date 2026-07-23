'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CreditCard,
  Zap,
  XCircle,
  CheckCircle2,
  ArrowRight,
  Shield,
  Rocket,
  Eye,
} from 'lucide-react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { PageHero } from '@/components/shared/PageHero';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const endpointCounts = [
  '1–50 endpoints',
  '51–100 endpoints',
  '101–250 endpoints',
  '251–500 endpoints',
  '501–1,000 endpoints',
  '1,000+ endpoints',
];

const benefits = [
  {
    icon: CreditCard,
    title: 'No credit card required',
    description:
      'Start your trial instantly — no payment information needed. We won’t ask for a card until you’re ready to upgrade.',
  },
  {
    icon: Zap,
    title: 'Full platform access',
    description:
      'Every module, every feature, every integration. You get the complete CyberGuard experience for 14 days, not a watered-down demo.',
  },
  {
    icon: XCircle,
    title: 'Cancel anytime',
    description:
      'No contracts, no commitments, no lock-in. If CyberGuard isn’t right for you, just walk away — no questions asked.',
  },
];

const trialIncludes = [
  'AI SOC with real-time alert triage',
  'EDR agents for all your endpoints',
  'SIEM with full log ingestion',
  'AI Copilot natural-language queries',
  'Compliance monitoring for all frameworks',
  'Threat intelligence feeds',
  'Executive and SOC dashboards',
  'SOAR playbook automation',
  'Dark web monitoring',
  '24/7 priority support during trial',
];

export default function StartTrialPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    password: '',
    endpointCount: '',
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
          eyebrow="Free Trial"
          title={
            <>
              Start your 14-day{' '}
              <span className="text-gradient-blue">free trial.</span>
            </>
          }
          description="Get full access to every CyberGuard module for 14 days. Deploy agents, connect your cloud, and experience the AI Copilot firsthand. No credit card. No commitment. No catch."
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
                        <Rocket className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-3">
                        Welcome to CyberGuard!
                      </h3>
                      <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
                        Your trial is ready, {form.name || 'there'}. Check your
                        email at {form.email || 'your inbox'} for your activation
                        link and onboarding guide. You’ll be up and running in
                        minutes.
                      </p>
                      <div className="glass rounded-xl p-4 w-full max-w-sm space-y-3">
                        <div className="flex items-center gap-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-blue-400" />
                          <span className="text-muted-foreground">
                            Account created
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-blue-400" />
                          <span className="text-muted-foreground">
                            Activation email sent
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-blue-400" />
                          <span className="text-muted-foreground">
                            Onboarding guide attached
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10">
                          <Shield className="w-5 h-5 text-blue-400" />
                        </div>
                        <h2 className="font-display text-2xl font-bold">
                          Create your account
                        </h2>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full name *</Label>
                          <Input
                            id="name"
                            required
                            value={form.name}
                            onChange={(e) =>
                              handleChange('name', e.target.value)
                            }
                            placeholder="Amara Diallo"
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
                            placeholder="amara@company.com"
                            className="bg-background/50"
                          />
                          <p className="text-xs text-muted-foreground">
                            Use your work email — personal domains (gmail, yahoo)
                            aren’t accepted.
                          </p>
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
                            <Label htmlFor="endpointCount">
                              Endpoint count
                            </Label>
                            <Select
                              value={form.endpointCount}
                              onValueChange={(value) =>
                                handleChange('endpointCount', value)
                              }
                            >
                              <SelectTrigger className="bg-background/50">
                                <SelectValue placeholder="Select range" />
                              </SelectTrigger>
                              <SelectContent>
                                {endpointCounts.map((count) => (
                                  <SelectItem key={count} value={count}>
                                    {count}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="password">Password *</Label>
                          <Input
                            id="password"
                            type="password"
                            required
                            value={form.password}
                            onChange={(e) =>
                              handleChange('password', e.target.value)
                            }
                            placeholder="Create a strong password"
                            className="bg-background/50"
                          />
                          <p className="text-xs text-muted-foreground">
                            Minimum 8 characters with at least one number and one
                            special character.
                          </p>
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-gradient-to-r from-blue-500 to-sky-400 text-white hover:from-blue-600 hover:to-sky-500 font-semibold"
                        >
                          Start Free Trial
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          By creating an account, you agree to our Terms of
                          Service and Privacy Policy.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>

              {/* Benefits + What’s included */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Benefits */}
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, i) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="glass rounded-2xl p-6 flex items-start gap-4"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* What’s included */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass-strong rounded-2xl p-6"
                >
                  <div className="flex items-center gap-2 mb-5">
                    <Eye className="w-5 h-5 text-blue-400" />
                    <h3 className="font-display text-lg font-bold">
                      Your trial includes
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {trialIncludes.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
