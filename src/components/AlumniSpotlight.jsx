import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  alumniSpotlight,
  pickSpotlightText,
  spotlightLabels,
} from '../data/alumniSpotlight';
import './AlumniSpotlight.css';

function getLanguageKey(language = 'en') {
  return language.toLowerCase().split('-')[0];
}

const AlumniSpotlight = () => {
  const { i18n } = useTranslation();
  const lang = getLanguageKey(i18n.resolvedLanguage || i18n.language);
  const pick = (obj) => pickSpotlightText(obj, lang);

  return (
    <section className="alumni-spotlight" aria-labelledby="alumni-spotlight-title">
      <div className="alumni-spotlight-head">
        <span className="section-kicker">{pick(spotlightLabels.kicker)}</span>
        <h3 id="alumni-spotlight-title" className="alumni-spotlight-title">
          {pick(spotlightLabels.title)}
        </h3>
        <p className="alumni-spotlight-desc">{pick(spotlightLabels.description)}</p>
      </div>

      <ul className="alumni-spotlight-grid">
        {alumniSpotlight.map((person) => (
          <li
            key={person.id}
            className={`alumni-spotlight-card ${person.sector === 'private' ? 'has-private' : ''}`}
          >
            <div className="alumni-spotlight-tags">
              <span className="alumni-spotlight-batch">SCL #{person.batch}</span>
              <span className={`alumni-spotlight-sector sector-${person.sector}`}>
                {person.sector === 'public'
                  ? pick(spotlightLabels.publicTag)
                  : pick(spotlightLabels.privateTag)}
              </span>
            </div>

            <h4 className="alumni-spotlight-name">{person.name}</h4>
            <p className="alumni-spotlight-role">{pick(person.role)}</p>
            <p className="alumni-spotlight-news">{pick(person.news)}</p>

            <a
              className="alumni-spotlight-link"
              href={person.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="alumni-spotlight-source">{person.source}</span>
              <span className="alumni-spotlight-read">
                {pick(spotlightLabels.readLabel)}
                <ArrowUpRight size={14} />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="alumni-spotlight-note">{pick(spotlightLabels.note)}</p>
    </section>
  );
};

export default AlumniSpotlight;
