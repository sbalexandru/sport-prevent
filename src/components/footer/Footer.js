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
        <Icon href="#" alt="Facebook" className="facebook">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </Icon>
        <Icon href="mailto:#" alt="Mail" className="mail">
          <FontAwesomeIcon icon={faEnvelope} />
        </Icon>

        <Icon href="#" alt="Instagram" className="instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </Icon>
      </Contact>
      <Creator>
        <FontAwesomeIcon icon={faCopyright} />
        <a href="https://alex-code.netlify.app/" alt="Creator">
          <h2>Sabău Alexandru</h2>
        </a>
      </Creator>
    </Container>
  );
};

export default Footer;
