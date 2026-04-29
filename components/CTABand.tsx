import Link from 'next/link'

interface CTABandProps {
  heading?: string
  subhead?: string
  primaryLabel?: string
  secondaryLabel?: string
}

export default function CTABand({
  heading = 'Start your free 7-day trial.',
  subhead = 'No credit card required. Get started in under 2 minutes.',
  primaryLabel = 'Start Free Trial',
  secondaryLabel = 'Book a Demo',
}: CTABandProps) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-wrap mx-auto">
        <div
          className="relative overflow-hidden rounded-tp-hero text-white py-20 px-14 text-center"
          style={{ background: 'linear-gradient(135deg, #3C3BB5, #212077)' }}
        >
          {/* Decorative overlays */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(500px 300px at 90% 0%, rgba(164,97,216,0.35), transparent 60%), radial-gradient(400px 250px at 0% 100%, rgba(75,74,213,0.35), transparent 60%)',
            }}
            aria-hidden="true"
          />
          <div className="relative z-10">
            <h2
              className="text-white font-display font-bold text-center mx-auto"
              style={{ fontSize: 'clamp(28px,3.6vw,48px)', lineHeight: 1.17, letterSpacing: '-0.02em', maxWidth: '680px' }}
            >
              {heading}
            </h2>
            <p className="text-white/85 mt-3.5 mb-7 max-w-[520px] mx-auto text-body-xl" style={{ fontSize: '20px', lineHeight: '32px' }}>
              {subhead}
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/contact" className="btn btn-on-dark-solid btn-l">
                {primaryLabel} <span className="arr">→</span>
              </Link>
              <Link href="/contact" className="btn btn-on-dark-outline btn-l">
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
