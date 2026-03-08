import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  fieldVisitPhotos,
  formatProgramCurrency,
  formatProgramDate,
  getApplicationUrl,
  getProgramPhase,
  networkVisitSites,
  programDetails,
} from '../data/program';
import { useFadeIn } from '../hooks/useFadeIn';
import './ProgramJourney.css';

const ProgramJourney = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useFadeIn();
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;
  const officialUrl = getApplicationUrl(currentLanguage);
  const programPhase = getProgramPhase();
  const deadline = formatProgramDate(programDetails.applicationDeadline, currentLanguage);
  const feeLabel = formatProgramCurrency(programDetails.feeTHB, currentLanguage);

  const learningModes = ['classroom', 'field', 'network'];
  const applicationSteps = ['review', 'submit', 'attend'];

  const scheduleFacts = [
    {
      label: t('journey.schedule.deadlineLabel'),
      value: deadline,
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
    <section id="journey" className="section journey-section" ref={sectionRef}>
      <div className="container">
        <div className="journey-header">
          <span className="section-kicker animate-fade-in">{t('journey.eyebrow')}</span>
          <h2 className="journey-title animate-fade-in" style={{ animationDelay: '0.05s' }}>
            {t('journey.title')}
          </h2>
          <p className="journey-subtitle animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {t('journey.subtitle')}
          </p>
        </div>

        <section className="journey-band animate-fade-in" style={{ animationDelay: '0.14s' }}>
          <div className="journey-band-head">
            <span className="journey-band-label">{t('journey.trackKicker')}</span>
            <h3>{t('journey.trackTitle')}</h3>
          </div>

          <div className="journey-learning-grid">
            {learningModes.map((mode, index) => (
              <article key={mode} className="journey-card">
                <span className="journey-item-count">0{index + 1}</span>
                <h4>{t(`journey.modes.${mode}.title`)}</h4>
                <p>{t(`journey.modes.${mode}.description`)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="journey-band animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="journey-band-head">
            <span className="journey-status-tag">{t(`journey.schedule.status.${programPhase}`)}</span>
            <h3>{t('journey.schedule.title')}</h3>
            <p>{t('journey.schedule.description')}</p>
          </div>

          <div className="journey-facts-grid">
            {scheduleFacts.map((fact) => (
              <div key={fact.label} className="journey-fact">
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="journey-band animate-fade-in" style={{ animationDelay: '0.26s' }}>
          <div className="journey-band-head">
            <h3>{t('journey.process.title')}</h3>
            <p>{t('journey.process.description')}</p>
          </div>

          <div className="journey-process-grid">
            {applicationSteps.map((step, index) => (
              <article key={step} className="journey-process-item">
                <span className="journey-item-count">0{index + 1}</span>
                <h4>{t(`journey.process.steps.${step}.title`)}</h4>
                <p>{t(`journey.process.steps.${step}.description`)}</p>
              </article>
            ))}
          </div>

          <div className="journey-process-footer">
            <a
              href={officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link journey-process-link"
            >
              {t('journey.process.cta')} <ArrowUpRight size={16} />
            </a>
            <p className="journey-source-note">{t('journey.sourceNote')}</p>
          </div>
        </section>

        <section className="journey-fieldwork animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="journey-fieldwork-visuals">
            {fieldVisitPhotos.map((photo, index) => (
              <figure key={photo} className={`journey-fieldwork-photo journey-fieldwork-photo-${index + 1}`}>
                <img
                  src={encodeURI(photo)}
                  alt={t('journey.fieldwork.imageAlt', { number: index + 1 })}
                  loading="lazy"
                />
              </figure>
            ))}
          </div>

          <div className="journey-fieldwork-copy">
            <span className="section-kicker">{t('journey.fieldwork.eyebrow')}</span>
            <h3>{t('journey.fieldwork.title')}</h3>
            <p>{t('journey.fieldwork.description')}</p>

            <div className="journey-fieldwork-points">
              {['cadence', 'access', 'context'].map((point) => (
                <article key={point} className="journey-fieldwork-point">
                  <h4>{t(`journey.fieldwork.points.${point}.title`)}</h4>
                  <p>{t(`journey.fieldwork.points.${point}.description`)}</p>
                </article>
              ))}
            </div>

            <p className="journey-fieldwork-note">
              <strong>{t('journey.fieldwork.sitesLabel')}</strong> {networkVisitSites.join(' · ')}
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ProgramJourney;
