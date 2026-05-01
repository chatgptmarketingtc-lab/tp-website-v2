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
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-16 items-center">
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

            {/* Right — Hospital Command Center mock */}
            <div className="relative">
              <div className="ph aspect-auto md:aspect-[4/3]">
                <div className="md:absolute md:inset-0 flex bg-white w-full">

                  {/* Sidebar — desktop only */}
                  <div className="hidden md:flex flex-col flex-shrink-0 w-[100px] bg-tp-blue-900 text-white p-3 px-2.5">
                    <div className="flex items-center gap-1.5 font-display font-bold text-[11px]">
                      <span className="w-[18px] h-[18px] rounded-[5px] bg-tp-blue-500 grid place-items-center text-[9px]">T</span>
                      TP
                    </div>
                    <div className="mt-3 flex flex-col gap-0.5 text-[9px] text-white/70">
                      <div className="bg-tp-blue-500 py-[5px] px-2 rounded-[5px] text-white">Dashboard</div>
                      <div className="py-[5px] px-2">OPD</div>
                      <div className="py-[5px] px-2">IPD</div>
                      <div className="py-[5px] px-2">Pharmacy</div>
                      <div className="py-[5px] px-2">Lab</div>
                      <div className="py-[5px] px-2">Discharge</div>
                      <div className="py-[5px] px-2">Reports</div>
                    </div>
                  </div>

                  {/* Main panel */}
                  <div className="flex-1 min-w-0 p-3 flex flex-col gap-2">

                    {/* Mobile top bar */}
                    <div className="flex md:hidden items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-[18px] h-[18px] rounded-[5px] bg-tp-blue-900 grid place-items-center text-[9px] text-white font-bold">T</span>
                        <span className="text-[10px] font-semibold text-tp-blue-900 bg-tp-blue-50 px-2 py-0.5 rounded-full">Dashboard</span>
                      </div>
                      <span className="badge badge-blue" style={{ fontSize: '9px', height: '18px', padding: '0 6px' }}>● Live</span>
                    </div>

                    {/* Header strip */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <div className="font-display font-bold text-tp-slate-900 text-[11px] truncate">Greenfield Hospital · Mumbai</div>
                        <div className="text-[9px] text-tp-slate-500 mt-0.5"><span className="text-green-500">●</span> Live · 09:42 AM · 4 active wards</div>
                      </div>
                      <span className="hidden md:inline-flex badge badge-blue flex-shrink-0" style={{ fontSize: '9px', height: '18px', padding: '0 6px' }}>Command Center</span>
                    </div>

                    {/* 4 stat mini-cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5">
                      <div className="bg-tp-blue-50 border border-tp-blue-100 rounded-lg p-2">
                        <div className="text-[8px] font-semibold text-tp-slate-400 uppercase tracking-wide leading-none">OPD Active</div>
                        <div className="font-display font-extrabold text-tp-slate-900 text-[16px] leading-tight mt-0.5">47</div>
                        <div className="text-[8px] text-green-600 font-medium">↑ 8 vs avg</div>
                      </div>
                      <div className="bg-tp-slate-50 border border-tp-slate-100 rounded-lg p-2">
                        <div className="text-[8px] font-semibold text-tp-slate-400 uppercase tracking-wide leading-none">IPD Beds</div>
                        <div className="font-display font-extrabold text-tp-slate-900 text-[16px] leading-tight mt-0.5">82/120</div>
                        <div className="text-[8px] text-tp-slate-500">68% occupied</div>
                      </div>
                      <div className="bg-tp-slate-50 border border-tp-slate-100 rounded-lg p-2">
                        <div className="text-[8px] font-semibold text-tp-slate-400 uppercase tracking-wide leading-none">Discharges</div>
                        <div className="font-display font-extrabold text-tp-slate-900 text-[16px] leading-tight mt-0.5">12</div>
                        <div className="text-[8px] text-amber-500 font-medium">6 pending</div>
                      </div>
                      <div className="bg-tp-slate-50 border border-tp-slate-100 rounded-lg p-2">
                        <div className="text-[8px] font-semibold text-tp-slate-400 uppercase tracking-wide leading-none">Lab Pending</div>
                        <div className="font-display font-extrabold text-tp-slate-900 text-[16px] leading-tight mt-0.5">23</div>
                        <div className="text-[8px] text-tp-slate-500">avg TAT 2.4h</div>
                      </div>
                    </div>

                    {/* Bottom zone: Discharges list + Alerts */}
                    <div className="flex flex-col sm:flex-row gap-2 flex-1">

                      {/* Discharges list */}
                      <div className="sm:flex-[3] border border-tp-slate-200 rounded-xl p-2.5 flex flex-col gap-1.5">
                        <div className="text-[8px] font-display font-bold text-tp-slate-400 uppercase tracking-widest">Today&apos;s Discharges</div>
                        <div className="flex items-center justify-between gap-1">
                          <div className="min-w-0">
                            <span className="font-display font-semibold text-tp-slate-900 text-[10px]">Ms. Anita S.</span>
                            <span className="text-[9px] text-tp-slate-400 ml-1">W-3 / Bed 14</span>
                          </div>
                          <span className="badge badge-success flex-shrink-0" style={{ height: '16px', padding: '0 5px', fontSize: '8px' }}>● ready</span>
                        </div>
                        <div className="flex items-center justify-between gap-1">
                          <div className="min-w-0">
                            <span className="font-display font-semibold text-tp-slate-900 text-[10px]">Mr. Rajesh K.</span>
                            <span className="text-[9px] text-tp-slate-400 ml-1">W-2 / Bed 08</span>
                          </div>
                          <span className="badge badge-blue flex-shrink-0" style={{ height: '16px', padding: '0 5px', fontSize: '8px' }}>⚙ drafting</span>
                        </div>
                        <div className="flex items-center justify-between gap-1">
                          <div className="min-w-0">
                            <span className="font-display font-semibold text-tp-slate-900 text-[10px]">Mrs. Kavya M.</span>
                            <span className="text-[9px] text-tp-slate-400 ml-1">ICU-1 / Bed 03</span>
                          </div>
                          <span className="badge badge-amber flex-shrink-0" style={{ height: '16px', padding: '0 5px', fontSize: '8px' }}>● review</span>
                        </div>
                        <div className="text-[8px] text-tp-slate-400 mt-auto italic">AI-drafted · sign-off in 1 tap</div>
                      </div>

                      {/* Alerts */}
                      <div className="sm:flex-[2] flex flex-col gap-1.5">
                        <div className="text-[8px] font-display font-bold text-tp-slate-400 uppercase tracking-widest">Alerts</div>
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
                          <div className="font-display font-semibold text-amber-800 text-[10px]">Lab critical · Mrs. Iyer</div>
                          <div className="text-[9px] text-amber-700">K+ 6.8 mEq/L</div>
                        </div>
                        <div className="bg-violet-50 border border-violet-200 rounded-lg p-2">
                          <div className="font-display font-semibold text-violet-800 text-[10px]">Drug interaction · Bed 14</div>
                          <div className="text-[9px] text-violet-700">review required</div>
                        </div>
                        <div className="bg-tp-blue-50 border border-tp-blue-100 rounded-lg p-2">
                          <div className="font-display font-semibold text-tp-blue-800 text-[10px]">OT slot opened · 14:00</div>
                          <div className="text-[9px] text-tp-blue-700">Theatre 2 · available</div>
                        </div>
                      </div>
                    </div>

                    {/* Inline overlay — mobile only */}
                    <div className="flex md:hidden items-center gap-2 bg-white border border-tp-slate-200 rounded-xl p-2 px-2.5 shadow-sm">
                      <span className="w-5 h-5 rounded-full bg-tp-blue-50 text-tp-blue-600 grid place-items-center text-[9px] flex-shrink-0">●</span>
                      <div className="font-display font-semibold text-[10px] text-tp-slate-900">One platform · OPD to discharge · all departments synced</div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Floating overlay — desktop only */}
              <div className="hidden md:flex absolute left-[-16px] bottom-5 bg-white border border-tp-slate-200 rounded-[14px] p-2.5 px-3 shadow-tp-md gap-2 items-start">
                <span className="w-6 h-6 rounded-full bg-tp-blue-50 text-tp-blue-600 grid place-items-center text-[10px] flex-shrink-0 mt-0.5">●</span>
                <div>
                  <div className="font-display font-semibold text-[12px] text-tp-slate-900">One platform · OPD to discharge</div>
                  <div className="text-[11px] text-tp-slate-500">All departments synced · live data</div>
                </div>
              </div>
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
