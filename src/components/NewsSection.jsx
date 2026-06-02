import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, X } from 'lucide-react';

const NewsSection = () => {
  const { t } = useTranslation();
  const [activeArticle, setActiveArticle] = useState(null);

  // Parse items from translation
  const newsItems = [
    {
      id: 'closing',
      image: '/news/scl6-closing-1.jpg',
      data: t('news.items.closing', { returnObjects: true })
    },
    {
      id: 'visit',
      image: '/news/scl6-visit-1.jpg',
      data: t('news.items.visit', { returnObjects: true })
    }
  ];

  useEffect(() => {
    if (activeArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeArticle]);

  const handleOpenArticle = (item) => {
    setActiveArticle(item);
  };

  const handleCloseArticle = () => {
    setActiveArticle(null);
  };

  return (
    <div className="hero-news-floating">
      {newsItems.map((item) => (
        <div 
          key={item.id}
          className="hero-news-card glass-panel"
          onClick={() => handleOpenArticle(item)}
          role="button"
          tabIndex={0}
        >
          <div className="news-pulse-dot"></div>
          <div className="news-card-content">
            <span className="news-card-label">{t('news.kicker')}</span>
            <span className="news-card-title">{item.data.title}</span>
          </div>
          <ArrowRight size={14} className="news-card-icon" />
        </div>
      ))}

      {/* Modal Overlay */}
      {activeArticle && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
          <div 
            className="absolute inset-0" 
            onClick={handleCloseArticle}
            aria-hidden="true"
          />
          <div 
            className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-100 bg-white">
              <h3 id="modal-title" className="text-lg font-bold text-gray-900 line-clamp-1 pr-4">
                {activeArticle.data.title}
              </h3>
              <button
                onClick={handleCloseArticle}
                className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                aria-label={t('news.close')}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="overflow-y-auto p-6 sm:p-8">
              <div className="aspect-[21/9] w-full rounded-xl overflow-hidden mb-8">
                <img 
                  src={activeArticle.image} 
                  alt={activeArticle.data.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <time className="block text-sm text-gray-500 mb-4">{activeArticle.data.date}</time>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                {activeArticle.data.title}
              </h2>
              <div className="prose prose-depa max-w-none text-gray-700 whitespace-pre-wrap">
                {activeArticle.data.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsSection;
