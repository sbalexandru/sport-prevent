import React, { useState } from "react";
import { Container, PageImage, NavBar } from "./Header.styled";
import { images } from "../../img/Images";
import i18n from "../../i18n";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  // const [language, setLanguage] = useState("./hu" || "./ro" || "./en");

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  // let defaultLanguage = "";

  // const currentLanguage = () => {
  //   if (window.language === "hu") {
  //     defaultLanguage = "hu";
  //   } else if (window.language === "en") {
  //     defaultLanguage = "en";
  //   }
  // };

  window.addEventListener("scroll", changeBackground);

  return (
    <NavBar className={navbar ? "navbar active" : "navbar"}>
      <Container>
        <PageImage src={images.logo} />

        <div>
          <h1> {i18n.t("form.validator.required")}</h1>;<p>Sport Prevent</p>
        </div>
        {/* <button onClick={(window.defaultLanguage = "hu")}>
          hu{console.log(defaultLanguage)}
        </button> */}
      </Container>
    </NavBar>
  );
};

export default Header;
