import React from "react";
import {
  Container,
  BackImg,
  SponsorLogo,
  LogoContainer,
  Title,
} from "./Sponsor.styled";
import i18n from "../../i18n";
import { images } from "../../img/Images";

const SponsorSection = () => {
  return (
    <BackImg>
      <Container className="sponsor-section" id="sponsor">
        <Title>{i18n.t("sponsor.sponsorTitle")}</Title>
        <LogoContainer>
          <SponsorLogo src={images.Ovi_D_Pop} />
          <SponsorLogo src={images.juhasz_david} />
          <SponsorLogo src={images.megyei_tanacs} />
        </LogoContainer>
      </Container>
    </BackImg>
  );
};
export default SponsorSection;
