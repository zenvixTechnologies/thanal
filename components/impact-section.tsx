import type { CopyType } from '@/lib/copy'

interface ImpactSectionProps {
  t: CopyType
}

export function ImpactSection({ t }: ImpactSectionProps) {
  return (
    <section id="impact" className="section impact-section">
      <div className="section-label">
        <span>{t.impactLabel}</span>
        <span className="line" />
      </div>
      <div className="section-heading-row">
        <h2>{t.impactTitle}</h2>
        <p>{t.impactBody}</p>
      </div>
      <div className="metrics-grid">
        {t.metrics.map(([num, title, body]) => (
          <div className="metric" key={num}>
            <span>{num}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
