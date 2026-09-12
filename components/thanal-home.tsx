'use client'

import { useEffect, useState } from 'react'
import { copy, type Lang } from '@/lib/copy'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ActivitiesSection } from '@/components/activities-section'
import { StepSection } from '@/components/step-section'
import { WhySection } from '@/components/why-section'
import { ImpactSection } from '@/components/impact-section'
import { HowSection } from '@/components/how-section'
import { TrustSection } from '@/components/trust-section'
import { StoriesSection } from '@/components/stories-section'
import { GallerySection } from '@/components/gallery-section'
import { JoinSection } from '@/components/join-section'
import { ObjectivesSection } from '@/components/objectives-section'
import { CommunitySection } from '@/components/community-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export function ThanalHome() {
  const [lang, setLang] = useState<Lang>('ml')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  const t = copy[lang]

  useEffect(() => {
    const navTargets = ['about', 'activities', 'step', 'impact', 'gallery', 'contact']

    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      const scrollPosition = window.scrollY + 220
      let current = ''

      for (let i = navTargets.length - 1; i >= 0; i--) {
        const elem = document.getElementById(navTargets[i])
        if (elem && elem.offsetTop <= scrollPosition) {
          current = navTargets[i]
          break
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'ml' ? 'ml' : 'en'
  }, [lang])

  const toggleLang = () => setLang(lang === 'en' ? 'ml' : 'en')

  return (
    <div className={lang === 'ml' ? 'font-malayalam' : ''}>
      <Header
        t={t}
        lang={lang}
        scrolled={scrolled}
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        toggleLang={toggleLang}
      />
      <main id="top">
        <HeroSection t={t} lang={lang} />
        <AboutSection t={t} />
        <ActivitiesSection t={t} />
        <StepSection t={t} lang={lang} />
        <WhySection t={t} />
        <ImpactSection t={t} />
        <HowSection t={t} />
        <TrustSection t={t} />
        <StoriesSection t={t} lang={lang} />
        <GallerySection t={t} />
        <JoinSection t={t} lang={lang} />
        <ObjectivesSection t={t} />
        <CommunitySection t={t} />
        <ContactSection t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}

export default ThanalHome
