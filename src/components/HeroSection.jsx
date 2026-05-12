import { useState } from 'react';
import { ArrowRight, Download, Mail, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  heroPhoto,
  programDetails,
} from '../data/program';
import IndexTeaser from './IndexTeaser';
import './HeroSection.css';

const HeroSection = () => {
  const { t } = useTranslation();
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (waitlistEmail) {
      setWaitlistSubmitted(true);
      setTimeout(() => setWaitlistSubmitted(false), 5000);
      setWaitlistEmail('');
    }
  };

  return (
    <section id="home" className="hero hero-v2">
      <div className="hero-background">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-pattern"></div>
      </div>
      
      <div className="container">
        <div className="hero-shell">
          <div className="hero-copy is-visible">
            <div className="live-data-badge">
              <span className="live-data-dot"></span>
              Data live & updated today
            </div>
            
            <div className="hero-eyebrow">
              {t('hero.eyebrow', { cohort: programDetails.cohortNumber })}
            </div>
            
            <h1 className="hero-title-v2">
              Leading the <span className="text-highlight">Future</span> of <br />
              Smart Thailand
            </h1>
            
            <p className="hero-value-statement">{t('hero.valueStatement')}</p>
            
            <p className="hero-subtitle">
              SCL #6 is currently underway. Register your interest to be notified when applications open for SCL #7.
            </p>

            <div className="hero-actions hero-actions-waitlist">
              <form onSubmit={handleWaitlistSubmit} className="waitlist-form">
                <div className="waitlist-input-wrapper">
                  <Mail className="waitlist-icon" size={18} />
                  <input 
                    type="email" 
                    required
                    placeholder="Enter your email address" 
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    className="waitlist-input"
                  />
                </div>
                <button type="submit" className="btn btn-primary waitlist-submit">
                  Join SCL #7 Waitlist
                </button>
              </form>
              {waitlistSubmitted && (
                <div className="waitlist-success">
                  <CheckCircle2 size={16} /> Thank you! We'll notify you when SCL #7 opens.
                </div>
              )}
              
              <div className="hero-secondary-actions">
                <button className="btn btn-outline btn-brochure">
                  <Download size={18} /> Download Brochure
                </button>
              </div>
            </div>
          </div>

          <div className="hero-visual-v2">
            <div className="hero-image-stack">
              <div className="hero-image-card">
                <img
                  src={heroPhoto}
                  alt="SCL Program Atmosphere"
                  className="hero-main-img"
                />
                <div className="hero-stats-overlay">
                  <div className="stat-pill">
                    <span className="stat-num">400+</span>
                    <span className="stat-label">Alumni</span>
                  </div>
                  <div className="stat-pill">
                    <span className="stat-num">77</span>
                    <span className="stat-label">Provinces</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
            {/* Floating Info Cards */}
            <div className="hero-floating-card hero-floating-card-1">
              <div className="card-icon"><ArrowRight size={14} /></div>
              <div className="card-text">7 Weeks Intensive</div>
            </div>
        </div>

        <div className="hero-index-v2">
          <IndexTeaser />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
