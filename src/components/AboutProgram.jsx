import { useTranslation } from 'react-i18next';
import { aboutPhoto, programDetails, programLearningSites } from '../data/program';
import { useFadeIn } from '../hooks/useFadeIn';
import './AboutProgram.css';

const AboutProgram = () => {
  const { t } = useTranslation();
  const sectionRef = useFadeIn();

  const pillars = ['environment', 'economy', 'mobility', 'energy', 'people', 'living', 'governance'];
  const outcomes = ['strategy', 'delivery', 'network'];
  const participantTypes = ['public', 'local', 'utilities', 'academic', 'private'];

  const highlightFigures = {
    hours: '42',
    days: '7',
    experts: '30+',
    alumni: `${programDetails.alumniCount}`,
  };

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="container">
        <div className="about-top-grid">
          <div className="about-text">
            <span className="section-kicker animate-fade-in">{t('about.eyebrow')}</span>
            <h2 className="text-gradient shrink-title animate-fade-in" style={{ animationDelay: '0.05s' }}>
              {t('about.title')}
            </h2>
            <p className="about-desc animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {t('about.description')}
            </p>

            <div className="about-audience animate-fade-in" style={{ animationDelay: '0.14s' }}>
              <span className="about-audience-label">{t('about.audienceTitle')}</span>
              <div className="about-audience-list">
                {participantTypes.map((participant) => (
                  <span key={participant} className="about-audience-item">
                    {t(`about.audience.${participant}`)}
                  </span>
                ))}
              </div>
            </div>

            <p className="highlights-inline animate-fade-in" style={{ animationDelay: '0.18s' }}>
              <span className="hl-num">{highlightFigures.hours}</span> {t('about.highlights.hours')}
              <span className="hl-sep" aria-hidden="true">·</span>
              <span className="hl-num">{highlightFigures.days}</span> {t('about.highlights.days')}
              <span className="hl-sep" aria-hidden="true">·</span>
              <span className="hl-num">{highlightFigures.experts}</span> {t('about.highlights.experts')}
              <span className="hl-sep" aria-hidden="true">·</span>
              <span className="hl-num">{highlightFigures.alumni}</span> {t('about.highlights.alumni')}
            </p>
          </div>

          <figure className="about-image animate-fade-in" style={{ animationDelay: '0.16s' }}>
            <img
              src={encodeURI(aboutPhoto)}
              alt={t('about.imageAlt')}
              loading="lazy"
            />
            <figcaption>{t('about.imageCaption')}</figcaption>
          </figure>
        </div>

        <div className="about-bottom-grid">
          <section className="about-column animate-fade-in" style={{ animationDelay: '0.22s' }}>
            <span className="about-column-label">{t('about.outcomesTitle')}</span>
            <div className="about-list">
              {outcomes.map((outcome) => (
                <article key={outcome} className="about-list-item">
                  <h3>{t(`about.outcomes.${outcome}.title`)}</h3>
                  <p>{t(`about.outcomes.${outcome}.description`)}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="about-column animate-fade-in" style={{ animationDelay: '0.28s' }}>
            <span className="about-column-label">{t('about.learningSitesTitle')}</span>
            <p className="about-column-intro">{t('about.learningSitesDescription')}</p>
            <div className="about-list learning-sites-grid">
              {programLearningSites.map((site, index) => {
                const siteKey = `site${index + 1}`;
                return (
                  <div key={site} className="learning-site-card">
                    <div className="learning-site-header">
                      <span className="learning-site-number">{String(index + 1).padStart(2, '0')}</span>
                      <span className="learning-site-name">{t(`about.learningSites.${siteKey}`)}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="about-column about-pillars-column animate-fade-in" style={{ animationDelay: '0.34s' }}>
            <span className="about-column-label">{t('about.pillarsTitle')}</span>
            <div className="about-pillar-list">
              {pillars.map((pillar) => {
                const topics = t(`about.pillarTopics.${pillar}`, { returnObjects: true });
                const stat = t(`about.pillarStats.${pillar}`);
                return (
                  <div key={pillar} className="about-pillar-item about-pillar-rich">
                    <span className="pillar-name">{t(`about.pillars.${pillar}`)}</span>
                    {Array.isArray(topics) && (
                      <ul className="pillar-topics">
                        {topics.map((topic) => (
                          <li key={topic}>{topic}</li>
                        ))}
                      </ul>
                    )}
                    {stat && <span className="pillar-stat">{stat}</span>}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutProgram;
