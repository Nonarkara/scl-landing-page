import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp, Search, X } from 'lucide-react';
import faqData from '../data/faqData';
import './FAQ.css';

const CATEGORY_ORDER = [
  'program',
  'application',
  'curriculum',
  'faculty',
  'logistics',
  'alumni',
  'topics',
  'certification',
  'implementation',
  'partnerships',
];

export default function FAQ() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage ?? i18n.language).split('-')[0];
  const pick = (obj) => obj?.[lang] || obj?.en || '';
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFAQs = useMemo(() => {
    let results = [...faqData];
    if (activeCategory !== 'all') {
      results = results.filter((item) => item.category === activeCategory);
    }
    if (searchTerm.trim()) {
      const key = searchTerm.toLowerCase();
      results = results.filter(
        (item) =>
          pick(item.question).toLowerCase().includes(key) ||
          pick(item.answer).toLowerCase().includes(key)
      );
    }
    return results;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, activeCategory, lang]);

  const groupedFAQs = useMemo(() => {
    const groups = {};
    for (const item of filteredFAQs) {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    }
    const sorted = {};
    for (const cat of CATEGORY_ORDER) {
      if (groups[cat]) sorted[cat] = groups[cat];
    }
    return sorted;
  }, [filteredFAQs]);

  const toggleFAQ = (globalIndex) => {
    setActiveIndex(activeIndex === globalIndex ? null : globalIndex);
  };

  let globalIndex = 0;
  const photoBreakAfter = 25;
  let photoBreakRendered = false;

  const categoryLabel = (cat) => t(`faq.categories.${cat}`);

  return (
    <div className="faq-page container">
      <div className="faq-header">
        <span className="section-kicker">{t('faq.kicker', 'Get answers')}</span>
        <h1 className="faq-title">{t('faq.title', 'Frequently Asked Questions')}</h1>
        <p className="faq-subtitle">
          {t('faq.subtitle', 'Everything worth knowing about SCL — the program, the application, the people, the outcomes.')}
        </p>
      </div>

      <div className="faq-toolbar">
        <div className="faq-search">
          <Search size={18} className="faq-search-icon" />
          <input
            type="text"
            placeholder={t('faq.searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setActiveIndex(null);
            }}
          />
          {searchTerm && (
            <button className="faq-search-clear" onClick={() => setSearchTerm('')} aria-label={t('faq.clearFilters')}>
              <X size={16} />
            </button>
          )}
        </div>

        <div className="faq-categories">
          <button
            className={`faq-cat-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => { setActiveCategory('all'); setActiveIndex(null); }}
          >
            {t('faq.allCategory', 'All')} ({faqData.length})
          </button>
          {CATEGORY_ORDER.map((cat) => {
            const count = faqData.filter((f) => f.category === cat).length;
            return (
              <button
                key={cat}
                className={`faq-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => { setActiveCategory(cat); setActiveIndex(null); }}
              >
                {categoryLabel(cat)} ({count})
              </button>
            );
          })}
        </div>
      </div>

      <div className="faq-results-count">
        {t('faq.resultsFound', { count: filteredFAQs.length })}
      </div>

      <div className="faq-list">
        {Object.entries(groupedFAQs).map(([category, items]) => (
          <div key={category} className="faq-category-block">
            <h3 className="faq-category-title">{categoryLabel(category)}</h3>
            {items.map((item) => {
              const idx = globalIndex++;
              const showPhotoBreak =
                !photoBreakRendered &&
                idx >= photoBreakAfter &&
                activeCategory === 'all' &&
                !searchTerm.trim();
              if (showPhotoBreak) photoBreakRendered = true;
              return (
                <React.Fragment key={idx}>
                  {showPhotoBreak && (
                    <figure className="faq-photo-break">
                      <img
                        src="/Photos%20additional/487223744_1115777977260346_2802745586154524455_n.jpg"
                        alt=""
                        loading="lazy"
                      />
                    </figure>
                  )}
                  <div
                    className={`faq-item ${activeIndex === idx ? 'active' : ''}`}
                    onClick={() => toggleFAQ(idx)}
                  >
                    <div className="faq-question">
                      <span>{pick(item.question)}</span>
                      {activeIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                    {activeIndex === idx && (
                      <div className="faq-answer">
                        <p>{pick(item.answer)}</p>
                      </div>
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        ))}
      </div>

      {filteredFAQs.length === 0 && (
        <div className="faq-empty">
          <p>{t('faq.noResults')}</p>
          <button className="btn btn-primary" onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}>
            {t('faq.clearFilters')}
          </button>
        </div>
      )}

      <div className="faq-contact">
        <h3>{t('faq.contactTitle')}</h3>
        <p>{t('faq.contactDesc')}</p>
        <a href="mailto:scp@depa.or.th?subject=SCL%20Program%20Inquiry" className="btn btn-primary">
          {t('faq.contactCta')}
        </a>
      </div>
    </div>
  );
}
