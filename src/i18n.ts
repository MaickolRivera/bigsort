import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import commonEn from "./locales/en/common.json";
import commonEs from "./locales/es/common.json";
import settingsEn from "./locales/en/settings.json";
import settingsEs from "./locales/es/settings.json";
import bigsortEn from "./locales/en/bigsort.json";
import bigsortEs from "./locales/es/bigsort.json";

const resources = {
  en: {
    common: commonEn,
    settings: settingsEn,
    bigsort: bigsortEn,
  },
  es: {
    common: commonEs,
    settings: settingsEs,
    bigsort: bigsortEs,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    defaultNS: "common",
    ns: ["common", "settings", "bigsort"],

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
  });

export default i18n;