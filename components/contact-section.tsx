import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import type { CopyType } from '@/lib/copy'

interface ContactSectionProps {
  t: CopyType
}

export function ContactSection({ t }: ContactSectionProps) {
  const googleMapEmbedSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.760138547891!2d76.31054527527128!3d9.529556690553145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0885d240000001%3A0xd22b4f52f0969209!2sThanal%20Charitable%20Society!5e0!3m2!1sen!2sin!4v1788168712691!5m2!1sen!2sin'

  const mapsDirectUrl =
    'https://maps.google.com/?q=Thanal+Charitable+Society+Kommady+Alappuzha'

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-info">
        <div>
          <p className="eyebrow">
            <span />
            {t.sayHello}
          </p>
          <h2>{t.contactTitle}</h2>
          <p className="large-copy">{t.contactBody}</p>
        </div>

        <div className="contact-details">
          <a href={`mailto:${t.email}`} className="contact-row">
            <div className="contact-row-left">
              <Mail className="contact-icon" />
              <span>{t.email}</span>
            </div>
            <ArrowUpRight className="contact-arrow" />
          </a>

          <a href={`tel:${t.phone.replace(/\s+/g, '')}`} className="contact-row">
            <div className="contact-row-left">
              <Phone className="contact-icon" />
              <span>{t.phone}</span>
            </div>
            <ArrowUpRight className="contact-arrow" />
          </a>

          <a href={`tel:${t.phone2.replace(/\s+/g, '')}`} className="contact-row">
            <div className="contact-row-left">
              <Phone className="contact-icon" />
              <span>{t.phone2}</span>
            </div>
            <ArrowUpRight className="contact-arrow" />
          </a>

          <a
            href={mapsDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-row contact-row-address"
            aria-label="Open location in Google Maps"
          >
            <div className="contact-row-left">
              <MapPin className="contact-icon address-icon" />
              <span className="address-text">{t.address}</span>
            </div>
            <ArrowUpRight className="contact-arrow" />
          </a>
        </div>
      </div>

      <div className="contact-map-wrapper">
        <iframe
          src={googleMapEmbedSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Thanal Charitable Society Google Map Location"
          className="contact-map-iframe"
        />
      </div>
    </section>
  )
}
