import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { getApplicationUrl } from '../data/program';
import './Navbar.css';

const NAV_LINKS = [
  { path: '/?tab=about', key: 'about', label: 'About & History' },
  { path: '/methodology', key: 'methodology', label: 'Methodology' },
  { path: '/?tab=journey', key: 'journey', label: 'The Journey' },
  { path: '/alumni', key: 'alumni', label: 'Alumni' },
  { path: '/?tab=testimonials', key: 'testimonials', label: 'Voices' },
  { path: '/faculty', key: 'faculty', label: 'Faculty' },
  { path: '/faq', key: 'faq', label: 'FAQ' }
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const toggleRef = useRef(null);

  const languages = [
    { code: 'th', label: 'TH', name: 'ภาษาไทย' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'cn', label: 'CN', name: '中文' },
  ];

  const currentLang = (i18n.resolvedLanguage ?? i18n.language).split('-')[0];
  const officialUrl = getApplicationUrl(currentLang);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };

    const handlePointerDown = (event) => {
      // Close mobile menu if click is outside both menu and toggle button
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setMobileMenuOpen(false);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'glass-nav' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={handleNavClick}>
          <span className="nav-brand-mark">SCL</span>
          <span className="nav-brand-copy">
            <strong>Smart City Leadership</strong>
            <small>{t('nav.programLabel')}</small>
          </span>
        </Link>

        <div className="nav-links desktop-only">
          {NAV_LINKS.map(({ path, key, label }) => {
            const isActive = location.pathname === path.split('?')[0] && 
                           (path.includes('?') ? location.search.includes(path.split('?')[1]) : true);
            return (
              <Link
                key={key}
                to={path}
                className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {t(`nav.${key}`, label)}
              </Link>
            );
          })}

          <a
            href={officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm nav-apply"
          >
            {t('nav.apply')}
          </a>

          <div className="lang-switcher-inline">
            <Globe size={16} className="lang-icon" />
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                aria-checked={currentLang === language.code}
                onClick={() => changeLanguage(language.code)}
                className={`lang-inline-btn ${currentLang === language.code ? 'active' : ''}`}
              >
                {language.label}
              </button>
            ))}
          </div>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div ref={mobileMenuRef} className="mobile-menu glass-panel animate-fade-in is-visible">
          {NAV_LINKS.map(({ path, key, label }) => {
            const isActive = location.pathname === path.split('?')[0] && 
                           (path.includes('?') ? location.search.includes(path.split('?')[1]) : true);
            return (
              <Link
                key={key}
                to={path}
                className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
                onClick={handleNavClick}
              >
                {t(`nav.${key}`, label)}
              </Link>
            );
          })}

          <div className="mobile-langs">
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => {
                  changeLanguage(language.code);
                  setMobileMenuOpen(false);
                }}
                className={`lang-chip ${currentLang === language.code ? 'active' : ''}`}
              >
                {language.label}
              </button>
            ))}
          </div>

          <a
            href={officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full mt-4"
            onClick={handleNavClick}
          >
            {t('nav.apply')}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
