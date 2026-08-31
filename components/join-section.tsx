import { ArrowUpRight } from 'lucide-react'
import type { CopyType, Lang } from '@/lib/copy'

interface JoinSectionProps {
  t: CopyType
  lang: Lang
}

export function JoinSection({ t, lang }: JoinSectionProps) {
  return (
    <section id="join" className="join-section">
      <div>
        <p className="eyebrow light">
          <span />
          {lang === 'ml' ? 'STEP / കൂട്ടായ്മ' : 'STEP / Community'}
        </p>
        <h2>{t.joinTitle}</h2>
        <p>{t.joinBody}</p>
      </div>
      <a className="button button-light" href="#contact">
        {t.join}
        <ArrowUpRight />
      </a>
    </section>
  )
}
