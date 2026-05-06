'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PhoneIcon, MailIcon, MessageCircleIcon, CheckCircleIcon, MapPinIcon } from '@/components/icons'
import EyebrowPill from '@/components/EyebrowPill'

const DESIGNATIONS = ['Doctor', 'Practice Manager', 'Hospital Admin', 'Other']
const PRACTICE_SIZES = ['Solo', '2–10 doctors', '11–50 doctors', '50+ doctors']

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      designation: (form.elements.namedItem('designation') as HTMLSelectElement).value,
      clinicName: (form.elements.namedItem('clinicName') as HTMLInputElement).value,
      city: (form.elements.namedItem('city') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      practiceSize: (form.elements.namedItem('practiceSize') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      consent: (form.elements.namedItem('consent') as HTMLInputElement).checked,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) {
        setError(json.error || 'Something went wrong. Please try again.')
      } else {
        setSuccess(true)
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact TatvaPractice',
            url: 'https://tatvapractice.com/contact',
            description: 'Talk to TatvaPractice — we respond within 1 working day.',
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-white py-24 pt-20" aria-labelledby="contact-hero-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="max-w-[560px] mb-10">
            <EyebrowPill>Contact</EyebrowPill>
            <h1
              id="contact-hero-heading"
              className="font-display font-bold text-tp-slate-900 mt-[18px] mb-[18px]"
              style={{
                fontSize: 'clamp(36px,4.6vw,64px)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
              }}
            >
              Talk to us.
            </h1>
            <p className="text-tp-slate-600" style={{ fontSize: '20px', lineHeight: '32px' }}>
              Tell us a bit about your practice and we&apos;ll get back within 1 working day.
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_420px] gap-16 items-start">
            {/* Form column */}
            <div>
              {success ? (
                <div className="card p-10 text-center">
                  <CheckCircleIcon size={48} className="mx-auto mb-4 text-tp-blue-600" />
                  <h2
                    className="font-display font-bold text-tp-slate-900 mb-2"
                    style={{ fontSize: '24px', lineHeight: '32px' }}
                  >
                    Message sent!
                  </h2>
                  <p className="text-tp-slate-600" style={{ fontSize: '18px', lineHeight: '28px' }}>
                    We&apos;ll get back to you within 1 working day. No call centre — you&apos;ll
                    talk to a real product specialist.
                  </p>
                </div>
              ) : (
                <form className="border border-gray-200 rounded-2xl p-8 bg-white" onSubmit={handleSubmit} noValidate>
                  {error && (
                    <div
                      role="alert"
                      className="mb-4 p-3 rounded-[10px] bg-red-50 border border-red-200 text-red-700 text-sm"
                    >
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                    {/* Row 1: Name + Designation */}
                    <div>
                      <label htmlFor="name" className="block mb-1.5 text-sm font-medium text-gray-700">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder="Dr. Rajesh Patel"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 bg-white text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="designation" className="block mb-1.5 text-sm font-medium text-gray-700">
                        Designation
                      </label>
                      <select
                        id="designation"
                        name="designation"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 bg-white text-gray-900 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                      >
                        {DESIGNATIONS.map((d) => (
                          <option key={d}>{d}</option>
                        ))}
                      </select>
                    </div>

                    {/* Row 2: Clinic + City */}
                    <div>
                      <label htmlFor="clinicName" className="block mb-1.5 text-sm font-medium text-gray-700">
                        Clinic / Hospital name
                      </label>
                      <input
                        id="clinicName"
                        type="text"
                        name="clinicName"
                        placeholder="HeartCare Clinic"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 bg-white text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block mb-1.5 text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        placeholder="Ahmedabad"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 bg-white text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                      />
                    </div>

                    {/* Row 3: Phone + Email */}
                    <div>
                      <label htmlFor="phone" className="block mb-1.5 text-sm font-medium text-gray-700">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 bg-white text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-1.5 text-sm font-medium text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="rajesh@heartcare.in"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 bg-white text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                      />
                    </div>

                    {/* Row 4: Practice size (full width) */}
                    <div className="md:col-span-2">
                      <label htmlFor="practiceSize" className="block mb-1.5 text-sm font-medium text-gray-700">
                        Practice size
                      </label>
                      <select
                        id="practiceSize"
                        name="practiceSize"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 bg-white text-gray-900 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                      >
                        {PRACTICE_SIZES.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Row 5: Message (full width) */}
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block mb-1.5 text-sm font-medium text-gray-700">
                        What would you like to discuss?{' '}
                        <span className="text-xs text-gray-500 font-normal ml-1.5">280 char max</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        maxLength={280}
                        placeholder="Quick context about your practice and what you are looking for…"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 bg-white text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 focus:outline-none min-h-[120px] resize-y"
                      />
                    </div>

                    {/* Row 6: Consent (full width) */}
                    <label className="md:col-span-2 flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        required
                        className="h-4 w-4 accent-indigo-600 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-600">
                        I consent to TatvaPractice contacting me about this inquiry. We will not share
                        your details with third parties.
                      </span>
                    </label>

                    {/* Row 7: Submit */}
                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        className="btn btn-solid btn-l w-auto justify-center"
                        disabled={loading}
                      >
                        {loading ? 'Sending…' : <>Send message <span className="arr">→</span></>}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-5">
              {/* Direct line */}
              <div className="card" style={{ padding: '28px' }}>
                <div className="flex items-center gap-2 mb-2 text-tp-slate-500">
                  <PhoneIcon size={18} />
                  <span className="text-sm font-medium uppercase tracking-wide">Direct line</span>
                </div>
                <p
                  className="font-display font-bold text-tp-blue-700"
                  style={{ fontSize: '22px', lineHeight: '30px' }}
                >
                  +91 99740 42363
                </p>
                <p className="text-tp-slate-500 text-sm mt-1">Mon–Sat · 9 AM – 7 PM IST</p>
              </div>

              {/* Email */}
              <div className="card" style={{ padding: '28px' }}>
                <div className="flex items-center gap-2 mb-2 text-tp-slate-500">
                  <MailIcon size={18} />
                  <span className="text-sm font-medium uppercase tracking-wide">Email</span>
                </div>
                <a
                  href="mailto:support@tatvacare.in"
                  className="font-display font-bold text-tp-blue-700 hover:underline"
                  style={{ fontSize: '18px', lineHeight: '26px' }}
                >
                  support@tatvacare.in
                </a>
              </div>

              {/* WhatsApp */}
              <div className="card" style={{ padding: '28px' }}>
                <div className="flex items-center gap-2 mb-2 text-tp-slate-500">
                  <MessageCircleIcon size={18} />
                  <span className="text-sm font-medium uppercase tracking-wide">WhatsApp</span>
                </div>
                <p className="text-tp-slate-600 text-sm mb-3">Quick questions? Tap below.</p>
                <a
                  href="https://wa.me/919974042363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-m"
                >
                  Open WhatsApp <span className="arr">→</span>
                </a>
              </div>

              {/* Response promise */}
              <div className="card-blue" style={{ padding: '28px' }}>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon size={22} className="text-tp-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3
                      className="font-display font-semibold text-tp-blue-800"
                      style={{ fontSize: '18px', lineHeight: '26px' }}
                    >
                      We respond within 1 working day.
                    </h3>
                    <p className="text-tp-blue-800 text-sm mt-1.5 leading-5">
                      No call centre. You&apos;ll talk to a real product specialist who has worked
                      with clinics like yours.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="bg-tp-slate-100 py-24" aria-labelledby="offices-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <EyebrowPill>Find us</EyebrowPill>
            <h2
              id="offices-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{
                fontSize: 'clamp(28px,3.6vw,48px)',
                lineHeight: 1.17,
                letterSpacing: '-0.02em',
              }}
            >
              Two offices. One mission.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bengaluru */}
            <article className="office-card">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-tp-blue-50 text-tp-blue-700 grid place-items-center">
                  <MapPinIcon size={18} />
                </span>
                <h4
                  className="font-display font-semibold text-tp-slate-900"
                  style={{ fontSize: '20px', lineHeight: '28px' }}
                >
                  Bengaluru
                </h4>
                <span
                  className="ml-auto badge"
                  style={{
                    background: 'var(--tp-blue-50)',
                    color: 'var(--tp-blue-700)',
                    border: '1px solid var(--tp-blue-100)',
                  }}
                >
                  HQ
                </span>
              </div>
              <p className="office-addr">
                Digicare Health Solutions Pvt. Ltd.
                <br />
                Incubex HSR27, 1500, 19th Main Rd,
                <br />
                1st Sector, HSR Layout,
                <br />
                Bengaluru, Karnataka — 560102
              </p>
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src="/offices/bengaluru-office.webp"
                  alt="TatvaPractice office in HSR Layout, Bengaluru"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
              </div>
              <a
                className="office-link"
                href="https://www.google.com/maps/place/TatvaCare/@12.9180985,77.6425344,17z/data=!3m1!5s0x3bae14842d4704c1:0xa2184b9f130125c1!4m14!1m7!3m6!1s0x3bae1532d8233067:0x6a6ac10756d3eb1b!2sTatvaCare!8m2!3d12.9180933!4d77.6451093!16s%2Fg%2F11l5vcycbx!3m5!1s0x3bae1532d8233067:0x6a6ac10756d3eb1b!8m2!3d12.9180933!4d77.6451093!16s%2Fg%2F11l5vcycbx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions →
              </a>
            </article>

            {/* Ahmedabad */}
            <article className="office-card">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-tp-blue-50 text-tp-blue-700 grid place-items-center">
                  <MapPinIcon size={18} />
                </span>
                <h4
                  className="font-display font-semibold text-tp-slate-900"
                  style={{ fontSize: '20px', lineHeight: '28px' }}
                >
                  Ahmedabad
                </h4>
              </div>
              <p className="office-addr">
                Digicare Health Solutions Pvt. Ltd.
                <br />
                4th Floor, Plot No. 115/5,
                <br />
                TP Scheme No. 51, off Ambli-Bopal Road,
                <br />
                Ahmedabad, Gujarat — 380058
              </p>
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src="/offices/ahmedabad-office.jpeg"
                  alt="TatvaPractice office in Ambli-Bopal, Ahmedabad"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
              </div>
              <a
                className="office-link"
                href="https://www.google.com/maps/place/TatvaCare/@23.0251727,72.4915297,17z/data=!3m1!5s0x395e9b15d4ef3e61:0xb976329cfa6ae499!4m14!1m7!3m6!1s0x395e9b6c189b5a8f:0x4aafe7274114abac!2sTatvaCare!8m2!3d23.0251678!4d72.4941046!16s%2Fg%2F11stjtr5nz!3m5!1s0x395e9b6c189b5a8f:0x4aafe7274114abac!8m2!3d23.0251678!4d72.4941046!16s%2Fg%2F11stjtr5nz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions →
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
