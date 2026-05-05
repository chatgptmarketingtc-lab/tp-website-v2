import Link from 'next/link'
import Image from 'next/image'
import {
  ShieldCheckIcon, BadgeCheckIcon, UserCheckIcon, LockIcon, FileCheck2Icon, GlobeIcon,
} from './icons'

const COMPLIANCE_ITEMS = [
  { Icon: ShieldCheckIcon, label: 'NHA-Approved' },
  { Icon: BadgeCheckIcon,  label: 'ABDM-Certified' },
  { Icon: UserCheckIcon,   label: 'ABHA-Compliant' },
  { Icon: LockIcon,        label: 'ISO 27001' },
  { Icon: FileCheck2Icon,  label: 'DPDPA-Compliant' },
  { Icon: GlobeIcon,       label: 'HIPAA-Aligned' },
]

export default function SiteFooter() {
  return (
    <footer className="bg-tp-slate-900 text-tp-slate-300 pt-20 pb-8 overflow-x-hidden">
      <div className="max-w-wrap mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-x-8 gap-y-10 pb-12 border-b border-[#2C2C35]">
          {/* Brand column */}
          <div>
            <Link href="/" aria-label="TatvaPractice home">
              <Image
                src="/brand/tatvapractice-logo-white.png"
                alt="TatvaPractice"
                width={3023}
                height={664}
                className="h-6 w-auto"
              />
            </Link>
            <p className="mt-3.5 text-[#9CA3AF] text-sm leading-[22px] max-w-[320px]">
              The AI-first EMR built for Indian OPD reality. Less typing. More treating.
            </p>
            {/* Compliance pills */}
            <div className="flex flex-wrap gap-2 mt-4 max-w-[360px]">
              {COMPLIANCE_ITEMS.map(({ Icon, label }) => (
                <span
                  key={label}
                  className="compliance-sm flex items-center gap-1.5"
                >
                  <Icon size={14} className="text-[#B5B4F2]" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Features links */}
          <div>
            <h5 className="text-white text-sm font-semibold mb-3.5">Features</h5>
            <ul className="list-none m-0 p-0 text-sm flex flex-col">
              {[
                { href: '/features/voicerx',   label: 'VoiceRx' },
                { href: '/features/smartsync',  label: 'SmartSync' },
                { href: '/features/snaprx',     label: 'SnapRx' },
                { href: '/features/ai-agents',  label: 'AI Agents' },
                { href: '/features/emr',        label: 'Core EMR' },
                { href: '/features',            label: 'Overview' },
              ].map(({ href, label }) => (
                <li key={href} className="py-1.5">
                  <Link href={href} className="text-tp-slate-300 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions links */}
          <div>
            <h5 className="text-white text-sm font-semibold mb-3.5">Solutions</h5>
            <ul className="list-none m-0 p-0 text-sm flex flex-col">
              {[
                { href: '/solutions/clinics',   label: 'For Clinics' },
                { href: '/solutions/hospitals',  label: 'For Hospitals' },
              ].map(({ href, label }) => (
                <li key={href} className="py-1.5">
                  <Link href={href} className="text-tp-slate-300 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About links */}
          <div>
            <h5 className="text-white text-sm font-semibold mb-3.5">About</h5>
            <ul className="list-none m-0 p-0 text-sm flex flex-col">
              {[
                { href: '/company/about', label: 'About' },
                { href: '/pricing',       label: 'Pricing' },
                { href: '/security',      label: 'Data Security' },
                { href: '/contact',       label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href} className="py-1.5">
                  <Link href={href} className="text-tp-slate-300 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h5 className="text-white text-sm font-semibold mb-3.5">Resources</h5>
            <ul className="list-none m-0 p-0 text-sm flex flex-col">
              {[
                { href: '/resources/dhis-scheme', label: 'DHIS scheme' },
                { href: '/resources/abdm-abha',   label: 'ABDM & ABHA' },
                { href: '#',                      label: 'Brochure (PDF)' },
              ].map(({ href, label }) => (
                <li key={label} className="py-1.5">
                  <Link href={href} className="text-tp-slate-300 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer foot */}
        <div className="pt-6 flex justify-between flex-wrap gap-3 text-[12px] text-tp-slate-500 font-body">
          <span>© 2026 TatvaPractice. A TatvaCare company.</span>
          <span><a href="mailto:support@tatvacare.in" className="hover:text-tp-slate-300 transition-colors">support@tatvacare.in</a> · +91 99740 42363</span>
        </div>
      </div>
    </footer>
  )
}
