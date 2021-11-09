import React, { useState } from "react";
import {
  Container,
  PageImage,
  NavBar,
  SectionBtn,
  BtnContainer,
  LanguageBtn,
  MeniuDropdown,
  DropDownWrap,
  DropDownItem,
} from "./Header.styled";
import { images } from "../../img/Images";
import i18n from "../../i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAlignCenter } from "@fortawesome/free-solid-svg-icons";

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

  const [menuOpen, setMenuOpen] = useState(false);

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

          <MeniuDropdown onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen === false ? (
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faAlignCenter}></FontAwesomeIcon>
            )}
            {menuOpen && (
              <DropDownWrap>
                <DropDownItem>
                  <p>{i18n.t("header.navbar.about")}</p>
                </DropDownItem>
                <DropDownItem>
                  <p>{i18n.t("header.navbar.programs")}</p>
                </DropDownItem>
                <DropDownItem>
                  <p>{i18n.t("header.navbar.opinion")}</p>
                </DropDownItem>
                <DropDownItem>
                  <p>{i18n.t("header.navbar.sponsor")}</p>
                </DropDownItem>
                <DropDownItem>
                  <p>{i18n.t("header.navbar.contacts")}</p>
                </DropDownItem>
              </DropDownWrap>
            )}
          </MeniuDropdown>

          <LanguageBtn>
            <Dropdown values={languages} />
          </LanguageBtn>
        </BtnContainer>
      </Container>
    </NavBar>
  );
};
export default Header;
