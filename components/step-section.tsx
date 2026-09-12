'use client'

import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Heart,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  Wallet,
} from 'lucide-react'
import type { CopyType, Lang } from '@/lib/copy'

interface StepSectionProps {
  t: CopyType
  lang: Lang
}

export function StepSection({ t, lang }: StepSectionProps) {
  const d = t.stepDetails

  const focusIcons = [
    <Stethoscope key="01" className="step-focus-icon" />,
    <AlertTriangle key="02" className="step-focus-icon" />,
    <Activity key="03" className="step-focus-icon" />,
    <Wallet key="04" className="step-focus-icon" />,
  ]

  const processIcons = [
    <Users key="p1" className="step-proc-icon" />,
    <ShieldCheck key="p2" className="step-proc-icon" />,
    <Wallet key="p3" className="step-proc-icon" />,
    <HeartHandshake key="p4" className="step-proc-icon" />,
    <Sparkles key="p5" className="step-proc-icon" />,
  ]

  return (
    <section id="step" className="step-wrapper">
      {/* 1. STEP Hero & Introduction */}
      <div className="step-hero-banner">
        <div className="step-hero-overlay" />
        <div className="step-hero-content">
          <div className="eyebrow light">
            <span />
            {d.badge}
          </div>
          <h1 className="step-main-title">
            <span className="step-acronym">STEP</span>
            <span className="step-subtitle">{d.subTitle}</span>
          </h1>
          <div className="step-motto-pill">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{d.motto}</span>
          </div>
          <p className="step-hero-intro">{t.stepBody}</p>
        </div>
      </div>

      <div className="step-body-container">
        {/* 2. Purpose & 3. Main Objective Side-by-Side */}
        <div className="step-two-col-grid">
          <div className="step-card step-card-primary">
            <div className="step-card-header">
              <Heart className="step-card-icon" />
              <h3>{d.purposeTitle}</h3>
            </div>
            <p>{d.purposeBody}</p>
            <div className="step-highlight-box">
              <span className="step-highlight-tag">Concept</span>
              <p className="step-highlight-text">{d.purposeCard}</p>
            </div>
          </div>

          <div className="step-card step-card-dark">
            <div className="step-card-header">
              <ShieldCheck className="step-card-icon" />
              <h3>{d.objectiveTitle}</h3>
            </div>
            <p>{d.objectiveBody}</p>
            <div className="step-objective-stats">
              <div className="step-stat-item">
                <span className="step-stat-num">500+</span>
                <span className="step-stat-label">
                  {lang === 'ml' ? 'സന്നദ്ധ അംഗങ്ങൾ' : 'Community Members'}
                </span>
              </div>
              <div className="step-stat-item">
                <span className="step-stat-num">100%</span>
                <span className="step-stat-label">
                  {lang === 'ml' ? 'നേരിട്ടുള്ള സഹായം' : 'Direct Account Transfer'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Who STEP Helps / Beneficiary Categories */}
        <div className="step-block">
          <div className="step-block-header">
            <div className="section-label">
              <span>{lang === 'ml' ? 'ഗുണഭോക്താക്കൾ' : 'BENEFICIARIES'}</span>
              <span className="line" />
            </div>
            <h2>{d.focusTitle}</h2>
            <p>{d.focusSubtitle}</p>
          </div>
          <div className="step-focus-grid">
            {d.focusItems.map((item, index) => (
              <div key={item.id} className="step-focus-card">
                <div className="step-focus-header">
                  {focusIcons[index]}
                  <span className="step-focus-num">{item.id}</span>
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. How STEP Works (Signature THANAL Timeline Design Pattern) */}
        <div className="step-block step-process-block">
          <div className="section-label light">
            <span>{lang === 'ml' ? 'പ്രവർത്തന രീതി' : 'WORKING METHOD'}</span>
            <span className="line" />
          </div>
          <h2>{d.processTitle}</h2>
          <p className="step-process-subtitle">{d.processSubtitle}</p>

          <div className="step-timeline-grid">
            {d.processItems.map((step, idx) => (
              <div key={step.number} className="step-timeline-item">
                <div className="step-timeline-top">
                  <span className="step-timeline-num">{step.number}</span>
                  <div className="step-timeline-node">{idx + 1}</div>
                </div>
                <div className="step-timeline-badge">{step.subtitle}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Why STEP? & 7. Speciality of STEP */}
        <div className="step-two-col-grid">
          <div className="step-card step-why-card">
            <div className="section-label">
              <span>{lang === 'ml' ? 'ലളിതമായ ആശയം' : 'CORE PRINCIPLE'}</span>
              <span className="line" />
            </div>
            <h3>{d.whyTitle}</h3>
            <div className="step-core-quote">
              <span className="quote-icon">“</span>
              <p>{d.whyCoreMessage.replace('\n', ' ')}</p>
            </div>
            <p className="step-why-desc">{d.whyDescription}</p>
          </div>

          <div className="step-card step-speciality-card">
            <div className="section-label">
              <span>{lang === 'ml' ? 'പ്രത്യേകതകൾ' : 'SPECIALITY'}</span>
              <span className="line" />
            </div>
            <h3>{d.specialityTitle}</h3>
            <p className="mb-4">{d.specialityBody}</p>
            <ul className="step-speciality-list">
              {d.specialityPoints.map((pt, i) => (
                <li key={i}>
                  <CheckCircle2 className="step-check-icon" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 8. Philosophy & Visual Diagram */}
        <div className="step-philosophy-banner">
          <div className="step-philo-header">
            <span className="step-philo-tag">{d.philosophyTitle}</span>
            <h2>{d.philosophyQuote}</h2>
            <p className="step-philo-sub">{d.philosophySub}</p>
          </div>
          <div className="step-philo-diagram">
            <div className="philo-node">
              <Users className="philo-node-icon" />
              <span>{d.philosophySteps[0]}</span>
            </div>
            <div className="philo-arrow">→</div>
            <div className="philo-node highlight">
              <HeartHandshake className="philo-node-icon" />
              <span>{d.philosophySteps[1]}</span>
            </div>
            <div className="philo-arrow">→</div>
            <div className="philo-node">
              <Sparkles className="philo-node-icon" />
              <span>{d.philosophySteps[2]}</span>
            </div>
          </div>
        </div>

        {/* 9. Impact & 10. Vision / CTA */}
        <div className="step-impact-cta-grid">
          <div className="step-impact-box">
            <div className="section-label">
              <span>{lang === 'ml' ? 'പ്രതീക്ഷിക്കുന്ന മാറ്റം' : 'EXPECTED OUTCOME'}</span>
              <span className="line" />
            </div>
            <h3>{d.impactTitle}</h3>
            <p>{d.impactBody}</p>
          </div>

          <div className="step-cta-box">
            <h3>{d.visionTitle}</h3>
            <div className="step-vision-lines">
              {d.visionLines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <div className="step-vision-tagline">{d.visionTagline}</div>

            <a
              className="whatsapp-btn step-wa-btn"
              href="https://chat.whatsapp.com/DqaKMhfLWYv51PaoGsmLkT?s=sw&p=a&mlu=4&ilr=4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{d.ctaText}</span>
              <svg className="whatsapp-official-icon" viewBox="0 0 308 308" fill="currentColor">
                <path d="M227.904 176.981c-0.6-0.288-23.054-11.345-27.044-12.781-3.99-1.436-6.898-2.155-9.806 2.155-2.909 4.311-11.273 14.184-13.818 17.062-2.545 2.879-5.091 3.235-9.582 0.999-4.49-2.236-18.966-6.993-36.126-22.288-13.355-11.903-22.373-26.6-25.002-31.109-2.628-4.509-0.279-6.945 1.968-9.176 2.022-2.008 4.49-5.24 6.736-7.859 2.246-2.619 2.994-4.49 4.49-7.485 1.496-2.994 0.748-5.617-0.374-7.859-1.122-2.242-9.806-23.633-13.43-32.355-3.529-8.497-7.14-7.348-9.806-7.485-2.545-0.13-5.454-0.157-8.362-0.157-2.909 0-7.632 1.091-11.622 5.454-3.99 4.363-15.265 14.938-15.265 36.425s15.629 42.239 17.818 45.148c2.189 2.909 30.761 46.974 74.524 65.882 10.409 4.497 18.533 7.182 24.871 9.198 10.457 3.324 19.975 2.855 27.494 1.733 8.384-1.251 25.803-10.548 29.432-20.729 3.629-10.181 3.629-18.895 2.545-20.729-1.084-1.834-3.991-2.946-8.481-5.182z"/>
                <path d="M154.005 0C68.966 0 0 68.966 0 154.005c0 29.742 8.441 58.749 24.471 83.74L0 308l72.295-23.824c23.957 14.07 51.353 21.829 81.71 21.829 85.039 0 154.005-68.966 154.005-154.005C308.01 68.966 239.044 0 154.005 0zm0 280.957c-26.837 0-52.628-7.794-74.654-22.529l-5.361-3.567-47.532 15.666 15.93-46.368-3.666-5.836C22.61 195.074 14.37 175.145 14.37 154.005c0-76.994 62.641-139.635 139.635-139.635 76.994 0 139.635 62.641 139.635 139.635 0 76.994-62.641 139.635-139.635 139.635z"/>
              </svg>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
