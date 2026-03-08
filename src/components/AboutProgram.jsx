import { useTranslation } from 'react-i18next';
import { programDetails, programLearningSites } from '../data/program';
import { useFadeIn } from '../hooks/useFadeIn';
import './AboutProgram.css';

const AboutProgram = () => {
  const { t } = useTranslation();
  const sectionRef = useFadeIn();

  const pillars = ['environment', 'economy', 'mobility', 'energy', 'people', 'living', 'governance'];
  const outcomes = ['strategy', 'delivery', 'network'];
  const participantTypes = ['public', 'local', 'utilities', 'academic', 'private'];

  const highlights = [
    { value: '42', label: t('about.highlights.hours') },
    { value: '7', label: t('about.highlights.days') },
    { value: '30+', label: t('about.highlights.experts') },
    { value: `${programDetails.alumniCount}`, label: t('about.highlights.alumni') },
  ];

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

            <div className="highlights animate-fade-in" style={{ animationDelay: '0.18s' }}>
              {highlights.map((highlight) => (
                <div key={highlight.label} className="highlight-item">
                  <span className="hl-num">{highlight.value}</span>
                  <span className="hl-text">{highlight.label}</span>
                </div>
              ))}
            </div>
          </div>

          <figure className="about-image animate-fade-in" style={{ animationDelay: '0.16s' }}>
            <img
              src={encodeURI('/Photos/2023-05-16 14.07.38.jpg')}
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
            <div className="about-list">
              {programLearningSites.map((site, index) => (
                <div key={site} className="about-site-row">
                  {t(`about.learningSites.site${index + 1}`)}
                </div>
              ))}
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
