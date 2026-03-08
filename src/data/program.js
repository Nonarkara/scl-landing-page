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

const B = import.meta.env.BASE_URL;
const fromBase = (path) => B + path;
const fromMore = (name) => fromBase(`Photos More/${name}`);

const photosMoreNames = [
  '474976513_1065517048953106_1932510330371171192_n.jpg',
  '475072577_1065518005619677_1038516887362061352_n.jpg',
  '475078979_1065503188954492_3634023443633949554_n.jpg',
  '475080703_1065517092286435_8349570703595779373_n.jpg',
  '475091923_1065517085619769_7263277420249420160_n.jpg',
  '475092247_1065503372287807_4948453919482324974_n.jpg',
  '475098284_1065503368954474_8947956372879788411_n.jpg',
  '475106873_1065503505621127_5344692825664600357_n.jpg',
  '475115680_1065517278953083_1715828586245574339_n.jpg',
  '475115765_1065503575621120_8831615483391208964_n.jpg',
  '475121760_1065516868953124_6426987254553252261_n.jpg',
  '475131549_1065518358952975_1971067941227910642_n.jpg',
  '475141109_1065517075619770_5610154560777569526_n.jpg',
  '475142898_1065503475621130_5540831661971612795_n.jpg',
  '475147745_1066072325564245_3947042823955799948_n.jpg',
  '475147760_1065503172287827_4110152578524880372_n.jpg',
  '475150289_1065516965619781_1154610351092339627_n.jpg',
  '475173234_1066067825564695_2366090375325216643_n.jpg',
  '475174303_1065503472287797_204220956237337306_n.jpg',
  '475186535_1065517068953104_8402674193949374153_n.jpg',
  '475231783_1066072605564217_3245326300185772423_n.jpg',
  '475238515_1066068145564663_3059618323806114137_n.jpg',
  '475260765_1065503425621135_1472784465670682804_n.jpg',
  '475264919_1066072412230903_4111193098320819467_n-1.jpg',
  '475264919_1066072412230903_4111193098320819467_n.jpg',
  '475273738_1065517072286437_8224579839999515494_n.jpg',
  '475274346_1065503168954494_6932647640016097277_n.jpg',
  '475276505_1065517058953105_255915732770321504_n.jpg',
  '475276936_1065503392287805_7778692109668285359_n.jpg',
  '475284089_1066072465564231_3553239802797788318_n.jpg',
  '475299078_1065517078953103_258442834987382540_n.jpg',
  '475305190_1066068132231331_6702896839982476244_n.jpg',
  '475305455_1066072382230906_2888222328268426437_n.jpg',
  '475308912_1065503162287828_1495097890001129712_n.jpg',
  '475348044_1066072415564236_6144324963092231108_n.jpg',
  '475372709_1066072248897586_6192145527577200572_n.jpg',
  '475406195_1066072265564251_2261983262138846572_n.jpg',
  '475554453_1066072178897593_3452435967247513607_n.jpg',
  '482238522_1104282185076592_2999806913309355896_n.jpg',
  '486506500_1112250914279719_2524108371516375760_n.jpg',
  '486609734_1113399177498226_6992550716968754928_n.jpg',
  '486698763_1114020897436054_7558388365517600909_n.jpg',
  '534732537_1232422318929244_8050664560695013915_n.jpg',
  '534918333_1232422312262578_450690921768571380_n.jpg',
  '535277566_1232422202262589_7591685064420223561_n.jpg',
  '535398214_1232422285595914_4868406411643001913_n.jpg',
];

const galleryFeaturedNames = [
  '475305190_1066068132231331_6702896839982476244_n.jpg',
  '475305455_1066072382230906_2888222328268426437_n.jpg',
  '475372709_1066072248897586_6192145527577200572_n.jpg',
  '475406195_1066072265564251_2261983262138846572_n.jpg',
  '482238522_1104282185076592_2999806913309355896_n.jpg',
  '486609734_1113399177498226_6992550716968754928_n.jpg',
];

export const heroPhoto =
  fromMore('475554453_1066072178897593_3452435967247513607_n.jpg');

export const aboutPhoto =
  fromMore('475150289_1065516965619781_1154610351092339627_n.jpg');

export const alumniHeroBanner =
  fromMore('534918333_1232422312262578_450690921768571380_n.jpg');

export const alumniNetworkPhotos = [
  fromMore('475147760_1065503172287827_4110152578524880372_n.jpg'),
  fromMore('475186535_1065517068953104_8402674193949374153_n.jpg'),
  fromMore('475238515_1066068145564663_3059618323806114137_n.jpg'),
  fromMore('534732537_1232422318929244_8050664560695013915_n.jpg'),
  fromMore('535398214_1232422285595914_4868406411643001913_n.jpg'),
];

export const fieldVisitPhotos = [
  fromMore('475147745_1066072325564245_3947042823955799948_n.jpg'),
  fromMore('475231783_1066072605564217_3245326300185772423_n.jpg'),
  fromMore('475348044_1066072415564236_6144324963092231108_n.jpg'),
];

const narrativePhotoNames = new Set([
  '475554453_1066072178897593_3452435967247513607_n.jpg',
  '475150289_1065516965619781_1154610351092339627_n.jpg',
  '534918333_1232422312262578_450690921768571380_n.jpg',
  '475147760_1065503172287827_4110152578524880372_n.jpg',
  '475186535_1065517068953104_8402674193949374153_n.jpg',
  '475238515_1066068145564663_3059618323806114137_n.jpg',
  '534732537_1232422318929244_8050664560695013915_n.jpg',
  '535398214_1232422285595914_4868406411643001913_n.jpg',
  '475147745_1066072325564245_3947042823955799948_n.jpg',
  '475231783_1066072605564217_3245326300185772423_n.jpg',
  '475348044_1066072415564236_6144324963092231108_n.jpg',
]);

const galleryExcludedNames = new Set([
  ...narrativePhotoNames,
  '475264919_1066072412230903_4111193098320819467_n-1.jpg',
  '535277566_1232422202262589_7591685064420223561_n.jpg',
]);

export const galleryActionPhotos = [
  ...galleryFeaturedNames,
  ...photosMoreNames.filter(
    (name) => !galleryFeaturedNames.includes(name) && !galleryExcludedNames.has(name)
  ),
].map(fromMore);

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
