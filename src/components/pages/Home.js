import React from "react";
import { Container } from "./Home.styled";
import { images } from "../../img/Images";
import BackgroundSlideshow from "react-background-slideshow";
import useWindowDimensions from "./WindowDimensions";

const WelcomeScreen = () => {
  let isDesktop = useWindowDimensions().width >= 1100;
  let isTablet = 413 >= useWindowDimensions().width;
  let isPhone = useWindowDimensions().width <= 412;

  function window() {
    if (isDesktop === true) {
      return (
        <>
          <BackgroundSlideshow
            className="main-section"
            images={[images.bgImg1, images.bgImg2, images.bgImg3]}
            animationDelay={2500}
          />
        </>
      );
    } else if (!isTablet === true) {
      return (
        <>
          <BackgroundSlideshow
            className="main-section"
            images={[
              images.bgImg1_tablet,
              images.bgImg2_tablet,
              images.bgImg3_tablet,
            ]}
            animationDelay={2500}
          />
        </>
      );
    } else if (isPhone === true) {
      return (
        <>
          <BackgroundSlideshow
            className="main-section"
            images={[
              images.bgImg1_mobil,
              images.bgImg2_mobil,
              images.bgImg3_mobil,
            ]}
            animationDelay={2500}
          />
          {console.log("phone")}
        </>
      );
    }
  }

  return (
    <>
      <Container id="home">{window()}</Container>
    </>
  );
};
export default WelcomeScreen;
