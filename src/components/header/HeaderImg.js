import React, { useState } from "react";
import {
  Container,
  PageImage,
  NavBar,
  SectionBtnHome,
  LanguageBtn,
  BtnContainer,
} from "./Header.styled";
import { images } from "../../img/Images";
import i18n from "../../i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";

const HeaderImg = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <NavBar className={navbar ? "navbar active" : "navbar"}>
      <Container>
        <PageImage src={images.logo} />

        <BtnContainer>
          <NavLink to="/">
            <SectionBtnHome>
              <strong>{i18n.t("header.navbar.home")}</strong>
            </SectionBtnHome>
          </NavLink>
          <LanguageBtn>
            <Dropdown />
          </LanguageBtn>
        </BtnContainer>
      </Container>
    </NavBar>
  );
};
export default HeaderImg;
