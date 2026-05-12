import React from 'react';
import { useTranslation } from 'react-i18next';
import { Linkedin, Mail } from 'lucide-react';
import './Faculty.css';

const facultyData = [
  {
    name: "Dr. Passakon Prathombutr",
    role: "Senior Executive Vice President, depa",
    bio: "Lead expert in Smart City development and digital transformation in Thailand.",
    image: "%BASE_URL%alumni/jumpot.jpg" // Placeholder using an existing image
  },
  {
    name: "Nuttapon Nimmanphatcharin",
    role: "President/CEO, depa",
    bio: "Driving the digital economy agenda and nationwide smart city initiatives.",
    image: "%BASE_URL%alumni/chatchawal.jpg" // Placeholder
  },
  {
    name: "Smart City Expert #1",
    role: "Industry Specialist",
    bio: "International expert in urban mobility and sustainable city planning.",
    image: "%BASE_URL%alumni/samrit.jpg" // Placeholder
  },
  {
    name: "Policy Advisor #1",
    role: "Government Liaison",
    bio: "Specializing in regulatory frameworks for digital innovation and city governance.",
    image: "%BASE_URL%alumni/trisupong.jpg" // Placeholder
  }
];

export default function Faculty() {
  const { t } = useTranslation();

  return (
    <div className="faculty-page container">
      <div className="faculty-header">
        <span className="section-kicker">WORLD-CLASS EXPERTISE</span>
        <h1 className="faculty-title">Faculty & Speakers</h1>
        <p className="faculty-subtitle">Learn from over 30+ industry leaders, policymakers, and smart city pioneers.</p>
      </div>

      <div className="faculty-grid">
        {facultyData.map((member, index) => (
          <div key={index} className="faculty-card glass-panel animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="faculty-image">
                  <img src="/faculty/placeholder.jpg" alt={member.name} />
              <div className="faculty-social">
                <a href="#" className="social-link"><Linkedin size={18} /></a>
                <a href="#" className="social-link"><Mail size={18} /></a>
              </div>
            </div>
            <div className="faculty-info">
              <h3 className="faculty-name">{member.name}</h3>
              <p className="faculty-role">{member.role}</p>
              <p className="faculty-bio">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="faculty-footer">
        <p>And 25+ more guest speakers from global technology firms and smart city success stories.</p>
      </div>
    </div>
  );
}
