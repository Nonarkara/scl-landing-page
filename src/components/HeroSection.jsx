import { useState } from 'react';
import { ArrowRight, FileText, Mail, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { programDetails } from '../data/program';
import {
  heroFeaturePhoto,
  heroFeaturePhotoAlt,
  heroTeaserPhoto,
  newsLabels,
  pickNewsText,
  sclDispatch,
} from '../data/smartCityNews';
import IndexTeaser from './IndexTeaser';
import alumniData from '../data/alumni.json';
import { buildAlumniEntries, computeDemographics } from '../utils/alumni';
import './HeroSection.css';

const demographics = computeDemographics(buildAlumniEntries(alumniData));

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const language = i18n.resolvedLanguage || i18n.language || 'en';
  const pickNews = (obj) => pickNewsText(obj, language);

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (waitlistEmail) {
      const subject = encodeURIComponent('SCL #7 Interest');
      const body = encodeURIComponent(
        `Please notify me when SCL #7 opens.\n\nEmail: ${waitlistEmail}`
      );
      window.location.href = `mailto:scp@depa.or.th?cc=dsp@depa.or.th&subject=${subject}&body=${body}`;
      setWaitlistSubmitted(true);
    }
  };

  return (
    <section id="home" className="hero" aria-labelledby="program-title">
      <div className="hero-stage">
        <img
          src={heroFeaturePhoto}
          alt={pickNews(heroFeaturePhotoAlt)}
          className="hero-main-img"
          fetchPriority="high"
        />
        <div className="container hero-stage-inner">
          <div className="hero-shell">
            <div className="hero-copy">
              <div className="hero-eyebrow">
                {t('hero.eyebrow', { cohort: programDetails.cohortNumber })}
              </div>

              <h1 id="program-title" className="hero-title-v2" lang="en">
                Smart City
                <br />
                Leadership
              </h1>

              <p className="hero-value-statement">{t('hero.valueStatement')}</p>

              <div className="hero-stage-actions">
                <Link to="/curriculum" className="btn btn-primary">
                  {t('hero.ctaSecondary')}{' '}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a href="#scl-interest" className="hero-interest-link">
                  {t('hero.waitlistCta')} <Mail size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="hero-brief">
          <dl className="hero-program-facts">
            <div>
              <dd>{programDetails.alumniCount}</dd>
              <dt>{t('hero.statAlumni')}</dt>
            </div>
            <div>
              <dd>{Object.keys(demographics.provinces).length}</dd>
              <dt>{t('hero.statProvinces')}</dt>
            </div>
            <div>
              <dd>{programDetails.cohortNumber}</dd>
              <dt>{t('alumni.batchesLabel')}</dt>
            </div>
            <div>
              <dd>7 / 42</dd>
              <dt>{t('hero.formatLabel')}</dt>
            </div>
          </dl>

          <a href="#news" className="hero-latest-update">
            <span className="hero-latest-thumb">
              <img src={heroTeaserPhoto} alt="" loading="lazy" />
            </span>
            <span className="hero-latest-body">
              <span className="hero-latest-label">
                {pickNews(newsLabels.updatedLabel)}
              </span>
              <strong>{pickNews(sclDispatch.headline)}</strong>
            </span>
            <ArrowRight
              size={18}
              className="hero-latest-arrow"
              aria-hidden="true"
            />
          </a>
        </div>

        <div id="scl-interest" className="hero-interest">
          <div>
            <h2 className="hero-interest-title">{t('hero.interestTitle')}</h2>
            <p className="hero-subtitle">{t('hero.subtitle')}</p>
          </div>

          <div className="hero-actions-waitlist">
            <form onSubmit={handleWaitlistSubmit} className="waitlist-form">
              <div className="waitlist-input-wrapper">
                <label htmlFor="interest-email" className="sr-only">
                  {t('hero.emailLabel')}
                </label>
                <Mail className="waitlist-icon" size={18} aria-hidden="true" />
                <input
                  id="interest-email"
                  name="email"
                  autoComplete="email"
                  type="email"
                  required
                  placeholder={t(
                    'hero.emailPlaceholder',
                    'Enter your email address'
                  )}
                  value={waitlistEmail}
                  onChange={(e) => {
                    setWaitlistEmail(e.target.value);
                    setWaitlistSubmitted(false);
                  }}
                  className="waitlist-input"
                />
              </div>
              <button type="submit" className="btn btn-primary waitlist-submit">
                {t('hero.waitlistCta', 'Email SCL #7 Interest')}
              </button>
            </form>
            {waitlistSubmitted && (
              <div className="waitlist-success" role="status">
                <CheckCircle2 size={16} aria-hidden="true" />
                {t(
                  'hero.waitlistSuccess',
                  'Your email app is opening so depa can receive your SCL #7 interest.'
                )}
              </div>
            )}

            <div className="hero-secondary-actions">
              <a
                href="mailto:scp@depa.or.th?cc=dsp@depa.or.th&subject=Request%20SCL%20Program%20Brochure"
                className="btn btn-outline btn-brochure"
              >
                <FileText size={16} aria-hidden="true" />
                {t('hero.brochure', 'Request Brochure')}
              </a>
            </div>
          </div>
        </div>

        <div
          className="hero-project-stats"
          aria-label={t('hero.nationalContext')}
        >
          <div className="hps-item">
            <span className="hps-num">118</span>
            <span className="hps-label">
              {t('hero.statAreas', 'Smart city areas')}
            </span>
          </div>
          <div className="hps-sep" />
          <div className="hps-item">
            <span className="hps-num">80+</span>
            <span className="hps-label">
              {t('hero.statInitiatives', 'Alumni-led initiatives')}
            </span>
          </div>
          <div className="hps-sep" />
          <div className="hps-item">
            <span className="hps-num">37+</span>
            <span className="hps-label">
              {t('hero.statCertified', 'Certified zones')}
            </span>
          </div>
          <span className="hero-context-date">{t('hero.contextDate')}</span>
        </div>

        <div className="hero-index-v2">
          <IndexTeaser />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
