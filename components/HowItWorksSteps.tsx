interface Step {
  title: string
  description: string
}

interface HowItWorksStepsProps {
  steps: Step[]
  cols?: number
}

export default function HowItWorksSteps({ steps, cols = 4 }: HowItWorksStepsProps) {
  const colClass = cols === 3 ? 'md:grid-cols-3' : cols === 6 ? 'md:grid-cols-3 lg:grid-cols-6' : 'md:grid-cols-4'
  return (
    <div className={`grid gap-4 ${colClass}`}>
      {steps.map((step, i) => (
        <div
          key={i}
          className="relative p-6 bg-white border border-tp-slate-200 rounded-2xl"
        >
          <div className="step-n">0{i + 1}</div>
          <h4 className="font-display font-semibold text-[20px] leading-7 text-tp-slate-900 mt-2 mb-1.5">{step.title}</h4>
          <p className="text-sm text-tp-slate-600 leading-5">{step.description}</p>
        </div>
      ))}
    </div>
  )
}
