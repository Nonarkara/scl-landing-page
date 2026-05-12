import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import LogoBar from '../components/LogoBar';
import { useSearchParams } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import AboutProgram from '../components/AboutProgram';
import ProgramJourney from '../components/ProgramJourney';
import Testimonials from '../components/Testimonials';

import { ArrowRight, History, BookOpen, Map, MessageSquare, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'about';
  const tabContentRef = useRef(null);
  
  const setActiveTab = (tabId) => {
    setSearchParams({ tab: tabId });
  };

  useEffect(() => {
    if (tabContentRef.current) {
      const y = tabContentRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [activeTab]);

  useEffect(() => {
    // On initial load with a tab param, scroll to tabs without animation
    if (searchParams.get('tab') && tabContentRef.current) {
      const y = tabContentRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'instant' });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const tabs = [
    { id: 'about', label: 'About & History', icon: <History size={18} /> },
    { id: 'curriculum', label: 'Curriculum', icon: <BookOpen size={18} /> },
    { id: 'journey', label: 'The Journey', icon: <Map size={18} /> },
    { id: 'testimonials', label: 'Alumni Voices', icon: <MessageSquare size={18} /> },
  ];

  return (
    <div className="home-page-v2">
      <div className="grid-bg" />
      <LogoBar placement="top" />
      
      {/* Enhanced Hero Section */}
      <div className="hero-v2-wrapper">
        <HeroSection />
      </div>

      {/* Tab System Section */}
      <section className="tabs-container section">
        <div className="container">
          <div className="tabs-navigation-wrapper">
            <div className="tabs-navigation">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="tab-content-area" ref={tabContentRef}>
            {activeTab === 'about' && (
              <div className="tab-pane animate-fade-in">
                <AboutProgram />
                <div className="history-section">
                  <div className="section-header">
                    <span className="section-kicker">{t('history.kicker')}</span>
                    <h2 className="section-title">{t('history.title')}</h2>
                  </div>
                  <div className="history-timeline">
                    <div className="history-item">
                      <div className="history-year">2020</div>
                      <div className="history-content">
                        <h3>{t('history.2020_title')}</h3>
                        <p>{t('history.2020_desc')}</p>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-year">2022</div>
                      <div className="history-content">
                        <h3>{t('history.2022_title')}</h3>
                        <p>{t('history.2022_desc')}</p>
                        <h3>{t('history.2022_title2')}</h3>
                        <p>{t('history.2022_desc2')}</p>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-year">2024</div>
                      <div className="history-content">
                        <h3>{t('history.2024_title')}</h3>
                        <p>{t('history.2024_desc')}</p>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-year">2026</div>
                      <div className="history-content">
                        <h3>{t('history.2026_title')}</h3>
                        <p>{t('history.2026_desc')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div className="tab-pane">
                <div className="curriculum-placeholder">
                  <h2>{t('curriculumPlaceholder.title')}</h2>
                  <p>{t('curriculumPlaceholder.desc')}</p>
                  <Link to="/curriculum" className="btn btn-primary">{t('curriculumPlaceholder.cta')}</Link>
                </div>
              </div>
            )}

            {activeTab === 'journey' && (
              <div className="tab-pane">
                <ProgramJourney />
              </div>
            )}

            {activeTab === 'testimonials' && (
              <div className="tab-pane">
                <Testimonials />
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Bottom CTA Section */}
      <section className="bottom-cta section">
        <div className="container">
          <div className="cta-card glass-panel">
            <div className="cta-content">
              <span className="section-kicker">NEXT COHORT</span>
              <h2 className="cta-title">Ready to lead the future of Smart Cities?</h2>
              <p className="cta-desc">
                SCL #7 applications will open soon. Join the priority waitlist to receive the official brochure and application notification.
              </p>
              <div className="cta-actions">
                <Link to="/faq" className="btn btn-outline">
                  Learn More <ArrowRight size={18} />
                </Link>
                <a href="#home" className="btn btn-primary">
                  Join the Waitlist
                </a>
              </div>
            </div>
            <div className="cta-icon-bg">
              <Mail size={120} strokeWidth={0.5} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
