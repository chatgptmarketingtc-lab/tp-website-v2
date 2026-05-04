import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import CTABand from '@/components/CTABand'
import FAQAccordion from '@/components/FAQAccordion'
import { UserCheckIcon, BadgeCheckIcon, ShieldCheckIcon, FileCheck2Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'DHIS Scheme — Earn for going digital',
  description:
    'The Digital Health Incentives Scheme (DHIS) pays Indian doctors for every consultation digitised through an NHA-approved EMR. TatvaPractice qualifies.',
  alternates: { canonical: 'https://tatvapractice.com/resources/dhis-scheme' },
  openGraph: {
    title: 'DHIS Scheme — Get paid for going digital | TatvaPractice',
    description: 'Get paid for going digital. TatvaPractice is NHA-approved and ABDM-certified.',
    type: 'website',
    url: 'https://tatvapractice.com/resources/dhis-scheme',
  },
  twitter: {
    title: 'DHIS Scheme | TatvaPractice',
    description: 'Get paid for digitising consultations. NHA-approved, ABDM-certified.',
  },
}

const steps = [
  {
    n: '01',
    title: 'Digitise the consult',
    desc: 'Doctor digitises the consultation on TatvaPractice with an ABDM-linked Rx.',
  },
  {
    n: '02',
    title: 'Auto-sync to ABDM',
    desc: 'Record syncs to the ABDM gateway. No manual upload needed.',
  },
  {
    n: '03',
    title: 'NHA verifies',
    desc: 'National Health Authority verifies the record and credits the incentive.',
  },
  {
    n: '04',
    title: 'Payout to your bank',
    desc: 'Doctor receives payout monthly or quarterly, direct to registered bank.',
  },
]

const eligibility = [
  {
    Icon: UserCheckIcon,
    title: 'Valid HPR ID',
    desc: 'Doctor must have a valid Healthcare Professional Registry (HPR) ID.',
  },
  {
    Icon: BadgeCheckIcon,
    title: 'NHA-approved EMR',
    desc: 'Practice must use an NHA-approved EMR. TatvaPractice qualifies.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'ABHA-linked consults',
    desc: "Consultations linked to the patient's Ayushman Bharat Health Account.",
  },
  {
    Icon: FileCheck2Icon,
    title: 'Records in 7 days',
    desc: 'Records uploaded to ABDM within 7 days of the consult — handled automatically.',
  },
]

const faqs = [
  {
    question: 'What is DHIS exactly?',
    answer:
      'The Digital Health Incentives Scheme is a programme run by the National Health Authority that pays healthcare providers a per-consultation incentive for every record digitised and linked to an ABHA via an NHA-approved EMR. The aim is to accelerate adoption of India\'s national digital health stack.',
  },
  {
    question: 'How is TatvaPractice different from other EMRs in this regard?',
    answer:
      'TatvaPractice is NHA-approved and ABDM-certified out of the box. Every consultation generates a DHIS-eligible record automatically — no separate workflow, no extra clicks. Many EMRs require add-on modules or manual record uploads to qualify; TatvaPractice does it natively.',
  },
  {
    question: 'When did the scheme start?',
    answer:
      'DHIS was launched by the National Health Authority in 2023 as part of the Ayushman Bharat Digital Mission rollout, with eligibility windows refreshed periodically. Confirm the current window with our specialist before onboarding.',
  },
  {
    question: 'How long does verification take?',
    answer:
      'NHA typically verifies and credits incentives on a monthly cycle. Most TatvaPractice users see their first DHIS payout within 30–45 days of going live, assuming records are uploaded within the 7-day window.',
  },
  {
    question: 'Are there any tax implications?',
    answer:
      'DHIS payouts are treated as professional income for tax purposes. We recommend confirming the treatment with your CA — payouts are credited to your registered bank account with a clear audit trail in TatvaPractice for reconciliation.',
  },
]

export default async function DHISPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'DHIS Scheme — TatvaPractice',
            url: 'https://tatvapractice.com/resources/dhis-scheme',
            description:
              'Learn how to earn government DHIS incentives with TatvaPractice, an NHA-approved ABDM-certified EMR.',
          }),
        }}
      />

      {/* Hero */}
      <section
        className="bg-tp-slate-100 hero-spotlight py-24 pt-20 text-center"
        aria-labelledby="dhis-hero-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <span className="badge badge-amber mb-4 inline-flex">● DHIS · Government Incentive Scheme</span>
          <h1
            id="dhis-hero-heading"
            className="font-display font-bold text-tp-slate-900 mt-[18px] mb-[18px] mx-auto"
            style={{
              fontSize: 'clamp(36px,4.6vw,64px)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              maxWidth: '840px',
            }}
          >
            Get paid for going digital.
          </h1>
          <p
            className="text-tp-slate-600 mx-auto mb-8"
            style={{ fontSize: '20px', lineHeight: '32px', maxWidth: '720px' }}
          >
            The government pays NHA-approved doctors per ABDM-linked digital prescription.
            TatvaPractice is NHA-approved and ABDM-certified. Your subscription often pays for
            itself.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="btn btn-solid btn-l">
              Start earning with TatvaPractice <span className="arr">→</span>
            </Link>
            <Link href="/resources/abdm-abha" className="btn btn-outline btn-l">
              Learn more about ABDM
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* How DHIS Works */}
      <section className="bg-white py-24" aria-labelledby="how-dhis-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>How it works</span>
            <h2
              id="how-dhis-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(28px,3.6vw,48px)',
                lineHeight: 1.17,
                letterSpacing: '-0.02em',
              }}
            >
              Four steps. Government pays you.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step) => (
              <div key={step.n} className="card">
                <div
                  className="font-display font-black text-tp-blue-100"
                  style={{ fontSize: '40px', lineHeight: 1, marginBottom: '8px' }}
                >
                  {step.n}
                </div>
                <h4
                  className="font-display font-semibold text-tp-slate-900 mb-1.5"
                  style={{ fontSize: '18px', lineHeight: '26px' }}
                >
                  {step.title}
                </h4>
                <p className="text-sm text-tp-slate-600 leading-5">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="bg-amber-50 py-24" aria-labelledby="earnings-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="tp-eyebrow">How much can you earn?</span>
              <h2
                id="earnings-heading"
                className="font-display font-bold text-tp-slate-900 mt-3.5 mb-[18px]"
                style={{
                  fontSize: 'clamp(28px,3.6vw,48px)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                }}
              >
                DHIS often pays more than the EMR costs.
              </h2>
              <p className="text-tp-slate-600 mb-3" style={{ fontSize: '18px', lineHeight: '28px' }}>
                A specialist seeing 30 patients a day, 25 days a month, can earn approximately{' '}
                <b className="text-tp-blue-700">₹[ANNUAL_DHIS]</b> a year via DHIS — typically
                more than a TatvaPractice subscription. The subscription pays for itself, and
                digital records are a side-effect.
              </p>
              <p className="text-tp-slate-400 text-sm italic">
                Numbers above use placeholders. Final DHIS rate per ABHA-linked consultation is
                set by the NHA — confirm the latest figure with our specialist.
              </p>
            </div>

            <div className="card" style={{ padding: '32px' }}>
              <h4
                className="font-display font-semibold text-tp-slate-900 mb-4"
                style={{ fontSize: '18px', lineHeight: '26px' }}
              >
                Indicative calculation
              </h4>
              <div
                className="grid gap-y-2 gap-x-4 text-sm text-tp-slate-700 mb-4"
                style={{ gridTemplateColumns: '1fr auto' }}
              >
                <span>DHIS rate per ABHA-linked consult</span>
                <b className="font-display text-tp-slate-900">₹[DHIS_RATE]</b>
                <span>Consultations per day</span>
                <b className="font-display text-tp-slate-900">30</b>
                <span>Working days per month</span>
                <b className="font-display text-tp-slate-900">25</b>
                <span>Months per year</span>
                <b className="font-display text-tp-slate-900">12</b>
              </div>
              <div className="border-t border-dashed border-tp-slate-200 pt-3.5 flex justify-between items-baseline">
                <span className="text-sm text-tp-slate-600">Indicative annual DHIS earning</span>
                <b className="font-display text-tp-blue-700" style={{ fontSize: '24px' }}>
                  ₹[ANNUAL_DHIS]
                </b>
              </div>
              <Link href="/contact" className="btn btn-solid btn-l mt-5 w-full text-center">
                Check eligibility <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-white py-24" aria-labelledby="eligibility-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              Who&apos;s eligible
            </span>
            <h2
              id="eligibility-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(28px,3.6vw,48px)',
                lineHeight: 1.17,
                letterSpacing: '-0.02em',
              }}
            >
              Four boxes to tick.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {eligibility.map(({ Icon, title, desc }) => (
              <div key={title} className="card">
                <div className="w-10 h-10 rounded-[10px] bg-tp-blue-50 text-tp-blue-600 grid place-items-center mb-3.5">
                  <Icon size={22} />
                </div>
                <h4
                  className="font-display font-semibold text-tp-slate-900 mb-1.5"
                  style={{ fontSize: '18px', lineHeight: '26px' }}
                >
                  {title}
                </h4>
                <p className="text-sm text-tp-slate-600 leading-5">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-tp-slate-100 py-24" aria-labelledby="dhis-faq-heading">
        <div className="max-w-wrap mx-auto px-6" style={{ maxWidth: '780px' }}>
          <div className="text-center mb-8">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              Common questions
            </span>
            <h2
              id="dhis-faq-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(28px,3.6vw,48px)',
                lineHeight: 1.17,
                letterSpacing: '-0.02em',
              }}
            >
              FAQs
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABand heading="Start earning with DHIS today." primaryLabel="Start Free Trial" />
    </>
  )
}
