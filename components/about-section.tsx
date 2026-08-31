import { ArrowUpRight } from 'lucide-react'
import type { CopyType } from '@/lib/copy'

interface AboutSectionProps {
  t: CopyType
}

export function AboutSection({ t }: AboutSectionProps) {
  return (
    <section id="about" className="section about-section">
      <div className="section-label">
        <span>{t.aboutLabel}</span>
        <span className="line" />
      </div>
      <div className="about-grid">
        <div>
          <h2>
            {t.aboutTitle.split('\n').map((l, i) => (
              <span key={l}>
                {l}
                {i === 0 && <br />}
              </span>
            ))}
          </h2>
          <p className="large-copy">{t.aboutBody}</p>
          <a className="text-link" href="#activities">
            {t.history}
            <ArrowUpRight />
          </a>
        </div>
        <div className="history-card">
          <div className="history-orbit">
            <img src="/images/thanal-logo.png" alt="THANAL Official Seal" className="history-logo-img" />
          </div>
          <p>{t.historyBody}</p>
          <div className="history-line">
            <span>2004 (Reg: A 542/04)</span>
            <span />
            <span>Today</span>
          </div>
        </div>
      </div>
    </section>
  )
}
