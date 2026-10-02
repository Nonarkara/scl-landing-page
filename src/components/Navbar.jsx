import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Globe, Menu, Moon, Sun, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { getApplicationUrl } from '../data/program';
import { useTheme } from '../hooks/useTheme';
import './Navbar.css';

const NAV_LINKS = [
  { path: '/curriculum', key: 'about', label: 'Program Design' },
  { path: '/methodology', key: 'methodology', label: 'Methodology' },
  { path: '/?tab=journey', key: 'journey', label: 'The Journey' },
  { path: '/alumni', key: 'alumni', label: 'Alumni' },
  { path: '/gallery', key: 'gallery', label: 'Gallery' },
  { path: '/faculty', key: 'faculty', label: 'Faculty' },
  { path: '/faq', key: 'faq', label: 'FAQ' }
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggle: toggleTheme } = useTheme();
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
        if (mobileMenuOpen) toggleRef.current?.focus();
      }
      if (event.key === 'Tab' && mobileMenuOpen) {
        const controls = [toggleRef.current, ...mobileMenuRef.current.querySelectorAll('a, button, select')];
        const first = controls[0];
        const last = controls.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      mobileMenuRef.current?.querySelector('a')?.focus();
    }

    const background = document.querySelectorAll('.app-main, .site-footer');
    background.forEach((element) => { element.inert = mobileMenuOpen; });

    const onResize = () => {
      if (window.innerWidth >= 1200) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      background.forEach((element) => { element.inert = false; });
      window.removeEventListener('resize', onResize);
    };
  }, [mobileMenuOpen]);

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setMobileMenuOpen(false);
    if (mobileMenuOpen) toggleRef.current?.focus();
  };

  const handleNavClick = (event) => {
    setMobileMenuOpen(false);
    const target = new URL(event.currentTarget.href);
    if (target.pathname === location.pathname && target.search === location.search) {
      const tab = target.searchParams.get('tab');
      if (tab) requestAnimationFrame(() => document.getElementById(`tab-${tab}`)?.focus({ preventScroll: true }));
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'glass-nav' : ''}`} aria-label={t('nav.programLabel')}>
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
            title={t('nav.apply')}
            aria-label={t('nav.apply')}
          >
            depa <ExternalLink size={15} aria-hidden="true" />
          </a>

          <div className="lang-switcher-inline">
            <Globe size={16} className="lang-icon" aria-hidden="true" />
            <select className="language-select" aria-label={t('nav.changeLanguage')} value={currentLang} onChange={(event) => changeLanguage(event.target.value)}>
              {languages.map((language) => <option key={language.code} value={language.code} lang={language.code === 'cn' ? 'zh-CN' : language.code}>{language.label}</option>)}
            </select>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={t(theme === 'dark' ? 'common.lightMode' : 'common.darkMode')}
              title={t(theme === 'dark' ? 'common.lightMode' : 'common.darkMode')}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-navigation" ref={mobileMenuRef} className="mobile-menu glass-panel">
          {NAV_LINKS.map(({ path, key, label }) => {
            const isActive = location.pathname === path.split('?')[0] && 
                           (path.includes('?') ? location.search.includes(path.split('?')[1]) : true);
            return (
              <Link
                key={key}
                to={path}
                className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
                onClick={handleNavClick}
                aria-current={isActive ? 'page' : undefined}
              >
                {t(`nav.${key}`, label)}
              </Link>
            );
          })}

          <div className="mobile-langs">
            <select className="language-select" aria-label={t('nav.changeLanguage')} value={currentLang} onChange={(event) => changeLanguage(event.target.value)}>
              {languages.map((language) => <option key={language.code} value={language.code} lang={language.code === 'cn' ? 'zh-CN' : language.code}>{language.name}</option>)}
            </select>
            <button
              type="button"
              className="lang-chip theme-chip"
              onClick={toggleTheme}
              aria-label={t(theme === 'dark' ? 'common.lightMode' : 'common.darkMode')}
              title={t(theme === 'dark' ? 'common.lightMode' : 'common.darkMode')}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
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
