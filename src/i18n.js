import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import thTranslation from './locales/th.json';
import cnTranslation from './locales/cn.json';

const supportedLanguages = ['th', 'en', 'cn'];
const languageStorageKey = 'scl-language';

function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return 'th';
  }

  const savedLanguage = window.localStorage.getItem(languageStorageKey);
  // Migrate old 'zh' storage to 'cn'
  if (savedLanguage === 'zh') {
    window.localStorage.setItem(languageStorageKey, 'cn');
    return 'cn';
  }
  if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
    return savedLanguage;
  }

  const browserLanguage = window.navigator.language?.toLowerCase().split('-')[0];
  // Map browser 'zh' to our internal 'cn' code
  const mappedLanguage = browserLanguage === 'zh' ? 'cn' : browserLanguage;
  if (mappedLanguage && supportedLanguages.includes(mappedLanguage)) {
    return mappedLanguage;
  }

  return 'th';
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      th: { translation: thTranslation },
      cn: { translation: cnTranslation },
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language === 'cn' ? 'zh-CN' : i18n.language;
}

i18n.on('languageChanged', (language) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(languageStorageKey, language);
  }

  if (typeof document !== 'undefined') {
    document.documentElement.lang = language === 'cn' ? 'zh-CN' : language;
  }
});

export default i18n;
