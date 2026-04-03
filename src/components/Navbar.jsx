import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';
import { getApplicationUrl } from '../data/program';
import './Navbar.css';

const NAV_SECTIONS = ['home', 'about', 'journey', 'testimonials', 'alumni', 'gallery'];
const NAV_LINKS = ['about', 'journey', 'testimonials', 'alumni', 'gallery'];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const langMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleRef = useRef(null);

  const languages = [
    { code: 'th', label: 'TH', name: 'ภาษาไทย' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'zh', label: 'ZH', name: '中文' },
  ];

  const currentLang = (i18n.resolvedLanguage ?? i18n.language).split('-')[0];
  const officialUrl = getApplicationUrl(currentLang);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };

    const handlePointerDown = (event) => {
      // Close lang menu
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setLangMenuOpen(false);
      }
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

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observers = [];
    const sectionVisibility = {};

    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      sectionVisibility[id] = 0;

      const obs = new IntersectionObserver(
        ([entry]) => {
          sectionVisibility[id] = entry.intersectionRatio;
          // Set active to the section with the highest intersection ratio
          const best = Object.entries(sectionVisibility).reduce((a, b) => (b[1] > a[1] ? b : a));
          if (best[1] > 0) setActiveSection(best[0]);
        },
        { threshold: Array.from({ length: 11 }, (_, i) => i / 10), rootMargin: '-10% 0px -10% 0px' }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLangMenuOpen(false);
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
    setLangMenuOpen(false);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'glass-nav' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="nav-logo" onClick={handleNavClick}>
          <span className="nav-brand-mark">SCL</span>
          <span className="nav-brand-copy">
            <strong>Smart City Leadership</strong>
            <small>{t('nav.programLabel')}</small>
          </span>
        </a>

        <div className="nav-links desktop-only">
          {NAV_LINKS.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`nav-link ${activeSection === section ? 'nav-link--active' : ''}`}
              aria-current={activeSection === section ? 'location' : undefined}
            >
              {t(`nav.${section}`)}
            </a>
          ))}

          <a
            href={officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm nav-apply"
          >
            {t('nav.apply')}
          </a>

          <div className="lang-switcher" ref={langMenuRef}>
            <button
              type="button"
              className="lang-btn"
              onClick={() => setLangMenuOpen((open) => !open)}
              aria-label={t('nav.changeLanguage')}
              aria-expanded={langMenuOpen}
              aria-haspopup="menu"
            >
              <Globe size={16} />
              <span className="current-lang">{currentLang.toUpperCase()}</span>
            </button>

            {langMenuOpen && (
              <div className="lang-dropdown glass-panel" role="menu">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    role="menuitemradio"
                    aria-checked={currentLang === language.code}
                    onClick={() => changeLanguage(language.code)}
                    className={currentLang === language.code ? 'active' : ''}
                  >
                    <span>{language.label}</span>
                    <span>{language.name}</span>
                  </button>
                ))}
              </div>
            )}
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
          {NAV_LINKS.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`nav-link ${activeSection === section ? 'nav-link--active' : ''}`}
              onClick={handleNavClick}
            >
              {t(`nav.${section}`)}
            </a>
          ))}

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
