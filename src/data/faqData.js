// Each entry has question and answer as { en, th, cn } objects.
// Faculty.jsx and FAQ.jsx pick the active language via i18n.

const faqData = [
  {
    category: "program",
    question: {
      en: "What is the Smart City Leadership (SCL) program?",
      th: "หลักสูตร Smart City Leadership (SCL) คืออะไร?",
      cn: "智慧城市领导力（SCL）课程是什么？",
    },
    answer: {
      en: "The Smart City Leadership (SCL) program is an executive education initiative designed for senior public and private sector leaders to build practical expertise in smart city development, digital transformation, and AI governance. It equips governors, mayors, CEOs, and directors with the frameworks and tools needed to lead data-driven urban innovation across Thailand.",
      th: "Smart City Leadership (SCL) เป็นหลักสูตรการศึกษาสำหรับผู้บริหารระดับสูงทั้งภาครัฐและเอกชน เพื่อสร้างความเชี่ยวชาญที่ใช้ได้จริงในด้านการพัฒนาเมืองอัจฉริยะ การเปลี่ยนผ่านดิจิทัล และธรรมาภิบาล AI หลักสูตรนี้ติดอาวุธให้ผู้ว่าราชการ นายกเทศมนตรี CEO และผู้อำนวยการ ด้วยกรอบคิดและเครื่องมือที่จำเป็นในการนำการสร้างนวัตกรรมเมืองที่ขับเคลื่อนด้วยข้อมูลทั่วประเทศไทย",
      cn: "智慧城市领导力（SCL）是一项面向公共与私营部门高级领导者的高管教育项目，旨在建立在智慧城市发展、数字化转型和 AI 治理方面的实操能力。课程为府尹、市长、CEO 和总监们提供在泰国推动数据驱动城市创新所需的框架与工具。",
    },
  },
  {
    category: "program",
    question: {
      en: "Who organizes and runs the SCL program?",
      th: "ใครเป็นผู้จัดและดำเนินหลักสูตร SCL?",
      cn: "SCL 课程由谁组织和运作？",
    },
    answer: {
      en: "The program is organized by the Digital Economy Promotion Agency (depa), a government agency under Thailand's Ministry of Digital Economy and Society. depa spearheads the country's digital transformation agenda and uses SCL as a flagship initiative to cultivate leadership capacity at the city and provincial levels.",
      th: "หลักสูตรนี้จัดโดยสำนักงานส่งเสริมเศรษฐกิจดิจิทัล (depa) ซึ่งเป็นหน่วยงานของรัฐภายใต้กระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม depa เป็นหน่วยงานหลักที่ผลักดันวาระการเปลี่ยนผ่านดิจิทัลของประเทศ และใช้ SCL เป็นหลักสูตรเรือธงในการบ่มเพาะภาวะผู้นำในระดับเมืองและจังหวัด",
      cn: "本课程由数字经济促进局（depa）组织，depa 是隶属于泰国数字经济与社会部的政府机构。depa 引领国家数字化转型议程，并将 SCL 作为旗舰项目，培育城市与省级层面的领导力。",
    },
  },
  {
    category: "program",
    question: {
      en: "How long has the SCL program been running?",
      th: "หลักสูตร SCL ดำเนินการมานานแค่ไหนแล้ว?",
      cn: "SCL 课程已经运行多久了？",
    },
    answer: {
      en: "SCL has been running for several years and has successfully completed six batches to date. The program has steadily evolved its curriculum to reflect emerging technologies and the real-world challenges faced by city leaders across all 77 provinces.",
      th: "SCL ดำเนินการมาหลายปี และจนถึงปัจจุบันได้จัดอบรมไปแล้วทั้งสิ้น 6 รุ่น หลักสูตรได้รับการพัฒนาอย่างต่อเนื่องเพื่อสะท้อนเทคโนโลยีที่เกิดใหม่ และปัญหาที่ผู้นำเมืองทั่วทั้ง 77 จังหวัดเผชิญในชีวิตจริง",
      cn: "SCL 已开办多年，迄今已成功完成六届课程。课程内容不断更新，反映新兴技术与全国 77 个府的城市领导者所面对的真实挑战。",
    },
  },
  {
    category: "program",
    question: {
      en: "What is the overall goal of the SCL program?",
      th: "เป้าหมายโดยรวมของหลักสูตร SCL คืออะไร?",
      cn: "SCL 课程的整体目标是什么？",
    },
    answer: {
      en: "The overarching goal is to develop a critical mass of leaders who can bridge policy, technology, and implementation to build smarter, more livable cities. SCL focuses on moving beyond theory to deliver actionable strategies that leaders can deploy immediately within their jurisdictions.",
      th: "เป้าหมายหลักคือการสร้างกลุ่มผู้นำจำนวนมากพอที่จะเชื่อมโยงนโยบาย เทคโนโลยี และการปฏิบัติเข้าด้วยกัน เพื่อสร้างเมืองที่ฉลาดและน่าอยู่กว่าเดิม SCL มุ่งเน้นที่การข้ามพ้นทฤษฎี ไปสู่ยุทธศาสตร์ที่ใช้ได้จริง ซึ่งผู้นำสามารถนำไปปรับใช้ในเขตอำนาจของตนได้ทันที",
      cn: "总体目标是培育一批能够贯通政策、技术与执行的领导者，共同打造更智慧、更宜居的城市。SCL 强调超越理论，提供领导者可立即在辖区内落地的实用策略。",
    },
  },
  {
    category: "program",
    question: {
      en: "Is SCL only for leaders in the public sector?",
      th: "SCL จัดสำหรับผู้นำภาครัฐเท่านั้นหรือไม่?",
      cn: "SCL 是否仅面向公共部门的领导者？",
    },
    answer: {
      en: "No. While the program is heavily oriented toward public sector leaders such as governors and mayors, it is also highly relevant for private sector executives, state enterprise directors, and senior administrators who shape urban infrastructure, services, and digital policy.",
      th: "ไม่ใช่ แม้หลักสูตรจะเน้นผู้นำภาครัฐเช่น ผู้ว่าราชการและนายกเทศมนตรี แต่ยังเหมาะอย่างยิ่งกับผู้บริหารภาคเอกชน ผู้อำนวยการรัฐวิสาหกิจ และผู้บริหารระดับสูงที่เป็นผู้กำหนดทิศทางของโครงสร้างพื้นฐานเมือง บริการสาธารณะ และนโยบายดิจิทัล",
      cn: "并非如此。虽然课程侧重于府尹、市长等公共部门领导者，但同样非常适合塑造城市基础设施、公共服务与数字政策的私营部门高管、国有企业总监以及高级行政管理人员。",
    },
  },
  {
    category: "application",
    question: {
      en: "Who is the ideal candidate for the SCL program?",
      th: "ผู้สมัครที่เหมาะสมกับหลักสูตร SCL คือใคร?",
      cn: "SCL 课程的理想候选人是谁？",
    },
    answer: {
      en: "Ideal candidates are senior decision-makers—including governors, deputy governors, mayors, municipal CEOs, directors of state agencies, and C-suite executives—who have direct influence over city planning, digital strategy, or public service delivery. Applicants should be committed to driving tangible digital transformation in their organizations.",
      th: "ผู้สมัครที่เหมาะสมคือผู้ตัดสินใจระดับสูง อาทิ ผู้ว่าราชการ รองผู้ว่าราชการ นายกเทศมนตรี CEO ของหน่วยงานเมือง ผู้อำนวยการหน่วยงานของรัฐ และผู้บริหารระดับ C-suite ที่มีอำนาจตรงต่อการวางผังเมือง ยุทธศาสตร์ดิจิทัล หรือการให้บริการสาธารณะ และมุ่งมั่นจะขับเคลื่อนการเปลี่ยนผ่านดิจิทัลที่จับต้องได้ในองค์กรของตน",
      cn: "理想候选人为高级决策者，包括府尹、副府尹、市长、市政机构 CEO、国有机构总监以及 C 级高管——他们对城市规划、数字战略或公共服务交付具有直接影响力，并致力于在自身机构推动可衡量的数字化转型。",
    },
  },
  {
    category: "application",
    question: {
      en: "What are the selection criteria for admission?",
      th: "เกณฑ์การคัดเลือกเข้าเรียนเป็นอย่างไร?",
      cn: "录取的选拔标准是什么？",
    },
    answer: {
      en: "Selection prioritizes leadership seniority, scope of influence, demonstrated commitment to smart city or digital initiatives, and the potential for broader impact across provinces or sectors. A limited number of seats ensures a highly curated cohort with diverse geographic and institutional representation.",
      th: "การคัดเลือกให้ความสำคัญกับระดับอาวุโสของผู้นำ ขอบเขตอิทธิพล ความมุ่งมั่นที่แสดงออกต่อการพัฒนาเมืองอัจฉริยะหรือโครงการดิจิทัล และศักยภาพในการสร้างผลกระทบในวงกว้างข้ามจังหวัดหรือข้ามภาคส่วน จำนวนที่นั่งที่จำกัดทำให้แต่ละรุ่นถูกคัดสรรอย่างประณีต และมีตัวแทนที่หลากหลายทั้งเชิงพื้นที่และเชิงสถาบัน",
      cn: "选拔重点考量领导级别、影响范围、对智慧城市或数字项目的明确投入，以及在跨府与跨行业层面创造更广泛影响的潜力。座位有限，确保每一期成员经过精心挑选，地域与机构构成多元。",
    },
  },
  {
    category: "application",
    question: {
      en: "Is there an application deadline I should be aware of?",
      th: "มีกำหนดวันปิดรับสมัครที่ต้องระวังหรือไม่?",
      cn: "是否有需要留意的申请截止日期？",
    },
    answer: {
      en: "Application periods are announced per batch, typically several weeks before the program start date. Because cohort size is intentionally limited, early application is strongly encouraged to secure a seat and complete any preparatory requirements.",
      th: "ช่วงเวลารับสมัครจะประกาศแยกตามแต่ละรุ่น โดยปกติแล้วจะเปิดรับล่วงหน้าหลายสัปดาห์ก่อนเริ่มหลักสูตร เนื่องจากจำนวนผู้เข้าร่วมในแต่ละรุ่นจำกัด เราจึงแนะนำให้สมัครแต่เนิ่นๆ เพื่อยืนยันที่นั่งและเตรียมเอกสารที่จำเป็น",
      cn: "申请期按届公布，通常在课程开始前几周开放。由于每期名额有意限定，建议尽早申请以确保席位并完成相关准备。",
    },
  },
  {
    category: "application",
    question: {
      en: "Do I need a technical background in IT or engineering to apply?",
      th: "ต้องมีพื้นฐานทาง IT หรือวิศวกรรมเพื่อสมัครหรือไม่?",
      cn: "申请是否需要 IT 或工程背景？",
    },
    answer: {
      en: "No technical background is required. SCL is designed for leaders from policy, administrative, and business backgrounds. The curriculum translates complex technology concepts into strategic insights that non-technical executives can act upon.",
      th: "ไม่จำเป็นต้องมีพื้นฐานเชิงเทคนิค SCL ออกแบบมาเพื่อผู้นำจากสายนโยบาย สายบริหาร และสายธุรกิจ หลักสูตรจะแปลแนวคิดเทคโนโลยีที่ซับซ้อนให้กลายเป็นมุมมองเชิงยุทธศาสตร์ที่ผู้บริหารซึ่งไม่ได้มาจากสายเทคโนโลยีนำไปใช้ได้",
      cn: "无需技术背景。SCL 面向来自政策、行政与商业领域的领导者。课程将复杂的技术概念转化为非技术背景高管也能落地的战略洞察。",
    },
  },
  {
    category: "application",
    question: {
      en: "Can I nominate a colleague or team member to apply?",
      th: "เสนอชื่อเพื่อนร่วมงานหรือสมาชิกทีมเข้าร่วมได้หรือไม่?",
      cn: "我可以提名同事或团队成员申请吗？",
    },
    answer: {
      en: "Yes, nominations from agency heads or organizational leaders are welcome and often factored into the selection process. However, each nominee must still complete the application and meet the seniority expectations of the program.",
      th: "ได้ การเสนอชื่อจากหัวหน้าหน่วยงานหรือผู้นำองค์กรนั้นยินดีต้อนรับ และมักถูกนำมาประกอบการพิจารณาคัดเลือก แต่ผู้ได้รับการเสนอชื่อทุกคนยังต้องกรอกใบสมัครและมีระดับอาวุโสตรงตามเกณฑ์ของหลักสูตร",
      cn: "可以。来自机构首长或组织领导者的提名将被欢迎，并通常会纳入选拔考量。但被提名者仍须完成申请，并满足课程对资历的要求。",
    },
  },
  {
    category: "curriculum",
    question: {
      en: "How long is the SCL program and what is the time commitment?",
      th: "หลักสูตร SCL ใช้เวลานานเท่าไร และต้องอุทิศเวลาขนาดไหน?",
      cn: "SCL 课程时长多久，时间投入有多大？",
    },
    answer: {
      en: "The program runs for seven weeks with a total of 42 hours of structured learning. Sessions are designed to accommodate busy executive schedules, typically delivered in intensive modules that minimize disruption to full-time leadership responsibilities.",
      th: "หลักสูตรใช้เวลา 7 สัปดาห์ รวมเวลาเรียนที่จัดโครงสร้างไว้ทั้งสิ้น 42 ชั่วโมง การจัดเวลาออกแบบมาเพื่อรองรับตารางงานที่ยุ่งของผู้บริหาร โดยทั่วไปสอนเป็นโมดูลแบบเข้มข้น เพื่อรบกวนหน้าที่งานหลักของผู้นำให้น้อยที่สุด",
      cn: "课程为期七周，结构化学习时间共 42 小时。安排充分考虑高管繁忙的日程，通常以集中模块形式授课，尽量减少对全职领导工作的影响。",
    },
  },
  {
    category: "curriculum",
    question: {
      en: "What topics are covered in the SCL curriculum?",
      th: "หลักสูตร SCL ครอบคลุมหัวข้อใดบ้าง?",
      cn: "SCL 课程涵盖哪些主题？",
    },
    answer: {
      en: "The curriculum spans smart city fundamentals, AI governance, Internet of Things (IoT) applications, data-driven policy making, digital infrastructure, cybersecurity, citizen-centric design, and innovation management. It is regularly updated to reflect global best practices and Thailand's national digital priorities.",
      th: "หลักสูตรครอบคลุมพื้นฐานเมืองอัจฉริยะ ธรรมาภิบาล AI การประยุกต์ใช้ Internet of Things (IoT) การกำหนดนโยบายด้วยข้อมูล โครงสร้างพื้นฐานดิจิทัล ความมั่นคงปลอดภัยไซเบอร์ การออกแบบที่ยึดประชาชนเป็นศูนย์กลาง และการบริหารนวัตกรรม โดยปรับปรุงอย่างต่อเนื่องเพื่อสะท้อนแนวปฏิบัติที่ดีที่สุดในระดับโลกและทิศทางดิจิทัลแห่งชาติของไทย",
      cn: "课程内容涵盖智慧城市基础、AI 治理、物联网（IoT）应用、数据驱动政策制定、数字基础设施、网络安全、以民为本的设计与创新管理，并持续更新，反映全球最佳实践与泰国国家数字战略重点。",
    },
  },
  {
    category: "curriculum",
    question: {
      en: "Are there site visits included in the program?",
      th: "หลักสูตรมีการลงพื้นที่ดูงานหรือไม่?",
      cn: "课程是否包含实地考察？",
    },
    answer: {
      en: "Yes, participants engage in immersive site visits to operational smart city centers, including locations in the Eastern Economic Corridor (EEC) and Bangkok operating centers. These visits provide firsthand exposure to live digital command centers, data platforms, and integrated urban management systems.",
      th: "มี ผู้เข้าร่วมจะได้ลงพื้นที่ศูนย์ปฏิบัติการเมืองอัจฉริยะแบบเข้มข้น ทั้งในเขตพัฒนาพิเศษภาคตะวันออก (EEC) และศูนย์ปฏิบัติการในกรุงเทพฯ การเยี่ยมชมเหล่านี้เปิดโอกาสให้สัมผัสศูนย์บัญชาการดิจิทัล แพลตฟอร์มข้อมูล และระบบบริหารเมืองแบบบูรณาการในของจริง",
      cn: "包含。学员将深入参访智慧城市运营中心，包括东部经济走廊（EEC）以及曼谷的指挥中心。实地考察让学员直接接触正在运行的数字指挥中心、数据平台和综合城市管理系统。",
    },
  },
  {
    category: "curriculum",
    question: {
      en: "Is there a capstone project or practical assignment?",
      th: "มีโครงการ Capstone หรืองานปฏิบัติให้ทำหรือไม่?",
      cn: "课程是否设有 Capstone 毕业项目或实操作业？",
    },
    answer: {
      en: "Yes, participants typically complete a capstone project that applies program learnings to a real challenge or opportunity within their own city or organization. This ensures that every graduate leaves with a concrete, actionable initiative rather than just theoretical knowledge.",
      th: "มี ผู้เข้าร่วมทุกคนจะทำโครงการ Capstone ที่นำสิ่งที่เรียนรู้มาปรับใช้กับปัญหาหรือโอกาสจริงในเมืองหรือองค์กรของตน เพื่อให้ผู้สำเร็จการศึกษาทุกคนกลับไปพร้อมโครงการที่จับต้องได้และเริ่มลงมือทำได้ ไม่ใช่แค่ความรู้เชิงทฤษฎี",
      cn: "设有。学员通常需完成一项 Capstone 毕业项目，将课堂所学应用于自身城市或机构的真实挑战或机会。这确保每位毕业生带走的不只是理论，而是一项具体、可执行的方案。",
    },
  },
  {
    category: "curriculum",
    question: {
      en: "What teaching formats are used during the program?",
      th: "หลักสูตรใช้รูปแบบการสอนแบบไหน?",
      cn: "课程采用哪些教学形式？",
    },
    answer: {
      en: "SCL employs a blended format combining expert lectures, interactive workshops, peer discussions, case study analysis, and field visits. The emphasis is on dialogue and problem-solving rather than passive instruction, leveraging the diverse experience within each cohort.",
      th: "SCL ใช้รูปแบบผสมที่รวมการบรรยายโดยผู้เชี่ยวชาญ เวิร์กช็อปแบบมีปฏิสัมพันธ์ การอภิปรายระหว่างเพื่อนร่วมรุ่น การวิเคราะห์กรณีศึกษา และการลงพื้นที่ เน้นบทสนทนาและการแก้ปัญหา ไม่ใช่การฟังบรรยายแบบเฉยๆ โดยอาศัยความหลากหลายของประสบการณ์ในแต่ละรุ่น",
      cn: "SCL 采用混合式教学，结合专家讲座、互动工作坊、同侪讨论、案例分析和实地考察。强调对话与解决问题，而非被动听讲，充分利用每一期学员的多元经验。",
    },
  },
  {
    category: "faculty",
    question: {
      en: "Who teaches in the SCL program?",
      th: "ใครเป็นผู้สอนในหลักสูตร SCL?",
      cn: "SCL 课程由谁授课？",
    },
    answer: {
      en: "The faculty includes leading academics, seasoned smart city practitioners, digital policy experts, and technology strategists from Thailand and abroad. Instructors are selected for their ability to translate cutting-edge research and implementation experience into executive-level insights.",
      th: "คณาจารย์ประกอบด้วยนักวิชาการชั้นนำ ผู้ปฏิบัติงานด้านเมืองอัจฉริยะที่มากประสบการณ์ ผู้เชี่ยวชาญด้านนโยบายดิจิทัล และนักวางยุทธศาสตร์เทคโนโลยีทั้งจากในไทยและต่างประเทศ ผู้สอนถูกคัดเลือกจากความสามารถในการแปลงงานวิจัยล้ำสมัยและประสบการณ์ภาคปฏิบัติให้กลายเป็นมุมมองระดับผู้บริหาร",
      cn: "师资团队包括来自泰国与海外的顶尖学者、资深智慧城市实践者、数字政策专家和技术战略家。讲师均因能够将前沿研究与落地经验转化为高管层面的洞察而入选。",
    },
  },
  {
    category: "faculty",
    question: {
      en: "Are there guest speakers from actual smart city projects?",
      th: "มีวิทยากรรับเชิญที่มาจากโครงการเมืองอัจฉริยะจริงหรือไม่?",
      cn: "是否会邀请来自实际智慧城市项目的嘉宾讲者？",
    },
    answer: {
      en: "Yes, each batch features guest speakers who have led major digital transformation and smart city initiatives in Thailand, ASEAN, and beyond. These practitioners share candid lessons from real deployments, including what worked, what failed, and how to navigate political and budgetary constraints.",
      th: "มี แต่ละรุ่นจะมีวิทยากรรับเชิญที่เคยนำโครงการเปลี่ยนผ่านดิจิทัลและเมืองอัจฉริยะสำคัญในไทย อาเซียน และในระดับโลก ผู้ปฏิบัติเหล่านี้จะเล่าบทเรียนตรงไปตรงมาจากการดำเนินงานจริง ทั้งสิ่งที่ใช้ได้ผล สิ่งที่ล้มเหลว และวิธีการนำทางผ่านข้อจำกัดทางการเมืองและงบประมาณ",
      cn: "会。每一期都会邀请曾在泰国、东盟乃至更广区域主导重大数字化转型和智慧城市项目的嘉宾讲者。他们坦诚分享真实落地中的经验，包括成功之处、失败之处，以及如何在政治与预算约束中前行。",
    },
  },
  {
    category: "faculty",
    question: {
      en: "Do any international experts participate in the program?",
      th: "มีผู้เชี่ยวชาญต่างประเทศมาร่วมในหลักสูตรหรือไม่?",
      cn: "是否有国际专家参与课程？",
    },
    answer: {
      en: "Yes, SCL regularly invites international experts and advisors with experience in smart city rollouts across Europe, East Asia, and other regions. Their perspectives help participants understand global benchmarks and adapt proven models to the Thai context.",
      th: "มี SCL เชิญผู้เชี่ยวชาญและที่ปรึกษาต่างประเทศที่มีประสบการณ์การพัฒนาเมืองอัจฉริยะในยุโรป เอเชียตะวันออก และภูมิภาคอื่นๆ มาร่วมอยู่เสมอ มุมมองของพวกเขาช่วยให้ผู้เข้าร่วมเข้าใจมาตรฐานระดับโลก และปรับโมเดลที่พิสูจน์แล้วให้เข้ากับบริบทของประเทศไทย",
      cn: "有。SCL 定期邀请在欧洲、东亚等地区拥有智慧城市落地经验的国际专家与顾问参与。他们的视角帮助学员理解全球基准，并将成熟模式适配到泰国语境。",
    },
  },
  {
    category: "faculty",
    question: {
      en: "Can participants interact directly with faculty and speakers?",
      th: "ผู้เข้าร่วมสามารถโต้ตอบกับคณาจารย์และวิทยากรโดยตรงได้ไหม?",
      cn: "学员能否与师资和讲者直接互动？",
    },
    answer: {
      en: "Absolutely. The program is designed to maximize interaction, with Q&A sessions, roundtable discussions, and informal networking opportunities built into each module. Participants are encouraged to bring their own challenges to these conversations.",
      th: "ได้แน่นอน หลักสูตรออกแบบมาเพื่อให้มีปฏิสัมพันธ์สูงสุด ทั้งช่วงถาม-ตอบ การอภิปรายโต๊ะกลม และโอกาสสร้างเครือข่ายแบบไม่เป็นทางการในทุกโมดูล ผู้เข้าร่วมได้รับการสนับสนุนให้นำปัญหาของตนเข้ามาร่วมในบทสนทนาเหล่านี้",
      cn: "完全可以。课程精心安排以最大化互动，每个模块均嵌入问答、圆桌讨论与非正式交流环节。学员被鼓励将自身面临的真实挑战带入对话。",
    },
  },
  {
    category: "faculty",
    question: {
      en: "Are the instructors affiliated with specific universities or institutions?",
      th: "ผู้สอนสังกัดมหาวิทยาลัยหรือสถาบันใดเป็นการเฉพาะหรือไม่?",
      cn: "讲师是否隶属于特定的大学或机构？",
    },
    answer: {
      en: "Faculty come from a mix of top-tier universities, leading technology firms, government innovation units, and global consulting organizations. This diversity ensures a balanced perspective that spans academic rigor, policy reality, and commercial implementation.",
      th: "คณาจารย์มาจากมหาวิทยาลัยชั้นนำ บริษัทเทคโนโลยีระดับแนวหน้า หน่วยงานนวัตกรรมของรัฐ และองค์กรที่ปรึกษาระดับโลก ความหลากหลายนี้ทำให้มุมมองสมดุล ครอบคลุมความเข้มงวดทางวิชาการ ความจริงในเชิงนโยบาย และการนำไปใช้เชิงพาณิชย์",
      cn: "讲师来自顶尖大学、领先科技公司、政府创新单位与全球咨询机构。这种多元性确保观点平衡，兼顾学术严谨、政策现实与商业落地。",
    },
  },
  {
    category: "logistics",
    question: {
      en: "What is the program fee for SCL?",
      th: "ค่าลงทะเบียนของ SCL เท่าไร?",
      cn: "SCL 课程的费用是多少？",
    },
    answer: {
      en: "The program fee is THB 62,000 per participant. This represents a highly competitive rate for executive education of this caliber, especially given the inclusion of site visits, materials, and network access.",
      th: "ค่าลงทะเบียนอยู่ที่ 62,000 บาท ต่อท่าน ถือเป็นอัตราที่แข่งขันได้สูงสำหรับหลักสูตรการศึกษาผู้บริหารระดับนี้ โดยเฉพาะเมื่อรวมการลงพื้นที่ เอกสารประกอบการเรียน และสิทธิ์เข้าถึงเครือข่ายศิษย์เก่า",
      cn: "课程费用为每位学员 62,000 泰铢。对于同级别的高管教育而言，这是极具竞争力的价格，尤其考虑到费用已包含实地考察、学习资料与校友网络访问权限。",
    },
  },
  {
    category: "logistics",
    question: {
      en: "What is included in the program fee?",
      th: "ค่าลงทะเบียนครอบคลุมอะไรบ้าง?",
      cn: "课程费用包含哪些内容？",
    },
    answer: {
      en: "The fee covers all tuition, learning materials, site visit logistics, meals during program sessions, and access to the SCL alumni network. It is designed to minimize hidden costs so participants can focus fully on learning.",
      th: "ค่าลงทะเบียนครอบคลุมค่าเล่าเรียนทั้งหมด เอกสารประกอบการเรียน ค่าเดินทางสำหรับการลงพื้นที่ อาหารระหว่างช่วงเรียน และสิทธิ์เข้าถึงเครือข่ายศิษย์เก่า SCL ออกแบบมาเพื่อลดค่าใช้จ่ายแฝงให้น้อยที่สุด เพื่อให้ผู้เข้าร่วมทุ่มเทกับการเรียนได้เต็มที่",
      cn: "费用涵盖所有学费、学习资料、实地考察的相关交通安排、课程期间的餐食以及加入 SCL 校友网络的权限。安排力求最大程度减少隐性开支，让学员可以全身心投入学习。",
    },
  },
  {
    category: "logistics",
    question: {
      en: "Does the fee include accommodation for participants traveling from other provinces?",
      th: "ค่าลงทะเบียนรวมที่พักสำหรับผู้ที่เดินทางมาจากต่างจังหวัดด้วยไหม?",
      cn: "费用是否包含来自其他府份学员的住宿？",
    },
    answer: {
      en: "While the fee covers meals and in-session logistics, accommodation arrangements for participants traveling from outside the host city are typically the responsibility of the participant or their sponsoring organization. depa may recommend partner hotels for convenience.",
      th: "แม้ค่าลงทะเบียนจะครอบคลุมอาหารและการเดินทางระหว่างเรียน แต่ที่พักสำหรับผู้ที่เดินทางมาจากนอกเมืองที่จัดอบรมโดยทั่วไปแล้วเป็นความรับผิดชอบของผู้เข้าร่วมหรือหน่วยงานต้นสังกัด depa อาจแนะนำโรงแรมพันธมิตรเพื่อความสะดวก",
      cn: "费用涵盖餐食与课程期间的交通安排，但来自主办城市以外的学员住宿通常由学员本人或其所属机构承担。depa 可推荐合作酒店以提供便利。",
    },
  },
  {
    category: "logistics",
    question: {
      en: "Where are the program sessions held?",
      th: "การเรียนการสอนจัดที่ใด?",
      cn: "课程在哪里举办？",
    },
    answer: {
      en: "Core sessions are usually held in Bangkok and at partner institution facilities, with site visits extending to the Eastern Economic Corridor (EEC) and other operating centers. Exact venues are confirmed to participants ahead of each batch.",
      th: "การเรียนหลักโดยทั่วไปจัดในกรุงเทพฯ และที่สถาบันพันธมิตร โดยมีการลงพื้นที่ขยายไปยังเขตพัฒนาพิเศษภาคตะวันออก (EEC) และศูนย์ปฏิบัติการอื่นๆ สถานที่จัดอบรมจะแจ้งให้ผู้เข้าร่วมทราบล่วงหน้าก่อนเริ่มแต่ละรุ่น",
      cn: "主要课程通常在曼谷以及合作机构场地举办，实地考察延伸至东部经济走廊（EEC）及其他运营中心。每期的具体地点会提前通知学员。",
    },
  },
  {
    category: "logistics",
    question: {
      en: "Are meals provided during program days?",
      th: "มีอาหารให้ในวันเรียนหรือไม่?",
      cn: "课程当天是否提供餐食？",
    },
    answer: {
      en: "Yes, meals are provided during official program days, including working lunches and networking dinners where applicable. Dietary requirements can usually be accommodated with advance notice.",
      th: "มี อาหารจะถูกจัดให้ในวันเรียนอย่างเป็นทางการ รวมถึงมื้อกลางวันแบบ working lunch และมื้อค่ำเพื่อสร้างเครือข่ายในโอกาสที่เหมาะสม ความต้องการอาหารพิเศษโดยทั่วไปจัดการได้หากแจ้งล่วงหน้า",
      cn: "提供。正式课程日均会安排餐食，包括工作午餐及适当时的交流晚宴。如提前告知，通常可满足特殊饮食需求。",
    },
  },
  {
    category: "alumni",
    question: {
      en: "How large is the SCL alumni network?",
      th: "เครือข่ายศิษย์เก่า SCL มีขนาดเท่าไร?",
      cn: "SCL 校友网络规模有多大？",
    },
    answer: {
      en: "The SCL alumni community now exceeds 400 senior leaders from across Thailand's 77 provinces and multiple sectors. This creates one of the most concentrated networks of smart city and digital transformation executives in the country.",
      th: "ปัจจุบันชุมชนศิษย์เก่า SCL มีผู้นำระดับสูงเกินกว่า 400 ท่าน กระจายอยู่ทั่วประเทศใน 77 จังหวัดและหลากหลายภาคส่วน ทำให้กลายเป็นเครือข่ายผู้บริหารด้านเมืองอัจฉริยะและการเปลี่ยนผ่านดิจิทัลที่หนาแน่นที่สุดเครือข่ายหนึ่งของประเทศ",
      cn: "SCL 校友群体目前已超过 400 位高级领导者，分布于泰国 77 个府与多个行业，构成全国最密集的智慧城市与数字化转型高管网络之一。",
    },
  },
  {
    category: "alumni",
    question: {
      en: "What are the benefits of joining the SCL alumni network?",
      th: "การเข้าร่วมเครือข่ายศิษย์เก่า SCL มีประโยชน์อย่างไร?",
      cn: "加入 SCL 校友网络有哪些益处？",
    },
    answer: {
      en: "Alumni gain ongoing access to peer learning, exclusive events, policy briefings, and collaboration opportunities with fellow city leaders. Many alumni report that the network has become their primary sounding board for complex urban and digital challenges.",
      th: "ศิษย์เก่าจะได้รับสิทธิ์เข้าถึงการเรียนรู้ร่วมกับเพื่อนร่วมเครือข่ายอย่างต่อเนื่อง อีเวนต์เฉพาะกลุ่ม การบรรยายสรุปนโยบาย และโอกาสในการร่วมงานกับผู้นำเมืองรายอื่นๆ ศิษย์เก่าจำนวนมากบอกว่าเครือข่ายนี้ได้กลายเป็นที่ปรึกษาหลักสำหรับปัญหาเมืองและปัญหาดิจิทัลที่ซับซ้อน",
      cn: "校友可持续获得同侪学习、专属活动、政策简报，以及与其他城市领导者合作的机会。许多校友表示，这一网络已成为他们处理复杂城市与数字化议题时的主要参谋。",
    },
  },
  {
    category: "alumni",
    question: {
      en: "Are there alumni events or reunions?",
      th: "มีอีเวนต์หรือการรวมรุ่นของศิษย์เก่าหรือไม่?",
      cn: "是否会举办校友活动或聚会？",
    },
    answer: {
      en: "Yes, depa organizes periodic alumni gatherings, knowledge exchange forums, and policy update sessions. These events help graduates stay current with technology trends and maintain the cross-provincial relationships built during the program.",
      th: "มี depa จัดการพบปะศิษย์เก่า เวทีแลกเปลี่ยนความรู้ และการบรรยายอัปเดตนโยบายเป็นระยะ อีเวนต์เหล่านี้ช่วยให้ผู้สำเร็จการศึกษาตามทันเทรนด์เทคโนโลยี และรักษาความสัมพันธ์ข้ามจังหวัดที่ก่อตัวขึ้นในระหว่างหลักสูตร",
      cn: "会。depa 定期举办校友聚会、知识交流论坛与政策更新讲座。这些活动帮助毕业生紧跟技术趋势，并维系课程期间建立的跨府关系。",
    },
  },
  {
    category: "alumni",
    question: {
      en: "Can alumni from earlier batches still participate in new activities?",
      th: "ศิษย์เก่ารุ่นก่อนๆ ยังเข้าร่วมกิจกรรมใหม่ๆ ได้หรือไม่?",
      cn: "早期届的校友还能参加新活动吗？",
    },
    answer: {
      en: "Yes, the alumni network is designed as a lifelong community. Graduates from all six batches are encouraged to attend alumni events, mentor new participants, and contribute to the evolving SCL knowledge base.",
      th: "ได้ เครือข่ายศิษย์เก่าถูกออกแบบให้เป็นชุมชนตลอดชีวิต ผู้สำเร็จการศึกษาทั้ง 6 รุ่นได้รับการสนับสนุนให้เข้าร่วมกิจกรรมศิษย์เก่า เป็นพี่เลี้ยงให้ผู้เข้าร่วมรุ่นใหม่ และมีส่วนร่วมในการต่อยอดฐานความรู้ของ SCL",
      cn: "可以。校友网络的设计理念是终身社群。所有六届的毕业生都被鼓励参加校友活动、指导新学员，并为不断生长的 SCL 知识库做出贡献。",
    },
  },
  {
    category: "alumni",
    question: {
      en: "Do alumni collaborate on actual smart city projects after graduation?",
      th: "หลังจบหลักสูตร ศิษย์เก่าได้ร่วมมือทำโครงการเมืองอัจฉริยะจริงหรือไม่?",
      cn: "毕业后校友是否会合作开展实际的智慧城市项目？",
    },
    answer: {
      en: "Yes, numerous alumni have formed inter-provincial working groups and public-private partnerships to implement shared digital infrastructure, data platforms, and citizen service initiatives that originated from relationships built in the program.",
      th: "ใช่ ศิษย์เก่าจำนวนมากได้รวมตัวกันเป็นคณะทำงานข้ามจังหวัดและความร่วมมือระหว่างภาครัฐ-เอกชน เพื่อสร้างโครงสร้างพื้นฐานดิจิทัลร่วม แพลตฟอร์มข้อมูล และโครงการบริการประชาชนที่เริ่มต้นจากความสัมพันธ์ที่ก่อตัวในหลักสูตร",
      cn: "是的。许多校友已组建跨府工作组和公私合作伙伴关系，共同推进共享的数字基础设施、数据平台与公民服务项目——这些合作均源自课程中建立的关系。",
    },
  },
  {
    category: "topics",
    question: {
      en: "How does SCL cover artificial intelligence and its governance?",
      th: "SCL ครอบคลุมเรื่องปัญญาประดิษฐ์และธรรมาภิบาล AI อย่างไร?",
      cn: "SCL 如何讲授人工智能及其治理？",
    },
    answer: {
      en: "SCL dedicates significant attention to AI governance, covering ethical frameworks, risk management, procurement standards, and the use of AI in public decision-making. The goal is to help leaders deploy AI responsibly while maximizing public value.",
      th: "SCL ทุ่มเทเนื้อหาให้กับธรรมาภิบาล AI อย่างมาก ครอบคลุมกรอบจริยธรรม การบริหารความเสี่ยง มาตรฐานการจัดซื้อ และการใช้ AI ในกระบวนการตัดสินใจสาธารณะ เป้าหมายคือช่วยผู้นำนำ AI ไปใช้อย่างมีความรับผิดชอบ พร้อมเพิ่มคุณค่าสาธารณะให้สูงสุด",
      cn: "SCL 在 AI 治理方面投入大量内容，涵盖伦理框架、风险管理、采购标准以及 AI 在公共决策中的应用。目标是帮助领导者负责任地部署 AI，同时最大化其公共价值。",
    },
  },
  {
    category: "topics",
    question: {
      en: "What role does IoT play in the curriculum?",
      th: "IoT มีบทบาทอย่างไรในหลักสูตร?",
      cn: "物联网（IoT）在课程中扮演什么角色？",
    },
    answer: {
      en: "IoT is explored as a foundational layer of smart city infrastructure, with sessions on sensor networks, real-time data collection, integration with urban operations centers, and use cases in traffic management, environmental monitoring, and public safety.",
      th: "IoT ถูกศึกษาในฐานะชั้นพื้นฐานของโครงสร้างพื้นฐานเมืองอัจฉริยะ มีหัวข้อทั้งเครือข่ายเซ็นเซอร์ การเก็บข้อมูลแบบเรียลไทม์ การเชื่อมต่อเข้ากับศูนย์ปฏิบัติการเมือง และกรณีการใช้งานในการจัดการจราจร การตรวจสภาพสิ่งแวดล้อม และความปลอดภัยสาธารณะ",
      cn: "IoT 被视为智慧城市基础设施的核心底层，课程涵盖传感器网络、实时数据采集、与城市运营中心的集成，以及在交通管理、环境监测和公共安全方面的应用案例。",
    },
  },
  {
    category: "topics",
    question: {
      en: "How does the program address digital governance?",
      th: "หลักสูตรพูดถึงธรรมาภิบาลดิจิทัลอย่างไร?",
      cn: "课程如何讨论数字治理？",
    },
    answer: {
      en: "Digital governance is treated as both a technical and political challenge. Participants learn about data sovereignty, inter-agency coordination, open data policies, digital identity, and how to build institutional capacity for sustained digital service delivery.",
      th: "ธรรมาภิบาลดิจิทัลถูกมองว่าเป็นทั้งความท้าทายทางเทคนิคและทางการเมือง ผู้เข้าร่วมจะเรียนเรื่องอธิปไตยทางข้อมูล การประสานงานระหว่างหน่วยงาน นโยบายข้อมูลเปิด อัตลักษณ์ดิจิทัล และวิธีการสร้างขีดความสามารถเชิงสถาบันเพื่อให้บริการดิจิทัลที่ยั่งยืน",
      cn: "数字治理被视为兼具技术与政治维度的挑战。学员将学习数据主权、跨机构协调、开放数据政策、数字身份，以及如何构建支撑可持续数字服务的机构能力。",
    },
  },
  {
    category: "topics",
    question: {
      en: "Is data-driven policy making a major focus?",
      th: "การกำหนดนโยบายด้วยข้อมูลเป็นจุดเน้นใหญ่ของหลักสูตรหรือไม่?",
      cn: "数据驱动的政策制定是否是课程重点？",
    },
    answer: {
      en: "Yes, data-driven policy is a core pillar of the curriculum. Leaders learn how to move from intuition-based decisions to evidence-based governance using urban data analytics, performance dashboards, and predictive modeling relevant to their jurisdictions.",
      th: "ใช่ การกำหนดนโยบายด้วยข้อมูลเป็นหนึ่งในเสาหลักของหลักสูตร ผู้นำจะเรียนวิธีเปลี่ยนจากการตัดสินใจด้วยสัญชาตญาณ ไปสู่การปกครองที่อิงหลักฐาน โดยใช้การวิเคราะห์ข้อมูลเมือง แดชบอร์ดผลการดำเนินงาน และการสร้างแบบจำลองคาดการณ์ที่เกี่ยวข้องกับเขตอำนาจของตน",
      cn: "是。数据驱动政策是课程的核心支柱。领导者将学习如何借助城市数据分析、绩效仪表板与适合本辖区的预测模型，从凭直觉决策转向基于证据的治理。",
    },
  },
  {
    category: "topics",
    question: {
      en: "Does the program address cybersecurity for cities?",
      th: "หลักสูตรพูดถึงความมั่นคงปลอดภัยไซเบอร์ของเมืองหรือไม่?",
      cn: "课程是否涉及城市层面的网络安全？",
    },
    answer: {
      en: "Yes, cybersecurity is covered as an essential component of smart city resilience. Participants examine threats to critical infrastructure, data privacy regulations, incident response planning, and how to build a security-aware culture across government agencies.",
      th: "ใช่ ความมั่นคงปลอดภัยไซเบอร์ถูกพูดถึงในฐานะองค์ประกอบสำคัญของความยืดหยุ่นของเมืองอัจฉริยะ ผู้เข้าร่วมจะพิจารณาภัยคุกคามต่อโครงสร้างพื้นฐานสำคัญ ข้อกำหนดด้านความเป็นส่วนตัวของข้อมูล การวางแผนตอบสนองเหตุการณ์ และวิธีสร้างวัฒนธรรมที่ตื่นตัวด้านความปลอดภัยในหน่วยงานรัฐ",
      cn: "是。网络安全被视为智慧城市韧性的关键组成。学员将研究关键基础设施面临的威胁、数据隐私法规、事件响应计划，以及如何在政府机构中建立安全意识文化。",
    },
  },
  {
    category: "certification",
    question: {
      en: "What certificate do participants receive upon completion?",
      th: "ผู้เข้าร่วมจะได้รับใบรับรองอะไรเมื่อสำเร็จหลักสูตร?",
      cn: "学员完成课程后会获得什么证书？",
    },
    answer: {
      en: "Graduates receive an official certificate of completion from depa, recognizing their completion of the Smart City Leadership executive program. This credential signals advanced preparation in digital transformation and smart city leadership.",
      th: "ผู้สำเร็จการศึกษาจะได้รับใบรับรองสำเร็จหลักสูตรอย่างเป็นทางการจาก depa รับรองว่าได้ผ่านหลักสูตรผู้บริหารด้าน Smart City Leadership ใบรับรองนี้เป็นเครื่องบ่งชี้การเตรียมความพร้อมขั้นสูงในด้านการเปลี่ยนผ่านดิจิทัลและภาวะผู้นำเมืองอัจฉริยะ",
      cn: "毕业生将获得 depa 颁发的官方结业证书，认证其完成了智慧城市领导力高管课程。这一证书代表在数字化转型与智慧城市领导力方面的进阶储备。",
    },
  },
  {
    category: "certification",
    question: {
      en: "Is the SCL certificate formally recognized by government agencies?",
      th: "ใบรับรอง SCL ได้รับการรับรองอย่างเป็นทางการจากหน่วยงานราชการหรือไม่?",
      cn: "SCL 证书是否获得政府机构正式认可？",
    },
    answer: {
      en: "Yes, the certificate is issued by a national agency under the Ministry of Digital Economy and Society and is recognized across Thai government and state enterprise contexts. It is increasingly valued in promotion and appointment processes for senior administrative roles.",
      th: "ใช่ ใบรับรองออกโดยหน่วยงานระดับชาติภายใต้กระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม และเป็นที่ยอมรับในแวดวงราชการไทยและรัฐวิสาหกิจ ปัจจุบันได้รับการให้น้ำหนักเพิ่มขึ้นในการพิจารณาเลื่อนตำแหน่งและแต่งตั้งระดับผู้บริหารระดับสูง",
      cn: "是。证书由隶属于数字经济与社会部的国家机构颁发，在泰国政府与国有企业体系中获得广泛认可，并在高级行政职位的晋升与任命中日益受到重视。",
    },
  },
  {
    category: "certification",
    question: {
      en: "How has SCL impacted the careers of past participants?",
      th: "SCL ส่งผลต่อเส้นทางอาชีพของผู้เข้าร่วมรุ่นก่อนๆ อย่างไร?",
      cn: "SCL 对过往学员的职业发展有何影响？",
    },
    answer: {
      en: "Many alumni have gone on to lead major digital transformation projects, secure increased technology budgets, and advance to higher executive or political office. The program is widely cited by graduates as a turning point in their strategic thinking and professional network.",
      th: "ศิษย์เก่าจำนวนมากได้ก้าวขึ้นเป็นผู้นำโครงการเปลี่ยนผ่านดิจิทัลขนาดใหญ่ จัดสรรงบประมาณด้านเทคโนโลยีที่สูงขึ้น และเลื่อนสู่ตำแหน่งบริหารหรือตำแหน่งทางการเมืองที่สูงขึ้น ผู้สำเร็จการศึกษามักอ้างถึงหลักสูตรนี้ว่าเป็นจุดเปลี่ยนของกระบวนการคิดเชิงยุทธศาสตร์และเครือข่ายมืออาชีพ",
      cn: "许多校友后续主导了重大数字化转型项目，争取到更高的技术预算，并晋升至更高的高管或政界职位。毕业生普遍认为该课程是其战略思维与职业网络的重要转折点。",
    },
  },
  {
    category: "certification",
    question: {
      en: "Does completing SCL guarantee specific project funding for my city?",
      th: "จบ SCL แล้วจะได้รับงบประมาณโครงการของเมืองโดยตรงหรือไม่?",
      cn: "完成 SCL 是否能为我所在的城市直接获得项目资金？",
    },
    answer: {
      en: "While completion does not automatically guarantee funding, graduates are significantly better positioned to articulate investment-ready proposals, align with national digital priorities, and access depa and partner funding windows thanks to their refined project concepts and alumni connections.",
      th: "การสำเร็จหลักสูตรไม่ได้รับประกันงบประมาณโดยอัตโนมัติ แต่ผู้สำเร็จการศึกษาจะอยู่ในสถานะที่ดีกว่ามากในการนำเสนอข้อเสนอที่พร้อมรับการลงทุน ปรับให้สอดคล้องกับทิศทางดิจิทัลแห่งชาติ และเข้าถึงช่องทางงบประมาณของ depa และพันธมิตรได้ ผ่านแนวคิดโครงการที่ขัดเกลาแล้วและเครือข่ายศิษย์เก่า",
      cn: "完成课程并不自动保证资金落地，但毕业生在阐述可投资方案、对接国家数字战略以及借助 depa 与合作机构资金渠道方面，处于明显更有利的位置——得益于打磨过的项目构想和校友关系。",
    },
  },
  {
    category: "certification",
    question: {
      en: "Can I list SCL on my official resume or government profile?",
      th: "นำ SCL ใส่ในประวัติส่วนตัวอย่างเป็นทางการได้หรือไม่?",
      cn: "我可以在正式简历或政府个人档案中列出 SCL 吗？",
    },
    answer: {
      en: "Yes, participants are encouraged to list the Smart City Leadership program under executive education credentials. The depa affiliation and the program's national profile add meaningful weight to leadership profiles in both public and private sectors.",
      th: "ได้ ผู้เข้าร่วมได้รับการสนับสนุนให้ระบุ Smart City Leadership ในส่วนของการศึกษาผู้บริหาร การที่หลักสูตรอยู่ภายใต้ depa และมีโปรไฟล์ระดับชาติ ช่วยเพิ่มน้ำหนักให้กับประวัติความเป็นผู้นำทั้งในภาครัฐและเอกชน",
      cn: "可以。鼓励学员将智慧城市领导力课程列于高管教育资历之下。课程归属 depa 且具有全国影响力，为公共与私营部门的领导力履历显著加分。",
    },
  },
  {
    category: "implementation",
    question: {
      en: "How can I apply SCL learnings to my province or city immediately?",
      th: "ผมจะนำสิ่งที่เรียนจาก SCL ไปใช้กับจังหวัดหรือเมืองของตัวเองได้ทันทีอย่างไร?",
      cn: "我如何立即将 SCL 所学应用到自己所在的府或城市？",
    },
    answer: {
      en: "The curriculum is designed around implementable frameworks. Most participants return to their jurisdictions with a prioritized action plan, a draft data strategy, or a defined smart city pilot that can be launched with existing or modest incremental resources.",
      th: "หลักสูตรออกแบบรอบกรอบที่นำไปใช้ได้จริง ผู้เข้าร่วมส่วนใหญ่กลับสู่เขตอำนาจของตนพร้อมแผนปฏิบัติการที่จัดลำดับความสำคัญ ร่างยุทธศาสตร์ข้อมูล หรือโครงการนำร่องเมืองอัจฉริยะที่กำหนดขอบเขตชัด สามารถเริ่มได้ด้วยทรัพยากรที่มีอยู่หรือเพิ่มเติมเพียงเล็กน้อย",
      cn: "课程围绕可落地的框架设计。多数学员回到所辖区域时，已带着一份排序清晰的行动计划、一份数据战略草案，或一个范围明确、可借助现有或少量增量资源启动的智慧城市试点。",
    },
  },
  {
    category: "implementation",
    question: {
      en: "Does the program help with procurement and vendor selection?",
      th: "หลักสูตรช่วยเรื่องการจัดซื้อจัดจ้างและการคัดเลือกผู้ขายไหม?",
      cn: "课程是否帮助学员处理采购与供应商选择？",
    },
    answer: {
      en: "Yes, sessions cover the practicalities of technology procurement, vendor evaluation, public-private partnership structures, and how to avoid common pitfalls in smart city contracting. This ensures leaders can engage the market with confidence and accountability.",
      th: "ช่วย เนื้อหาครอบคลุมเรื่องในทางปฏิบัติของการจัดซื้อเทคโนโลยี การประเมินผู้ขาย โครงสร้างความร่วมมือระหว่างภาครัฐ-เอกชน และวิธีหลีกเลี่ยงกับดักที่พบบ่อยในการทำสัญญาเมืองอัจฉริยะ เพื่อให้ผู้นำสามารถเข้าหาตลาดได้อย่างมั่นใจและรับผิดชอบ",
      cn: "会。课程涵盖技术采购的实务、供应商评估、公私合作架构，以及如何避开智慧城市签约中常见的陷阱，让领导者能以信心与问责感与市场对接。",
    },
  },
  {
    category: "implementation",
    question: {
      en: "What if my city has very limited digital infrastructure?",
      th: "ถ้าเมืองของผมมีโครงสร้างพื้นฐานดิจิทัลจำกัดมาก จะทำอย่างไร?",
      cn: "如果我的城市数字基础设施非常有限怎么办？",
    },
    answer: {
      en: "SCL explicitly addresses how to begin smart city journeys from low baselines. Participants learn about phased investment strategies, low-cost pilot approaches, and how to leverage national infrastructure programs to accelerate local digital readiness.",
      th: "SCL พูดเรื่องนี้ตรงๆ ว่าจะเริ่มเส้นทางเมืองอัจฉริยะจากฐานที่ต่ำได้อย่างไร ผู้เข้าร่วมจะเรียนยุทธศาสตร์การลงทุนเป็นเฟส แนวทางโครงการนำร่องต้นทุนต่ำ และวิธีใช้ประโยชน์จากโครงการโครงสร้างพื้นฐานระดับชาติเพื่อเร่งความพร้อมดิจิทัลในระดับท้องถิ่น",
      cn: "SCL 明确讨论了如何从低基线起步建设智慧城市。学员将学习分阶段投资策略、低成本试点方法，以及如何借助国家级基础设施计划加速地方的数字化准备。",
    },
  },
  {
    category: "implementation",
    question: {
      en: "How does SCL help with citizen engagement and change management?",
      th: "SCL ช่วยเรื่องการมีส่วนร่วมของประชาชนและการบริหารการเปลี่ยนแปลงอย่างไร?",
      cn: "SCL 如何帮助处理公民参与与变革管理？",
    },
    answer: {
      en: "The program emphasizes that technology alone does not create smart cities. Dedicated modules cover citizen co-design, behavioral change, communication strategy, and how to build political and social buy-in for digital initiatives across diverse stakeholder groups.",
      th: "หลักสูตรย้ำชัดว่าเทคโนโลยีอย่างเดียวไม่ได้สร้างเมืองอัจฉริยะ มีโมดูลเฉพาะที่ครอบคลุมการออกแบบร่วมกับประชาชน การเปลี่ยนพฤติกรรม ยุทธศาสตร์การสื่อสาร และวิธีสร้างการยอมรับทางการเมืองและสังคมต่อโครงการดิจิทัลในกลุ่มผู้มีส่วนได้ส่วนเสียที่หลากหลาย",
      cn: "课程明确指出：仅靠技术无法成就智慧城市。专门的模块涉及公民共创、行为改变、传播策略，以及如何在多元利益相关者中赢得对数字项目的政治与社会支持。",
    },
  },
  {
    category: "implementation",
    question: {
      en: "Can I bring a real problem from my jurisdiction into the program?",
      th: "ผมสามารถนำปัญหาจริงจากเขตอำนาจของตัวเองเข้ามาในหลักสูตรได้ไหม?",
      cn: "我可以把所在辖区的真实问题带进课程吗？",
    },
    answer: {
      en: "Yes, participants are encouraged to bring current challenges and use them as the basis for discussions, peer feedback, and capstone projects. This ensures the learning is immediately relevant and often results in actionable solutions by graduation.",
      th: "ได้ ผู้เข้าร่วมได้รับการสนับสนุนให้นำปัญหาที่กำลังเผชิญในปัจจุบันเข้ามาใช้เป็นโจทย์สำหรับการอภิปราย การให้ความเห็นจากเพื่อนร่วมรุ่น และโครงการ Capstone ทำให้สิ่งที่เรียนเกี่ยวข้องโดยตรง และมักลงเอยด้วยทางออกที่ปฏิบัติได้จริงเมื่อจบหลักสูตร",
      cn: "可以。课程鼓励学员将当前面临的挑战作为讨论、同侪反馈与 Capstone 项目的素材，确保所学立即贴合工作，并常常在毕业时产出可执行的解决方案。",
    },
  },
  {
    category: "partnerships",
    question: {
      en: "What is depa's role in the SCL program?",
      th: "บทบาทของ depa ในหลักสูตร SCL คืออะไร?",
      cn: "depa 在 SCL 课程中扮演什么角色？",
    },
    answer: {
      en: "depa is the program owner and primary convener, leveraging its mandate under the Ministry of Digital Economy and Society to promote digital innovation nationwide. depa provides strategic direction, funding support, and national policy alignment for SCL.",
      th: "depa เป็นเจ้าของหลักสูตรและผู้จัดหลัก โดยใช้อำนาจหน้าที่ภายใต้กระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม ในการส่งเสริมนวัตกรรมดิจิทัลทั่วประเทศ depa ให้ทั้งทิศทางเชิงยุทธศาสตร์ การสนับสนุนงบประมาณ และการจัดวางให้สอดคล้องกับนโยบายแห่งชาติของ SCL",
      cn: "depa 是课程的主体与主要召集机构，依托其在数字经济与社会部下的职能在全国推动数字创新。depa 为 SCL 提供战略方向、资金支持，以及与国家政策的对齐。",
    },
  },
  {
    category: "partnerships",
    question: {
      en: "Does KMITL or other academic institutions partner on SCL?",
      th: "สจล. หรือสถาบันการศึกษาอื่นเข้ามาเป็นพันธมิตรของ SCL หรือไม่?",
      cn: "KMITL 或其他学术机构是否参与 SCL 合作？",
    },
    answer: {
      en: "Yes, the program collaborates with leading academic institutions including King Mongkut's Institute of Technology Ladkrabang (KMITL) and others to ensure academic rigor, research relevance, and access to specialized technical expertise and facilities.",
      th: "ใช่ หลักสูตรร่วมมือกับสถาบันการศึกษาชั้นนำ ทั้งสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง (สจล.) และอื่นๆ เพื่อให้มีความเข้มงวดทางวิชาการ ความเกี่ยวข้องในเชิงงานวิจัย และการเข้าถึงผู้เชี่ยวชาญและสิ่งอำนวยความสะดวกทางเทคนิคเฉพาะทาง",
      cn: "是。课程与拉甲挽王子工程学院（KMITL）等顶尖学术机构合作，确保学术严谨性、研究相关性，并获得专项技术专家与设施的支持。",
    },
  },
  {
    category: "partnerships",
    question: {
      en: "Are there international partnerships connected to the program?",
      th: "หลักสูตรมีความร่วมมือระหว่างประเทศหรือไม่?",
      cn: "课程是否有国际合作？",
    },
    answer: {
      en: "SCL maintains international connections with smart city networks, technology agencies, and academic institutions across Asia and Europe. These partnerships enable knowledge exchange, study tours, and exposure to globally validated methodologies.",
      th: "SCL รักษาความเชื่อมโยงระหว่างประเทศกับเครือข่ายเมืองอัจฉริยะ หน่วยงานเทคโนโลยี และสถาบันการศึกษาในเอเชียและยุโรป ความร่วมมือเหล่านี้เปิดทางสู่การแลกเปลี่ยนความรู้ การดูงาน และการได้สัมผัสกับวิธีการที่ผ่านการพิสูจน์ในระดับโลก",
      cn: "有。SCL 与亚洲、欧洲的智慧城市网络、技术机构与学术单位保持国际合作。这些合作支持知识交流、考察访问，以及接触在全球范围内已被验证的方法论。",
    },
  },
  {
    category: "partnerships",
    question: {
      en: "Does depa connect SCL graduates to other national digital initiatives?",
      th: "depa เชื่อมศิษย์เก่า SCL เข้ากับโครงการดิจิทัลระดับชาติอื่นๆ ไหม?",
      cn: "depa 是否将 SCL 毕业生连接到其他国家级数字项目？",
    },
    answer: {
      en: "Yes, depa actively links SCL alumni to broader national programs such as the Thailand Digital Valley, smart city cluster development, and international roadshows. This integration multiplies the impact of individual leaders by connecting them to ecosystem-scale opportunities.",
      th: "ใช่ depa เชื่อมศิษย์เก่า SCL เข้ากับโครงการระดับชาติที่ใหญ่กว่า เช่น Thailand Digital Valley การพัฒนาคลัสเตอร์เมืองอัจฉริยะ และโรดโชว์ระหว่างประเทศอย่างจริงจัง การเชื่อมต่อนี้ทวีคูณผลกระทบของผู้นำแต่ละคน โดยพาเข้าสู่โอกาสในระดับระบบนิเวศ",
      cn: "是的。depa 积极将 SCL 校友对接到更广泛的国家级项目，例如 Thailand Digital Valley、智慧城市集群发展以及国际路演。这种衔接将个人领导力的影响放大至生态系统层级。",
    },
  },
  {
    category: "partnerships",
    question: {
      en: "Can private sector companies partner with or sponsor SCL batches?",
      th: "บริษัทเอกชนเป็นพันธมิตรหรือสนับสนุนรุ่นของ SCL ได้ไหม?",
      cn: "私营企业可以成为 SCL 期次的合作方或赞助方吗？",
    },
    answer: {
      en: "Yes, private sector collaboration is welcomed and has historically enriched the program through technology demonstrations, case studies, and expert input. Partnerships are structured to preserve the program's independence and public-interest mission.",
      th: "ได้ ความร่วมมือกับภาคเอกชนได้รับการต้อนรับ และในอดีตก็ได้ช่วยเสริมความสมบูรณ์ให้กับหลักสูตรผ่านการสาธิตเทคโนโลยี กรณีศึกษา และมุมมองจากผู้เชี่ยวชาญ ความร่วมมือถูกออกแบบให้ยังคงรักษาความเป็นอิสระและภารกิจเพื่อสาธารณประโยชน์ของหลักสูตรไว้",
      cn: "可以。课程欢迎私营部门合作，过去也通过技术展示、案例研究与专家观点丰富了课程内容。合作架构始终保持课程的独立性以及服务公共利益的使命。",
    },
  },
];

export default faqData;
