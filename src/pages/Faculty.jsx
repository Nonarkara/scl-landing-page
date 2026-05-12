import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import './Faculty.css';

const facultyData = [
  {
    name: "Dr. Passakon Prathombutr",
    role: "Special Expert, depa",
    bio: "Special Expert at depa and the agency's former Senior Executive Vice President. With more than 30 years of experience, he has led Thailand's national smart city policy planning from the start.",
  },
  {
    name: "Dr. Supakorn Siddhichai",
    role: "Acting President & CEO, depa",
    bio: "Acting President and CEO at depa. He drives SCL programs (e.g., SCL#1, #2) and Thailand's smart city initiatives, including updates on CAV and smart city frameworks.",
  },
  {
    name: "Dr. Non Arkaraprasertkul",
    role: "Smart City Leadership Expert & Program Co-designer",
    bio: "A leading expert in smart city leadership, having taught in SCL for five batches and co-designing the program since 2022. With a PhD from Harvard in Anthropology and expertise in urban design and technology, he emphasizes public-private alignment, AI deployment, and site visits in SCL#6 (May 2026).",
  },
  {
    name: "Dr. Rutchanee Gullayanon",
    role: "Executive Vice President, KMITL",
    bio: "Executive Vice President for Innovation and Global Partnership at King Mongkut's Institute of Technology Ladkrabang (KMITL). She engages in smart city technology incubation and partnerships, including with DOST ISU for regional smart city development.",
  },
  {
    name: "Dr. Kanop Ketchart",
    role: "Mayor of Nakhon Si Thammarat City",
    bio: "Mayor of Nakhon Si Thammarat City, advocating smart city planning, muslim-friendly tourism, and AI-based education. He exemplifies practical smart city leadership through urban examples shared in regional forums.",
  },
  {
    name: "Dr. Niramon Serisakul",
    role: "Assoc. Prof., Chulalongkorn University",
    bio: "Assoc. Prof. Dr. Niramon Serisakul (also Niramon Kulsrisombat) is at Chulalongkorn University's Department of Urban and Regional Planning and Director of the Urban Design and Development Center (UddC). She specializes in urban strategies, design, and stakeholder engagement for city development.",
  },
  {
    name: "Dr. Sanphawat Jatupatwarangkul",
    role: "Digital Twin Expert & University Lecturer",
    bio: "Digital twin expert and university lecturer with two decades of experience in building systems and design internationally.",
  },
  {
    name: "Pongsak Yingchoncharoen",
    role: "Mayor of Yala Municipality",
    bio: 'Mayor of Yala Municipality ("Mayor A"), leads a people-centric Smart City model with initiatives like Yala Free WiFi, mobile apps, Big Data dashboards, and dimensions including Smart Governance, Living, Environment, and Energy. His work transformed Yala into a sustainable smart city model.',
  },
];

export default function Faculty() {
  return (
    <div className="faculty-page container">
      <div className="faculty-header">
        <span className="section-kicker">WORLD-CLASS EXPERTISE</span>
        <h1 className="faculty-title">Faculty & Speakers</h1>
        <p className="faculty-subtitle">
          Learn from industry leaders, policymakers, and smart city pioneers who shape Thailand's digital future.
        </p>
      </div>

      <div className="faculty-grid">
        {facultyData.map((member, index) => (
          <div key={index} className="faculty-card glass-panel">
            <div className="faculty-info">
              <h3 className="faculty-name">{member.name}</h3>
              <p className="faculty-role">{member.role}</p>
              <p className="faculty-bio">{member.bio}</p>
              <div className="faculty-social-row">
                <a
                  href="https://www.linkedin.com/company/depa-thailand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="mailto:scp@depa.or.th"
                  className="social-link"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="faculty-footer">
        <p>
          <strong>This is a partial list.</strong> SCL draws from a rotating faculty of 30+ experts,
          guest speakers, and city practitioners from global technology firms and smart city success stories.
        </p>
      </div>
    </div>
  );
}
