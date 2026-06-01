import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { THAI_PROVINCES } from '../utils/alumni';
import { useTranslation } from 'react-i18next';
import './ThailandMap.css';

const ThailandMap = ({ demographics }) => {
  const { t } = useTranslation();
  
  const provinceCounts = demographics?.provinces || {};
  const provinceRoles = demographics?.provinceRoles || {};
  
  // Thailand center
  const center = [13.5, 100.9925];
  const zoom = 5;

  // Include all 77 provinces to show coverage gaps
  const uniqueProvinces = Object.entries(THAI_PROVINCES).reduce((acc, [name, coords]) => {
    // Avoid duplicates for aliases like กทม vs กรุงเทพมหานคร
    if (!acc.some(p => p.coords[0] === coords[0] && p.coords[1] === coords[1])) {
      acc.push({ name, coords });
    }
    return acc;
  }, []);

  const markers = uniqueProvinces.map(({ name, coords }) => {
    const count = provinceCounts[name] || 0;
    // Also check aliases if needed, but extractProvince normalizes to full names mostly
    return { province: name, count, coords };
  });

  const maxCount = Math.max(...markers.map(m => m.count), 1);
  
  return (
    <div className="thailand-map-wrapper">
      <div className="map-header">
        <h3 className="map-title">{t('alumni.mapTitle', 'Alumni Distribution by Province')}</h3>
        <p className="map-subtitle">{t('alumni.mapSubtitle', 'Based on available organization data')}</p>
      </div>
      <div className="map-container-inner">
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} style={{ height: '450px', width: '100%', borderRadius: '16px', zIndex: 1 }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          {markers.map((marker, idx) => {
            const isActive = marker.count > 0;
            const radius = isActive ? 6 + (marker.count / maxCount) * 18 : 4;
            const fillColor = isActive ? '#FFC600' : '#e2e8f0';
            const strokeColor = isActive ? '#0C2F53' : '#cbd5e1';
            const weight = isActive ? 2 : 1;
            const fillOpacity = isActive ? 0.75 : 0.4;
            const opacity = isActive ? 0.9 : 0.6;

            const roles = provinceRoles[marker.province] || {};
            const roleEntries = Object.entries(roles).sort((a, b) => b[1] - a[1]);

            return (
              <CircleMarker
                key={idx}
                center={marker.coords}
                radius={radius}
                fillColor={fillColor}
                color={strokeColor}
                weight={weight}
                opacity={opacity}
                fillOpacity={fillOpacity}
              >
                <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                  <div style={{ textAlign: 'center', padding: '6px' }}>
                    <strong style={{ display: 'block', fontSize: '15px', marginBottom: '4px', color: '#0C2F53' }}>{marker.province}</strong>
                    {isActive ? (
                      <>
                        <div style={{ fontSize: '14px', color: '#3d5a78', fontWeight: 600, marginBottom: '6px', paddingBottom: '6px', borderBottom: '1px solid #e2e8f0' }}>
                          {marker.count} {t('alumni.people', 'people')}
                        </div>
                        {roleEntries.length > 0 && (
                          <div style={{ textAlign: 'left', fontSize: '12px', color: '#64748b' }}>
                            {roleEntries.map(([role, c]) => (
                              <div key={role} style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginBottom: '2px' }}>
                                <span>{role}</span>
                                <strong>{c}</strong>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <span style={{ fontSize: '12px', color: '#94a3b8', fontStyle: 'italic' }}>{t('alumni.noAlumniYet', 'No alumni yet')}</span>
                    )}
                  </div>
                </Tooltip>
              </CircleMarker>
            );
          })}
        </MapContainer>
        
        <div className="map-legend">
          <div className="legend-item">
            <span className="legend-dot active"></span>
            <span>{t('alumni.legendActive', 'Represented')}</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot inactive"></span>
            <span>{t('alumni.legendInactive', 'No Alumni')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThailandMap;
