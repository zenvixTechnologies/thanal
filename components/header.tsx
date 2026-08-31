'use client'

import { ArrowUpRight, Globe2, Menu, X } from 'lucide-react'
import type { CopyType, Lang } from '@/lib/copy'

interface HeaderProps {
  t: CopyType
  lang: Lang
  scrolled: boolean
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  toggleLang: () => void
}

export function Header({ t, lang, scrolled, menuOpen, setMenuOpen, toggleLang }: HeaderProps) {
  const navTargets = ['#about', '#activities', '#step', '#impact', '#gallery', '#contact']

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a href="#top" className="wordmark" aria-label="THANAL home">
          <img src="/images/thanal-logo.png" alt="THANAL Charitable Society Logo" className="wordmark-logo" />
          <span>
            THANAL<span className="wordmark-dot">.</span>
          </span>
        </a>
        <nav className="desktop-nav">
          {t.nav.map((n, i) => (
            <a key={n} href={navTargets[i]}>
              {n}
            </a>
          ))}
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
        <div className="mobile-menu">
          {t.nav.map((n, i) => (
            <a key={n} onClick={() => setMenuOpen(false)} href={navTargets[i]}>
              {n}
              <ArrowUpRight />
            </a>
          ))}
          <button onClick={toggleLang}>
            <Globe2 /> {lang === 'en' ? 'മലയാളം' : 'English'}
          </button>
        </div>
      )}
    </>
  )
}
