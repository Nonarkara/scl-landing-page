import React from 'react';
import Curriculum from '../components/Curriculum';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CurriculumPage() {
  return (
    <div className="page-container py-24">
      <div className="container mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-depa-yellow-dark transition-colors mb-8">
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
      <Curriculum />
    </div>
  );
}
