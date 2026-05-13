import React from 'react';
import { useTranslation } from 'react-i18next';
import Curriculum from '../components/Curriculum';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CurriculumPage.css';

export default function CurriculumPage() {
  const { t } = useTranslation();
  return (
    <div className="curriculum-page">
      <div className="container">
        <Link to="/" className="curriculum-back-link">
          <ArrowLeft size={18} /> {t('common.backToHome', 'Back to Home')}
        </Link>
      </div>
      <Curriculum />
    </div>
  );
}
