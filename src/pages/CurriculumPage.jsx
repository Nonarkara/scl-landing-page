import React from 'react';
import Curriculum from '../components/Curriculum';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CurriculumPage.css';

export default function CurriculumPage() {
  return (
    <div className="curriculum-page">
      <div className="container">
        <Link to="/" className="curriculum-back-link">
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
      <Curriculum />
    </div>
  );
}
