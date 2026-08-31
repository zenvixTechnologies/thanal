'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import type { CopyType } from '@/lib/copy'

interface GallerySectionProps {
  t: CopyType
}

export function GallerySection({ t }: GallerySectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const items = t.galleryItems

  // Handle keyboard navigation for Lightbox modal
  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev === null || prev === 0 ? items.length - 1 : prev - 1))
      }
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev === null || prev === items.length - 1 ? 0 : prev + 1))
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedIndex, items.length])

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev === null || prev === 0 ? items.length - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev === null || prev === items.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="gallery" className="section gallery-section">
      <div className="section-label">
        <span>{t.galleryLabel}</span>
        <span className="line" />
      </div>

      <div className="section-heading-row">
        <h2>{t.galleryTitle}</h2>
        <p>{t.galleryIntro}</p>
      </div>

      <div className="gallery-grid">
        {items.map((item, index) => (
          <article
            key={item.id}
            className="gallery-card"
            onClick={() => setSelectedIndex(index)}
            tabIndex={0}
            role="button"
            aria-label={`View photo: ${item.title}`}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedIndex(index)}
          >
            <div className="gallery-image-wrapper">
              <img
                src={item.image}
                alt={item.title}
                className="gallery-thumbnail"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <div className="gallery-zoom-badge">
                  <Maximize2 />
                  <span>Expand</span>
                </div>
              </div>
            </div>
            <div className="gallery-card-info">
              <span className="gallery-tag">{item.category}</span>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Fullscreen Image Modal */}
      {selectedIndex !== null && (
        <div
          className="lightbox-backdrop"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox view"
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close lightbox"
            >
              <X />
            </button>

            <button
              className="lightbox-nav lightbox-prev"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>

            <button
              className="lightbox-nav lightbox-next"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight />
            </button>

            <div className="lightbox-image-container">
              <img
                src={items[selectedIndex].image}
                alt={items[selectedIndex].title}
                className="lightbox-image"
              />
            </div>

            <div className="lightbox-caption">
              <div className="lightbox-caption-top">
                <span className="lightbox-tag">{items[selectedIndex].category}</span>
                <span className="lightbox-count">
                  {selectedIndex + 1} / {items.length}
                </span>
              </div>
              <h3>{items[selectedIndex].title}</h3>
              <p>{items[selectedIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
