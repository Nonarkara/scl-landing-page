import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Share2, Users, MapPin, Building2, TrendingUp } from 'lucide-react';
import './CohortInsights.css';
import { alumniBatches } from '../data/program';
import { SECTOR_KEYS } from '../utils/alumni';

const CohortInsights = ({ allEntries, demographics }) => {
  const { t } = useTranslation();

  const totalProvinces = 77;
  const representedProvinces = demographics.provinces ? Object.keys(demographics.provinces).length : 0;
  const coveragePercentage = Math.round((representedProvinces / totalProvinces) * 100);

  const topProvinces = useMemo(() => {
    if (!demographics.provinces) return [];
    return Object.entries(demographics.provinces)
      .filter(([name]) => name !== 'กรุงเทพมหานคร') // Exclude BKK for more interesting stats usually, or keep it. Let's keep it but it will be #1
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  }, [demographics.provinces]);

  const batchCounts = useMemo(() => {
    const counts = {};
    alumniBatches.forEach(b => { counts[b.id] = 0; });
    allEntries.forEach(entry => {
      if (counts[entry.batch] !== undefined) {
        counts[entry.batch]++;
      }
    });
    return counts;
  }, [allEntries]);

  const maxBatchCount = Math.max(...Object.values(batchCounts), 1);

  // Find most common sector
  const mostCommonSector = useMemo(() => {
    let max = 0;
    let sector = 'other';
    for (const [key, val] of Object.entries(demographics.sectors)) {
      if (key !== 'all' && val > max) {
        max = val;
        sector = key;
      }
    }
    return sector;
  }, [demographics.sectors]);

  const avgCohortSize = Math.round(allEntries.length / alumniBatches.length);

  const batchColors = {
    1: 'var(--batch-1-color)',
    2: 'var(--batch-2-color)',
    3: 'var(--batch-3-color)',
    4: 'var(--batch-4-color)',
    5: 'var(--batch-5-color)',
    6: 'var(--batch-6-color)'
  };

  return (
    <div className="cohort-insights-wrapper animate-fade-in">
      <div className="insights-header">
        <h3 className="insights-title">{t('alumni.insightsTitle', 'SCL Insights')}</h3>
        <button className="btn btn-ghost btn-sm">
          <Share2 size={16} className="mr-2" />
          {t('alumni.share', 'Share')}
        </button>
      </div>

      <div className="insights-grid-top">
        <div className="insight-card primary">
          <span className="insight-value">{allEntries.length}</span>
          <span className="insight-label">{t('alumni.totalLeaders', 'Total Leaders')}</span>
          <span className="insight-badge">Top 1%</span>
        </div>
        <div className="insight-card">
          <span className="insight-value">{representedProvinces}</span>
          <span className="insight-label">{t('alumni.provincesReached', 'Provinces Reached')}</span>
          <MapPin size={24} color="var(--depa-navy)" style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', opacity: 0.1, width: '48px', height: '48px' }} />
        </div>
        <div className="insight-card">
          <span className="insight-value" style={{ fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '1.2rem' }}>
            {t(`alumni.sector.${mostCommonSector}`)}
          </span>
          <span className="insight-label">{t('alumni.topSector', 'Top Sector')}</span>
          <Building2 size={24} color="var(--depa-navy)" style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', opacity: 0.1, width: '48px', height: '48px' }} />
        </div>
        <div className="insight-card">
          <span className="insight-value">{avgCohortSize}</span>
          <span className="insight-label">{t('alumni.avgCohort', 'Avg. Cohort Size')}</span>
          <Users size={24} color="var(--depa-navy)" style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', opacity: 0.1, width: '48px', height: '48px' }} />
        </div>
      </div>

      <div className="insights-grid-main">
        <div className="insight-panel">
          <h4 className="panel-title">
            {t('alumni.cohortGrowth', 'Cohort Growth')}
            <span className="panel-subtitle">TOTAL ALUMNI PER BATCH</span>
          </h4>
          <div className="bar-chart">
            {alumniBatches.slice().reverse().map(batch => {
              const count = batchCounts[batch.id];
              const percentage = (count / maxBatchCount) * 100;
              return (
                <div key={batch.id} className="bar-row">
                  <span className="bar-label">SCL {batch.id}</span>
                  <div className="bar-track">
                    <div 
                      className="bar-fill" 
                      style={{ 
                        width: `${Math.max(percentage, 5)}%`,
                        background: batchColors[batch.id] || 'var(--depa-navy)'
                      }}
                    >
                    </div>
                  </div>
                  <span className="bar-value">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="insight-panel">
          <h4 className="panel-title">
            {t('alumni.nationalCoverage', 'National Coverage')}
          </h4>
          <div className="coverage-display">
            <div className="coverage-ring">
              <svg viewBox="0 0 100 100">
                <circle className="ring-bg" cx="50" cy="50" r="45" />
                <circle 
                  className="ring-fill" 
                  cx="50" cy="50" r="45" 
                  strokeDasharray={`${coveragePercentage * 2.827} 282.7`} 
                />
              </svg>
              <div className="ring-content">
                <span className="ring-value">{coveragePercentage}%</span>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              {t('alumni.coverageDesc', '{{count}} of 77 provinces represented', { count: representedProvinces })}
            </p>
          </div>
          
          <div className="top-list" style={{ marginTop: '1.5rem' }}>
            <h5 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              {t('alumni.topProvinces', 'Top Provinces')}
            </h5>
            {topProvinces.map(([prov, count]) => (
              <div key={prov} className="top-list-item">
                <span className="item-name">{prov}</span>
                <span className="item-count">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CohortInsights;
