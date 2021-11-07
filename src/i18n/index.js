import i18n from "i18next";
// import Dropdown from "../components/dropdown/Dropdown";

import ro from "./ro";
import hu from "./hu";
import en from "./en";

const resources = {
  ro: { translation: ro },
  hu: { translation: hu },
  en: { translation: en },
};

let languages = "en";

// if (window.addEventListener().Dropdown.languages === "hu") {
//   languages = "hu";
// } else if (window.addEventListener().Dropdown.languages === "en") {
//   languages = "en";
// } else if (window.addEventListener().Dropdown.languages === "ro") {
//   languages = "ro";
// }

i18n.init({
  resources,
  lng: languages,
});

export default i18n;
