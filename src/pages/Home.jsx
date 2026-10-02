import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import LogoBar from '../components/LogoBar';
import { useSearchParams } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SmartCityNews from '../components/SmartCityNews';
import AboutProgram from '../components/AboutProgram';
import ProgramJourney from '../components/ProgramJourney';
import Testimonials from '../components/Testimonials';
import { ArrowRight, History, BookOpen, Map, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const activeTab = ['about', 'curriculum', 'journey', 'testimonials'].includes(tabParam) ? tabParam : 'about';
  const tabsRef = useRef(null);

  const setActiveTab = (tabId) => {
    setSearchParams({ tab: tabId });
  };

  useEffect(() => {
    if (tabParam && tabsRef.current) {
      const offset = (document.querySelector('.navbar')?.getBoundingClientRect().height || 72) + 16;
      const y = tabsRef.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      document.getElementById(`tab-${activeTab}`)?.focus({ preventScroll: true });
    }
  }, [tabParam, activeTab]);

  const tabs = [
    { id: 'about', labelKey: 'home.tabs.about', fallback: 'About & History', icon: <History size={18} /> },
    { id: 'curriculum', labelKey: 'home.tabs.curriculum', fallback: 'Curriculum', icon: <BookOpen size={18} /> },
    { id: 'journey', labelKey: 'home.tabs.journey', fallback: 'Format & Timeline', icon: <Map size={18} /> },
    { id: 'testimonials', labelKey: 'home.tabs.testimonials', fallback: 'Alumni Voices', icon: <MessageSquare size={18} /> },
  ];

  return (
    <div className="home-page-v2">
      <LogoBar placement="top" />
      
      {/* Enhanced Hero Section */}
      <div className="hero-v2-wrapper">
        <HeroSection />
      </div>

      {/* SCL #6 conclusion dispatch */}
      <SmartCityNews />

      {/* Tab System Section */}
      <section className="tabs-container section">
        <div className="container">
          <div className="tabs-navigation-wrapper" ref={tabsRef}>
            <div className="tabs-navigation" role="tablist" aria-label={t('nav.about')}>
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls="program-tab-panel"
                  tabIndex={activeTab === tab.id ? 0 : -1}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  onKeyDown={(event) => {
                    const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
                    if (!keys.includes(event.key)) return;
                    event.preventDefault();
                    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
                    setActiveTab(tabs[next].id);
                    document.getElementById(`tab-${tabs[next].id}`)?.focus();
                  }}
                >
                  {tab.icon}
                  <span>{t(tab.labelKey, tab.fallback)}</span>
                </button>
              ))}
            </div>
          </div>

          <div id="program-tab-panel" className="tab-content-area" role="tabpanel" aria-labelledby={`tab-${activeTab}`} tabIndex={0}>
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
          <div className="cta-layout">
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
                <a href="mailto:scp@depa.or.th?cc=dsp@depa.or.th&subject=SCL%20Future%20Cohort%20Inquiry" className="btn btn-primary">
                  {t('cta.waitlist')}
                </a>
              </div>
            </div>
            <figure className="cta-photo">
              <img src="/Photos/486609734_1113399177498226_6992550716968754928_n.jpg" alt={t('about.imageAlt')} loading="lazy" />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
