import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Methodology.css';

const FRAMEWORKS = [
  {
    key: 'bmc',
    sourceUrl: 'https://www.mdpi.com/1996-1073/12/24/4798',
    hasQuote: false,
  },
  {
    key: 'designThinking',
    sourceUrl: 'https://www.undp.org/asia-pacific/stories/video-series-three-design-thinking-lessons-building-smart-cities',
    hasQuote: false,
  },
  {
    key: 'primer',
    sourceUrl: 'https://www.depa.or.th/storage/app/media/Article%2033%20Smart%20City%20Primer_compressed.pdf',
    hasQuote: false,
  },
  {
    key: 'uddc',
    sourceUrl: 'https://www.uddc.net/',
    hasQuote: false,
  },
  {
    key: 'asean',
    sourceUrl: 'https://smartcitytoolkit.asean.org/',
    sourceUrl2: 'https://asean.org/advancing-smart-cities-across-asean-and-beyond/',
    hasQuote: false,
  },
  {
    key: 'agile',
    sourceUrl: 'https://www.apm.org.uk/resources/find-a-resource/agile-project-management/',
    hasQuote: true,
  },
];

const TOOLS = [
  { key: 'sciti', url: 'https://sciti.nonarkara.org/' },
  { key: 'slic', url: 'https://slic.nonarkara.org/' },
  { key: 'ascn', url: 'https://ascn.nonarkara.org/' },
  { key: 'solomon', url: 'https://solomon.nonarkara.org/' },
];

const PHOTO_BASE = '/Photos/';
const methodologyPhotos = [
  '539503324_1239502091554600_5125521868853307132_n.jpg',
  '540073752_1239501834887959_7514705360388831618_n.jpg',
  '539738239_1239501871554622_35830799402647117_n.jpg',
  '539462584_1239502018221274_4785186678856189554_n.jpg',
];

export default function Methodology() {
  const { t } = useTranslation();

  return (
    <section className="methodology-section">

      {/* ── Header ─────────────────────────────────────── */}
      <div className="methodology-header">
        <span className="section-kicker">{t('methodology.kicker')}</span>
        <h2 className="methodology-title">{t('methodology.title')}</h2>
        <p className="methodology-subtitle">{t('methodology.subtitle')}</p>
      </div>

      {/* ── Why methodology matters ─────────────────────── */}
      <div className="methodology-why">
        <div className="methodology-why-text">
          <h3>{t('methodology.whyTitle')}</h3>
          <p>{t('methodology.whyDesc')}</p>
        </div>
        <figure className="methodology-why-photo">
          <img
            src={encodeURI(PHOTO_BASE + methodologyPhotos[0])}
            alt=""
            loading="lazy"
          />
        </figure>
      </div>

      {/* ── Six frameworks ─────────────────────────────── */}
      <div className="methodology-frameworks-header">
        <h3>{t('methodology.frameworksTitle')}</h3>
      </div>

      <div className="frameworks-grid">
        {FRAMEWORKS.map((fw) => (
          <article key={fw.key} className="framework-card">
            <div className="framework-card-top">
              <span className="framework-number">{t(`methodology.frameworks.${fw.key}.number`)}</span>
              <span className="framework-tag">{t(`methodology.frameworks.${fw.key}.tag`)}</span>
            </div>
            <h4 className="framework-name">{t(`methodology.frameworks.${fw.key}.name`)}</h4>
            <p className="framework-insight">{t(`methodology.frameworks.${fw.key}.insight`)}</p>
            {fw.hasQuote && (
              <blockquote className="framework-quote">
                {t(`methodology.frameworks.${fw.key}.quote`)}
              </blockquote>
            )}
            <div className="framework-in-scl">
              <span className="in-scl-label">SCL —</span>
              <p>{t(`methodology.frameworks.${fw.key}.inSCL`)}</p>
            </div>
            <a
              href={fw.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="framework-source"
            >
              {t(`methodology.frameworks.${fw.key}.source`)}
              <ExternalLink size={12} />
            </a>
          </article>
        ))}
      </div>

      {/* ── Methodology photo strip ─────────────────────── */}
      <div className="methodology-photo-strip">
        {methodologyPhotos.slice(1).map((photo, i) => (
          <figure key={photo} className="methodology-strip-photo">
            <img
              src={encodeURI(PHOTO_BASE + photo)}
              alt=""
              loading="lazy"
            />
          </figure>
        ))}
      </div>

      {/* ── Weaving narrative ──────────────────────────── */}
      <div className="methodology-weaving">
        <div className="methodology-weaving-inner">
          <h3>{t('methodology.weavingTitle')}</h3>
          <p>{t('methodology.weavingDesc')}</p>
        </div>
      </div>

      {/* ── Tools ──────────────────────────────────────── */}
      <div className="methodology-tools">
        <div className="methodology-tools-header">
          <h3>{t('methodology.toolsTitle')}</h3>
          <p>{t('methodology.toolsSubtitle')}</p>
        </div>
        <div className="tools-grid">
          {TOOLS.map((tool) => (
            <a
              key={tool.key}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tool-card"
            >
              <div className="tool-card-top">
                <span className="tool-tag">{t(`methodology.tools.${tool.key}.tag`)}</span>
                <ExternalLink size={14} className="tool-external" />
              </div>
              <h4 className="tool-name">{t(`methodology.tools.${tool.key}.name`)}</h4>
              <p className="tool-desc">{t(`methodology.tools.${tool.key}.desc`)}</p>
              <span className="tool-url">{tool.url.replace('https://', '')}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ── Sources footer ─────────────────────────────── */}
      <div className="methodology-sources">
        <h4>{t('methodology.sourcesTitle')}</h4>
        <ol className="sources-list">
          {FRAMEWORKS.map((fw) => (
            <li key={fw.key}>
              <a href={fw.sourceUrl} target="_blank" rel="noopener noreferrer">
                {t(`methodology.frameworks.${fw.key}.source`)}
                <ExternalLink size={11} />
              </a>
              {fw.sourceUrl2 && (
                <>
                  {' · '}
                  <a href={fw.sourceUrl2} target="_blank" rel="noopener noreferrer">
                    {t('methodology.aseanSecondSource')}
                    <ExternalLink size={11} />
                  </a>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>

    </section>
  );
}
