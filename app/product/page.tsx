import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import CTABand from '@/components/CTABand'
import StatementBand from '@/components/StatementBand'
import HowItWorksSteps from '@/components/HowItWorksSteps'
import TestimonialCard from '@/components/TestimonialCard'
import {
  GridIcon,
  MicIcon,
  PenLineIcon,
  CameraIcon,
  BrainIcon,
  FilePenIcon,
  CalendarCheckIcon,
  ReceiptIcon,
  BarChart3Icon,
  MessageSquareIcon,
  ShieldAlertIcon,
} from '@/components/icons'

export const metadata: Metadata = {
  title: 'Product Overview — TatvaPractice',
  alternates: {
    canonical: 'https://tatvapractice.com/product',
  },
}

const modules = [
  {
    name: 'AI Workflows',
    desc: 'Voice, handwriting, and photo AI — your choice of capture.',
    href: '/product',
    Icon: GridIcon,
  },
  {
    name: 'VoiceRx',
    desc: 'Speak prescriptions in any Indian language. AI structures them.',
    href: '/product/voicerx',
    Icon: MicIcon,
  },
  {
    name: 'SmartSync',
    desc: 'Write naturally with a digital pen. Records sync everywhere.',
    href: '/product/smartsync',
    Icon: PenLineIcon,
  },
  {
    name: 'SnapRx',
    desc: 'Photograph any Rx. Healthcare-grade OCR digitises it instantly.',
    href: '/product/snaprx',
    Icon: CameraIcon,
  },
  {
    name: 'AI Agents',
    desc: 'DoctorAgent, Amaya, and Receptionist Agent in one workflow.',
    href: '/product/ai-agents',
    Icon: BrainIcon,
  },
  {
    name: 'Core EMR',
    desc: 'Patient history, SOAP notes, labs, and telehealth — one view.',
    href: '/product/emr',
    Icon: FilePenIcon,
  },
  {
    name: 'Appointments & Queue',
    desc: 'OPD slots, walk-ins, live ETAs, and follow-up automation.',
    href: undefined,
    Icon: CalendarCheckIcon,
  },
  {
    name: 'Billing',
    desc: 'GST invoices, packages, UPI/card payments, and reconciliation.',
    href: undefined,
    Icon: ReceiptIcon,
  },
  {
    name: 'Analytics',
    desc: 'Revenue, retention, and OPD utilisation — refreshed live.',
    href: undefined,
    Icon: BarChart3Icon,
  },
  {
    name: 'Integrations',
    desc: 'Lab networks, pharmacy, ABDM, and insurance in one place.',
    href: undefined,
    Icon: GridIcon,
  },
  {
    name: 'Digital Presence',
    desc: 'Clinic profile, patient portal, and WhatsApp communications.',
    href: undefined,
    Icon: MessageSquareIcon,
  },
  {
    name: 'Security & Compliance',
    desc: 'DPDPA, ABDM, and role-based access built in by default.',
    href: undefined,
    Icon: ShieldAlertIcon,
  },
]

const howItWorksSteps = [
  {
    title: 'Patient walks in',
    description: 'Queue managed automatically. Room assigned. Waiting time updated on the display.',
  },
  {
    title: 'Consultation begins',
    description: 'Doctor opens the session. VoiceRx, SmartSync, or SnapRx — whichever fits the workflow.',
  },
  {
    title: 'Lab order sent',
    description: 'Lab request filed from the same screen. Results flow back automatically.',
  },
  {
    title: 'Bill generated',
    description: 'Follow-up reminder automated. GST invoice created. Patient gets WhatsApp summary.',
  },
]

export default async function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-24 pt-20 bg-tp-slate-100 hero-spotlight text-center"
        aria-labelledby="product-hero-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
            Product overview
          </span>
          <h1
            id="product-hero-heading"
            className="font-display font-bold text-tp-slate-900 mt-[18px] mb-[18px] mx-auto"
            style={{
              fontSize: 'clamp(36px,4.6vw,64px)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              maxWidth: '820px',
            }}
          >
            Everything you need to run a modern Indian practice.
          </h1>
          <p
            className="text-tp-slate-600 mx-auto"
            style={{ fontSize: '20px', lineHeight: '32px', maxWidth: '680px' }}
          >
            20+ integrated modules. One connected workflow. Replace 5
            disconnected tools with one platform built for how Indian doctors
            actually work.
          </p>
          <div className="flex gap-3 justify-center flex-wrap mt-7">
            <Link href="/contact" className="btn btn-solid btn-l">
              Start Free Trial <span className="arr">→</span>
            </Link>
            <Link href="/contact" className="btn btn-outline btn-l">
              Book a Demo
            </Link>
          </div>
          <div
            className="ph ph-aspect-16-10 mt-12 max-w-[980px] mx-auto"
            data-placeholder="ui-screenshot"
            data-replace-with="Product overview — panoramic UI showing the full TatvaPractice workspace with patient queue, consult, and billing tabs"
          >
            <span className="ph-label">Product UI · Full workspace</span>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Feature Grid */}
      <section className="py-24 bg-white" aria-labelledby="modules-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-12">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              20+ modules
            </span>
            <h2
              id="modules-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(28px,3.6vw,48px)',
                lineHeight: 1.17,
                letterSpacing: '-0.02em',
              }}
            >
              One platform. Every workflow.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {modules.map(({ name, desc, href, Icon }) => (
              <article key={name} className="card rounded-[10px] flex flex-col">
                <div
                  className="w-10 h-10 rounded-[10px] bg-tp-blue-50 text-tp-blue-600 grid place-items-center mb-3.5 flex-shrink-0"
                  aria-hidden="true"
                >
                  <Icon size={22} />
                </div>
                <h4
                  className="font-display font-semibold text-tp-slate-900"
                  style={{ fontSize: '20px' }}
                >
                  {name}
                </h4>
                <p className="text-sm text-tp-slate-600 mt-1.5 leading-5 flex-1">{desc}</p>
                {href && (
                  <Link href={href} className="btn-link mt-3 text-sm">
                    Learn more →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <StatementBand>
        <p
          className="font-display font-bold"
          style={{
            fontSize: 'clamp(24px,3vw,40px)',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}
        >
          One connected workflow. Every consult, every Rx, every record — in one place.
        </p>
      </StatementBand>

      {/* How It Works */}
      <section
        className="bg-tp-slate-100 py-24"
        aria-labelledby="how-it-works-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              How it works together
            </span>
            <h2
              id="how-it-works-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(24px,3vw,40px)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              From patient in to patient out — every step connected.
            </h2>
          </div>
          <HowItWorksSteps steps={howItWorksSteps} />
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-white" aria-label="Customer testimonial">
        <div className="max-w-[840px] mx-auto px-6">
          <TestimonialCard
            quote="We moved 3 clinics to TatvaPractice in under a week. The onboarding was seamless and the team is incredibly responsive."
            name="Dr. Priya Sharma"
            role="Clinic Director · Wellness First, Mumbai"
            initials="PS"
            large
          />
        </div>
      </section>

      <CTABand />
    </>
  )
}
