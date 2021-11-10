import React from "react";
import { Container, Contact, Creator, Icon, Title } from "./Footer.styled";

const Footer = () => {
  return (
    <Container className="contacts-section" id="contacts">
      <Contact>
        <Title>copntact</Title>
        <Icon>fb ins </Icon>
      </Contact>
      <Creator>
        <p>Created bi</p>
        <h2>Sabau Alexandru</h2>
      </Creator>
    </Container>
  );
};

export default Footer;
