import { ArrowUpRight } from 'lucide-react'
import type { CopyType } from '@/lib/copy'

interface StepSectionProps {
  t: CopyType
}

export function StepSection({ t }: StepSectionProps) {
  return (
    <section id="step" className="step-section">
      <div className="step-photo" />
      <div className="step-copy">
        <p className="eyebrow">
          <span />
          {t.stepKicker}
        </p>
        <h2>
          {t.stepTitle.split('\n').map((l, i) => (
            <span key={l}>
              {l}
              {i === 0 && <br />}
            </span>
          ))}
        </h2>
        <p>{t.stepBody}</p>
        <a className="button button-dark" href="#how">
          {t.stepCta}
          <ArrowUpRight />
        </a>
      </div>
    </section>
  )
}
