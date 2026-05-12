import LogoBar from '../components/LogoBar';

import { useSearchParams } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import AboutProgram from '../components/AboutProgram';
import ProgramJourney from '../components/ProgramJourney';
import Testimonials from '../components/Testimonials';

import { ArrowRight, History, BookOpen, Map, MessageSquare, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'about';
  
  const setActiveTab = (tabId) => {
    setSearchParams({ tab: tabId });
  };
  
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

          <div className="tab-content-area">
            {activeTab === 'about' && (
              <div className="tab-pane animate-fade-in">
                <AboutProgram />
                <div className="history-section">
                  <div className="section-header">
                    <span className="section-kicker">OUR STORY</span>
                    <h2 className="section-title">From Batch #1 to Global Impact</h2>
                  </div>
                  <div className="history-timeline">
                    <div className="history-item">
                      <div className="history-year">2020</div>
                      <div className="history-content">
                        <h3>The Inception (Batch #1)</h3>
                        <p>Launched with a vision to bridge the gap between technology and urban governance. 40 pioneers joined the first cohort.</p>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-year">2022</div>
                      <div className="history-content">
                        <h3>Expanding the Network</h3>
                        <p>By Batch #3, SCL became a national benchmark, attracting governors and CEOs from across 30+ provinces.</p>
                        <h3>Expansion (Batch #3)</h3>
                        <p>Introduced the Smart City Thailand Index integration, making the program data-driven.</p>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-year">2024</div>
                      <div className="history-content">
                        <h3>The AI Era (Batch #5)</h3>
                        <p>Overhauled the curriculum to focus on AI governance and sustainable urban tech.</p>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-year">2026</div>
                      <div className="history-content">
                        <h3>Now (Batch #6)</h3>
                        <p>Our largest cohort ever, with 120+ participants representing 50+ provinces.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div className="tab-pane">
                <div className="curriculum-placeholder">
                  <h2>World-Class Curriculum</h2>
                  <p>Our program is designed to provide actionable insights into smart city development, digital economy, and leadership in the age of AI.</p>
                  <Link to="/curriculum" className="btn btn-primary">View Detailed Curriculum</Link>
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
