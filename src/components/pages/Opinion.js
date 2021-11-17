import React from "react";
import { Container, Title, Parent } from "./Opinion.styled";
import i18n from "../../i18n";
// import { images } from "../../img/Images";

const OpinionSection = () => {
  return (
    <Container className="opinion-section" id="opinion">
      <Title>{i18n.t("opinion.opinionTitle")}</Title>
      <Parent></Parent>
    </Container>
  );
};
export default OpinionSection;
