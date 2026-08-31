import { ArrowUpRight, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react'
import type { CopyType } from '@/lib/copy'

interface ActivitiesSectionProps {
  t: CopyType
}

export function ActivitiesSection({ t }: ActivitiesSectionProps) {
  return (
    <section id="activities" className="section activities-section">
      <div className="section-label">
        <span>{t.activitiesLabel}</span>
        <span className="line" />
      </div>
      <div className="section-heading-row">
        <h2>
          {t.activitiesTitle.split('\n').map((l, i) => (
            <span key={l}>
              {l}
              {i === 0 && <br />}
            </span>
          ))}
        </h2>
        <p>{t.activityIntro}</p>
      </div>
      <div className="activities-grid">
        {t.activities.map(([num, title, body]) => (
          <article className="activity-card" key={num}>
            <span className="activity-number">{num}</span>
            <div className="activity-icon">
              {num === '01' ? <HeartHandshake /> : num === '04' ? <ShieldCheck /> : <Sparkles />}
            </div>
            <h3>{title}</h3>
            <p>{body}</p>
            <ArrowUpRight className="card-arrow" />
          </article>
        ))}
      </div>
    </section>
  )
}
