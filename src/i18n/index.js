import i18n from "i18next";

import ro from "./ro";
import hu from "./hu";
import en from "./en";

const resources = {
  ro: { translation: ro },
  hu: { translation: hu },
  en: { translation: en },
};

let defaultLanguage = "ro";

// if (window.currentLanguage === "hu") {
//   defaultLanguage = "hu";
// } else if (window.currentLanguage === "en") {
//   defaultLanguage = "en";
// }

i18n.init({
  resources,
  lng: defaultLanguage,
});

export default i18n;
