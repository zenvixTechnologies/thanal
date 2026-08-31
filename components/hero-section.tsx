import { ArrowDown, ArrowUpRight } from 'lucide-react'
import type { CopyType, Lang } from '@/lib/copy'

interface HeroSectionProps {
  t: CopyType
  lang: Lang
}

export function HeroSection({ t, lang }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="hero-image" role="img" aria-label="Community volunteers gathering together" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow light">
          <span />
          {t.heroEyebrow}
        </p>
        <h1>
          {t.heroTitle.split('\n').map((line, i) => (
            <span key={line}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h1>
        <p className="hero-body">{t.heroBody}</p>
        <div className="hero-actions">
          <a className="button button-light" href="#join">
            {t.join}
            <ArrowUpRight />
          </a>
          <a className="text-link light" href="#about">
            {t.explore}
            <ArrowDown />
          </a>
        </div>
      </div>
      <div className="hero-note">
        <span>THANAL / 2026</span>
        <span>
          {lang === 'ml' ? 'കൂടുതൽ അറിയാൻ താഴേക്ക്' : 'Scroll to discover'} <ArrowDown />
        </span>
      </div>
    </section>
  )
}
