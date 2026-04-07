import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getApplicationUrl, getProgramPhase, programDetails } from './data/program';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;

  useEffect(() => {
    const siteUrl = 'https://nonarkara.github.io/scl-landing-page/';
    const ogImage = `${siteUrl}Photos%20More/475554453_1066072178897593_3452435967247513607_n.jpg`;
    const officialUrl = getApplicationUrl(currentLanguage);
    const programPhase = getProgramPhase();
    const metadata = [
      ['meta[name="description"]', t('meta.description')],
      ['meta[property="og:title"]', t('meta.title')],
      ['meta[property="og:description"]', t('meta.description')],
      ['meta[property="og:url"]', siteUrl],
      ['meta[property="og:image"]', ogImage],
      ['meta[name="twitter:title"]', t('meta.title')],
      ['meta[name="twitter:description"]', t('meta.description')],
      ['meta[name="twitter:image"]', ogImage],
    ];

    document.title = t('meta.title');

    metadata.forEach(([selector, value]) => {
      const tag = document.querySelector(selector);
      if (tag) {
        tag.setAttribute('content', value);
      }
    });

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', siteUrl);
    }

    document.documentElement.lang = currentLanguage;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: t('meta.title'),
      description: t('meta.description'),
      provider: {
        '@type': 'Organization',
        name: 'Digital Economy Promotion Agency (depa)',
        url: 'https://www.depa.or.th/',
      },
      url: siteUrl,
      sameAs: officialUrl,
      inLanguage: currentLanguage,
      startDate: programDetails.programStart,
      endDate: programDetails.programEnd,
      courseMode: 'onsite',
      location: {
        '@type': 'Place',
        name: programDetails.venueBangkok,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '234/431 Soi Ladprao 10',
          addressLocality: 'Chatuchak',
          addressRegion: 'Bangkok',
          addressCountry: 'TH',
        },
      },
      offers: {
        '@type': 'Offer',
        price: programDetails.feeTHB,
        priceCurrency: 'THB',
        availability: programPhase === 'open'
          ? 'https://schema.org/InStock'
          : 'https://schema.org/LimitedAvailability',
        url: officialUrl,
      },
    };

    let schemaTag = document.getElementById('course-jsonld');
    if (!schemaTag) {
      schemaTag = document.createElement('script');
      schemaTag.type = 'application/ld+json';
      schemaTag.id = 'course-jsonld';
      document.head.appendChild(schemaTag);
    }
    schemaTag.textContent = JSON.stringify(schema);
  }, [currentLanguage, t]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        {t('meta.skipToContent')}
      </a>
      <Navbar />
      <main id="main-content" className="app-main">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
