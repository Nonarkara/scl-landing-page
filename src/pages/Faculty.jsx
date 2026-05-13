import React from 'react';
import { useTranslation } from 'react-i18next';
import { Linkedin, Mail } from 'lucide-react';
import './Faculty.css';

const facultyData = [
  {
    name: {
      en: "Dr. Passakon Prathombutr",
      th: "ดร. ภาสกร ประถมบุตร",
      cn: "Passakon Prathombutr 博士",
    },
    role: {
      en: "Special Expert, depa",
      th: "ผู้เชี่ยวชาญพิเศษ, depa",
      cn: "depa 特别专家",
    },
    bio: {
      en: "Special Expert at depa and the agency's former Senior Executive Vice President. With more than 30 years of experience, he has led Thailand's national smart city policy planning from the start.",
      th: "ผู้เชี่ยวชาญพิเศษของ depa และอดีตรองผู้อำนวยการอาวุโส มีประสบการณ์มากกว่า 30 ปี และเป็นผู้นำการวางนโยบายเมืองอัจฉริยะระดับชาติของประเทศไทยมาตั้งแต่ต้น",
      cn: "depa 特别专家，曾任该机构高级执行副总裁。拥有逾三十年的工作经验，自始至终引领泰国国家智慧城市政策的规划与制定。",
    },
  },
  {
    name: {
      en: "Dr. Supakorn Siddhichai",
      th: "ดร. ศุภกร สิทธิไชย",
      cn: "Supakorn Siddhichai 博士",
    },
    role: {
      en: "Acting President & CEO, depa",
      th: "รักษาการผู้อำนวยการ depa",
      cn: "depa 代理总裁兼首席执行官",
    },
    bio: {
      en: "Acting President and CEO at depa. He drives SCL programs (e.g., SCL#1, #2) and Thailand's smart city initiatives, including updates on CAV and smart city frameworks.",
      th: "รักษาการผู้อำนวยการของ depa ผู้ขับเคลื่อนหลักสูตร SCL (รวมถึง SCL รุ่นที่ 1 และ 2) และโครงการเมืองอัจฉริยะของประเทศไทย ครอบคลุมการพัฒนา CAV และกรอบแนวคิดเมืองอัจฉริยะ",
      cn: "depa 代理总裁兼首席执行官，主导 SCL 课程（包括第 1、2 期）以及泰国智慧城市相关举措，涵盖 CAV 与智慧城市框架的更新。",
    },
  },
  {
    name: {
      en: "Dr. Non Arkaraprasertkul",
      th: "ดร. นน อัครประเสริฐกุล",
      cn: "Non Arkaraprasertkul 博士",
    },
    role: {
      en: "Smart City Leadership Expert & Program Co-designer",
      th: "ผู้เชี่ยวชาญด้านภาวะผู้นำเมืองอัจฉริยะ และผู้ร่วมออกแบบหลักสูตร",
      cn: "智慧城市领导力专家、课程联合设计者",
    },
    bio: {
      en: "A leading expert in smart city leadership, having taught in SCL for five batches and co-designing the program since 2022. With a PhD from Harvard in Anthropology and expertise in urban design and technology, he emphasizes public-private alignment, AI deployment, and site visits in SCL#6 (May 2026).",
      th: "ผู้เชี่ยวชาญด้านภาวะผู้นำเมืองอัจฉริยะ สอนใน SCL มาแล้วห้ารุ่น และร่วมออกแบบหลักสูตรตั้งแต่ปี 2565 จบปริญญาเอกด้านมานุษยวิทยาจากมหาวิทยาลัยฮาร์วาร์ด มีความเชี่ยวชาญด้านการออกแบบเมืองและเทคโนโลยี เน้นการประสานระหว่างภาครัฐและเอกชน การนำ AI ไปใช้งานจริง และการลงพื้นที่ใน SCL รุ่นที่ 6 (พฤษภาคม 2569)",
      cn: "智慧城市领导力领域的核心专家，已在 SCL 授课五届，并自 2022 年起共同设计该课程。哈佛大学人类学博士，研究方向为城市设计与技术，重视公私协同、人工智能落地，以及 SCL 第 6 期（2026 年 5 月）的实地考察环节。",
    },
  },
  {
    name: {
      en: "Dr. Rutchanee Gullayanon",
      th: "ดร. รัชนี กุลยานนท์",
      cn: "Rutchanee Gullayanon 博士",
    },
    role: {
      en: "Executive Vice President, KMITL",
      th: "รองอธิการบดี, สจล.",
      cn: "拉甲挽王子工程学院（KMITL）执行副校长",
    },
    bio: {
      en: "Executive Vice President for Innovation and Global Partnership at King Mongkut's Institute of Technology Ladkrabang (KMITL). She engages in smart city technology incubation and partnerships, including with DOST ISU for regional smart city development.",
      th: "รองอธิการบดีฝ่ายนวัตกรรมและความร่วมมือระดับโลก สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง (สจล.) ทำงานด้านการบ่มเพาะเทคโนโลยีเมืองอัจฉริยะและความร่วมมือระดับภูมิภาค รวมถึงร่วมกับ DOST ISU ในการพัฒนาเมืองอัจฉริยะ",
      cn: "拉甲挽王子工程学院（KMITL）创新与全球合作执行副校长，专注智慧城市技术孵化与合作网络的搭建，包括与 DOST ISU 合作推动区域智慧城市发展。",
    },
  },
  {
    name: {
      en: "Dr. Kanop Ketchart",
      th: "ดร. กณพ เกตุชาติ",
      cn: "Kanop Ketchart 博士",
    },
    role: {
      en: "Mayor of Nakhon Si Thammarat City",
      th: "นายกเทศมนตรีเมืองนครศรีธรรมราช",
      cn: "洛坤府市市长",
    },
    bio: {
      en: "Mayor of Nakhon Si Thammarat City, advocating smart city planning, muslim-friendly tourism, and AI-based education. He exemplifies practical smart city leadership through urban examples shared in regional forums.",
      th: "นายกเทศมนตรีเมืองนครศรีธรรมราช ผู้ขับเคลื่อนการวางผังเมืองอัจฉริยะ การท่องเที่ยวที่เป็นมิตรกับมุสลิม และการศึกษาบนฐาน AI เป็นตัวอย่างของภาวะผู้นำเมืองอัจฉริยะที่ปฏิบัติได้จริง ผ่านกรณีศึกษาที่ได้แบ่งปันในเวทีระดับภูมิภาค",
      cn: "洛坤府市市长，倡导智慧城市规划、穆斯林友好旅游与基于人工智能的教育，以可落地的智慧城市领导力闻名，相关案例多次出现在区域论坛上。",
    },
  },
  {
    name: {
      en: "Dr. Niramon Serisakul",
      th: "ดร. นิรมล เสรีสกุล",
      cn: "Niramon Serisakul 博士",
    },
    role: {
      en: "Assoc. Prof., Chulalongkorn University",
      th: "รองศาสตราจารย์ จุฬาลงกรณ์มหาวิทยาลัย",
      cn: "朱拉隆功大学副教授",
    },
    bio: {
      en: "Assoc. Prof. Dr. Niramon Serisakul (also Niramon Kulsrisombat) is at Chulalongkorn University's Department of Urban and Regional Planning and Director of the Urban Design and Development Center (UddC). She specializes in urban strategies, design, and stakeholder engagement for city development.",
      th: "รศ. ดร. นิรมล เสรีสกุล (หรือ นิรมล กุลศรีสมบัติ) สังกัดภาควิชาการวางแผนภาคและเมือง จุฬาลงกรณ์มหาวิทยาลัย และเป็นผู้อำนวยการศูนย์ออกแบบและพัฒนาเมือง (UddC) เชี่ยวชาญด้านยุทธศาสตร์เมือง การออกแบบ และการมีส่วนร่วมของผู้มีส่วนได้ส่วนเสียในการพัฒนาเมือง",
      cn: "朱拉隆功大学城市与区域规划系副教授，城市设计与发展中心（UddC）主任，专长于城市战略、设计以及城市发展中的多方利益相关者协作。",
    },
  },
  {
    name: {
      en: "Dr. Sanphawat Jatupatwarangkul",
      th: "ดร. สรรพวัฒน์ จตุพัฒน์วรางกูร",
      cn: "Sanphawat Jatupatwarangkul 博士",
    },
    role: {
      en: "Digital Twin Expert & University Lecturer",
      th: "ผู้เชี่ยวชาญด้าน Digital Twin และอาจารย์มหาวิทยาลัย",
      cn: "数字孪生专家、大学讲师",
    },
    bio: {
      en: "Digital twin expert and university lecturer with two decades of experience in building systems and design internationally.",
      th: "ผู้เชี่ยวชาญด้าน Digital Twin และอาจารย์มหาวิทยาลัย มีประสบการณ์กว่าสองทศวรรษด้านระบบอาคารและการออกแบบในระดับสากล",
      cn: "数字孪生专家与大学讲师，在建筑系统与国际化设计领域拥有逾二十年经验。",
    },
  },
  {
    name: {
      en: "Pongsak Yingchoncharoen",
      th: "พงษ์ศักดิ์ ยิ่งชนม์เจริญ",
      cn: "Pongsak Yingchoncharoen",
    },
    role: {
      en: "Mayor of Yala Municipality",
      th: "นายกเทศมนตรีนครยะลา",
      cn: "也拉市市长",
    },
    bio: {
      en: 'Mayor of Yala Municipality ("Mayor A"), leads a people-centric Smart City model with initiatives like Yala Free WiFi, mobile apps, Big Data dashboards, and dimensions including Smart Governance, Living, Environment, and Energy. His work transformed Yala into a sustainable smart city model.',
      th: 'นายกเทศมนตรีนครยะลา ("นายก A") ผู้นำโมเดลเมืองอัจฉริยะที่เน้นประชาชนเป็นศูนย์กลาง ด้วยโครงการอย่าง Yala Free WiFi แอปพลิเคชันบนมือถือ แดชบอร์ด Big Data และมิติต่างๆ ทั้ง Smart Governance, Living, Environment และ Energy ผลงานเปลี่ยนยะลาให้เป็นต้นแบบเมืองอัจฉริยะที่ยั่งยืน',
      cn: '也拉市市长（人称"A 市长"），主导以人为本的智慧城市模式，推动 Yala Free WiFi、移动应用、大数据仪表板等项目，涵盖智慧治理、智慧生活、智慧环境与智慧能源等多个维度，将也拉打造成可持续的智慧城市样板。',
    },
  },
];

export default function Faculty() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage ?? i18n.language).split('-')[0];
  const pick = (obj) => obj[lang] || obj.en;

  return (
    <div className="faculty-page container">
      <div className="faculty-header">
        <span className="section-kicker">{t('faculty.kicker', 'World-class expertise')}</span>
        <h1 className="faculty-title">{t('faculty.title', 'Faculty & Speakers')}</h1>
        <p className="faculty-subtitle">
          {t('faculty.subtitle', "Industry leaders, mayors, and smart-city pioneers who teach inside the program — not as keynotes, but as working participants in each cohort.")}
        </p>
      </div>

      <figure className="faculty-photo-strip">
        <img
          src="/Photos%20additional/487460980_1115778320593645_1910351410404612601_n.jpg"
          alt=""
          loading="lazy"
        />
        <figcaption>{t('faculty.photoCaption', 'A rotating faculty of policymakers, mayors, and practitioners teaches each cohort in person.')}</figcaption>
      </figure>

      <div className="faculty-grid">
        {facultyData.map((member, index) => (
          <div key={index} className="faculty-card">
            <div className="faculty-info">
              <h3 className="faculty-name">{pick(member.name)}</h3>
              <p className="faculty-role">{pick(member.role)}</p>
              <p className="faculty-bio">{pick(member.bio)}</p>
              <div className="faculty-social-row">
                <a
                  href="https://www.linkedin.com/company/depa-thailand"
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
