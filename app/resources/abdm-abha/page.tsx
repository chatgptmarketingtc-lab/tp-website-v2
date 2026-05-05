import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import CTABand from '@/components/CTABand'
import FAQAccordion from '@/components/FAQAccordion'
import {
import EyebrowPill from '@/components/EyebrowPill'
  ShieldCheckIcon,
  BadgeCheckIcon,
  UserCheckIcon,
  LockIcon,
  FileCheck2Icon,
  CheckCircleIcon,
} from '@/components/icons'

export const metadata: Metadata = {
  title: 'ABDM & ABHA — Native integration',
  description:
    "TatvaPractice was built on India's digital health rails from day one. ABDM-certified, ABHA-compliant, NHA-approved.",
  alternates: { canonical: 'https://tatvapractice.com/resources/abdm-abha' },
  openGraph: {
    title: 'ABDM & ABHA — Native integration | TatvaPractice',
    description: 'Native ABDM. Real ABHA. Built in, not bolted on. TatvaPractice is ABDM-certified, ABHA-compliant, NHA-approved.',
    type: 'website',
    url: 'https://tatvapractice.com/resources/abdm-abha',
  },
  twitter: {
    title: 'ABDM & ABHA | TatvaPractice',
    description: 'Native ABDM. Real ABHA. Built in from day one, not bolted on.',
  },
}

const definitions = [
  {
    title: 'ABDM',
    desc: "Ayushman Bharat Digital Mission — the national framework for digital health in India, including identifiers, registries, and consent.",
  },
  {
    title: 'ABHA',
    desc: "Ayushman Bharat Health Account — every patient's digital health ID, used to link records across providers with explicit consent.",
  },
  {
    title: 'HPR',
    desc: "Healthcare Professional Registry — the doctor's verified digital identity, signing every Rx with their registered Medical Council number.",
  },
]

const supported = [
  {
    title: 'One-tap ABHA creation',
    desc: 'New patient walks in, ABHA ID generated in seconds.',
  },
  {
    title: 'Consent-based sharing',
    desc: 'Health record sharing across providers with explicit patient consent.',
  },
  {
    title: 'HPR-verified Rx',
    desc: "Every prescription signed with the doctor's verified HPR identity.",
  },
  {
    title: 'ABDM-compliant exchange',
    desc: 'Patient data exchange follows the FHIR-based ABDM specification.',
  },
  {
    title: 'HIP & HIU flows',
    desc: 'Health Information Provider and Health Information User roles, both supported.',
  },
  {
    title: 'Linked record retrieval',
    desc: 'Pull prior records from any ABDM-connected facility, with consent.',
  },
]

const hospitalBenefits = [
  {
    title: 'Cross-facility history',
    desc: "Patient's prior records load automatically — no more chasing paper.",
  },
  {
    title: 'Tender eligibility',
    desc: 'Most public-sector tenders now require ABDM compliance. We have it.',
  },
  {
    title: 'DHIS earnings',
    desc: (
      <>
        Earn per ABHA-linked consult.{' '}
        <Link href="/resources/dhis-scheme" className="text-tp-blue-700 font-semibold hover:underline">
          See DHIS scheme →
        </Link>
      </>
    ),
  },
  {
    title: 'Less data entry',
    desc: 'History pre-loads from prior facilities — front desk types less.',
  },
]

const complianceBadges = [
  { Icon: ShieldCheckIcon, label: 'NHA-Approved' },
  { Icon: BadgeCheckIcon, label: 'ABDM-Certified · M1 · M2 · M3' },
  { Icon: UserCheckIcon, label: 'ABHA-Compliant' },
  { Icon: LockIcon, label: 'ISO 27001' },
  { Icon: FileCheck2Icon, label: 'DPDPA-Compliant' },
]

const faqs = [
  {
    question: 'How does ABDM integration work in TatvaPractice?',
    answer:
      'TatvaPractice talks to the ABDM gateway natively. Every patient onboarding includes ABHA creation or linkage, every Rx is signed with the doctor\'s HPR ID, and every encounter is published to ABDM as a FHIR resource. No add-ons, no separate workflows.',
  },
  {
    question: 'Where does patient data live?',
    answer:
      'All patient data is stored in India-resident cloud regions, encrypted at rest and in transit. We do not transfer personally identifiable health data outside India. ABDM-shared records are exchanged via the gateway only with explicit patient consent.',
  },
  {
    question: 'How does consent work?',
    answer:
      'Patients receive a consent request via the ABDM Consent Manager (typically an app like ABHA). They approve scope and duration. Records flow only after consent, and consent can be revoked at any time. The full consent lifecycle is audit-logged inside TatvaPractice.',
  },
  {
    question: 'Can patients opt out of ABDM?',
    answer:
      'Yes. ABDM linkage is opt-in. Patients can refuse ABHA creation, request unlinking, or restrict consent scope. TatvaPractice still works as an internal EMR for opted-out patients — only ABDM exchange is disabled.',
  },
  {
    question: 'What about audit trails?',
    answer:
      'Every record creation, edit, consent grant, consent revocation, and ABDM exchange is logged with timestamp, actor, and IP. Audit logs are tamper-evident and retained per DPDPA and NHA requirements. Hospital admins can export logs for internal or regulatory audits.',
  },
]

export default async function ABDMABHAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'ABDM & ABHA — TatvaPractice',
            url: 'https://tatvapractice.com/resources/abdm-abha',
            description:
              'Native ABDM integration, ABHA compliance, and NHA approval built into TatvaPractice from day one.',
          }),
        }}
      />

      {/* Hero */}
      <section
        className="bg-tp-slate-100 hero-spotlight py-24 pt-20 text-center"
        aria-labelledby="abdm-hero-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <span className="badge badge-blue mb-4 inline-flex">
            ● ABDM · Ayushman Bharat Digital Mission
          </span>
          <h1
            id="abdm-hero-heading"
            className="font-display font-bold text-tp-slate-900 mt-[18px] mb-[18px] mx-auto"
            style={{
              fontSize: 'clamp(36px,4.6vw,64px)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              maxWidth: '880px',
            }}
          >
            Native ABDM. Real ABHA. Built in, not bolted on.
          </h1>
          <p
            className="text-tp-slate-600 mx-auto mb-8"
            style={{ fontSize: '20px', lineHeight: '32px', maxWidth: '740px' }}
          >
            TatvaPractice was built on India&apos;s digital health rails from day one.
            ABDM-certified, ABHA-compliant, NHA-approved — engineered for the way Indian doctors
            and hospitals actually use them.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="btn btn-solid btn-l">
              Book a Demo <span className="arr">→</span>
            </Link>
            <Link href="/security" className="btn btn-outline btn-l">
              Read security posture
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* What is ABDM / ABHA / HPR */}
      <section className="bg-white py-24" aria-labelledby="definitions-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <EyebrowPill>Definitions</EyebrowPill>
            <h2
              id="definitions-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(28px,3.6vw,48px)',
                lineHeight: 1.17,
                letterSpacing: '-0.02em',
              }}
            >
              What is ABDM, ABHA, and HPR?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {definitions.map((d) => (
              <div key={d.title} className="card">
                <h4
                  className="font-display font-semibold text-tp-slate-900 mb-2"
                  style={{ fontSize: '20px', lineHeight: '28px' }}
                >
                  {d.title}
                </h4>
                <p className="text-sm text-tp-slate-600 leading-5">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What TatvaPractice Supports */}
      <section className="bg-tp-slate-100 py-24" aria-labelledby="supported-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[720px] mx-auto mb-10">
            <EyebrowPill>Native support</EyebrowPill>
            <h2
              id="supported-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(28px,3.6vw,48px)',
                lineHeight: 1.17,
                letterSpacing: '-0.02em',
              }}
            >
              What TatvaPractice supports out of the box.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 max-w-[880px] mx-auto">
            {supported.map((item) => (
              <div key={item.title} className="card flex gap-3 items-start">
                <span className="w-7 h-7 rounded-lg bg-tp-blue-50 text-tp-blue-700 grid place-items-center flex-shrink-0 mt-0.5">
                  <CheckCircleIcon size={16} />
                </span>
                <div>
                  <h4
                    className="font-display font-semibold text-tp-slate-900"
                    style={{ fontSize: '16px', lineHeight: '22px' }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-sm text-tp-slate-600 mt-1 leading-5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hospitals */}
      <section className="bg-white py-24" aria-labelledby="hospitals-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <EyebrowPill>Why this matters</EyebrowPill>
              <h2
                id="hospitals-heading"
                className="font-display font-bold text-tp-slate-900 mt-3.5 mb-[18px]"
                style={{
                  fontSize: 'clamp(28px,3.6vw,48px)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                }}
              >
                For hospitals, ABDM is not a nice-to-have.
              </h2>
              <p className="text-tp-slate-600" style={{ fontSize: '18px', lineHeight: '28px' }}>
                Cross-facility patient history means no more &ldquo;do you have your previous
                reports?&rdquo; Government tenders increasingly require ABDM compliance. DHIS
                earnings flow per consult. And data entry shrinks — patient walks in, history
                auto-loads.
              </p>
            </div>
            <div className="flex flex-col gap-3.5">
              {hospitalBenefits.map((b) => (
                <div key={b.title} className="card flex gap-3.5 items-start" style={{ padding: '20px' }}>
                  <span className="w-8 h-8 rounded-lg bg-tp-blue-50 text-tp-blue-700 grid place-items-center flex-shrink-0">
                    <CheckCircleIcon size={18} />
                  </span>
                  <div>
                    <h4
                      className="font-display font-semibold text-tp-slate-900"
                      style={{ fontSize: '16px', lineHeight: '22px' }}
                    >
                      {b.title}
                    </h4>
                    <p className="text-sm text-tp-slate-600 mt-1 leading-5">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Strip */}
      <section className="bg-tp-slate-100 py-16" aria-labelledby="abdm-compliance-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-8">
            <EyebrowPill>Compliance certifications</EyebrowPill>
            <h2
              id="abdm-compliance-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(28px,3.6vw,48px)',
                lineHeight: 1.17,
                letterSpacing: '-0.02em',
              }}
            >
              Audited. Certified. Compliant.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3.5 justify-center max-w-[880px] mx-auto">
            {complianceBadges.map(({ Icon, label }) => (
              <span
                key={label}
                className="compliance"
                style={{ fontSize: '15px', padding: '12px 18px' }}
              >
                <Icon size={18} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24" aria-labelledby="abdm-faq-heading">
        <div className="max-w-wrap mx-auto px-6" style={{ maxWidth: '780px' }}>
          <div className="text-center mb-8">
            <EyebrowPill>Common questions</EyebrowPill>
            <h2
              id="abdm-faq-heading"
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

      <CTABand
        heading="Start with native ABDM today."
        primaryLabel="Book a Demo"
        secondaryLabel="See DHIS earnings"
      />
    </>
  )
}
