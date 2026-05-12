import { useDeferredValue, useMemo, useRef, useState } from 'react';
import {
  Briefcase,
  Building2,
  ChevronDown,
  ChevronUp,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Landmark,
  Search,
  Users,
  X,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import alumniData from '../data/alumni.json';
import { alumniBatches, alumniHeroBanner, alumniNetworkPhotos, networkVisitSites } from '../data/program';
import {
  buildAlumniEntries,
  computeDemographics,
  groupEntriesByBatch,
  normalizeSearchText,
  SECTOR_KEYS,
} from '../utils/alumni';

import ThailandMap from './ThailandMap';
import CohortInsights from './CohortInsights';
import './Alumni.css';

const SECTOR_ICONS = {
  all: <Users size={15} />,
  public: <Landmark size={15} />,
  private: <Briefcase size={15} />,
  academic: <GraduationCap size={15} />,
  stateEnterprise: <Building2 size={15} />,
  other: <FileText size={15} />,
};

const Alumni = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedBatch, setExpandedBatch] = useState(alumniBatches[0]?.id ?? null);
  const [activeSector, setActiveSector] = useState('all');
  const [sortOrder, setSortOrder] = useState('relevance');
  const [filterBatch, setFilterBatch] = useState('all');
  const deferredSearchTerm = useDeferredValue(searchTerm);
  const searchInputRef = useRef(null);
  const sectionRef = useRef(null);

  const allEntries = useMemo(() => buildAlumniEntries(alumniData), []);
  const groupedEntries = useMemo(() => groupEntriesByBatch(allEntries), [allEntries]);
  const demographics = useMemo(() => computeDemographics(allEntries), [allEntries]);
  const searchKey = normalizeSearchText(deferredSearchTerm);

  const searchResults = useMemo(() => {
    let results = [...allEntries];
    
    // Apply search filter
    if (searchKey) {
      results = results.filter((entry) => entry.searchIndex.includes(searchKey));
    }
    
    // Apply sector filter
    if (activeSector !== 'all') {
      results = results.filter((entry) => entry.sector === activeSector);
    }
    
    // Apply batch filter
    if (filterBatch !== 'all') {
      results = results.filter((entry) => entry.batch.toString() === filterBatch);
    }
    
    // Apply sorting
    if (sortOrder === 'asc') {
      results.sort((a, b) => a.displayName.localeCompare(b.displayName, 'th'));
    } else if (sortOrder === 'desc') {
      results.sort((a, b) => b.displayName.localeCompare(a.displayName, 'th'));
    }
    
    return searchKey || filterBatch !== 'all' || sortOrder !== 'relevance' ? results : [];
  }, [allEntries, searchKey, activeSector, filterBatch, sortOrder]);

  // Filter batch entries by sector
  const filteredGroupedEntries = useMemo(() => {
    if (activeSector === 'all') return groupedEntries;
    const filtered = {};
    for (const [batch, entries] of Object.entries(groupedEntries)) {
      const sectorEntries = entries.filter((e) => e.sector === activeSector);
      if (sectorEntries.length > 0) filtered[batch] = sectorEntries;
    }
    return filtered;
  }, [groupedEntries, activeSector]);

  const totalRecords = allEntries.length;

  const toggleBatch = (batchId) => {
    setExpandedBatch((currentBatch) => (currentBatch === batchId ? null : batchId));
  };

  const handleSearchForBatch = (batchId) => {
    setSearchTerm(`SCL ${batchId}`);
    searchInputRef.current?.focus();
    searchInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  if (!allEntries || allEntries.length === 0) {
    return (
      <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>Loading Alumni Data...</h2>
        <p>If this takes too long, please try refreshing the page.</p>
      </div>
    );
  }

  return (
    <section id="alumni" className="section alumni-section" ref={sectionRef}>
      <div className="container">
        <div className="alumni-header">
          <span className="section-kicker">{t('alumni.badge')}</span>
          <h2 className="alumni-title">{t('alumni.title')}</h2>
          <p className="alumni-subtitle">
            {t('alumni.subtitle', {
              count: totalRecords,
              cohorts: alumniBatches.length,
            })}
          </p>
        </div>

        <figure className="alumni-hero-banner">
          <img
            src={encodeURI(alumniHeroBanner)}
            alt={t('alumni.heroBannerAlt')}
            loading="lazy"
          />
        </figure>

        <div className="alumni-network">
          <div className="alumni-network-visuals">
            <figure className="alumni-network-lead">
              <img
                src={encodeURI(alumniNetworkPhotos[0])}
                alt={t('alumni.network.imageAlt', { number: 1 })}
                loading="lazy"
              />
            </figure>

            <div className="alumni-network-strip">
              {alumniNetworkPhotos.slice(1).map((photo, index) => (
                <figure key={photo} className="alumni-network-strip-photo">
                  <img
                    src={encodeURI(photo)}
                    alt={t('alumni.network.imageAlt', { number: index + 2 })}
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </div>

          <div className="alumni-network-copy">
            <span className="section-kicker">{t('alumni.network.eyebrow')}</span>
            <h3>{t('alumni.network.title')}</h3>
            <p>{t('alumni.network.description')}</p>
            <p className="alumni-network-caption">{t('alumni.network.caption')}</p>

            <div className="alumni-network-perks">
              {['visits', 'access', 'peers'].map((perk) => (
                <article key={perk} className="alumni-network-perk">
                  <h4>{t(`alumni.network.perks.${perk}.title`)}</h4>
                  <p>{t(`alumni.network.perks.${perk}.description`)}</p>
                </article>
              ))}
            </div>

            <p className="alumni-network-sites-line">
              <strong>{t('alumni.network.sitesLabel')}</strong> {networkVisitSites.join(' · ')}
            </p>
            </div>
        </div>

        <div className="alumni-tools">
          <div className="demographics-panel">
            <div className="demo-stats-row">
              <div className="demo-stat">
                <strong>{totalRecords}</strong>
                <span>{t('alumni.totalLabel')}</span>
              </div>
              <div className="demo-stat">
                <strong>{alumniBatches.length}</strong>
                <span>{t('alumni.batchesLabel')}</span>
              </div>
              <div className="demo-stat">
                <strong>{alumniBatches.length}</strong>
                <span>{t('alumni.officialListsLabel')}</span>
              </div>
            </div>
          </div>

          <div className="sector-tabs">
            {SECTOR_KEYS.map((key) => {
              const count = key === 'all' ? totalRecords : (demographics.sectors[key] || 0);
              if (count === 0 && key !== 'all') return null;
              return (
                <button
                  key={key}
                  type="button"
                  className={`sector-tab ${activeSector === key ? 'sector-tab-active' : ''}`}
                  onClick={() => setActiveSector(key)}
                >
                  <span>{t(`alumni.sector.${key}`)}</span>
                  <span className="sector-tab-count">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="search-panel">
            <div className="search-wrapper">
              <Search className="search-icon" size={20} />
              <input
                ref={searchInputRef}
                type="search"
                className="alumni-search-input"
                placeholder={t('alumni.searchPlaceholder')}
                aria-label={t('alumni.searchPlaceholder')}
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              {searchTerm && (
                <button
                  type="button"
                  className="clear-search"
                  onClick={() => setSearchTerm('')}
                  aria-label={t('alumni.clearSearch')}
                >
                  <X size={18} />
                </button>
              )}
            </div>
            
            <div className="search-suggestions">
              <span className="suggestion-label">{t('alumni.suggestions')}:</span>
              {['เทศบาล', 'อบจ', 'นายก', 'ผู้ว่า', 'ผู้อำนวยการ', 'บริษัท'].map(tag => (
                <button 
                  key={tag} 
                  className="suggestion-tag"
                  onClick={() => setSearchTerm(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>

            <p className="search-hint">{t('alumni.searchHint')}</p>
            <p className="search-hint position-disclaimer">{t('alumni.positionDisclaimer')}</p>

            <div className="filter-bar">
              <select 
                className="filter-select"
                value={filterBatch}
                onChange={(e) => setFilterBatch(e.target.value)}
                aria-label={t('alumni.filterByBatch')}
              >
                <option value="all">{t('alumni.allBatches', 'All Batches')}</option>
                {alumniBatches.map(b => (
                  <option key={b.id} value={b.id}>SCL {b.id}</option>
                ))}
              </select>

              <select 
                className="filter-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                aria-label={t('alumni.sortBy')}
              >
                <option value="relevance">{t('alumni.sortRelevance', 'Relevance')}</option>
                <option value="asc">{t('alumni.sortAsc', 'A-Z (ก-ฮ)')}</option>
                <option value="desc">{t('alumni.sortDesc', 'Z-A (ฮ-ก)')}</option>
              </select>
            </div>
            </div>
        </div>
        </div>
        
        {/* Map and Insights temporarily disabled for debugging blank page */}
        {/* 
        {demographics.provinces && Object.keys(demographics.provinces).length > 0 && (
          <div className="map-container-wrapper">
            <ThailandMap demographics={demographics} />
            <p className="map-caption text-center mt-4 text-sm text-gray-500 italic">
              {t('alumni.mapCaption', 'See where our alums are from?')}
            </p>
          </div>
        )}
        */}

        {(searchKey || filterBatch !== 'all' || sortOrder !== 'relevance') ? (
          <div className="search-results-container is-visible">
            <div className="results-header">
              <h3 className="results-title">
                {t('alumni.found')} <strong>{searchResults.length}</strong> {t('alumni.people')}
                {activeSector !== 'all' && (
                  <span className="results-sector-badge">
                    {t(`alumni.sector.${activeSector}`)}
                  </span>
                )}
              </h3>
            </div>

            {searchResults.length > 0 ? (
              <div className="alumni-list">
                {searchResults.map((entry) => {
                  const batch = alumniBatches.find((item) => item.id === entry.batch);

                  return (
                    <article
                      key={entry.id}
                      className="alumni-list-item is-visible"
                    >
                      <div className="alumni-badges-row">
                        <span className={`alumni-badge batch-${entry.batch}-badge`}>SCL {entry.batch}</span>
                        <span className="alumni-sector-tag">{t(`alumni.sector.${entry.sector}`)}</span>
                      </div>
                      <div className="alumni-details">
                        <h4 className="alumni-name">{entry.displayName}</h4>
                        <p className="alumni-org">{entry.detail}</p>
                        {batch && (
                          <a
                            href={batch.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-link alumni-source"
                          >
                            {t('alumni.officialList')}
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="no-results text-center">
                <Search size={36} className="no-results-icon" />
                <p>{t('alumni.noResults')}</p>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="results-header">
              <h3 className="results-title">
                {t('alumni.featuredCohorts')}
                {activeSector !== 'all' && (
                  <span className="results-sector-badge">
                    {t(`alumni.sector.${activeSector}`)}
                  </span>
                )}
              </h3>
            </div>
            <div className="alumni-grid">
              {alumniBatches.map((batch) => {
                const isExpanded = expandedBatch === batch.id;
                const batchEntries = filteredGroupedEntries[batch.id] || [];
                const allBatchEntries = groupedEntries[batch.id] || [];

                if (activeSector !== 'all' && batchEntries.length === 0) return null;

                return (
                  <div
                    key={batch.id}
                    data-batch={batch.id}
                    className="alumni-batch-wrapper"
                  >
                    <div className={`alumni-card ${isExpanded ? 'expanded-card' : ''}`}>
                      <button
                        type="button"
                        className="alumni-card-toggle"
                        onClick={() => toggleBatch(batch.id)}
                        aria-expanded={isExpanded}
                        aria-controls={`batch-panel-${batch.id}`}
                      >
                        <div className="alumni-card-content">
                          <div className="batch-info">
                            <span className="batch-number">
                              {t('alumni.batch')} {batch.id}
                            </span>
                            <span className="batch-year">{batch.year}</span>
                            {batch.id === alumniBatches[0].id && (
                              <span className={`batch-pill batch-${batch.id}-badge`}>{t('alumni.latest')}</span>
                            )}
                          </div>
                          <h3 className="alumni-action">
                            {batchEntries.length}
                            {activeSector !== 'all' && ` / ${allBatchEntries.length}`}
                            {' '}{t('alumni.people')}
                          </h3>
                        </div>
                        <span className="batch-toggle-icon">
                          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </span>
                      </button>

                      <a
                        href={batch.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="alumni-icon"
                        title={t('alumni.viewList')}
                        aria-label={t('alumni.viewList')}
                      >
                        {batch.kind === 'pdf' ? <Download size={20} /> : <ExternalLink size={20} />}
                      </a>
                    </div>

                    {isExpanded && (
                      <div
                        id={`batch-panel-${batch.id}`}
                        className="batch-expanded-content"
                      >
                        <div className="batch-preview-scroll">
                          <div className="batch-preview-grid">
                            {batchEntries.map((entry) => (
                              <article key={entry.id} className="batch-preview-card">
                                <div className="preview-card-header">
                                  <h4>{entry.displayName}</h4>
                                  <span className="preview-sector-dot" title={t(`alumni.sector.${entry.sector}`)}>
                                    {SECTOR_ICONS[entry.sector]}
                                  </span>
                                </div>
                                <p>{entry.detail}</p>
                              </article>
                            ))}
                          </div>
                        </div>
                        <button
                          type="button"
                          className="batch-search-btn"
                          onClick={() => handleSearchForBatch(batch.id)}
                        >
                          <Search size={14} />
                          {t('alumni.searchThisCohort', { id: batch.id })}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
    </section>
  );
};

export default Alumni;
