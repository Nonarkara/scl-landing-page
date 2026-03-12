import { useTranslation } from 'react-i18next';
import { useFadeIn } from '../hooks/useFadeIn';
import './LogoBar.css';

const B = import.meta.env.BASE_URL;

const logos = [
  {
    src: `${B}logos/depa-thailand.png`,
    alt: 'depa — Digital Economy Promotion Agency',
    className: 'logo-bar-img logo-depa',
  },
  {
    src: `${B}logos/smart-city-thailand.jpg`,
    alt: 'Smart City Thailand',
    className: 'logo-bar-img logo-smartcity',
  },
  {
    src: `${B}logos/ministry-digital-economy-and-society.jpg`,
    alt: 'Ministry of Digital Economy and Society',
    className: 'logo-bar-img logo-mdes',
  },
];

const LogoBar = ({ placement = 'top', showLabel = true }) => {
  const { t } = useTranslation();
  const ref = useFadeIn();

  return (
    <div
      className={`logo-bar logo-bar--${placement}`}
      ref={ref}
      aria-label={showLabel ? t('logoBar.label') : undefined}
    >
      <div className="container logo-bar-inner animate-fade-in">
        {showLabel ? <span className="logo-bar-label">{t('logoBar.label')}</span> : null}
        <div className="logo-bar-logos">
          {logos.map((logo) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              className={logo.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoBar;
