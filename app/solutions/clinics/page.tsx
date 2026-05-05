import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import CTABand from '@/components/CTABand'
import HowItWorksSteps from '@/components/HowItWorksSteps'
import TestimonialCard from '@/components/TestimonialCard'
import {
  CalendarCheckIcon,
  MicIcon,
  FolderHeartIcon,
  ReceiptIcon,
  MicroscopeIcon,
  MessageSquareIcon,
} from '@/components/icons'
import EyebrowPill from '@/components/EyebrowPill'

export const metadata: Metadata = {
  title: 'For Clinics — Go digital from day one',
  description: 'TatvaPractice for clinics and solo practitioners. AI prescriptions, appointments, billing, lab integration, and patient records — without the complexity.',
  alternates: { canonical: 'https://tatvapractice.com/solutions/clinics' },
  openGraph: {
    title: 'For Clinics & Solo Practitioners | TatvaPractice',
    description: 'AI prescriptions, appointments, billing, lab integration. Everything a clinic needs — without the complexity.',
    type: 'website',
    url: 'https://tatvapractice.com/solutions/clinics',
  },
  twitter: {
    title: 'TatvaPractice for Clinics',
    description: 'Go digital from day one. AI prescriptions, appointments, billing — built for Indian clinics.',
  },
}

const features = [
  {
    Icon: CalendarCheckIcon,
    title: 'Smart Scheduling',
    desc: 'Online booking, OPD queue, automated reminders — before a patient even walks in.',
    iconBg: 'bg-tp-blue-50',
    iconColor: 'text-tp-blue-600',
  },
  {
    Icon: MicIcon,
    title: 'AI Prescriptions',
    desc: 'VoiceRx, SmartSync, SnapRx — any input mode. Rx in 30 seconds.',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-700',
  },
  {
    Icon: FolderHeartIcon,
    title: 'Patient Records',
    desc: 'Complete history, visits, Rx, labs, vitals — always within reach.',
    iconBg: 'bg-tp-blue-50',
    iconColor: 'text-tp-blue-600',
  },
  {
    Icon: ReceiptIcon,
    title: 'Billing & Payments',
    desc: 'GST invoices, multi-payment support, daily reconciliation.',
    iconBg: 'bg-tp-blue-50',
    iconColor: 'text-tp-blue-600',
  },
  {
    Icon: MicroscopeIcon,
    title: 'Lab Integration',
    desc: 'Order labs, receive results, flag abnormals — without leaving the consult.',
    iconBg: 'bg-tp-blue-50',
    iconColor: 'text-tp-blue-600',
  },
  {
    Icon: MessageSquareIcon,
    title: 'Patient Engagement',
    desc: 'WhatsApp reminders, follow-up prompts, patient satisfaction.',
    iconBg: 'bg-tp-blue-50',
    iconColor: 'text-tp-blue-600',
  },
]

const howItWorksSteps = [
  {
    title: 'Sign up',
    description: 'Create your account in 60 seconds. No installation, no IT team.',
  },
  {
    title: 'Setup in 30 seconds',
    description: 'Pick your specialty, configure your Rx templates, invite your staff.',
  },
  {
    title: 'Onboarding call',
    description: 'A real product specialist walks you through your first OPD session.',
  },
  {
    title: 'Go live',
    description: 'Start seeing patients. We\'re on call for the first 30 days.',
  },
]

const testimonials = [
  {
    quote: 'TatvaPractice has cut our prescription time by 70%. VoiceRx is nothing short of magic for a busy specialist.',
    name: 'Dr. Rajesh Patel',
    role: 'Cardiologist · Apollo Clinic, Ahmedabad',
    initials: 'RP',
  },
  {
    quote: 'We moved 3 clinics to TatvaPractice in under a week. Onboarding was seamless and the team was with us every step.',
    name: 'Dr. Priya Sharma',
    role: 'Clinic Director · Wellness First, Mumbai',
    initials: 'PS',
  },
  {
    quote: 'The DDx Engine has been a game-changer. It helps me think through differentials more systematically every consult.',
    name: 'Dr. Anand Kumar',
    role: 'HOD Medicine · City General Hospital, Delhi',
    initials: 'AK',
  },
]

export default function ClinicsPage() {
  return (
    <>
      {/* Section 1 — Hero Split */}
      <section
        className="bg-white py-24 pt-[72px]"
        aria-labelledby="clinics-hero-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <div
            className="grid items-center gap-16"
            style={{ gridTemplateColumns: '1.1fr 0.9fr' }}
          >
            {/* Left copy */}
            <div>
              <EyebrowPill>For Clinics</EyebrowPill>
              <h1
                id="clinics-hero-heading"
                className="font-display font-bold text-tp-slate-900 mt-[18px] mb-5"
                style={{
                  fontSize: 'clamp(36px,4.6vw,64px)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                }}
              >
                Go digital from day one.
              </h1>
              <p
                className="text-tp-slate-600"
                style={{ fontSize: '20px', lineHeight: '32px', maxWidth: '560px' }}
              >
                Whether you&rsquo;re a solo practitioner or running a small clinic,
                TatvaPractice gives you everything you need to manage patients,
                prescriptions, and billing — without the complexity.
              </p>
              <div className="flex gap-3 flex-wrap mt-7">
                <Link href="https://health.tatvacare.in/login" className="btn btn-solid btn-l">
                  Start Free Trial <span className="arr">→</span>
                </Link>
                <Link href="/contact" className="btn btn-outline btn-l">
                  Watch Demo
                </Link>
              </div>
              <p className="text-[13px] text-tp-slate-500 mt-[22px]">
                Join <strong className="text-tp-slate-800">10,000+</strong> doctors ·{' '}
                ABDM-certified · Start in under <strong className="text-tp-slate-800">2 minutes</strong>
              </p>
            </div>

            {/* Right image */}
            <div className="rounded-tp-hero overflow-hidden shadow-tp-lg">
              <Image
                src="/assets/mocks/appointments-queue.png"
                alt="TatvaPractice front desk appointments queue"
                width={720}
                height={540}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — TrustBar */}
      <TrustBar />

      {/* Section 3 — Feature Grid 6-up */}
      <section
        className="bg-tp-slate-100 py-24"
        aria-labelledby="clinics-features-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <EyebrowPill>Everything a clinic needs</EyebrowPill>
            <h2
              id="clinics-features-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(28px,3.6vw,48px)',
                lineHeight: 1.17,
                letterSpacing: '-0.02em',
              }}
            >
              Six things that matter most to a clinic. Nailed.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {features.map(({ Icon, title, desc, iconBg, iconColor }) => (
              <article key={title} className="card">
                <div
                  className={`w-10 h-10 rounded-[10px] ${iconBg} ${iconColor} grid place-items-center mb-3.5`}
                  aria-hidden="true"
                >
                  <Icon size={22} />
                </div>
                <h4 className="font-display font-semibold text-tp-slate-900 text-[20px]">
                  {title}
                </h4>
                <p className="text-sm text-tp-slate-600 mt-1.5 leading-5">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — How It Works */}
      <section
        className="bg-white py-24"
        aria-labelledby="clinics-how-it-works-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <EyebrowPill>Up and running in under a week</EyebrowPill>
            <h2
              id="clinics-how-it-works-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(28px,3.6vw,48px)',
                lineHeight: 1.17,
                letterSpacing: '-0.02em',
              }}
            >
              Four steps. Less than a week.
            </h2>
          </div>
          <HowItWorksSteps steps={howItWorksSteps} />
        </div>
      </section>

      {/* Section 5 — Pricing Teaser */}
      <section
        className="bg-tp-slate-100 py-24"
        aria-labelledby="clinics-pricing-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-8">
            <EyebrowPill>Pricing</EyebrowPill>
            <h2
              id="clinics-pricing-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(28px,3.6vw,48px)',
                lineHeight: 1.17,
                letterSpacing: '-0.02em',
              }}
            >
              Plans built for clinics.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Solo */}
            <div className="card p-9 flex flex-col gap-3.5 border-tp-blue-500" style={{ borderColor: 'var(--tp-blue-200)' }}>
              <div>
                <span className="badge badge-blue">Most popular for specialists</span>
                <h3
                  className="font-display font-bold text-tp-slate-900 mt-2.5"
                  style={{ fontSize: 'clamp(22px,2.4vw,30px)' }}
                >
                  Solo
                </h3>
              </div>
              <div>
                <span
                  className="font-display font-extrabold text-tp-slate-900"
                  style={{ fontSize: '42px', lineHeight: 1 }}
                >
                  Custom
                </span>
                <div className="text-[13px] text-tp-slate-500 mt-1">Pricing scales with your practice</div>
              </div>
              <ul className="checks">
                <li>AI Rx modes</li>
                <li>Appointments</li>
                <li>Basic billing</li>
                <li>Patient records</li>
              </ul>
              <Link href="/contact" className="btn btn-outline btn-l mt-auto">
                Talk to sales <span className="arr">→</span>
              </Link>
            </div>

            {/* Clinic */}
            <div
              className="card p-9 flex flex-col gap-3.5 relative"
              style={{ border: '2px solid var(--tp-blue-500)', boxShadow: 'var(--shadow-tp-lg)' }}
            >
              <span
                className="absolute -top-3.5 left-8 bg-tp-blue-500 text-white px-3.5 py-1.5 rounded-tp-pill text-[11px] font-display font-bold tracking-[0.04em] uppercase"
              >
                Best value
              </span>
              <div>
                <h3
                  className="font-display font-bold text-tp-slate-900 mt-1.5"
                  style={{ fontSize: 'clamp(22px,2.4vw,30px)' }}
                >
                  Clinic
                </h3>
              </div>
              <div>
                <span
                  className="font-display font-extrabold text-tp-slate-900"
                  style={{ fontSize: '42px', lineHeight: 1 }}
                >
                  Custom
                </span>
                <div className="text-[13px] text-tp-slate-500 mt-1">Tailored to your clinic size</div>
              </div>
              <ul className="checks">
                <li>Everything in Solo, plus</li>
                <li>Multi-doctor roles</li>
                <li>OPD queue</li>
                <li>Lab integration</li>
              </ul>
              <Link href="/contact" className="btn btn-solid btn-l mt-auto">
                Talk to sales <span className="arr">→</span>
              </Link>
            </div>
          </div>

          <div className="text-center mt-7">
            <Link href="/pricing" className="btn-link">
              View full pricing including Hospital plans <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6 — Testimonials */}
      <section
        className="bg-white py-24"
        aria-labelledby="clinics-testimonials-heading"
      >
        <div className="max-w-wrap mx-auto px-6">
          <h2
            id="clinics-testimonials-heading"
            className="font-display font-bold text-tp-slate-900 text-center mb-10"
            style={{
              fontSize: 'clamp(28px,3.6vw,48px)',
              lineHeight: 1.17,
              letterSpacing: '-0.02em',
            }}
          >
            What clinic doctors say.
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <TestimonialCard key={t.initials} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — CTA Band */}
      <CTABand primaryLabel="Start Free Trial" secondaryLabel="Book a Demo" />
    </>
  )
}
