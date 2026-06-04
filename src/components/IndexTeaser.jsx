import { ArrowRight, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './IndexTeaser.css';

const INDEX_URL = 'https://sciti.nonarkara.org';

const PILLAR_COLORS = {
  livability: '#2BA89C',
  economy: '#E8913A',
  safety: '#3D6BE8',
  wellbeing: '#E84393',
  environment: '#5CBD5C',
  hospitality: '#D4A843',
  digital: '#9B5DE5',
};

const RankingsGraphic = () => (
  <svg viewBox="0 0 160 88" fill="none" aria-hidden="true">
    <rect x="8" y="8" width="118" height="8" rx="0" fill={PILLAR_COLORS.livability} opacity="0.85" />
    <rect x="8" y="22" width="101" height="8" rx="0" fill={PILLAR_COLORS.economy} opacity="0.85" />
    <rect x="8" y="36" width="88" height="8" rx="0" fill={PILLAR_COLORS.safety} opacity="0.85" />
    <rect x="8" y="50" width="72" height="8" rx="0" fill={PILLAR_COLORS.wellbeing} opacity="0.85" />
    <rect x="8" y="64" width="58" height="8" rx="0" fill={PILLAR_COLORS.environment} opacity="0.85" />
    <text x="134" y="16" fontSize="9" fontWeight="700" fill="#111" opacity="0.5">α</text>
    <text x="134" y="44" fontSize="9" fontWeight="700" fill="#111" opacity="0.35">β</text>
    <text x="134" y="72" fontSize="9" fontWeight="700" fill="#111" opacity="0.2">γ</text>
    <text x="8" y="82" fontSize="6" fill="#111" opacity="0.3">118 cities scored</text>
  </svg>
);

const ClimateGraphic = () => (
  <svg viewBox="0 0 160 88" fill="none" aria-hidden="true">
    {/* Flood risk */}
    <text x="8" y="18" fontSize="6.5" fontWeight="700" fill="#111" opacity="0.45">FLOOD</text>
    <rect x="42" y="10" width="108" height="9" rx="0" fill={PILLAR_COLORS.safety} opacity="0.12" />
    <rect x="42" y="10" width="66" height="9" rx="0" fill={PILLAR_COLORS.safety} opacity="0.65" />

    {/* Heat risk */}
    <text x="8" y="36" fontSize="6.5" fontWeight="700" fill="#111" opacity="0.45">HEAT</text>
    <rect x="42" y="28" width="108" height="9" rx="0" fill={PILLAR_COLORS.economy} opacity="0.12" />
    <rect x="42" y="28" width="84" height="9" rx="0" fill={PILLAR_COLORS.economy} opacity="0.65" />

    {/* Water */}
    <text x="8" y="54" fontSize="6.5" fontWeight="700" fill="#111" opacity="0.45">WATER</text>
    <rect x="42" y="46" width="108" height="9" rx="0" fill={PILLAR_COLORS.livability} opacity="0.12" />
    <rect x="42" y="46" width="50" height="9" rx="0" fill={PILLAR_COLORS.livability} opacity="0.65" />

    {/* 2050 projection line */}
    <line x1="122" y1="5" x2="122" y2="62" stroke="#111" strokeWidth="0.75" strokeDasharray="2,2" opacity="0.25" />
    <text x="124" y="9" fontSize="5.5" fill="#111" opacity="0.3">2050</text>

    <text x="8" y="76" fontSize="5.5" fill="#111" opacity="0.35">World Bank CCDR 2025 · GISTDA</text>
    <line x1="8" y1="80" x2="150" y2="80" stroke="#111" strokeWidth="0.5" opacity="0.12" />
  </svg>
);

const MapGraphic = () => (
  <svg viewBox="0 0 160 88" fill="none" aria-hidden="true">
    <path
      d="M72 8 C74 10, 82 12, 84 14 C86 16, 90 18, 88 22 C86 26, 92 28, 94 32
         C96 36, 100 38, 98 42 C96 46, 94 48, 96 52 C98 56, 96 60, 92 62
         C88 64, 86 66, 84 70 C82 74, 78 76, 76 78 C74 80, 72 78, 70 76
         C68 74, 66 70, 64 68 C62 66, 58 64, 60 60 C62 56, 60 52, 58 48
         C56 44, 58 40, 60 36 C62 32, 64 28, 66 24 C68 20, 70 14, 72 8 Z"
      fill="#111"
      opacity="0.06"
      stroke="#111"
      strokeWidth="0.8"
    />
    <circle className="map-pulse-dot" cx="78" cy="30" r="4" fill={PILLAR_COLORS.livability} style={{ '--pulse-delay': '0s' }} />
    <circle className="map-pulse-dot" cx="85" cy="42" r="3.5" fill={PILLAR_COLORS.economy} style={{ '--pulse-delay': '2.5s' }} />
    <circle className="map-pulse-dot" cx="72" cy="50" r="3" fill={PILLAR_COLORS.safety} style={{ '--pulse-delay': '5s' }} />
    <circle className="map-pulse-dot" cx="90" cy="55" r="3.5" fill={PILLAR_COLORS.wellbeing} style={{ '--pulse-delay': '7.5s' }} />
    <circle className="map-pulse-dot" cx="76" cy="65" r="4" fill={PILLAR_COLORS.environment} style={{ '--pulse-delay': '10s' }} />
    <circle className="map-pulse-dot" cx="68" cy="38" r="3" fill={PILLAR_COLORS.digital} style={{ '--pulse-delay': '12.5s' }} />
  </svg>
);

const RealityGraphic = () => (
  <svg viewBox="0 0 160 88" fill="none" aria-hidden="true">
    {/* Certified badge line */}
    <rect x="12" y="14" width="62" height="7" rx="0" fill={PILLAR_COLORS.livability} opacity="0.3" />
    <rect x="12" y="14" width="56" height="7" rx="0" fill={PILLAR_COLORS.livability} opacity="0.85" />
    <rect x="82" y="11" width="48" height="13" rx="0" fill="#111" opacity="0.06" />
    <text x="106" y="20" fontSize="7" fontWeight="700" fill="#111" opacity="0.5" textAnchor="middle">α Certified</text>

    {/* Partial */}
    <rect x="12" y="37" width="62" height="7" rx="0" fill={PILLAR_COLORS.economy} opacity="0.3" />
    <rect x="12" y="37" width="36" height="7" rx="0" fill={PILLAR_COLORS.economy} opacity="0.85" />
    <rect x="82" y="34" width="48" height="13" rx="0" fill="#111" opacity="0.06" />
    <text x="106" y="43" fontSize="7" fontWeight="700" fill="#111" opacity="0.5" textAnchor="middle">β Partial</text>

    {/* Planned */}
    <rect x="12" y="60" width="62" height="7" rx="0" fill={PILLAR_COLORS.safety} opacity="0.3" />
    <rect x="12" y="60" width="18" height="7" rx="0" fill={PILLAR_COLORS.safety} opacity="0.85" />
    <rect x="82" y="57" width="48" height="13" rx="0" fill="#111" opacity="0.06" />
    <text x="106" y="66" fontSize="7" fontWeight="700" fill="#111" opacity="0.5" textAnchor="middle">γ Planned</text>

    <text x="12" y="82" fontSize="5.5" fill="#111" opacity="0.3">37 certified · 190+ zones registered</text>
  </svg>
);

const CARD_GRAPHICS = {
  rankings: RankingsGraphic,
  climate: ClimateGraphic,
  map: MapGraphic,
  reality: RealityGraphic,
};

// All cards open the live Index root (deep routes 404 on this deployment).
const CARD_ROUTES = {
  rankings: '',
  climate: '',
  map: '',
  reality: '',
};

const CARD_KEYS = ['rankings', 'climate', 'map', 'reality'];
const FINDING_KEYS = ['phuket', 'eec', 'gap'];

const IndexTeaser = () => {
  const { t } = useTranslation();

  const stats = [
    { value: '118', label: t('index.stats.citiesLabel'), sub: t('index.stats.citiesSub') },
    { value: '7', label: t('index.stats.pillarsLabel'), sub: t('index.stats.pillarsSub') },
    { value: '15+', label: t('index.stats.sourcesLabel'), sub: t('index.stats.sourcesSub') },
    { value: 'αβγ', label: t('index.stats.tierLabel'), sub: t('index.stats.tierSub') },
  ];

  return (
    <div className="index-teaser animate-fade-in is-visible" style={{ animationDelay: '0.16s' }}>
      <div className="index-teaser-header">
        <span className="section-kicker">{t('index.kicker')}</span>
        <h2 className="index-teaser-title">{t('index.title')}</h2>
        <p className="index-teaser-desc">{t('index.description')}</p>
      </div>

      <div className="index-teaser-stats">
        {stats.map((stat) => (
          <div key={stat.label} className="index-stat-item">
            <span className="index-stat-value">{stat.value}</span>
            <span className="index-stat-label">{stat.label}</span>
            <span className="index-stat-sub">{stat.sub}</span>
          </div>
        ))}
      </div>

      <div className="index-findings">
        <span className="index-findings-kicker">{t('index.findingsKicker')}</span>
        <div className="index-findings-list">
          {FINDING_KEYS.map((key) => (
            <div key={key} className="index-finding-item">
              <span className="index-finding-dot" />
              <span className="index-finding-text">{t(`index.findings.${key}`)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="index-teaser-grid">
        {CARD_KEYS.map((key, i) => {
          const Graphic = CARD_GRAPHICS[key];
          return (
            <a
              key={key}
              href={`${INDEX_URL}${CARD_ROUTES[key]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="index-teaser-card"
              style={{ animationDelay: `${0.18 + i * 0.04}s` }}
            >
              <div className="index-teaser-card-visual">
                <Graphic />
              </div>
              <div className="index-teaser-card-body">
                <span className="index-teaser-card-kicker">
                  {t(`index.cards.${key}.kicker`)}
                </span>
                <h3 className="index-teaser-card-title">
                  {t(`index.cards.${key}.title`)}
                </h3>
                <p className="index-teaser-card-desc">
                  {t(`index.cards.${key}.description`)}
                </p>
                <div className="external-tool-tag">
                  <ExternalLink size={12} /> {t('index.externalTool')}
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="index-teaser-footer">
        <a
          href={INDEX_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          {t('index.cta')} <ExternalLink size={17} />
        </a>
        <span className="index-teaser-meta">
          {t('index.meta', { cities: 118, pillars: 7, sources: 15 })}
        </span>
      </div>
    </div>
  );
};

export default IndexTeaser;
