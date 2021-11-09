import i18n from "i18next";
// import Dropdown from "../components/dropdown/Dropdown";

import ro from "./ro.json";
import hu from "./hu.json";
import en from "./en.json";

const resources = {
  ro: { translation: ro },
  hu: { translation: hu },
  en: { translation: en },
};

let languages = "en";

// if (window.addEventListener() === "hu") {
//   languages = "hu";
// } else if (window.addEventListener() === "en") {
//   languages = "en";
// } else if (window.addEventListener() === "ro") {
//   languages = "ro";
// }

i18n.init({
  resources,
  lng: languages,
  debug: true,
});

export default i18n;
