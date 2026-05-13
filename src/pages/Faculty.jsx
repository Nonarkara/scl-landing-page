import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Linkedin, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import './Faculty.css';

const facultyData = [
  {
    name: { en: "Dr. Passakon Prathombutr", th: "ดร. ภาสกร ประถมบุตร", cn: "Passakon Prathombutr 博士" },
    role: { en: "Special Expert, depa", th: "ผู้เชี่ยวชาญพิเศษ, depa", cn: "depa 特别专家" },
    tag: { en: "National Policy Architect", th: "สถาปนิกนโยบายแห่งชาติ", cn: "国家政策架构师" },
    photo: "/photos%20faculty/Passakon.jpg",
    bio: {
      en: "Special Expert at depa and the agency's former Senior Executive Vice President. With more than 30 years of experience, he has led Thailand's national smart city policy planning from the start.",
      th: "ผู้เชี่ยวชาญพิเศษของ depa และอดีตรองผู้อำนวยการอาวุโส มีประสบการณ์มากกว่า 30 ปี และเป็นผู้นำการวางนโยบายเมืองอัจฉริยะระดับชาติของประเทศไทยมาตั้งแต่ต้น",
      cn: "depa 特别专家，曾任该机构高级执行副总裁。拥有逾三十年的工作经验，自始至终引领泰国国家智慧城市政策的规划与制定。",
    },
    expanded: {
      en: "The person most responsible for how Thailand defines, certifies, and scales smart cities. Passakon led depa's strategy to designate smart city areas nationwide and architected the City Data Platform (CDP) now connecting municipal data across dozens of cities. His 30+ years span NECTEC, NSTDA, and depa — the full arc from early digital infrastructure to AI-integrated municipal systems. He holds a PhD in Software Architecture and Computer Networking from the University of Missouri and serves as President of the Thai ITS Association. In SCL, no other faculty member can provide what he does: the regulatory history, the funding logic, and an explanation of exactly why the national framework is built the way it is.",
      th: "ดร. ภาสกรคือสถาปนิกหลักของกรอบแนวคิดเมืองอัจฉริยะแห่งชาติของไทย รวมถึง City Data Platform (CDP) ที่เชื่อมต่อข้อมูลเทศบาลกว่าหลายสิบเมืองในปัจจุบัน ประสบการณ์กว่า 30 ปีครอบคลุม NECTEC, NSTDA และ depa พร้อมปริญญาเอกด้านสถาปัตยกรรมซอฟต์แวร์จากมหาวิทยาลัยมิสซูรี และดำรงตำแหน่งประธานสมาคม ITS ไทย ใน SCL ไม่มีคณาจารย์ท่านใดให้สิ่งที่ท่านให้ได้: ประวัติกฎระเบียบ ตรรกะการจัดสรรงบประมาณ และคำอธิบายว่าเหตุใดกรอบแนวคิดระดับชาติจึงถูกสร้างขึ้นในลักษณะที่เป็นอยู่",
      cn: "Passakon 是泰国国家智慧城市框架的主要架构师，包括如今连接数十个城市市政数据的城市数据平台（CDP）。三十余年履历横跨 NECTEC、NSTDA 和 depa，持有密苏里大学软件架构博士学位，兼任泰国 ITS 协会主席。在 SCL 中，没有其他教师能提供他所给予的内容：政策框架的历史沿革、depa 的资金逻辑，以及国家框架为何如此构建的第一手解释。",
    },
    linkedin: "https://www.linkedin.com/in/passakon-prathombutr-b74b268/",
  },
  {
    name: { en: "Dr. Supakorn Siddhichai", th: "ดร. ศุภกร สิทธิไชย", cn: "Supakorn Siddhichai 博士" },
    role: { en: "Acting President & CEO, depa", th: "รักษาการผู้อำนวยการ depa", cn: "depa 代理总裁兼首席执行官" },
    tag: { en: "Institutional Champion", th: "ผู้นำสถาบัน", cn: "机构推动者" },
    photo: "/photos%20faculty/Supakorn.avif",
    bio: {
      en: "Acting President and CEO at depa. He drives SCL programs (e.g., SCL#1, #2) and Thailand's smart city initiatives, including updates on CAV and smart city frameworks.",
      th: "รักษาการผู้อำนวยการของ depa ผู้ขับเคลื่อนหลักสูตร SCL (รวมถึง SCL รุ่นที่ 1 และ 2) และโครงการเมืองอัจฉริยะของประเทศไทย",
      cn: "depa 代理总裁兼首席执行官，主导 SCL 课程以及泰国智慧城市相关举措。",
    },
    expanded: {
      en: "Imperial College-trained (EE), Supakorn led depa's Smart City Promotion division from 2017, oversaw the launch of Phuket as Thailand's first smart city pilot, and has represented Thailand at GSMA Smart Mobility and the ASEAN-Japan Smart Cities Network. As Acting President of depa, he is the institutional owner of the SCL programme itself — the person who decides its scope, resources, and future. His research background spans computer vision, intelligent transport, and IoT. In SCL, participants can ask him directly what depa will and won't fund, which city designations are under review, and where the national smart city agenda is heading — a conversation no consultant or academic can provide.",
      th: "ศึกษาจาก Imperial College London (วิศวกรรมไฟฟ้า) ดร. ศุภกรนำแผนกส่งเสริมเมืองอัจฉริยะของ depa ตั้งแต่ปี 2560 กำกับดูแลการเปิดตัวภูเก็ตในฐานะเมืองอัจฉริยะนำร่องแห่งแรกของไทย และเป็นตัวแทนของไทยใน GSMA Smart Mobility และ ASEAN-Japan Smart Cities Network ในฐานะรักษาการผู้อำนวยการ depa ท่านคือเจ้าของสถาบันของหลักสูตร SCL ใน SCL ผู้เข้าร่วมสามารถถามท่านได้โดยตรงว่า depa จะและจะไม่สนับสนุนสิ่งใด การกำหนดเมืองใดอยู่ระหว่างการพิจารณา และวาระเมืองอัจฉริยะระดับชาติกำลังมุ่งหน้าไปทางใด",
      cn: "毕业于帝国理工学院（电气工程），Dr. Supakorn 自 2017 年起领导 depa 智慧城市推广部门，监督普吉岛作为泰国首个智慧城市试点的启动，并代表泰国参加 GSMA Smart Mobility 和日本-东盟智慧城市网络。作为 depa 代理总裁，他是 SCL 课程的机构所有者。在 SCL 中，学员可以直接询问 depa 将支持什么、不支持什么，哪些城市认定正在审查，以及国家智慧城市议程的走向——这是任何顾问或学者都无法提供的对话。",
    },
    linkedin: "https://www.linkedin.com/in/supakorn-siddhichai/",
  },
  {
    name: { en: "Dr. Non Arkaraprasertkul", th: "ดร. นน อัครประเสริฐกุล", cn: "农博士" },
    role: { en: "Smart City Leadership Expert & Programme Co-designer", th: "ผู้เชี่ยวชาญด้านภาวะผู้นำเมืองอัจฉริยะ และผู้ร่วมออกแบบหลักสูตร", cn: "智慧城市领导力专家、课程联合设计者" },
    tag: { en: "Programme Architect", th: "ผู้ออกแบบหลักสูตร", cn: "课程架构师" },
    photo: "/photos%20faculty/Non.jpg",
    bio: {
      en: "A leading expert in smart city leadership, having taught in SCL for five batches and co-designing the programme since 2022. PhD from Harvard in Anthropology with expertise in urban design and technology.",
      th: "ผู้เชี่ยวชาญด้านภาวะผู้นำเมืองอัจฉริยะ สอนใน SCL มาแล้วห้ารุ่น และร่วมออกแบบหลักสูตรตั้งแต่ปี 2565 จบปริญญาเอกด้านมานุษยวิทยาจากมหาวิทยาลัยฮาร์วาร์ด",
      cn: "智慧城市领导力领域的核心专家，已在 SCL 授课五届，并自 2022 年起共同设计该课程。哈佛大学人类学博士。",
    },
    expanded: {
      en: "Harvard-Yenching Scholar and PhD in Anthropology from Harvard, with additional degrees from MIT and Oxford. Non is the author of the Smart City Primer — the most accessible ASEAN-facing smart city framework text — and has co-designed SCL across five cohorts since 2022. His research spans Shanghai's historic urban neighborhoods, Bangkok's mobility corridors, and ASEAN secondary cities, applying ethnographic methods to understand how residents actually use (or avoid) smart infrastructure. He built the Smart City Thailand Index (SCITI) and the SLIC global 163-city ranking, and works across the ASEAN Smart Cities Network. The only SCL faculty member who designed the programme itself — he explains not just what the curriculum contains, but why each element was chosen and what failure mode it is designed to prevent.",
      th: "นักวิชาการ Harvard-Yenching ปริญญาเอกมานุษยวิทยาจากฮาร์วาร์ด พร้อมปริญญาเพิ่มเติมจาก MIT และอ็อกซ์ฟอร์ด ดร. นนเป็นผู้เขียน Smart City Primer — ตำราเมืองอัจฉริยะที่เข้าถึงได้มากที่สุดในบริบทอาเซียน — และร่วมออกแบบ SCL มาห้ารุ่นตั้งแต่ปี 2565 งานวิจัยของท่านครอบคลุมย่านประวัติศาสตร์เซี่ยงไฮ้ ทางเดินการสัญจรในกรุงเทพฯ และเมืองรองในอาเซียน โดยใช้วิธีเชิงชาติพันธุ์วรรณาเพื่อเข้าใจว่าประชาชนใช้หรือหลีกเลี่ยงโครงสร้างพื้นฐานอัจฉริยะอย่างไร ท่านสร้าง SCITI และการจัดอันดับเมืองโลก SLIC ซึ่งมี 163 เมือง ในฐานะคณาจารย์เพียงคนเดียวที่ออกแบบหลักสูตรเอง ท่านอธิบายได้ไม่เพียงว่าหลักสูตรมีอะไร แต่ยังว่าทำไมแต่ละองค์ประกอบถึงถูกเลือก",
      cn: "哈佛大学燕京学者，哈佛人类学博士，兼具 MIT 与牛津学位。Dr. Non 是《智慧城市手册》的作者——东盟语境下最易获取的智慧城市框架文本——并自 2022 年起联合设计 SCL 课程已历五届。其研究横跨上海历史街区、曼谷出行廊道和东盟次级城市，运用民族志方法理解居民如何真实使用（或回避）智慧基础设施。他还构建了 SCITI 和全球 163 城 SLIC 排名工具。作为唯一一位亲自设计课程的教师，他不仅解释课程内容，更阐明每个模块入选背后的逻辑。",
    },
    linkedin: "https://www.linkedin.com/in/drnon/",
  },
  {
    name: { en: "Dr. Rutchanee Gullayanon", th: "ดร. รัชนี กุลยานนท์", cn: "Rutchanee Gullayanon 博士" },
    role: { en: "Executive Vice President, KMITL", th: "รองอธิการบดี, สจล.", cn: "拉甲挽王子工程学院（KMITL）执行副校长" },
    tag: { en: "Innovation Bridge", th: "สะพานนวัตกรรม", cn: "创新桥梁" },
    photo: "/photos%20faculty/Rutchnee.jpg",
    bio: {
      en: "Executive Vice President for Innovation and Global Partnership at King Mongkut's Institute of Technology Ladkrabang (KMITL). She engages in smart city technology incubation and partnerships, including with DOST ISU for regional smart city development.",
      th: "รองอธิการบดีฝ่ายนวัตกรรมและความร่วมมือระดับโลก สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง (สจล.) ทำงานด้านการบ่มเพาะเทคโนโลยีเมืองอัจฉริยะและความร่วมมือระดับภูมิภาค",
      cn: "拉甲挽王子工程学院（KMITL）创新与全球合作执行副校长，专注智慧城市技术孵化与合作网络的搭建。",
    },
    expanded: {
      en: "Georgia Tech-trained, Rutchanee leads KMITL's commercialisation and international research partnerships — translating engineering R&D in machine learning, embedded systems, and robotics into deployable city-scale solutions through structured incubation. KMITL is Thailand's leading engineering university; her role positions her at the intersection of academic research, startup development, and government procurement. Her partnership with DOST ISU (Philippines) is a working model for ASEAN-level smart city technology transfer. In SCL, she gives participants a direct connection to KMITL's research pipeline and international university network — infrastructure that city governments cannot build internally, and partnerships that outlast the programme itself.",
      th: "ศึกษาจาก Georgia Tech ดร. รัชนีนำการค้าเชิงพาณิชย์และความร่วมมือวิจัยนานาชาติของ สจล. — แปลงงานวิจัยวิศวกรรมด้านแมชชีนเลิร์นนิ่ง ระบบฝังตัว และหุ่นยนต์ให้กลายเป็นโซลูชันระดับเมืองที่พร้อมติดตั้งผ่านการบ่มเพาะแบบมีโครงสร้าง ความร่วมมือกับ DOST ISU (ฟิลิปปินส์) เป็นแบบจำลองสำหรับการถ่ายทอดเทคโนโลยีเมืองอัจฉริยะในระดับอาเซียน ใน SCL ท่านเชื่อมต่อผู้เข้าร่วมกับท่อวิจัยและเครือข่ายมหาวิทยาลัยนานาชาติของ สจล. — สิ่งที่หน่วยงานเมืองสร้างขึ้นเองไม่ได้",
      cn: "毕业于佐治亚理工学院，Dr. Rutchanee 主管 KMITL 的商业化与国际研究合作，将机器学习、嵌入式系统与机器人等工程研究通过系统性孵化转化为可部署的城市级解决方案。她与菲律宾 DOST ISU 的合作是东盟智慧城市技术转让的工作模板。在 SCL 中，她为学员搭建通往 KMITL 研究管线和国际大学网络的直接通道——这是城市政府无法内部构建的基础设施。",
    },
    linkedin: "https://www.linkedin.com/in/rutchanee-gullayanon-65779a76/",
  },
  {
    name: { en: "Dr. Kanop Ketchart", th: "ดร. กณพ เกตุชาติ", cn: "Kanop Ketchart 博士" },
    role: { en: "Mayor of Nakhon Si Thammarat City", th: "นายกเทศมนตรีเมืองนครศรีธรรมราช", cn: "洛坤府市市长" },
    tag: { en: "Practitioner Mayor", th: "นายกที่ลงมือทำจริง", cn: "实践型市长" },
    photo: "/photos%20faculty/Kanop.jpg",
    bio: {
      en: "Mayor of Nakhon Si Thammarat City, advocating smart city planning, muslim-friendly tourism, and AI-based education. He exemplifies practical smart city leadership through urban examples shared in regional forums.",
      th: "นายกเทศมนตรีเมืองนครศรีธรรมราช ผู้ขับเคลื่อนการวางผังเมืองอัจฉริยะ การท่องเที่ยวที่เป็นมิตรกับมุสลิม และการศึกษาบนฐาน AI",
      cn: "洛坤府市市长，倡导智慧城市规划、穆斯林友好旅游与基于人工智能的教育。",
    },
    expanded: {
      en: "PhD in Civil Engineering from the University of Colorado, Kanop has turned a flood-prone southern city into an internationally recognised smart city model — winning the Best Partnership Award at the World Smart City Expo 2023 in South Korea. His deployments include a real-time flood early warning platform, a two-way resident-city digital communication system, and metaverse-enabled classrooms in public schools. He speaks at UN ESCAP and UN DESA forums and has been recognised by Thailand's Ministry of Digital Economy as 'Smart City Champion.' In SCL, he is a sitting mayor who has done the engineering — not a consultant describing what a mayor should do. His sessions consistently produce the most direct questions from other city leaders in the room.",
      th: "ปริญญาเอกด้านวิศวกรรมโยธาจากมหาวิทยาลัยโคโลราโด ดร. กณพเปลี่ยนเมืองที่มักประสบอุทกภัยในภาคใต้ให้กลายเป็นต้นแบบเมืองอัจฉริยะระดับนานาชาติ — คว้ารางวัล Best Partnership Award จาก World Smart City Expo 2023 ที่เกาหลีใต้ การพัฒนาของท่านรวมถึงระบบเตือนภัยน้ำท่วมแบบเรียลไทม์ ระบบสื่อสารดิจิทัลสองทางระหว่างประชาชนกับเทศบาล และห้องเรียน Metaverse ในโรงเรียนรัฐ ท่านพูดในเวทีของ UN ESCAP และ UN DESA ใน SCL ท่านคือนายกเทศมนตรีที่นั่งอยู่ตรงหน้าซึ่งทำด้วยตัวเอง — ไม่ใช่ที่ปรึกษาที่อธิบายว่านายกฯ ควรทำอะไร",
      cn: "获科罗拉多大学土木工程博士学位，Kanop 将泰国南部一座饱受洪涝困扰的城市打造为国际认可的智慧城市典范——荣获 2023 年世界智慧城市博览会（韩国）最佳伙伴关系奖。其部署成果包括实时洪水预警平台、居民与市政双向数字通信系统，以及公立学校的元宇宙课堂。他活跃于 UN ESCAP 和 UN DESA 论坛。在 SCL 中，他是一位亲自完成工程实施的现任市长——而非描述市长应该做什么的顾问。",
    },
    linkedin: "https://www.linkedin.com/in/kanop-ketchart-878579279/",
  },
  {
    name: { en: "Dr. Niramon Serisakul", th: "ดร. นิรมล เสรีสกุล", cn: "Niramon Serisakul 博士" },
    role: { en: "Assoc. Prof., Chulalongkorn University", th: "รองศาสตราจารย์ จุฬาลงกรณ์มหาวิทยาลัย", cn: "朱拉隆功大学副教授" },
    tag: { en: "Urban Design Lead", th: "ผู้นำด้านการออกแบบเมือง", cn: "城市设计主导者" },
    photo: "/photos%20faculty/Niramon.jpg",
    bio: {
      en: "Assoc. Prof. Dr. Niramon Serisakul is at Chulalongkorn University's Department of Urban and Regional Planning and Director of the Urban Design and Development Center (UddC). She specializes in urban strategies, design, and stakeholder engagement for city development.",
      th: "รศ. ดร. นิรมล เสรีสกุล สังกัดภาควิชาการวางแผนภาคและเมือง จุฬาลงกรณ์มหาวิทยาลัย และเป็นผู้อำนวยการศูนย์ออกแบบและพัฒนาเมือง (UddC)",
      cn: "朱拉隆功大学城市与区域规划系副教授，城市设计与发展中心（UddC）主任。",
    },
    expanded: {
      en: "Recipient of France's Chevalier dans l'Ordre des Palmes académiques and Director of UddC at Chulalongkorn — Thailand's leading applied urban research institution. Niramon leads GoodWalk Thailand, the country's most rigorous walkability index, and has driven participatory public space redesign across Bangkok producing evidence-based standards that now influence national urban policy. Her diagnostic is the question most smart city programmes skip: does the physical space actually work for the people in it? Walkability data, public realm quality, and stakeholder engagement determine whether smart infrastructure gets adopted or ignored. In SCL, she gives participants the street-level measurement tools that sit beneath any smart city indicator set — and a framework for evaluating whether their city's investments are landing where intended.",
      th: "ผู้ได้รับเครื่องราชอิสริยาภรณ์ Chevalier dans l'Ordre des Palmes académiques ของฝรั่งเศส และผู้อำนวยการ UddC ที่จุฬาลงกรณ์มหาวิทยาลัย ดร. นิรมลนำโครงการ GoodWalk Thailand — ดัชนีความสะดวกในการเดินที่เข้มข้นที่สุดของประเทศ — และขับเคลื่อนการออกแบบพื้นที่สาธารณะแบบมีส่วนร่วมทั่วกรุงเทพฯ จนสร้างมาตรฐานเชิงหลักฐานที่ส่งผลต่อนโยบายเมืองระดับชาติ คำถามวินิจฉัยของท่าน: พื้นที่ทางกายภาพนี้ใช้งานได้จริงสำหรับผู้คนในนั้นหรือไม่? ใน SCL ท่านให้เครื่องมือวัดระดับถนนที่อยู่ใต้ชุดตัวชี้วัดเมืองอัจฉริยะใดๆ",
      cn: "法国国家功勋奖章（棕榈叶骑士级）获得者，朱拉隆功大学城市设计与发展中心（UddC）主任。Dr. Niramon 主持 GoodWalk Thailand——泰国最严格的步行便利性指数——并在曼谷全市推动参与式公共空间再设计，形成影响国家城市政策的循证标准。她的诊断标准：这座城市对居住其中的人来说真的好用吗？在 SCL 中，她提供任何智慧城市指标体系底层的街道层面测量工具与评估框架。",
    },
    linkedin: "https://www.linkedin.com/in/niramon-serisakul/",
  },
  {
    name: { en: "Dr. Sanphawat Jatupatwarangkul", th: "ดร. สรรพวัฒน์ จตุพัฒน์วรางกูร", cn: "Sanphawat Jatupatwarangkul 博士" },
    role: { en: "Digital Twin Expert & University Lecturer", th: "ผู้เชี่ยวชาญด้าน Digital Twin และอาจารย์มหาวิทยาลัย", cn: "数字孪生专家、大学讲师" },
    tag: { en: "Digital Twin Expert", th: "ผู้เชี่ยวชาญ Digital Twin", cn: "数字孪生专家" },
    photo: "/photos%20faculty/Sanphawat.jpg",
    bio: {
      en: "Digital twin expert and university lecturer with two decades of experience in building systems and design internationally. Based at Aurecon, one of ASEAN's leading infrastructure engineering consultancies.",
      th: "ผู้เชี่ยวชาญด้าน Digital Twin และอาจารย์มหาวิทยาลัย มีประสบการณ์กว่าสองทศวรรษด้านระบบอาคารและการออกแบบในระดับสากล",
      cn: "数字孪生专家与大学讲师，在建筑系统与国际化设计领域拥有逾二十年经验。",
    },
    expanded: {
      en: "Digital Practice Leader at Aurecon Thailand, co-founder of BIM Club Thailand, and executive committee member of the Thai BIM Association. Sanphawat is a licensed architect in Thailand, an Associate of the American Institute of Architects, and a LEED Accredited Professional. His 2025 peer-reviewed publication in the International Journal of Construction Management addresses digital twin sequencing for building operations in Thai construction contexts. With 20+ years in BIM and digital twin implementation across commercial and infrastructure projects, he bridges the gap between city-level digital twin ambition and the building-by-building data infrastructure that makes it work. In SCL, he gives participants the framework to evaluate vendor claims critically — separating genuine infrastructure intelligence from dashboard theatre.",
      th: "ผู้นำด้านการปฏิบัติงานดิจิทัลที่ Aurecon Thailand ผู้ร่วมก่อตั้ง BIM Club Thailand และกรรมการบริหารสมาคม BIM ไทย ดร. สรรพวัฒน์เป็นสถาปนิกผู้มีใบอนุญาตในไทย สมาชิก American Institute of Architects และ LEED Accredited Professional งานวิจัยปี 2568 ที่ผ่านการทบทวนโดยผู้เชี่ยวชาญใน International Journal of Construction Management ครอบคลุมการจัดลำดับ Digital Twin สำหรับการดำเนินงานอาคารในบริบทการก่อสร้างไทย ใน SCL ท่านให้กรอบแนวคิดในการประเมินข้อเรียกร้องของผู้ขายอย่างมีวิจารณญาณ — แยกแยะความฉลาดด้านโครงสร้างพื้นฐานจริงจากการนำเสนอที่ดูดีแต่ไม่มีสาระ",
      cn: "Aurecon 泰国数字实践主管、BIM Club 泰国联合创始人、泰国 BIM 协会执行委员。Sanphawat 是泰国注册建筑师、美国建筑师学会准会员及 LEED 认证专家。2025 年，他在《国际建设管理杂志》发表同行评审论文，聚焦泰国建筑运营的数字孪生实施序列。逾二十年经验横跨商业及基础设施项目的 BIM 与数字孪生实施。在 SCL 中，他提供批判性评估供应商方案的框架——区分真正的基础设施智能与华而不实的仪表板展示。",
    },
    linkedin: "https://www.linkedin.com/in/sanphawat-jatupatwarangkul-1913ba52/",
  },
  {
    name: { en: "Pongsak Yingchoncharoen", th: "พงษ์ศักดิ์ ยิ่งชนม์เจริญ", cn: "Pongsak Yingchoncharoen" },
    role: { en: "Mayor of Yala Municipality", th: "นายกเทศมนตรีนครยะลา", cn: "也拉市市长" },
    tag: { en: "Smart City from the Ground Up", th: "เมืองอัจฉริยะจากพื้นฐาน", cn: "草根智慧城市建设者" },
    photo: "/photos%20faculty/Pongsak.jpg",
    bio: {
      en: 'Mayor of Yala Municipality ("Mayor A"), leads a people-centric Smart City model with Yala Free WiFi, Big Data dashboards, and dimensions including Smart Governance, Living, Environment, and Energy.',
      th: 'นายกเทศมนตรีนครยะลา ("นายก A") ผู้นำโมเดลเมืองอัจฉริยะที่เน้นประชาชนเป็นศูนย์กลาง ด้วย Yala Free WiFi แดชบอร์ด Big Data และมิติ Smart Governance, Living, Environment และ Energy',
      cn: '也拉市市长（人称"A 市长"），主导以人为本的智慧城市模式，推动 Yala Free WiFi、大数据仪表板等项目。',
    },
    expanded: {
      en: "Four-term Mayor of Yala and President of the National Municipal League of Thailand, Pongsak holds a University of Queensland degree and has turned a border city navigating significant governance and security complexity into Thailand's most-cited provincial smart city model. His interventions are relentlessly citizen-first: Yala Free WiFi as social cohesion infrastructure; a mobility big data and AI partnership with CITYDATA.ai for public health management; participatory governance formats — village meetings and age-segmented forums — as the human layer of the smart city stack. Yala's approach has been studied by UNICEF and profiled by GovInsider. In SCL, he is proof that smart governance works under resource constraints and social fragility — the condition most Thai municipalities actually face, not the ideal conditions that most smart city case studies assume.",
      th: "นายกเทศมนตรีนครยะลาสี่สมัย และประธานสันนิบาตเทศบาลแห่งประเทศไทย วุฒิจากมหาวิทยาลัยควีนส์แลนด์ นายก A เปลี่ยนเมืองชายแดนที่เผชิญความซับซ้อนด้านการปกครองและความมั่นคงให้กลายเป็นต้นแบบเมืองอัจฉริยะระดับจังหวัดที่ถูกอ้างถึงมากที่สุดในไทย การแทรกแซงของท่านยึดประชาชนเป็นศูนย์กลาง: Yala Free WiFi เป็นโครงสร้างพื้นฐานด้านการเชื่อมต่อทางสังคม ความร่วมมือ Big Data กับ CITYDATA.ai สำหรับสาธารณสุข และรูปแบบการปกครองแบบมีส่วนร่วม ผลงานของท่านได้รับการศึกษาจาก UNICEF และนำเสนอโดย GovInsider ใน SCL ท่านคือหลักฐานว่าธรรมาภิบาลอัจฉริยะทำได้แม้ภายใต้ข้อจำกัดด้านทรัพยากรและความเปราะบางทางสังคม",
      cn: "也拉市连任四届市长，泰国全国市政联盟主席，持有昆士兰大学学位。Pongsak 将一座面临复杂治理与安全挑战的泰南边境城市打造成全国被引用最多的省级智慧城市样板。其干预措施始终以市民为先：Yala Free WiFi 作为社会凝聚力基础设施，与 CITYDATA.ai 合作的大数据公共卫生管理，以及村民会议等参与式治理形式。其工作已被 UNICEF 研究并经 GovInsider 报道。在 SCL 中，他证明了智慧治理在资源约束与社会脆弱性下同样可行。",
    },
    linkedin: "https://www.linkedin.com/in/pongsak-yingchoncharoen-05106a26b/",
  },
];

export default function Faculty() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage ?? i18n.language).split('-')[0];
  const pick = (obj) => obj?.[lang] || obj?.en || '';
  const [expanded, setExpanded] = useState(null);

  const toggle = (index) => setExpanded(expanded === index ? null : index);

  return (
    <div className="faculty-page container">
      <div className="faculty-header">
        <span className="section-kicker">{t('faculty.kicker', 'World-class expertise')}</span>
        <h1 className="faculty-title">{t('faculty.title', 'Faculty & Speakers')}</h1>
        <p className="faculty-subtitle">
          {t('faculty.subtitle', "Industry leaders, mayors, and smart-city pioneers who teach inside the programme — not as keynotes, but as working participants in each cohort.")}
        </p>
      </div>

      <figure className="faculty-photo-strip">
        <img
          src="/Photos/2022-05-26%2010.07.12.jpg"
          alt=""
          loading="lazy"
        />
        <figcaption>{t('faculty.photoCaption', 'A rotating faculty of policymakers, mayors, and practitioners teaches each cohort in person.')}</figcaption>
      </figure>

      <div className="faculty-grid">
        {facultyData.map((member, index) => (
          <div key={index} className="faculty-card">
            <div className="faculty-card-inner">
              <div className="faculty-photo-wrap">
                <img
                  src={member.photo}
                  alt={pick(member.name)}
                  className="faculty-photo"
                  loading="lazy"
                />
              </div>

              <div className="faculty-info">
                <span className="faculty-tag">{pick(member.tag)}</span>
                <h3 className="faculty-name">{pick(member.name)}</h3>
                <p className="faculty-role">{pick(member.role)}</p>
                <p className="faculty-bio">{pick(member.bio)}</p>

                <div className="faculty-actions">
                  <button
                    type="button"
                    className="faculty-expand-btn"
                    onClick={() => toggle(index)}
                    aria-expanded={expanded === index}
                  >
                    {expanded === index
                      ? t('faculty.less', 'Less')
                      : t('faculty.more', 'About')}
                    {expanded === index
                      ? <ChevronUp size={14} />
                      : <ChevronDown size={14} />}
                  </button>

                  <div className="faculty-social-row">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={`${pick(member.name)} LinkedIn`}
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href="mailto:scp@depa.or.th"
                      className="social-link"
                      aria-label={`${t('nav.contact', 'Contact')} ${pick(member.name)}`}
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>

                {expanded === index && (
                  <div className="faculty-expanded animate-fade-in">
                    <p className="faculty-expanded-text">{pick(member.expanded)}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="faculty-footer">
        <p>
          {t('faculty.partialList')}
        </p>
      </div>
    </div>
  );
}
