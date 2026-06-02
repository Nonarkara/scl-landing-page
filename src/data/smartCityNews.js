// SCL #6 conclusion dispatch — sourced from depa's official closing (26 May 2026)
// and site-visit (19 May 2026) announcements. All copy is trilingual (EN / TH / CN);
// the component picks the active language directly, so no i18n keys are required.

const B = import.meta.env.BASE_URL || '/';
const scl6 = (name) => `${B}scl6/${name}`;

// Distinct hero image — the assembled SCL #6 cohort. Kept separate from the news
// lead photo (the graduation/certificate shot) so no single image repeats large
// on the home page (§ photo-reuse).
export const heroFeaturePhoto = scl6('S__1335315_0.jpg');
export const heroFeaturePhotoAlt = {
  en: 'The SCL #6 cohort assembled for the program',
  th: 'ผู้เข้าร่วมหลักสูตร SCL รุ่นที่ 6 พร้อมหน้ากัน',
  cn: 'SCL 第六期全体学员合影',
};

export const newsLabels = {
  kicker: { en: 'Latest dispatch', th: 'ข่าวสารล่าสุด', cn: '最新动态' },
  title: {
    en: 'SCL #6 has graduated',
    th: 'SCL รุ่นที่ 6 สำเร็จหลักสูตรอย่างเป็นทางการ',
    cn: 'SCL 第六期正式结业',
  },
  description: {
    en: 'Seven intensive days, more than 30 national experts, and study visits across Thailand’s most advanced operating environments — the sixth cohort of depa’s Smart City Leadership Program closed on 26 May 2026.',
    th: 'ตลอด 7 วันเต็ม วิทยากรผู้เชี่ยวชาญระดับประเทศกว่า 30 ท่าน และการศึกษาดูงานในพื้นที่ปฏิบัติการจริงที่ก้าวหน้าที่สุดของไทย หลักสูตรผู้นำการส่งเสริมเมืองอัจฉริยะ รุ่นที่ 6 ของ depa ปิดหลักสูตรเมื่อวันที่ 26 พฤษภาคม 2569',
    cn: '历时七天、逾 30 位国家级专家授课，并赴泰国最先进的实操现场考察——depa 智慧城市领导力课程第六期已于 2026 年 5 月 26 日圆满结业。',
  },
  updatedLabel: {
    en: 'Closed · 26 May 2026',
    th: 'ปิดหลักสูตร · 26 พ.ค. 2569',
    cn: '结业 · 2026 年 5 月 26 日',
  },
  sourceLabel: {
    en: 'Read the depa announcement',
    th: 'อ่านประกาศจาก depa',
    cn: '阅读 depa 官方公告',
  },
  siteVisitsTitle: {
    en: 'Where the cohort went',
    th: 'เส้นทางศึกษาดูงานของรุ่นที่ 6',
    cn: '第六期学员的考察足迹',
  },
  siteVisitsDesc: {
    en: 'SCL #6 studied smart-city delivery where it actually happens — energy, urban command, applied infrastructure, and immersive digital systems.',
    th: 'รุ่นที่ 6 เรียนรู้การขับเคลื่อนเมืองอัจฉริยะจากสถานที่ปฏิบัติงานจริง ทั้งด้านพลังงาน ศูนย์บัญชาการเมือง โครงสร้างพื้นฐานอัจฉริยะ และระบบดิจิทัลเสมือนจริง',
    cn: '第六期学员在真实运营一线学习智慧城市的落地——涵盖能源、城市指挥中枢、应用型基础设施与沉浸式数字系统。',
  },
  alsoLabel: {
    en: 'Also on the itinerary',
    th: 'สถานที่ดูงานอื่น ๆ ในหลักสูตร',
    cn: '行程中的其他考察点',
  },
  alsoVisited: {
    en: 'Smart Water Operation Center (SWOC) · PROEN Data Center, CAT Tower · Creative Economy Agency (CEA) · Huawei Technologies (Thailand)',
    th: 'ศูนย์ปฏิบัติการน้ำอัจฉริยะ (SWOC) · PROEN Data Center อาคาร CAT Tower · สำนักงานส่งเสริมเศรษฐกิจสร้างสรรค์ (CEA) · หัวเว่ย เทคโนโลยี (ประเทศไทย)',
    cn: '智慧水务运营中心（SWOC）· CAT Tower 内的 PROEN 数据中心 · 创意经济促进局（CEA）· 华为技术（泰国）',
  },
};

// Separate photo for the hero teaser thumbnail — must differ from the news lead (§11 photo rule).
export const heroTeaserPhoto = scl6('S__1335307_0.jpg'); // Dr. Passakon at the SCL#6 podium

// Lead story — the official closing of SCL #6.
export const sclDispatch = {
  id: 'scl6-graduation-2026-05-26',
  date: '2026-05-26',
  // Graduation ceremony: full cohort holding certificates — correct lead image for "SCL #6 has graduated"
  photo: scl6('S__1335317.jpg'),
  photoAlt: {
    en: 'SCL #6 graduates with their certificates at the closing ceremony',
    th: 'ผู้สำเร็จหลักสูตร SCL รุ่นที่ 6 พร้อมสัมฤทธิบัตรในพิธีปิด',
    cn: 'SCL 第六期结业学员在结业典礼上手持证书合影',
  },
  venue: {
    en: 'The Quarter Ladprao by UHG, Bangkok',
    th: 'โรงแรมเดอะ ควอเตอร์ ลาดพร้าว บาย ยูเอชจี กรุงเทพฯ',
    cn: '曼谷 The Quarter Ladprao by UHG 酒店',
  },
  signal: {
    en: '7 days · 30+ national experts · NFT certificates',
    th: '7 วัน · วิทยากรระดับชาติ 30+ ท่าน · สัมฤทธิบัตร NFT',
    cn: '7 天 · 30+ 国家级专家 · NFT 结业证书',
  },
  headline: {
    en: 'depa closes the sixth Smart City Leadership Program',
    th: 'depa ปิดหลักสูตรผู้นำการส่งเสริมเมืองอัจฉริยะ รุ่นที่ 6',
    cn: 'depa 为第六期智慧城市领导力课程举行结业典礼',
  },
  body: {
    en: 'On 26 May 2026, depa — led by Dr. Passakon Prathombutr — closed the sixth Smart City Leadership Program. The final day moved from national strategy to the front line: urban development under Thailand’s 14th National Plan (NESDC), investment promotion for smart cities (BOI), depa’s digital-economy mechanisms and Smart City Proposal guidance, the Mayor of Yala on building a people-centred smart city, and Bedrock Analytics on the City Digital Data Platform. Graduates received their certificates both on paper and as blockchain-verified NFTs.',
    th: 'เมื่อวันที่ 26 พฤษภาคม 2569 depa นำโดย ดร.ภาสกร ประถมบุตร ปิดหลักสูตรผู้นำการส่งเสริมเมืองอัจฉริยะ รุ่นที่ 6 อย่างเป็นทางการ วันสุดท้ายไล่เรียงตั้งแต่ยุทธศาสตร์ระดับชาติสู่การปฏิบัติจริง ทั้งการพัฒนาเมืองภายใต้แผนพัฒนาฯ ฉบับที่ 14 (สศช.) การส่งเสริมการลงทุนเมืองอัจฉริยะ (BOI) กลไกขับเคลื่อนเศรษฐกิจดิจิทัลและแนวทางเขียนข้อเสนอเมืองอัจฉริยะของ depa เส้นทางการสร้างเมืองอัจฉริยะโดยนายกเทศมนตรีนครยะลา และ City Digital Data Platform โดย Bedrock Analytics ผู้สำเร็จหลักสูตรได้รับสัมฤทธิบัตรทั้งรูปแบบกระดาษและรูปแบบ NFT บนเทคโนโลยีบล็อกเชน',
    cn: '2026 年 5 月 26 日，depa 在 Dr. Passakon Prathombutr 的带领下为第六期智慧城市领导力课程举行结业典礼。最后一天的课程从国家战略延伸至一线实践：第十四个国家发展计划下的城市发展（NESDC）、智慧城市投资促进（BOI）、depa 的数字经济驱动机制与智慧城市提案撰写指引、也拉市市长分享以人为本的智慧城市建设之路，以及 Bedrock Analytics 讲解城市数字数据平台。结业学员同时获得纸质与区块链 NFT 两种形式的结业证书。',
  },
  sourceUrl: 'https://www.depa.or.th/th/article-view/smart-city-leadership-program-6-scl-6',
};

// Supporting story — the on-site study-visit journey.
export const siteVisits = [
  {
    id: 'egat',
    photo: scl6('S__1335308_0.jpg'),
    org: { en: 'EGAT Learning Center', th: 'ศูนย์การเรียนรู้ กฟผ.', cn: 'EGAT 学习中心' },
    summary: {
      en: 'Low-carbon foundations for a livable city, drawn from the Mae Moh livable-city project.',
      th: 'รากฐานสังคมคาร์บอนต่ำเพื่อเมืองน่าอยู่ ถอดบทเรียนจากโครงการแม่เมาะเมืองน่าอยู่',
      cn: '以低碳社会为宜居城市奠基，借鉴“湄莫宜居城市”项目经验。',
    },
  },
  {
    id: 'bma',
    photo: scl6('S__1335314_0.jpg'),
    org: { en: 'BMA Command Center', th: 'ศูนย์บัญชาการกรุงเทพมหานคร', cn: '曼谷市指挥中心' },
    summary: {
      en: 'How Bangkok runs the city as one system — traffic, transport, and real-time operations.',
      th: 'การบริหารกรุงเทพฯ อย่างเป็นระบบเดียว ทั้งการจราจร การขนส่ง และการปฏิบัติการแบบเรียลไทม์',
      cn: '曼谷如何将整座城市作为一个系统运行——交通、运输与实时运营。',
    },
  },
  {
    id: 'kidc',
    photo: scl6('S__1335313_0.jpg'),
    org: {
      en: 'KMITL Interactive Digital Center',
      th: 'ศูนย์นวัตกรรมเสมือนจริง KMITL (KIDC)',
      cn: 'KMITL 交互式数字中心（KIDC）',
    },
    summary: {
      en: 'Thailand’s first fully integrated immersive digital experience center.',
      th: 'ศูนย์นวัตกรรมเสมือนจริงแบบครบวงจรแห่งแรกของไทย',
      cn: '泰国首个全整合式沉浸数字体验中心。',
    },
  },
  {
    id: 'astra',
    photo: scl6('S__1392656_0.jpg'),  // Astra group photo — correct for this site-visit card
    org: {
      en: 'Astra Communication Service',
      th: 'บริษัท แอสตรา คอมมิวนิเคชั่น เซอร์วิส',
      cn: 'Astra 通信服务公司',
    },
    summary: {
      en: '“Smart Infrastructure in Action” — applied intelligent infrastructure at city scale.',
      th: '“Smart Infrastructure in Action” โครงสร้างพื้นฐานอัจฉริยะที่นำไปใช้จริงในระดับเมือง',
      cn: '“Smart Infrastructure in Action”——城市级智能基础设施的实际应用。',
    },
  },
];

export function pickNewsText(obj, language = 'en') {
  if (!obj) return '';
  const key = language.toLowerCase().split('-')[0];
  return obj[key] || obj.en || '';
}
