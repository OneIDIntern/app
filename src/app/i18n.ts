import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translations from '../../public/locales/en/translations.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: [
      'en',
      'si',
      'zh',
      'fr',
      'es',
      'de',
      'ptbr',
      'nl',
      'pl',
      'lt',
      'ar',
      'cs',
      'hi',
      'pain',
      'tr',
      'id',
      'fa',
      'la',
      'sw',
      'bg',
      'lv',
      'nb',
      'sv',
      'vn',
      'zhtw',
      'ru',
      'uk',
      'ml',
      'pt',
      'pirate',
      'th',
      'yo',
      'kk',
      'ka',
      'pcm',
      'hy',
      'sr',
      'hr',
      'it',
      'shakespearean',
      'uz',
      'genalpha',
      'corp',
      'gu',
      'he',
      'tl',
      'ha',
      'fi',
      'ro',
      'bs'
    ],
    fallbackLng: 'en',
    keySeparator: '.',
    defaultNS: 'translations',
    ns: ['translations'],
    react: {
      useSuspense: true
    }
  })

// preload languages
i18n.addResourceBundle('en', 'translations', translations)

export default i18n
