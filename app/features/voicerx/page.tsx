import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import CTABand from '@/components/CTABand'
import StatementBand from '@/components/StatementBand'
import HowItWorksSteps from '@/components/HowItWorksSteps'
import TestimonialCard from '@/components/TestimonialCard'
import FAQAccordion from '@/components/FAQAccordion'
import {
  KeyboardIcon,
  LanguagesIcon,
  PillIcon,
  ShieldAlertIcon,
} from '@/components/icons'
import EyebrowPill from '@/components/EyebrowPill'

export const metadata: Metadata = {
  title: "VoiceRx — Speak. We'll write the prescription.",
  description:
    'VoiceRx structures medical voice notes into clean, audit-ready prescriptions in 30 seconds. In 9 Indian languages.',
  alternates: { canonical: 'https://tatvapractice.com/features/voicerx' },
  openGraph: {
    title: "VoiceRx — Voice-to-prescription in 30 seconds | TatvaPractice",
    description: 'VoiceRx structures medical voice notes into clean, audit-ready prescriptions in 30 seconds. In 9 Indian languages.',
    type: 'website',
    url: 'https://tatvapractice.com/features/voicerx',
  },
  twitter: {
    title: 'VoiceRx | TatvaPractice',
    description: 'Voice to prescription in 30 seconds. In 9 Indian languages.',
  },
}

const waveformHeights = [30, 80, 84, 38, 75, 87, 46, 69, 89, 54, 62, 89, 62, 55, 89, 69, 47, 87, 75, 38, 84, 80, 30, 80, 84, 37, 75, 87, 46, 69]
const waveformColors = ['#8E8DE8', '#6C6BDE', '#4B4AD5', '#3C3BB5']

const featureCards = [
  {
    Icon: KeyboardIcon,
    title: 'Typing fatigue',
    desc: 'Stop typing. Speak naturally. AI structures it into a clean prescription form.',
  },
  {
    Icon: LanguagesIcon,
    title: 'Regional language gap',
    desc: 'Switch between Hindi, Gujarati, Tamil, Marathi mid-sentence. We understand.',
  },
  {
    Icon: PillIcon,
    title: 'Structured Rx',
    desc: 'Drug name, dosage, frequency, duration, instructions — auto-validated, ABDM-ready.',
  },
  {
    Icon: ShieldAlertIcon,
    title: 'Drug safety',
    desc: 'Real-time interaction checks across all prescribed medications, before you sign.',
  },
]

const howItWorksSteps = [
  {
    title: 'Speak',
    description: 'Tap to record. Speak the way you would dictate to a junior.',
  },
  {
    title: 'AI transcribes',
    description: 'Live transcription in any of 9 Indian languages, mixed code OK.',
  },
  {
    title: 'You verify',
    description: 'One tap to confirm. Edit any field inline if needed.',
  },
  {
    title: 'Patient gets Rx',
    description: 'Digital Rx via WhatsApp or print. ABDM-linked automatically.',
  },
]

const specialties = [
  'General Practice', 'Pediatrics', 'Cardiology', 'Orthopedics', 'Gynaecology',
  'Dermatology', 'Ophthalmology', 'Dentistry', 'ENT', 'Psychiatry',
  'Endocrinology', 'Diabetology', 'Pulmonology', 'Nephrology', 'Urology',
  'Gastroenterology', 'Rheumatology', 'Oncology', 'Neurology', 'Surgery',
  'Internal Medicine', 'Family Medicine', 'Geriatrics', 'Sports Medicine', '& 20+ more',
]

const faqItems = [
  {
    question: 'How accurate is VoiceRx in Indian medical contexts?',
    answer:
      'VoiceRx is trained on 50,000+ hours of Indian medical audio across specialties and accents. Drug-name extraction accuracy is benchmarked at over 96% on Hindi-English mixed input. Every Rx still goes through a one-tap doctor verification step before it leaves the consultation.',
  },
  {
    question: 'Does it work in regional languages?',
    answer:
      'Yes — VoiceRx supports Hindi, Gujarati, Tamil, Marathi, Bengali, Telugu, Kannada, Punjabi, and English, including mid-sentence code-switching. Drug names, dosages, and frequencies map back to standard pharmacopeia regardless of the language they were spoken in.',
  },
  {
    question: 'What about drug safety checks?',
    answer:
      'VoiceRx runs every Rx through a real-time interaction engine cross-referenced against the patient active medication list. Critical interactions surface as a red flag before you can finalise the Rx. The drug DB covers 100,000+ Indian formulations and is updated weekly.',
  },
  {
    question: 'Is the Rx legally valid?',
    answer:
      'Yes. Every digital Rx is generated to comply with the Indian Medical Council guidelines and ABDM standards, signed with your registered Medical Council number, and time-stamped. ABHA-linked records can be shared with patient consent.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most solo clinics are live in under 30 minutes. We provision your eClinic, import your specialty templates, and walk you through your first Rx on a free onboarding call. No installation, no IT team needed.',
  },
]

export default async function VoiceRxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'VoiceRx',
            applicationCategory: 'HealthApplication',
            operatingSystem: 'Web, iOS, Android',
            description: 'VoiceRx structures medical voice notes into clean, audit-ready prescriptions in 30 seconds. In 9 Indian languages.',
            url: 'https://tatvapractice.com/features/voicerx',
            offers: { '@type': 'Offer', priceCurrency: 'INR', price: '0' },
          }),
        }}
      />
      {/* Hero */}
      <section
        className="py-24 pt-20 bg-tp-slate-100 hero-spotlight text-center"
        aria-labelledby="voicerx-hero-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <EyebrowPill>AI Prescription Mode</EyebrowPill>
          <h1
            id="voicerx-hero-heading"
            className="font-display font-bold text-tp-slate-900 mt-[18px] mb-[18px] mx-auto"
            style={{
              fontSize: 'clamp(36px,4.6vw,64px)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              maxWidth: '820px',
            }}
          >
            Speak and TatvaPractice will transcribe the prescription.
          </h1>
          <p
            className="text-tp-slate-600 mx-auto"
            style={{ fontSize: '20px', lineHeight: '32px', maxWidth: '680px' }}
          >
            VoiceRx structures medical voice notes into clean, audit-ready
            prescriptions in 30 seconds. In 9 Indian languages, including
            Hindi-English mixed.
          </p>
          <div className="flex gap-3 justify-center flex-wrap mt-7">
            <Link href="https://health.tatvacare.in/login" className="btn btn-solid btn-l">
              Start Free Trial <span className="arr">→</span>
            </Link>
            <Link href="/contact" className="btn btn-outline btn-l">
              Book a Demo
            </Link>
          </div>

          {/* VoiceRx UI Mock */}
          <div
            className="ph p-8 mt-12 max-w-[980px] mx-auto"
            data-placeholder="ui-screenshot"
            data-replace-with="VoiceRx active session showing live transcription in Hindi-English with structured Rx forming on the right"
          >
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Waveform panel */}
              <div className="bg-white border border-tp-slate-200 rounded-[14px] p-[18px] flex flex-col gap-2.5">
                <div className="flex justify-between">
                  <span className="badge badge-violet">● Live · 0:42</span>
                  <span className="text-[13px] text-tp-slate-500">हिं + EN</span>
                </div>
                <div className="flex items-end gap-[3px] h-[54px]">
                  {waveformHeights.map((h, i) => (
                    <span
                      key={i}
                      className="w-[3px] rounded-sm"
                      style={{
                        height: `${h}%`,
                        backgroundColor: waveformColors[i % 4],
                      }}
                    />
                  ))}
                </div>
                <div className="text-[12px] text-tp-slate-700 font-display">
                  &ldquo;Patient ko diabetes type 2 hai, Metformin 500 BD denge,
                  fasting blood sugar check karwana 4 weeks mein&hellip;&rdquo;
                </div>
              </div>
              {/* Structured Rx panel */}
              <div className="bg-white border border-tp-slate-200 rounded-[14px] p-[18px]">
                <div className="flex justify-between mb-3">
                  <span className="font-display font-bold text-tp-slate-900 text-[13px]">
                    Auto-structured Rx
                  </span>
                  <span
                    className="badge badge-success"
                    style={{ height: '20px', padding: '0 8px' }}
                  >
                    ● Verified
                  </span>
                </div>
                <div className="text-[12px] text-tp-slate-700 flex flex-col gap-2.5">
                  <div className="border-b border-tp-slate-100 pb-2">
                    <b className="text-tp-slate-900">Metformin 500 mg</b>
                    <div className="flex justify-between mt-1 text-[11px] text-tp-slate-600">
                      <span>1 tab BD · after meals</span>
                      <span>30 days</span>
                    </div>
                  </div>
                  <div className="border-b border-tp-slate-100 pb-2">
                    <b className="text-tp-slate-900">Glimepiride 1 mg</b>
                    <div className="flex justify-between mt-1 text-[11px] text-tp-slate-600">
                      <span>1 tab OD · before breakfast</span>
                      <span>30 days</span>
                    </div>
                  </div>
                  <div className="bg-tp-blue-50 text-tp-blue-700 p-2 rounded-lg text-[11px]">
                    Lab: FBS, PPBS, HbA1c · 4 weeks
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Problem Callout */}
      <section className="bg-white py-24" aria-labelledby="voicerx-problem-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <EyebrowPill>The problem</EyebrowPill>
              <h2
                id="voicerx-problem-heading"
                className="font-display font-bold text-tp-slate-900 mt-3.5 mb-[18px]"
                style={{
                  fontSize: 'clamp(28px,3.6vw,48px)',
                  lineHeight: 1.17,
                  letterSpacing: '-0.02em',
                }}
              >
                Specialists spend 2+ hours a day on documentation. VoiceRx
                gives that time back.
              </h2>
              <p className="text-tp-slate-600" style={{ fontSize: '18px', lineHeight: '28px' }}>
                Across 800+ clinics, VoiceRx users see consultation notes
                finished before the patient leaves the room. No screen typing.
                No catching up at night. No template wrestling — just clean Rx,
                structured the way you would dictate them.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card">
                <div
                  className="font-display font-bold text-tp-slate-900"
                  style={{ fontSize: '40px', lineHeight: 1.1, letterSpacing: '-0.03em' }}
                >
                  30 sec
                </div>
                <div className="text-tp-slate-600 text-sm mt-2">
                  average Rx generation time, end to end
                </div>
              </div>
              <div className="card-blue">
                <div
                  className="font-display font-bold text-tp-blue-700"
                  style={{ fontSize: '40px', lineHeight: 1.1, letterSpacing: '-0.03em' }}
                >
                  9
                </div>
                <div className="text-tp-blue-800 text-sm mt-2">
                  Indian languages supported, including code-switching
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-tp-slate-100 py-24" aria-labelledby="voicerx-features-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <EyebrowPill>What VoiceRx solves</EyebrowPill>
            <h2
              id="voicerx-features-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(24px,3vw,40px)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Built for the messy, multilingual reality of Indian OPD.
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
      <section className="bg-white py-24" aria-labelledby="voicerx-how-it-works-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <EyebrowPill>How it works</EyebrowPill>
            <h2
              id="voicerx-how-it-works-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(24px,3vw,40px)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Four steps. Twenty-eight seconds.
            </h2>
          </div>
          <HowItWorksSteps steps={howItWorksSteps} />
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
          Speak in your language. The Rx writes itself.
        </p>
      </StatementBand>

      {/* Specialty Cloud + Testimonial */}
      <section
        className="bg-tp-slate-100 py-24"
        aria-labelledby="voicerx-specialties-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-8">
            <EyebrowPill>Designed for every specialty</EyebrowPill>
            <h2
              id="voicerx-specialties-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(24px,3vw,40px)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              25+ specialties supported.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {specialties.map((s) => (
              <span key={s} className="chip chip-blue">
                {s}
              </span>
            ))}
          </div>

          <div className="max-w-[840px] mx-auto mt-12">
            <TestimonialCard
              quote="TatvaPractice has cut our prescription time by 70%. The VoiceRx feature alone has transformed how we manage OPD."
              name="Dr. Rajesh Patel"
              role="Cardiologist · HeartCare Clinic, Ahmedabad"
              initials="RP"
              large
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24" aria-labelledby="voicerx-faq-heading">
        <div className="max-w-[780px] mx-auto px-6">
          <div className="text-center mb-8">
            <EyebrowPill>Questions doctors ask</EyebrowPill>
            <h2
              id="voicerx-faq-heading"
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
