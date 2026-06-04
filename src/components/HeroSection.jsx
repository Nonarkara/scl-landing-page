import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, Mail, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { programDetails } from '../data/program';
import { heroFeaturePhoto, heroFeaturePhotoAlt, heroTeaserPhoto, newsLabels, pickNewsText, sclDispatch } from '../data/smartCityNews';
import IndexTeaser from './IndexTeaser';
import './HeroSection.css';

const LIVE_BADGE_KEYS = ['hero.liveBadge', 'hero.liveBadge2', 'hero.liveBadge3'];
const LIVE_BADGE_INTERVAL = 7000;

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [badgeIndex, setBadgeIndex] = useState(0);
  const [badgeVisible, setBadgeVisible] = useState(true);
  const pausedRef = useRef(false);
  const language = i18n.resolvedLanguage || i18n.language || 'en';
  const pickNews = (obj) => pickNewsText(obj, language);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return undefined;
    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      setBadgeVisible(false);
      window.setTimeout(() => {
        setBadgeIndex((i) => (i + 1) % LIVE_BADGE_KEYS.length);
        setBadgeVisible(true);
      }, 320);
    }, LIVE_BADGE_INTERVAL);
    return () => window.clearInterval(id);
  }, []);

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (waitlistEmail) {
      const subject = encodeURIComponent('SCL #7 Interest');
      const body = encodeURIComponent(`Please notify me when SCL #7 opens.\n\nEmail: ${waitlistEmail}`);
      window.location.href = `mailto:scp@depa.or.th?subject=${subject}&body=${body}`;
      setWaitlistSubmitted(true);
      setTimeout(() => setWaitlistSubmitted(false), 5000);
      setWaitlistEmail('');
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-shell">
          <div className="hero-copy">
            <div
              className="live-data-badge"
              onMouseEnter={() => { pausedRef.current = true; }}
              onMouseLeave={() => { pausedRef.current = false; }}
              aria-live="polite"
            >
              <span className="live-data-dot" />
              <span className={`live-data-text ${badgeVisible ? 'is-visible' : 'is-hidden'}`}>
                {t(LIVE_BADGE_KEYS[badgeIndex])}
              </span>
            </div>

            <div className="hero-eyebrow">
              {t('hero.eyebrow', { cohort: programDetails.cohortNumber })}
            </div>

            <h1 className="hero-title-v2">
              {t('hero.title', 'Leading the')} <span className="text-highlight">{t('hero.highlight', 'Future')}</span> {t('hero.title2', 'of Smart Thailand')}
            </h1>

            <p className="hero-value-statement">{t('hero.valueStatement')}</p>

            <p className="hero-subtitle">
              {t('hero.subtitle', 'SCL #6 has concluded. Register your interest to be notified when applications open for SCL #7.')}
            </p>

            <div className="hero-actions-waitlist">
              <form onSubmit={handleWaitlistSubmit} className="waitlist-form">
                <div className="waitlist-input-wrapper">
                  <Mail className="waitlist-icon" size={18} />
                  <input
                    type="email"
                    required
                    placeholder={t('hero.emailPlaceholder', 'Enter your email address')}
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    className="waitlist-input"
                  />
                </div>
                <button type="submit" className="btn btn-primary waitlist-submit">
                  {t('hero.waitlistCta', 'Email SCL #7 Interest')}
                </button>
              </form>
              {waitlistSubmitted && (
                <div className="waitlist-success">
                  <CheckCircle2 size={16} />
                  {t('hero.waitlistSuccess', 'Your email app is opening so depa can receive your SCL #7 interest.')}
                </div>
              )}

              <div className="hero-secondary-actions">
                <a
                  href="mailto:scp@depa.or.th?subject=Request%20SCL%20Program%20Brochure"
                  className="btn btn-outline btn-brochure"
                >
                  <Download size={16} />
                  {t('hero.brochure', 'Request Brochure')}
                </a>
              </div>
            </div>

            <div className="hero-project-stats">
              <div className="hps-item">
                <span className="hps-num">118</span>
                <span className="hps-label">{t('hero.statAreas', 'Smart city areas')}</span>
              </div>
              <div className="hps-sep" />
              <div className="hps-item">
                <span className="hps-num">80+</span>
                <span className="hps-label">{t('hero.statInitiatives', 'Alumni-led initiatives')}</span>
              </div>
              <div className="hps-sep" />
              <div className="hps-item">
                <span className="hps-num">37+</span>
                <span className="hps-label">{t('hero.statCertified', 'Certified zones')}</span>
              </div>
            </div>

            <a
              href="#news"
              className="hero-latest-update"
              onClick={(e) => {
                const target = document.getElementById('news');
                if (target) {
                  e.preventDefault();
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <span className="hero-latest-thumb">
                <img src={heroTeaserPhoto} alt="" loading="eager" />
              </span>
              <span className="hero-latest-body">
                <span className="hero-latest-label">{pickNews(newsLabels.updatedLabel)}</span>
                <strong>{pickNews(sclDispatch.headline)}</strong>
                <span>{pickNews(sclDispatch.signal)}</span>
              </span>
              <ArrowRight size={16} className="hero-latest-arrow" />
            </a>
          </div>

          <div className="hero-visual-v2">
            <div className="hero-image-card">
              <img
                src={heroFeaturePhoto}
                alt={pickNews(heroFeaturePhotoAlt)}
                className="hero-main-img"
              />
              <div className="hero-stats-overlay">
                <div className="stat-pill">
                  <span className="stat-num">{programDetails.alumniCount}</span>
                  <span className="stat-label">{t('hero.statAlumni', 'Alumni')}</span>
                </div>
                <div className="stat-pill">
                  <span className="stat-num">50</span>
                  <span className="stat-label">{t('hero.statProvinces', 'Provinces')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-index-v2">
          <IndexTeaser />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
