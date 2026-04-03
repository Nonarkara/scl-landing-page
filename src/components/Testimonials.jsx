import { useTranslation } from 'react-i18next';
import { useFadeIn } from '../hooks/useFadeIn';
import './Testimonials.css';

const testimonials = [
  {
    id: 'jumpot',
    batch: 4,
    avatar: 'จ',
  },
  {
    id: 'chatchawal',
    batch: 4,
    avatar: 'ช',
  },
  {
    id: 'samrit',
    batch: 5,
    avatar: 'ส',
  },
  {
    id: 'trisupong',
    batch: 1,
    avatar: 'ต',
  },
  {
    id: 'wipawan',
    batch: 1,
    avatar: 'ว',
  },
  {
    id: 'wisal',
    batch: 2,
    avatar: 'ว',
  },
  {
    id: 'ketsirin',
    batch: 1,
    avatar: 'ก',
  },
];

const Testimonials = () => {
  const { t } = useTranslation();
  const containerRef = useFadeIn();

  return (
    <section className="section testimonials-section" id="testimonials" ref={containerRef}>
      <div className="container">
        <div className="testimonials-header animate-fade-in">
          <span className="section-kicker">{t('testimonials.kicker')}</span>
          <h2 className="testimonials-title">{t('testimonials.title')}</h2>
          <p className="testimonials-desc">{t('testimonials.desc')}</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, i) => (
            <blockquote
              key={item.id}
              className="testimonial-card animate-fade-in"
              style={{ animationDelay: `${0.06 * i}s` }}
            >
              <p className="testimonial-quote">
                {t(`testimonials.${item.id}.quote`)}
              </p>
              <footer className="testimonial-footer">
                <div className="testimonial-avatar">{item.avatar}</div>
                <div>
                  <cite className="testimonial-name">
                    {t(`testimonials.${item.id}.name`)}
                  </cite>
                  <div className="testimonial-role">
                    {t(`testimonials.${item.id}.role`)}
                  </div>
                  <span className="testimonial-batch">SCL #{item.batch}</span>
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
