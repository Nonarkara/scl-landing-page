const OFFICIAL_PROGRAM_URLS = {
  th: 'https://www.depa.or.th/th/article-view/smart-city-leadership-program-6-scl-6',
  en: 'https://www.depa.or.th/en/article-view/smart-city-leadership-program-6-scl-6',
  zh: 'https://www.depa.or.th/en/article-view/smart-city-leadership-program-6-scl-6',
};

const LANGUAGE_TO_LOCALE = {
  th: 'th-TH',
  en: 'en-US',
  zh: 'zh-CN',
};

export const programDetails = {
  cohortNumber: 6,
  learningHours: 42,
  programDays: 7,
  speakerCount: 30,
  feeTHB: 62000,
  alumniCount: 223,
  cohortCount: 5,
  pillarCount: 7,
  applicationDeadline: '2026-04-06T23:59:59+07:00',
  programStart: '2026-05-11T09:00:00+07:00',
  programEnd: '2026-05-26T18:00:00+07:00',
  venueBangkok: 'The Quarter Ladprao by UHG, Bangkok',
};

export const applicationUrl = OFFICIAL_PROGRAM_URLS.th;

export const programLearningSites = [
  'EGAT Learning Center',
  'Smart Water Operation Center (SWOC)',
  'PROEN Data Center',
  'Thailand Creative & Design Center ecosystem',
  'KMITL Interactive Digital Center (KIDC)',
];

export const heroPhoto =
  '/Photos additional/487065252_1114021147436029_6636576544050690930_n.jpg';

export const alumniHeroBanner =
  '/Photos additional/476161485_1822641688551599_8399285309264524122_n.jpg';

export const alumniNetworkPhotos = [
  '/Photos additional/540073752_1239501834887959_7514705360388831618_n.jpg',
  '/Photos additional/539462584_1239502018221274_4785186678856189554_n.jpg',
  '/Photos additional/539738239_1239501871554622_35830799402647117_n.jpg',
  '/Photos additional/539580663_1239502041554605_1819865055960942430_n.jpg',
  '/Photos additional/539257668_1239501764887966_6428707906801544206_n.jpg',
];

export const fieldVisitPhotos = [
  '/Photos additional/475908551_1822641665218268_8556447180424358663_n.jpg',
  '/Photos additional/476008034_1822641685218266_1622267485476882936_n.jpg',
  '/Photos additional/476158935_1822641628551605_2862493579238828091_n.jpg',
];

export const networkVisitSites = [
  'EEC Evolution Experience Center',
  'Industrial solution factories and automation labs',
  'Bangkok operating centers and urban systems',
  'Closed-door briefings with applied technology teams',
];

function getLanguageKey(language = 'en') {
  return language.toLowerCase().split('-')[0];
}

export function getApplicationUrl(language = 'th') {
  return OFFICIAL_PROGRAM_URLS[getLanguageKey(language)] || OFFICIAL_PROGRAM_URLS.en;
}

export function formatProgramDate(
  dateString,
  language = 'en',
  options = {}
) {
  return new Intl.DateTimeFormat(
    LANGUAGE_TO_LOCALE[getLanguageKey(language)] || LANGUAGE_TO_LOCALE.en,
    {
      dateStyle: 'long',
      timeZone: 'Asia/Bangkok',
      ...options,
    }
  ).format(new Date(dateString));
}

export function formatProgramCurrency(amount, language = 'en') {
  return new Intl.NumberFormat(
    LANGUAGE_TO_LOCALE[getLanguageKey(language)] || LANGUAGE_TO_LOCALE.en,
    {
      style: 'currency',
      currency: 'THB',
      maximumFractionDigits: 0,
    }
  ).format(amount);
}

export function getProgramPhase(now = new Date()) {
  const currentTime = now.getTime();
  const deadline = new Date(programDetails.applicationDeadline).getTime();
  const programStart = new Date(programDetails.programStart).getTime();
  const programEnd = new Date(programDetails.programEnd).getTime();

  if (currentTime <= deadline) {
    return 'open';
  }

  if (currentTime < programStart) {
    return 'closed';
  }

  if (currentTime <= programEnd) {
    return 'inSession';
  }

  return 'completed';
}

export const alumniBatches = [
  {
    id: 5,
    year: '2024',
    link: 'https://www.depa.or.th/th/article-view/AN_list-scl5',
    kind: 'page',
  },
  {
    id: 4,
    year: '2024',
    link: 'https://www.depa.or.th/th/article-view/Announcement-Smart-City-Leadership-Program-4',
    kind: 'page',
  },
  {
    id: 3,
    year: '2023',
    link: 'https://www.depa.or.th/storage/app/media/file-announce/Announcement%20of%20the%20list%20of%20people%20who%20are%20eligible%20to%20attend%20the%20training%20Smart%20City%20Leadership%20Program%20_3_20230426.pdf',
    kind: 'pdf',
  },
  {
    id: 2,
    year: '2022',
    link: 'https://www.depa.or.th/storage/app/media/file-announce/Announcement%20of%20the%20list%20of%20people%20who%20are%20eligible%20to%20attend%20the%20training%20Smart%20City%20Leadership%20Program%20_2_20220816.pdf',
    kind: 'pdf',
  },
  {
    id: 1,
    year: '2022',
    link: 'https://www.depa.or.th/storage/app/media/file/Announce-SCL-21042565.pdf',
    kind: 'pdf',
  },
];
