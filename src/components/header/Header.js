import React, { useState } from "react";
import {
  Container,
  PageImage,
  NavBar,
  SectionBtn,
  BtnContainer,
  LanguageBtn,
} from "./Header.styled";
import { images } from "../../img/Images";
import i18n from "../../i18n";
import "bootstrap/dist/css/bootstrap.min.css";

import Dropdown from "../dropdown/Dropdown";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const languages = ["HU", "RO", "EN"];
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

        <BtnContainer>
          <SectionBtn>
            <p>{i18n.t("header.navbar.about")}</p>
          </SectionBtn>
          <SectionBtn>
            <p>{i18n.t("header.navbar.programs")}</p>
          </SectionBtn>
          <SectionBtn>
            <p>{i18n.t("header.navbar.opinion")}</p>
          </SectionBtn>
          <SectionBtn>
            <p>{i18n.t("header.navbar.sponsor")}</p>
          </SectionBtn>
          <SectionBtn>
            <p>{i18n.t("header.navbar.contacts")}</p>
          </SectionBtn>

          <LanguageBtn>
            <Dropdown values={languages} />
          </LanguageBtn>
        </BtnContainer>
      </Container>
    </NavBar>
  );
};

export default Header;
