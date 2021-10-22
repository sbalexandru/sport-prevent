import React from "react";
import { images } from "../../img/Images";
import { BackImg, Container, PageImage } from "./About.styled";

const About = () => {
  return (
    <BackImg src={images.bgImg}>
      <Container>
        <PageImage src={images.logo} />
        <div>valami</div>
      </Container>
    </BackImg>
  );
};
export default About;
