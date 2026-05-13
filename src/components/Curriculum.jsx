import React from 'react';
import { useTranslation } from 'react-i18next';
import './Curriculum.css';

const MODULE_PHOTOS = [
  '475908551_1822641665218268_8556447180424358663_n.jpg',
  '476008034_1822641685218266_1622267485476882936_n.jpg',
  '476158935_1822641628551605_2862493579238828091_n.jpg',
  '487065252_1114021147436029_6636576544050690930_n.jpg',
  '487307445_1115778250593652_1337757409603967513_n.jpg',
  '487674549_1115778270593650_2213552808546628717_n.jpg',
];

const Curriculum = () => {
  const { t } = useTranslation();
  const modules = [1, 2, 3, 4, 5, 6];

  return (
    <section className="curriculum-section">
      <div className="container">
        <div className="curriculum-header">
          <span className="section-kicker">{t('curriculum.kicker')}</span>
          <h2 className="curriculum-title">{t('curriculum.title')}</h2>
          <p className="curriculum-lede">{t('curriculum.subtitle')}</p>
        </div>

        <ol className="curriculum-outline">
          {modules.map((n, i) => (
            <li key={n} className="curriculum-row">
              <span className="curriculum-num">{String(n).padStart(2, '0')}</span>
              <div className="curriculum-body">
                <h3 className="curriculum-row-title">
                  {t(`curriculum.modules.${n}.title`)}
                </h3>
                <p className="curriculum-row-desc">
                  {t(`curriculum.modules.${n}.desc`)}
                </p>
              </div>
              <figure className="curriculum-thumb">
                <img
                  src={`${import.meta.env.BASE_URL}${encodeURI(`Photos/${MODULE_PHOTOS[i]}`)}`}
                  alt=""
                  loading="lazy"
                />
              </figure>
            </li>
          ))}
        </ol>

        <div className="curriculum-footer">
          <p className="curriculum-cert">
            <span className="curriculum-cert-label">{t('curriculumPlaceholder.certificationTitle')}</span>
            <span className="curriculum-cert-text">{t('curriculumPlaceholder.certificationDesc')}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
