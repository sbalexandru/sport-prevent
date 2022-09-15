import React from "react";
import i18n from "../../i18n";

import { Container, TextArea, VideoFrame, ImgBox } from "./About.styled";
import { images } from "../../img/Images";

// const languageCheck = document.cookie.valueOf();

// function VideoRender() {
//   if (languageCheck === "i18next=hu") {
//     return "https://www.youtube.com/embed/J-Crtb6uHTM";
//   } else if (languageCheck === "i18next=ro") {
//     return "https://www.youtube.com/embed/wvzMptQE-XI";
//   } else {
//     return "https://www.youtube.com/embed/IuOzqZGh9u0";
//   }
// }

const About = () => {
  return (
    <Container className="about-section" id="about">
      {/* <VideoFrame
        width="460"
        height="315"
        src={VideoRender()}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      /> */}
      <ImgBox>
        <img src={images.edina}></img>
      </ImgBox>
      <TextArea>
        <h2>{i18n.t("about.welcome")}</h2>
        <p>{i18n.t("about.aboutme")}</p>
      </TextArea>
    </Container>
  );
};
export default About;
