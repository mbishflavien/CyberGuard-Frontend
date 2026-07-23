'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/SectionHeading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What makes CyberGuard different from other cybersecurity platforms?',
    answer:
      'CyberGuard is the first AI-native platform built specifically for the African threat landscape. Unlike fragmented tools that require separate dashboards, licenses, and teams, CyberGuard unifies 10 security modules — SOC, EDR, NDR, SIEM, SOAR, Threat Intelligence, Compliance, Vulnerability Management, Attack Surface Management, and Dark Web Monitoring — into one platform with shared AI intelligence.',
  },
  {
    question: 'How quickly can we deploy CyberGuard?',
    answer:
      'Most organizations are fully deployed within 48 hours. Endpoint agents deploy via silent installer or GPO, network sensors take minutes to configure, and cloud integrations use OAuth. Our team provides guided onboarding for every plan, and the AI engine starts learning your environment immediately.',
  },
  {
    question: 'Do you offer a free trial?',
    answer:
      'Yes. Every plan includes a 14-day free trial with full access to all modules. No credit card required. You can deploy agents, connect cloud accounts, and experience the full platform — including AI Copilot — before making any commitment.',
  },
  {
    question: 'Is our data stored in Africa?',
    answer:
      'Yes. CyberGuard offers data residency options with infrastructure hosted in African data centers. For regulated industries like banking and healthcare, we provide sovereign data storage that complies with POPIA, NDPR, and local data protection requirements.',
  },
  {
    question: 'What size organizations is CyberGuard built for?',
    answer:
      'CyberGuard scales from 50 endpoints to tens of thousands. Our Starter plan serves small businesses, while Enterprise and Managed Security plans support large organizations with custom requirements. The AI engine scales automatically — you only pay for the endpoints and modules you use.',
  },
  {
    question: 'Can CyberGuard replace our existing SIEM or EDR?',
    answer:
      'Yes. CyberGuard includes full SIEM and EDR capabilities natively. Most customers replace 6-10 point tools when they adopt CyberGuard. However, if you have existing investments, we also integrate with major SIEMs, EDRs, and firewalls through our open API and pre-built connectors.',
  },
  {
    question: 'What compliance frameworks does CyberGuard support?',
    answer:
      'CyberGuard continuously monitors against ISO 27001, SOC 2, PCI DSS, GDPR, POPIA (South Africa), NDPR (Nigeria), and NIST Cybersecurity Framework. The compliance dashboard generates audit-ready reports and alerts you to gaps in real-time.',
  },
  {
    question: 'How does the AI Copilot work?',
    answer:
      'AI Copilot lets you query your security data in natural language. Ask "show me all lateral movement in the last 24 hours" or "what changed in our compliance posture this week?" and get instant, context-aware answers. It also proactively suggests investigations, writes SOAR playbooks, and summarizes incidents for executives.',
  },
  {
    question: 'What is Managed Security and who is it for?',
    answer:
      'Managed Security is our fully managed SOC service. CyberGuard provides a dedicated team of analysts who monitor your environment 24/7, respond to incidents, and handle threat hunting. It is ideal for organizations that want enterprise-grade security without building an internal SOC team.',
  },
  {
    question: 'How do you handle African-specific threats?',
    answer:
      'Our threat intelligence team tracks region-specific threat actors, fraud patterns, and attack campaigns targeting African businesses. The AI models are trained on African threat data, and our playbooks address common regional attack vectors — from business email compromise to mobile money fraud.',
  },
];

export function FAQ() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything you need to know about CyberGuard. Can't find what you're looking for? Reach out to our team."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-xl px-6 border border-white/5 data-[state=open]:border-blue-500/20 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white text-base hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed pb-5 font-normal">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
