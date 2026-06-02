import React from 'react';
import Gallery from '../components/Gallery';
import PageReturn from '../components/PageReturn';

export default function GalleryPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="container">
        <PageReturn />
      </div>
      <div className="sub-page-wrap"><Gallery /></div>
    </div>
  );
}
