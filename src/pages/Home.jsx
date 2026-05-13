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
    { id: 'about', labelKey: 'home.tabs.about', fallback: 'About & History', icon: <History size={18} /> },
    { id: 'curriculum', labelKey: 'home.tabs.curriculum', fallback: 'Curriculum', icon: <BookOpen size={18} /> },
    { id: 'journey', labelKey: 'home.tabs.journey', fallback: 'Format & Timeline', icon: <Map size={18} /> },
    { id: 'testimonials', labelKey: 'home.tabs.testimonials', fallback: 'Alumni Voices', icon: <MessageSquare size={18} /> },
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
                  <span>{t(tab.labelKey, tab.fallback)}</span>
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
                      <img src="/Photos/2022-05-11%2018.36.29.jpg" alt="SCL Batch 1" className="history-image" loading="lazy" />
                    </div>
                    <div className="history-item">
                      <div className="history-year">2022</div>
                      <div className="history-content">
                        <h3>{t('history.2022_title')}</h3>
                        <p>{t('history.2022_desc')}</p>
                        <h3>{t('history.2022_title2')}</h3>
                        <p>{t('history.2022_desc2')}</p>
                      </div>
                      <img src="/Photos/2022-09-01%2013.46.33.jpg" alt="SCL Batch 2-3" className="history-image" loading="lazy" />
                    </div>
                    <div className="history-item">
                      <div className="history-year">2024</div>
                      <div className="history-content">
                        <h3>{t('history.2024_title')}</h3>
                        <p>{t('history.2024_desc')}</p>
                        <h3>{t('history.2024_title2')}</h3>
                        <p>{t('history.2024_desc2')}</p>
                      </div>
                      <img src="/Photos/475264919_1066072412230903_4111193098320819467_n-1.jpg" alt="SCL Batch 4 and 5" className="history-image" loading="lazy" />
                    </div>
                    <div className="history-item">
                      <div className="history-year">2026</div>
                      <div className="history-content">
                        <h3>{t('history.2026_title')}</h3>
                        <p>{t('history.2026_desc')}</p>
                      </div>
                      <img src="/Photos/487277273_1115778313926979_1692077499802083327_n.jpg" alt="SCL Batch 6" className="history-image" loading="lazy" />
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
                  <div className="curriculum-photo-strip">
                    <img src="/Photos/2022-05-26%2010.07.12.jpg" alt="Classroom" loading="lazy" />
                    <img src="/Photos/2022-05-26%2015.06.36.jpg" alt="Site visit" loading="lazy" />
                    <img src="/Photos/476143149_1822641635218271_446631311518332652_n.jpg" alt="Workshop" loading="lazy" />
                  </div>
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
              <span className="section-kicker">{t('cta.kicker')}</span>
              <h2 className="cta-title">{t('cta.title')}</h2>
              <p className="cta-desc">
                {t('cta.desc')}
              </p>
              <div className="cta-actions">
                <Link to="/faq" className="btn btn-outline">
                  {t('cta.learnMore')} <ArrowRight size={18} />
                </Link>
                <a href="#home" className="btn btn-primary">
                  {t('cta.waitlist')}
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
