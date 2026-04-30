import Image from 'next/image'
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

const HOSPITALS = [
  { src: '/mission%20hospital.jpg',         alt: 'Mission Hospital',  width: 248,  height: 121  },
  { src: '/Apollo-Cradle-logo1.png',        alt: 'Apollo Cradle',     width: 462,  height: 218  },
  { src: '/Zydus_Hospitals_New_Logo.jpg',   alt: 'Zydus Hospitals',   width: 3301, height: 2551 },
  { src: '/ApexOrthoHosLogo1.jpg.webp',     alt: 'Apex Ortho Care',   width: 5075, height: 1800 },
  { src: '/Munshi%20hospital.png',          alt: 'Munshi Hospitals',  width: 270,  height: 129  },
]

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

        {/* Hospital logos */}
        <div className="mt-8">
          <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-tp-slate-400 mb-5">
            Trusted by hospitals across India
          </p>
          <div className="flex flex-wrap justify-around items-center gap-x-8 gap-y-6">
            {HOSPITALS.map(({ src, alt, width, height }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="h-9 sm:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
                style={{ width: 'auto' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
