import type { CopyType } from '@/lib/copy'

interface WhySectionProps {
  t: CopyType
}

export function WhySection({ t }: WhySectionProps) {
  const whyTitle = t.whyLabel === 'എന്തുകൊണ്ട് STEP'
    ? 'ദാരിദ്ര്യത്തിനപ്പുറം,\nഅവസരങ്ങളുടെ വാതിൽ തുറക്കണം.'
    : t.whyLabel === 'Why STEP'
      ? 'Beyond poverty lies a door of opportunity, waiting to be opened.'
      : t.whyTitle

  return (
    <section className="section why-section">
      <div className="why-image" />
      <div className="why-copy">
        <div className="section-label">
          <span>{t.whyLabel}</span>
          <span className="line" />
        </div>
        <h2>
          {whyTitle.split('\n').map((l, i) => (
            <span key={l}>
              {l}
              {i === 0 && <br />}
            </span>
          ))}
        </h2>
        <p className="large-copy">{t.whyBody}</p>
        <div className="quote-mark">“</div>
      </div>
    </section>
  )
}
