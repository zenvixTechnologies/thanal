export function JsonLd() {
  const ngoSchema = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    '@id': 'https://thanalcharitabletrust.org/#organization',
    name: 'THANAL Charitable Society & Trust',
    alternateName: [
      'THANAL Charitable Trust',
      'THANAL Charitable Society',
      'THANAL Alappuzha',
      'Thanal Kommady',
      'തണൽ ചാരിറ്റബിൾ സൊസൈറ്റി',
      'തണൽ ചാരിറ്റബിൾ ട്രസ്റ്റ്',
    ],
    description:
      'THANAL is a registered charitable organisation established in 2004 in Kommady, Alappuzha, focused on healthcare, super speciality medical camps, educational scholarships, and STEP micro-contributions.',
    url: 'https://thanalcharitabletrust.org/',
    logo: 'https://thanalcharitabletrust.org/images/thanal-logo.png',
    image: 'https://thanalcharitabletrust.org/images/thanal-community.png',
    identifier: 'Reg No: A 542/04 Kommady Thumpoly',
    foundingDate: '2004',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 9.5226,
      longitude: 76.3262,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kommady, Thumpoly P.O.',
      addressLocality: 'Alappuzha',
      addressRegion: 'Kerala',
      postalCode: '688008',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91 94955 75716',
      contactType: 'customer support',
      email: 'contact@thanal.org',
      availableLanguage: ['Malayalam', 'English'],
    },
    sameAs: ['https://chat.whatsapp.com/DqaKMhfLWYv51PaoGsmLkT?s=sw&p=a&mlu=4&ilr=4'],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Alappuzha' },
      { '@type': 'AdministrativeArea', name: 'Aryad' },
      { '@type': 'AdministrativeArea', name: 'Kommady' },
      { '@type': 'AdministrativeArea', name: 'Kerala' },
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://thanalcharitabletrust.org/#website',
    url: 'https://thanalcharitabletrust.org/',
    name: 'THANAL Charitable Trust & Society | STEP Alappuzha',
    alternateName: ['THANAL Charitable Trust', 'തണൽ ചാരിറ്റബിൾ സൊസൈറ്റി & STEP'],
    publisher: {
      '@id': 'https://thanalcharitabletrust.org/#organization',
    },
    inLanguage: ['ml-IN', 'en-US'],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://thanalcharitabletrust.org/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Terms & Conditions',
        item: 'https://thanalcharitabletrust.org/terms',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'എന്താണ് തണൽ സൊസൈറ്റിയുടെ STEP പദ്ധതി? / What is THANAL\'s STEP Initiative?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'STEP (Sodality for Terminating Extreme Poverty) is a micro-contribution initiative based on "Micro Contribution – Macro Social Benefit", bringing together community members to provide 100% direct financial assistance for verified emergency medical and financial crises.',
        },
      },
      {
        '@type': 'Question',
        name: 'STEP സൊസൈറ്റിയുടെ സഹായ വിതരണം എങ്ങനെയാണ് പ്രവർത്തിക്കുന്നത്? / How does STEP assistance work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cases of serious illnesses or sudden accidents are strictly verified locally by THANAL office bearers. Once verified, genuine cases are presented to the WhatsApp community group, and members make voluntary micro-contributions directly to the beneficiary\'s bank account with zero administrative commission.',
        },
      },
      {
        '@type': 'Question',
        name: 'തണൽ സൊസൈറ്റിയുടെ പ്രധാന പ്രവർത്തനങ്ങൾ എന്തൊക്കെയാണ്? / What are the key services of THANAL?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Super speciality medical camps led by eminent pulmonologists and cardiologists, financial assistance for grave illnesses like cancer, annual educational scholarships for deserving students, and neighborhood care across Kommady and Aryad wards in Alappuzha.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ngoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
