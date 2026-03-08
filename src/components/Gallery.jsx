import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Expand, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { galleryPhotos } from '../data/galleryPhotos';
import { useFadeIn } from '../hooks/useFadeIn';
import './Gallery.css';

const featuredCount = 6;

const Gallery = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);
  const sectionRef = useFadeIn();

  const visiblePhotos = useMemo(
    () => (showAll ? galleryPhotos : galleryPhotos.slice(0, featuredCount)),
    [showAll]
  );

  const currentIndex = activePhoto ? galleryPhotos.indexOf(activePhoto) : -1;

  useEffect(() => {
    if (!activePhoto) return undefined;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActivePhoto(null);
      if (event.key === 'ArrowRight') setActivePhoto(galleryPhotos[(currentIndex + 1) % galleryPhotos.length]);
      if (event.key === 'ArrowLeft') setActivePhoto(galleryPhotos[(currentIndex - 1 + galleryPhotos.length) % galleryPhotos.length]);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activePhoto, currentIndex]);

  const goToPrevious = () => {
    setActivePhoto(galleryPhotos[(currentIndex - 1 + galleryPhotos.length) % galleryPhotos.length]);
  };

  const goToNext = () => {
    setActivePhoto(galleryPhotos[(currentIndex + 1) % galleryPhotos.length]);
  };

  return (
    <>
      <section id="gallery" className="section gallery-section" ref={sectionRef}>
        <div className="container">
          <div className="gallery-top animate-fade-in">
            <div className="gallery-heading">
              <span className="section-kicker">{t('gallery.badge')}</span>
              <h2 className="text-gradient section-title">{t('gallery.title')}</h2>
              <p className="gallery-subtitle">{t('gallery.subtitle')}</p>
            </div>

            <div className="gallery-toolbar">
              <span className="gallery-chip">
                {showAll
                  ? t('gallery.archiveCount', { count: galleryPhotos.length })
                  : t('gallery.featured', { count: featuredCount })}
              </span>
              <button type="button" className="gallery-toggle" onClick={() => setShowAll((open) => !open)}>
                {showAll ? t('gallery.showLess') : t('gallery.browseAll')}
              </button>
            </div>
          </div>

          <div className="masonry-grid">
            {visiblePhotos.map((photo, index) => (
              <button
                key={photo}
                type="button"
                className="masonry-item animate-fade-in"
                style={{ animationDelay: `${(index % 6) * 0.06}s` }}
                onClick={() => setActivePhoto(photo)}
                aria-label={t('gallery.openImage')}
              >
                <img
                  src={encodeURI(photo)}
                  alt={t('gallery.imageAlt', { number: index + 1 })}
                  loading="lazy"
                />
                <span className="img-overlay" aria-hidden="true">
                  <Expand size={20} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activePhoto && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={t('gallery.openImage')}
          onClick={(e) => { if (e.target === e.currentTarget) setActivePhoto(null); }}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setActivePhoto(null)}
            aria-label={t('gallery.close')}
          >
            <X size={20} />
          </button>

          <figure className="lightbox-frame">
            <img
              src={encodeURI(activePhoto)}
              alt={t('gallery.imageAlt', { number: currentIndex + 1 })}
            />
            <figcaption>
              {t('gallery.counter', { current: currentIndex + 1, total: galleryPhotos.length })}
            </figcaption>
          </figure>

          <div className="lightbox-nav-row">
            <button
              type="button"
              className="lightbox-nav"
              onClick={goToPrevious}
              aria-label={t('gallery.previous')}
            >
              <ArrowLeft size={20} />
            </button>
            <button
              type="button"
              className="lightbox-nav"
              onClick={goToNext}
              aria-label={t('gallery.next')}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
