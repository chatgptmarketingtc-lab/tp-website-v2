import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = {
  title: "About — We're building the EMR India deserves",
  description:
    'We are building the EMR India deserves. TatvaPractice is part of TatvaCare — a healthcare technology company solving India care delivery gaps end-to-end.',
  alternates: { canonical: 'https://tatvapractice.com/company/about' },
  openGraph: {
    title: "About TatvaPractice — We're building the EMR India deserves",
    description: 'TatvaPractice is part of TatvaCare — a healthcare technology company solving India care delivery gaps end-to-end.',
    type: 'website',
    url: 'https://tatvapractice.com/company/about',
  },
  twitter: {
    title: "About TatvaPractice",
    description: "We're building the EMR India deserves. Part of TatvaCare.",
  },
}

export default async function AboutPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'TatvaCare / TatvaPractice',
            url: 'https://tatvapractice.com',
            description: 'Healthcare technology company building the EMR India deserves.',
            sameAs: ['https://www.linkedin.com/company/tatvacare/'],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-white py-24 pt-20 text-center" aria-labelledby="about-hero-heading">
        <div className="max-w-wrap mx-auto px-6">
          <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>About</span>
          <h1
            id="about-hero-heading"
            className="font-display font-bold text-tp-slate-900 mt-[18px] mb-[18px] mx-auto"
            style={{ fontSize: 'clamp(36px,4.6vw,64px)', lineHeight: 1.08, letterSpacing: '-0.03em', maxWidth: '820px' }}
          >
            We are building the EMR India deserves.
          </h1>
          <p
            className="text-tp-slate-600 mx-auto"
            style={{ fontSize: '20px', lineHeight: '32px', maxWidth: '680px' }}
          >
            TatvaPractice is part of TatvaCare, a healthcare technology company solving India care delivery gaps end-to-end.
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Our Story */}
      <section className="bg-white py-24" aria-labelledby="story-heading">
        <div className="max-w-wrap mx-auto px-6" style={{ maxWidth: '780px' }}>
          <span className="tp-eyebrow">Our story</span>
          <h2
            id="story-heading"
            className="font-display font-bold text-tp-slate-900 mt-3.5"
            style={{ fontSize: 'clamp(28px,3.6vw,48px)', lineHeight: 1.17, letterSpacing: '-0.02em' }}
          >
            Indian doctors do not have time for tools that do not respect their time.
          </h2>
          <p className="text-tp-slate-600 mt-5" style={{ fontSize: '18px', lineHeight: '28px' }}>
            TatvaPractice started inside the OPD floor. Our founders spent months sitting next to consultants in Ahmedabad, Mumbai, and Bengaluru — watching what actually happens between a patient walking in and a Rx being printed. What we found was the gap between how international EMRs are built and how Indian medicine is practised.
          </p>
          <p className="text-tp-slate-600 mt-3.5" style={{ fontSize: '18px', lineHeight: '28px' }}>
            We built TatvaPractice to close that gap. AI inputs that match how doctors think — by speaking, by writing, by photographing. ABDM and DHIS support so digitisation actually pays the doctor for the work. Indian languages, Indian abbreviations, Indian compliance, Indian pricing. The EMR India deserves — built by people who watched the OPD with their own eyes.
          </p>
        </div>
      </section>

      {/* About TatvaCare */}
      <section className="bg-tp-slate-100 py-24" aria-labelledby="tatvacare-heading">
        <div className="max-w-wrap mx-auto px-6" style={{ maxWidth: '780px' }}>
          <span className="tp-eyebrow">About TatvaCare</span>
          <h2
            id="tatvacare-heading"
            className="font-display font-bold text-tp-slate-900 mt-3.5"
            style={{ fontSize: 'clamp(28px,3.6vw,48px)', lineHeight: 1.17, letterSpacing: '-0.02em' }}
          >
            TatvaPractice is a TatvaCare product.
          </h2>
          <p className="text-tp-slate-600 mt-5" style={{ fontSize: '18px', lineHeight: '28px' }}>
            TatvaCare is a healthcare technology company building end-to-end solutions for Indian healthcare delivery. From clinical software to chronic disease management and research infrastructure, TatvaCare operates across the full care journey — helping doctors, patients, and the healthcare ecosystem work better together.
          </p>
          <p className="text-tp-slate-600 mt-3.5" style={{ fontSize: '18px', lineHeight: '28px' }}>
            TatvaPractice is TatvaCare&apos;s clinical operations product, purpose-built for Indian OPD workflows. The broader platform serves tens of thousands of healthcare professionals across India.
          </p>
          <a
            href="https://www.tatvacare.in/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link mt-5 inline-flex"
          >
            Learn more about TatvaCare <span className="arr">→</span>
          </a>
        </div>
      </section>

      {/* Products & Partnerships */}
      <section className="bg-white py-24" aria-labelledby="ecosystem-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-12">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>Products &amp; partnerships</span>
            <h2
              id="ecosystem-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{ fontSize: 'clamp(28px,3.6vw,48px)', lineHeight: 1.17, letterSpacing: '-0.02em' }}
            >
              The TatvaCare ecosystem.
            </h2>
          </div>

          {/* Products */}
          <div className="mb-8">
            <p className="text-[11px] font-display font-semibold tracking-[0.08em] uppercase text-tp-slate-400 mb-4">Products</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* TatvaPractice — you are here */}
              <div className="card border-2 border-tp-blue-200" style={{ background: 'var(--tp-blue-50, #EFF6FF)' }}>
                <div className="flex items-center gap-2 flex-wrap mb-1.5">
                  <div className="font-display font-extrabold text-[18px] text-tp-blue-700">TatvaPractice</div>
                  <span className="badge badge-blue text-[11px]">You&apos;re here</span>
                </div>
                <p className="text-sm text-tp-slate-600 leading-5">AI-first EMR for Indian doctors and hospitals. Clinical workflows, AI prescriptions, ABDM integration, and practice analytics.</p>
              </div>

              {/* GoodFlip */}
              <div className="card flex flex-col">
                <div className="font-display font-extrabold text-[18px] text-tp-blue-700 mb-1.5">GoodFlip</div>
                <p className="text-sm text-tp-slate-600 leading-5 flex-1">Digital therapeutics for chronic disease management. Personalised programs for diabetes, metabolic health, and PCOS.</p>
                <a
                  href="https://goodflip.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link text-[13px] mt-3 inline-flex"
                >
                  Visit GoodFlip <span className="arr">→</span>
                </a>
              </div>

              {/* Evalus */}
              <div className="card flex flex-col">
                <div className="font-display font-extrabold text-[18px] text-tp-blue-700 mb-1.5">Evalus</div>
                <p className="text-sm text-tp-slate-600 leading-5 flex-1">Digital research platform for clinical trials and real-world evidence. Streamlines compliant study execution for the Indian healthcare system.</p>
                <a
                  href="https://www.tatvacare.in/evalus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link text-[13px] mt-3 inline-flex"
                >
                  Visit Evalus <span className="arr">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Strategic Partnerships */}
          <div className="bg-tp-slate-50 rounded-tp-hero p-8">
            <p className="text-[11px] font-display font-semibold tracking-[0.08em] uppercase text-tp-slate-400 mb-4">Strategic partnerships</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* PillUp */}
              <div className="bg-white border border-tp-slate-200 rounded-[16px] p-5">
                <div className="flex items-center gap-2 flex-wrap mb-1.5">
                  <div className="font-display font-extrabold text-[18px] text-tp-slate-700">PillUp</div>
                  <span className="badge badge-blue text-[11px]">Partnership</span>
                </div>
                <p className="text-sm text-tp-slate-600 leading-5 mt-1">Modern pharmacy delivering personalised pre-sorted medicines. Partners with TatvaCare for medication adherence and chronic care management.</p>
                <a
                  href="https://pillup.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link text-[13px] mt-3 inline-flex"
                >
                  Visit PillUp <span className="arr">→</span>
                </a>
              </div>

              {/* Visit Health */}
              <div className="bg-white border border-tp-slate-200 rounded-[16px] p-5">
                <div className="flex items-center gap-2 flex-wrap mb-1.5">
                  <div className="font-display font-extrabold text-[18px] text-tp-slate-700">Visit Health</div>
                  <span className="badge badge-blue text-[11px]">Partnership</span>
                </div>
                <p className="text-sm text-tp-slate-600 leading-5 mt-1">Corporate healthcare benefits platform serving 400+ companies and 4,500+ SMEs. Partners with TatvaCare to expand cashless OPD and wellness services.</p>
                <a
                  href="https://getvisitapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link text-[13px] mt-3 inline-flex"
                >
                  Visit Visit Health <span className="arr">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="bg-white py-24" aria-labelledby="careers-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="card-blue p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h3
                id="careers-heading"
                className="font-display font-bold text-tp-blue-900"
                style={{ fontSize: 'clamp(24px,3vw,40px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
              >
                We are hiring across product, engineering, and clinical.
              </h3>
              <p className="text-tp-blue-800 mt-2" style={{ fontSize: '18px', lineHeight: '28px' }}>
                Help us build the EMR India deserves.
              </p>
              <p className="text-tp-blue-800 mt-2" style={{ fontSize: '18px', lineHeight: '28px' }}>
                Send us your profile at{' '}
                <a
                  href="mailto:recruitment@tatvacare.in"
                  className="text-tp-blue-600 hover:text-tp-blue-700 underline underline-offset-2"
                >
                  recruitment@tatvacare.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
