import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import CTABand from '@/components/CTABand'
import TestimonialCard from '@/components/TestimonialCard'
import FAQAccordion from '@/components/FAQAccordion'
import {
  HistoryIcon,
  NotebookPenIcon,
  SyringeIcon,
  MicroscopeIcon,
  CalendarCheckIcon,
  ReceiptIcon,
  VideoIcon,
  BarChart3Icon,
} from '@/components/icons'

export const metadata: Metadata = {
  title: 'Core EMR — Your complete patient record. | TatvaPractice',
  description:
    'Patient history, SOAP notes, vaccination, lab integration, telehealth — one connected view across every visit.',
  alternates: {
    canonical: 'https://tatvapractice.com/product/emr',
  },
}

const featureCards = [
  {
    Icon: HistoryIcon,
    title: 'Patient history',
    desc: 'Every visit, Rx, lab, allergy, family history — on one timeline.',
  },
  {
    Icon: NotebookPenIcon,
    title: 'SOAP notes',
    desc: 'Specialty-specific templates. ICD-10 tagged. Editable.',
  },
  {
    Icon: SyringeIcon,
    title: 'Vaccination',
    desc: 'Schedule reminders by age, condition, region — automated.',
  },
  {
    Icon: MicroscopeIcon,
    title: 'Lab integration',
    desc: 'SRL, Metropolis, Thyrocare and more. One-tap order, results in record.',
  },
  {
    Icon: CalendarCheckIcon,
    title: 'Appointments & queue',
    desc: 'OPD slots, walk-ins, queue ETAs, follow-ups — all live.',
  },
  {
    Icon: ReceiptIcon,
    title: 'Billing',
    desc: 'GST invoices, packages, claims, reconciliation, UPI/cards.',
  },
  {
    Icon: VideoIcon,
    title: 'Telehealth',
    desc: 'Built-in video, prescriptions, payment — fully ABDM-linked.',
  },
  {
    Icon: BarChart3Icon,
    title: 'Analytics',
    desc: 'Revenue, retention, OPD utilisation, doctor-level metrics.',
  },
]

const faqItems = [
  {
    question: 'Does the EMR work offline?',
    answer:
      'Core EMR includes an offline mode for consultations, Rx generation, and lab orders. Data syncs automatically when connectivity is restored. Offline mode is especially useful for field clinics and camp settings.',
  },
  {
    question: 'How does lab integration work?',
    answer:
      'TatvaPractice integrates with SRL, Metropolis, Thyrocare, and most major regional labs. One-tap order from the consultation screen — results flow back directly into the patient record, flagged for the doctor to review.',
  },
  {
    question: 'Is the EMR ABDM-compliant?',
    answer:
      'Yes. Every consultation record, Rx, and lab result is structured for ABDM compliance. ABHA-linked records can be shared with patient consent. Health Locker integration is built in.',
  },
  {
    question: 'Can multiple doctors share the same patient records?',
    answer:
      'Yes. Role-based access lets you define who sees what across your clinic or hospital. All changes are time-stamped in an audit trail. Patient records are shared securely across branches in the same TatvaPractice account.',
  },
  {
    question: 'How long does migration from our current EMR take?',
    answer:
      'Most clinics migrate in under 3 business days. Our onboarding team handles data import from common EMR formats, configures your specialty templates, and runs a live walkthrough before you go live. No downtime, no data loss.',
  },
]

export default async function CoreEMRPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-24 pt-20 bg-tp-slate-100 hero-spotlight text-center"
        aria-labelledby="emr-hero-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
            Core EMR
          </span>
          <h1
            id="emr-hero-heading"
            className="font-display font-bold text-tp-slate-900 mt-[18px] mb-[18px] mx-auto"
            style={{
              fontSize: 'clamp(36px,4.6vw,64px)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              maxWidth: '820px',
            }}
          >
            Your complete patient record. Always within reach.
          </h1>
          <p
            className="text-tp-slate-600 mx-auto"
            style={{ fontSize: '20px', lineHeight: '32px', maxWidth: '680px' }}
          >
            Patient history, SOAP notes, vaccination, lab integration,
            telehealth — one connected view across every visit.
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
            data-replace-with="Core EMR consult screen showing patient timeline with SOAP notes, Rx history, and lab results"
          >
            <span className="ph-label">Product UI · Core EMR</span>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Feature Grid */}
      <section className="bg-white py-24" aria-labelledby="emr-features-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              Everything in one record
            </span>
            <h2
              id="emr-features-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(24px,3vw,40px)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Built for the long arc of patient care.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featureCards.map(({ Icon, title, desc }) => (
              <article key={title} className="card flex flex-col">
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Spotlight */}
      <section className="bg-tp-slate-100 py-24" aria-labelledby="emr-analytics-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div
            className="grid gap-16 items-center"
            style={{ gridTemplateColumns: '.9fr 1.1fr' }}
          >
            <div>
              <span className="tp-eyebrow">Built-in analytics</span>
              <h2
                id="emr-analytics-heading"
                className="font-display font-bold text-tp-slate-900 mt-3.5 mb-[18px]"
                style={{
                  fontSize: 'clamp(28px,3.6vw,48px)',
                  lineHeight: 1.17,
                  letterSpacing: '-0.02em',
                }}
              >
                Know your practice the way you know your patients.
              </h2>
              <p className="text-tp-slate-600 mb-5" style={{ fontSize: '18px', lineHeight: '28px' }}>
                Consultations, diagnosis mix, Rx patterns, follow-up rates,
                week-on-week — without exporting a single CSV. Every
                TatvaPractice account ships with a full analytics workspace,
                refreshed live from your consults.
              </p>
              <ul className="checks">
                <li>Weekly consults &amp; unique-patient trends</li>
                <li>Diagnosis &amp; Rx analytics by doctor and specialty</li>
                <li>Follow-up adherence and recovery loops</li>
                <li>Month-over-month comparison, no setup</li>
              </ul>
            </div>
            <div className="relative rounded-tp-hero overflow-hidden aspect-video bg-tp-slate-200">
              <Image
                src="/assets/mocks/analytics.png"
                alt="TatvaCare analytics dashboard showing weekly consults, unique patients, and follow-up comparisons by month"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-24" aria-label="Customer testimonial">
        <div className="max-w-[840px] mx-auto px-6">
          <TestimonialCard
            quote="TatvaPractice has cut our prescription time by 70%. The VoiceRx feature alone has transformed how we manage OPD."
            name="Dr. Rajesh Patel"
            role="Cardiologist · HeartCare Clinic, Ahmedabad"
            initials="RP"
            large
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-tp-slate-100 py-24" aria-labelledby="emr-faq-heading">
        <div className="max-w-[780px] mx-auto px-6">
          <div className="text-center mb-8">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              Questions doctors ask
            </span>
            <h2
              id="emr-faq-heading"
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
