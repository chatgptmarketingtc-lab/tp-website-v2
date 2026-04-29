interface StatementBandProps {
  children: React.ReactNode
}

export default function StatementBand({ children }: StatementBandProps) {
  return (
    <section className="statement-band" aria-label="Key statement">
      <span aria-hidden="true" className="absolute top-[-160px] left-[-120px] w-[520px] h-[520px] rounded-full pointer-events-none" style={{ background: 'rgba(255,255,255,0.08)', filter: 'blur(60px)' }} />
      <span aria-hidden="true" className="absolute bottom-[-180px] right-[-140px] w-[560px] h-[560px] rounded-full pointer-events-none" style={{ background: 'rgba(255,255,255,0.08)', filter: 'blur(60px)' }} />
      <div className="relative max-w-[900px] mx-auto text-center text-white">
        {children}
      </div>
    </section>
  )
}
