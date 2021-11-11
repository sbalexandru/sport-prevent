import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ro from "./ro.json";
import hu from "./hu.json";
import en from "./en.json";

const resources = {
  ro: { translation: ro },
  hu: { translation: hu },
  en: { translation: en },
};
// let languages = "hu";

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  debug: true,
});

export default i18n;
