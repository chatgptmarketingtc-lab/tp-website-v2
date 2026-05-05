import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import CTABand from '@/components/CTABand'
import StatementBand from '@/components/StatementBand'
import TestimonialCard from '@/components/TestimonialCard'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'AI Agents — Your clinical co-pilot.',
  description:
    "Amaya is your doctor's AI agent — DDx, drug-interaction alerts, SOAP notes, and lab interpretation. Mira is your patient's agent — scheduling, reminders, and WhatsApp comms.",
  alternates: { canonical: 'https://tatvapractice.com/features/ai-agents' },
  openGraph: {
    title: 'AI Agents — Amaya & Mira | TatvaPractice',
    description: "Amaya handles clinical co-piloting. Mira handles patient engagement. Two AI agents built for Indian healthcare.",
    type: 'website',
    url: 'https://tatvapractice.com/features/ai-agents',
  },
  twitter: {
    title: 'AI Agents | TatvaPractice',
    description: 'Amaya (clinical co-pilot) and Mira (patient agent) — AI built for Indian healthcare.',
  },
}

const faqItems = [
  {
    question: 'Is Amaya giving me a diagnosis?',
    answer:
      'No. Amaya surfaces ranked differential diagnoses with the evidence behind each, drug-interaction alerts, and lab interpretation. Every clinical decision stays with the licensed clinician — Amaya is a co-pilot, not a replacement.',
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
    question: 'Can I disable Mira for specific patients?',
    answer:
      'Yes — opt-in per patient. Some patients prefer a phone call from a human. Mira respects channel preferences set in the patient profile.',
  },
  {
    question: 'How accurate are the differentials?',
    answer:
      "Amaya is benchmarked monthly against held-out clinical cases. Top-3 DDx hit rate is over 89% on common Indian primary-care presentations. Senior clinicians always remain the decision-maker.",
  },
]

export default async function AIAgentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'TatvaPractice AI Agents',
            applicationCategory: 'HealthApplication',
            operatingSystem: 'Web, iOS, Android',
            description: "Amaya is your doctor's AI agent — DDx, drug-interaction alerts, SOAP notes, and lab interpretation. Mira is your patient's agent — scheduling, reminders, and WhatsApp comms.",
            url: 'https://tatvapractice.com/features/ai-agents',
            offers: { '@type': 'Offer', priceCurrency: 'INR', price: '0' },
          }),
        }}
      />
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
            Amaya is your doctor&apos;s AI agent — DDx, drug-interaction alerts,
            lab interpretation, and SOAP notes, all grounded in Indian clinical
            guidelines. Mira handles your front desk — scheduling, reminders,
            and WhatsApp comms.
          </p>
          <div className="flex gap-3 justify-center flex-wrap mt-7">
            <Link href="https://health.tatvacare.in/login" className="btn btn-solid btn-l">
              Start Free Trial <span className="arr">→</span>
            </Link>
            <Link href="/contact" className="btn btn-outline btn-l">
              Book a Demo
            </Link>
          </div>

          {/* AI Agents hero card — two agents in parallel */}
          <div className="relative pb-6 mt-12 max-w-[700px] mx-auto">
            <div className="rounded-tp-hero border border-tp-slate-200 bg-white shadow-tp-lg overflow-hidden p-5">
              {/* Patient context header */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="font-display font-bold text-tp-slate-900 text-sm">Mr. Vikram Shah · 56y · M</div>
                  <div className="text-[11px] text-tp-slate-500">Diabetes follow-up · OPD #14 · 11:42 AM</div>
                </div>
                <span className="badge badge-violet">● Both agents · ready</span>
              </div>
              {/* Two agent columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Amaya — doctor's AI agent */}
                <div className="rounded-[14px] p-3.5 flex flex-col gap-2" style={{ background: '#FAF5FE', border: '1px solid rgba(164,97,216,0.2)' }}>
                  <div className="flex items-center gap-1.5">
                    <span className="w-[18px] h-[18px] rounded-[4px] text-white grid place-items-center flex-shrink-0" style={{ fontSize: '8px', fontWeight: 700, background: '#A461D8' }}>AI</span>
                    <span className="font-display font-semibold text-[12px] text-tp-violet-900">Amaya</span>
                  </div>
                  <div className="text-[10px] font-semibold text-tp-violet-700 uppercase tracking-wide">Doctor&apos;s AI agent</div>
                  <div className="flex flex-col gap-1.5">
                    {['DDx · ranked by likelihood', 'Drug-interaction alerts', 'Lab interpretation', 'SOAP notes auto-structured'].map((item) => (
                      <div key={item} className="flex items-center gap-1.5 text-[11px]">
                        <span className="text-emerald-500 flex-shrink-0 font-bold">✓</span>
                        <span className="text-tp-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-[10px] text-tp-violet-700 border-t pt-1.5 mt-auto" style={{ borderColor: 'rgba(164,97,216,0.2)' }}>Clinical co-pilot · cited</div>
                </div>
                {/* Mira — patient's AI agent */}
                <div className="rounded-[14px] bg-emerald-50 border border-emerald-200 p-3.5 flex flex-col gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-[18px] h-[18px] rounded-[4px] bg-emerald-600 text-white grid place-items-center flex-shrink-0" style={{ fontSize: '8px', fontWeight: 700 }}>AI</span>
                    <span className="font-display font-semibold text-[12px] text-emerald-900">Mira</span>
                  </div>
                  <div className="text-[10px] font-semibold text-emerald-700 uppercase tracking-wide">WhatsApp sent</div>
                  <div className="rounded-lg bg-white border border-emerald-100 p-2 flex flex-col gap-1">
                    <div className="text-[11px] font-semibold text-tp-slate-700">Reminder confirmed</div>
                    <div className="text-[11px] text-tp-slate-500">Reschedule: none</div>
                  </div>
                  <div className="text-[10px] text-emerald-700 border-t border-emerald-100 pt-1.5 mt-auto">EN · queue updated</div>
                </div>
              </div>
            </div>
            {/* Floating overlay */}
            <div className="absolute bottom-[-16px] left-6 z-10 bg-white border border-tp-slate-200 rounded-[14px] p-2.5 px-3.5 shadow-tp-md flex gap-2.5 items-center">
              <span className="w-7 h-7 rounded-full bg-tp-violet-50 text-tp-violet-700 grid place-items-center text-sm flex-shrink-0">●</span>
              <div>
                <div className="font-display font-semibold text-[13px] text-tp-slate-900">2 agents synced in 2.3s</div>
                <div className="text-[11px] text-tp-slate-500">one patient context</div>
              </div>
            </div>
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
          Two agents. One patient context. Zero context-switching.
        </p>
      </StatementBand>

      {/* Two Agents */}
      <section className="bg-white py-24" aria-labelledby="two-agents-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              Two agents. One workflow.
            </span>
            <h2
              id="two-agents-heading"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[800px] mx-auto">
            {/* Amaya */}
            <article className="card p-8 flex flex-col gap-3">
              <span className="badge badge-violet w-fit">AI</span>
              <h3
                className="font-display font-bold text-tp-slate-900"
                style={{ fontSize: '24px', lineHeight: 1.2, letterSpacing: '-0.02em' }}
              >
                Amaya
              </h3>
              <p className="text-sm text-tp-slate-600">
                Your doctor&apos;s clinical co-pilot — from diagnosis to documentation.
              </p>
              <ul className="checks mt-1">
                <li>Differential diagnoses ranked by likelihood</li>
                <li>Drug-interaction checks before you sign</li>
                <li>Lab result interpretation in plain English</li>
                <li>SOAP notes auto-structured from voice</li>
              </ul>
            </article>

            {/* Mira */}
            <article className="card p-8 flex flex-col gap-3">
              <span className="badge badge-violet w-fit">AI</span>
              <h3
                className="font-display font-bold text-tp-slate-900"
                style={{ fontSize: '24px', lineHeight: 1.2, letterSpacing: '-0.02em' }}
              >
                Mira
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

      {/* Amaya Spotlight */}
      <section className="bg-tp-slate-100 py-24" aria-labelledby="amaya-ddx-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[.9fr_1.1fr] gap-8 md:gap-16 items-center">
            <div>
              <span className="badge badge-violet mb-3.5">Amaya</span>
              <h2
                id="amaya-ddx-heading"
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
                Amaya is grounded in Indian clinical protocols,
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
            {/* Amaya DDx stylized card */}
            <div className="relative pb-6">
              <div className="rounded-tp-hero border border-tp-slate-200 shadow-tp-lg overflow-hidden flex">
                {/* Dark sidebar */}
                <div className="hidden sm:flex flex-col flex-shrink-0 bg-tp-blue-900 text-white p-[18px] px-3.5" style={{ width: '120px' }}>
                  <div className="flex items-center gap-2 font-display font-bold text-[13px]">
                    <span className="w-[22px] h-[22px] rounded-[6px] bg-tp-blue-500 grid place-items-center text-[11px]">T</span> TP
                  </div>
                  <div className="mt-[18px] flex flex-col gap-1.5 text-[11px] text-white/70">
                    <div className="bg-tp-blue-500 py-[7px] px-2.5 rounded-[7px] text-white">Today&apos;s queue</div>
                    <div className="py-[7px] px-2.5">Patients</div>
                    <div className="py-[7px] px-2.5">Lab</div>
                    <div className="py-[7px] px-2.5">Billing</div>
                    <div className="py-[7px] px-2.5">Analytics</div>
                  </div>
                </div>
                {/* Main panel */}
                <div className="flex-1 bg-white p-[14px] px-4 flex flex-col gap-2.5">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <div className="font-display font-bold text-tp-slate-900 text-sm">Mrs. Priya Menon · 47F · General Medicine</div>
                      <div className="text-[11px] text-tp-slate-500">Chief complaint · OPD #09 · 10:15 AM</div>
                    </div>
                    <span className="badge badge-violet flex-shrink-0">● Amaya · ready</span>
                  </div>
                  {/* Symptom chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {['Fatigue', 'Polyuria', 'Blurred vision', 'Weight loss', 'Frequent thirst'].map((s) => (
                      <span key={s} className="badge badge-blue" style={{ height: '22px', fontSize: '11px', padding: '0 9px' }}>{s}</span>
                    ))}
                  </div>
                  {/* DDx ranked */}
                  <div className="bg-tp-blue-50 border border-dashed border-tp-blue-200 rounded-xl p-3">
                    <div className="text-[10px] font-semibold text-tp-blue-700 uppercase tracking-wide mb-2">DDx · ranked by likelihood</div>
                    <div className="flex flex-col gap-1.5">
                      {[
                        { dx: 'Type 2 Diabetes Mellitus', pct: 82, label: 'primary', barColor: 'bg-tp-blue-500' },
                        { dx: 'Hyperthyroidism', pct: 14, label: 'consider', barColor: 'bg-tp-blue-300' },
                        { dx: 'Adrenal insufficiency', pct: 4, label: 'rule out', barColor: 'bg-tp-slate-300' },
                      ].map(({ dx, pct, label, barColor }) => (
                        <div key={dx} className="flex items-center gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="text-[11px] font-semibold text-tp-slate-900 truncate">{dx}</div>
                            <div className="mt-0.5 h-1.5 rounded-full bg-tp-blue-100 overflow-hidden">
                              <div className={`h-full rounded-full ${barColor}`} style={{ width: `${pct}%` }} />
                            </div>
                          </div>
                          <span className="text-[11px] font-bold text-tp-blue-700 flex-shrink-0 w-8 text-right">{pct}%</span>
                          <span className="text-[10px] text-tp-slate-400 flex-shrink-0 w-14 italic">{label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-[10px] text-tp-blue-600 mt-2 pt-1.5 border-t border-tp-blue-100">Cited: ICMR DM-2 guideline · NHM 2024</div>
                  </div>
                  {/* Drug check + Lab AI side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="rounded-xl p-2.5" style={{ background: '#FFFBEB', border: '1px solid #FDE68A' }}>
                      <div className="text-[10px] font-semibold text-amber-700 mb-1">Drug interaction check</div>
                      <div className="text-[11px] text-amber-800">4 active meds · 0 interactions flagged</div>
                    </div>
                    <div className="rounded-xl p-2.5" style={{ background: '#FAF5FE', border: '1px solid rgba(164,97,216,0.2)' }}>
                      <div className="text-[10px] font-semibold text-tp-violet-700 mb-1">Lab AI</div>
                      <div className="text-[11px] text-tp-violet-700">HbA1c 8.2% · trending up · review in 8 wks</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating overlay */}
              <div className="absolute bottom-[-16px] left-6 z-10 bg-white border border-tp-slate-200 rounded-[14px] p-2.5 px-3.5 shadow-tp-md flex gap-2.5 items-center">
                <span className="w-7 h-7 rounded-full bg-tp-blue-50 text-tp-blue-600 grid place-items-center text-sm flex-shrink-0">●</span>
                <div>
                  <div className="font-display font-semibold text-[13px] text-tp-slate-900">DDx generated in 1.4s · cited</div>
                  <div className="text-[11px] text-tp-slate-500">ICMR · NHM guidelines</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amaya SOAP Spotlight */}
      <section className="bg-white py-24" aria-labelledby="amaya-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_.9fr] gap-8 md:gap-16 items-center">
            {/* Amaya mock UI */}
            <div
              className="ph p-6"
              data-placeholder="ui-screenshot"
              data-replace-with="Amaya — a SOAP note auto-structured from a transcript"
            >
              <div className="w-full bg-white border border-tp-slate-200 rounded-[14px] p-[18px] grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
              <span className="badge badge-violet mb-3.5">Amaya</span>
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

      {/* Mira Spotlight */}
      <section className="bg-tp-slate-100 py-24" aria-labelledby="mira-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[.9fr_1.1fr] gap-8 md:gap-16 items-center">
            <div>
              <span className="badge badge-violet mb-3.5">Mira</span>
              <h2
                id="mira-heading"
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
            {/* Mira stylized card */}
            <div className="relative pb-6">
              <div className="rounded-tp-hero border border-tp-slate-200 shadow-tp-lg overflow-hidden flex">
                {/* Dark sidebar — same shell as Amaya, shared patient context */}
                <div className="hidden sm:flex flex-col flex-shrink-0 bg-tp-blue-900 text-white p-[18px] px-3.5" style={{ width: '120px' }}>
                  <div className="flex items-center gap-2 font-display font-bold text-[13px]">
                    <span className="w-[22px] h-[22px] rounded-[6px] bg-tp-blue-500 grid place-items-center text-[11px]">T</span> TP
                  </div>
                  <div className="mt-[18px] flex flex-col gap-1.5 text-[11px] text-white/70">
                    <div className="bg-tp-blue-500 py-[7px] px-2.5 rounded-[7px] text-white">Today&apos;s queue</div>
                    <div className="py-[7px] px-2.5">Patients</div>
                    <div className="py-[7px] px-2.5">Lab</div>
                    <div className="py-[7px] px-2.5">Billing</div>
                    <div className="py-[7px] px-2.5">Analytics</div>
                  </div>
                </div>
                {/* Main panel */}
                <div className="flex-1 bg-white p-[14px] px-4 flex flex-col gap-2.5">
                  {/* Header */}
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <div className="font-display font-bold text-tp-slate-900 text-sm">OPD floor · Live</div>
                      <div className="text-[11px] text-tp-slate-500">12 patients in queue · avg wait 14 min</div>
                    </div>
                    <span className="badge badge-violet flex-shrink-0">● Mira · ready</span>
                  </div>
                  {/* Queue rows */}
                  <div className="bg-tp-slate-50 border border-tp-slate-100 rounded-xl p-2.5 flex flex-col gap-1.5">
                    <div className="text-[10px] font-semibold text-tp-slate-500 uppercase tracking-wide mb-0.5">Today&apos;s queue</div>
                    {[
                      { name: 'Mr. Rajesh K.',  time: '09:00', label: '● in consult',              cls: 'text-tp-blue-700 bg-tp-blue-50 border border-tp-blue-100' },
                      { name: 'Mrs. Anita S.',  time: '09:15', label: '● waiting · 2 min',          cls: 'text-amber-700 bg-amber-50 border border-amber-100' },
                      { name: 'Mr. Vikram J.',  time: '09:30', label: '● confirmed via WhatsApp',   cls: 'text-emerald-700 bg-emerald-50 border border-emerald-100' },
                      { name: 'Mrs. Kavya M.',  time: '09:45', label: '⚠ no-show · rebook sent',   cls: 'text-red-600 bg-red-50 border border-red-100' },
                    ].map(({ name, time, label, cls }) => (
                      <div key={name} className="flex items-center gap-2 text-[11px]">
                        <span className="font-semibold text-tp-slate-800 flex-1 truncate">{name}</span>
                        <span className="text-tp-slate-400 flex-shrink-0">{time}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-md flex-shrink-0 ${cls}`}>{label}</span>
                      </div>
                    ))}
                  </div>
                  {/* WhatsApp comms + Pre-consult prep */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="rounded-xl p-2.5" style={{ background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                      <div className="text-[10px] font-semibold text-emerald-700 mb-1">WhatsApp comms</div>
                      <div className="text-[11px] text-emerald-800 mb-1.5">Sent to 8 patients today</div>
                      <div className="text-[10px] italic text-emerald-700 leading-relaxed mb-1.5">
                        &ldquo;Hi Anita, your appointment with Dr. Rao is at 9:15 today. Reply YES to confirm.&rdquo;
                      </div>
                      <div className="text-[10px] text-emerald-600">8 confirmed · 2 rescheduled · 1 rebooked</div>
                    </div>
                    <div className="rounded-xl p-2.5" style={{ background: '#FAF5FE', border: '1px solid rgba(164,97,216,0.2)' }}>
                      <div className="text-[10px] font-semibold text-tp-violet-700 mb-1">Pre-consult prep</div>
                      <div className="text-[11px] text-tp-violet-800 mb-1.5">Symptom intake ready · Dr. Rao · 4 patients</div>
                      <div className="flex flex-col gap-1">
                        {['Symptoms collected', 'Triaged', 'Notes shared with doctor'].map((step) => (
                          <div key={step} className="flex items-center gap-1 text-[10px] text-tp-violet-700">
                            <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating overlay */}
              <div className="absolute bottom-[-16px] left-6 z-10 bg-white border border-tp-slate-200 rounded-[14px] p-2.5 px-3.5 shadow-tp-md flex gap-2.5 items-center">
                <span className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 grid place-items-center text-sm flex-shrink-0">●</span>
                <div>
                  <div className="font-display font-semibold text-[13px] text-tp-slate-900">Front desk on autopilot</div>
                  <div className="text-[11px] text-tp-slate-500">staff focuses on patients in the room</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-24" aria-label="Customer testimonial">
        <div className="max-w-[840px] mx-auto px-6">
          <TestimonialCard
            quote="Amaya surfaces things I would have caught eventually — but now I catch them in the room. It's changed how I consult."
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
