import React from 'react';
import Curriculum from '../components/Curriculum';
import PageReturn from '../components/PageReturn';
import './CurriculumPage.css';

export default function CurriculumPage() {
  return (
    <div className="curriculum-page">
      <div className="container">
        <PageReturn />
      </div>
      <Curriculum />
    </div>
  );
}
