import {
  ArrowRight,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  formatProgramDate,
  getApplicationUrl,
  getProgramPhase,
  heroPhoto,
  programDetails,
} from '../data/program';
import Countdown from './Countdown';
import './HeroSection.css';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;
  const officialUrl = getApplicationUrl(currentLanguage);
  const programPhase = getProgramPhase();
  const applicationDeadline = formatProgramDate(programDetails.applicationDeadline, currentLanguage);

  const heroFacts = [
    {
      label: t('hero.facts.durationLabel'),
      value: t('hero.facts.durationValue', {
        days: programDetails.programDays,
        hours: programDetails.learningHours,
      }),
    },
    {
      label: t('hero.facts.audienceLabel'),
      value: t('hero.facts.audienceValue'),
    },
    {
      label: t('hero.facts.archiveLabel'),
      value: t('hero.facts.archiveValue', {
        alumni: programDetails.alumniCount,
        cohorts: programDetails.cohortCount,
      }),
    },
    {
      label: t('hero.facts.deadlineLabel'),
      value: t(`hero.status.${programPhase}`, { deadline: applicationDeadline }),
    },
  ];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-shell">
          <div className="hero-copy animate-fade-in is-visible">
            <div className="hero-eyebrow">
              {t('hero.eyebrow', { cohort: programDetails.cohortNumber })}
            </div>
            <h1 className="hero-title">{t('hero.title')}</h1>
            <p className="hero-value-statement">{t('hero.valueStatement')}</p>
            <p className="hero-subtitle">{t('hero.subtitle')}</p>

            <div className="hero-actions">
              <a
                href={officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {t('hero.ctaPrimary')}
              </a>
              <a href="#about" className="inline-link hero-inline-link">
                {t('hero.ctaSecondary')} <ArrowRight size={17} />
              </a>
            </div>

            <div className="hero-status">
              {t(`hero.status.${programPhase}`, { deadline: applicationDeadline })}
            </div>
          </div>

          <figure className="hero-media animate-fade-in is-visible" style={{ animationDelay: '0.08s' }}>
            <img
              src={encodeURI(heroPhoto)}
              alt={t('hero.imageAlt')}
            />
            <figcaption>{t('hero.imageCaption')}</figcaption>
          </figure>
        </div>

        <div className="hero-summary animate-fade-in is-visible" style={{ animationDelay: '0.12s' }}>
          <Countdown />
          <div className="hero-facts">
            {heroFacts.map((fact) => (
              <div key={fact.label} className="hero-fact">
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
