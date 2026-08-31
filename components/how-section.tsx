import type { CopyType } from '@/lib/copy'

interface HowSectionProps {
  t: CopyType
}

export function HowSection({ t }: HowSectionProps) {
  return (
    <section id="how" className="section how-section">
      <div className="section-label">
        <span>{t.howLabel}</span>
        <span className="line" />
      </div>
      <h2>
        {t.howTitle.split('\n').map((l, i) => (
          <span key={l}>
            {l}
            {i === 0 && <br />}
          </span>
        ))}
      </h2>
      <div className="timeline">
        {t.steps.map(([title, body], i) => (
          <div className="timeline-step" key={title}>
            <div className="timeline-top">
              <span>0{i + 1}</span>
              <div className="timeline-node">{i + 1}</div>
            </div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
