import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Share2 } from 'lucide-react';
import './CohortInsights.css';
import { alumniBatches } from '../data/program';

const CohortInsights = ({ allEntries, demographics }) => {
  const { t } = useTranslation();

  const totalProvinces = 77;
  const representedProvinces = demographics.provinces ? Object.keys(demographics.provinces).length : 0;
  const coveragePercentage = Math.round((representedProvinces / totalProvinces) * 100);

  const topProvinces = useMemo(() => {
    if (!demographics.provinces) return [];
    return Object.entries(demographics.provinces)
      .filter(([name]) => name !== 'กรุงเทพมหานคร')
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

  const batchPublicCounts = useMemo(() => {
    const counts = {};
    alumniBatches.forEach(b => { counts[b.id] = 0; });
    allEntries.forEach(entry => {
      if (counts[entry.batch] !== undefined) {
        if (entry.sector === 'public' || entry.sector === 'stateEnterprise' || entry.sector === 'academic') {
          counts[entry.batch]++;
        }
      }
    });
    return counts;
  }, [allEntries]);

  const batchColors = {
    1: '#3b82f6',
    2: '#10b981',
    3: '#f59e0b',
    4: '#ec4899',
    5: '#8b5cf6',
    6: '#06b6d4'
  };

  const batchColorsLight = {
    1: '#93c5fd',
    2: '#6ee7b7',
    3: '#fcd34d',
    4: '#f9a8d4',
    5: '#c4b5fd',
    6: '#67e8f9'
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

      <p className="insights-editorial-lead">
        {t('alumni.insightsEditorialLead', 'Two cohorts a year. About eighty leaders per cohort. Five years in — and the network reaches across most of the country.')}
      </p>

      <div className="insights-grid-top">
        <div className="insight-card">
          <span className="insight-value">{allEntries.length}</span>
          <span className="insight-label">{t('alumni.totalLeaders', 'Total Leaders')}</span>
        </div>
        <div className="insight-card">
          <span className="insight-value">{representedProvinces}</span>
          <span className="insight-label">{t('alumni.provincesReached', 'Provinces Reached')}</span>
        </div>
        <div className="insight-card">
          <span className="insight-value" style={{ fontSize: '1.4rem' }}>
            {t(`alumni.sector.${mostCommonSector}`)}
          </span>
          <span className="insight-label">{t('alumni.topSector', 'Top Sector')}</span>
        </div>
        <div className="insight-card">
          <span className="insight-value">{avgCohortSize}</span>
          <span className="insight-label">{t('alumni.avgCohort', 'Avg. Cohort Size')}</span>
        </div>
      </div>

      <div className="insights-grid-main">
        <div className="insight-panel">
          <h4 className="panel-title">
            {t('alumni.cohortGrowth', 'Cohort Growth')}
            <span className="panel-subtitle">{t('alumni.alumniPerBatch', 'Alumni per batch')}</span>
          </h4>
          <div className="bar-chart">
            {alumniBatches.slice().reverse().map(batch => {
              const total = batchCounts[batch.id];
              const pub = batchPublicCounts[batch.id];
              const priv = total - pub;
              const pubPct = (pub / maxBatchCount) * 100;
              const privPct = (priv / maxBatchCount) * 100;
              return (
                <div key={batch.id} className="bar-row">
                  <span className="bar-label">SCL{batch.id}</span>
                  <div className="bar-track">
                    <div
                      className="bar-fill"
                      style={{ width: `${Math.max(pubPct, 1)}%`, background: batchColors[batch.id] || '#16314b' }}
                    />
                    <div
                      className="bar-fill"
                      style={{ width: `${Math.max(privPct, 1)}%`, background: batchColorsLight[batch.id] || '#8fa3b1' }}
                    />
                  </div>
                  <span className="bar-value">{total}</span>
                </div>
              );
            })}
          </div>
          <div className="bar-legend">
            <span className="bar-legend-item">
              <span className="bar-legend-dot" style={{ background: '#3b82f6' }} />
              {t('alumni.publicLabel', 'Public / State')}
            </span>
            <span className="bar-legend-item">
              <span className="bar-legend-dot" style={{ background: '#93c5fd' }} />
              {t('alumni.privateLabel', 'Private / Other')}
            </span>
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
            <p className="coverage-caption">
              {t('alumni.coverageDesc', '{{count}} of 77 provinces represented', { count: representedProvinces })}
            </p>
          </div>

          <div className="top-list">
            <h5 className="top-list-heading">
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
