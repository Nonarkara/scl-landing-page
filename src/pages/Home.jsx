import LogoBar from '../components/LogoBar';
import HeroSection from '../components/HeroSection';
import AboutProgram from '../components/AboutProgram';
import ProgramJourney from '../components/ProgramJourney';
import Testimonials from '../components/Testimonials';
import { useTranslation } from 'react-i18next';
import { Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <div className="grid-bg" />
      <LogoBar placement="top" />
      <HeroSection />
      <AboutProgram />
      <ProgramJourney />
      <Testimonials />
      
      {/* Bottom CTA Section */}
      <section className="bottom-cta section">
        <div className="container">
          <div className="cta-card glass-panel animate-fade-in">
            <div className="cta-content">
              <span className="section-kicker">NEXT COHORT</span>
              <h2 className="cta-title">Ready to lead the future of Smart Cities?</h2>
              <p className="cta-desc">
                SCL #7 applications will open soon. Join the priority waitlist to receive the official brochure and application notification.
              </p>
              <div className="cta-actions">
                <Link to="/faq" className="btn btn-outline flex items-center gap-2">
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
    </>
  );
};

export default Home;
