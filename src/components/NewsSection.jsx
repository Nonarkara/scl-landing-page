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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-wider text-depa-primary uppercase mb-3">
            {t('news.kicker')}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('news.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item) => (
            <div 
              key={item.id}
              className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden"
              onClick={() => handleOpenArticle(item)}
            >
              <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100 relative">
                <img 
                  src={item.image} 
                  alt={item.data.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/600x400/eeeeee/999999?text=News+Image';
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <time className="text-sm text-gray-500 mb-3">{item.data.date}</time>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-depa-primary transition-colors line-clamp-2">
                  {item.data.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                  {item.data.excerpt}
                </p>
                <div className="flex items-center text-depa-primary font-medium mt-auto">
                  {t('news.readMore')}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
    </section>
  );
};

export default NewsSection;
