import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import settingsEn from "./locales/en/settings.json";
import settingsEs from "./locales/es/settings.json";
import bigsortEn from "./locales/en/bigsort.json";
import bigsortEs from "./locales/es/bigsort.json";
import overviewEn from "./locales/en/overview.json";
import overviewEs from "./locales/es/overview.json";

const resources = {
  en: {
    settings: settingsEn,
    bigsort: bigsortEn,
    overview: overviewEn,
  },
  es: {
    settings: settingsEs,
    bigsort: bigsortEs,
    overview: overviewEs,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    ns: ["settings", "bigsort", "overview"],

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
  })
  .then(() => {
    document.documentElement.lang = i18n.language;
  });

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;