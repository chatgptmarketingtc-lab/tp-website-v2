import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import CTABand from '@/components/CTABand'
import StatementBand from '@/components/StatementBand'
import HowItWorksSteps from '@/components/HowItWorksSteps'
import TestimonialCard from '@/components/TestimonialCard'
import FAQAccordion from '@/components/FAQAccordion'
import {
  PenIcon,
  WifiOffIcon,
  RefreshIcon,
  ListChecksIcon,
} from '@/components/icons'

export const metadata: Metadata = {
  title: 'SmartSync — Write naturally. Save digitally. | TatvaPractice',
  description:
    'SmartSync turns your handwritten notes and prescriptions into structured digital records. Use the digital pen the way you always have — we handle the rest.',
  alternates: {
    canonical: 'https://tatvapractice.com/product/smartsync',
  },
}

const featureCards = [
  {
    Icon: PenIcon,
    title: 'Zero learning curve',
    desc: 'Write the way you have for years. SmartSync digitises in real time.',
  },
  {
    Icon: WifiOffIcon,
    title: 'Offline-first',
    desc: 'Works at camps, rural OPD, anywhere connectivity is patchy. Syncs when back online.',
  },
  {
    Icon: RefreshIcon,
    title: 'Multi-branch sync',
    desc: 'Two clinics, three doctors — every record is consistent everywhere.',
  },
  {
    Icon: ListChecksIcon,
    title: 'Audit trail',
    desc: 'Every edit timestamped. Conflict resolution if two devices sync the same record.',
  },
]

const howItWorksSteps = [
  {
    title: 'Write the Rx',
    description: 'Use a digital pen on tablet, or paper if you prefer.',
  },
  {
    title: 'AI digitises',
    description: 'Handwriting is converted to structured fields in real time.',
  },
  {
    title: 'Review & sign',
    description: 'Confirm the parsed Rx with one tap. Edit any field inline.',
  },
  {
    title: 'Synced everywhere',
    description: 'Patient record updated at every branch. Pharmacy notified.',
  },
]

const specialties = [
  'General Practice', 'Pediatrics', 'Cardiology', 'Orthopedics', 'Gynaecology',
  'Dermatology', 'Ophthalmology', 'Dentistry', 'ENT', 'Psychiatry',
  'Endocrinology', 'Diabetology', 'Pulmonology', 'Nephrology', 'Urology',
  'Gastroenterology', 'Rheumatology', 'Oncology', 'Neurology', 'Surgery',
  'Internal Medicine', 'Family Medicine', 'Geriatrics', 'Sports Medicine', '& 20+ more',
]

const faqItems = [
  {
    question: 'How does SmartSync resolve conflicts when two devices sync the same record?',
    answer:
      'Every edit is timestamped at the device level. SmartSync uses a last-write-wins strategy with a full audit trail visible in the patient record. If conflicting edits land within a 60-second window, the system flags them for one-tap reconciliation by the senior clinician.',
  },
  {
    question: 'Does it really work fully offline?',
    answer:
      'Yes. SmartSync ships with an offline-first architecture: handwriting capture, OCR, drug DB, patient history, and Rx generation all work without internet. When connectivity returns, queued records sync in the background with no user action needed.',
  },
  {
    question: 'Is SmartSync DPDPA-compliant?',
    answer:
      'Fully. Patient data is encrypted at rest on every device, encrypted in transit during sync, and stored in India-resident cloud regions. Role-based access, audit logs, and patient consent flows are built in by default.',
  },
  {
    question: 'Can I use SmartSync alongside VoiceRx?',
    answer:
      'Yes — they are designed to interoperate. Many clinics use VoiceRx in OPD and SmartSync at the desk. Records merge into a single patient timeline regardless of how they were captured.',
  },
  {
    question: 'What hardware do I need?',
    answer:
      'Any digital pen tablet (Wacom, Apple Pencil, Samsung S Pen) works. For paper-based workflows, any modern smartphone camera is sufficient — we recommend a low-cost capture stand for high-volume clinics.',
  },
]

export default async function SmartSyncPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-24 pt-20 bg-tp-slate-100 hero-spotlight text-center"
        aria-labelledby="smartsync-hero-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
            AI Handwriting Mode
          </span>
          <h1
            id="smartsync-hero-heading"
            className="font-display font-bold text-tp-slate-900 mt-[18px] mb-[18px] mx-auto"
            style={{
              fontSize: 'clamp(36px,4.6vw,64px)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              maxWidth: '820px',
            }}
          >
            Write naturally. Save digitally.
          </h1>
          <p
            className="text-tp-slate-600 mx-auto"
            style={{ fontSize: '20px', lineHeight: '32px', maxWidth: '680px' }}
          >
            SmartSync turns your handwritten notes and prescriptions into
            structured digital records. Use the digital pen the way you always
            have — we handle the rest.
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
            data-replace-with="SmartSync session showing handwritten Rx being digitised in real time"
          >
            <span className="ph-label">Product UI · SmartSync</span>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Problem Callout */}
      <section className="bg-white py-24" aria-labelledby="smartsync-problem-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div
            className="grid gap-16 items-center"
            style={{ gridTemplateColumns: '1fr 1fr' }}
          >
            <div>
              <span className="tp-eyebrow">The problem</span>
              <h2
                id="smartsync-problem-heading"
                className="font-display font-bold text-tp-slate-900 mt-3.5 mb-[18px]"
                style={{
                  fontSize: 'clamp(28px,3.6vw,48px)',
                  lineHeight: 1.17,
                  letterSpacing: '-0.02em',
                }}
              >
                You have written prescriptions for 20 years. We are not going
                to ask you to stop.
              </h2>
              <p className="text-tp-slate-600" style={{ fontSize: '18px', lineHeight: '28px' }}>
                Most EMRs ask doctors to retrain their hands and brains around a
                keyboard. SmartSync inverts the relationship: write on paper or
                a digital pen tablet exactly as you always have, and watch a
                structured digital record appear on the screen beside you. Zero
                learning curve — and your assistant gets a clean record at the
                same time.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card">
                <div
                  className="font-display font-bold text-tp-slate-900"
                  style={{ fontSize: '40px', lineHeight: 1.1, letterSpacing: '-0.03em' }}
                >
                  0 sec
                </div>
                <div className="text-tp-slate-600 text-sm mt-2">
                  learning curve — doctors start on day one
                </div>
              </div>
              <div className="card-blue">
                <div
                  className="font-display font-bold text-tp-blue-700"
                  style={{ fontSize: '40px', lineHeight: 1.1, letterSpacing: '-0.03em' }}
                >
                  100%
                </div>
                <div className="text-tp-blue-800 text-sm mt-2">
                  offline-capable — works at camps and rural OPD
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-tp-slate-100 py-24" aria-labelledby="smartsync-features-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              What SmartSync solves
            </span>
            <h2
              id="smartsync-features-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(24px,3vw,40px)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              For doctors who think with a pen.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featureCards.map(({ Icon, title, desc }) => (
              <div key={title} className="card flex flex-col">
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
                  {title}
                </h4>
                <p className="text-sm text-tp-slate-600 mt-1.5 leading-5">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-24" aria-labelledby="smartsync-how-it-works-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              How it works
            </span>
            <h2
              id="smartsync-how-it-works-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(24px,3vw,40px)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Write. We sync.
            </h2>
          </div>
          <HowItWorksSteps steps={howItWorksSteps} />
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
          Write the way you always have. Save the way the world expects.
        </p>
      </StatementBand>

      {/* Specialty Cloud + Testimonial */}
      <section
        className="bg-tp-slate-100 py-24"
        aria-labelledby="smartsync-specialties-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-8">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              Designed for every specialty
            </span>
            <h2
              id="smartsync-specialties-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(24px,3vw,40px)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              25+ specialties supported.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {specialties.map((s) => (
              <span key={s} className="chip chip-blue">
                {s}
              </span>
            ))}
          </div>

          <div className="max-w-[840px] mx-auto mt-12">
            <TestimonialCard
              quote="We use SmartSync at our hospital camps in rural Maharashtra. It works exactly as advertised — offline, on a pen, no learning curve. My senior doctors love it."
              name="Dr. Anil Kothari"
              role="Medical Director · Outreach Hospital, Pune"
              initials="AK"
              large
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24" aria-labelledby="smartsync-faq-heading">
        <div className="max-w-[780px] mx-auto px-6">
          <div className="text-center mb-8">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              Questions doctors ask
            </span>
            <h2
              id="smartsync-faq-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(24px,3vw,40px)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              FAQs
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTABand />
    </>
  )
}
