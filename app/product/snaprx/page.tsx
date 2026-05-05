import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import CTABand from '@/components/CTABand'
import StatementBand from '@/components/StatementBand'
import HowItWorksSteps from '@/components/HowItWorksSteps'
import TestimonialCard from '@/components/TestimonialCard'
import FAQAccordion from '@/components/FAQAccordion'
import {
  CameraIcon,
  ArrowsUpDownIcon,
  FileTextIcon,
  BadgeCheckIcon,
} from '@/components/icons'
import EyebrowPill from '@/components/EyebrowPill'

export const metadata: Metadata = {
  title: "SnapRx — Photograph any prescription. We'll digitise it.",
  description:
    'SnapRx is a healthcare-grade OCR engine purpose-built for the messy reality of handwritten Indian prescriptions.',
  alternates: { canonical: 'https://tatvapractice.com/product/snaprx' },
  openGraph: {
    title: "SnapRx — Photo to digital prescription | TatvaPractice",
    description: 'Healthcare-grade OCR for handwritten Indian prescriptions. Photograph any Rx and get a clean digital record.',
    type: 'website',
    url: 'https://tatvapractice.com/product/snaprx',
  },
  twitter: {
    title: 'SnapRx | TatvaPractice',
    description: 'Photograph any prescription. Get a clean digital record instantly.',
  },
}

const featureCards = [
  {
    Icon: CameraIcon,
    title: 'Healthcare-grade OCR',
    desc: 'One photo, clean structured record. Crooked angles, low light, faded ink — handled.',
  },
  {
    Icon: ArrowsUpDownIcon,
    title: 'Drug name resolution',
    desc: 'Maps brand to generic, generic to brand. 100,000+ Indian formulations cross-referenced.',
  },
  {
    Icon: FileTextIcon,
    title: 'Indian abbreviations',
    desc: 'BD, TDS, OD, SOS, HS, q4h, prn — recognised and expanded inline.',
  },
  {
    Icon: BadgeCheckIcon,
    title: 'ABDM-ready',
    desc: 'Output is ABDM-compliant Rx. ABHA-linked with patient consent.',
  },
]

const howItWorksSteps = [
  {
    title: 'Snap the Rx',
    description: 'Phone camera or upload. SnapRx auto-corrects skew and brightness.',
  },
  {
    title: 'AI extracts',
    description: 'Drug names, dosages, frequencies, durations, instructions.',
  },
  {
    title: 'Verify',
    description: 'One tap to accept the parsed Rx. Edit inline if needed.',
  },
  {
    title: 'Saved & shared',
    description: 'ABDM-linked record. WhatsApp share to patient.',
  },
]

const faqItems = [
  {
    question: 'How does SnapRx handle bad handwriting?',
    answer:
      'SnapRx is trained specifically on Indian doctor handwriting — known to be among the hardest to OCR. The model uses contextual cross-checking against a 100,000-drug formulary, so even where individual letters are ambiguous, the most likely drug + dosage combination surfaces with a confidence score.',
  },
  {
    question: 'What if the photo is dim or skewed?',
    answer:
      'SnapRx auto-corrects rotation, perspective, and lighting before OCR runs. Photos taken on a phone in a busy OPD environment work fine — you do not need a scanner or a tripod.',
  },
  {
    question: 'Does SnapRx handle multi-page prescriptions?',
    answer:
      'Yes. Capture each page sequentially in the same session and SnapRx merges them into a single Rx record with proper page references and an audit trail.',
  },
  {
    question: 'How are brand and generic names handled?',
    answer:
      'Every extracted drug is resolved against the formulary and tagged with both its brand and generic equivalents. Pharmacists and downstream systems can use whichever is appropriate for the context.',
  },
  {
    question: 'Is the patient data secure?',
    answer:
      'Yes. Photos are encrypted in transit, processed in India-resident infrastructure, and discarded after extraction. Only the structured Rx is retained, linked to the patient record under DPDPA compliance.',
  },
]

export default async function SnapRxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'SnapRx',
            applicationCategory: 'HealthApplication',
            operatingSystem: 'Web, iOS, Android',
            description: 'SnapRx is a healthcare-grade OCR engine purpose-built for handwritten Indian prescriptions.',
            url: 'https://tatvapractice.com/product/snaprx',
            offers: { '@type': 'Offer', priceCurrency: 'INR', price: '0' },
          }),
        }}
      />
      {/* Hero */}
      <section
        className="py-24 pt-20 bg-tp-slate-100 hero-spotlight text-center"
        aria-labelledby="snaprx-hero-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <EyebrowPill>AI OCR Mode</EyebrowPill>
          <h1
            id="snaprx-hero-heading"
            className="font-display font-bold text-tp-slate-900 mt-[18px] mb-[18px] mx-auto"
            style={{
              fontSize: 'clamp(36px,4.6vw,64px)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              maxWidth: '820px',
            }}
          >
            Photograph any prescription. We&apos;ll digitise it.
          </h1>
          <p
            className="text-tp-slate-600 mx-auto"
            style={{ fontSize: '20px', lineHeight: '32px', maxWidth: '680px' }}
          >
            SnapRx is a healthcare-grade OCR engine purpose-built for the messy
            reality of handwritten Indian prescriptions.
          </p>
          <div className="flex gap-3 justify-center flex-wrap mt-7">
            <Link href="https://health.tatvacare.in/login" className="btn btn-solid btn-l">
              Start Free Trial <span className="arr">→</span>
            </Link>
            <Link href="/contact" className="btn btn-outline btn-l">
              Book a Demo
            </Link>
          </div>

          {/* SnapRx hero card — phone capture → digitized output */}
          <div className="relative pb-6 mt-12 max-w-[980px] mx-auto">
            <div className="rounded-tp-hero border border-tp-slate-200 bg-white shadow-tp-lg overflow-hidden p-5">
              {/* Header row */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="font-display font-bold text-tp-slate-900 text-sm">Mr. Anil Deshmukh · 58M</div>
                  <div className="text-[11px] text-tp-slate-500">Prescription digitisation · SnapRx</div>
                </div>
                <span className="badge badge-violet">● SnapRx · OCR · ready</span>
              </div>
              {/* Two-panel */}
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Left — phone capture */}
                <div className="flex-1 rounded-[14px] p-4 flex flex-col items-center justify-center gap-3 bg-tp-slate-50 border border-tp-slate-200">
                  <div className="text-[10px] font-semibold text-tp-slate-500 uppercase tracking-wide">Phone capture · 11:28 AM</div>
                  {/* Camera frame */}
                  <div className="relative w-full max-w-[260px]" style={{ background: '#FDFCFA', border: '1px solid #D6D3CB', borderRadius: '8px', padding: '14px 12px' }}>
                    {/* Corner brackets */}
                    <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-tp-blue-400 rounded-tl" />
                    <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-tp-blue-400 rounded-tr" />
                    <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-tp-blue-400 rounded-bl" />
                    <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-tp-blue-400 rounded-br" />
                    {/* Handwritten Rx — slightly rotated */}
                    <div style={{ transform: 'rotate(-2deg)', fontFamily: 'cursive', fontSize: '11px', lineHeight: 1.8, color: '#374151' }}>
                      <div>Pt: Anil Deshmukh 58M</div>
                      <div>Dx: T2DM · HTN · Hyperlipidemia</div>
                      <div>R/ Metformin 500mg BD × 30d</div>
                      <div>&nbsp;&nbsp;&nbsp;Atorva 10mg HS × 30d</div>
                      <div>&nbsp;&nbsp;&nbsp;Telmisartan 40mg OD × 30d</div>
                    </div>
                  </div>
                </div>
                {/* Right — digitized output */}
                <div className="flex-1 rounded-[14px] border border-tp-slate-200 bg-white p-4 flex flex-col gap-2.5">
                  <div className="text-[10px] font-semibold text-tp-slate-500 uppercase tracking-wide">Digitized Rx</div>
                  <div className="flex flex-col gap-2">
                    {([
                      { drug: 'Metformin 500mg', abbr: 'BD', expanded: 'twice daily', conf: '95%' },
                      { drug: 'Atorvastatin 10mg', abbr: 'HS', expanded: 'at bedtime', conf: '97%' },
                      { drug: 'Telmisartan 40mg', abbr: 'OD', expanded: 'once daily', conf: '96%' },
                    ] as const).map(({ drug, abbr, expanded, conf }) => (
                      <div key={drug} className="rounded-lg bg-tp-slate-50 border border-tp-slate-100 px-2.5 py-2 flex justify-between items-center gap-2">
                        <div>
                          <div className="text-[11px] font-semibold text-tp-slate-900">{drug}</div>
                          <div className="text-[10px] mt-0.5 flex items-center gap-1">
                            <span className="font-semibold text-tp-slate-700">{abbr}</span>
                            <span className="text-tp-slate-400">→</span>
                            <span className="text-tp-slate-500">{expanded}</span>
                          </div>
                        </div>
                        <span className="badge badge-success flex-shrink-0" style={{ height: '18px', padding: '0 5px', fontSize: '10px' }}>{conf}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-[10px] text-tp-slate-400 border-t border-tp-slate-100 pt-1.5 mt-auto">
                    Drug name match: 100K+ formulary
                  </div>
                </div>
              </div>
            </div>
            {/* Floating overlay */}
            <div className="absolute bottom-[-16px] left-6 z-10 bg-white border border-tp-slate-200 rounded-[14px] p-2.5 px-3.5 shadow-tp-md flex gap-2.5 items-center">
              <span className="w-7 h-7 rounded-full bg-tp-blue-50 text-tp-blue-600 grid place-items-center text-sm flex-shrink-0">◎</span>
              <div>
                <div className="font-display font-semibold text-[13px] text-tp-slate-900">Captured in 1 photo · 96% accuracy</div>
                <div className="text-[11px] text-tp-slate-500">ABDM-ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Problem Callout */}
      <section className="bg-white py-24" aria-labelledby="snaprx-problem-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <EyebrowPill>The problem</EyebrowPill>
              <h2
                id="snaprx-problem-heading"
                className="font-display font-bold text-tp-slate-900 mt-3.5 mb-[18px]"
                style={{
                  fontSize: 'clamp(28px,3.6vw,48px)',
                  lineHeight: 1.17,
                  letterSpacing: '-0.02em',
                }}
              >
                Generic OCR breaks on doctor&apos;s handwriting. SnapRx does not.
              </h2>
              <p className="text-tp-slate-600" style={{ fontSize: '18px', lineHeight: '28px' }}>
                A photographed Rx scan is the most common artefact in Indian
                healthcare — 60% of prescriptions are still written on paper.
                Off-the-shelf OCR misreads dosages, confuses brand names, and
                ignores Indian medical abbreviations. SnapRx is trained on 5
                million+ Indian Rx and benchmarked at 96% drug-name accuracy.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card">
                <div
                  className="font-display font-bold text-tp-slate-900"
                  style={{ fontSize: '40px', lineHeight: 1.1, letterSpacing: '-0.03em' }}
                >
                  96%
                </div>
                <div className="text-tp-slate-600 text-sm mt-2">
                  drug-name extraction accuracy on Indian Rx
                </div>
              </div>
              <div className="card-blue">
                <div
                  className="font-display font-bold text-tp-blue-700"
                  style={{ fontSize: '40px', lineHeight: 1.1, letterSpacing: '-0.03em' }}
                >
                  5M+
                </div>
                <div className="text-tp-blue-800 text-sm mt-2">
                  Indian prescriptions in training set
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-tp-slate-100 py-24" aria-labelledby="snaprx-features-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <EyebrowPill>What SnapRx solves</EyebrowPill>
            <h2
              id="snaprx-features-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(24px,3vw,40px)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Healthcare-grade. Not generic OCR.
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
      <section className="bg-white py-24" aria-labelledby="snaprx-how-it-works-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <EyebrowPill>How it works</EyebrowPill>
            <h2
              id="snaprx-how-it-works-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(24px,3vw,40px)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Three taps. Done.
            </h2>
          </div>
          <HowItWorksSteps steps={howItWorksSteps} />
        </div>
      </section>

      {/* Stat Strip */}
      <section className="bg-tp-slate-100 py-24" aria-label="SnapRx key metrics">
        <div className="max-w-wrap mx-auto px-6">
          <div className="bg-tp-blue-50 rounded-tp-hero p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div
                className="font-display font-bold text-tp-slate-900"
                style={{ fontSize: '40px', lineHeight: 1.1, letterSpacing: '-0.03em' }}
              >
                96%
              </div>
              <div className="text-tp-slate-600 text-sm mt-2">extraction accuracy</div>
            </div>
            <div>
              <div
                className="font-display font-bold text-tp-slate-900"
                style={{ fontSize: '40px', lineHeight: 1.1, letterSpacing: '-0.03em' }}
              >
                5M+
              </div>
              <div className="text-tp-slate-600 text-sm mt-2">prescriptions trained on</div>
            </div>
            <div>
              <div
                className="font-display font-bold text-tp-slate-900"
                style={{ fontSize: '40px', lineHeight: 1.1, letterSpacing: '-0.03em' }}
              >
                3 sec
              </div>
              <div className="text-tp-slate-600 text-sm mt-2">avg processing time</div>
            </div>
            <div>
              <div
                className="font-display font-bold text-tp-slate-900"
                style={{ fontSize: '40px', lineHeight: 1.1, letterSpacing: '-0.03em' }}
              >
                100K+
              </div>
              <div className="text-tp-slate-600 text-sm mt-2">drugs cross-referenced</div>
            </div>
          </div>
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
          One photo. Clean, structured, ABDM-ready record.
        </p>
      </StatementBand>

      {/* Testimonial */}
      <section className="bg-tp-slate-100 py-24" aria-label="Customer testimonial">
        <div className="max-w-[840px] mx-auto px-6">
          <TestimonialCard
            quote="We digitise old paper Rx for every new patient using SnapRx. The history we get instantly is invaluable for chronic care."
            name="Dr. Meera Subramanian"
            role="Paediatrician · Chennai"
            initials="MS"
            large
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24" aria-labelledby="snaprx-faq-heading">
        <div className="max-w-[780px] mx-auto px-6">
          <div className="text-center mb-8">
            <EyebrowPill>Questions doctors ask</EyebrowPill>
            <h2
              id="snaprx-faq-heading"
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
