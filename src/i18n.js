import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import thTranslation from './locales/th.json';
import zhTranslation from './locales/zh.json';

const supportedLanguages = ['th', 'en', 'zh'];
const languageStorageKey = 'scl-language';

function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return 'th';
  }

  const savedLanguage = window.localStorage.getItem(languageStorageKey);
  if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
    return savedLanguage;
  }

  const browserLanguage = window.navigator.language?.toLowerCase().split('-')[0];
  if (browserLanguage && supportedLanguages.includes(browserLanguage)) {
    return browserLanguage;
  }

  return 'th';
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      th: { translation: thTranslation },
      zh: { translation: zhTranslation },
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language;
}

i18n.on('languageChanged', (language) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(languageStorageKey, language);
  }

  if (typeof document !== 'undefined') {
    document.documentElement.lang = language;
  }
});

export default i18n;
