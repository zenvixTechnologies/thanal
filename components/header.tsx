'use client'

import { ArrowUpRight, Globe2, Menu, X } from 'lucide-react'
import type { CopyType, Lang } from '@/lib/copy'

interface HeaderProps {
  t: CopyType
  lang: Lang
  scrolled: boolean
  activeSection: string
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  toggleLang: () => void
}

export function Header({
  t,
  lang,
  scrolled,
  activeSection,
  menuOpen,
  setMenuOpen,
  toggleLang,
}: HeaderProps) {
  const navTargets = ['about', 'activities', 'step', 'impact', 'gallery', 'contact']

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a href="#top" className="wordmark" aria-label="THANAL home">
          <img src="/images/thanal-logo.png" alt="THANAL Society Logo" className="wordmark-logo" />
          <span>
            THANAL<span className="wordmark-dot">.</span>
          </span>
        </a>
        <nav className="desktop-nav">
          {t.nav.map((n, i) => {
            const targetId = navTargets[i]
            const isActive = activeSection === targetId
            return (
              <a
                key={n}
                href={`#${targetId}`}
                className={isActive ? 'is-active' : ''}
              >
                {n}
              </a>
            )
          })}
        </nav>
        <div className="header-actions">
          <button className="language-toggle" onClick={toggleLang} aria-label="Switch language">
            <Globe2 /> {lang === 'en' ? 'മലയാളം' : 'English'}
          </button>
          <a className="header-join" href="#join">
            {t.join}
            <ArrowUpRight />
          </a>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <a href="#top" className="wordmark" onClick={() => setMenuOpen(false)}>
                <img src="/images/thanal-logo.png" alt="THANAL Logo" className="mobile-menu-logo" />
                <span>THANAL<span className="wordmark-dot">.</span></span>
              </a>
              <button
                className="mobile-menu-close"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X />
              </button>
            </div>
            
            <nav className="mobile-menu-nav">
              {t.nav.map((n, i) => {
                const targetId = navTargets[i]
                const isActive = activeSection === targetId
                return (
                  <a
                    key={n}
                    onClick={() => setMenuOpen(false)}
                    href={`#${targetId}`}
                    className={`mobile-menu-link ${isActive ? 'is-active' : ''}`}
                  >
                    <span>{n}</span>
                    <ArrowUpRight />
                  </a>
                )
              })}
            </nav>

            <div className="mobile-menu-footer">
              <button
                className="mobile-lang-btn"
                onClick={() => {
                  toggleLang()
                  setMenuOpen(false)
                }}
              >
                <Globe2 />
                <span>{lang === 'en' ? 'മലയാളത്തിലേക്ക് മാറുക (മലയാളം)' : 'Switch to English'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
