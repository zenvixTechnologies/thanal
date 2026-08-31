import { ArrowUpRight } from 'lucide-react'
import type { CopyType } from '@/lib/copy'

interface ObjectivesSectionProps {
  t: CopyType
}

export function ObjectivesSection({ t }: ObjectivesSectionProps) {
  return (
    <section className="section objectives-section">
      <div>
        <p className="eyebrow">
          <span />
          {t.northStar}
        </p>
        <h2>{t.objectivesTitle}</h2>
      </div>
      <div className="objectives-list">
        {t.objectives.map((o, i) => (
          <div key={o}>
            <span>0{i + 1}</span>
            <h3>{o}</h3>
            <ArrowUpRight />
          </div>
        ))}
      </div>
    </section>
  )
}
