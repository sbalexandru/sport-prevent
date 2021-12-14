import React from "react";
import i18n from "../../i18n";

import { Container, TextArea, VideoFrame } from "./About.styled";

function VideoRender() {
  const languageCheck = document.cookie.valueOf();
  if (languageCheck === "i18next=hu") {
    return (
      <VideoFrame
        width="460"
        height="315"
        src="https://www.youtube.com/embed/J-Crtb6uHTM"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      >
        {console.log(languageCheck[0])}
      </VideoFrame>
    );
  } else if (languageCheck === "i18next=ro") {
    return (
      <VideoFrame
        width="460"
        height="315"
        src="https://www.youtube.com/embed/wvzMptQE-XI"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></VideoFrame>
    );
  } else {
    return (
      <VideoFrame
        width="460"
        height="315"
        src="https://www.youtube.com/embed/IuOzqZGh9u0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></VideoFrame>
    );
  }
}

const About = () => {
  return (
    <Container className="about-section" id="about">
      {VideoRender()}
      <TextArea>
        <h2>{i18n.t("about.welcome")}</h2>
        <p>{i18n.t("about.aboutme")}</p>
      </TextArea>
    </Container>
  );
};
export default About;
