import { ArrowUpRight } from 'lucide-react'
import type { CopyType } from '@/lib/copy'

interface FooterProps {
  t: CopyType
}

export function Footer({ t }: FooterProps) {
  return (
    <>
      <footer>
        <div className="footer-top">
          <a href="#top" className="wordmark wordmark-footer" aria-label="THANAL home">
            <img src="/images/thanal-logo.png" alt="THANAL Charitable Society Logo" className="wordmark-logo" />
            <span>
              THANAL<span className="wordmark-dot">.</span>
            </span>
          </a>
          <p>{t.footer}</p>
          <a className="text-link light" href="#top">
            {t.backToTop} <ArrowUpRight />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 THANAL – STEP (Reg No: A 542 / 04 Kommady Thumpoly)</span>
          <span>{t.madeWithCare}</span>
        </div>
      </footer>
      <a className="mobile-join" href="#join">
        {t.join}
        <ArrowUpRight />
      </a>
    </>
  )
}
