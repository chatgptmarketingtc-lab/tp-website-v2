import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import CTABand from '@/components/CTABand'
import StatementBand from '@/components/StatementBand'
import TestimonialCard from '@/components/TestimonialCard'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'AI Agents — Your clinical co-pilot. | TatvaPractice',
  description:
    'DoctorAgent for differentials and drug safety. Agent Amaya for SOAP notes. Receptionist Agent for the front desk. Your AI clinical co-pilot.',
  alternates: {
    canonical: 'https://tatvapractice.com/product/ai-agents',
  },
}

const faqItems = [
  {
    question: 'Is DoctorAgent giving me a diagnosis?',
    answer:
      'No. DoctorAgent surfaces ranked differential diagnoses with the evidence behind each, drug-interaction alerts, and lab interpretation. Every clinical decision stays with the licensed clinician — DoctorAgent is a co-pilot, not a replacement.',
  },
  {
    question: 'Where do the guidelines come from?',
    answer:
      'Indian clinical sources first: ICMR, NHM, major specialty associations (CSI, API, IPS, RCOG India). Every cited answer links to its source so you can audit it.',
  },
  {
    question: 'Does Amaya record the patient without consent?',
    answer:
      'No. Amaya activates only when you tap to start. The patient is informed before each capture, and you can review and delete the audio at any point. Recordings are encrypted and auto-purged after the SOAP note is finalised.',
  },
  {
    question: 'Can I disable the Receptionist Agent for specific patients?',
    answer:
      'Yes — opt-in per patient. Some patients prefer a phone call from a human. The Receptionist Agent respects channel preferences set in the patient profile.',
  },
  {
    question: 'How accurate are the differentials?',
    answer:
      "DoctorAgent is benchmarked monthly against held-out clinical cases. Top-3 DDx hit rate is over 89% on common Indian primary-care presentations. Senior clinicians always remain the decision-maker.",
  },
]

export default async function AIAgentsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-24 pt-20 bg-tp-slate-100 hero-spotlight text-center"
        aria-labelledby="agents-hero-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
            AI Clinical Agents
          </span>
          <h1
            id="agents-hero-heading"
            className="font-display font-bold text-tp-slate-900 mt-[18px] mb-[18px] mx-auto"
            style={{
              fontSize: 'clamp(36px,4.6vw,64px)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              maxWidth: '820px',
            }}
          >
            Your AI clinical co-pilot.
          </h1>
          <p
            className="text-tp-slate-600 mx-auto"
            style={{ fontSize: '20px', lineHeight: '32px', maxWidth: '720px' }}
          >
            DoctorAgent gives you real-time differential diagnoses, drug
            interaction alerts, lab interpretation, and evidence-based
            suggestions — grounded in Indian clinical guidelines.
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
            data-replace-with="AI Agents interface showing DoctorAgent DDx panel with differential diagnoses"
          >
            <span className="ph-label">Product UI · AI Agents</span>
          </div>
        </div>
      </section>

      <TrustBar />

      <StatementBand>
        <p
          className="font-display font-bold"
          style={{
            fontSize: 'clamp(24px,3vw,40px)',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}
        >
          Three agents. One patient context. Zero context-switching.
        </p>
      </StatementBand>

      {/* Three Agents */}
      <section className="bg-white py-24" aria-labelledby="three-agents-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              Three agents. One workflow.
            </span>
            <h2
              id="three-agents-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(24px,3vw,40px)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Different jobs. Same patient context.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* DoctorAgent */}
            <article className="card p-8 flex flex-col gap-3">
              <span className="badge badge-violet w-fit">AI</span>
              <h3
                className="font-display font-bold text-tp-slate-900"
                style={{ fontSize: '24px', lineHeight: 1.2, letterSpacing: '-0.02em' }}
              >
                DoctorAgent
              </h3>
              <p className="text-sm text-tp-slate-600">
                Real-time clinical co-pilot for the consultation room.
              </p>
              <ul className="checks mt-1">
                <li>Differential diagnoses ranked by likelihood</li>
                <li>Drug-interaction checks before you sign</li>
                <li>Lab result interpretation in plain English</li>
                <li>Indian clinical guideline answers, cited</li>
              </ul>
            </article>

            {/* Agent Amaya */}
            <article className="card p-8 flex flex-col gap-3">
              <span className="badge badge-violet w-fit">AI</span>
              <h3
                className="font-display font-bold text-tp-slate-900"
                style={{ fontSize: '24px', lineHeight: 1.2, letterSpacing: '-0.02em' }}
              >
                Agent Amaya
              </h3>
              <p className="text-sm text-tp-slate-600">
                Auto-structured SOAP notes from voice or ambient capture.
              </p>
              <ul className="checks mt-1">
                <li>Subjective, Objective, Assessment, Plan — separated</li>
                <li>ICD-10 / SNOMED auto-tagging</li>
                <li>Specialty templates baked in</li>
                <li>Editable inline before sign-off</li>
              </ul>
            </article>

            {/* Receptionist Agent */}
            <article className="card p-8 flex flex-col gap-3">
              <span className="badge badge-violet w-fit">AI</span>
              <h3
                className="font-display font-bold text-tp-slate-900"
                style={{ fontSize: '24px', lineHeight: 1.2, letterSpacing: '-0.02em' }}
              >
                Receptionist Agent
              </h3>
              <p className="text-sm text-tp-slate-600">
                A virtual front desk that handles the rhythm of OPD.
              </p>
              <ul className="checks mt-1">
                <li>Appointment reminders on WhatsApp</li>
                <li>Reschedule requests handled end-to-end</li>
                <li>Live queue updates to patients waiting</li>
                <li>No-show recovery loops</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* DoctorAgent Spotlight */}
      <section className="bg-tp-slate-100 py-24" aria-labelledby="doctoragent-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div
            className="grid gap-16 items-center"
            style={{ gridTemplateColumns: '.9fr 1.1fr' }}
          >
            <div>
              <span className="badge badge-violet mb-3.5">DoctorAgent</span>
              <h2
                id="doctoragent-heading"
                className="font-display font-bold text-tp-slate-900 mt-3.5 mb-3.5"
                style={{
                  fontSize: 'clamp(24px,3vw,40px)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                }}
              >
                Differentials, drug safety, lab AI — all in one panel.
              </h2>
              <p className="text-tp-slate-600 mb-5" style={{ fontSize: '18px', lineHeight: '28px' }}>
                DoctorAgent is grounded in Indian clinical protocols,
                formularies, and guidelines from ICMR, NHM, and major Indian
                medical associations. Cited, auditable, and always one tap away.
              </p>
              <ul className="checks">
                <li>DDx ranked by symptom, history, and lab match</li>
                <li>Drug interactions across the patient full med list</li>
                <li>Lab interpretation against age/sex/condition norms</li>
                <li>Q&amp;A on Indian guidelines — every answer cited</li>
              </ul>
            </div>
            <div className="relative rounded-tp-hero overflow-hidden aspect-video bg-tp-slate-200">
              {/* Real image — falls back gracefully if not present */}
              <Image
                src="/assets/mocks/doctor-agent-ddx.png"
                alt="DoctorAgent panel showing Symptoms, Diagnosis with a Generate DDx call-to-action, and Medication chips"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Agent Amaya Spotlight */}
      <section className="bg-white py-24" aria-labelledby="amaya-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div
            className="grid gap-16 items-center"
            style={{ gridTemplateColumns: '1.1fr .9fr' }}
          >
            {/* Amaya mock UI */}
            <div
              className="ph ph-aspect-16-10"
              data-placeholder="ui-screenshot"
              data-replace-with="Agent Amaya — a SOAP note auto-structured from a transcript"
            >
              <span className="ph-label">Product UI · Agent Amaya</span>
              <div
                className="absolute inset-6 bg-white border border-tp-slate-200 rounded-[14px] p-[18px] grid gap-3.5"
                style={{ gridTemplateColumns: '1fr 1fr' }}
              >
                <div>
                  <div className="badge badge-violet mb-2">● Live capture</div>
                  <div className="text-[11px] text-tp-slate-700 leading-relaxed font-display">
                    Doctor: &ldquo;मरीज को 3 दिन से बुखार है, throat sore, no rash.
                    Started self-medicating with paracetamol BD…&rdquo;
                  </div>
                </div>
                <div className="text-[11px] text-tp-slate-700 flex flex-col gap-2">
                  <div>
                    <b className="text-tp-slate-900">S</b> · 3-day fever, sore
                    throat, no rash, self-medicating paracetamol BD
                  </div>
                  <div>
                    <b className="text-tp-slate-900">O</b> · Temp 100.4°F ·
                    Throat: erythematous · Nodes: tender
                  </div>
                  <div>
                    <b className="text-tp-slate-900">A</b> · Acute pharyngitis
                    (ICD-10: J02.9)
                  </div>
                  <div>
                    <b className="text-tp-slate-900">P</b> · Amoxicillin 500 BD
                    × 5d · warm fluids · review 48h
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="badge badge-violet mb-3.5">Agent Amaya</span>
              <h2
                id="amaya-heading"
                className="font-display font-bold text-tp-slate-900 mt-3.5 mb-3.5"
                style={{
                  fontSize: 'clamp(24px,3vw,40px)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                }}
              >
                SOAP notes that write themselves.
              </h2>
              <p className="text-tp-slate-600 mb-5" style={{ fontSize: '18px', lineHeight: '28px' }}>
                Amaya listens to the consultation — or reads your dictation —
                and produces a clean, structured SOAP note with ICD-10 tagging.
                You sign off in seconds.
              </p>
              <ul className="checks">
                <li>Subjective, Objective, Assessment, Plan — auto-separated</li>
                <li>ICD-10 and SNOMED CT codes auto-applied</li>
                <li>Specialty-specific templates baked in</li>
                <li>Inline editing for any field before sign-off</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Receptionist Agent Spotlight */}
      <section className="bg-tp-slate-100 py-24" aria-labelledby="receptionist-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div
            className="grid gap-16 items-center"
            style={{ gridTemplateColumns: '.9fr 1.1fr' }}
          >
            <div>
              <span className="badge badge-violet mb-3.5">Receptionist Agent</span>
              <h2
                id="receptionist-heading"
                className="font-display font-bold text-tp-slate-900 mt-3.5 mb-3.5"
                style={{
                  fontSize: 'clamp(24px,3vw,40px)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                }}
              >
                A virtual front desk that runs the OPD floor.
              </h2>
              <p className="text-tp-slate-600 mb-5" style={{ fontSize: '18px', lineHeight: '28px' }}>
                Reminders, reschedules, queue updates, no-show recovery — all
                handled on WhatsApp, in your patient&apos;s native language. Your
                human staff focuses on the patients in the room, not the phone.
              </p>
              <ul className="checks">
                <li>Appointment reminders 24h and 2h before</li>
                <li>Reschedule requests handled end-to-end</li>
                <li>Live queue ETA pushed to patients waiting</li>
                <li>No-show recovery loops with one-tap rebook</li>
              </ul>
            </div>
            <div className="relative rounded-tp-hero overflow-hidden aspect-video bg-tp-slate-200">
              <Image
                src="/assets/mocks/ai-receptionist.png"
                alt="Configure Your AI Receptionist screen with Mira virtual receptionist setup, doctor list, and live phone preview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-24" aria-label="Customer testimonial">
        <div className="max-w-[840px] mx-auto px-6">
          <TestimonialCard
            quote="DoctorAgent surfaces things I would have caught eventually — but now I catch them in the room. It's changed how I consult."
            name="Dr. Anand Kumar"
            role="Internal Medicine · Apollo Clinics, Bangalore"
            initials="AK"
            large
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-tp-slate-100 py-24" aria-labelledby="agents-faq-heading">
        <div className="max-w-[780px] mx-auto px-6">
          <div className="text-center mb-8">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              FAQs
            </span>
            <h2
              id="agents-faq-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(24px,3vw,40px)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Questions doctors ask
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTABand />
    </>
  )
}
