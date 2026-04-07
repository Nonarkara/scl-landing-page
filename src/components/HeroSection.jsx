import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  formatProgramCurrency,
  formatProgramDate,
  getApplicationUrl,
  getProgramPhase,
  heroPhoto,
  programDetails,
} from '../data/program';
import IndexTeaser from './IndexTeaser';
import './HeroSection.css';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;
  const officialUrl = getApplicationUrl(currentLanguage);
  const programPhase = getProgramPhase();
  const applicationDeadline = formatProgramDate(programDetails.applicationDeadline, currentLanguage);
  const feeLabel = formatProgramCurrency(programDetails.feeTHB, currentLanguage);

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
      label: t('hero.facts.modelLabel'),
      value: t('hero.facts.modelValue', {
        speakers: programDetails.speakerCount,
      }),
    },
    {
      label: t('hero.facts.archiveLabel'),
      value: t('hero.facts.archiveValue', {
        alumni: programDetails.alumniCount,
        cohorts: programDetails.cohortCount,
      }),
    },
  ];

  const heroBrief = [
    {
      label: t('hero.facts.deadlineLabel'),
      value: t(`hero.status.${programPhase}`, { deadline: applicationDeadline }),
    },
    {
      label: t('journey.schedule.datesLabel'),
      value: t('journey.schedule.datesValue'),
    },
    {
      label: t('journey.schedule.venueLabel'),
      value: t('journey.schedule.venueValue'),
    },
    {
      label: t('journey.schedule.feeLabel'),
      value: feeLabel,
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

          <div className="hero-rail animate-fade-in is-visible" style={{ animationDelay: '0.08s' }}>
            <figure className="hero-media">
              <img
                src={encodeURI(heroPhoto)}
                alt={t('hero.imageAlt')}
                fetchPriority="high"
                decoding="async"
              />
              <figcaption>{t('hero.imageCaption')}</figcaption>
            </figure>

            <aside className="hero-brief" aria-label={t('journey.schedule.title')}>
              <div className="hero-brief-head">
                <span className="hero-brief-kicker">{t('journey.schedule.title')}</span>
                <p>{t('journey.schedule.description')}</p>
              </div>

              <div className="hero-brief-list">
                {heroBrief.map((item) => (
                  <div key={item.label} className="hero-brief-item">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>

        <div className="hero-summary animate-fade-in is-visible" style={{ animationDelay: '0.12s' }}>
          <div className="hero-facts">
            {heroFacts.map((fact) => (
              <div key={fact.label} className="hero-fact">
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <IndexTeaser />
      </div>
    </section>
  );
};

export default HeroSection;
