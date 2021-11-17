import React from "react";
import i18n from "../../i18n";
import { Container, Contact, Creator, Icon, Title } from "./Footer.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAlignCenter } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Container className="contacts-section" id="contacts">
      <Title>{i18n.t("footer.footerTitle")}</Title>
      <Contact>
        <Icon>
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faAlignCenter}></FontAwesomeIcon>
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </Icon>
      </Contact>
      <Creator>
        <p>Created bi</p>
        <h2>Sabău Alexandru</h2>
      </Creator>
    </Container>
  );
};

export default Footer;
