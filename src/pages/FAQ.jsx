import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp, Search, X } from 'lucide-react';
import faqData from '../data/faqData';
import './FAQ.css';

const categoryLabels = {
  program: 'Program Overview',
  application: 'Eligibility & Application',
  curriculum: 'Curriculum & Format',
  faculty: 'Faculty & Speakers',
  logistics: 'Fees & Logistics',
  alumni: 'Alumni Network',
  topics: 'Smart City Topics',
  certification: 'Certification & Outcomes',
  implementation: 'Practical Implementation',
  partnerships: 'Partnerships',
};

const categoryOrder = Object.keys(categoryLabels);

export default function FAQ() {
  const { t } = useTranslation();
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
          item.question.toLowerCase().includes(key) ||
          item.answer.toLowerCase().includes(key)
      );
    }
    return results;
  }, [searchTerm, activeCategory]);

  const groupedFAQs = useMemo(() => {
    const groups = {};
    for (const item of filteredFAQs) {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    }
    // Sort categories by predefined order
    const sorted = {};
    for (const cat of categoryOrder) {
      if (groups[cat]) sorted[cat] = groups[cat];
    }
    return sorted;
  }, [filteredFAQs]);

  const toggleFAQ = (globalIndex) => {
    setActiveIndex(activeIndex === globalIndex ? null : globalIndex);
  };

  let globalIndex = 0;

  return (
    <div className="faq-page container">
      <div className="faq-header">
        <span className="section-kicker">GET ANSWERS</span>
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">
          Everything you need to know about the SCL program, application, and outcomes.
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
            <button className="faq-search-clear" onClick={() => setSearchTerm('')}>
              <X size={16} />
            </button>
          )}
        </div>

        <div className="faq-categories">
          <button
            className={`faq-cat-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => { setActiveCategory('all'); setActiveIndex(null); }}
          >
            All ({faqData.length})
          </button>
          {categoryOrder.map((cat) => {
            const count = faqData.filter((f) => f.category === cat).length;
            return (
              <button
                key={cat}
                className={`faq-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => { setActiveCategory(cat); setActiveIndex(null); }}
              >
                {categoryLabels[cat]} ({count})
              </button>
            );
          })}
        </div>
      </div>

      <div className="faq-results-count">
        {filteredFAQs.length} answer{filteredFAQs.length !== 1 ? 's' : ''} found
      </div>

      <div className="faq-list">
        {Object.entries(groupedFAQs).map(([category, items]) => (
          <div key={category} className="faq-category-block">
            <h3 className="faq-category-title">{categoryLabels[category]}</h3>
            {items.map((item) => {
              const idx = globalIndex++;
              return (
                <div
                  key={idx}
                  className={`faq-item ${activeIndex === idx ? 'active' : ''}`}
                  onClick={() => toggleFAQ(idx)}
                >
                  <div className="faq-question">
                    <span>{item.question}</span>
                    {activeIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                  {activeIndex === idx && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
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
