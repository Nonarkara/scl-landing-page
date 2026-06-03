import React from 'react';
import { useTranslation } from 'react-i18next';
import './Curriculum.css';
import CapstoneCases from './CapstoneCases';

// Dynamic "people doing things" — site visits, labs, working sessions — matched to
// each module's topic. No ceremonial/certificate shots. Spans SCL#1 (2022, masked
// pandemic era) to SCL#6, showing the program's real working history. None reused elsewhere.
const MODULE_PHOTOS = [
  '539580663_1239502041554605_1819865055960942430_n.jpg', // 01 Vision — immersive 3D experience room
  '539257668_1239501764887966_6428707906801544206_n.jpg', // 02 Data-Driven Governance — city operations control room
  'S__4866085_0.jpg',                                      // 03 Leadership & Stakeholders — breakout working session
  '487431321_1115778220593655_9007873649863785294_n.jpg', // 04 Innovation & Smart Economy — robotics / automation lab tour
  '2022-05-26 09.58.28.jpg',                               // 05 Emerging Tech — hands-on AR/VR headset trial (pandemic era)
  'S__4866084_0.jpg',                                      // 06 Capstone — "Urban Blueprint" working group
];

const Curriculum = ({ headingLevel = 'h2' }) => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0];
  const modules = [1, 2, 3, 4, 5, 6];
  const HeadingTag = headingLevel;

  return (
    <section className="curriculum-section">
      <div className="container">
        <div className="curriculum-header">
          <span className="section-kicker">{t('curriculum.kicker')}</span>
          <HeadingTag className="curriculum-title">{t('curriculum.title')}</HeadingTag>
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
                <p className="curriculum-row-why">
                  {t(`curriculum.modules.${n}.why`)}
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

        <CapstoneCases lang={lang} />
      </div>
    </section>
  );
};

export default Curriculum;
