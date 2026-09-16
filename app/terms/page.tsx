'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { copy, type Lang } from '@/lib/copy'
import { CheckCircle2, FileText, ShieldCheck } from 'lucide-react'

export default function TermsPage() {
  const [lang, setLang] = useState<Lang>('ml')
  const t = copy[lang]

  return (
    <div className={`page-wrapper ${lang === 'ml' ? 'font-malayalam' : ''}`}>
      <Header t={t} lang={lang} toggleLang={() => setLang((l) => (l === 'en' ? 'ml' : 'en'))} />

      <main className="terms-page-container">
        <div className="terms-page-hero">
          <div className="terms-badge">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{t.termsLabel}</span>
          </div>
          <h1>{t.termsTitle}</h1>
          <p className="terms-page-subtitle">{t.termsSubtitle}</p>
          <div className="terms-date">{t.termsLastUpdated}</div>
        </div>

        <div className="terms-page-body">
          {t.termsSections.map((section, sIdx) => (
            <div key={sIdx} className="terms-section-card">
              <div className="terms-section-header">
                <FileText className="terms-section-icon" />
                <h2>{section.title}</h2>
              </div>
              <ul className="terms-points-list">
                {section.points.map((pt, pIdx) => (
                  <li key={pIdx}>
                    <CheckCircle2 className="terms-check-icon" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      <Footer t={t} />
    </div>
  )
}
