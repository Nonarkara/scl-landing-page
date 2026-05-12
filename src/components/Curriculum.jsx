import React from 'react';
import { BookOpen, Users, Lightbulb, BarChart, Globe, Zap } from 'lucide-react';
import './Curriculum.css';

const Curriculum = () => {
  const modules = [
    {
      icon: <Globe size={24} />,
      title: 'Digital Transformation & Smart City Vision',
      desc: 'Understanding the global landscape of smart city development and the strategic role of digital infrastructure.'
    },
    {
      icon: <BarChart size={24} />,
      title: 'Data-Driven Governance',
      desc: 'Leveraging data analytics and AI to improve urban services, traffic management, and resource allocation.'
    },
    {
      icon: <Users size={24} />,
      title: 'Leadership & Stakeholder Management',
      desc: 'Developing executive skills to lead cross-functional teams and manage public-private partnerships.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Innovation & Smart Economy',
      desc: 'Exploring new business models and economic opportunities in the digital age.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Emerging Technologies (AI, IoT, 5G)',
      desc: 'Deep dive into the technologies shaping future cities and how to implement them effectively.'
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Capstone Project: City Transformation Plan',
      desc: 'Developing a real-world transformation plan for your city or organization with expert mentorship.'
    }
  ];

  return (
    <section className="curriculum-section">
      <div className="container">
        <div className="curriculum-header">
          <span className="section-kicker">DETAILED CURRICULUM</span>
          <h2 className="section-title">A Comprehensive Roadmap for Smart Leadership</h2>
          <p className="section-desc">
            Our 7-week intensive program is structured into specialized modules led by industry experts and academic pioneers.
          </p>
        </div>

        <div className="curriculum-grid">
          {modules.map((module, index) => (
            <div key={index} className="curriculum-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="curriculum-icon-box">
                {module.icon}
              </div>
              <h3>{module.title}</h3>
              <p>{module.desc}</p>
            </div>
          ))}
        </div>

        <div className="curriculum-footer">
          <div className="curriculum-cert-box">
            <h4>Certification</h4>
            <p>Participants who complete all modules and the capstone project will receive an official SCL Certification from depa Thailand.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
