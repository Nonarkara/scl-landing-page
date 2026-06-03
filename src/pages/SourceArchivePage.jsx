import { useMemo, useState } from 'react';
import { ArrowUpRight, Database, Search, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageReturn from '../components/PageReturn';
import {
  flattenedSourceArchive,
  sclSourceArchive,
  sourceArchiveLabels,
  sourceTypes,
} from '../data/sclSourceArchive';
import './SourceArchivePage.css';

function languageKey(language = 'en') {
  return language.toLowerCase().split('-')[0];
}

function pick(copy, language = 'en') {
  if (!copy) return '';
  const key = languageKey(language);
  return copy[key] || copy.en || '';
}

export default function SourceArchivePage() {
  const { i18n } = useTranslation();
  const lang = languageKey(i18n.resolvedLanguage || i18n.language);
  const [activeBatch, setActiveBatch] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const officialCount = flattenedSourceArchive.filter((item) => item.type === 'official').length;

  const filteredArchive = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return sclSourceArchive
      .map((cohort) => {
        const items = cohort.items.filter((item) => {
          const matchesBatch = activeBatch === 'all' || String(cohort.batch) === activeBatch;
          const haystack = [
            `scl ${cohort.batch}`,
            `scl#${cohort.batch}`,
            cohort.year,
            item.type,
            item.date,
            item.source,
            item.title,
            item.summary,
            item.url,
          ].join(' ').toLowerCase();
          return matchesBatch && (!query || haystack.includes(query));
        });

        return { ...cohort, items };
      })
      .filter((cohort) => cohort.items.length > 0);
  }, [activeBatch, searchTerm]);

  return (
    <div className="source-archive-page">
      <section className="source-archive-hero">
        <div className="container">
          <PageReturn />

          <div className="source-archive-hero-grid">
            <div className="source-archive-copy">
              <span className="section-kicker">{pick(sourceArchiveLabels.eyebrow, lang)}</span>
              <h1>{pick(sourceArchiveLabels.title, lang)}</h1>
              <p>{pick(sourceArchiveLabels.description, lang)}</p>
            </div>

            <aside className="source-integrity-panel" aria-label={pick(sourceArchiveLabels.integrity, lang)}>
              <ShieldCheck size={22} />
              <p>{pick(sourceArchiveLabels.integrity, lang)}</p>
            </aside>
          </div>

          <div className="source-stats-row">
            <div className="source-stat">
              <strong>{flattenedSourceArchive.length}</strong>
              <span>{pick(sourceArchiveLabels.linksCount, lang)}</span>
            </div>
            <div className="source-stat">
              <strong>{officialCount}</strong>
              <span>{pick(sourceArchiveLabels.officialCount, lang)}</span>
            </div>
            <div className="source-stat">
              <strong>{sclSourceArchive.length}</strong>
              <span>{pick(sourceArchiveLabels.cohortsCount, lang)}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="source-archive-section">
        <div className="container">
          <div className="source-toolbar">
            <div className="source-search">
              <Search size={18} />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder={pick(sourceArchiveLabels.search, lang)}
                type="search"
              />
            </div>

            <div className="source-batch-tabs" aria-label={pick(sourceArchiveLabels.all, lang)}>
              <button
                type="button"
                className={activeBatch === 'all' ? 'is-active' : ''}
                onClick={() => setActiveBatch('all')}
              >
                {pick(sourceArchiveLabels.all, lang)}
              </button>
              {sclSourceArchive.map((cohort) => (
                <button
                  type="button"
                  key={cohort.batch}
                  className={activeBatch === String(cohort.batch) ? 'is-active' : ''}
                  onClick={() => setActiveBatch(String(cohort.batch))}
                >
                  SCL #{cohort.batch}
                </button>
              ))}
            </div>
          </div>

          <p className="source-record-note">{pick(sourceArchiveLabels.recordNote, lang)}</p>

          {filteredArchive.length > 0 ? (
            <div className="source-cohort-stack">
              {filteredArchive.map((cohort) => (
                <section className="source-cohort" key={cohort.batch}>
                  <div className="source-cohort-head">
                    <div>
                      <span>SCL #{cohort.batch}</span>
                      <h2>{cohort.year}</h2>
                    </div>
                    <div className="source-cohort-count">
                      <Database size={16} />
                      {cohort.items.length}
                    </div>
                  </div>

                  <div className="source-card-grid">
                    {cohort.items.map((item) => (
                      <article className="source-card" key={item.url}>
                        <div className="source-card-meta">
                          <span className={`source-type source-type-${item.type}`}>
                            {pick(sourceTypes[item.type], lang)}
                          </span>
                          <span>{item.date}</span>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.summary}</p>
                        <div className="source-card-footer">
                          <span>{item.source}</span>
                          <a href={item.url} target="_blank" rel="noopener noreferrer">
                            {pick(sourceArchiveLabels.open, lang)}
                            <ArrowUpRight size={15} />
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="source-empty">
              {pick(sourceArchiveLabels.noResults, lang)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
