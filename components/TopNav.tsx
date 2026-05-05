'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  MicIcon, PenLineIcon, CameraIcon, BrainIcon, FilePenIcon, GridIcon,
  StethoscopeIcon, Building2Icon,
  ChevronDownIcon, MenuIcon, XIcon,
} from './icons'

type NavDropItem = {
  href: string
  icon: React.FC<{ size?: number }>
  title: string
  desc: string
}

const PRODUCT_ITEMS: NavDropItem[] = [
  { href: '/product/voicerx',    icon: MicIcon,      title: 'VoiceRx',       desc: 'Speak. We\'ll write the prescription.' },
  { href: '/product/smartsync',  icon: PenLineIcon,  title: 'SmartSync',     desc: 'Write naturally. Save digitally.' },
  { href: '/product/snaprx',     icon: CameraIcon,   title: 'SnapRx',        desc: 'Photograph any Rx. We digitise it.' },
  { href: '/product/ai-agents',  icon: BrainIcon,    title: 'AI Agents',     desc: 'Amaya, Mira · two AI agents.' },
  { href: '/product/emr',        icon: FilePenIcon,  title: 'Core EMR',      desc: 'Records, queue, billing, telehealth.' },
  { href: '/product',            icon: GridIcon,     title: 'Full overview', desc: 'Every module, one workflow.' },
]

const SOLUTIONS_ITEMS: NavDropItem[] = [
  { href: '/solutions/clinics',   icon: StethoscopeIcon, title: 'For Clinics',   desc: 'Solo & multi-doctor clinics.' },
  { href: '/solutions/hospitals', icon: Building2Icon,   title: 'For Hospitals', desc: 'Multi-location & enterprise.' },
]

function Dropdown({ items, cols = 1 }: { items: NavDropItem[]; cols?: number }) {
  return (
    <div
      className="absolute top-[calc(100%-4px)] left-[-16px] bg-white border border-tp-slate-200 rounded-2xl shadow-tp-lg p-2.5 z-[60]"
      style={{ minWidth: cols === 2 ? '560px' : '340px', display: 'grid', gridTemplateColumns: cols === 2 ? '1fr 1fr' : '1fr', gap: '4px' }}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="grid items-start gap-3 p-3 px-4 rounded-lg hover:bg-tp-slate-50 transition-colors"
          style={{ gridTemplateColumns: '32px 1fr' }}
        >
          <span className="w-8 h-8 rounded-lg bg-tp-blue-50 text-tp-blue-700 grid place-items-center flex-shrink-0">
            <item.icon size={18} />
          </span>
          <span className="flex flex-col gap-1 min-w-0">
            <span className="font-display font-semibold text-sm text-tp-slate-900 leading-tight">{item.title}</span>
            <span className="font-body font-normal text-[13px] text-tp-slate-600 leading-snug">{item.desc}</span>
          </span>
        </Link>
      ))}
    </div>
  )
}

export default function TopNav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      {/* overflow-x-clip intentionally omitted: it creates a containing block for
          position:fixed children in Chrome, collapsing the mobile drawer to 0 height */}
      <nav
        className="sticky top-0 z-50 bg-white/92 backdrop-blur-[12px] border-b border-tp-slate-200"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-wrap mx-auto w-full px-6 flex items-center flex-nowrap gap-4 h-[72px]">
          {/* Logo */}
          <Link href="/" aria-label="TatvaPractice home" className="flex-shrink-0">
            <Image
              src="/brand/tatvapractice-logo-transparent.png"
              alt="TatvaPractice"
              width={3023}
              height={664}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav — visible at xl (1280px+) to ensure single-row fit */}
          <ul className="hidden xl:flex flex-nowrap items-center list-none m-0 p-0 gap-5 ml-6" role="list">
            {/* Product dropdown */}
            <li className="relative group">
              <button
                className={`flex items-center gap-1 py-2.5 text-sm font-medium transition-colors ${isActive('/product') ? 'text-tp-slate-900' : 'text-tp-slate-600 hover:text-tp-slate-900'}`}
                aria-haspopup="true"
              >
                Product
                <ChevronDownIcon size={14} className="opacity-60 transition-transform duration-150 group-hover:rotate-180" />
              </button>
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-[-4px] group-hover:translate-y-0 transition-all duration-150">
                <Dropdown items={PRODUCT_ITEMS} cols={2} />
              </div>
            </li>

            {/* Solutions dropdown */}
            <li className="relative group">
              <button
                className={`flex items-center gap-1 py-2.5 text-sm font-medium transition-colors ${isActive('/solutions') ? 'text-tp-slate-900' : 'text-tp-slate-600 hover:text-tp-slate-900'}`}
                aria-haspopup="true"
              >
                Solutions
                <ChevronDownIcon size={14} className="opacity-60 transition-transform duration-150 group-hover:rotate-180" />
              </button>
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-[-4px] group-hover:translate-y-0 transition-all duration-150">
                <Dropdown items={SOLUTIONS_ITEMS} />
              </div>
            </li>

            <li>
              <Link href="/pricing" className={`py-2.5 text-sm font-medium transition-colors ${isActive('/pricing') ? 'text-tp-slate-900' : 'text-tp-slate-600 hover:text-tp-slate-900'}`}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/security" className={`py-2.5 text-sm font-medium transition-colors ${isActive('/security') ? 'text-tp-slate-900' : 'text-tp-slate-600 hover:text-tp-slate-900'}`}>
                Security
              </Link>
            </li>
          </ul>

          {/* CTA group */}
          <div className="ml-auto hidden xl:flex flex-nowrap flex-shrink-0 gap-2 items-center">
            <Link href="https://health.tatvacare.in/login" className="btn btn-ghost btn-m">Sign in</Link>
            <Link href="/contact" className="btn btn-outline btn-m">Book a Demo</Link>
          </div>

          {/* Hamburger */}
          <button
            className="ml-auto xl:hidden p-2 text-tp-slate-700 hover:text-tp-slate-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer — rendered outside <nav> so position:fixed resolves to the
          viewport, not the nav element (overflow-x-clip / backdrop-filter on the
          nav would otherwise create a containing block and collapse the drawer) */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-0 top-[72px] bg-white z-50 overflow-y-auto flex flex-col">
          <nav className="flex-1 px-6 py-6 flex flex-col gap-1">
            {/* Product section */}
            <button
              className="flex justify-between items-center py-3 text-left font-display font-semibold text-tp-slate-900"
              onClick={() => setMobileSection(mobileSection === 'product' ? null : 'product')}
            >
              Product
              <ChevronDownIcon size={16} className={`transition-transform ${mobileSection === 'product' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSection === 'product' && (
              <div className="pl-4 flex flex-col gap-1 mb-2">
                {PRODUCT_ITEMS.map((item) => (
                  <Link key={item.href} href={item.href} className="py-2 text-tp-slate-700 text-sm" onClick={() => setMobileOpen(false)}>
                    {item.title}
                  </Link>
                ))}
              </div>
            )}

            {/* Solutions section */}
            <button
              className="flex justify-between items-center py-3 text-left font-display font-semibold text-tp-slate-900"
              onClick={() => setMobileSection(mobileSection === 'solutions' ? null : 'solutions')}
            >
              Solutions
              <ChevronDownIcon size={16} className={`transition-transform ${mobileSection === 'solutions' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSection === 'solutions' && (
              <div className="pl-4 flex flex-col gap-1 mb-2">
                {SOLUTIONS_ITEMS.map((item) => (
                  <Link key={item.href} href={item.href} className="py-2 text-tp-slate-700 text-sm" onClick={() => setMobileOpen(false)}>
                    {item.title}
                  </Link>
                ))}
              </div>
            )}

            {[
              { href: '/pricing', label: 'Pricing' },
              { href: '/security', label: 'Security' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="py-3 font-display font-semibold text-tp-slate-900" onClick={() => setMobileOpen(false)}>
                {label}
              </Link>
            ))}

            <div className="mt-2 pt-4 border-t border-tp-slate-100">
              <Link href="/company/about" className="py-2 text-sm text-tp-slate-500 hover:text-tp-slate-700 transition-colors" onClick={() => setMobileOpen(false)}>
                About
              </Link>
            </div>
          </nav>

          {/* Mobile CTA bar */}
          <div className="px-6 py-6 border-t border-tp-slate-200 flex flex-col gap-3">
            <Link href="/contact" className="btn btn-solid btn-l w-full justify-center" onClick={() => setMobileOpen(false)}>
              Book a Demo
            </Link>
            <Link href="https://health.tatvacare.in/login" className="btn btn-outline btn-l w-full justify-center" onClick={() => setMobileOpen(false)}>
              Sign in
            </Link>
          </div>
        </div>
      )}

      {/* Sticky mobile CTA */}
      <Link
        href="/contact"
        className="fixed bottom-4 right-4 z-[80] btn btn-solid btn-l shadow-tp-xl xl:hidden"
      >
        Book Demo
      </Link>
    </>
  )
}
