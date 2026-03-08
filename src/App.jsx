import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t('meta.title');

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', t('meta.description'));
    }

    document.documentElement.lang = i18n.resolvedLanguage ?? i18n.language;
  }, [i18n.language, i18n.resolvedLanguage, t]);

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
