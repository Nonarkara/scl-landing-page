import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { programDetails } from '../data/program';
import './Countdown.css';

const TARGET = new Date(programDetails.programStart).getTime();

function getTimeLeft(now) {
  const diff = TARGET - now;
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function getTimeSince(now) {
  const diff = now - TARGET;
  if (diff < 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

const Countdown = () => {
  const { t } = useTranslation();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const isPast = now >= TARGET;
  const time = isPast ? getTimeSince(now) : getTimeLeft(now);

  if (!time) return null;

  const label = isPast ? t('countdown.since') : t('countdown.until');
  const units = [
    { value: time.days, key: 'days' },
    { value: time.hours, key: 'hours' },
    { value: time.minutes, key: 'minutes' },
    { value: time.seconds, key: 'seconds' },
  ];

  return (
    <div className="countdown" role="timer" aria-label={label}>
      <span className="countdown-label">{label}</span>
      <div className="countdown-digits">
        {units.map(({ value, key }) => (
          <div className="countdown-unit" key={key}>
            <span className="countdown-num">{String(value).padStart(2, '0')}</span>
            <span className="countdown-key">{t(`countdown.${key}`)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
