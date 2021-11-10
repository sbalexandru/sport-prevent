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
import { Link } from "react-scroll";

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
  const handleChange = () => {
    setMenuOpen(false);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <NavBar className={navbar ? "navbar active" : "navbar"}>
      <Container>
        <PageImage src={images.logo} />

        <BtnContainer>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <SectionBtn>
              <strong>{i18n.t("header.navbar.home")}</strong>
            </SectionBtn>
          </Link>

          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <SectionBtn>
              <strong>{i18n.t("header.navbar.about")}</strong>
            </SectionBtn>
          </Link>

          <Link
            activeClass="active"
            to="programs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <SectionBtn>
              <strong>{i18n.t("header.navbar.programs")}</strong>
            </SectionBtn>
          </Link>

          <Link
            activeClass="active"
            to="opinion"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <SectionBtn>
              <strong>{i18n.t("header.navbar.opinion")}</strong>
            </SectionBtn>
          </Link>

          <Link
            activeClass="active"
            to="sponsor"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <SectionBtn>
              <strong>{i18n.t("header.navbar.sponsor")}</strong>
            </SectionBtn>
          </Link>

          <Link
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <SectionBtn>
              <strong>{i18n.t("header.navbar.contacts")}</strong>
            </SectionBtn>
          </Link>

          <MeniuDropdown onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen === false ? (
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faAlignCenter}></FontAwesomeIcon>
            )}
            {menuOpen && (
              <DropDownWrap>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <DropDownItem onClick={() => setMenuOpen(false)}>
                    <p>{i18n.t("header.navbar.home")}</p>
                  </DropDownItem>
                </Link>

                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <DropDownItem onClick={() => setMenuOpen(false)}>
                    <p>{i18n.t("header.navbar.about")}</p>
                  </DropDownItem>
                </Link>

                <Link
                  activeClass="active"
                  to="programs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <DropDownItem onClick={() => setMenuOpen(false)}>
                    <p>{i18n.t("header.navbar.programs")}</p>
                  </DropDownItem>
                </Link>

                <Link
                  activeClass="active"
                  to="opinion"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <DropDownItem onClick={() => setMenuOpen(false)}>
                    <p>{i18n.t("header.navbar.opinion")}</p>
                  </DropDownItem>
                </Link>

                <Link
                  activeClass="active"
                  to="sponsor"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <DropDownItem onClick={() => setMenuOpen(false)}>
                    <p>{i18n.t("header.navbar.sponsor")}</p>
                  </DropDownItem>
                </Link>

                <Link
                  activeClass="active"
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <DropDownItem onClick={() => setMenuOpen(false)}>
                    <p>{i18n.t("header.navbar.contacts")}</p>
                  </DropDownItem>
                </Link>
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
