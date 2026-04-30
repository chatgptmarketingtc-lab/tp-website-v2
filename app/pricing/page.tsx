import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import CTABand from '@/components/CTABand'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Pricing — Simple pricing. Indian-priced. | TatvaPractice',
  alternates: {
    canonical: 'https://tatvapractice.com/pricing',
  },
}

const faqItems = [
  {
    question: 'Is there really a free trial?',
    answer:
      'Yes. 7 days, full access to all AI modes, no credit card required. You can cancel any time during the trial with one click.',
  },
  {
    question: 'What does "Indian-priced" mean?',
    answer:
      'We price for the Indian market, in INR, with GST broken out. No US-dollar conversion games, no PPP-adjusted nonsense. The price you see is the price you pay.',
  },
  {
    question: 'Are AI features really included in every plan?',
    answer:
      'Yes. VoiceRx, SmartSync, SnapRx, Amaya, and Mira are part of every plan from day one. The differences between plans are about scale (multi-doctor, multi-location) and integrations (lab, IPD, pharmacy).',
  },
  {
    question: 'How do DHIS earnings actually work?',
    answer:
      'The Government of India pays a per-Rx incentive to doctors using NHA-approved EMRs to generate ABDM-linked digital prescriptions. TatvaPractice is NHA-approved and ABDM-certified. We surface your accrued DHIS earnings in your billing dashboard and reconcile against your subscription.',
  },
  {
    question: 'Can I switch plans later?',
    answer:
      'Yes — upgrade or downgrade any time, pro-rated automatically. Your data, settings, and patient history move with you.',
  },
]

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Section 1 — Hero */}
      <section
        className="bg-tp-slate-100 py-24 pt-20 hero-spotlight"
        aria-labelledby="pricing-hero-heading"
      >
        <div className="max-w-wrap mx-auto px-6 text-center">
          <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
            Pricing
          </span>
          <h1
            id="pricing-hero-heading"
            className="font-display font-bold text-tp-slate-900 mx-auto mt-[18px] mb-[18px]"
            style={{
              fontSize: 'clamp(36px,4.6vw,64px)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              maxWidth: '820px',
            }}
          >
            Simple pricing. Indian-priced.
          </h1>
          <p
            className="text-tp-slate-600 mx-auto"
            style={{ fontSize: '20px', lineHeight: '32px', maxWidth: '640px' }}
          >
            Pay monthly or annually. Start with a 7-day free trial. No credit card required.
          </p>
          {/* Monthly/Annual toggle — static display */}
          <div className="inline-flex items-center gap-3 bg-white border border-tp-slate-200 rounded-tp-pill px-1.5 py-1.5 mt-7 text-[13px] font-display font-semibold">
            <span className="py-2 px-4 bg-tp-blue-500 text-white rounded-tp-pill">Monthly</span>
            <span className="py-2 px-4 text-tp-slate-600">
              Annual <span className="text-tp-success font-bold">· save 2 months</span>
            </span>
          </div>
        </div>
      </section>

      {/* Section 2 — TrustBar */}
      <TrustBar />

      {/* Section 3 — Three pricing tiers */}
      <section className="bg-white py-24" aria-labelledby="pricing-tiers-heading">
        <div className="max-w-wrap mx-auto px-6">
          <h2 className="sr-only" id="pricing-tiers-heading">
            Pricing plans
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {/* Solo */}
            <div className="card p-9 flex flex-col gap-3.5">
              <div>
                <span className="badge badge-blue">Most popular for specialists</span>
                <h3
                  className="font-display font-bold text-tp-slate-900 mt-2.5"
                  style={{ fontSize: 'clamp(22px,2.4vw,30px)' }}
                >
                  Solo
                </h3>
                <p className="text-sm text-tp-slate-600 mt-1">For solo specialists.</p>
              </div>
              <div>
                <span
                  className="font-display font-extrabold text-tp-slate-900"
                  style={{ fontSize: '42px', lineHeight: 1 }}
                >
                  ₹X,XXX
                </span>
                <div className="text-[13px] text-tp-slate-500 mt-1">
                  per month, billed monthly
                </div>
              </div>
              <ul className="checks" style={{ margin: 0 }}>
                <li>All AI Rx modes (VoiceRx, SmartSync, SnapRx)</li>
                <li>Appointment booking &amp; reminders</li>
                <li>Basic billing &amp; GST invoices</li>
                <li>Patient records, history, prescriptions</li>
                <li>WhatsApp messaging</li>
                <li>Email + chat support</li>
              </ul>
              <Link href="https://health.tatvacare.in/login" className="btn btn-outline btn-l mt-auto">
                Start Free Trial
              </Link>
            </div>

            {/* Clinic — featured */}
            <div
              className="card p-9 flex flex-col gap-3.5 relative"
              style={{
                border: '2px solid #4B4AD5',
                boxShadow: 'var(--shadow-tp-lg)',
              }}
            >
              <span
                className="absolute text-white font-display font-bold tracking-[0.04em] uppercase"
                style={{
                  top: '-14px',
                  left: '32px',
                  background: '#4B4AD5',
                  padding: '6px 14px',
                  borderRadius: '42px',
                  fontSize: '11px',
                }}
              >
                Best value
              </span>
              <div>
                <h3
                  className="font-display font-bold text-tp-slate-900 mt-1.5"
                  style={{ fontSize: 'clamp(22px,2.4vw,30px)' }}
                >
                  Clinic
                </h3>
                <p className="text-sm text-tp-slate-600 mt-1">For multi-doctor clinics.</p>
              </div>
              <div>
                <span
                  className="font-display font-extrabold text-tp-slate-900"
                  style={{ fontSize: '42px', lineHeight: 1 }}
                >
                  ₹XX,XXX
                </span>
                <div className="text-[13px] text-tp-slate-500 mt-1">
                  per month, billed monthly
                </div>
              </div>
              <ul className="checks" style={{ margin: 0 }}>
                <li>Everything in Solo, plus</li>
                <li>Multi-doctor &amp; multi-staff roles</li>
                <li>OPD queue management</li>
                <li>Advanced billing, GST, reconciliation</li>
                <li>Lab integration</li>
                <li>Custom clinic website + Google My Business</li>
                <li>Priority phone support</li>
              </ul>
              <Link href="https://health.tatvacare.in/login" className="btn btn-solid btn-l mt-auto">
                Start Free Trial <span className="arr">→</span>
              </Link>
            </div>

            {/* Hospital */}
            <div className="card-soft p-9 flex flex-col gap-3.5">
              <div>
                <span
                  className="badge"
                  style={{
                    background: '#fff',
                    border: '1px solid var(--tp-slate-200)',
                    color: 'var(--tp-slate-700)',
                  }}
                >
                  Enterprise
                </span>
                <h3
                  className="font-display font-bold text-tp-slate-900 mt-2.5"
                  style={{ fontSize: 'clamp(22px,2.4vw,30px)' }}
                >
                  Hospital
                </h3>
                <p className="text-sm text-tp-slate-600 mt-1">For hospitals &amp; chains.</p>
              </div>
              <div>
                <div
                  className="font-display font-semibold text-tp-slate-800"
                  style={{ fontSize: '18px', lineHeight: 1.2 }}
                >
                  Custom pricing
                </div>
                <div className="font-body text-sm text-tp-slate-500 mt-1.5">
                  tailored to scale &amp; SLA
                </div>
              </div>
              <ul className="checks" style={{ margin: 0 }}>
                <li>Everything in Clinic, plus</li>
                <li>IPD, pharmacy, lab modules</li>
                <li>Multi-location, role-based access</li>
                <li>Centralised reporting</li>
                <li>ABDM/HIS integrations</li>
                <li>Dedicated account manager + SLA</li>
                <li>On-site onboarding</li>
              </ul>
              <Link href="/contact" className="btn btn-solid btn-l mt-auto">
                Book a Demo <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Annual + DHIS callout */}
      <section className="bg-tp-slate-100 py-16" aria-label="Annual billing and DHIS">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-5">
            {/* Annual savings */}
            <div className="card-blue p-8">
              <h3
                className="font-display font-bold text-tp-slate-900 mb-2"
                style={{ fontSize: 'clamp(18px,2vw,24px)' }}
              >
                Save 2 months when you pay annually.
              </h3>
              <p className="text-sm text-tp-blue-800 leading-6">
                Switch to annual billing any time — pro-rated automatically.
              </p>
            </div>
            {/* DHIS */}
            <div
              className="rounded-[20px] p-8"
              style={{
                background: 'linear-gradient(135deg, #FFFBEB, #FFF6D6)',
                border: '1px solid #FDE68A',
              }}
            >
              <span className="badge badge-amber">● DHIS</span>
              <h3
                className="font-display font-bold text-tp-slate-900 mt-2.5 mb-2"
                style={{ fontSize: 'clamp(18px,2vw,24px)' }}
              >
                Earn back your subscription via DHIS.
              </h3>
              <p className="text-sm text-tp-slate-700 leading-6">
                The government pays Indian doctors per ABDM-linked digital Rx. Many
                TatvaPractice users see DHIS earnings cover 40–80% of their plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Comparison table */}
      <section className="bg-white py-24" aria-label="Feature comparison">
        <div className="max-w-wrap mx-auto px-6">
          <details className="card p-0">
            <summary className="p-7 flex justify-between items-center cursor-pointer list-none gap-6 flex-wrap">
              <span className="flex flex-col gap-1">
                <span className="font-display font-bold text-tp-slate-900 text-[20px]">
                  View full feature comparison
                </span>
                <span className="text-[13px] text-tp-slate-500">
                  28 features across Solo, Clinic, and Hospital plans
                </span>
              </span>
              <span className="btn btn-outline btn-m pointer-events-none">
                Expand <span className="arr">→</span>
              </span>
            </summary>
            <div className="px-7 pb-7 overflow-x-auto">
              <table
                className="w-full border-collapse text-sm"
                style={{ minWidth: '600px' }}
              >
                <thead>
                  <tr>
                    <th className="text-left py-3 border-b-2 border-tp-slate-200 text-tp-slate-700 font-semibold">
                      Feature
                    </th>
                    <th className="py-3 border-b-2 border-tp-slate-200 text-tp-slate-700 font-semibold text-center">
                      Solo
                    </th>
                    <th className="py-3 border-b-2 border-tp-slate-200 text-tp-blue-600 font-bold text-center">
                      Clinic
                    </th>
                    <th className="py-3 border-b-2 border-tp-slate-200 text-tp-slate-700 font-semibold text-center">
                      Hospital
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'VoiceRx', solo: true, clinic: true, hospital: true },
                    { feature: 'SmartSync', solo: true, clinic: true, hospital: true },
                    { feature: 'SnapRx', solo: true, clinic: true, hospital: true },
                    { feature: 'Amaya (doctor\'s AI agent)', solo: true, clinic: true, hospital: true },
                    { feature: 'DHIS earnings dashboard', solo: true, clinic: true, hospital: true },
                    { feature: 'Appointment booking & reminders', solo: true, clinic: true, hospital: true },
                    { feature: 'Basic billing & GST invoices', solo: true, clinic: true, hospital: true },
                    { feature: 'Patient records & history', solo: true, clinic: true, hospital: true },
                    { feature: 'WhatsApp messaging', solo: true, clinic: true, hospital: true },
                    { feature: 'Mira (patient\'s AI agent)', solo: false, clinic: true, hospital: true },
                    { feature: 'OPD queue management', solo: false, clinic: true, hospital: true },
                    { feature: 'Multi-doctor roles', solo: false, clinic: true, hospital: true },
                    { feature: 'Lab integration', solo: false, clinic: true, hospital: true },
                    { feature: 'Advanced billing & reconciliation', solo: false, clinic: true, hospital: true },
                    { feature: 'Custom clinic website', solo: false, clinic: true, hospital: true },
                    { feature: 'Priority phone support', solo: false, clinic: true, hospital: true },
                    { feature: 'IPD module', solo: false, clinic: false, hospital: true },
                    { feature: 'Pharmacy module', solo: false, clinic: false, hospital: true },
                    { feature: 'Multi-location', solo: false, clinic: false, hospital: true },
                    { feature: 'Custom HIS integrations', solo: false, clinic: false, hospital: true },
                    { feature: 'Centralised reporting', solo: false, clinic: false, hospital: true },
                    { feature: 'ABDM/HIS integrations', solo: false, clinic: false, hospital: true },
                    { feature: 'Dedicated SLA + Account Manager', solo: false, clinic: false, hospital: true },
                    { feature: 'On-site onboarding', solo: false, clinic: false, hospital: true },
                  ].map(({ feature, solo, clinic, hospital }) => (
                    <tr key={feature}>
                      <td className="py-3 border-b border-tp-slate-100">{feature}</td>
                      <td className="py-3 border-b border-tp-slate-100 text-center">
                        {solo ? (
                          <span className="text-tp-success">●</span>
                        ) : (
                          <span className="text-tp-slate-300">—</span>
                        )}
                      </td>
                      <td className="py-3 border-b border-tp-slate-100 text-center">
                        {clinic ? (
                          <span className="text-tp-success">●</span>
                        ) : (
                          <span className="text-tp-slate-300">—</span>
                        )}
                      </td>
                      <td className="py-3 border-b border-tp-slate-100 text-center">
                        {hospital ? (
                          <span className="text-tp-success">●</span>
                        ) : (
                          <span className="text-tp-slate-300">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        </div>
      </section>

      {/* Section 6 — FAQ */}
      <section
        className="bg-tp-slate-100 py-24"
        aria-labelledby="pricing-faq-heading"
      >
        <div className="max-w-[780px] mx-auto px-6">
          <div className="text-center mb-8">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              Pricing FAQs
            </span>
            <h2
              id="pricing-faq-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(28px,3.6vw,48px)',
                lineHeight: 1.17,
                letterSpacing: '-0.02em',
              }}
            >
              Common questions
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Section 7 — CTA Band */}
      <CTABand />
    </>
  )
}
