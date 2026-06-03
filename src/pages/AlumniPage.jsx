import React from 'react';
import Alumni from '../components/Alumni';
import PageReturn from '../components/PageReturn';

export default function AlumniPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="container">
        <PageReturn />
      </div>
      <div className="sub-page-wrap"><Alumni headingLevel="h1" /></div>
    </div>
  );
}
