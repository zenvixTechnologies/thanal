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
      <a
        className="button button-light"
        href="https://chat.whatsapp.com/DqaKMhfLWYv51PaoGsmLkT?s=sw&p=a&mlu=4&ilr=4"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.openWhatsapp}
        <ArrowUpRight />
      </a>
    </section>
  )
}
