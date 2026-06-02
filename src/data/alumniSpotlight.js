// Alumni in the news — a curated, source-verified snapshot of what notable SCL
// graduates are doing now. Every entry links to a real, working public source
// (no fabricated URLs). Names are drawn from the official depa alumni lists.
// Verified 2026-06-03.

export const spotlightLabels = {
  kicker: {
    en: 'Alumni in the news',
    th: 'ศิษย์เก่าในหน้าข่าว',
    cn: '校友新闻动态',
  },
  title: {
    en: 'What the network is doing now',
    th: 'เครือข่ายศิษย์เก่ากำลังขับเคลื่อนอะไรอยู่',
    cn: '校友网络正在推动什么',
  },
  description: {
    en: 'A snapshot of recent public mentions — governors, mayors, and executives from the SCL network making news in their cities and companies. Each links to its original source.',
    th: 'ภาพรวมการปรากฏในสื่อล่าสุด ทั้งผู้ว่าราชการจังหวัด นายกเทศมนตรี และผู้บริหารจากเครือข่าย SCL ที่กำลังสร้างความเคลื่อนไหวในเมืองและองค์กรของตน แต่ละรายการเชื่อมไปยังแหล่งข่าวต้นทาง',
    cn: '近期公开报道的缩影——来自 SCL 网络的省长、市长与企业高管，正在各自的城市与企业中成为新闻。每条均链接至原始来源。',
  },
  readLabel: { en: 'Read the source', th: 'อ่านแหล่งข่าว', cn: '阅读来源' },
  publicTag: { en: 'Public sector', th: 'ภาครัฐ', cn: '公共部门' },
  privateTag: { en: 'Private sector', th: 'ภาคเอกชน', cn: '私营部门' },
  note: {
    en: 'Public mentions are illustrative, not exhaustive — the directory below holds all 306 verified records.',
    th: 'ตัวอย่างการปรากฏในสื่อนี้เป็นเพียงส่วนหนึ่ง ทำเนียบด้านล่างรวมระเบียนที่ตรวจสอบแล้วทั้ง 306 รายชื่อ',
    cn: '以上公开报道仅为示例，并非全部；下方目录收录全部 306 条已核验记录。',
  },
};

export const alumniSpotlight = [
  {
    id: 'rangsit',
    name: 'ร.ต.อ. ดร.ตรีลุพธ์ ธูปกระจ่าง',
    batch: 1,
    sector: 'public',
    role: {
      en: 'Mayor of Rangsit City, Pathum Thani',
      th: 'นายกเทศมนตรีนครรังสิต จังหวัดปทุมธานี',
      cn: '巴吞他尼府兰实市市长',
    },
    news: {
      en: 'Drove the “Rangsit Smart City Showcases” — held up as a national model for applying digital innovation to city services.',
      th: 'ขับเคลื่อนงาน “Rangsit Smart City Showcases” ที่ถูกยกเป็นต้นแบบระดับประเทศในการนำนวัตกรรมดิจิทัลมาพัฒนาบริการเมือง',
      cn: '主导“兰实智慧城市展示”，被视为以数字创新提升城市服务的全国样板。',
    },
    source: 'Royal Thai Government',
    url: 'https://www.thaigov.go.th/news/contents/ministry_details/89912',
  },
  {
    id: 'khonkaen',
    name: 'ธีระศักดิ์ ฑีฆายุพันธุ์',
    batch: 1,
    sector: 'public',
    role: {
      en: 'Mayor of Khon Kaen City',
      th: 'นายกเทศมนตรีนครขอนแก่น',
      cn: '孔敬市市长',
    },
    news: {
      en: 'Launched Khon Kaen’s AI-powered City Digital Data Platform, now serving all 95 communities.',
      th: 'เปิดตัวแพลตฟอร์มข้อมูลเมือง (City Digital Data Platform) ขับเคลื่อนด้วย AI ให้บริการครอบคลุมทั้ง 95 ชุมชน',
      cn: '推出由 AI 驱动的孔敬城市数字数据平台，已覆盖全部 95 个社区。',
    },
    source: 'Post Today',
    url: 'https://www.posttoday.com/smart-city/709704',
  },
  {
    id: 'nakhonpathom',
    name: 'อโรชา นันทมนตรี',
    batch: 5,
    sector: 'public',
    role: {
      en: 'Governor of Nakhon Pathom Province',
      th: 'ผู้ว่าราชการจังหวัดนครปฐม',
      cn: '佛统府府尹',
    },
    news: {
      en: 'Appointed by the cabinet as Governor of Nakhon Pathom — the province’s first female governor.',
      th: 'ได้รับการแต่งตั้งจาก ครม. ให้ดำรงตำแหน่งผู้ว่าราชการจังหวัดนครปฐม — ผู้ว่าฯ หญิงคนแรกของจังหวัด',
      cn: '经内阁任命出任佛统府府尹——该府首位女性府尹。',
    },
    source: 'Siam Rath',
    url: 'https://siamrath.co.th/n/590089',
  },
  {
    id: 'sisaket',
    name: 'อนุรัตน์ ธรรมประจำจิต',
    batch: 1,
    sector: 'public',
    role: {
      en: 'Governor of Sisaket Province',
      th: 'ผู้ว่าราชการจังหวัดศรีสะเกษ',
      cn: '四色菊府府尹',
    },
    news: {
      en: 'Now Governor of Sisaket — he joined SCL as a deputy governor — leading a province-wide “healthy, sustainably livable city” drive.',
      th: 'ก้าวขึ้นเป็นผู้ว่าราชการจังหวัดศรีสะเกษ จากที่เข้าร่วม SCL ในตำแหน่งรองผู้ว่าฯ ปัจจุบันขับเคลื่อนทั้งจังหวัดสู่ “เมืองสุขภาพดี น่าอยู่อย่างยั่งยืน”',
      cn: '从参加 SCL 时的副府尹晋升为四色菊府府尹，如今正全府推动“健康宜居、可持续之城”。',
    },
    source: 'Siam Rath',
    url: 'https://siamrath.co.th/regional/news/148610',
  },
  {
    id: 'chutiporn',
    name: 'ชุติพร เสชัง',
    batch: 1,
    sector: 'public',
    role: {
      en: 'Governor of Nakhon Sawan Province',
      th: 'ผู้ว่าราชการจังหวัดนครสวรรค์',
      cn: '那空沙旺府府尹',
    },
    news: {
      en: 'Full circle: royally appointed Governor of Nakhon Sawan — the province where she joined SCL as deputy governor, now leading it herself.',
      th: 'ครบวงจร: ได้รับโปรดเกล้าฯ แต่งตั้งเป็นผู้ว่าราชการจังหวัดนครสวรรค์ — จังหวัดที่เธอเข้าร่วม SCL ในฐานะรองผู้ว่าฯ และวันนี้กลับมานั่งเก้าอี้ผู้ว่าราชการจังหวัดเต็มตัว',
      cn: '画下圆满一笔：获皇家任命为那空沙旺府府尹——正是她参加 SCL 时担任副府尹的那个府，如今由她亲自执掌。',
    },
    source: 'Thai PBS',
    url: 'https://www.thaipbs.or.th/news/content/358484',
  },
  {
    id: 'lamphun',
    name: 'ประภัสร์ ภู่เจริญ',
    batch: 1,
    sector: 'public',
    role: {
      en: 'Mayor of Lamphun City',
      th: 'นายกเทศมนตรีเมืองลำพูน',
      cn: '南奔市市长',
    },
    news: {
      en: 'Profiled in “THE MAYOR” for driving a culture-led smart city through the Million Lantern festival and an ageing-society strategy.',
      th: 'ได้รับการนำเสนอในคอลัมน์ “THE MAYOR” ฐานะผู้นำเมืองอัจฉริยะที่ขับเคลื่อนด้วยทุนวัฒนธรรม ผ่านเทศกาลโคมแสนดวงและยุทธศาสตร์สังคมสูงวัย',
      cn: '入选“THE MAYOR”专题——以“万盏花灯”节庆与老龄社会战略，打造以文化驱动的智慧城市。',
    },
    source: 'We Citizen Thailand',
    url: 'https://wecitizensthailand.com/the-mayor-ประภัสร์-ภู่เจริญ-นาย/',
  },
  {
    id: 'symphony',
    name: 'กรัณย์พล อัศวสุวรรณ',
    batch: 1,
    sector: 'private',
    role: {
      en: 'Managing Director, Symphony Communication PCL (SYMC)',
      th: 'กรรมการผู้จัดการ บมจ. ซิมโฟนี่ คอมมูนิเคชั่น (SYMC)',
      cn: 'Symphony Communication 上市公司（SYMC）董事总经理',
    },
    news: {
      en: 'Leads Symphony Communication’s national high-speed fibre backbone — core infrastructure behind Thailand’s digital economy.',
      th: 'นำ บมจ. ซิมโฟนี่ คอมมูนิเคชั่น ขยายโครงข่ายไฟเบอร์ความเร็วสูงระดับประเทศ โครงสร้างพื้นฐานสำคัญของเศรษฐกิจดิจิทัลไทย',
      cn: '带领 Symphony Communication 拓展全国高速光纤骨干网——泰国数字经济的核心基础设施。',
    },
    source: 'MGR Online',
    url: 'https://mgronline.com/cyberbiz/detail/9650000094176',
  },
];

export function pickSpotlightText(obj, language = 'en') {
  if (!obj) return '';
  const key = language.toLowerCase().split('-')[0];
  return obj[key] || obj.en || '';
}
