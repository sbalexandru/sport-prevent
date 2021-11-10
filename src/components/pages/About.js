import React from "react";
import i18n from "../../i18n";

import { Container, TextArea, VideoFrame } from "./About.styled";

const About = () => {
  return (
    <Container className="about-section" id="about">
      <VideoFrame
        width="460"
        height="315"
        src="https://www.youtube.com/embed/IuOzqZGh9u0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></VideoFrame>
      <TextArea>
        <h2>{i18n.t("about.welcome")}</h2>
        <p>{i18n.t("about.aboutme")}</p>
      </TextArea>
    </Container>
  );
};
export default About;
