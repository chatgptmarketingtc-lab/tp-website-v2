import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import CTABand from '@/components/CTABand'
import StatementBand from '@/components/StatementBand'
import HowItWorksSteps from '@/components/HowItWorksSteps'
import TestimonialCard from '@/components/TestimonialCard'
import {
  GridIcon,
  MicIcon,
  PenLineIcon,
  CameraIcon,
  BrainIcon,
  FilePenIcon,
  CalendarCheckIcon,
  ReceiptIcon,
  BarChart3Icon,
  MessageSquareIcon,
  ShieldAlertIcon,
} from '@/components/icons'

export const metadata: Metadata = {
  title: 'Product Overview',
  description: 'VoiceRx, SmartSync, SnapRx, AI Agents, Core EMR — every tool Indian doctors need to see more patients with less effort.',
  alternates: { canonical: 'https://tatvapractice.com/features' },
  openGraph: {
    title: 'Product Overview | TatvaPractice',
    description: 'VoiceRx, SmartSync, SnapRx, AI Agents, Core EMR — every tool Indian doctors need.',
    type: 'website',
    url: 'https://tatvapractice.com/features',
  },
  twitter: {
    title: 'Product Overview | TatvaPractice',
    description: 'VoiceRx, SmartSync, SnapRx, AI Agents, Core EMR — every tool Indian doctors need.',
  },
}

const modules = [
  {
    name: 'AI Workflows',
    desc: 'Voice, handwriting, and photo AI — your choice of capture.',
    href: '/features',
    Icon: GridIcon,
  },
  {
    name: 'VoiceRx',
    desc: 'Speak prescriptions in any Indian language. AI structures them.',
    href: '/features/voicerx',
    Icon: MicIcon,
  },
  {
    name: 'SmartSync',
    desc: 'Write naturally with a digital pen. Records sync everywhere.',
    href: '/features/smartsync',
    Icon: PenLineIcon,
  },
  {
    name: 'SnapRx',
    desc: 'Photograph any Rx. Healthcare-grade OCR digitises it instantly.',
    href: '/features/snaprx',
    Icon: CameraIcon,
  },
  {
    name: 'AI Agents',
    desc: 'Amaya and Mira in one workflow.',
    href: '/features/ai-agents',
    Icon: BrainIcon,
  },
  {
    name: 'Core EMR',
    desc: 'Patient history, SOAP notes, labs, and telehealth — one view.',
    href: '/features/emr',
    Icon: FilePenIcon,
  },
  {
    name: 'Appointments & Queue',
    desc: 'OPD slots, walk-ins, live ETAs, and follow-up automation.',
    href: '/features/emr',
    Icon: CalendarCheckIcon,
  },
  {
    name: 'Billing',
    desc: 'GST invoices, packages, UPI/card payments, and reconciliation.',
    href: '/features/emr',
    Icon: ReceiptIcon,
  },
  {
    name: 'Analytics',
    desc: 'Revenue, retention, and OPD utilisation — refreshed live.',
    href: '/features/emr',
    Icon: BarChart3Icon,
  },
  {
    name: 'Integrations',
    desc: 'Lab networks, pharmacy, ABDM, and insurance in one place.',
    href: '/resources/abdm-abha',
    Icon: GridIcon,
  },
  {
    name: 'Digital Presence',
    desc: 'Clinic profile, patient portal, and WhatsApp communications.',
    href: '/solutions/clinics',
    Icon: MessageSquareIcon,
  },
  {
    name: 'Security & Compliance',
    desc: 'DPDPA, ABDM, and role-based access built in by default.',
    href: '/security',
    Icon: ShieldAlertIcon,
  },
]

const howItWorksSteps = [
  {
    title: 'Patient walks in',
    description: 'ABHA verified, history loaded automatically.',
  },
  {
    title: 'Queue managed',
    description: 'Mira handles flow, room assignments, ETAs.',
  },
  {
    title: 'Consultation begins',
    description: 'Doctor opens the session — VoiceRx, SmartSync, or SnapRx — whichever fits the workflow.',
  },
  {
    title: 'Lab order sent',
    description: 'Lab request filed from the same screen. Results flow back automatically.',
  },
  {
    title: 'Follow-up scheduled',
    description: 'WhatsApp reminder set. Care continuity ensured.',
  },
  {
    title: 'Bill generated',
    description: 'GST invoice created. Patient gets WhatsApp summary.',
  },
]

export default async function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-24 pt-20 bg-tp-slate-100 hero-spotlight text-center"
        aria-labelledby="product-hero-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
            Product overview
          </span>
          <h1
            id="product-hero-heading"
            className="font-display font-bold text-tp-slate-900 mt-[18px] mb-[18px] mx-auto"
            style={{
              fontSize: 'clamp(36px,4.6vw,64px)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              maxWidth: '820px',
            }}
          >
            Everything you need to run a modern Indian practice.
          </h1>
          <p
            className="text-tp-slate-600 mx-auto"
            style={{ fontSize: '20px', lineHeight: '32px', maxWidth: '680px' }}
          >
            20+ integrated modules. One connected workflow. Replace 5
            disconnected tools with one platform built for how Indian doctors
            actually work.
          </p>
          <div className="flex gap-3 justify-center flex-wrap mt-7">
            <Link href="https://health.tatvacare.in/login" className="btn btn-solid btn-l">
              Start Free Trial <span className="arr">→</span>
            </Link>
            <Link href="/contact" className="btn btn-outline btn-l">
              Book a Demo
            </Link>
          </div>
          {/* Panoramic dashboard mock */}
          <div
            className="ph p-5 mt-12 mx-auto"
            data-placeholder="ui-screenshot"
            data-replace-with="Panoramic TatvaPractice dashboard — left: OPD queue, centre: active consultation with VoiceRx, right: Amaya insights panel"
          >
            <div className="w-full grid gap-3" style={{ gridTemplateColumns: '220px 1fr 220px' }}>
              {/* OPD Queue panel */}
              <div className="bg-white border border-tp-slate-200 rounded-[14px] p-[14px] flex flex-col gap-2 text-left">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-display font-bold text-[12px] text-tp-slate-900">OPD Queue</span>
                  <span className="badge badge-blue" style={{ height: '18px', padding: '0 6px', fontSize: '10px' }}>14 waiting</span>
                </div>
                {[
                  { name: 'Ramesh K.', tag: 'Follow-up', wait: '2 min', active: true },
                  { name: 'Sunita M.', tag: 'New', wait: '8 min', active: false },
                  { name: 'Arjun S.', tag: 'Follow-up', wait: '15 min', active: false },
                  { name: 'Preethi N.', tag: 'New', wait: '22 min', active: false },
                ].map((p) => (
                  <div key={p.name} className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 ${p.active ? 'bg-tp-blue-50 border border-tp-blue-100' : ''}`}>
                    <div>
                      <div className="text-[11px] font-semibold text-tp-slate-900">{p.name}</div>
                      <div className="text-[10px] text-tp-slate-500">{p.tag}</div>
                    </div>
                    <span className="text-[10px] text-tp-slate-400">{p.wait}</span>
                  </div>
                ))}
              </div>

              {/* Active consultation panel */}
              <div className="bg-white border border-tp-slate-200 rounded-[14px] p-[14px] flex flex-col gap-2.5 text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display font-bold text-[13px] text-tp-slate-900">Ramesh Kumar · M · 52</div>
                    <div className="text-[10px] text-tp-slate-500">DM T2 · HTN · Last visit 6 weeks ago</div>
                  </div>
                  <span className="badge badge-violet">● VoiceRx Live · 1:14</span>
                </div>
                <div className="border border-tp-slate-100 rounded-lg p-2.5 bg-tp-slate-50 text-[11px] text-tp-slate-700 font-display leading-relaxed">
                  &ldquo;Metformin 500 BD continue karein, add Glimepiride 1 mg OD before breakfast, FBS check in 4 weeks…&rdquo;
                </div>
                <div className="grid gap-1.5" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <div className="border border-tp-slate-200 rounded-lg p-2">
                    <div className="text-[10px] text-tp-slate-500 mb-1">Structured Rx</div>
                    <div className="text-[11px] font-semibold text-tp-slate-900">Metformin 500 mg · BD</div>
                    <div className="text-[11px] font-semibold text-tp-slate-900 mt-0.5">Glimepiride 1 mg · OD</div>
                    <div className="text-[10px] text-tp-blue-700 mt-1.5">Lab: FBS, HbA1c · 4 wks</div>
                  </div>
                  <div className="border border-tp-slate-200 rounded-lg p-2">
                    <div className="text-[10px] text-tp-slate-500 mb-1">Vitals</div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-tp-slate-600">BP</span><span className="font-semibold text-tp-slate-900">138/88</span>
                    </div>
                    <div className="flex justify-between text-[11px] mt-0.5">
                      <span className="text-tp-slate-600">Wt</span><span className="font-semibold text-tp-slate-900">78 kg</span>
                    </div>
                    <div className="flex justify-between text-[11px] mt-0.5">
                      <span className="text-tp-slate-600">FBS</span><span className="font-semibold text-tp-slate-900">142 mg/dL</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Amaya insights panel */}
              <div className="bg-white border border-tp-slate-200 rounded-[14px] p-[14px] flex flex-col gap-2 text-left">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-4 h-4 rounded-md bg-tp-blue-600 text-white grid place-items-center" style={{ fontSize: '8px', fontWeight: 700 }}>AI</span>
                  <span className="font-display font-bold text-[12px] text-tp-slate-900">Amaya</span>
                </div>
                <div className="bg-tp-blue-50 border border-tp-blue-100 rounded-lg p-2">
                  <div className="text-[10px] font-semibold text-tp-blue-800 mb-1">DDx suggestion</div>
                  <div className="text-[10px] text-tp-blue-700">Uncontrolled DM T2 — consider adding SGLT2 inhibitor if eGFR &gt; 45</div>
                </div>
                <div className="bg-amber-50 border border-amber-100 rounded-lg p-2">
                  <div className="text-[10px] font-semibold text-amber-800 mb-1">Drug interaction</div>
                  <div className="text-[10px] text-amber-700">Glimepiride + Metformin — monitor for hypoglycaemia</div>
                </div>
                <div className="border border-tp-slate-100 rounded-lg p-2">
                  <div className="text-[10px] font-semibold text-tp-slate-700 mb-1">Last HbA1c</div>
                  <div className="text-[12px] font-bold text-tp-slate-900">8.4% <span className="text-[10px] text-tp-slate-400 font-normal">· 6 wks ago</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Feature Grid */}
      <section className="py-24 bg-white" aria-labelledby="modules-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-12">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              20+ modules
            </span>
            <h2
              id="modules-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(28px,3.6vw,48px)',
                lineHeight: 1.17,
                letterSpacing: '-0.02em',
              }}
            >
              One platform. Every workflow.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {modules.map(({ name, desc, href, Icon }) => (
              <article key={name} className="card rounded-[10px] flex flex-col">
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
                  {name}
                </h4>
                <p className="text-sm text-tp-slate-600 mt-1.5 leading-5 flex-1">{desc}</p>
                {href && (
                  <Link href={href} className="btn-link mt-3 text-sm">
                    Learn more →
                  </Link>
                )}
              </article>
            ))}
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
          One platform.{' '}
          <span style={{ fontSize: 'clamp(28px,3.6vw,46px)', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Twenty modules.
          </span>{' '}
          Built for how Indian doctors actually work.
        </p>
      </StatementBand>

      {/* How It Works */}
      <section
        className="bg-tp-slate-100 py-24"
        aria-labelledby="how-it-works-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
              How it works together
            </span>
            <h2
              id="how-it-works-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(24px,3vw,40px)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              From patient in to patient out — every step connected.
            </h2>
          </div>
          <HowItWorksSteps steps={howItWorksSteps} cols={3} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white" aria-label="Customer testimonials">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="We moved 3 clinics to TatvaPractice in under a week. The onboarding was seamless and the team is incredibly responsive."
              name="Dr. Priya Sharma"
              role="Clinic Director · Wellness First, Mumbai"
              initials="PS"
            />
            <TestimonialCard
              quote="TatvaPractice has cut our prescription time by 70%. The VoiceRx feature alone has transformed how we manage OPD."
              name="Dr. Anand Kumar"
              role="HOD Medicine · City General Hospital, Delhi"
              initials="AK"
            />
            <TestimonialCard
              quote="Walk-ins, queue, billing — finally one screen. My receptionist saves an hour every day."
              name="Dr. Vinay Kashyap"
              role="Family physician · Pune"
              initials="VK"
            />
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
