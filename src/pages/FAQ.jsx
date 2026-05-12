import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const faqData = [
  {
    question: "Who should apply for the SCL program?",
    answer: "The program is designed for senior executives, governors, mayors, CEOs, and directors from both public and private sectors who are responsible for smart city initiatives or urban development."
  },
  {
    question: "What is the duration and schedule of SCL #7?",
    answer: "SCL #7 is tentatively scheduled for late 2026. The program typically runs for 7 weeks, with one full day of learning per week (42 total hours), including workshops and site visits."
  },
  {
    question: "What is included in the THB 62,000 fee?",
    answer: "The fee covers all academic materials, workshops, local site visit transport, meals during program days, and a certificate of completion. It does not include international travel or personal accommodation."
  },
  {
    question: "What are the selection criteria?",
    answer: "Selection is based on organizational role, leadership experience, and the potential impact of the applicant's work on Thailand's smart city development. We aim for a diverse cohort across sectors."
  },
  {
    question: "Will I receive a certificate?",
    answer: "Yes, participants who attend at least 80% of the program hours will receive an official Smart City Leadership certificate from the Digital Economy Promotion Agency (depa)."
  }
];

export default function FAQ() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page container">
      <div className="faq-header">
        <span className="section-kicker">GET ANSWERS</span>
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">Everything you need to know about the SCL program and application process.</p>
      </div>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="faq-contact">
        <h3>Still have questions?</h3>
        <p>We're here to help you lead your city's digital transformation.</p>
        <button className="btn btn-primary">Contact the Team</button>
      </div>
    </div>
  );
}
