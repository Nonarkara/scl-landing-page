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

  // ──── BATCH 1 additions ────

  {
    id: 'tak-mayor',
    name: 'นายณพล ชยานนท์ภักดี',
    batch: 1,
    sector: 'public',
    role: { en: 'Mayor of Tak City Municipality', th: 'นายกเทศมนตรีเมืองตาก', cn: '达府达市市长' },
    news: {
      en: 'Featured in Thailand Learning City 2025 — leading Tak as a "City of Identity", weaving the Loy Kratong Sai festival into school curricula and training youth as community heritage guides.',
      th: 'ได้รับการนำเสนอในโครงการ Thailand Learning City 2025 ขับเคลื่อน "เมืองตากเมืองอัตลักษณ์" บูรณาการประเพณีลอยกระทงสายเข้าหลักสูตรและพัฒนาเยาวชนเป็นมัคคุเทศก์ท้องถิ่น',
      cn: '入选"泰国学习城市 2025"，以"达城文化特色城市"为题，将水灯节传统融入课程，培训青少年担任社区文化导览员。',
    },
    source: 'The City Leaders',
    url: 'https://thecityleaders.com/thailand-learning-city-2025-%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%95%E0%B8%B2%E0%B8%81-%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%AD%E0%B8%B1%E0%B8%95%E0%B8%A5%E0%B8%B1/',
  },

  // ──── BATCH 2 additions (3 items; strip shows when 4th added) ────

  {
    id: 'maesai-mayor',
    name: 'นายชัยยนต์ ศรีสมุทร',
    batch: 2,
    sector: 'public',
    role: { en: 'Mayor of Mae Sai Municipality, Chiang Rai', th: 'นายกเทศมนตรีตำบลแม่สาย จังหวัดเชียงราย', cn: '清莱府美赛镇市长' },
    news: {
      en: 'Witnessed the signing of three cross-border trade MOUs between Thai SMEs and partners from Laos and China at the East-Northern Thailand & GMS Expo at the Mae Sai border checkpoint.',
      th: 'ร่วมเป็นสักขีพยานพิธีลงนาม MOU การค้าข้ามแดน 3 ฉบับ ระหว่างผู้ประกอบการไทย สปป.ลาว และจีน ในงานมหกรรมสีสันล้านนาตะวันออก ณ ด่านพรมแดนแม่สาย',
      cn: '在东北泰国与大湄公河次区域博览会美赛口岸，见证泰国中小企业与老挝、中国合作伙伴签署三份跨境贸易合作备忘录。',
    },
    source: 'พาณิชย์จังหวัดเชียงราย',
    url: 'https://chiangrai.moc.go.th/th/content/category/detail/id/161/iid/78716',
  },

  {
    id: 'pattani-mayor',
    name: 'นายนิอันนุวา สุไลมาน',
    batch: 2,
    sector: 'public',
    role: { en: 'Mayor of Pattani City Municipality', th: 'นายกเทศมนตรีเมืองปัตตานี', cn: '北大年市市长' },
    news: {
      en: 'Won re-election as Mayor of Pattani with 10,586 votes — and his “Baan Rao” team swept all three council zones, an unprecedented clean sweep in Pattani’s municipal history.',
      th: 'ได้รับเลือกตั้งซ้ำด้วยคะแนน 10,586 คะแนน ทีม "บ้านเรา" กวาดชัยสมาชิกสภาเทศบาลทั้ง 3 เขต ซึ่งไม่เคยเกิดขึ้นมาก่อนในประวัติศาสตร์การเลือกตั้งเทศบาลเมืองปัตตานี',
      cn: '以 10,586 票赢得连任，领导的"我们的家"团队横扫全部三个市议会选区，开创北大年市选举史上全胜纪录。',
    },
    source: 'มติชน',
    url: 'https://www.matichon.co.th/region/news_5178475',
  },

    news: {
      en: 'Featured in Thailand Learning City 2025 — leading Tak as a "City of Identity", weaving the Loy Kratong Sai festival into school curricula and training youth as community heritage guides.',
      th: 'ได้รับการนำเสนอในโครงการ Thailand Learning City 2025 ขับเคลื่อน "เมืองตากเมืองอัตลักษณ์" บูรณาการประเพณีลอยกระทงสายเข้าหลักสูตรและพัฒนาเยาวชนเป็นมัคคุเทศก์ท้องถิ่น',
      cn: '入选"泰国学习城市 2025"，以"达城文化特色城市"为题，将水灯节传统融入课程，培训青少年担任社区文化导览员。',
    },
    source: 'The City Leaders',
    url: 'https://thecityleaders.com/thailand-learning-city-2025-%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%95%E0%B8%B2%E0%B8%81-%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%AD%E0%B8%B1%E0%B8%95%E0%B8%A5%E0%B8%B1/',
  },

  // ──── BATCH 3 additions (4 total; strip unlocked) ────

  {
    id: 'nst-mayor',
    name: 'ดร.กณพ เกตุชาติ',
    batch: 3,
    sector: 'public',
    role: { en: 'Mayor of Nakhon Si Thammarat City', th: 'นายกเทศมนตรีนครนครศรีธรรมราช', cn: '洛坤市市长' },
    news: {
      en: 'IoT sensors and a digital alert platform give the city 48-hour resolution commitments — transparent real-time flood-risk communication to 70,000 registered residents.',
      th: 'เซนเซอร์ IoT และแพลตฟอร์มแจ้งเตือนดิจิทัลสำหรับประชาชนกว่า 70,000 คน รับประกันการแก้ปัญหาภายใน 48 ชั่วโมง สื่อสารความเสี่ยงน้ำท่วมเรียลไทม์อย่างโปร่งใส',
      cn: 'IoT 传感器与面向 7 万居民的数字预警平台，承诺 48 小时响应，实现洪水风险实时透明通报。',
    },
    source: 'Post Today Smart City',
    url: 'https://www.posttoday.com/smart-city/713049',
  },

  {
    id: 'kohong-mayor',
    name: 'นายทวีศักดิ์ ทวีรัตน์',
    batch: 3,
    sector: 'public',
    role: { en: 'Mayor of Ko Hong City, Songkhla', th: 'นายกเทศมนตรีเมืองคอหงส์ จังหวัดสงขลา', cn: '宋卡府科宏市市长' },
    news: {
      en: 'depa approved Ko Hong’s “Learning City to Smart City” proposal — one of only two cities greenlit that session — and the municipality launched its citizen platform app.',
      th: 'ดีป้าอนุมัติโครงการ "คอหงส์เมืองแห่งการเรียนรู้สู่สมาร์ทซิตี้" เป็น 1 ใน 2 เมืองที่ผ่านในรอบเดียวกัน พร้อมเปิดตัวแอปบริการประชาชน',
      cn: 'depa 批准科宏"学习城市到智慧城市"提案，是当场仅两个通过项目之一；同时推出市民服务平台应用。',
    },
    source: 'Post Today Smart City',
    url: 'https://www.posttoday.com/smart-city/710140',
  },

  {
    id: 'ubon-depgov',
    name: 'นางทรงลักษณ์ วรภัย',
    batch: 3,
    sector: 'public',
    role: { en: 'Deputy Governor of Ubon Ratchathani', th: 'รองผู้ว่าราชการจังหวัดอุบลราชธานี', cn: '乌汶府副府尹' },
    news: {
      en: 'Appointed chair of the provincial committee for evaluating outstanding community-development activities across Ubon Ratchathani — spanning all district groups.',
      th: 'ได้รับมอบหมายให้เป็นประธานคณะกรรมการคัดสรรกิจกรรมพัฒนาชุมชนดีเด่นระดับจังหวัดอุบลราชธานี กำกับดูแลการประเมินทั่วทุกกลุ่มอำเภอ',
      cn: '获任命为乌汶府"优秀社区发展活动评选"省级委员会主席，统筹协调全府各县镇评估工作。',
    },
    source: 'กรมประชาสัมพันธ์ อุบลราชธานี',
    url: 'https://ubonratchathani.prd.go.th/th/content/category/detail/id/33/iid/300804',
  },

  // ──── BATCH 4 additions (4 total; strip unlocked) ────

  {
    id: 'lomsak-mayor',
    name: 'นายกิตติ พั้วช่วย',
    batch: 4,
    sector: 'public',
    role: { en: 'Mayor of Lom Sak City, Phetchabun', th: 'นายกเทศมนตรีเมืองหล่มสัก จังหวัดเพชรบูรณ์', cn: '碧差汶府隆萨克市市长' },
    news: {
      en: 'Led hands-on flood response across 11 communities as the Pak Sak River rose — supervising sandbag placement and coordinating Army Corps of Engineers machinery until the crisis resolved the same day.',
      th: 'นำทัพรับมืออุทกภัยใน 11 ชุมชน ลงพื้นที่ควบคุมวางบิ๊กแบ็ก ประสานรถตักดินและกรมทหารช่าง จนสถานการณ์คลี่คลายในวันเดียวกัน',
      cn: '帕萨克河水位告急时，亲赴现场指挥 11 个社区防洪应急，协调工程车辆与军事工兵部队，当日化解险情。',
    },
    source: 'Naewna',
    url: 'https://www.naewna.com/local/911488',
  },

  {
    id: 'jarton-iso',
    name: 'นายธีธัช จึงกานต์กุล',
    batch: 4,
    sector: 'private',
    role: { en: 'CEO, Jarton Group', th: 'กรรมการผู้จัดการ บริษัท จาร์ตัน กรุ๊ป จำกัด', cn: 'Jarton Group 首席执行官' },
    news: {
      en: 'Received the ISO/IEC 29110 international software quality certification from Thailand’s Minister of Digital Economy — covering Jarton’s CityOS smart-city platform, Town community app, and Home smart-home system.',
      th: 'รับมอบใบรับรองมาตรฐาน ISO/IEC 29110 ระดับนานาชาติ จากรัฐมนตรีว่าการกระทรวงดีอีเอส ครอบคลุมแพลตฟอร์ม CityOS ระบบบริหารเมืองอัจฉริยะ แอป Town และ Home',
      cn: '从泰国数字经济与社会部部长手中获颁 ISO/IEC 29110 国际软件质量认证，覆盖智慧城市管理平台 CityOS、社区应用 Town 及智能家居系统 Home。',
    },
    source: 'Newswit',
    url: 'https://www.newswit.com/th/if33wkagywf42bws7y420kxwrbsvewuc',
  },

  // ──── BATCH 5 additions (5 total; component shows first 4) ────

  {
    id: 'rawai-mayor',
    name: 'นายเทมส์ ไกรทัศน์',
    batch: 5,
    sector: 'public',
    role: { en: 'Mayor of Rawai Municipality, Phuket', th: 'นายกเทศมนตรีตำบลราไวย์ จังหวัดภูเก็ต', cn: '普吉府拉威市长' },
    news: {
      en: 'Rawai advanced to represent Phuket in the national "Model Local Organizations Promoting Tourism Through Local Identity" competition — with the "Laem Phrom Thep" coastal cultural identity initiative.',
      th: 'เทศบาลตำบลราไวย์เป็นตัวแทนจังหวัดภูเก็ตในการประกวดระดับชาติ "อปท.ต้นแบบส่งเสริมการท่องเที่ยวผ่านอัตลักษณ์ท้องถิ่น" ด้วยโครงการ "เสน่ห์พรหมเทพ"',
      cn: '拉威镇代表普吉府参加全国地方特色旅游示范评选，以"帕罗米泰普角"滨海文化特色项目参赛。',
    },
    source: 'ภูเก็ตโพสต์',
    url: 'https://www.phuketpostnews.com/2026/05/20/%E0%B8%97%E0%B8%95-%E0%B8%A3%E0%B8%B2%E0%B9%84%E0%B8%A7%E0%B8%A2-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%A3%E0%B8%9A%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1/',
  },

  {
    id: 'realsmart-ipo',
    name: 'นายภูกิจ ดิศธรานนท์',
    batch: 5,
    sector: 'private',
    role: { en: 'CEO, Real Smart PCL (REAL25)', th: 'ประธานเจ้าหน้าที่บริหาร บริษัท เรียล สมาร์ท จำกัด (มหาชน)', cn: 'Real Smart 上市公司 CEO (REAL25)' },
    news: {
      en: 'Following Real Smart’s public listing as REAL25, announced "RealVision" — an AI-powered organisation intelligence platform targeting 30% annual revenue growth across 30 industries and Asian regional expansion.',
      th: 'หลังเข้าตลาด LiVEx ในชื่อหุ้น REAL25 เปิดตัว "RealVision" แพลตฟอร์ม AI วิเคราะห์ข้อมูลองค์กร ตั้งเป้ารายได้โต 30% ต่อปีใน 30 อุตสาหกรรม และขยายสู่ภูมิภาคเอเชีย',
      cn: 'Real Smart 以 REAL25 完成上市后，发布 AI 企业智能平台"RealVision"，目标年收入增长 30%，并推进亚洲扩张。',
    },
    source: 'Bangkok X',
    url: 'https://bangkokx.me/real-smart-16092025/',
  },

  // ──── BATCH 6 additions (3 items; strip shows when 4th added) ────

  {
    id: 'jana-smartcity',
    name: 'นายดุสิต จันทรัตน์',
    batch: 6,
    sector: 'public',
    role: { en: 'Mayor of Jana Municipality, Songkhla', th: 'นายกเทศมนตรีตำบลจะนะ จังหวัดสงขลา', cn: '宋卡府差纳镇市长' },
    news: {
      en: 'Jana Municipality received official Smart City Zone certification from depa and launched the "ทต.จะนะ" citizen services app — formalising its status as a promoted smart city.',
      th: 'เทศบาลตำบลจะนะได้รับการประกาศเป็น "เขตส่งเสริมเมืองอัจฉริยะ" จาก ดีป้า และเปิดตัวแอป "ทต.จะนะ" ให้บริการประชาชนและพ่อค้าแม่ค้า',
      cn: '差纳镇获 depa 授予"智慧城市促进区"认定，并推出市民服务应用"差纳镇"。',
    },
    source: 'depa Network',
    url: 'http://www.namnoi.go.th/networknews/detail/281414',
  },

  {
    id: 'dtc-smartshop',
    name: 'นายคีรินทร์ รุ่งธนเกียรติ',
    batch: 6,
    sector: 'private',
    role: { en: 'CEO, DTC Enterprise PCL', th: 'ประธานเจ้าหน้าที่บริหาร บริษัท ดี.ที.ซี. เอ็นเตอร์ไพรส์ จำกัด (มหาชน)', cn: 'DTC Enterprise 上市公司 CEO' },
    news: {
      en: 'Launched "DTC Smart Shop Solutions" — an integrated IoT platform combining digital signage, 24/7 smart CCTV, and remote energy management for retail businesses.',
      th: 'เปิดตัว "DTC Smart Shop Solutions" แพลตฟอร์ม IoT ครบวงจรสำหรับค้าปลีก ผสาน Digital Signage กล้อง CCTV อัจฉริยะ และการจัดการพลังงานระยะไกล',
      cn: '推出"DTC Smart Shop Solutions"一体化 IoT 平台，融合数字标牌、24 小时智能监控与远程能耗管理，面向零售企业。',
    },
    source: 'Kaohoon',
    url: 'https://www.kaohoon.com/news/806294',
  },

  {
    id: 'amr-iot',
    name: 'นายไครยพงศ์ จิตประสพชัย',
    batch: 6,
    sector: 'private',
    role: { en: 'CEO, AMR Asia PCL', th: 'ประธานเจ้าหน้าที่บริหาร บริษัท เอเอ็มอาร์ เอเชีย จำกัด (มหาชน)', cn: 'AMR Asia 上市公司 CEO' },
    news: {
      en: 'AMR Asia showcased its Facility Management System and next-gen IoT network infrastructure at Industrial IoT Expo 2025 — supporting Thailand’s Industry 5.0 transition with Nokia and Fortinet.',
      th: 'บริษัท เอเอ็มอาร์ เอเชีย จัดแสดง Facility Management System และโครงสร้างพื้นฐาน IoT ยุคใหม่ ในงาน Industrial IoT Expo 2025 สนับสนุนการเปลี่ยนผ่าน Industry 5.0 ร่วมกับ Nokia และ Fortinet',
      cn: 'AMR Asia 在工业物联网博览会 2025 展示设施管理系统与新一代 IoT 网络基础设施，携手诺基亚和 Fortinet 推动泰国工业 5.0 转型。',
    },
    source: 'Kaohoon',
    url: 'https://www.kaohoon.com/pr/793376',
  },

];

export function pickSpotlightText(obj, language = 'en') {
  if (!obj) return '';
  const key = language.toLowerCase().split('-')[0];
  return obj[key] || obj.en || '';
}
