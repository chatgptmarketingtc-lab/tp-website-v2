interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  initials: string
  large?: boolean
}

export default function TestimonialCard({ quote, name, role, initials, large }: TestimonialCardProps) {
  return (
    <div className={`tcard${large ? ' items-center text-center' : ''}`}>
      <blockquote style={large ? { fontSize: '24px', lineHeight: '1.4', color: 'var(--tw-color)' } : {}}>
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className={`flex gap-3 items-center mt-auto${large ? ' justify-center' : ''}`}>
        <div
          className="ph-doc flex-shrink-0"
          style={{ width: large ? '56px' : '48px', height: large ? '56px' : '48px' }}
          data-placeholder="doctor-photo"
          aria-label={`Photo placeholder for ${name}`}
        >
          {initials}
        </div>
        <div>
          <div className="font-display font-semibold text-tp-slate-900 text-sm">{name}</div>
          <div className="text-[13px] text-tp-slate-500 mt-0.5">{role}</div>
        </div>
      </div>
    </div>
  )
}
