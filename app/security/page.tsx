import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import CTABand from '@/components/CTABand'
import { ShieldCheckIcon, ServerIcon, CheckCircleIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Security & Compliance — Your data is safe.',
  description:
    'TatvaPractice is built on enterprise-grade security and full Indian regulatory compliance — NHA-approved, ABDM-certified, ISO 27001, DPDPA-compliant.',
  alternates: { canonical: 'https://tatvapractice.com/security' },
  openGraph: {
    title: 'Security & Compliance — Your data is safe. | TatvaPractice',
    description: 'Enterprise-grade security and full Indian regulatory compliance. NHA-approved, ABDM-certified, ISO 27001, DPDPA-compliant.',
    type: 'website',
    url: 'https://tatvapractice.com/security',
  },
  twitter: {
    title: 'Security & Compliance | TatvaPractice',
    description: 'Enterprise-grade security. Full Indian regulatory compliance.',
  },
}

const certs = [
  {
    pill: 'NHA-Approved',
    bg: '#1D4ED8',
    title: 'National Health Authority',
    desc: 'Approved by the National Health Authority of India. Required to qualify for DHIS incentives.',
  },
  {
    pill: 'ABDM-Certified',
    bg: '#16A34A',
    title: 'ABDM ecosystem',
    desc: 'Full integration with Ayushman Bharat Digital Mission. M1, M2, M3 milestones achieved.',
  },
  {
    pill: 'ABHA-Compliant',
    bg: '#6D28D9',
    title: 'Ayushman Bharat Health Account',
    desc: 'ABHA ID creation, health record linking, consent-based sharing — all native.',
  },
  {
    pill: 'ISO 27001',
    bg: '#0F172A',
    title: 'Information security',
    desc: 'International information security management standard. Annual third-party audited.',
  },
  {
    pill: 'DPDPA-Compliant',
    bg: '#B45309',
    title: 'India data protection',
    desc: 'Digital Personal Data Protection Act 2023. Data minimisation, consent, breach notification.',
  },
  {
    pill: 'HIPAA-Aligned',
    bg: '#0EA5E9',
    title: 'International standards',
    desc: 'Aligned with US HIPAA standards for international partnerships and data handling.',
  },
]

const pillars = [
  {
    title: 'Encryption at rest & in transit.',
    desc: 'All data encrypted with AES-256 at rest and TLS 1.3 in transit. Zero plaintext storage of clinical data.',
    checks: [
      'AES-256 encryption at rest',
      'TLS 1.3 for all connections',
      'Zero plaintext PHI storage',
    ],
  },
  {
    title: 'Role-based access with full audit logs.',
    desc: 'Every login, every data access, every change — logged with timestamp, user, and IP. Exportable for compliance audits.',
    checks: [
      'Granular role-based access control',
      'Immutable, tamper-evident audit trail',
      'Exportable logs for compliance review',
    ],
  },
  {
    title: 'India data residency.',
    desc: 'Your patient data never leaves India. All infrastructure runs on Microsoft Azure India region (Central India + South India).',
    checks: [
      'Microsoft Azure India region only',
      'No cross-border data transfer',
      'DPDPA data localisation compliant',
    ],
  },
]

const monitoring = [
  {
    Icon: ServerIcon,
    title: 'Continuous logging',
    desc: 'Every access event logged in real time. Tamper-evident logs retained per NHA and DPDPA requirements.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Anomaly detection',
    desc: '24×7 monitoring for unusual access patterns and data exfiltration risk. Quarterly penetration tests.',
  },
  {
    Icon: CheckCircleIcon,
    title: 'Breach response',
    desc: 'Documented incident response within 1 hour. Customer notification within 24 hours per DPDPA mandate.',
  },
]

export default async function SecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Security & Compliance — TatvaPractice',
            url: 'https://tatvapractice.com/security',
            description:
              'TatvaPractice is built on enterprise-grade security and full Indian regulatory compliance.',
          }),
        }}
      />

      {/* Hero */}
      <section
        className="bg-tp-slate-100 hero-spotlight py-24 pt-20 text-center"
        aria-labelledby="security-hero-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
            Security &amp; Compliance
          </span>
          <h1
            id="security-hero-heading"
            className="font-display font-bold text-tp-slate-900 mt-[18px] mb-[18px] mx-auto"
            style={{
              fontSize: 'clamp(36px,4.6vw,64px)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              maxWidth: '820px',
            }}
          >
            Your data is safe. Patient trust is sacred.
          </h1>
          <p
            className="text-tp-slate-600 mx-auto mb-8"
            style={{ fontSize: '20px', lineHeight: '32px', maxWidth: '680px' }}
          >
            TatvaPractice is built on enterprise-grade security and full Indian regulatory
            compliance.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="btn btn-solid btn-l">
              Talk to our security team <span className="arr">→</span>
            </Link>
            <Link href="#documentation" className="btn btn-outline btn-l">
              Download security overview
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Compliance Certifications */}
      <section className="bg-white py-24" aria-labelledby="certs-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              Certifications
            </span>
            <h2
              id="certs-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(28px,3.6vw,48px)',
                lineHeight: 1.17,
                letterSpacing: '-0.02em',
              }}
            >
              Full Indian regulatory compliance out of the box.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certs.map((cert) => (
              <div key={cert.pill} className="card">
                <span
                  className="inline-flex items-center gap-2 py-2 px-4 rounded-full font-body font-semibold text-sm"
                  style={{ background: cert.bg, color: '#fff' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {cert.pill}
                </span>
                <h4
                  className="font-display font-semibold text-tp-slate-900 mt-3.5"
                  style={{ fontSize: '18px', lineHeight: '26px' }}
                >
                  {cert.title}
                </h4>
                <p className="text-sm text-tp-slate-600 mt-1.5 leading-5">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Secure Your Data */}
      <section className="bg-white py-24" aria-labelledby="security-pillars-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-12">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              How we secure your data
            </span>
            <h2
              id="security-pillars-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(28px,3.6vw,48px)',
                lineHeight: 1.17,
                letterSpacing: '-0.02em',
              }}
            >
              Three pillars. Zero shortcuts.
            </h2>
          </div>
          <div className="flex flex-col gap-16">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'md:[direction:rtl]' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                  <h3
                    className="font-display font-bold text-tp-slate-900"
                    style={{
                      fontSize: 'clamp(22px,2.6vw,32px)',
                      lineHeight: 1.2,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-tp-slate-600 mt-3"
                    style={{ fontSize: '18px', lineHeight: '28px' }}
                  >
                    {pillar.desc}
                  </p>
                  <ul className="checks mt-4">
                    {pillar.checks.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`ph ph-aspect-16-10 rounded-[16px] ${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit & Monitoring */}
      <section className="bg-tp-slate-100 py-24" aria-labelledby="audit-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              Audit &amp; monitoring
            </span>
            <h3
              id="audit-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(24px,3vw,40px)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Real-time monitoring. 24/7 anomaly detection.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {monitoring.map(({ Icon, title, desc }) => (
              <div key={title} className="card">
                <div className="w-10 h-10 rounded-[10px] bg-tp-blue-50 text-tp-blue-600 grid place-items-center mb-3.5">
                  <Icon size={22} />
                </div>
                <h4
                  className="font-display font-semibold text-tp-slate-900"
                  style={{ fontSize: '18px', lineHeight: '26px' }}
                >
                  {title}
                </h4>
                <p className="text-sm text-tp-slate-600 mt-1.5 leading-5">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section id="documentation" className="bg-white py-16" aria-labelledby="docs-heading">
        <div className="max-w-wrap mx-auto px-6 text-center">
          <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
            Documentation
          </span>
          <h3
            id="docs-heading"
            className="font-display font-bold text-tp-slate-900 mt-3.5 mb-3"
            style={{
              fontSize: 'clamp(24px,3vw,40px)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            Security documentation
          </h3>
          <p className="text-tp-slate-600 mx-auto mb-8" style={{ maxWidth: '520px', fontSize: '18px', lineHeight: '28px' }}>
            Architecture, threat model, compliance reports — available under NDA on request.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn btn-solid btn-m">
              Request documentation <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        heading="Talk to our security team."
        primaryLabel="Book a Security Call"
        secondaryLabel="Download Overview"
      />
    </>
  )
}
