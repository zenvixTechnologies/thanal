import { Check } from 'lucide-react'
import type { CopyType } from '@/lib/copy'

interface TrustSectionProps {
  t: CopyType
}

export function TrustSection({ t }: TrustSectionProps) {
  return (
    <section className="section trust-section">
      <div className="section-label">
        <span>{t.trustLabel}</span>
        <span className="line" />
      </div>
      <h2>
        {t.trustTitle.split('\n').map((l, i) => (
          <span key={l}>
            {l}
            {i === 0 && <br />}
          </span>
        ))}
      </h2>
      <div className="trust-grid">
        {t.trustCards.map(([title, body]) => (
          <article key={title}>
            <Check />
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
