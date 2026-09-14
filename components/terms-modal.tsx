'use client'

import { useEffect } from 'react'
import { CheckCircle2, FileText, ShieldCheck, X } from 'lucide-react'
import type { CopyType } from '@/lib/copy'

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
  t: CopyType
}

export function TermsModal({ isOpen, onClose, t }: TermsModalProps) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="terms-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
    >
      <div className="terms-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="terms-header">
          <div className="terms-header-top">
            <div className="terms-badge">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t.termsLabel}</span>
            </div>
            <button
              type="button"
              className="terms-close-btn"
              onClick={onClose}
              aria-label="Close Terms & Conditions Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <h2 id="terms-modal-title" className="terms-title">
            {t.termsTitle}
          </h2>
          <p className="terms-subtitle">{t.termsSubtitle}</p>
          <div className="terms-date">{t.termsLastUpdated}</div>
        </div>

        {/* Content Body */}
        <div className="terms-body">
          {t.termsSections.map((section, sIdx) => (
            <div key={sIdx} className="terms-section-card">
              <div className="terms-section-header">
                <FileText className="terms-section-icon" />
                <h3>{section.title}</h3>
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

        {/* Footer Actions */}
        <div className="terms-footer">
          <button type="button" className="terms-accept-btn" onClick={onClose}>
            <CheckCircle2 className="w-4 h-4" />
            <span>{t.termsAccept}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
