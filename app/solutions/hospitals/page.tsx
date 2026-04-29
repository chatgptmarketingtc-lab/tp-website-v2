import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import CTABand from '@/components/CTABand'
import StatementBand from '@/components/StatementBand'
import TestimonialCard from '@/components/TestimonialCard'
import {
  CalendarCheckIcon,
  GridIcon,
  PillIcon,
  ReceiptIcon,
  MicroscopeIcon,
} from '@/components/icons'

export const metadata: Metadata = {
  title: 'For Hospitals — Enterprise-grade. India-ready. | TatvaPractice',
  alternates: {
    canonical: 'https://tatvapractice.com/solutions/hospitals',
  },
}

const departments = [
  {
    Icon: CalendarCheckIcon,
    title: 'OPD',
    desc: 'Queue management, slot booking, consult workflow.',
  },
  {
    Icon: GridIcon,
    title: 'IPD',
    desc: 'Admission, ward management, discharge summaries.',
  },
  {
    Icon: PillIcon,
    title: 'Pharmacy',
    desc: 'Dispensing, drug inventory, prescriptions linkage.',
  },
  {
    Icon: ReceiptIcon,
    title: 'Billing',
    desc: 'Insurance claims, GST, multi-payer, audit trails.',
  },
  {
    Icon: MicroscopeIcon,
    title: 'Lab',
    desc: 'Order management, LIS integration, auto-alerts.',
  },
]

const COMPLIANCE_CHIPS = [
  'ISO 27001',
  'ABDM-Certified',
  'DPDPA-Compliant',
  'NHA-Approved',
  'HIPAA-Aligned',
  'India Data Residency',
]

export default function HospitalsPage() {
  return (
    <>
      {/* Section 1 — Hero Split */}
      <section
        className="bg-white py-24 pt-[72px]"
        aria-labelledby="hospitals-hero-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <div
            className="grid items-center gap-16"
            style={{ gridTemplateColumns: '1.1fr 0.9fr' }}
          >
            {/* Left copy */}
            <div>
              <span className="tp-eyebrow">For Hospitals &amp; Multi-Location</span>
              <h1
                id="hospitals-hero-heading"
                className="font-display font-bold text-tp-slate-900 mt-[18px] mb-5"
                style={{
                  fontSize: 'clamp(36px,4.6vw,64px)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                }}
              >
                Enterprise-grade. India-ready.
              </h1>
              <p
                className="text-tp-slate-600"
                style={{ fontSize: '20px', lineHeight: '32px', maxWidth: '560px' }}
              >
                Multi-department, multi-location, ABDM-compliant. Built for hospitals
                that run 500+ OPD a day and need every system to talk to every other
                system.
              </p>
              <div className="flex gap-3 flex-wrap mt-7">
                <Link href="/contact" className="btn btn-solid btn-l">
                  Book a Demo <span className="arr">→</span>
                </Link>
                <Link href="/contact" className="btn btn-outline btn-l">
                  Download Brochure
                </Link>
              </div>
              <p className="text-[13px] text-tp-slate-500 mt-[22px]">
                ABDM-certified · NHA-approved · ISO 27001
              </p>
            </div>

            {/* Right placeholder */}
            <div
              className="ph ph-aspect-4-3"
              data-replace-with="Hospital UI mock — IPD discharge summary or queue dashboard"
              aria-label="Hospital command-center dashboard placeholder"
            >
              <span className="ph-label">Product UI · Hospital command center</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — TrustBar */}
      <TrustBar />

      {/* Section 3 — By Department */}
      <section
        className="bg-tp-slate-100 py-24"
        aria-labelledby="hospitals-departments-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              By department
            </span>
            <h2
              id="hospitals-departments-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(28px,3.6vw,48px)',
                lineHeight: 1.17,
                letterSpacing: '-0.02em',
              }}
            >
              Every department. One platform.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {departments.map(({ Icon, title, desc }) => (
              <article key={title} className="card">
                <div
                  className="w-10 h-10 rounded-[10px] bg-tp-blue-50 text-tp-blue-600 grid place-items-center mb-3.5"
                  aria-hidden="true"
                >
                  <Icon size={22} />
                </div>
                <h4 className="font-display font-semibold text-tp-slate-900 text-[18px]">
                  {title}
                </h4>
                <p className="text-sm text-tp-slate-600 mt-1.5 leading-5">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — By Stakeholder */}
      <section
        className="bg-white py-24"
        aria-labelledby="hospitals-stakeholders-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              By stakeholder
            </span>
            <h2
              id="hospitals-stakeholders-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(28px,3.6vw,48px)',
                lineHeight: 1.17,
                letterSpacing: '-0.02em',
              }}
            >
              Something important for everyone in the building.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {/* CXO */}
            <div className="card-blue p-8 flex flex-col gap-3">
              <div>
                <span className="badge badge-amber">CXO</span>
                <h4
                  className="font-display font-bold text-tp-slate-900 mt-2.5 mb-1.5"
                  style={{ fontSize: '20px' }}
                >
                  For CXO &amp; Leadership
                </h4>
                <p className="text-sm text-tp-slate-700 leading-5">
                  ROI from day 1. DHIS earnings offset your EMR cost. Centralised
                  analytics across all locations.
                </p>
              </div>
              <ul className="checks mt-1">
                <li>22% productivity ↑ · 16% retention ↑</li>
                <li>Centralised reporting across locations</li>
                <li>Government incentive recovery via DHIS</li>
              </ul>
            </div>

            {/* IT */}
            <div className="card p-8 flex flex-col gap-3">
              <div>
                <span className="badge badge-blue">IT</span>
                <h4
                  className="font-display font-bold text-tp-slate-900 mt-2.5 mb-1.5"
                  style={{ fontSize: '20px' }}
                >
                  For IT &amp; Compliance
                </h4>
                <p className="text-sm text-tp-slate-600 leading-5">
                  ISO 27001, DPDPA, ABDM compliance out of the box. India data
                  residency. Role-based access.
                </p>
              </div>
              <ul className="checks mt-1">
                <li>Role-based access &amp; full audit logs</li>
                <li>SAML/SSO + Active Directory</li>
                <li>Open APIs for HIS &amp; lab systems</li>
              </ul>
            </div>

            {/* Clinical */}
            <div className="card-soft p-8 flex flex-col gap-3">
              <div>
                <span className="badge badge-violet">Clinical</span>
                <h4
                  className="font-display font-bold text-tp-slate-900 mt-2.5 mb-1.5"
                  style={{ fontSize: '20px' }}
                >
                  For Clinical Operations
                </h4>
                <p className="text-sm text-tp-slate-600 leading-5">
                  Standardised workflows, specialty templates, audit trails. Quality
                  reporting for NABH.
                </p>
              </div>
              <ul className="checks mt-1">
                <li>VoiceRx &amp; SmartSync for every doctor</li>
                <li>SOAP templates per specialty</li>
                <li>Drug-safety net across all Rx</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Stat Strip */}
      <section className="bg-tp-slate-100 py-16" aria-label="Key metrics">
        <div className="max-w-wrap mx-auto px-6">
          <div className="bg-tp-blue-50 rounded-[24px] px-12 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: '22%', label: 'productivity ↑' },
              { num: '45%', label: 'OPD utilisation ↑' },
              { num: '38%', label: 'documentation time ↓' },
              { num: '16%', label: 'staff retention ↑' },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span
                  className="font-display font-extrabold text-tp-blue-600"
                  style={{ fontSize: 'clamp(32px,3.6vw,48px)', lineHeight: 1 }}
                >
                  {num}
                </span>
                <span className="text-sm text-tp-slate-600 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — StatementBand */}
      <StatementBand>
        <p
          className="font-display font-bold text-white"
          style={{
            fontSize: 'clamp(22px,2.8vw,36px)',
            lineHeight: 1.25,
            letterSpacing: '-0.02em',
          }}
        >
          From OPD to IPD to discharge — in one connected system.
          India-ready. ABDM-certified. Enterprise-grade.
        </p>
      </StatementBand>

      {/* Section 7 — DHIS Callout */}
      <section className="bg-white py-24" aria-labelledby="hospitals-dhis-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div
            className="rounded-[24px] px-12 py-12 grid md:grid-cols-[1fr_auto] gap-8 items-center"
            style={{
              background: 'linear-gradient(135deg, #FFFBEB, #FFF6D6)',
              border: '1px solid #FDE68A',
            }}
          >
            <div>
              <span className="badge badge-amber">● DHIS · Government scheme</span>
              <h3
                id="hospitals-dhis-heading"
                className="font-display font-bold text-tp-slate-900 mt-3 mb-2.5"
                style={{ fontSize: 'clamp(22px,2.4vw,30px)', lineHeight: 1.2 }}
              >
                The government pays for digitisation. We help you collect.
              </h3>
              <p className="text-tp-slate-700 leading-7" style={{ fontSize: '18px', maxWidth: '640px' }}>
                Hospitals using NHA-approved EMRs qualify for DHIS incentives per
                ABDM-linked digital consultation. At scale, this adds up.
              </p>
            </div>
            <Link href="/resources/dhis-scheme" className="btn btn-solid btn-l whitespace-nowrap">
              Learn more <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8 — Testimonial large */}
      <section
        className="bg-tp-slate-100 py-24"
        aria-labelledby="hospitals-testimonial-heading"
      >
        <div className="max-w-[840px] mx-auto px-6">
          <TestimonialCard
            quote="The DDx Engine has been a game-changer for my residents. It helps them think through differentials more systematically. And IT loves the audit trail."
            name="Dr. Anand Kumar"
            role="HOD Medicine · City General Hospital, Delhi"
            initials="AK"
            large
          />
        </div>
      </section>

      {/* Section 9 — Security strip */}
      <section
        className="bg-white py-16"
        aria-labelledby="hospitals-security-heading"
      >
        <div className="max-w-wrap mx-auto px-6 text-center">
          <h3
            id="hospitals-security-heading"
            className="font-display font-bold text-tp-slate-900 mb-5"
            style={{ fontSize: 'clamp(22px,2.4vw,30px)' }}
          >
            Enterprise security. Full Indian regulatory compliance.
          </h3>
          <div className="flex flex-wrap gap-2 justify-center mb-7">
            {COMPLIANCE_CHIPS.map((chip) => (
              <span
                key={chip}
                className="text-xs font-display font-semibold text-tp-slate-700 bg-tp-slate-100 border border-tp-slate-200 rounded-tp-pill px-3.5 py-1.5"
              >
                {chip}
              </span>
            ))}
          </div>
          <Link href="/security" className="btn-link">
            View Security Details <span className="arr">→</span>
          </Link>
        </div>
      </section>

      {/* Section 10 — CTA Band */}
      <CTABand primaryLabel="Book a Demo" secondaryLabel="Download Brochure" />
    </>
  )
}
