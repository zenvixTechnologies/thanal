import type { CopyType, Lang } from '@/lib/copy'

interface StoriesSectionProps {
  t: CopyType
  lang: Lang
}

export function StoriesSection({ t, lang }: StoriesSectionProps) {
  return (
    <section className="section stories-section">
      <div className="section-label">
        <span>{t.storiesLabel}</span>
        <span className="line" />
      </div>
      <div className="section-heading-row">
        <h2>
          {t.storiesTitle.split('\n').map((l, i) => (
            <span key={l}>
              {l}
              {i === 0 && <br />}
            </span>
          ))}
        </h2>
        <p>{t.storiesIntro}</p>
      </div>
      <div className="stories-grid">
        <article className="story-feature">
          <div className="story-image" />
          <span>{t.storySoon}</span>
          <h3>{lang === 'ml' ? 'ഒരു പുതിയ അധ്യായം എഴുതപ്പെടുന്നു.' : 'A new chapter is being written.'}</h3>
        </article>
        <article className="story-note">
          <span className="quote-mark">“</span>
          <p>
            {lang === 'ml'
              ? 'മാറ്റം ഞങ്ങൾ എത്തിച്ചുനൽകുന്ന ഒന്നല്ല. നമുക്ക് ഒരുമിച്ച് ഇടം ഒരുക്കുന്ന ഒന്നാണ്.'
              : 'Change is not something we deliver. It is something we make room for—together.'}
          </p>
          <span>{lang === 'ml' ? '— STEP കൂട്ടായ്മ' : '— The STEP circle'}</span>
        </article>
      </div>
    </section>
  )
}
