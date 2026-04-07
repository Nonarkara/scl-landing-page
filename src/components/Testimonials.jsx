import { useTranslation } from 'react-i18next';
import { useFadeIn } from '../hooks/useFadeIn';
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
              <cite className="testimonial-feature-name">{t(`testimonials.${featured.id}.name`)}</cite>
              <div className="testimonial-feature-role">{t(`testimonials.${featured.id}.role`)}</div>
              <span className="testimonial-feature-batch">SCL #{featured.batch}</span>
            </footer>
          </blockquote>
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
                <cite className="testimonial-item-name">{t(`testimonials.${item.id}.name`)}</cite>
                <div className="testimonial-item-role">{t(`testimonials.${item.id}.role`)}</div>
                <span className="testimonial-item-batch">SCL #{item.batch}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
