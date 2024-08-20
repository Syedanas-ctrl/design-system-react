import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18nextFluent from 'i18next-fluent';
import HttpBackend from 'i18next-http-backend';
import { LanguageCode } from '@/types/language';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(i18nextFluent)
  .use(HttpBackend)
  .init({
    supportedLngs: Object.values(LanguageCode),
    ns: ['common'],
    defaultNS: 'common',
    fallbackNS: 'common',
    resources: {
      en: {
        common: require('./public/locales/en/common.json'),
      },
      hi: {
        common: require('./public/locales/hi/common.json'),
      },
    },
    fallbackLng: LanguageCode.EN,
    debug: process.env.NEXT_PUBLIC_ENVIRONMENT === 'development',
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

export default i18n;
