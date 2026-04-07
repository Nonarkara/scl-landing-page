import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './IndexTeaser.css';

const INDEX_URL = 'https://nonarkara.github.io/smart-city-thailand-index';

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
    <rect x="8" y="8" width="108" height="8" rx="4" fill={PILLAR_COLORS.livability} opacity="0.85" />
    <rect x="8" y="22" width="92" height="8" rx="4" fill={PILLAR_COLORS.economy} opacity="0.85" />
    <rect x="8" y="36" width="78" height="8" rx="4" fill={PILLAR_COLORS.safety} opacity="0.85" />
    <rect x="8" y="50" width="64" height="8" rx="4" fill={PILLAR_COLORS.wellbeing} opacity="0.85" />
    <rect x="8" y="64" width="50" height="8" rx="4" fill={PILLAR_COLORS.environment} opacity="0.85" />
    <text x="130" y="16" fontSize="11" fontWeight="700" fill="#111" opacity="0.6">α</text>
    <text x="130" y="44" fontSize="11" fontWeight="700" fill="#111" opacity="0.4">β</text>
    <text x="130" y="72" fontSize="11" fontWeight="700" fill="#111" opacity="0.25">γ</text>
  </svg>
);

const AllocatorGraphic = () => {
  const cx = 80, cy = 44, r = 32;
  const axes = 7;
  const points = Array.from({ length: axes }, (_, i) => {
    const angle = (Math.PI * 2 * i) / axes - Math.PI / 2;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });
  const weights = [0.9, 0.6, 0.75, 0.5, 0.85, 0.65, 0.7];
  const polygon = weights
    .map((w, i) => {
      const angle = (Math.PI * 2 * i) / axes - Math.PI / 2;
      return `${cx + r * w * Math.cos(angle)},${cy + r * w * Math.sin(angle)}`;
    })
    .join(' ');
  return (
    <svg viewBox="0 0 160 88" fill="none" aria-hidden="true">
      <polygon
        points={points.map((p) => `${p.x},${p.y}`).join(' ')}
        stroke="#111"
        strokeWidth="0.5"
        opacity="0.15"
        fill="none"
      />
      {points.map((p, i) => (
        <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#111" strokeWidth="0.5" opacity="0.1" />
      ))}
      <polygon points={polygon} fill="#ffd100" opacity="0.25" stroke="#ffd100" strokeWidth="1.5" />
      {weights.map((w, i) => {
        const angle = (Math.PI * 2 * i) / axes - Math.PI / 2;
        return (
          <circle
            key={i}
            cx={cx + r * w * Math.cos(angle)}
            cy={cy + r * w * Math.sin(angle)}
            r="3"
            fill="#ffd100"
            stroke="#fff"
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
};

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
      opacity="0.2"
    />
    <circle cx="78" cy="30" r="4" fill={PILLAR_COLORS.livability} opacity="0.8" />
    <circle cx="85" cy="42" r="3.5" fill={PILLAR_COLORS.economy} opacity="0.8" />
    <circle cx="72" cy="50" r="3" fill={PILLAR_COLORS.safety} opacity="0.8" />
    <circle cx="90" cy="55" r="3.5" fill={PILLAR_COLORS.wellbeing} opacity="0.8" />
    <circle cx="76" cy="65" r="4" fill={PILLAR_COLORS.environment} opacity="0.8" />
    <circle cx="68" cy="38" r="3" fill={PILLAR_COLORS.digital} opacity="0.8" />
  </svg>
);

const RealityGraphic = () => (
  <svg viewBox="0 0 160 88" fill="none" aria-hidden="true">
    <rect x="12" y="18" width="56" height="6" rx="3" fill={PILLAR_COLORS.livability} opacity="0.3" />
    <rect x="12" y="18" width="48" height="6" rx="3" fill={PILLAR_COLORS.livability} opacity="0.8" />
    <rect x="80" y="16" width="44" height="10" rx="5" fill="#111" opacity="0.08" />
    <text x="102" y="24" fontSize="7" fontWeight="600" fill="#111" opacity="0.45" textAnchor="middle">Certified</text>

    <rect x="12" y="40" width="56" height="6" rx="3" fill={PILLAR_COLORS.economy} opacity="0.3" />
    <rect x="12" y="40" width="32" height="6" rx="3" fill={PILLAR_COLORS.economy} opacity="0.8" />
    <rect x="80" y="38" width="44" height="10" rx="5" fill="#111" opacity="0.08" />
    <text x="102" y="46" fontSize="7" fontWeight="600" fill="#111" opacity="0.45" textAnchor="middle">Partial</text>

    <rect x="12" y="62" width="56" height="6" rx="3" fill={PILLAR_COLORS.environment} opacity="0.3" />
    <rect x="12" y="62" width="52" height="6" rx="3" fill={PILLAR_COLORS.environment} opacity="0.8" />
    <rect x="80" y="60" width="44" height="10" rx="5" fill="#111" opacity="0.08" />
    <text x="102" y="68" fontSize="7" fontWeight="600" fill="#111" opacity="0.45" textAnchor="middle">Operational</text>
  </svg>
);

const CARD_GRAPHICS = {
  rankings: RankingsGraphic,
  allocator: AllocatorGraphic,
  map: MapGraphic,
  reality: RealityGraphic,
};

const CARD_ROUTES = {
  rankings: '',
  allocator: '/allocator',
  map: '/map',
  reality: '/comparison',
};

const CARD_KEYS = ['rankings', 'allocator', 'map', 'reality'];

const IndexTeaser = () => {
  const { t } = useTranslation();

  return (
    <div className="index-teaser animate-fade-in is-visible" style={{ animationDelay: '0.16s' }}>
      <div className="index-teaser-header">
        <span className="section-kicker">{t('index.kicker')}</span>
        <h2 className="index-teaser-title">{t('index.title')}</h2>
        <p className="index-teaser-desc">{t('index.description')}</p>
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
          {t('index.cta')} <ArrowRight size={17} />
        </a>
        <span className="index-teaser-meta">
          {t('index.meta', { cities: 37, pillars: 7 })}
        </span>
      </div>
    </div>
  );
};

export default IndexTeaser;
