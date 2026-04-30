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
            <Link href="https://health.tatvacare.in/login" className="btn btn-solid btn-l">
              Start Free Trial <span className="arr">→</span>
            </Link>
            <Link href="/contact" className="btn btn-outline btn-l">
              Book a Demo
            </Link>
          </div>

          {/* Core EMR hero card — patient timeline */}
          <div className="relative pb-6 mt-12 max-w-[980px] mx-auto">
            <div className="rounded-tp-hero border border-tp-slate-200 bg-white shadow-tp-lg overflow-hidden p-5">
              {/* Patient header */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="font-display font-bold text-tp-slate-900 text-sm">Mrs. Lakshmi Iyer · 62F · Internal Medicine</div>
                  <div className="text-[11px] text-tp-slate-500">First visit: Jun 2018 · 47 visits · 12 active conditions</div>
                </div>
                <span className="badge badge-violet">● Core EMR · synced</span>
              </div>
              {/* Timeline + quick view */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Timeline column */}
                <div className="flex-1 flex flex-col gap-0">
                  <div className="text-[10px] font-semibold text-tp-slate-500 uppercase tracking-wide mb-2">Patient Timeline</div>
                  {([
                    { date: 'Jun 2018', label: 'First visit · DM-2 diagnosed', dot: 'bg-tp-blue-400', text: 'text-tp-blue-700' },
                    { date: 'Mar 2020', label: 'HbA1c trending up · Rx revised', dot: 'bg-amber-400', text: 'text-amber-700' },
                    { date: 'Aug 2022', label: 'COVID booster · vaccination', dot: 'bg-emerald-400', text: 'text-emerald-700' },
                    { date: 'Jan 2024', label: 'Lab panel · CKD stage 2 flagged', dot: 'bg-red-400', text: 'text-red-700' },
                    { date: 'Apr 2026', label: 'Telehealth · Rx renewal', dot: 'bg-purple-400', text: 'text-purple-700' },
                  ] as const).map(({ date, label, dot, text }, i) => (
                    <div key={date} className="flex items-start gap-2.5">
                      {/* Dot + connecting line */}
                      <div className="flex flex-col items-center flex-shrink-0 w-3.5">
                        {i > 0 && <div className="w-px bg-tp-slate-200" style={{ height: '8px' }} />}
                        <div className={`w-3 h-3 rounded-full ${dot} flex-shrink-0`} />
                        {i < 4 && <div className="w-px bg-tp-slate-200 flex-1" style={{ minHeight: '12px' }} />}
                      </div>
                      {/* Entry chip */}
                      <div className="rounded-lg bg-tp-slate-50 border border-tp-slate-100 px-2.5 py-1.5 mb-1.5 flex-1">
                        <div className="text-[10px] text-tp-slate-400 font-mono leading-none mb-0.5">{date}</div>
                        <div className={`text-[11px] font-semibold leading-tight ${text}`}>{label}</div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Quick view panel */}
                <div className="sm:w-[210px] flex-shrink-0 flex flex-col gap-2">
                  {/* Tabs */}
                  <div className="flex flex-wrap gap-1">
                    {(['Patient history', 'SOAP notes', 'Labs', 'Billing'] as const).map((tab, i) => (
                      <button
                        key={tab}
                        className={`text-[10px] px-2 py-1 rounded-md border leading-none ${i === 0 ? 'bg-tp-blue-600 text-white border-tp-blue-600' : 'bg-white text-tp-slate-500 border-tp-slate-200'}`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  {/* Active tab content */}
                  <div className="rounded-[14px] border border-tp-slate-200 bg-white p-3 flex flex-col gap-2 flex-1">
                    <div className="text-[10px] font-semibold text-tp-slate-500 uppercase tracking-wide">Recent entries</div>
                    {([
                      { label: 'Metformin 500mg · BD', note: 'active', flag: false },
                      { label: 'Telmisartan 40mg · OD', note: 'active', flag: false },
                      { label: 'HbA1c: 7.8% · Jan 2024', note: 'lab', flag: false },
                      { label: 'eGFR: 52 · CKD stage 2', note: 'flag', flag: true },
                    ] as const).map(({ label, note, flag }) => (
                      <div key={label} className="flex justify-between items-start text-[11px] gap-1">
                        <span className="text-tp-slate-700 leading-tight">{label}</span>
                        <span className={`text-[10px] flex-shrink-0 ${flag ? 'text-amber-600 font-semibold' : 'text-tp-slate-400'}`}>{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Floating overlay */}
            <div className="absolute bottom-[-16px] left-6 z-10 bg-white border border-tp-slate-200 rounded-[14px] p-2.5 px-3.5 shadow-tp-md flex gap-2.5 items-center">
              <span className="w-7 h-7 rounded-full bg-tp-blue-50 text-tp-blue-600 grid place-items-center text-sm flex-shrink-0">≡</span>
              <div>
                <div className="font-display font-semibold text-[13px] text-tp-slate-900">8 years of care · one timeline</div>
                <div className="text-[11px] text-tp-slate-500">47 visits · 12 conditions</div>
              </div>
            </div>
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
