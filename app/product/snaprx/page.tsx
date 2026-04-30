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

export const metadata: Metadata = {
  title: "SnapRx — Photograph any prescription. We'll digitise it. | TatvaPractice",
  description:
    'SnapRx is a healthcare-grade OCR engine purpose-built for the messy reality of handwritten Indian prescriptions.',
  alternates: {
    canonical: 'https://tatvapractice.com/product/snaprx',
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
      {/* Hero */}
      <section
        className="py-24 pt-20 bg-tp-slate-100 hero-spotlight text-center"
        aria-labelledby="snaprx-hero-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
            AI OCR Mode
          </span>
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

          <div
            className="ph ph-aspect-16-10 mt-12 max-w-[980px] mx-auto"
            data-placeholder="ui-screenshot"
            data-replace-with="SnapRx interface showing a photograph of a handwritten prescription being processed into structured digital Rx"
          >
            <span className="ph-label">Product UI · SnapRx</span>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Problem Callout */}
      <section className="bg-white py-24" aria-labelledby="snaprx-problem-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div
            className="grid gap-16 items-center"
            style={{ gridTemplateColumns: '1fr 1fr' }}
          >
            <div>
              <span className="tp-eyebrow">The problem</span>
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
            <div className="grid grid-cols-2 gap-4">
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
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              What SnapRx solves
            </span>
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
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              How it works
            </span>
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
          <div className="bg-tp-blue-50 rounded-tp-hero p-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              Questions doctors ask
            </span>
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
