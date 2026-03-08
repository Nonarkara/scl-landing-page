import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ArrowRight } from 'lucide-react';
import {
  formatProgramDate,
  getApplicationUrl,
  getProgramPhase,
  programDetails,
} from '../data/program';
import './AnnouncementBanner.css';

const AnnouncementBanner = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;
  const programPhase = getProgramPhase();
  const storageKey = `scl-banner-dismissed-v2-${programPhase}`;
  const officialUrl = getApplicationUrl(currentLanguage);
  const deadline = formatProgramDate(programDetails.applicationDeadline, currentLanguage);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') {
      return true;
    }

    return window.localStorage.getItem(storageKey) !== 'true';
  });

  if (!isVisible) return null;

  const dismissBanner = () => {
    setIsVisible(false);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(storageKey, 'true');
    }
  };

  return (
    <div className="announcement-banner">
      <div className="container announcement-content">
        <div className="announcement-text-wrapper">
          <span className="announcement-badge">{t(`announcement.badge.${programPhase}`)}</span>
          <p className="announcement-text">
            {t(`announcement.text.${programPhase}`, {
              cohort: programDetails.cohortNumber,
              deadline,
            })}
            <a
              href={officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="announcement-link ml-2"
            >
              {t('announcement.cta')} <ArrowRight size={14} className="inline ml-1" />
            </a>
          </p>
        </div>
        <button
          type="button"
          className="announcement-close"
          onClick={dismissBanner}
          aria-label={t('announcement.ariaClose')}
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
