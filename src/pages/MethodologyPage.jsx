import React from 'react';
import Methodology from '../components/Methodology';
import PageReturn from '../components/PageReturn';

export default function MethodologyPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="container">
        <PageReturn />
        <Methodology />
      </div>
    </div>
  );
}
