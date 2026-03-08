import { useTranslation } from 'react-i18next';
import { useFadeIn } from '../hooks/useFadeIn';
import './LogoBar.css';

const LogoBar = () => {
  const { t } = useTranslation();
  const ref = useFadeIn();

  return (
    <div className="logo-bar" ref={ref}>
      <div className="container logo-bar-inner animate-fade-in">
        <span className="logo-bar-label">{t('logoBar.label')}</span>
        <div className="logo-bar-logos">
          <img
            src="/logos/depa.jpg"
            alt="depa — Digital Economy Promotion Agency"
            className="logo-bar-img logo-depa"
          />
          <img
            src={encodeURI('/logos/Smart City Logo.jpg')}
            alt="Smart City Thailand Office"
            className="logo-bar-img logo-smartcity"
          />
          <img
            src="/logos/Logo_of_the_Ministry_of_Digital_Economy_and_Society_of_Thailand.svg"
            alt="Ministry of Digital Economy and Society"
            className="logo-bar-img logo-mdes"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoBar;
