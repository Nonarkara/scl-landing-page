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
    cn: '近期公开报道的缩影——来自 SCL 网络的府尹、市长与企业高管，正在各自的城市与企业中成为新闻。每条均链接至原始来源。',
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
      en: 'Set out a four-point agenda to drive Rangsit toward a people-first smart city.',
      th: 'แถลงนโยบาย 4 ด้าน มุ่งพัฒนานครรังสิตสู่การเป็นเมืองอัจฉริยะที่ยึดประชาชนเป็นศูนย์กลาง',
      cn: '公布四大施政方针，推动兰实迈向以人为本的智慧城市。',
    },
    source: 'Banmuang',
    url: 'https://www.banmuang.co.th/news/region/434200',
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
    id: 'roiet',
    name: 'ชัชวาลย์ เบญจสิริวงศ์',
    batch: 4,
    sector: 'public',
    role: {
      en: 'Governor of Roi Et Province',
      th: 'ผู้ว่าราชการจังหวัดร้อยเอ็ด',
      cn: '黎逸府府尹',
    },
    news: {
      en: 'As Governor of Roi Et he went viral nationwide for personally fronting the province’s heritage-festival promotion — turning culture into city marketing.',
      th: 'ในฐานะผู้ว่าราชการจังหวัดร้อยเอ็ด ท่านลงมือโปรโมตงานบุญประเพณีของจังหวัดด้วยตนเองจนเป็นไวรัลทั่วประเทศ เปลี่ยนทุนวัฒนธรรมให้กลายเป็นการตลาดเมือง',
      cn: '作为黎逸府府尹，他亲自为全府的传统节庆站台造势、在泰国全网刷屏，把文化转化为城市营销。',
    },
    source: 'Naewna',
    url: 'https://www.naewna.com/likesara/949514',
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
    id: 'mahasarakham',
    name: 'ภาคิน ติระพงศ์ไพบูลย์',
    batch: 3,
    sector: 'public',
    role: {
      en: 'Mayor of Mahasarakham City',
      th: 'นายกเทศมนตรีเมืองมหาสารคาม',
      cn: '玛哈沙拉堪市市长',
    },
    news: {
      en: 'Re-elected to a second term as Mayor of Mahasarakham on a “learning and happiness city” platform.',
      th: 'ได้รับเลือกตั้งเป็นนายกเทศมนตรีเมืองมหาสารคามสมัยที่สอง ด้วยวิสัยทัศน์ “เมืองแห่งการเรียนรู้และความสุข”',
      cn: '以“学习与幸福之城”的施政愿景，连任玛哈沙拉堪市市长第二届。',
    },
    source: 'LINE Today',
    url: 'https://today.line.me/th/v3/article/vXV71vo',
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
    id: 'jumpot-moi',
    name: 'จุมพฏ วรรณฉัตรสิริ',
    batch: 4,
    sector: 'public',
    role: {
      en: 'Deputy Permanent Secretary, Ministry of the Interior',
      th: 'รองปลัดกระทรวงมหาดไทย',
      cn: '内政部副常务次长',
    },
    news: {
      en: 'Rose from Governor of Bueng Kan to Deputy Permanent Secretary of the Interior in the 2025 senior-leadership reshuffle.',
      th: 'ก้าวจากผู้ว่าราชการจังหวัดบึงกาฬ สู่ตำแหน่งรองปลัดกระทรวงมหาดไทย ในการแต่งตั้งโยกย้ายระดับสูงปี 2568',
      cn: '在 2025 年高层人事调整中，由汶干府府尹晋升为内政部副常务次长。',
    },
    source: 'Thai PBS',
    url: 'https://www.thaipbs.or.th/news/content/355534',
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
      cn: '故事画上圆满的句号：经皇家任命出任那空沙旺府府尹——正是她当年参加 SCL 时担任副府尹的那个府，如今由她亲自执掌。',
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
    id: 'netka',
    name: 'ชาญชัย เจียมโชติพัฒนกุล',
    batch: 5,
    sector: 'private',
    role: {
      en: 'Founder & CEO, Netka System',
      th: 'ผู้ก่อตั้งและซีอีโอ บริษัท เน็ตก้า ซิสเต็ม',
      cn: 'Netka System 创始人兼首席执行官',
    },
    news: {
      en: 'Leads Netka System’s push to bring AI-enhanced network-management software to Thai enterprises and SMEs.',
      th: 'นำ บริษัท เน็ตก้า ซิสเต็ม ผลักดันซอฟต์แวร์บริหารจัดการเครือข่ายที่เสริมด้วย AI สู่องค์กรและ SME ของไทย',
      cn: '带领 Netka System 把 AI 增强的网络管理软件推向泰国企业与中小企业。',
    },
    source: 'MGR Online',
    url: 'https://mgronline.com/cyberbiz/detail/9660000097396',
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
  {
    id: 'astra-md',
    name: 'จันทพร เจริญลาภนพรัตน์',
    batch: 5,
    sector: 'private',
    role: {
      en: 'Managing Director, Astra Communication Service',
      th: 'กรรมการผู้จัดการ บริษัท แอสตรา คอมมิวนิเคชั่น เซอร์วิส',
      cn: 'Astra 通信服务公司董事总经理',
    },
    news: {
      en: 'Graduated in SCL #5 leading Astra Communication — her firm went on to host the next cohort, welcoming SCL #6 for a “Smart Infrastructure in Action” site visit.',
      th: 'สำเร็จหลักสูตร SCL รุ่นที่ 5 ในฐานะผู้นำบริษัท แอสตรา คอมมิวนิเคชั่น — ต่อมาองค์กรของเธอกลับมาเป็นเจ้าภาพต้อนรับ SCL รุ่นที่ 6 ในหัวข้อ “Smart Infrastructure in Action”',
      cn: '她在 SCL 第五期结业，领导 Astra 通信服务公司——其公司随后反过来成为课程的接待方，接待 SCL 第六期前来开展“Smart Infrastructure in Action”参访。',
    },
    source: 'depa',
    url: 'https://www.thaipr.net/general/3666970',
  },
];

export function pickSpotlightText(obj, language = 'en') {
  if (!obj) return '';
  const key = language.toLowerCase().split('-')[0];
  return obj[key] || obj.en || '';
}
