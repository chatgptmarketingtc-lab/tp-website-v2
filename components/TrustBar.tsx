import {
  ShieldCheckIcon, BadgeCheckIcon, UserCheckIcon, LockIcon, FileCheck2Icon, GlobeIcon,
} from './icons'

const COMPLIANCE = [
  { Icon: ShieldCheckIcon, label: 'NHA-Approved' },
  { Icon: BadgeCheckIcon,  label: 'ABDM-Certified' },
  { Icon: UserCheckIcon,   label: 'ABHA-Compliant' },
  { Icon: LockIcon,        label: 'ISO 27001' },
  { Icon: FileCheck2Icon,  label: 'DPDPA-Compliant' },
  { Icon: GlobeIcon,       label: 'HIPAA-Aligned' },
]

const PARTNERS = ['ZYDUS', 'CLIANTHA RESEARCH', 'GUARDIAN HEALTH', 'ZYDUS WELLNESS', 'SENTISS PHARMA', 'ALIVECOR']

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-tp-slate-200" aria-label="Trust and compliance">
      <div className="max-w-wrap mx-auto px-6 py-7">
        {/* Compliance badges */}
        <div className="flex flex-wrap gap-2.5 justify-center items-center">
          {COMPLIANCE.map(({ Icon, label }) => (
            <span key={label} className="compliance">
              <Icon size={16} />
              {label}
            </span>
          ))}
        </div>

        {/* Partner logos */}
        <div className="flex flex-wrap gap-8 justify-center items-center mt-6 opacity-60 hover:opacity-100 transition-opacity duration-150">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="partner-ph"
              data-replace-with={`${name} logo`}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
