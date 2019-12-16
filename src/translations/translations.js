import I18n from 'i18n-js';

import en from './en.json';

const getLabel = (key, inserts = {}) => {
  return I18n.t(key, inserts);
};

I18n.fallbacks = true;
I18n.locale = 'en';
I18n.missingTranslation = translation => `[[${translation}]]`;

// Make translations object with all the labels
const translations = {
  en,
};

I18n.translations = translations;

export default {
  getLabel,
  I18n,
};
