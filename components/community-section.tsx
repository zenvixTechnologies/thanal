import { ArrowUpRight, MessageCircle } from 'lucide-react'
import type { CopyType } from '@/lib/copy'

interface CommunitySectionProps {
  t: CopyType
}

export function CommunitySection({ t }: CommunitySectionProps) {
  return (
    <section className="community-section">
      <div>
        <MessageCircle />
        <h2>{t.whatsapp}</h2>
        <p>{t.communityIntro}</p>
      </div>
      <a className="button button-light" href="#contact">
        {t.openWhatsapp}
        <ArrowUpRight />
      </a>
    </section>
  )
}
