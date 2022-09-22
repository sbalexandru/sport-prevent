import React from "react";
import i18n from "../../i18n";
import { Container, Contact, Creator, Icon, Title } from "./Footer.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Container className="contacts-section" id="contacts">
      <Title>{i18n.t("footer.footerTitle")}</Title>
      <Contact>
        <Icon
          href="https://www.facebook.com/SportPrevent-100448171573303"
          alt="Facebook"
          className="facebook"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </Icon>
        <Icon href="mailto:#" alt="Mail" className="mail">
          <FontAwesomeIcon icon={faEnvelope} />
        </Icon>

        <Icon
          href="https://www.instagram.com/sportprevent2020/"
          alt="Instagram"
          className="instagram"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Icon>
      </Contact>
      <Creator>
        <FontAwesomeIcon icon={faCopyright} />
        <a href="https://alex-code.netlify.app/" alt="Creator" target="_blank">
          <h2>Sabău Alexandru</h2>
        </a>
      </Creator>
    </Container>
  );
};

export default Footer;
