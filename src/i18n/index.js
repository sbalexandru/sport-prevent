import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ro from "./ro.json";
import hu from "./hu.json";
import en from "./en.json";

const resources = {
  ro: { translation: ro },
  hu: { translation: hu },
  en: { translation: en },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    supportedLngs: ["en", "hu", "ro"],
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
  });

export default i18n;
