import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { alumniBatches, getApplicationUrl } from '../data/program';
import LogoBar from './LogoBar';
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
            <Link to="/">{t('nav.home')}</Link>
            <Link to="/curriculum">{t('nav.about')}</Link>
            <Link to="/?tab=journey">{t('nav.journey')}</Link>
            <Link to="/alumni">{t('nav.alumni')}</Link>
            <Link to="/gallery">{t('nav.gallery')}</Link>
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

      <LogoBar placement="footer" />

      <div className="container footer-legal-bar">
        <div className="footer-legal-content">
          <p className="footer-rights">{t('footer.rights')}</p>
          <div className="footer-legal-links">
            <Link to="/faq">{t('footer.privacyPolicy')}</Link>
            <span className="footer-legal-sep" aria-hidden="true" />
            <Link to="/faq">{t('footer.termsOfService')}</Link>
            <span className="footer-legal-sep" aria-hidden="true" />
            <Link to="/faq">{t('footer.dataProtection')}</Link>
          </div>
          <p className="footer-disclaimer">{t('footer.disclaimer')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
