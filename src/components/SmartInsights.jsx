import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Building2, TrendingUp, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import './SmartInsights.css';

const SmartInsights = ({ demographics }) => {
  const { t } = useTranslation();
  if (!demographics || demographics.total === 0) return null;

  const {
    total,
    sectorPercentages,
    roleGroupCounts,
    topProvinces,
    topOrganizations,
    genderEstimate,
    coverageRate,
    publicPrivateRatio,
    leadershipDensity,
    batchCounts,
  } = demographics;

  const maxBatch = Math.max(...batchCounts.map(([, c]) => c), 1);

  const statCards = [
    {
      icon: <Users size={20} />,
      value: total,
      label: 'Total Alumni',
      sub: `${coverageRate}% of 77 provinces`,
    },
    {
      icon: <Briefcase size={20} />,
      value: `${leadershipDensity}%`,
      label: 'In Leadership Roles',
      sub: 'Governors, Mayors, CEOs, Directors',
    },
    {
      icon: <Building2 size={20} />,
      value: `${sectorPercentages.public || 0}%`,
      label: 'Public Sector',
      sub: `Private: ${sectorPercentages.private || 0}%`,
    },
    {
      icon: <TrendingUp size={20} />,
      value: `${publicPrivateRatio}:1`,
      label: 'Public-to-Private Ratio',
      sub: 'Balanced cross-sector representation',
    },
  ];

  return (
    <div className="smart-insights">
      <div className="smart-insights-header">
        <span className="section-kicker">DATA INSIGHTS</span>
        <h3 className="smart-insights-title">Patterns in the Network</h3>
      </div>

      <div className="smart-stats-grid">
        {statCards.map((card) => (
          <div key={card.label} className="smart-stat-card">
            <div className="smart-stat-icon">{card.icon}</div>
            <div className="smart-stat-value">{card.value}</div>
            <div className="smart-stat-label">{card.label}</div>
            <div className="smart-stat-sub">{card.sub}</div>
          </div>
        ))}
      </div>

      <div className="smart-insights-row">
        <div className="smart-panel">
          <h4 className="smart-panel-title">
            <GraduationCap size={16} /> Leadership Composition
          </h4>
          <div className="smart-bars">
            {Object.entries(roleGroupCounts)
              .sort((a, b) => b[1] - a[1])
              .map(([role, count]) => {
                const pct = Math.round((count / total) * 100);
                return (
                  <div key={role} className="smart-bar-row">
                    <span className="smart-bar-label">{role}</span>
                    <div className="smart-bar-track">
                      <div
                        className="smart-bar-fill"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="smart-bar-count">{count}</span>
                    <span className="smart-bar-pct">{pct}%</span>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="smart-panel">
          <h4 className="smart-panel-title">
            <MapPin size={16} /> Top Provinces
          </h4>
          <div className="smart-ranking">
            {topProvinces.map(([province, count], i) => (
              <div key={province} className="smart-rank-row">
                <span className="smart-rank-num">{i + 1}</span>
                <span className="smart-rank-name">{province}</span>
                <div className="smart-rank-bar-track">
                  <div
                    className="smart-rank-bar-fill"
                    style={{ width: `${(count / topProvinces[0][1]) * 100}%` }}
                  />
                </div>
                <span className="smart-rank-count">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="smart-insights-row">
        <div className="smart-panel smart-panel-wide">
          <h4 className="smart-panel-title">
            <TrendingUp size={16} /> Cohort Growth
          </h4>
          <div className="smart-batch-chart">
            {batchCounts.map(([batch, count]) => (
              <div key={batch} className="smart-batch-col">
                <div className="smart-batch-bar-wrap">
                  <div
                    className="smart-batch-bar"
                    style={{ height: `${(count / maxBatch) * 100}%` }}
                  />
                </div>
                <span className="smart-batch-label">SCL {batch}</span>
                <span className="smart-batch-count">{count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="smart-panel">
          <h4 className="smart-panel-title">
            <Building2 size={16} /> Top Organizations
          </h4>
          <div className="smart-org-list">
            {topOrganizations.map(([org, count], i) => (
              <div key={org} className="smart-org-row">
                <span className="smart-org-rank">{i + 1}</span>
                <span className="smart-org-name" title={org}>
                  {org.length > 28 ? org.slice(0, 28) + '…' : org}
                </span>
                <span className="smart-org-count">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartInsights;
