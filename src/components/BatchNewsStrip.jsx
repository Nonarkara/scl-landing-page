import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { alumniSpotlight } from '../data/alumniSpotlight';
import './BatchNewsStrip.css';

function lang3(i18n) {
  return (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0];
}

function pick(obj, lg) {
  if (!obj) return '';
  return obj[lg] || obj.en || '';
}

export default function BatchNewsStrip({ batchId }) {
  const { t, i18n } = useTranslation();
  const lg = lang3(i18n);

  // Get entries for this batch, capped at 4 or 8 (never 5,6,7)
  const entries = alumniSpotlight.filter((e) => e.batch === batchId);
  // Only render if we have a full row (4) or two full rows (8). Never partial.
  const count = entries.length >= 8 ? 8 : entries.length >= 4 ? 4 : 0;
  const visible = entries.slice(0, count);

  if (visible.length === 0) return null;

  const readLabel = lg === 'th' ? 'อ่านแหล่งข่าว' : lg === 'cn' ? '阅读来源' : 'Read source';
  const kicker   = lg === 'th' ? 'เครือข่ายศิษย์เก่ากำลังขับเคลื่อนอะไรอยู่'
                 : lg === 'cn' ? '校友网络正在推动什么'
                 : 'What the alumni are doing now';

  return (
    <div className={`batch-news-strip batch-news-${count === 8 ? 'two-rows' : 'one-row'}`}>
      <p className="batch-news-kicker">{kicker}</p>
      <ul className="batch-news-grid">
        {visible.map((person) => (
          <li
            key={person.id}
            className={`batch-news-card${person.sector === 'private' ? ' is-private' : ''}`}
          >
            <div className="bnc-top">
              <span className="bnc-name">{person.name}</span>
              <span className="bnc-role">{pick(person.role, lg)}</span>
            </div>
            <p className="bnc-news">{pick(person.news, lg)}</p>
            <a
              className="bnc-link"
              href={person.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${readLabel} — ${person.name}`}
            >
              {pick({ en: person.source, th: person.source, cn: person.source }, lg)}
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
