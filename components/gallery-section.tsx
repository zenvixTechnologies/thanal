'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Layers, Maximize2, X } from 'lucide-react'
import type { CopyType } from '@/lib/copy'

interface GallerySectionProps {
  t: CopyType
}

export function GallerySection({ t }: GallerySectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const items = t.galleryItems

  // Flatten all photos for continuous lightbox navigation across cards
  const allPhotos = items.flatMap((item) => {
    if (item.photos && item.photos.length > 0) {
      return item.photos.map((photo, idx) => ({
        ...photo,
        category: item.category,
        cardTitle: item.title,
        groupIndex: idx + 1,
        groupTotal: item.photos!.length,
      }))
    }
    return [
      {
        id: item.id,
        title: item.title,
        image: item.image,
        description: item.description,
        category: item.category,
        cardTitle: item.title,
        groupIndex: 1,
        groupTotal: 1,
      },
    ]
  })

  // Calculate starting photo index for each card
  const getCardStartPhotoIndex = (cardId: number) => {
    let count = 0
    for (const item of items) {
      if (item.id === cardId) return count
      count += item.photos && item.photos.length > 0 ? item.photos.length : 1
    }
    return 0
  }

  // Handle keyboard navigation for Lightbox modal
  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev === null || prev === 0 ? allPhotos.length - 1 : prev - 1))
      }
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev === null || prev === allPhotos.length - 1 ? 0 : prev + 1))
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedIndex, allPhotos.length])

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev === null || prev === 0 ? allPhotos.length - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev === null || prev === allPhotos.length - 1 ? 0 : prev + 1))
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
        {items.map((item) => {
          const hasMultiplePhotos = Boolean(item.photos && item.photos.length > 1)
          const photoCount = item.photos ? item.photos.length : 1
          const startIdx = getCardStartPhotoIndex(item.id)

          return (
            <article
              key={item.id}
              className={`gallery-card ${hasMultiplePhotos ? 'has-stack' : ''}`}
              onClick={() => setSelectedIndex(startIdx)}
              tabIndex={0}
              role="button"
              aria-label={`View photos for ${item.title}`}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedIndex(startIdx)}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-thumbnail"
                  loading="lazy"
                />

                {hasMultiplePhotos && (
                  <div className="gallery-photo-badge">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{photoCount}</span>
                  </div>
                )}

                <div className="gallery-overlay">
                  <div className="gallery-zoom-badge">
                    {hasMultiplePhotos ? <Layers className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                    <span>{hasMultiplePhotos ? `${photoCount} Photos` : 'Expand'}</span>
                  </div>
                </div>
              </div>

              <div className="gallery-card-info">
                <div className="gallery-card-meta">
                  <span className="gallery-tag">{item.category}</span>
                  {hasMultiplePhotos && (
                    <span className="gallery-collection-pill">
                      {photoCount} Photos Collection
                    </span>
                  )}
                </div>
                <h3>{item.title}</h3>
                <p className="gallery-card-desc">{item.description}</p>
              </div>
            </article>
          )
        })}
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
                src={allPhotos[selectedIndex].image}
                alt={allPhotos[selectedIndex].title}
                className="lightbox-image"
              />
            </div>

            <div className="lightbox-caption">
              <div className="lightbox-caption-top">
                <div className="lightbox-tags-row">
                  <span className="lightbox-tag">{allPhotos[selectedIndex].category}</span>
                  {allPhotos[selectedIndex].groupTotal > 1 && (
                    <span className="lightbox-group-badge">
                      {allPhotos[selectedIndex].cardTitle} ({allPhotos[selectedIndex].groupIndex}/{allPhotos[selectedIndex].groupTotal})
                    </span>
                  )}
                </div>
                <span className="lightbox-count">
                  {selectedIndex + 1} / {allPhotos.length}
                </span>
              </div>
              <h3>{allPhotos[selectedIndex].title}</h3>
              <p>{allPhotos[selectedIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

