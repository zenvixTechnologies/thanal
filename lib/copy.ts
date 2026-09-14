export interface GalleryPhoto {
  id: number
  title: string
  image: string
  description: string
}

export interface GalleryItem {
  id: number
  title: string
  category: string
  image: string
  description: string
  photos?: readonly GalleryPhoto[]
}

export interface OfficeBearer {
  role: string
  name: string
}

export interface StepProcessItem {
  number: string
  title: string
  subtitle: string
  description: string
}

export interface StepFocusItem {
  id: string
  title: string
  description: string
}

export interface StepDetails {
  badge: string
  subTitle: string
  motto: string
  purposeTitle: string
  purposeBody: string
  purposeCard: string
  objectiveTitle: string
  objectiveBody: string
  focusTitle: string
  focusSubtitle: string
  focusItems: readonly StepFocusItem[]
  processTitle: string
  processSubtitle: string
  processItems: readonly StepProcessItem[]
  whyTitle: string
  whyCoreMessage: string
  whyDescription: string
  specialityTitle: string
  specialityBody: string
  specialityPoints: readonly string[]
  philosophyTitle: string
  philosophyQuote: string
  philosophySub: string
  philosophySteps: readonly string[]
  impactTitle: string
  impactBody: string
  visionTitle: string
  visionLines: readonly string[]
  visionTagline: string
  ctaText: string
}

export interface TermsPointSection {
  title: string
  points: readonly string[]
}

export interface CopyType {
  nav: readonly string[]
  heroEyebrow: string
  heroTitle: string
  heroBody: string
  join: string
  explore: string
  aboutLabel: string
  aboutTitle: string
  aboutBody: string
  officeBearersTitle: string
  officeBearers: readonly OfficeBearer[]
  history: string
  historyBody: string
  activitiesLabel: string
  activitiesTitle: string
  activities: readonly (readonly [string, string, string])[]
  stepKicker: string
  stepTitle: string
  stepBody: string
  stepDetails: StepDetails
  whyLabel: string
  whyTitle: string
  whyBody: string
  impactLabel: string
  impactTitle: string
  impactBody: string
  metrics: readonly (readonly [string, string, string])[]
  galleryLabel: string
  galleryTitle: string
  galleryIntro: string
  galleryItems: readonly GalleryItem[]
  howLabel: string
  howTitle: string
  steps: readonly (readonly [string, string])[]
  trustLabel: string
  trustTitle: string
  trustCards: readonly (readonly [string, string])[]
  storiesLabel: string
  storiesTitle: string
  storySoon: string
  joinTitle: string
  joinBody: string
  whatsapp: string
  objectivesTitle: string
  objectives: readonly string[]
  contactTitle: string
  contactBody: string
  email: string
  phone: string
  phone2: string
  address: string
  footer: string
  activityIntro: string
  stepCta: string
  storiesIntro: string
  northStar: string
  communityIntro: string
  openWhatsapp: string
  sayHello: string
  backToTop: string
  madeWithCare: string
  termsLabel: string
  termsTitle: string
  termsSubtitle: string
  termsLastUpdated: string
  termsSections: readonly TermsPointSection[]
  termsClose: string
  termsAccept: string
}

export const copy: Record<'en' | 'ml', CopyType> = {
  en: {
    nav: ['About', 'Activities', 'STEP', 'Impact', 'Gallery', 'Contact'],
    heroEyebrow: 'A charitable organisation rooted in community care since 2004',
    heroTitle: 'Care that reaches people.\nChange that stays.',
    heroBody: 'THANAL is a charitable organisation serving families across Kommady, Alappuzha municipality, and Aryad Panchayat with a focus on health care and education.',
    join: 'Join STEP',
    explore: 'Explore our work',
    aboutLabel: '01 / The collective',
    aboutTitle: 'Rooted in care.\nServing with purpose.',
    aboutBody: 'THANAL, established in 2004 under the Travancore Cochin Literary, Scientific and Charitable Societies Act 1955, has been earnestly rendering social services in Kommady ward and seven adjacent wards, including two wards in Aryad Panchayat and the remaining wards in Alappuzha municipality.',
    officeBearersTitle: 'Present Office Bearers',
    officeBearers: [
      { role: 'President', name: 'N. M. Joseph' },
      { role: 'Secretary', name: 'K. V. Uthaman' },
      { role: 'Vice President', name: 'N. P. Sunil' },
      { role: 'Joint Secretary', name: 'V. T. Suresh' },
      { role: 'Treasurer', name: 'M. D. Ramesan' },
    ],
    history: 'A growing circle of care',
    historyBody: 'We focus on health care and education: super speciality medical camps led by eminent doctors like Dr. K. Venugopal (Pulmonologist) and Dr. V. Jayaram (Cardiologist), financial assistance for patients from downtrodden families suffering from grave diseases like cancer, and annual educational scholarships for students from poor families.',
    activitiesLabel: 'Where we show up',
    activitiesTitle: 'Care that meets people\nwhere they are.',
    activities: [
      ['01', 'Health care', 'Super speciality medical camps led by eminent doctors like Dr. K. Venugopal (Pulmonologist) & Dr. V. Jayaram (Cardiologist), and financial aid for cancer & grave illnesses.'],
      ['02', 'Education', 'Annual educational scholarships and learning support for students from poor families.'],
      ['03', 'Community care', 'Neighbors organizing around food security, shelter, and a safer home.'],
      ['04', 'Rights & dignity', 'Making sure every voice is heard and every person can access their rights.'],
    ],
    stepKicker: 'A project by THANAL',
    stepTitle: 'STEP — Sodality for Terminating Extreme Poverty',
    stepBody: 'The STEP concept is based on "Micro Contribution – Macro Social Benefit". Small contributions from many people can create a major social benefit and provide meaningful support to families in extreme need.',
    stepDetails: {
      badge: 'A PROJECT BY THANAL',
      subTitle: 'Sodality for Terminating Extreme Poverty',
      motto: 'Micro Contribution – Macro Social Benefit',
      purposeTitle: '1. Purpose of STEP',
      purposeBody: 'The primary purpose of STEP is to provide significant social support to families who are facing very low income, severe poverty and difficult circumstances through small but meaningful contributions from members of society.',
      purposeCard: 'Small contributions from many people can create a major social benefit and provide meaningful support to families in extreme need.',
      objectiveTitle: '2. Main Objective',
      objectiveBody: 'The main objective of STEP is to reduce extreme poverty arising from serious illnesses and accidents as much as possible and to provide emergency financial assistance to affected families.',
      focusTitle: 'Who STEP Particularly Focuses On',
      focusSubtitle: 'Providing immediate relief for critical medical and emergency financial crises',
      focusItems: [
        {
          id: '01',
          title: 'People Affected by Serious Illnesses',
          description: 'Individuals suffering from grave, life-threatening medical conditions requiring immediate care.',
        },
        {
          id: '02',
          title: 'People Suffering Accidents',
          description: 'Individuals who have faced sudden accidents impacting their physical health and income.',
        },
        {
          id: '03',
          title: 'Treatment & Follow-Up Care Hardships',
          description: 'Patients facing financial difficulty for ongoing medical treatment and essential medicines.',
        },
        {
          id: '04',
          title: 'Families in Livelihood Crisis',
          description: 'Families whose entire livelihood is threatened due to overwhelming medical expenses.',
        },
      ],
      processTitle: '3. How Does STEP Work?',
      processSubtitle: 'A transparent 5-step community participation process',
      processItems: [
        {
          number: '01',
          title: 'Formation of a Social Group',
          subtitle: 'Step 1',
          description: 'A WhatsApp group will be formed with ordinary people and socially committed/service-minded individuals who are willing to contribute small amounts towards helping people in need. The purpose is to bring together people willing to make small contributions for genuine cases requiring support.',
        },
        {
          number: '02',
          title: 'Case Verification',
          subtitle: 'Step 2',
          description: 'Cases of people suffering from serious illnesses or accidents will be carefully verified through reliable enquiries and investigation. Only after confirming that the case is genuine and requires financial assistance, the case will be presented/shared with the group.',
        },
        {
          number: '03',
          title: 'Collecting Contributions',
          subtitle: 'Step 3',
          description: 'After verifying the case, the patient\'s/victim\'s situation, treatment requirement, financial condition and required support will be communicated to the group. Members can contribute according to their ability. The required amount will be collected through small contributions from multiple members.',
        },
        {
          number: '04',
          title: 'Providing Support',
          subtitle: 'Step 4',
          description: 'Once the required amount is collected, the support will be transferred directly to the beneficiary/person\'s account so that the financial assistance reaches the person in need. This ensures that the collected contribution reaches the person/family who actually needs the support.',
        },
        {
          number: '05',
          title: 'The Strength of the Group',
          subtitle: 'Step 5',
          description: 'When many people combine small contributions, even a small individual contribution can become meaningful support for a family. The strength of STEP lies in collective participation.',
        },
      ],
      whyTitle: '4. What is STEP? / Why STEP?',
      whyCoreMessage: '"One person does not have to give a large amount.\nMany people can contribute a small amount."',
      whyDescription: 'No one should have to contribute a very large amount individually. Instead, many people can contribute a small amount and collectively create meaningful financial support for someone facing extreme difficulty.',
      specialityTitle: '5. Speciality of STEP',
      specialityBody: 'STEP focuses on genuine and properly verified cases. Cases are carefully reviewed and verified before support is provided. The model aims to provide support directly to people who genuinely need assistance.',
      specialityPoints: [
        'Focuses on genuine and properly verified cases before assistance.',
        'Provides support directly to the beneficiary\'s bank account.',
        'Based on collective social responsibility and transparent assistance.',
      ],
      philosophyTitle: '6. Our Philosophy',
      philosophyQuote: '"Small Contributions... Big Changes..."',
      philosophySub: 'Micro Contribution for Macro Social Benefit',
      philosophySteps: [
        'Many Small Contributions',
        'Collective Support',
        'Meaningful Social Impact',
      ],
      impactTitle: '7. Impact / STEP\'s Vision',
      impactBody: 'STEP aims to create a system where people facing serious illness, accidents and financial hardship can receive timely support from society. Instead of depending on one person to provide a large amount, STEP brings together many people who can contribute according to their ability. The ultimate goal is to provide timely financial relief and reduce the extreme poverty and livelihood crisis caused by serious illness and accidents.',
      visionTitle: '8. Vision / Call to Action',
      visionLines: [
        'Let us come together...',
        'Let us provide support to someone in need...',
        'Let us help a family overcome a difficult situation...',
      ],
      visionTagline: 'A small contribution from many people can create a major social change.',
      ctaText: 'JOIN THE WHATSAPP COMMUNITY',
    },
    whyLabel: 'Why STEP',
    whyTitle: 'Poverty is not a number.\nIt is a door that should open.',
    whyBody: 'We believe ending poverty starts with seeing the whole person: their hopes, their skills, their family, and the systems around them.',
    impactLabel: 'The measure of care',
    impactTitle: 'Progress you can feel.',
    impactBody: 'Our impact is built in the everyday: a child returning to school, a family finding stable work, a neighbor no longer alone.',
    metrics: [['01', 'People first', 'Every plan starts with listening.'], ['02', 'Shared action', 'Communities lead the way.'], ['03', 'Open books', 'Trust is built in the open.']],
    galleryLabel: '02 / Moments of care',
    galleryTitle: 'Our work in action.',
    galleryIntro: 'Glimpses of super speciality medical camps, educational scholarships, and neighborhood care.',
    galleryItems: [
      {
        id: 1,
        title: 'Super Speciality Medical Camp & Health Care',
        category: 'Health Care',
        image: '/images/medical-camp.png',
        description: 'Super speciality medical camps led by Dr. K. Venugopal (Pulmonologist) and Dr. V. Jayaram (Cardiologist) offering free consultations, diagnosis, and medicines.',
        photos: [
          {
            id: 101,
            title: 'Super Speciality Medical Camp Consultation',
            image: '/images/medical-camp.png',
            description: 'Super speciality medical camp led by Dr. K. Venugopal (Pulmonologist) and Dr. V. Jayaram (Cardiologist) offering free consultations and medicines.',
          },
          {
            id: 102,
            title: 'Medical Camp Address & Inauguration Ceremony',
            image: '/images/medical-camp-1.jpg',
            description: 'Inaugural address and public gathering during the health care initiative by THANAL Charitable Society.',
          },
          {
            id: 103,
            title: 'Doctor Consultation & Student Felicitation',
            image: '/images/medical-camp-2.jpg',
            description: 'Honoring health care contributors and guest doctors at the THANAL community health initiative.',
          },
          {
            id: 104,
            title: 'Community Health Awareness & Honor',
            image: '/images/medical-camp-3.jpg',
            description: 'Welcoming guests and supporting local families during the health and welfare gathering.',
          },
          {
            id: 105,
            title: 'Medical Support & Volunteer Recognition',
            image: '/images/medical-camp-4.jpg',
            description: 'THANAL office bearers presenting mementos and medical support kits to community beneficiaries.',
          },
          {
            id: 106,
            title: 'Health Care Service & Token of Gratitude',
            image: '/images/medical-camp-5.jpg',
            description: 'Recognizing dedicated health care volunteers and medical supporters for their exemplary service.',
          },
        ],
      },
      {
        id: 2,
        title: 'Educational Scholarships & Student Support',
        category: 'Education',
        image: '/images/scholarship-1.jpg',
        description: 'Empowering promising students from underprivileged families with annual educational scholarships, financial aid, and learning support.',
        photos: [
          {
            id: 201,
            title: 'Annual Educational Scholarship Distribution',
            image: '/images/scholarship-1.jpg',
            description: 'Empowering promising students from underprivileged families with annual educational scholarships and learning materials.',
          },
          {
            id: 202,
            title: 'Scholarship Ceremony & Student Encouragement',
            image: '/images/scholarship-2.jpg',
            description: 'THANAL Charitable Society distributing annual scholarships and financial aid to deserving students at Kommady.',
          },
          {
            id: 203,
            title: 'Educational Financial Aid Presentation',
            image: '/images/scholarship-3.jpg',
            description: 'Supporting high-achieving students from poor families to pursue higher education without financial barriers.',
          },
          {
            id: 204,
            title: 'THANAL Public Function & Address',
            image: '/images/scholarship-4.jpg',
            description: 'Public meeting and scholarship distribution ceremony organized by THANAL Charitable Society.',
          },
        ],
      },
      {
        id: 3,
        title: 'Neighborhood & Housing Welfare Support',
        category: 'Community Support',
        image: '/images/community-care.png',
        description: 'Volunteers organizing essential food kits, marriage assistance for poor families, and shelter/home construction support for needy neighbors.',
        photos: [
          {
            id: 301,
            title: 'Neighborhood Essential Care & Relief Kits',
            image: '/images/community-care.png',
            description: 'Volunteers distributing essential food kits and home care support to elderly citizens across Kommady and Aryad wards.',
          },
          {
            id: 302,
            title: 'Financial Assistance for Marriage Ceremonies',
            image: '/images/community-marriage.jpg',
            description: 'Providing financial support and marriage assistance gifts to underprivileged families for conducting dignified wedding ceremonies.',
          },
          {
            id: 303,
            title: 'Shelter & Home Construction Support',
            image: '/images/community-house.jpg',
            description: 'Assisting impoverished families with house construction, roof repairs, and building safe homes in our neighborhood.',
          },
        ],
      },
    ],
    howLabel: 'How STEP works',
    howTitle: 'From a shared concern\nto a shared solution.',
    steps: [['Listen', 'Understand the needs and strengths already present.'], ['Gather', 'Bring people, partners, and resources into the circle.'], ['Act', 'Take practical steps that create momentum.'], ['Grow', 'Learn, share, and keep the circle moving forward.']],
    trustLabel: 'Trust, always',
    trustTitle: 'Good work deserves\nclear windows.',
    trustCards: [['Verified stories', 'Real people. Real journeys. Shared with consent and care.'], ['Transparent action', 'We make our work visible, measurable, and accountable.'], ['Local leadership', 'The people closest to a challenge help shape the answer.'], ['Long-term care', 'We stay with the work beyond the first milestone.']],
    storiesLabel: 'Stories from the circle',
    storiesTitle: 'Human stories,\nnever statistics.',
    storySoon: 'Verified story coming soon',
    joinTitle: 'There is room in this circle.',
    joinBody: 'You can bring time, skill, a listening ear, or simply a willingness to begin.',
    whatsapp: 'Join the WhatsApp community',
    objectivesTitle: 'What we are building toward',
    objectives: ['Dignified lives', 'Healthy communities', 'Learning without limits', 'A culture of solidarity'],
    contactTitle: 'Let’s take the next step.',
    contactBody: 'Have a question, a partnership idea, or a story to share? We would love to hear from you.',
    email: 'contact@thanal.org', phone: '+91 94955 75716', phone2: '+91 8714286609', address: 'Thanal Charitable Society, Kommady, Alappuzha, Kerala 688008',
    footer: 'A people-powered movement for a more dignified world.',
    activityIntro: 'Every action begins with a simple question: what would make life a little more possible, today?',
    stepCta: 'SEE THE STEP MODEL',
    storiesIntro: 'We share stories with consent, context, and care. Never to reduce a person to a before and after.',
    northStar: 'Our north star',
    communityIntro: 'Stay close to the work, the people, and the next small step.',
    openWhatsapp: 'OPEN WHATSAPP',
    sayHello: 'Say hello',
    backToTop: 'Back to top',
    madeWithCare: 'Made with care',
    termsLabel: 'LEGAL & POLICY',
    termsTitle: 'Terms & Conditions',
    termsSubtitle: 'Guidelines and guidelines governing participation in THANAL Charitable Society & STEP Community',
    termsLastUpdated: 'Last Updated: September 2026',
    termsSections: [
      {
        title: '1. Scope & Acceptance of Terms',
        points: [
          'These Terms and Conditions govern your access to the THANAL Charitable Society website and participation in the STEP (Sodality for Terminating Extreme Poverty) community initiative.',
          'By accessing our website or joining the STEP WhatsApp community group, you acknowledge that you have read, understood, and agreed to these Terms.',
        ],
      },
      {
        title: '2. Voluntary Micro-Contributions & Non-Refundability',
        points: [
          'Participation in STEP is entirely voluntary. There are no registration fees, compulsory dues, or recurring subscription charges.',
          'Contributions made through STEP are voluntary micro-donations directly aiding verified emergency medical cases, accident victims, or underprivileged families.',
          'Once a voluntary contribution has been transferred to a beneficiary or designated fund, it is non-refundable.',
        ],
      },
      {
        title: '3. Case Verification & Due Diligence',
        points: [
          'THANAL Charitable Society conducts reliable local enquiries and thorough verification of every case prior to presenting it to the STEP community.',
          'Assistance is strictly prioritized for genuine cases facing grave medical conditions, sudden accidents, or extreme livelihood distress.',
        ],
      },
      {
        title: '4. Direct Account Transfer & 100% Transparency',
        points: [
          '100% of the collected micro-contributions are transferred directly to the verified beneficiary\'s bank account or medical institution.',
          'THANAL Charitable Society does not deduct any administrative charges, fees, or commissions from STEP beneficiary contributions.',
          'Summary details of financial aid distribution are shared with the community group for transparency.',
        ],
      },
      {
        title: '5. Community Code of Conduct',
        points: [
          'Members of the STEP WhatsApp community must maintain mutual respect, ethical behavior, and decorum at all times.',
          'Unauthorized commercial advertisements, spam, political promotions, or personal disputes are strictly prohibited.',
          'Members must respect the privacy and human dignity of beneficiaries; improper use of shared medical details or media is strictly forbidden.',
        ],
      },
      {
        title: '6. Privacy & Personal Data Protection',
        points: [
          'Beneficiary details, medical reports, and photographs are shared only with explicit consent for verification and charitable aid purposes.',
          'THANAL does not sell, rent, or share member contact details with any commercial third parties.',
        ],
      },
      {
        title: '7. Governing Law & Jurisdiction',
        points: [
          'THANAL Charitable Society is registered under the Travancore Cochin Literary, Scientific and Charitable Societies Registration Act 1955 (Reg No: A 542/04).',
          'These Terms shall be governed by and construed in accordance with the laws of India, subject to the jurisdiction of courts in Alappuzha, Kerala.',
        ],
      },
    ],
    termsClose: 'Close Terms',
    termsAccept: 'I Understand & Agree',
  },
  ml: {
    nav: ['ഞങ്ങളെക്കുറിച്ച്', 'പ്രവർത്തനങ്ങൾ', 'STEP', 'പ്രഭാവം', 'ഗാലറി', 'ബന്ധപ്പെടുക'],
    heroEyebrow: '2004 മുതൽ സമൂഹകരുതലിൽ വേരൂന്നിയ charitable organisation',
    heroTitle: 'ആളുകളിലേക്ക് എത്തുന്ന കരുതൽ.\nനിലനിൽക്കുന്ന മാറ്റം.',
    heroBody: 'THANAL ഒരു charitable organisation ആണ്. ആരോഗ്യപരിചരണത്തിലും വിദ്യാഭ്യാസത്തിലും ശ്രദ്ധ കേന്ദ്രീകരിച്ച് കൊമ്മാടി, ആലപ്പുഴ നഗരസഭ, ആര്യാട് പഞ്ചായത്തിലെ കുടുംബങ്ങളോടൊപ്പം ഞങ്ങൾ പ്രവർത്തിക്കുന്നു.',
    join: 'STEP-ൽ ചേരുക', explore: 'ഞങ്ങളുടെ പ്രവർത്തനങ്ങൾ കാണുക',
    aboutLabel: '01 / കൂട്ടായ്മ', aboutTitle: 'കരുതലിൽ വേരൂന്നി.\nമാറ്റത്തിനായി പണിതത്.', aboutBody: '1955-ലെ തിരുവിതാംകൂർ കൊച്ചി സാഹിത്യ ശാസ്ത്രീയ ധർമ്മസംഘങ്ങളുടെ രജിസ്ട്രേഷൻ ആക്ട് പ്രകാരം 2004-ൽ സ്ഥാപിതമായ തണൽ (THANAL), കൊമ്മാടി വാർഡിലും ആര്യാട് പഞ്ചായത്തിലെ 2 വാർഡുകളും ആലപ്പുഴ നഗരസഭയിലെ ബാക്കി വാർഡുകളും ഉൾപ്പെടെ 7 അയൽ വാർഡുകളിലും സാമൂഹിക സേവനം നടത്തിവരുന്നു.',
    officeBearersTitle: 'നിലവിലെ ഭാരവാഹികൾ',
    officeBearers: [
      { role: 'പ്രസിഡന്റ്', name: 'എൻ. എം. ജോസഫ്' },
      { role: 'സെക്രട്ടറി', name: 'കെ. വി. ഉത്തമൻ' },
      { role: 'വൈസ് പ്രസിഡന്റ്', name: 'എൻ. പി. സുനിൽ' },
      { role: 'ജോയിന്റ് സെക്രട്ടറി', name: 'വി. ടി. സുരേഷ്' },
      { role: 'ട്രഷറർ', name: 'എം. ഡി. രമേശൻ' },
    ],
    history: 'വളരുന്ന കരുതൽ വലയം', historyBody: 'ആരോഗ്യപരിചരണത്തിലും വിദ്യാഭ്യാസത്തിലും പ്രത്യേക ശ്രദ്ധ നൽകുന്ന ഞങ്ങൾ, ഡോ. കെ. വേണുഗോപാൽ (പൾമണോളജിസ്റ്റ്), ഡോ. വി. ജയറാം (കാർഡിയോളജിസ്റ്റ്) തുടങ്ങിയ പ്രമുഖ ഡോക്ടർമാരെ ഉൾപ്പെടുത്തി സൂപ്പർ സ്പെഷ്യാലിറ്റി മെഡിക്കൽ ക്യാമ്പുകൾ സംഘടിപ്പിക്കുന്നു. കൂടാതെ, ഗുരുതര രോഗങ്ങൾ ബാധിച്ച നിർധനർക്ക് സാമ്പത്തിക സഹായവും, പാവപ്പെട്ട കുടുംബങ്ങളിലെ വിദ്യാർത്ഥികൾക്ക് വാർഷിക വിദ്യാഭ്യാസ സ്കോളർഷിപ്പുകളും നൽകുന്നു.',
    activitiesLabel: 'ഞങ്ങൾ എത്തുന്ന ഇടങ്ങൾ', activitiesTitle: 'ആളുകൾ ഉള്ളിടത്ത്\nഎത്തുന്ന കരുതൽ.', activities: [['01', 'ആരോഗ്യപരിചരണം', 'ഡോ. കെ. വേണുഗോപാൽ (പൾമണോളജിസ്റ്റ്), ഡോ. വി. ജയറാം (കാർഡിയോളജിസ്റ്റ്) തുടങ്ങിയ പ്രമുഖ ഡോക്ടർമാരുടെ സൂപ്പർ സ്പെഷ്യാലിറ്റി മെഡിക്കൽ ക്യാമ്പുകളും ക്യാൻസർ രോഗികൾക്കുള്ള സാമ്പത്തിക പിന്തുണയും.'], ['02', 'വിദ്യാഭ്യാസം', 'സാമ്പത്തികമായി പിന്നാക്കം നിൽക്കുന്ന കുടുംബങ്ങളിലെ വിദ്യാർത്ഥികൾക്ക് വാർഷിക സ്കോളർഷിപ്പുകളും വിദ്യാഭ്യാസ സഹായവും.'], ['03', 'കൂട്ടായ കരുതൽ', 'ഭക്ഷണം, വീട്, സുരക്ഷ എന്നിവയ്ക്കായി അയൽക്കാർ ഒരുമിക്കുന്നു.'], ['04', 'അവകാശവും അന്തസ്സും', 'ഓരോ ശബ്ദവും കേൾക്കപ്പെടാനും അവകാശങ്ങൾ ലഭിക്കാനും ഉറപ്പാക്കുന്നു.']],
    stepKicker: 'THANAL-ന്റെ പുതിയ പദ്ധതി', stepTitle: 'STEP — അതിരൂക്ഷ ദാരിദ്ര്യത്തിനെതിരെയുള്ള സാമൂഹ്യ കൂട്ടായ്മ', stepBody: 'STEP പദ്ധതിയുടെ ആശയം: "Micro Contribution – Macro Social Benefit" (ചെറിയ സംഭാവനകൾ – വലിയ സാമൂഹിക നേട്ടം). നിരവധി ആളുകളുടെ ചെറിയ സംഭാവനകൾ ഒരുമിച്ചുചേരുമ്പോൾ അതീവ ബുദ്ധിമുട്ടനുഭവിക്കുന്ന ഒരു കുടുംബത്തിന് വലിയ ആശ്വാസമായി മാറാൻ കഴിയും.',
    stepDetails: {
      badge: 'THANAL-ന്റെ പുതിയ പദ്ധതി',
      subTitle: 'അതിരൂക്ഷ ദാരിദ്ര്യത്തിനെതിരെയുള്ള സാമൂഹ്യ കൂട്ടായ്മ',
      motto: 'Micro Contribution – Macro Social Benefit\n(ചെറിയ സംഭാവനകൾ – വലിയ സാമൂഹിക നേട്ടം)',
      purposeTitle: '1. ലക്ഷ്യം',
      purposeBody: 'STEP പദ്ധതിയുടെ പ്രധാന ലക്ഷ്യം ഗുരുതരമായ സാമ്പത്തിക ബുദ്ധിമുട്ടുകളും അതിദാരിദ്ര്യവും അനുഭവിക്കുന്ന കുടുംബങ്ങൾക്ക് സമൂഹത്തിന്റെ ചെറിയതും അർത്ഥവത്തുമായ സംഭാവനകളിലൂടെ വലിയ സാമൂഹിക സഹായം നൽകുക എന്നതാണ്.',
      purposeCard: 'നിരവധി ആളുകളുടെ ചെറിയ സംഭാവനകൾ ഒരുമിച്ചുചേർന്നാൽ അതീവ ബുദ്ധിമുട്ടനുഭവിക്കുന്ന ഒരു കുടുംബത്തിന് വലിയ സഹായമായി മാറാൻ കഴിയും.',
      objectiveTitle: '2. പ്രധാന ലക്ഷ്യം',
      objectiveBody: 'ഗുരുതര രോഗങ്ങളും അപകടങ്ങളും മൂലം ഉണ്ടാകുന്ന അതിദാരിദ്ര്യം പരമാവധി കുറയ്ക്കുകയും അത്തരം കുടുംബങ്ങൾക്ക് അടിയന്തര സാമ്പത്തിക സഹായം ലഭ്യമാക്കുകയും ചെയ്യുക എന്നതാണ് STEP-ന്റെ പ്രധാന ലക്ഷ്യം.',
      focusTitle: 'പ്രത്യേകിച്ച് സഹായം നൽകുന്ന വിഭാഗങ്ങൾ',
      focusSubtitle: 'അടിയന്തര സാമ്പത്തിക സഹായവും തുടർചികിത്സയും ആവശ്യമുള്ള കുടുംബങ്ങൾ',
      focusItems: [
        {
          id: '01',
          title: 'ഗുരുതര രോഗം ബാധിച്ചവർ',
          description: 'കാൻസർ ഉൾപ്പെടെയുള്ള ഗുരുതര രോഗങ്ങൾ ബാധിച്ച് അടിയന്തര സാമ്പത്തിക സഹായം ആവശ്യമുള്ള നിർധനർ.',
        },
        {
          id: '02',
          title: 'അപകടത്തിൽപ്പെട്ടവർ',
          description: 'പ്രതീക്ഷിക്കാത്ത അപകടങ്ങൾ മൂലം വരുമാനം നിലയ്ക്കുകയും ചികിത്സ ആവശ്യമായി വരികയും ചെയ്തവർ.',
        },
        {
          id: '03',
          title: 'ചികിത്സയ്ക്കും തുടർചികിത്സയ്ക്കും ബുദ്ധിമുട്ടുന്നവർ',
          description: 'തുടർചികിത്സയ്ക്കായി സാമ്പത്തികമായി പ്രയാസമനുഭവിക്കുന്ന വ്യക്തികളും കുടുംബങ്ങളും.',
        },
        {
          id: '04',
          title: 'ഉപജീവനം പ്രതിസന്ധിയിലായവർ',
          description: 'ചികിത്സാചെലവ് കാരണം കുടുംബത്തിന്റെ ദൈനംദിന ഉപജീവനം തന്നെ പ്രതിസന്ധിയിലായവർ.',
        },
      ],
      processTitle: '3. STEP എങ്ങനെ പ്രവർത്തിക്കും?',
      processSubtitle: '5 ലളിതമായ ഘട്ടങ്ങളിലൂടെ സുതാര്യമായി നടപ്പിലാക്കുന്ന സഹായ പദ്ധതി',
      processItems: [
        {
          number: '01',
          title: 'സാമൂഹ്യ കൂട്ടായ്മ രൂപീകരണം',
          subtitle: 'ഘട്ടം 1',
          description: 'സന്നദ്ധരും സേവനമനസ്സുകളുമായ സാധാരണക്കാരായ മനുഷ്യസ്നേഹികളുടെ ഒരു WhatsApp ഗ്രൂപ്പ് രൂപീകരിക്കും. യഥാർത്ഥ ആവശ്യക്കാർക്ക് ചെറിയ സംഭാവനകൾ നൽകാൻ തയ്യാറുള്ള ആളുകളെ ഒരുമിപ്പിക്കുകയാണ് ഇതിന്റെ ലക്ഷ്യം.',
        },
        {
          number: '02',
          title: 'കേസിന്റെ സത്യസന്ധത ഉറപ്പാക്കൽ',
          subtitle: 'ഘട്ടം 2',
          description: 'ഗുരുതര രോഗമോ അപകടമോ നേരിട്ട വ്യക്തികളുടെ കേസുകൾ ആവശ്യമായ പരിശോധനകളും വിശ്വസനീയമായ അന്വേഷണങ്ങളും നടത്തി ഉറപ്പാക്കും. കേസ് യഥാർത്ഥമാണെന്നും സാമ്പത്തിക സഹായം ആവശ്യമാണ് എന്നും ഉറപ്പാക്കിയ ശേഷമാണ് ഗ്രൂപ്പിൽ പങ്കുവയ്ക്കുക.',
        },
        {
          number: '03',
          title: 'സംഭാവനകൾ ശേഖരിക്കൽ',
          subtitle: 'ഘട്ടം 3',
          description: 'രോഗിയുടെയോ അപകടത്തിൽപ്പെട്ട വ്യക്തിയുടെയോ ആവശ്യകത, ചികിത്സാ സാഹചര്യം, സാമ്പത്തിക ബുദ്ധിമുട്ട്, ആവശ്യമായ സഹായത്തിന്റെ തോത് എന്നിവ മനസ്സിലാക്കി ഗ്രൂപ്പിൽ അവതരിപ്പിക്കും. ഓരോ അംഗത്തിനും അവരുടെ കഴിവനുസരിച്ച് സംഭാവന നൽകാം. നിരവധി അംഗങ്ങളുടെ ചെറിയ സംഭാവനകളിലൂടെ ആവശ്യമായ തുക സമാഹരിക്കും.',
        },
        {
          number: '04',
          title: 'നേരിട്ടുള്ള സഹായം',
          subtitle: 'ഘട്ടം 4',
          description: 'ആവശ്യമായ തുക സമാഹരിച്ച ശേഷം അത് നേരിട്ട് ഗുണഭോക്താവിന്റെ അക്കൗണ്ടിലേക്ക് കൈമാറി സഹായം നൽകും. സമാഹരിച്ച തുക യഥാർത്ഥ ആവശ്യക്കാരിലേക്ക് നേരിട്ട് എത്തുന്നു എന്ന് ഇത് ഉറപ്പാക്കുന്നു.',
        },
        {
          number: '05',
          title: 'കൂട്ടായ്മയുടെ ശക്തി',
          subtitle: 'ഘട്ടം 5',
          description: 'നിരവധി ആളുകളുടെ ചെറിയ സംഭാവനകൾ ഒരുമിച്ചുചേരുമ്പോൾ ഒരു കുടുംബത്തിന് വലിയൊരു ആശ്വാസമായി മാറാൻ കഴിയും. കൂട്ടായ പങ്കാളിത്തത്തിലാണ് STEP-ന്റെ ശക്തി.',
        },
      ],
      whyTitle: '4. എന്തുകൊണ്ടാണ് STEP?',
      whyCoreMessage: '"ഒരു വ്യക്തിക്ക് വലിയൊരു തുക നൽകേണ്ടതില്ല.\nഎന്നാൽ പലർക്കും ചെറിയൊരു തുക നൽകാൻ കഴിയും."',
      whyDescription: 'ഒരു വ്യക്തിക്ക് വലിയൊരു തുക നൽകാൻ കഴിയണമെന്നില്ല. എന്നാൽ പലർക്കും ചെറിയൊരു തുക നൽകാൻ കഴിയും. അങ്ങനെ നിരവധി ആളുകളുടെ ചെറിയ സംഭാവനകൾ ഒരുമിച്ചുചേർന്ന് വലിയൊരു സഹായമായി മാറുന്നു.',
      specialityTitle: '5. STEP-ന്റെ പ്രത്യേകത',
      specialityBody: 'STEP-ന്റെ പ്രധാന പ്രത്യേകത യഥാർത്ഥവും ആവശ്യമായ പരിശോധനകൾക്ക് വിധേയമാക്കിയതുമായ കേസുകൾക്ക് മുൻഗണന നൽകുന്നതാണ്. സഹായം നൽകുന്നതിന് മുമ്പ് കേസുകൾ ആവശ്യമായ രീതിയിൽ പരിശോധിച്ച് ഉറപ്പാക്കും. യഥാർത്ഥത്തിൽ സഹായം ആവശ്യമുള്ള വ്യക്തികളിലേക്ക് സഹായം നേരിട്ട് എത്തിക്കുക എന്നതാണ് STEP-ന്റെ ലക്ഷ്യം.',
      specialityPoints: [
        'യഥാർത്ഥവും പരിശോധിച്ച് ഉറപ്പുവരുത്തിയതുമായ കേസുകൾക്ക് മുൻഗണന നൽകുന്നു.',
        'നേരിട്ട് ഗുണഭോക്താവിന്റെ അക്കൗണ്ടിലേക്ക് തുക കൈമാറുന്നു.',
        'കൂട്ടായ സാമൂഹിക ഉത്തരവാദിത്വത്തിലും സുതാര്യമായ സഹായ വിതരണത്തിലും അധിഷ്ഠിതം.',
      ],
      philosophyTitle: '6. ഞങ്ങളുടെ മുദ്രാവാക്യം',
      philosophyQuote: '"ചെറിയ സംഭാവനകൾ... വലിയ മാറ്റങ്ങൾ..."',
      philosophySub: 'ചെറിയ സംഭാവന വലിയ സാമൂഹിക നേട്ടത്തിനായി',
      philosophySteps: [
        'നിരവധി ചെറിയ സംഭാവനകൾ',
        'കൂട്ടായ പിന്തുണ',
        'വലിയ സാമൂഹിക നേട്ടം',
      ],
      impactTitle: '7. STEP-ന്റെ പ്രതീക്ഷ',
      impactBody: 'ഗുരുതര രോഗങ്ങളും അപകടങ്ങളും സാമ്പത്തിക ബുദ്ധിമുട്ടുകളും നേരിടുന്നവർക്ക് സമൂഹത്തിൽ നിന്ന് സമയബന്ധിതമായ സഹായം ലഭിക്കുന്ന ഒരു സംവിധാനമാണ് STEP ലക്ഷ്യമിടുന്നത്. ഒരു വ്യക്തിയിൽ നിന്ന് വലിയൊരു തുക പ്രതീക്ഷിക്കുന്നതിന് പകരം, തങ്ങളുടെ കഴിവനുസരിച്ച് ചെറിയ സംഭാവനകൾ നൽകാൻ കഴിയുന്ന നിരവധി ആളുകളെ ഒരുമിപ്പിക്കുകയാണ് STEP ചെയ്യുന്നത്. ഗുരുതര രോഗങ്ങളും അപകടങ്ങളും മൂലം ഉണ്ടാകുന്ന അതിദാരിദ്ര്യവും ഉപജീവന പ്രതിസന്ധിയും കുറയ്ക്കുകയും ആവശ്യമായ സമയത്ത് സാമ്പത്തിക ആശ്വാസം നൽകുകയും ചെയ്യുക എന്നതാണ് അന്തിമ ലക്ഷ്യം.',
      visionTitle: '8. ആഹ്വാനം',
      visionLines: [
        'നമുക്ക് ഒരുമിക്കാം...',
        'ഒരു വ്യക്തിക്ക് സഹായം നൽകാം...',
        'ഒരു കുടുംബത്തിന് പ്രതീക്ഷ നൽകാം...',
        'ഒരു കുടുംബത്തെ അതിദാരിദ്ര്യത്തിൽ നിന്ന് കരകയറാൻ സഹായിക്കാം...',
      ],
      visionTagline: 'നിരവധി ആളുകളുടെ ചെറിയ സംഭാവനകൾ വലിയൊരു സാമൂഹിക മാറ്റത്തിന് വഴിയൊരുക്കും.',
      ctaText: 'WHATSAPP കൂട്ടായ്മയിൽ ചേരുക',
    },
    whyLabel: 'എന്തുകൊണ്ട് STEP', whyTitle: 'ദാരിദ്ര്യം ഒരു സംഖ്യയല്ല.\nതുറക്കേണ്ട ഒരു വാതിലാണ്.', whyBody: 'ദാരിദ്ര്യം അവസാനിപ്പിക്കുന്നത് മുഴുവൻ വ്യക്തിയെയും കാണുന്നതിൽ നിന്നാണ് തുടങ്ങുന്നത്: അവരുടെ പ്രതീക്ഷകളും കഴിവുകളും കുടുംബവും ചുറ്റുമുള്ള സംവിധാനങ്ങളും.', impactLabel: 'കരുതലിന്റെ അളവ്', impactTitle: 'അനുഭവിക്കാവുന്ന പുരോഗതി.', impactBody: 'ദൈനംദിന ജീവിതത്തിലാണ് ഞങ്ങളുടെ പ്രഭാവം: സ്കൂളിലേക്ക് മടങ്ങുന്ന കുട്ടി, സ്ഥിരം ജോലി കണ്ടെത്തുന്ന കുടുംബം, ഇനി ഒറ്റയ്ക്കല്ലാത്ത അയൽക്കാരൻ.', metrics: [['01', 'ആളുകൾ ആദ്യം', 'ഓരോ പദ്ധതിയും കേൾവിയിൽ തുടങ്ങുന്നു.'], ['02', 'പങ്കിട്ട പ്രവർത്തനം', 'സമൂഹങ്ങളാണ് വഴി നയിക്കുന്നത്.'], ['03', 'തുറന്ന രേഖകൾ', 'വിശ്വാസം സുതാര്യതയിൽ പണിയുന്നു.']],
    galleryLabel: '02 / കരുതലിന്റെ നിമിഷങ്ങൾ',
    galleryTitle: 'പ്രവർത്തനങ്ങളുടെ ചിത്രങ്ങൾ.',
    galleryIntro: 'സൂപ്പർ സ്പെഷ്യാലിറ്റി മെഡിക്കൽ ക്യാമ്പുകൾ, സ്കോളർഷിപ്പ് വിതരണം, അയൽക്കൂട്ട കരുതൽ എന്നിവയിൽ നിന്നുള്ള ദൃശ്യങ്ങൾ.',
    galleryItems: [
      {
        id: 1,
        title: 'സൂപ്പർ സ്പെഷ്യാലിറ്റി മെഡിക്കൽ ക്യാമ്പും ആരോഗ്യ പരിചരണവും',
        category: 'ആരോഗ്യപരിചരണം',
        image: '/images/medical-camp.png',
        description: 'പ്രമുഖ ഡോക്ടർമാരുടെ നേതൃത്വത്തിൽ സൗജന്യ മെഡിക്കൽ ക്യാമ്പുകൾ, പരിശോധനകൾ, സൗജന്യ മരുന്ന് വിതരണം, ആരോഗ്യ ബോധവൽക്കരണം എന്നിവ നൽകുന്നു.',
        photos: [
          {
            id: 101,
            title: 'സൂപ്പർ സ്പെഷ്യാലിറ്റി മെഡിക്കൽ ക്യാമ്പ്',
            image: '/images/medical-camp.png',
            description: 'ഡോ. കെ. വേണുഗോപാൽ (പൾമണോളജിസ്റ്റ്), ഡോ. വി. ജയറാം (കാർഡിയോളജിസ്റ്റ്) തുടങ്ങിയ പ്രമുഖ ഡോക്ടർമാരുടെ മെഡിക്കൽ പരിശോധനയും സൗജന്യ മരുന്ന് വിതരണവും.',
          },
          {
            id: 102,
            title: 'മെഡിക്കൽ ക്യാമ്പ് ഉദ്ഘാടനവും പൊതുസമ്മേളനവും',
            image: '/images/medical-camp-1.jpg',
            description: 'തണൽ ചാരിറ്റബിൾ സൊസൈറ്റിയുടെ നേതൃത്വത്തിൽ നടന്ന ആരോഗ്യ സേവന പരിപാടിയുടെ ഉദ്ഘാടന ചടങ്ങ്.',
          },
          {
            id: 103,
            title: 'ഡോക്ടർമാരുടെ സേവനവും ആദരിക്കലും',
            image: '/images/medical-camp-2.jpg',
            description: 'ആരോഗ്യ രംഗത്തെ വിദഗ്ദ്ധരെയും അതിഥികളെയും തണൽ സൊസൈറ്റിയുടെ നേതൃത്വത്തിൽ ആദരിക്കുന്നു.',
          },
          {
            id: 104,
            title: 'ആരോഗ്യ ബോധവൽക്കരണവും പൊതുചടങ്ങും',
            image: '/images/medical-camp-3.jpg',
            description: 'സാമൂഹിക ആരോഗ്യ പ്രസ്ഥാനത്തിന്റെ ഭാഗമായി സംഘടിപ്പിച്ച പൊതുസമ്മേളനത്തിൽ അതിഥികളെ സ്വീകരിക്കുന്നു.',
          },
          {
            id: 105,
            title: 'സൗജന്യ മരുന്നും സഹായ വിതരണവും',
            image: '/images/medical-camp-4.jpg',
            description: 'തണൽ ഭാരവാഹികൾ നിർധനരായ രോഗികൾക്ക് സൗജന്യ മരുന്നുകളും സാമ്പത്തിക സഹായങ്ങളും കൈമാറുന്നു.',
          },
          {
            id: 106,
            title: 'സന്നദ്ധ പ്രവർത്തകരെ ആദരിക്കൽ',
            image: '/images/medical-camp-5.jpg',
            description: 'ആരോഗ്യ പരിചരണ പ്രവർത്തനങ്ങൾക്ക് നേതൃത്വം നൽകിയ സന്നദ്ധ പ്രവർത്തകർക്ക് ഉപഹാരം നൽകുന്നു.',
          },
        ],
      },
      {
        id: 2,
        title: 'വിദ്യാഭ്യാസ സഹായവും സ്കോളർഷിപ്പ് വിതരണവും',
        category: 'വിദ്യാഭ്യാസം',
        image: '/images/scholarship-1.jpg',
        description: 'സാമ്പത്തികമായി പിന്നാക്കം നിൽക്കുന്ന കുടുംബങ്ങളിലെ മിടുക്കരായ വിദ്യാർത്ഥികൾക്ക് വാർഷിക വിദ്യാഭ്യാസ സ്കോളർഷിപ്പുകളും സാമ്പത്തിക പിന്തുണയും നൽകുന്നു.',
        photos: [
          {
            id: 201,
            title: 'വാർഷിക വിദ്യാഭ്യാസ സ്കോളർഷിപ്പ് വിതരണം',
            image: '/images/scholarship-1.jpg',
            description: 'സാമ്പത്തികമായി പിന്നാക്കം നിൽക്കുന്ന കുടുംബങ്ങളിലെ മിടുക്കരായ വിദ്യാർത്ഥികൾക്ക് വാർഷിക വിദ്യാഭ്യാസ സ്കോളർഷിപ്പുകളും പുസ്തകങ്ങളും വിതരണം ചെയ്യുന്നു.',
          },
          {
            id: 202,
            title: 'സ്കോളർഷിപ്പ് വിതരണവും കുടുംബ സംഗമവും',
            image: '/images/scholarship-2.jpg',
            description: 'തണൽ ചാരിറ്റബിൾ സൊസൈറ്റിയുടെ നേതൃത്വത്തിൽ കൊമ്മാടിയിൽ നടന്ന വാർഷിക സ്കോളർഷിപ്പ് വിതരണവും കുടുംബ സംഗമവും.',
          },
          {
            id: 203,
            title: 'വിദ്യാർത്ഥി പ്രോത്സാഹന സാമ്പത്തിക സഹായം',
            image: '/images/scholarship-3.jpg',
            description: 'ഉപരിപഠനം ഉറപ്പാക്കുന്നതിനായി നിർധന കുടുംബങ്ങളിലെ വിദ്യാർത്ഥികൾക്ക് നേരിട്ട് സാമ്പത്തിക സഹായം കൈമാറുന്നു.',
          },
          {
            id: 204,
            title: 'തണൽ സൊസൈറ്റി പൊതുസമ്മേളനം',
            image: '/images/scholarship-4.jpg',
            description: 'കൊമ്മാടിയിൽ നടന്ന തണൽ ചാരിറ്റബിൾ സൊസൈറ്റി പൊതുസമ്മേളനവും സഹായ വിതരണവും.',
          },
        ],
      },
      {
        id: 3,
        title: 'അയൽക്കൂട്ട കരുതലും നിർധനർക്ക് വീട് / വിവാഹ സഹായവും',
        category: 'കൂട്ടായ കരുതൽ',
        image: '/images/community-care.png',
        description: 'നിർധന കുടുംബങ്ങൾക്ക് അവശ്യവസ്തുക്കൾ, പെൺമക്കളുടെ വിവാഹത്തിനുള്ള ധനസഹായം, വീട് നിർമ്മാണ സാമ്പത്തിക പിന്തുണ എന്നിവ എത്തിച്ചു നൽകുന്നു.',
        photos: [
          {
            id: 301,
            title: 'അയൽക്കൂട്ട അവശ്യവസ്തു വിതരണം',
            image: '/images/community-care.png',
            description: 'കൊമ്മാടി, ആര്യാട് വാർഡുകളിലെ നിർധന കുടുംബങ്ങൾക്കും മുതിർന്ന പൗരന്മാർക്കും ഭക്ഷണകിറ്റുകളും അവശ്യവസ്തുക്കളും എത്തിച്ചു നൽകുന്നു.',
          },
          {
            id: 302,
            title: 'നിർധന കുടുംബങ്ങൾക്കുള്ള വിവാഹ ധനസഹായം',
            image: '/images/community-marriage.jpg',
            description: 'സാമ്പത്തികമായി പിന്നാക്കം നിൽക്കുന്ന കുടുംബങ്ങളിലെ പെൺമക്കളുടെ മംഗല്യത്തിന് തണൽ സൊസൈറ്റിയുടെ മംഗല്യ സഹായ ഫണ്ട് കൈമാറുന്നു.',
          },
          {
            id: 303,
            title: 'വീട് നിർമ്മാണവും പാർപ്പിട പുനരധിവാസവും',
            image: '/images/community-house.jpg',
            description: 'അതീവ സാമ്പത്തിക ബുദ്ധിമുട്ട് അനുഭവിക്കുന്ന കുടുംബങ്ങൾക്ക് തണൽ കൂട്ടായ്മയുടെ നേതൃത്വത്തിൽ സുരക്ഷിതമായ വീട് നിർമ്മിച്ചു നൽകുന്നു.',
          },
        ],
      },
    ],
    howLabel: 'STEP എങ്ങനെ പ്രവർത്തിക്കുന്നു', howTitle: 'പങ്കിട്ട ആശങ്കയിൽ നിന്ന്\nപങ്കിട്ട പരിഹാരത്തിലേക്ക്.', steps: [['കേൾക്കുക', 'ഇതിനകം നിലനിൽക്കുന്ന ആവശ്യങ്ങളും ശക്തികളും മനസ്സിലാക്കുക.'], ['ഒരുമിക്കുക', 'ആളുകളെയും പങ്കാളികളെയും വിഭവങ്ങളെയും ഒരുമിപ്പിക്കുക.'], ['പ്രവർത്തിക്കുക', 'മുന്നേറ്റം സൃഷ്ടിക്കുന്ന പ്രായോഗിക ചുവടുകൾ എടുക്കുക.'], ['വളരുക', 'പഠിക്കുകയും പങ്കിടുകയും വലയം മുന്നോട്ട് കൊണ്ടുപോകുകയും ചെയ്യുക.']], trustLabel: 'എപ്പോഴും വിശ്വാസം', trustTitle: 'നല്ല പ്രവർത്തനങ്ങൾക്ക്\nതുറന്ന ജനാലകൾ വേണം.', trustCards: [['സ്ഥിരീകരിച്ച കഥകൾ', 'യഥാർത്ഥ ആളുകൾ. യഥാർത്ഥ യാത്രകൾ. സമ്മതത്തോടെ പങ്കിടുന്നു.'], ['സുതാര്യ പ്രവർത്തനം', 'ഞങ്ങളുടെ പ്രവർത്തനം ദൃശ്യവും അളക്കാവുന്നതും ഉത്തരവാദിത്തമുള്ളതുമാണ്.'], ['പ്രാദേശിക നേതൃത്വം', 'പ്രശ്നത്തിന് അടുത്തുള്ളവരാണ് പരിഹാരം രൂപപ്പെടുത്തുന്നത്.'], ['ദീർഘകാല കരുതൽ', 'ആദ്യ നാഴികക്കല്ലിന് ശേഷവും ഞങ്ങൾ കൂടെയുണ്ട്.']], storiesLabel: 'വലയത്തിൽ നിന്നുള്ള കഥകൾ', storiesTitle: 'മനുഷ്യരുടെ കഥകൾ,\nസ്ഥിതിവിവരക്കണക്കുകളല്ല.', storySoon: 'സ്ഥിരീകരിച്ച കഥ ഉടൻ', joinTitle: 'ഈ വലയത്തിൽ നിങ്ങൾക്കും ഇടമുണ്ട്.', joinBody: 'സമയം, കഴിവ്, കേൾക്കുന്ന മനസ്സ്, അല്ലെങ്കിൽ തുടങ്ങാനുള്ള സന്നദ്ധത—എന്തും കൊണ്ടുവരാം.', whatsapp: 'WhatsApp കൂട്ടായ്മയിൽ ചേരുക', objectivesTitle: 'ഞങ്ങൾ ലക്ഷ്യമിടുന്നത്', objectives: ['അന്തസ്സുള്ള ജീവിതങ്ങൾ', 'ആരോഗ്യമുള്ള സമൂഹങ്ങൾ', 'പരിധികളില്ലാത്ത പഠനം', 'ഐക്യത്തിന്റെ സംസ്കാരം'], contactTitle: 'അടുത്ത ചുവട് എടുക്കാം.', contactBody: 'ഒരു ചോദ്യം, പങ്കാളിത്ത ആശയം, അല്ലെങ്കിൽ പങ്കിടാനുള്ള കഥയുണ്ടോ? ഞങ്ങൾ കേൾക്കാൻ ആഗ്രഹിക്കുന്നു.', email: 'contact@thanal.org', phone: '+91 94955 75716', phone2: '+91 8714286609', address: 'തണൽ ചാരിറ്റബിൾ സൊസൈറ്റി, കൊമ്മാടി, ആലപ്പുഴ, കേരളം 688008', footer: 'കൂടുതൽ അന്തസ്സുള്ള ലോകത്തിനായുള്ള ജനകീയ പ്രസ്ഥാനം.',
    activityIntro: 'ഓരോ പ്രവർത്തനവും ഒരു ലളിതമായ ചോദ്യത്തിൽ നിന്നാണ് തുടങ്ങുന്നത്: ഇന്ന് ജീവിതം കുറച്ചുകൂടി സാധ്യമാക്കാൻ എന്ത് ചെയ്യാം?',
    stepCta: 'SEE THE STEP MODEL',
    storiesIntro: 'സമ്മതത്തോടും സന്ദർഭബോധത്തോടും കരുതലോടും കൂടിയാണ് ഞങ്ങൾ കഥകൾ പങ്കിടുന്നത്. ഒരാളെയും ഒരു മുമ്പും ശേഷവും മാത്രമായി ചുരുക്കാനല്ല.',
    northStar: 'ഞങ്ങളുടെ ലക്ഷ്യദിശ',
    communityIntro: 'പ്രവർത്തനത്തോടും ആളുകളോടും അടുത്ത ചെറിയ ചുവടിനോടും ചേർന്ന് നിൽക്കൂ.',
    openWhatsapp: 'WHATSAPP തുറക്കുക',
    sayHello: 'സംസാരിക്കാം',
    backToTop: 'മുകളിലേക്ക് മടങ്ങുക',
    madeWithCare: 'കരുതലോടെ നിർമ്മിച്ചത്',
    termsLabel: 'നിയമവും നയങ്ങളും',
    termsTitle: 'നിബന്ധനകളും വ്യവസ്ഥകളും',
    termsSubtitle: 'തണൽ ചാരിറ്റബിൾ സൊസൈറ്റി & STEP കൂട്ടായ്മയിൽ പങ്കാളികളാകുന്നതിനുള്ള മാർഗ്ഗനിർദ്ദേശങ്ങൾ',
    termsLastUpdated: 'അവസാനം അപ്‌ഡേറ്റ് ചെയ്തത്: സെപ്റ്റംബർ 2026',
    termsSections: [
      {
        title: '1. പൊതുവ്യവസ്ഥകളും സമ്മതവും',
        points: [
          'തണൽ ചാരിറ്റബിൾ സൊസൈറ്റിയുടെ (Reg No: A 542/04, Kommady) വെബ്‌സൈറ്റ് ഉപയോഗിക്കുന്നതിനും STEP (Sodality for Terminating Extreme Poverty) കൂട്ടായ്മയിൽ പങ്കാളികളാകുന്നതിനും ഈ നിബന്ധനകളും വ്യവസ്ഥകളും ബാധകമാണ്.',
          'വെബ്‌സൈറ്റ് സന്ദർശിക്കുന്നതിലൂടെയോ STEP WhatsApp ഗ്രൂപ്പിൽ അംഗമാകുന്നതിലൂടെയോ നിങ്ങൾ ഈ വ്യവസ്ഥകൾ വായിച്ച് മനസ്സിലാക്കി അംഗീകരിച്ചതായി കണക്കാക്കുന്നു.',
        ],
      },
      {
        title: '2. സന്നദ്ധ സംഭാവനകളും റീഫണ്ടും',
        points: [
          'STEP പദ്ധതിയിലെ പങ്കാളിത്തവും സംഭാവനകളും തികച്ചും സന്നദ്ധമാണ്. ഇതിൽ അംഗത്വ ഫീസോ നിർബന്ധിത വരിസംഖ്യയോ ഇല്ല.',
          'സമാഹരിക്കുന്ന സംഭാവനകൾ നിർധനരും അടിയന്തര സാമ്പത്തിക/ചികിത്സാ സഹായം ആവശ്യമുള്ളവരുമായ ഗുണഭോക്താക്കൾക്കാണ് നൽകുന്നത്.',
          'ഗുണഭോക്താവിന്റെ അക്കൗണ്ടിലേക്ക് അല്ലെങ്കിൽ സഹായ ഫണ്ടിലേക്ക് സമാഹരിച്ച് കൈമാറിയ തുക യാതൊരു കാരണവശാലും തിരികെ (Refund) നൽകുന്നതല്ല.',
        ],
      },
      {
        title: '3. കേസുകളുടെ സത്യസന്ധതയും പരിശോധനയും',
        points: [
          'STEP കൂട്ടായ്മയിൽ അവതരിപ്പിക്കുന്ന ഓരോ കേസും തണൽ ഭാരവാഹികളുടെ നേരിട്ടുള്ള അന്വേഷണത്തിലൂടെയും പരിശോധനയിലൂടെയും യഥാർത്ഥമാണെന്ന് ഉറപ്പുവരുത്തുന്നു.',
          'ഗുരുതര രോഗങ്ങൾ ബാധിച്ചവർ, പ്രതീക്ഷിക്കാത്ത അപകടത്തിൽപ്പെട്ടവർ, ഉപജീവനം പ്രതിസന്ധിയിലായവർ എന്നിവരുടെ കേസുകൾക്കാണ് മുൻഗണന നൽകുന്നത്.',
        ],
      },
      {
        title: '4. നേരിട്ടുള്ള അക്കൗണ്ട് കൈമാറ്റവും സുതാര്യതയും',
        points: [
          'സമാഹരിക്കുന്ന മുഴുവൻ തുകയും യാതൊരുവിധ അഡ്മിനിസ്ട്രേറ്റീവ് കമ്മീഷനും ഇല്ലാതെ നേരിട്ട് ഗുണഭോക്താവിന്റെ ബാങ്ക് അക്കൗണ്ടിലേക്കാണ് കൈമാറുന്നത്.',
          'ധനസഹായ വിതരണത്തിന്റെ വിവരങ്ങൾ സുതാര്യത ഉറപ്പാക്കാനായി കൂട്ടായ്മയിൽ പങ്കുവെക്കുന്നു.',
        ],
      },
      {
        title: '5. കൂട്ടായ്മയുടെ പെരുമാറ്റച്ചട്ടം',
        points: [
          'STEP WhatsApp ഗ്രൂപ്പിലെ അംഗങ്ങൾ പരസ്പര ബഹുമാനവും അച്ചടക്കവും കാത്തുസൂക്ഷിക്കേണ്ടതാണ്.',
          'അനുമതിയില്ലാത്ത വാണിജ്യ പരസ്യങ്ങൾ, സ്പാം സന്ദേശങ്ങൾ, രാഷ്ട്രീയ പ്രചാരണങ്ങൾ എന്നിവ ഗ്രൂപ്പിൽ പാടില്ല.',
          'ഗുണഭോക്താക്കളുടെയും രോഗികളുടെയും വ്യക്തിപരമായ അന്തസ്സ് കാത്തുസൂക്ഷിക്കേണ്ടതും അവരുടെ ചിത്രങ്ങളോ വിവരങ്ങളോ ദുരുപയോഗം ചെയ്യാൻ പാടില്ലാത്തതുമാണ്.',
        ],
      },
      {
        title: '6. സ്വകാര്യതയും വിവര സംരക്ഷണവും',
        points: [
          'ഗുണഭോക്താക്കളുടെ വിവരങ്ങളും ചിത്രങ്ങളും അവരുടെ പൂർണ്ണ സമ്മതത്തോടെ മാത്രമാണ് ഗ്രൂപ്പിൽ പങ്കുവെക്കുന്നത്.',
          'അംഗങ്ങളുടെ ഫോൺ നമ്പറോ വിവരങ്ങളോ മൂന്നാം കക്ഷികൾക്ക് കൈമാറുകയോ വിൽക്കുകയോ ചെയ്യില്ല.',
        ],
      },
      {
        title: '7. നിയമപരമായ പരിധി (Governing Law)',
        points: [
          'തണൽ ചാരിറ്റബിൾ സൊസൈറ്റി 1955-ലെ തിരുവിതാംകൂർ കൊച്ചി സാഹിത്യ ശാസ്ത്രീയ ധർമ്മസംഘങ്ങളുടെ രജിസ്ട്രേഷൻ ആക്ട് പ്രകാരം രജിസ്റ്റർ ചെയ്ത സ്ഥാപനമാണ്.',
          'ഈ വ്യവസ്ഥകൾ ഇന്ത്യൻ നിയമങ്ങൾക്കും ആലപ്പുഴയിലെ കോടതി Jurisdiction-നും വിധേയമായിരിക്കും.',
        ],
      },
    ],
    termsClose: 'അടയ്ക്കുക',
    termsAccept: 'മനസ്സിലായി & അംഗീകരിക്കുന്നു',
  },
}

export type Lang = 'en' | 'ml'
