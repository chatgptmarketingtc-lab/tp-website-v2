import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import TrustBar from '@/components/TrustBar'
import CTABand from '@/components/CTABand'
import StatementBand from '@/components/StatementBand'
import TestimonialCard from '@/components/TestimonialCard'
import {
  LanguagesIcon, LayersIcon, BadgeCheckIcon, SmartphoneIcon,
  StethoscopeIcon, Building2Icon,
} from '@/components/icons'

export const metadata: Metadata = {
  title: 'TatvaPractice — AI-First EMR for Indian Doctors and Hospitals',
  description: 'Less typing. More treating. The AI-first EMR built for Indian OPD reality. ABDM-certified, 9 Indian languages, trusted by 10,000+ doctors.',
  alternates: { canonical: 'https://tatvapractice.com/' },
  openGraph: {
    title: 'TatvaPractice — Less typing. More treating.',
    description: 'The AI-first EMR built for Indian OPD reality.',
    type: 'website',
    url: 'https://tatvapractice.com/',
  },
  twitter: { title: 'TatvaPractice — Less typing. More treating.', description: 'The AI-first EMR built for Indian OPD reality.' },
}

const TESTIMONIALS = [
  {
    quote: "TatvaPractice has cut our prescription time by 70%. The VoiceRx feature alone has transformed how we manage OPD.",
    name: "Dr. Rajesh Patel",
    role: "Cardiologist · HeartCare Clinic, Ahmedabad",
    initials: "RP",
  },
  {
    quote: "We moved 3 clinics to TatvaPractice in under a week. The onboarding was seamless and the team is incredibly responsive.",
    name: "Dr. Priya Sharma",
    role: "Clinic Director · Wellness First, Mumbai",
    initials: "PS",
  },
  {
    quote: "The DDx Engine has been a game-changer for my residents. It helps them think through differentials more systematically.",
    name: "Dr. Anand Kumar",
    role: "HOD Medicine · City General Hospital, Delhi",
    initials: "AK",
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO SPLIT ── */}
      <section className="py-24 pt-[72px]" aria-labelledby="hero-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid gap-16 items-center hero-grid" style={{ gridTemplateColumns: '1.1fr 0.9fr' }}>
            {/* Left copy */}
            <div>
              <span className="tp-eyebrow">AI-First EMR for India</span>
              <h1
                id="hero-heading"
                className="font-display font-extrabold text-tp-slate-900 mt-[18px] mb-5"
                style={{ fontSize: 'clamp(40px,5.6vw,56px)', lineHeight: 1.14, letterSpacing: '-0.03em' }}
              >
                Less typing.<br />More treating.
              </h1>
              <p className="text-[20px] leading-8 text-tp-slate-600 max-w-[560px]">
                The AI-first EMR built for Indian OPD reality. Document faster, work smarter, stay focused on the patient.
              </p>
              <div className="flex gap-3 flex-wrap mt-7">
                <Link href="https://health.tatvacare.in/login" className="btn btn-solid btn-l">
                  Start Free Trial <span className="arr">→</span>
                </Link>
                <Link href="/contact" className="btn btn-outline btn-l">Book a Demo</Link>
              </div>
              <p className="text-[13px] text-tp-slate-500 mt-[22px]">
                Trusted by <strong className="text-tp-slate-800">10,000+</strong> doctors ·{' '}
                <strong className="text-tp-slate-800">12 lakh+</strong> digital Rx ·{' '}
                <strong className="text-tp-slate-800">200+</strong> cities · ABDM-certified
              </p>
            </div>

            {/* Right — product UI mock */}
            <div className="relative">
              <div
                className="ph ph-aspect-4-3"
                data-placeholder="ui-screenshot"
                data-replace-with="VoiceRx active session — left sidebar showing patient queue, main panel showing live transcription with structured Rx forming on the right"
              >
                {/* Mock chrome */}
                <div className="absolute inset-0 grid bg-white" style={{ gridTemplateColumns: '140px 1fr' }}>
                  {/* Sidebar */}
                  <div className="bg-tp-blue-900 text-white p-[18px] px-3.5">
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
                  <div className="p-[18px] px-5 flex flex-col gap-3.5">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-display font-bold text-tp-slate-900 text-sm">Mr. Suresh Kumar · 42y · M</div>
                        <div className="text-[13px] text-tp-slate-500">Hypertension follow-up · OPD #08 · 11:24 AM</div>
                      </div>
                      <span className="badge badge-violet">● VoiceRx live</span>
                    </div>
                    <div className="bg-tp-blue-50 border border-dashed border-tp-blue-200 rounded-xl p-3 text-[11px] text-tp-slate-700 font-display">
                      &ldquo;BP 138 by 88, continue Telma 40 once daily, add Atorvastatin 10 mg HS, lipid panel 4 weeks…&rdquo;
                    </div>
                    <div className="border border-tp-slate-200 rounded-xl p-3 text-[11px]">
                      <div className="font-display font-bold text-tp-slate-900 mb-1.5">Structured Rx</div>
                      <div className="grid text-tp-slate-600" style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '6px' }}>
                        <span>Telma 40</span><span>1 OD</span><span>30 days</span>
                        <span className="badge badge-success" style={{ height: '20px', padding: '0 6px', fontSize: '10px' }}>safe</span>
                        <span>Atorvastatin 10</span><span>1 HS</span><span>30 days</span>
                        <span className="badge badge-success" style={{ height: '20px', padding: '0 6px', fontSize: '10px' }}>safe</span>
                      </div>
                    </div>
                    <div className="flex gap-2 justify-end">
                      <button className="btn btn-outline btn-s">Edit</button>
                      <button className="btn btn-solid btn-s">Send to patient</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute left-[-18px] bottom-6 bg-white border border-tp-slate-200 rounded-[14px] p-2.5 px-3.5 shadow-tp-md flex gap-2.5 items-center">
                <span className="w-7 h-7 rounded-full bg-tp-violet-50 text-tp-violet-700 grid place-items-center text-sm flex-shrink-0">●</span>
                <div>
                  <div className="font-display font-semibold text-[13px] text-tp-slate-900">Rx ready in 28s</div>
                  <div className="text-[13px] text-tp-slate-500">Hindi-English · auto-validated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <TrustBar />

      {/* ── PROBLEM CALLOUT ── */}
      <section className="py-24 bg-tp-slate-100" aria-labelledby="problem-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid gap-16 items-center md:grid-cols-2">
            <div>
              <span className="tp-eyebrow">The reality</span>
              <h2 id="problem-heading" className="font-display font-bold text-tp-slate-900 mt-3.5 mb-[18px]" style={{ fontSize: 'clamp(36px,4.6vw,48px)', lineHeight: 1.17, letterSpacing: '-0.02em' }}>
                The average specialist in India spends{' '}
                <span className="text-tp-blue-600">2+ hours a day</span> on documentation.
              </h2>
              <p className="text-[18px] leading-7 text-tp-slate-600">
                That&apos;s 10 hours a week not spent on patients. TatvaPractice gives that time back — by replacing 5 disconnected tools with one connected workflow built for OPD reality.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card">
                <div className="stat-num">2+ hrs</div>
                <div className="stat-lbl mt-2">a day spent on documentation by the average Indian specialist</div>
                <div className="text-[13px] text-tp-slate-500 mt-3.5">Source: TatvaCare clinic study, 2024</div>
              </div>
              <div className="card-blue">
                <div className="stat-num text-tp-blue-700">38% ↓</div>
                <div className="stat-lbl mt-2 text-tp-blue-800">drop in documentation time after switching to TatvaPractice</div>
                <div className="text-[13px] text-tp-blue-700 mt-3.5">Across 800+ clinics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE SPOTLIGHT 1 — VoiceRx ── */}
      <section className="py-24" aria-labelledby="voicerx-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid gap-16 items-center md:grid-cols-2">
            <div>
              <span className="badge badge-violet">AI · VoiceRx</span>
              <h2 id="voicerx-heading" className="font-display font-bold text-tp-slate-900 mt-3.5 mb-3.5" style={{ fontSize: '36px', lineHeight: '44px', letterSpacing: '-0.02em' }}>
                Speak. We&apos;ll write the prescription.
              </h2>
              <p className="text-[18px] leading-7 text-tp-slate-600">
                VoiceRx structures medical voice notes into clean, audit-ready prescriptions in 30 seconds. In 9 Indian languages, including Hindi-English mixed.
              </p>
              <ul className="checks mt-4">
                <li>9 Indian languages (Hindi, Gujarati, Tamil, Marathi, Bengali, Telugu, Kannada, Punjabi, English)</li>
                <li>Drug interaction alerts on the fly</li>
                <li>Specialty-aware structure (BD, TDS, OD, SOS, HS handled)</li>
                <li>Audit-ready Rx in 30 seconds</li>
              </ul>
              <Link href="/product/voicerx" className="btn-link mt-4 inline-flex">Learn more about VoiceRx <span className="arr">→</span></Link>
            </div>
            {/* VoiceRx mock */}
            <div className="ph ph-aspect-16-10" data-placeholder="ui-screenshot" data-replace-with="VoiceRx — split view: live waveform + transcription on left, structured prescription form on right with drug-interaction badges">
              <div className="absolute inset-6 grid gap-3.5" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div className="bg-white border border-tp-slate-200 rounded-[14px] p-3.5 flex flex-col gap-2.5">
                  <div className="flex justify-between items-center">
                    <span className="badge badge-violet">● Recording 0:42</span>
                    <span className="text-[13px] text-tp-slate-500">हिं · EN</span>
                  </div>
                  <div className="flex items-end gap-[3px] h-[60px]">
                    {[30,60,80,50,90,40,70,55,85,35,65,75,45,60].map((h, i) => (
                      <span key={i} className="w-[3px] rounded-sm" style={{ background: `var(--tw-gradient-from, #8E8DE8)`, height: `${h}%`,
                        backgroundColor: i % 4 === 0 ? '#8E8DE8' : i % 4 === 1 ? '#6C6BDE' : i % 4 === 2 ? '#4B4AD5' : '#3C3BB5'
                      }} />
                    ))}
                  </div>
                  <div className="text-[11px] text-tp-slate-700 leading-relaxed font-display">&ldquo;Patient ko diabetes type 2, Metformin 500 BD…&rdquo;</div>
                </div>
                <div className="bg-white border border-tp-slate-200 rounded-[14px] p-3.5">
                  <div className="font-display font-bold text-[12px] text-tp-slate-900 mb-2.5">Rx · auto-structured</div>
                  <div className="text-[11px] text-tp-slate-700 flex flex-col gap-2">
                    <div className="flex justify-between border-b border-tp-slate-100 pb-1.5">
                      <span><b>Metformin 500</b></span>
                      <span className="badge badge-blue" style={{ height: '20px', padding: '0 6px', fontSize: '10px' }}>1 BD</span>
                    </div>
                    <div className="flex justify-between border-b border-tp-slate-100 pb-1.5">
                      <span><b>Glimepiride 1</b></span>
                      <span className="badge badge-blue" style={{ height: '20px', padding: '0 6px', fontSize: '10px' }}>1 OD</span>
                    </div>
                    <div className="flex justify-between text-tp-error">
                      <span>⚠ check w/ Atorva</span>
                      <span className="text-[10px]">interaction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE SPOTLIGHT 2 — SmartSync ── */}
      <section className="py-24 bg-tp-slate-100" aria-labelledby="smartsync-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid gap-16 items-center md:grid-cols-2">
            {/* SmartSync stylized card */}
            <div className="relative pb-6">
              <div className="rounded-tp-hero border border-tp-slate-200 bg-white shadow-tp-lg overflow-hidden p-5">
                {/* Header row */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="font-display font-bold text-tp-slate-900 text-sm">Sunita Mehta · 45F</div>
                    <div className="text-[11px] text-tp-slate-500">Diabetes review · SmartSync capture</div>
                  </div>
                  <span className="badge badge-violet">● SmartSync · live</span>
                </div>
                {/* Two-panel split — stacks on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Left: handwritten Rx */}
                  <div className="rounded-[14px] p-4 flex flex-col gap-2.5" style={{ background: '#FFFBEB', border: '1px solid #FDE68A' }}>
                    <div className="text-[10px] font-semibold text-amber-700 uppercase tracking-wide">Handwritten Rx</div>
                    <div className="text-[12px] leading-relaxed text-tp-slate-700 flex flex-col gap-0.5" style={{ fontFamily: 'cursive' }}>
                      <span>Pt: Sunita Mehta 45F</span>
                      <span>Dx: T2DM + HTN</span>
                      <span>R/ Metformin 500mg BD × 30d</span>
                      <span>&nbsp;&nbsp;&nbsp;Telma 40 OD × 30d</span>
                      <span>FBS, HbA1c — 4 wks</span>
                    </div>
                    {/* Scan progress */}
                    <div className="mt-1 flex items-center gap-2">
                      <div className="flex-1 h-1 rounded-full bg-tp-blue-100 overflow-hidden">
                        <div className="h-full bg-tp-blue-500 rounded-full" style={{ width: '78%' }} />
                      </div>
                      <span className="text-[10px] text-tp-blue-600 font-medium whitespace-nowrap">Scanning…</span>
                    </div>
                  </div>
                  {/* Right: digitized Rx */}
                  <div className="bg-white border border-tp-slate-200 rounded-[14px] p-4 flex flex-col gap-2.5">
                    <div className="text-[10px] font-semibold text-tp-slate-500 uppercase tracking-wide">Digitized Rx</div>
                    <div>
                      <div className="text-[10px] text-tp-slate-400 mb-1">Symptoms</div>
                      <div className="flex gap-1 flex-wrap">
                        <span className="badge badge-blue" style={{ height: '20px', padding: '0 7px', fontSize: '10px' }}>Fatigue</span>
                        <span className="badge badge-blue" style={{ height: '20px', padding: '0 7px', fontSize: '10px' }}>Thirst ↑</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-tp-slate-400 mb-0.5">Diagnosis</div>
                      <div className="text-[11px] font-semibold text-tp-slate-900">T2DM · Hypertension</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-tp-slate-400 mb-1.5">Medication</div>
                      <div className="grid text-[11px]" style={{ gridTemplateColumns: '1fr auto auto', gap: '5px 6px' }}>
                        <span className="font-semibold text-tp-slate-900">Metformin 500</span>
                        <span className="text-tp-slate-500">BD · 30d</span>
                        <span className="badge badge-success" style={{ height: '18px', padding: '0 5px', fontSize: '10px' }}>✓</span>
                        <span className="font-semibold text-tp-slate-900">Telma 40</span>
                        <span className="text-tp-slate-500">OD · 30d</span>
                        <span className="badge badge-success" style={{ height: '18px', padding: '0 5px', fontSize: '10px' }}>✓</span>
                      </div>
                    </div>
                    <div className="flex gap-2 justify-end mt-auto pt-1">
                      <button className="btn btn-outline btn-s">Edit</button>
                      <button className="btn btn-solid btn-s">Save Rx</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-[-16px] left-6 z-10 bg-white border border-tp-slate-200 rounded-[14px] p-2.5 px-3.5 shadow-tp-md flex gap-2.5 items-center">
                <span className="w-7 h-7 rounded-full bg-tp-blue-50 text-tp-blue-600 grid place-items-center text-sm flex-shrink-0">↑</span>
                <div>
                  <div className="font-display font-semibold text-[13px] text-tp-slate-900">Synced in 2.1s</div>
                  <div className="text-[11px] text-tp-slate-500">offline-ready</div>
                </div>
              </div>
            </div>
            <div>
              <span className="badge badge-violet">AI · SmartSync</span>
              <h2 id="smartsync-heading" className="font-display font-bold text-tp-slate-900 mt-3.5 mb-3.5" style={{ fontSize: '36px', lineHeight: '44px', letterSpacing: '-0.02em' }}>
                Write naturally. Save digitally.
              </h2>
              <p className="text-[18px] leading-7 text-tp-slate-600">
                Use a digital pen the way you always have. SmartSync turns your handwriting into a structured Rx in real time — with zero learning curve.
              </p>
              <ul className="checks mt-4">
                <li>Use a digital pen the way you always have</li>
                <li>Works offline at camps and rural OPD</li>
                <li>Multi-branch sync with conflict resolution</li>
                <li>No learning curve — write like you wrote yesterday</li>
              </ul>
              <Link href="/product/smartsync" className="btn-link mt-4 inline-flex">Learn more about SmartSync <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE SPOTLIGHT 3 — AI Agents ── */}
      <section className="py-24" aria-labelledby="agents-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid gap-16 items-center md:grid-cols-2">
            <div>
              <span className="badge badge-violet">AI · Agents</span>
              <h2 id="agents-heading" className="font-display font-bold text-tp-slate-900 mt-3.5 mb-3.5" style={{ fontSize: '36px', lineHeight: '44px', letterSpacing: '-0.02em' }}>
                Your clinical co-pilot, plus a virtual front desk.
              </h2>
              <p className="text-[18px] leading-7 text-tp-slate-600">
                Amaya is your doctor&apos;s AI agent — DDx, drug-interaction alerts, SOAP notes, and lab interpretation. Mira is your patient&apos;s agent — scheduling, reminders, and WhatsApp comms.
              </p>
              <ul className="checks mt-4">
                <li>DDx engine grounded in Indian clinical protocols</li>
                <li>Real-time drug interaction checks across all prescribed meds</li>
                <li>Auto-structured SOAP notes from voice or ambient capture</li>
                <li>Front-desk reminders, WhatsApp confirmations, queue updates</li>
              </ul>
              <Link href="/product/ai-agents" className="btn-link mt-4 inline-flex">Meet the agents <span className="arr">→</span></Link>
            </div>
            {/* Amaya stylized card */}
            <div className="relative pb-6">
              <div className="rounded-tp-hero border border-tp-slate-200 shadow-tp-lg overflow-hidden flex">
                {/* Sidebar — identical primitive to VoiceRx hero, hidden on mobile */}
                <div className="hidden sm:flex flex-col flex-shrink-0 bg-tp-blue-900 text-white p-[18px] px-3.5" style={{ width: '130px' }}>
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
                  {/* Patient header */}
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <div className="font-display font-bold text-tp-slate-900 text-sm">Mrs. Anita Sharma · 38y · F</div>
                      <div className="text-[11px] text-tp-slate-500">Diabetes review · OPD #12 · 11:42 AM</div>
                    </div>
                    <span className="badge badge-violet flex-shrink-0">● Amaya · ready</span>
                  </div>
                  {/* Symptom chips */}
                  <div className="flex gap-1.5 flex-wrap">
                    <span className="badge badge-blue" style={{ height: '22px', fontSize: '11px', padding: '0 9px' }}>Fatigue</span>
                    <span className="badge badge-blue" style={{ height: '22px', fontSize: '11px', padding: '0 9px' }}>Frequent urination</span>
                    <span className="badge badge-blue" style={{ height: '22px', fontSize: '11px', padding: '0 9px' }}>Blurred vision</span>
                  </div>
                  {/* DDx suggestion */}
                  <div className="bg-tp-blue-50 border border-dashed border-tp-blue-200 rounded-xl p-3">
                    <div className="text-[10px] font-semibold text-tp-blue-700 uppercase tracking-wide mb-1.5">DDx suggestion</div>
                    <div className="text-[11px] text-tp-blue-800 leading-relaxed font-display">Consider HbA1c trend — values rising despite current regimen. SGLT2 candidate if eGFR &gt; 45.</div>
                  </div>
                  {/* Drug interaction warning */}
                  <div className="rounded-xl p-3" style={{ background: '#FFFBEB', border: '1px solid #FDE68A' }}>
                    <div className="text-[10px] font-semibold text-amber-700 uppercase tracking-wide mb-1.5">Drug interaction</div>
                    <div className="text-[11px] text-amber-800 leading-relaxed">Glimepiride + Metformin — monitor for hypoglycaemia</div>
                  </div>
                  {/* Action row */}
                  <div className="flex gap-2 justify-end mt-auto pt-1">
                    <button className="btn btn-outline btn-s">View history</button>
                    <button className="btn btn-solid btn-s">Accept DDx</button>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-[-16px] left-6 z-10 bg-white border border-tp-slate-200 rounded-[14px] p-2.5 px-3.5 shadow-tp-md flex gap-2.5 items-center">
                <span className="w-7 h-7 rounded-full bg-tp-violet-50 text-tp-violet-700 grid place-items-center text-sm flex-shrink-0">●</span>
                <div>
                  <div className="font-display font-semibold text-[13px] text-tp-slate-900">DDx generated in 1.4s</div>
                  <div className="text-[11px] text-tp-slate-500">clinical co-pilot · active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE GRID — Built for Indian OPD ── */}
      <section className="py-24 bg-tp-slate-100" aria-labelledby="india-opd-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="tp-eyebrow">Built for Indian OPD reality</span>
            <h2 id="india-opd-heading" className="font-display font-bold text-tp-slate-900 mt-3.5" style={{ fontSize: '36px', lineHeight: '44px', letterSpacing: '-0.02em' }}>
              Designed around how Indian clinics actually run.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: LanguagesIcon, title: '9 Indian languages', desc: 'Hindi, Gujarati, Tamil, Marathi, Bengali, Telugu, Kannada, Punjabi, English — including mixed code-switching.' },
              { Icon: LayersIcon,    title: '25+ specialties',    desc: 'From paediatrics to ortho, with specialty-aware Rx templates and ICD-10/SNOMED tagging.' },
              { Icon: BadgeCheckIcon, title: 'ABDM-certified',   desc: 'Native ABHA creation, health record linking, consent-based sharing. NHA-approved.' },
              { Icon: SmartphoneIcon, title: 'Mobile-first',     desc: 'Works on the phone you already carry. Offline-first for camps, low-connectivity OPD, and home visits.' },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="card">
                <div className="w-10 h-10 rounded-[10px] bg-tp-blue-50 text-tp-blue-600 grid place-items-center mb-3.5">
                  <Icon size={22} />
                </div>
                <h4 className="font-display font-semibold text-[20px] leading-7 text-tp-slate-900">{title}</h4>
                <p className="text-sm text-tp-slate-600 mt-1.5">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATEMENT BAND ── */}
      <StatementBand>
        <p
          className="font-display font-bold"
          style={{ fontSize: 'clamp(24px,3vw,40px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
        >
          10,000+ doctors. 12 lakh+ digital prescriptions. 200+ Indian cities.
          <span className="block mt-[14px]">We didn&apos;t get here by accident.</span>
        </p>
      </StatementBand>

      {/* ── ICP SPLIT BLOCK ── */}
      <section className="py-24" aria-labelledby="icp-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="tp-eyebrow">Built for your scale</span>
            <h2 id="icp-heading" className="font-display font-bold text-tp-slate-900 mt-3.5" style={{ fontSize: '36px', lineHeight: '44px', letterSpacing: '-0.02em' }}>
              Whatever you run, we run it with you.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {/* Card 1 — Clinics */}
            <div className="card flex flex-col gap-4 p-9" style={{ border: '2px solid #4B4AD5' }}>
              <div className="flex justify-between items-start">
                <div>
                  <span className="badge badge-blue">Most popular</span>
                  <h3 className="font-display font-bold text-tp-slate-900 mt-2.5" style={{ fontSize: '30px', lineHeight: '38px', letterSpacing: '-0.01em' }}>
                    For solo specialists &amp; clinics
                  </h3>
                </div>
                <span className="w-12 h-12 rounded-xl bg-tp-blue-50 text-tp-blue-700 grid place-items-center flex-shrink-0">
                  <StethoscopeIcon size={28} />
                </span>
              </div>
              <p className="text-[16px] leading-6 text-tp-slate-700">
                Start in under 2 minutes. AI Rx, billing, queues, and patient comms — all in one workflow.
              </p>
              <ul className="checks m-0">
                <li>VoiceRx, SmartSync, SnapRx — all included</li>
                <li>Appointments, queue, WhatsApp reminders</li>
                <li>GST billing, lab integration, telehealth</li>
                <li>Earn back via DHIS government incentives</li>
              </ul>
              <Link href="https://health.tatvacare.in/login" className="btn btn-solid btn-l mt-auto self-start">
                Start Free Trial <span className="arr">→</span>
              </Link>
            </div>
            {/* Card 2 — Hospitals */}
            <div className="card-soft flex flex-col gap-4 p-9">
              <div className="flex justify-between items-start">
                <div>
                  <span className="badge" style={{ background: '#fff', border: '1px solid #E2E2EA', color: '#454551' }}>Enterprise-ready</span>
                  <h3 className="font-display font-bold text-tp-slate-900 mt-2.5" style={{ fontSize: '30px', lineHeight: '38px', letterSpacing: '-0.01em' }}>
                    For hospitals &amp; multi-location
                  </h3>
                </div>
                <span className="w-12 h-12 rounded-xl bg-tp-violet-50 text-tp-violet-700 grid place-items-center flex-shrink-0">
                  <Building2Icon size={28} />
                </span>
              </div>
              <p className="text-[16px] leading-6 text-tp-slate-700">
                Multi-department, multi-location, ABDM-compliant. Built for hospitals running 500+ OPD a day.
              </p>
              <ul className="checks m-0">
                <li>OPD, IPD, pharmacy, lab — all integrated</li>
                <li>Role-based access across locations</li>
                <li>Centralised reporting + dedicated SLA</li>
                <li>On-site onboarding + integration team</li>
              </ul>
              <Link href="/contact" className="btn btn-solid btn-l mt-auto self-start">
                Book a Demo <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-tp-slate-100" aria-labelledby="testimonials-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="tp-eyebrow">From the OPD floor</span>
            <h2 id="testimonials-heading" className="font-display font-bold text-tp-slate-900 mt-3.5" style={{ fontSize: '36px', lineHeight: '44px', letterSpacing: '-0.02em' }}>
              What doctors who&apos;ve made the switch say.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── STAT STRIP ── */}
      <section className="py-16" aria-label="Outcome statistics">
        <div className="max-w-wrap mx-auto px-6">
          <div className="bg-tp-blue-50 rounded-tp-hero p-12 grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: '22%', lbl: 'productivity ↑' },
              { num: '38%', lbl: 'documentation time ↓' },
              { num: '12%', lbl: 'OPD throughput ↑' },
              { num: '16%', lbl: 'patient retention ↑' },
            ].map(({ num, lbl }) => (
              <div key={lbl} className="flex flex-col items-center gap-2">
                <div className="stat-num">{num}</div>
                <div className="stat-lbl">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DHIS EARNINGS CALLOUT ── */}
      <section className="py-24" aria-labelledby="dhis-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div
            className="rounded-tp-hero p-12 grid gap-8 items-center md:grid-cols-[1fr_auto]"
            style={{ background: 'linear-gradient(135deg, #FFFBEB, #FFF6D6)', border: '1px solid #FDE68A' }}
          >
            <div>
              <span className="badge badge-amber">● DHIS · Government scheme</span>
              <h3 id="dhis-heading" className="font-display font-bold text-tp-slate-900 mt-3 mb-2.5" style={{ fontSize: '30px', lineHeight: '38px', letterSpacing: '-0.01em' }}>
                Earn through the DHIS scheme.
              </h3>
              <p className="text-[18px] leading-7 text-tp-slate-700 max-w-[640px]">
                The government pays Indian doctors for every consultation digitised through an NHA-approved EMR. TatvaPractice is NHA-approved and ABDM-certified — your subscription often pays for itself.
              </p>
            </div>
            <Link href="/resources/dhis-scheme" className="btn btn-solid btn-l whitespace-nowrap">
              Learn how DHIS works <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <CTABand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "TatvaPractice",
            "url": "https://tatvapractice.com",
            "description": "AI-first EMR for Indian doctors and hospitals",
            "logo": "https://tatvapractice.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-99740-42363",
              "contactType": "sales",
              "availableLanguage": ["English", "Hindi"]
            },
            "sameAs": ["https://tatvapractice.com"]
          })
        }}
      />
    </>
  )
}
