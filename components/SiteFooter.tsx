import Link from 'next/link'
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
    <footer className="bg-tp-slate-900 text-tp-slate-300 pt-20 pb-8">
      <div className="max-w-wrap mx-auto px-6">
        <div
          className="grid gap-12 pb-12 border-b border-[#2C2C35]"
          style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr' }}
        >
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-[22px] leading-none text-white no-underline">
              <span className="w-7 h-7 rounded-lg bg-tp-blue-500 text-white grid place-items-center font-display font-extrabold text-base flex-shrink-0">T</span>
              TatvaPractice
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

          {/* Product links */}
          <div>
            <h5 className="text-white text-sm font-semibold mb-3.5">Product</h5>
            <ul className="list-none m-0 p-0 text-sm flex flex-col">
              {[
                { href: '/product/voicerx',   label: 'VoiceRx' },
                { href: '/product/smartsync',  label: 'SmartSync' },
                { href: '/product/snaprx',     label: 'SnapRx' },
                { href: '/product/ai-agents',  label: 'AI Agents' },
                { href: '/product/emr',        label: 'Core EMR' },
                { href: '/product',            label: 'Overview' },
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

          {/* Company links */}
          <div>
            <h5 className="text-white text-sm font-semibold mb-3.5">Company</h5>
            <ul className="list-none m-0 p-0 text-sm flex flex-col">
              {[
                { href: '/company/about', label: 'About' },
                { href: '/pricing',       label: 'Pricing' },
                { href: '/security',      label: 'Security' },
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
          <span>hello@tatvapractice.com · +91 99740 42363</span>
          <span>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            {' · '}
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            {' · '}
            <Link href="#" className="hover:text-white transition-colors">DPA</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
