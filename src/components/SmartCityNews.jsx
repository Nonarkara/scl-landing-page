import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  newsLabels,
  latestSmartCityUpdates,
  pickNewsText,
  sclDispatch,
  siteVisits,
} from '../data/smartCityNews';
import './SmartCityNews.css';

function getLanguageKey(language = 'en') {
  return language.toLowerCase().split('-')[0];
}

export default function SmartCityNews() {
  const { i18n } = useTranslation();
  const lang = getLanguageKey(i18n.resolvedLanguage || i18n.language);
  const pick = (obj) => pickNewsText(obj, lang);

  return (
    <section className="scl-news section" id="news" aria-labelledby="scl-news-title">
      <div className="container">
        <header className="scl-news-header">
          <span className="section-kicker">{pick(newsLabels.kicker)}</span>
          <h2 id="scl-news-title" className="scl-news-title">{pick(newsLabels.title)}</h2>
          <p className="scl-news-desc">{pick(newsLabels.description)}</p>
        </header>

        <article className="scl-news-lead">
          <figure className="scl-news-lead-media">
            <img src={sclDispatch.photo} alt={pick(sclDispatch.photoAlt)} loading="lazy" />
          </figure>

          <div className="scl-news-lead-body">
            <div className="scl-news-meta">
              <span className="scl-news-date">{pick(newsLabels.updatedLabel)}</span>
              <span className="scl-news-signal">{pick(sclDispatch.signal)}</span>
            </div>
            <h3 className="scl-news-headline">{pick(sclDispatch.headline)}</h3>
            <p className="scl-news-venue">{pick(sclDispatch.venue)}</p>
            <p className="scl-news-text">{pick(sclDispatch.body)}</p>
            <a
              className="scl-news-source"
              href={sclDispatch.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pick(newsLabels.sourceLabel)}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </article>

        <div className="scl-news-visits">
          <div className="scl-news-visits-head">
            <h3 className="scl-news-visits-title">{pick(newsLabels.siteVisitsTitle)}</h3>
            <p className="scl-news-visits-desc">{pick(newsLabels.siteVisitsDesc)}</p>
          </div>

          <ul className="scl-news-visits-grid">
            {siteVisits.map((visit) => (
              <li key={visit.id} className="scl-news-visit">
                <figure className="scl-news-visit-media">
                  <img src={visit.photo} alt={pick(visit.org)} loading="lazy" />
                </figure>
                <div className="scl-news-visit-body">
                  <h4 className="scl-news-visit-org">{pick(visit.org)}</h4>
                  <p className="scl-news-visit-summary">{pick(visit.summary)}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="scl-news-also">
            <span className="scl-news-also-label">{pick(newsLabels.alsoLabel)}</span>
            {pick(newsLabels.alsoVisited)}
          </p>
        </div>

        <div className="scl-news-external">
          <div className="scl-news-external-head">
            <h3 className="scl-news-external-title">{pick(newsLabels.externalTitle)}</h3>
            <p className="scl-news-external-desc">{pick(newsLabels.externalDesc)}</p>
          </div>

          <ul className="scl-news-external-grid">
            {latestSmartCityUpdates.map((item) => (
              <li key={item.id} className="scl-news-external-card">
                <div className="scl-news-external-meta">
                  <span>{item.source}</span>
                  <span>{pick(item.date)}</span>
                </div>
                <h4>{pick(item.headline)}</h4>
                <p>{pick(item.summary)}</p>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scl-news-external-link"
                >
                  {pick(newsLabels.externalSourceLabel)}
                  <ArrowUpRight size={15} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
