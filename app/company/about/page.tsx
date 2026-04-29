import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import CTABand from '@/components/CTABand'
import { LinkedinIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: "About — We're building the EMR India deserves | TatvaPractice",
  description:
    'We are building the EMR India deserves. TatvaPractice is part of TatvaCare — a healthcare technology company solving India care delivery gaps end-to-end.',
  alternates: {
    canonical: 'https://tatvapractice.com/company/about',
  },
}

const leaders = [
  { name: 'Manoj Balaji', role: 'CEO', initials: 'MB', linkedin: 'https://www.linkedin.com/in/manoj-balaji-8415136/' },
  { name: 'Javed Khan', role: 'CTO', initials: 'JK', linkedin: 'https://www.linkedin.com/in/javed-khan-931b6aa/' },
  { name: 'Siddharth Rajagopal', role: 'Head of Product', initials: 'SR', linkedin: 'https://www.linkedin.com/in/sid1691/' },
  { name: 'Abhishek Verma', role: 'Head of Business', initials: 'AV', linkedin: 'https://www.linkedin.com/in/abhishekverma15/' },
  { name: 'Russell Mascarenhas', role: 'Head of Marketing', initials: 'RM', linkedin: 'https://www.linkedin.com/in/russellmascarenhas/' },
  { name: 'Dr. Mihir Gharia', role: 'Head of Medical Affairs', initials: 'MG', linkedin: 'https://www.linkedin.com/in/dr-mihir-gharia-24960617/' },
  { name: 'Somraj Keshori', role: 'Head of Operations', initials: 'SK', linkedin: 'https://www.linkedin.com/in/somraj-keshori-123104a/' },
  { name: 'Dharmesh Ratanghayra', role: 'Head of Finance', initials: 'DR', linkedin: 'https://www.linkedin.com/in/dharmesh-ratanghayra-97945416/' },
  { name: 'Nutan Mishra', role: 'Head of Human Resources', initials: 'NM', linkedin: 'https://www.linkedin.com/in/nutan-pathak-a2381323/' },
]

const directors = [
  { name: 'Mr. Madhav Kulkarni', initials: 'MK', linkedin: 'https://www.linkedin.com/in/madhav-s-kulkarni-b286b4123/' },
  { name: 'Mr. Manubhai Patel', initials: 'MP', linkedin: 'https://www.linkedin.com/in/patel-manubhai-51420b62/' },
]

const values = [
  { title: 'Patient-first', desc: 'Every product decision begins and ends with patient outcomes.' },
  { title: 'AI-native', desc: 'AI is not an add-on. It is the foundation. Workflows are built around it.' },
  { title: 'India-built', desc: 'Designed for Indian healthcare realities — multi-language, ABDM, GST, every clinic size.' },
  { title: 'Data-secure', desc: 'End-to-end encryption, role-based access, full regulatory compliance.' },
]

const suite = [
  { name: 'TatvaPractice', desc: 'AI-first EMR for Indian doctors and hospitals.' },
  { name: 'MedEco', desc: 'Healthcare ecosystem for pharma and life sciences.' },
  { name: 'PillUp', desc: 'Patient adherence + chronic care management.' },
  { name: 'Visit Health', desc: 'Insurance + outpatient benefits for employees.' },
]

const investors = [
  'Sequoia India',
  'Nexus',
  'Elevation',
  'Omidyar Network',
  'HCare',
  '3one4 Capital',
]

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

      {/* Leadership */}
      <section className="bg-white py-24" aria-labelledby="leadership-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[760px] mx-auto mb-12">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>Leadership @ TatvaCare</span>
            <h2
              id="leadership-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{ fontSize: 'clamp(28px,3.6vw,48px)', lineHeight: 1.17, letterSpacing: '-0.02em' }}
            >
              The team building the EMR India deserves.
            </h2>
            <p className="text-tp-slate-600 mt-3.5" style={{ fontSize: '18px', lineHeight: '28px' }}>
              Engineers, clinicians, and operators who have spent careers fixing how Indian healthcare actually works.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders.map((leader) => (
              <article key={leader.name} className="leader-card">
                <div
                  className="leader-photo"
                  data-placeholder="team-photo"
                  data-replace-with={`${leader.name} — professional headshot`}
                >
                  <span>{leader.initials}</span>
                </div>
                <div className="leader-meta">
                  <h4 className="font-display font-semibold text-[20px] leading-7 text-tp-slate-900">
                    {leader.name}
                  </h4>
                  <p className="leader-role">{leader.role}</p>
                  <a
                    className="leader-link"
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon size={16} /> LinkedIn
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="bg-tp-slate-100 py-16" aria-labelledby="directors-heading">
        <div className="max-w-wrap mx-auto px-6" style={{ maxWidth: '880px' }}>
          <div className="text-center mb-8">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>Board</span>
            <h3
              id="directors-heading"
              className="font-display font-bold text-tp-slate-900 mt-2.5"
              style={{ fontSize: 'clamp(24px,3vw,40px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
            >
              Directors
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[680px] mx-auto">
            {directors.map((dir) => (
              <article
                key={dir.name}
                className="flex items-center gap-4 bg-white border border-tp-slate-200 rounded-[16px] p-[18px]"
              >
                <div
                  className="leader-photo"
                  style={{ width: '88px', height: '88px', minWidth: '88px', borderRadius: '14px', fontSize: '24px' }}
                  data-placeholder="team-photo"
                  data-replace-with={`${dir.name} — professional headshot`}
                >
                  <span>{dir.initials}</span>
                </div>
                <div className="leader-meta">
                  <h4 className="font-display font-semibold text-[18px] leading-6 text-tp-slate-900">
                    {dir.name}
                  </h4>
                  <p className="leader-role">Director</p>
                  <a
                    className="leader-link"
                    href={dir.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon size={16} /> LinkedIn
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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

      {/* Values */}
      <section className="bg-tp-slate-100 py-24" aria-labelledby="values-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>Our values</span>
            <h2
              id="values-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{ fontSize: 'clamp(28px,3.6vw,48px)', lineHeight: 1.17, letterSpacing: '-0.02em' }}
            >
              What we believe.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => (
              <div key={v.title} className="card">
                <h4 className="font-display font-semibold text-[20px] leading-7 text-tp-slate-900">{v.title}</h4>
                <p className="text-sm text-tp-slate-600 mt-1.5 leading-5">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TatvaCare Suite */}
      <section className="bg-white py-24" aria-labelledby="suite-heading">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>The TatvaCare suite</span>
            <h2
              id="suite-heading"
              className="font-display font-bold text-tp-slate-900 mt-3.5"
              style={{ fontSize: 'clamp(28px,3.6vw,48px)', lineHeight: 1.17, letterSpacing: '-0.02em' }}
            >
              One company. Four products. End-to-end care.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {suite.map((product) => (
              <div key={product.name} className="card">
                <div className="font-display font-extrabold text-[18px] text-tp-blue-700 mb-2">
                  {product.name}
                </div>
                <p className="text-sm text-tp-slate-600 leading-5">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors */}
      <section className="bg-tp-slate-100 py-24 text-center" aria-labelledby="investors-heading">
        <div className="max-w-wrap mx-auto px-6">
          <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>Investors &amp; advisors</span>
          <h2
            id="investors-heading"
            className="font-display font-bold text-tp-slate-900 mt-3.5"
            style={{ fontSize: 'clamp(28px,3.6vw,48px)', lineHeight: 1.17, letterSpacing: '-0.02em' }}
          >
            Backed by the people who back Indian healthcare.
          </h2>
          <div className="flex flex-wrap gap-8 justify-center mt-8 opacity-60 hover:opacity-100 transition-opacity duration-200">
            {investors.map((name) => (
              <span
                key={name}
                className="investor-ph"
                data-replace-with={`${name} logo`}
              >
                {name}
              </span>
            ))}
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
            </div>
            <Link href="#" className="btn btn-solid btn-l whitespace-nowrap">
              See open roles <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
