import { useTranslation } from 'react-i18next';
import { useFadeIn } from '../hooks/useFadeIn';
import { Play } from 'lucide-react';

const BASE_URL = import.meta.env.BASE_URL || '/';
import './Testimonials.css';

const testimonials = [
  {
    id: 'jumpot',
    batch: 4,
  },
  {
    id: 'chatchawal',
    batch: 4,
  },
  {
    id: 'samrit',
    batch: 5,
  },
  {
    id: 'trisupong',
    batch: 1,
  },
  {
    id: 'wipawan',
    batch: 1,
  },
  {
    id: 'wisal',
    batch: 2,
  },
  {
    id: 'ketsirin',
    batch: 1,
  },
];

const Testimonials = () => {
  const { t } = useTranslation();
  const containerRef = useFadeIn();
  const [featured, ...voices] = testimonials;

  return (
    <section className="section testimonials-section" id="testimonials" ref={containerRef}>
      <div className="container">
        <div className="testimonials-shell">
          <div className="testimonials-header animate-fade-in">
            <span className="section-kicker">{t('testimonials.kicker')}</span>
            <h2 className="testimonials-title">{t('testimonials.title')}</h2>
            <p className="testimonials-desc">{t('testimonials.desc')}</p>
          </div>

          <blockquote className="testimonial-feature animate-fade-in" style={{ animationDelay: '0.05s' }}>
            <p className="testimonial-feature-quote">{t(`testimonials.${featured.id}.quote`)}</p>
            <footer className="testimonial-feature-footer">
              <img src={`${BASE_URL}alumni/${featured.id}.jpg`} alt={t(`testimonials.${featured.id}.name`)} className="testimonial-avatar" />
              <div className="testimonial-feature-meta">
                <cite className="testimonial-feature-name">{t(`testimonials.${featured.id}.name`)}</cite>
                <div className="testimonial-feature-role">{t(`testimonials.${featured.id}.role`)}</div>
                <span className="testimonial-feature-batch">SCL #{featured.batch}</span>
              </div>
            </footer>
          </blockquote>

          {/* Video Placeholder */}
          <div className="video-testimonial-placeholder animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="video-thumbnail" onClick={() => window.location.href = 'mailto:scp@depa.or.th?subject=Request%20SCL%20Alumni%20Video%20Testimonials'} style={{ cursor: 'pointer' }}>
              <img src={`${BASE_URL}Photos%20More/475554453_1066072178897593_3452435967247513607_n.jpg`} alt="Video Testimonial Thumbnail" />
              <div className="video-play-overlay">
                <div className="play-button">
                  <Play fill="currentColor" size={32} />
                </div>
                <span>Watch Alumni Stories</span>
              </div>
            </div>
          </div>
        </div>

        {/* Employer Logo Ticker */}
        <div className="employer-ticker animate-fade-in" style={{ animationDelay: '0.15s' }}>
          <p className="ticker-label">ALUMNI FROM LEADING ORGANIZATIONS</p>
          <div className="ticker-track">
            {['depa', 'EGAT', 'PTT', 'SCG', 'AIS', 'True', 'BMA', 'MEA', 'PEA', 'CEA'].map((org) => (
              <div key={org} className="ticker-item">{org}</div>
            ))}
            {/* Duplicate for infinite loop effect if needed by CSS */}
            {['depa', 'EGAT', 'PTT', 'SCG', 'AIS', 'True', 'BMA', 'MEA', 'PEA', 'CEA'].map((org) => (
              <div key={`${org}-dup`} className="ticker-item">{org}</div>
            ))}
          </div>
        </div>

        <div className="testimonials-list">
          {voices.map((item, i) => (
            <blockquote
              key={item.id}
              className="testimonial-item animate-fade-in"
              style={{ animationDelay: `${0.06 * i}s` }}
            >
              <span className="testimonial-item-index">0{i + 2}</span>
              <p className="testimonial-item-quote">{t(`testimonials.${item.id}.quote`)}</p>
              <footer className="testimonial-item-footer">
                <img src={`${BASE_URL}alumni/${item.id}.jpg`} alt={t(`testimonials.${item.id}.name`)} className="testimonial-avatar" />
                <div className="testimonial-item-meta">
                  <cite className="testimonial-item-name">{t(`testimonials.${item.id}.name`)}</cite>
                  <div className="testimonial-item-role">{t(`testimonials.${item.id}.role`)}</div>
                  <span className="testimonial-item-batch">SCL #{item.batch}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
