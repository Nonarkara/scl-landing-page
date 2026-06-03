import { ArrowUpRight } from 'lucide-react';
import './CapstoneCases.css';

const PROJECTS = [
  {
    id: 'rangsit-mycity',
    city: { en: 'Rangsit City, Pathum Thani', th: 'เทศบาลนครรังสิต จ.ปทุมธานี', cn: '巴吞他尼府兰实市' },
    title: { en: 'MyCITY Re-fill Station', th: 'MyCITY สถานีน้ำอัจฉริยะ', cn: 'MyCITY 智能补给站' },
    pillar: { en: 'Smart Living', th: 'Smart Living', cn: 'Smart Living' },
    summary: {
      en: 'A network of smart water-refill mini-stations brings essential services to 95 communities, reducing trips to the municipal centre.',
      th: 'เครือข่ายสถานีน้ำอัจฉริยะขนาดเล็กส่งบริการสาธารณะสู่ 95 ชุมชน ลดการเดินทางมายังศาลากลาง',
      cn: '一套智能小型补水站网络将基本公共服务延伸至 95 个社区，减少居民往返市政中心的需求。',
    },
    batch: 1,
    url: 'https://rangsitcity.go.th/11/mycity-re-fill-city-mini-station/',
  },
  {
    id: 'watsai-lineoa',
    city: { en: 'Wat Sai SAO, Nakhon Sawan', th: 'อบต.วัดไทรย์ จ.นครสวรรค์', cn: '那空沙旺府瓦萨依次级行政区' },
    title: { en: 'LINE OA Digital Governance', th: 'LINE OA บริการดิจิทัลเพื่อประชาชน', cn: 'LINE OA 数字治理平台' },
    pillar: { en: 'Smart Governance', th: 'Smart Governance', cn: 'Smart Governance' },
    summary: {
      en: 'Residents submit complaints, receive news, and track resolution status through a LINE Official Account — a zero-app digital governance system.',
      th: 'ประชาชนร้องเรียน รับข่าวสาร และติดตามสถานะผ่าน LINE Official Account — ระบบธรรมาภิบาลดิจิทัลที่ไม่ต้องติดตั้งแอปเพิ่ม',
      cn: '居民通过 LINE Official Account 提交投诉、接收公告并追踪处理进度——无需另装应用程序的数字治理系统。',
    },
    batch: 1,
    url: 'https://www.facebook.com/100072103733256/posts/988526996894082/',
  },
  {
    id: 'nst-flood',
    city: { en: 'Nakhon Si Thammarat City', th: 'เทศบาลนครนครศรีธรรมราช', cn: '洛坤市' },
    title: { en: 'Real-Time Flood Early Warning', th: 'ระบบเตือนภัยน้ำท่วมเรียลไทม์', cn: '实时洪水预警系统' },
    pillar: { en: 'Smart Environment', th: 'Smart Environment', cn: 'Smart Environment' },
    summary: {
      en: 'IoT sensors and a residents-facing digital alert platform give the city 48-hour resolution commitments and transparent flood-risk communication.',
      th: 'เซนเซอร์ IoT และแพลตฟอร์มแจ้งเตือนดิจิทัลสำหรับประชาชน ช่วยให้เทศบาลรับประกันการแก้ปัญหาภายใน 48 ชั่วโมง พร้อมการสื่อสารความเสี่ยงน้ำท่วมอย่างโปร่งใส',
      cn: 'IoT 传感器与面向市民的数字预警平台，使市政承诺 48 小时处理时效，并实现洪水风险的透明沟通。',
    },
    batch: 1,
    url: 'https://www.posttoday.com/smart-city/713049',
  },
  {
    id: 'yala-bigdata',
    city: { en: 'Yala City', th: 'เทศบาลนครยะลา', cn: '也拉市' },
    title: { en: 'Free WiFi + City Data Dashboard', th: 'WiFi สาธารณะและแดชบอร์ดข้อมูลเมือง', cn: 'Free WiFi + 城市数据仪表板' },
    pillar: { en: 'Smart People / Smart Governance', th: 'Smart People / Smart Governance', cn: 'Smart People / Smart Governance' },
    summary: {
      en: 'City-wide free WiFi as social infrastructure, paired with a Big Data + AI dashboard for public health and mobility — serving a diverse, complex border city.',
      th: 'WiFi ฟรีทั่วเมืองในฐานะโครงสร้างพื้นฐานทางสังคม ควบคู่กับแดชบอร์ด Big Data + AI เพื่อสาธารณสุขและการสัญจร ในเมืองชายแดนที่มีความหลากหลายสูง',
      cn: '覆盖全市的免费 WiFi 作为社会基础设施，搭配大数据 + AI 仪表板用于公共卫生和交通管理——服务于一座多元而复杂的边境城市。',
    },
    batch: 1,
    url: 'https://yalacity.go.th/news/detail/11937',
  },
];

function pick(obj, lang) {
  if (!obj) return '';
  const k = lang.toLowerCase().split('-')[0];
  return obj[k] || obj.en || '';
}

export default function CapstoneCases({ lang = 'en' }) {
  return (
    <section className="capstone-cases">
      <div className="capstone-cases-head">
        <span className="capstone-cases-kicker">
          {lang === 'th' ? 'โครงการจากผู้เรียน' : lang === 'cn' ? '学员项目案例' : 'Alumni projects'}
        </span>
        <h3 className="capstone-cases-title">
          {lang === 'th'
            ? 'แผนเปลี่ยนแปลงเมืองที่เกิดขึ้นจริง'
            : lang === 'cn'
            ? '真正落地的城市转型方案'
            : 'City transformation plans that got built'}
        </h3>
        <p className="capstone-cases-desc">
          {lang === 'th'
            ? 'ตัวอย่างโครงการที่ผู้เรียน SCL นำแผน Capstone ไปลงมือทำจริงในเมืองของตนเอง'
            : lang === 'cn'
            ? 'SCL 学员将结业提案付诸实践的典型项目'
            : 'A sample of projects where SCL participants turned their capstone proposals into live city systems.'}
        </p>
      </div>

      <ul className="capstone-cases-grid">
        {PROJECTS.map((p) => (
          <li key={p.id} className="capstone-case">
            <div className="capstone-case-top">
              <span className="capstone-case-pillar">{pick(p.pillar, lang)}</span>
              <span className="capstone-case-batch">SCL #{p.batch}</span>
            </div>
            <h4 className="capstone-case-title">{pick(p.title, lang)}</h4>
            <p className="capstone-case-city">{pick(p.city, lang)}</p>
            <p className="capstone-case-summary">{pick(p.summary, lang)}</p>
            <a
              className="capstone-case-link"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {lang === 'th' ? 'ดูโครงการ' : lang === 'cn' ? '查看项目' : 'View project'}
              <ArrowUpRight size={15} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
