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
  Mail,
  Search,
  Send,
  Users,
  X,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import alumniData from '../data/alumni.json';
import { alumniBatches } from '../data/program';
import {
  buildAlumniEntries,
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

const UpdateModal = ({ entry, onClose, t }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newLocation, setNewLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`SCL Alumni Update: ${entry.displayName}`);
    const body = encodeURIComponent(
      `Name: ${entry.displayName}\nCurrent Record: ${entry.detail}\n\nUpdated Title/Position: ${newTitle || '(no change)'}\nUpdated Location/Organization: ${newLocation || '(no change)'}\n\nSubmitted via SCL Alumni Directory`
    );
    window.location.href = `mailto:scp@depa.or.th?subject=${subject}&body=${body}`;
    onClose();
  };

  if (!entry) return null;

  return (
    <div className="update-modal-backdrop" onClick={onClose}>
      <div className="update-modal" onClick={(e) => e.stopPropagation()}>
        <div className="update-modal-header">
          <h3>{t('alumni.updateTitle', 'Update Your Information')}</h3>
          <button type="button" className="update-modal-close" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>
        <div className="update-modal-body">
          <p className="update-modal-intro">
            {t('alumni.updateIntro', 'If your position or location has changed, please let us know.')}
          </p>
          <div className="update-modal-current">
            <strong>{entry.displayName}</strong>
            <span>{entry.detail}</span>
          </div>
          <form onSubmit={handleSubmit} className="update-modal-form">
            <label>
              <span>{t('alumni.newTitle', 'New Title / Position')}</span>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder={t('alumni.titlePlaceholder', 'e.g. Mayor of ...')}
              />
            </label>
            <label>
              <span>{t('alumni.newLocation', 'New Organization / Location')}</span>
              <input
                type="text"
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
                placeholder={t('alumni.locationPlaceholder', 'e.g. Bangkok Metropolitan ...')}
              />
            </label>
            <button type="submit" className="btn btn-primary update-modal-submit">
              <Send size={16} />
              {t('alumni.sendUpdate', 'Send Update to scp@depa.or.th')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Alumni = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSector, setActiveSector] = useState('all');
  const [sortOrder, setSortOrder] = useState('relevance');
  const [updateEntry, setUpdateEntry] = useState(null);
  const deferredSearchTerm = useDeferredValue(searchTerm);
  const searchInputRef = useRef(null);
  const sectionRef = useRef(null);

  const allEntries = useMemo(() => buildAlumniEntries(alumniData), []);
  const groupedEntries = useMemo(() => groupEntriesByBatch(allEntries), [allEntries]);
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
    
    // Apply sorting
    if (sortOrder === 'asc') {
      results.sort((a, b) => a.displayName.localeCompare(b.displayName, 'th'));
    } else if (sortOrder === 'desc') {
      results.sort((a, b) => b.displayName.localeCompare(a.displayName, 'th'));
    }
    
    return searchKey || sortOrder !== 'relevance' ? results : [];
  }, [allEntries, searchKey, activeSector, sortOrder]);

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
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
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

      {updateEntry && (
        <UpdateModal
          entry={updateEntry}
          onClose={() => setUpdateEntry(null)}
          t={t}
        />
      )}
    </section>
  );
};

export default Alumni;
