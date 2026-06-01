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
import { useFadeIn } from '../hooks/useFadeIn';
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
        <h2>Loading Alumni Network...</h2>
        <p>Please wait while we prepare the community directory.</p>
      </div>
    );
  }

  return (
    <section id="alumni" className="section alumni-section" ref={sectionRef}>
      <div className="container">
        <div className="alumni-header">
          <span className="section-kicker">NETWORK</span>
          <h2 className="alumni-title">Alumni Directory</h2>
          <p className="alumni-subtitle">
            Connecting {totalRecords} leaders from {alumniBatches.length} cohorts.
          </p>
        </div>

        <div className="alumni-tools">
          <div className="search-panel">
            <div className="search-wrapper">
              <Search className="search-icon" size={20} />
              <input
                ref={searchInputRef}
                type="search"
                className="alumni-search-input"
                placeholder="Search by name, organization, or province..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
            
            <div className="filter-bar">
              <select 
                className="filter-select"
                value={activeSector}
                onChange={(e) => setActiveSector(e.target.value)}
              >
                {SECTOR_KEYS.map(key => (
                  <option key={key} value={key}>{t(`alumni.sector.${key}`, key)}</option>
                ))}
              </select>

              <select 
                className="filter-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="relevance">Relevance</option>
                <option value="asc">Name (A-Z)</option>
                <option value="desc">Name (Z-A)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="results-info">
          Found <strong>{searchResults.length}</strong> members
        </div>

        <div className="alumni-grid">
          {Object.entries(filteredGroupedEntries).sort((a, b) => Number(b[0]) - Number(a[0])).map(([batch, entries]) => (
            <div key={batch} className="batch-section">
              <h3 className="batch-title">Batch #{batch}</h3>
              <div className="alumni-card-grid">
                {entries.map(person => (
                  <div key={person.id} className="alumni-card glass-panel">
                    <h4 className="alumni-name">{person.displayName}</h4>
                    <p className="alumni-org">{person.detail}</p>
                    {person.province && <span className="alumni-province">📍 {person.province}</span>}
                    <span className={`alumni-sector-tag ${person.sector}`}>{t(`alumni.sector.${person.sector}`, person.sector)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Alumni;
