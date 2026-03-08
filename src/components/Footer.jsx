import { useTranslation } from 'react-i18next';
import { alumniBatches, getApplicationUrl } from '../data/program';
import './Footer.css';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;
  const officialUrl = getApplicationUrl(currentLanguage);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="section-kicker">{t('footer.kicker')}</span>
          <h2 className="footer-title">depa SCL</h2>
          <p className="footer-copy">{t('footer.description')}</p>
          <p className="footer-source-note">{t('footer.sourceNote')}</p>
        </div>

        <div className="footer-nav-group">
          <h4 className="footer-heading">{t('footer.navHeading')}</h4>
          <div className="footer-links">
            <a href="#home">{t('nav.home')}</a>
            <a href="#about">{t('nav.about')}</a>
            <a href="#journey">{t('nav.journey')}</a>
            <a href="#alumni">{t('nav.alumni')}</a>
            <a href="#gallery">{t('nav.gallery')}</a>
          </div>
        </div>

        <div className="footer-source-group">
          <h4 className="footer-heading">{t('footer.sourcesHeading')}</h4>
          <div className="footer-links">
            <a href={officialUrl} target="_blank" rel="noopener noreferrer">
              {t('footer.officialProgram')}
            </a>
            <a href={alumniBatches[0].link} target="_blank" rel="noopener noreferrer">
              {t('footer.officialAlumni')}
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-legal-bar">
        <div className="footer-legal-content">
          <p className="footer-rights">{t('footer.rights')}</p>
          <div className="footer-legal-links">
            <span>{t('footer.privacyPolicy')}</span>
            <span className="footer-legal-sep" aria-hidden="true" />
            <span>{t('footer.termsOfService')}</span>
            <span className="footer-legal-sep" aria-hidden="true" />
            <span>{t('footer.dataProtection')}</span>
          </div>
          <p className="footer-disclaimer">{t('footer.disclaimer')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
