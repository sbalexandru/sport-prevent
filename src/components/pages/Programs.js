import React from "react";
import i18n from "../../i18n";
import {
  Container,
  BackColor,
  Title,
  Parent,
  Child,
  Section,
  ImgSection,
} from "./Programs.styled";
import { images } from "../../img/Images";

const ProgramsSection = () => {
  return (
    <BackColor>
      <Container className="programs-section" id="programs">
        <Title>{i18n.t("programs.programsTitle")}</Title>
        <Parent>
          <Child>
            <ImgSection src={images.gyerek_600} />
            <Section>
              <p>{i18n.t("programs.childPrograms")}</p>
            </Section>
          </Child>
          <Child>
            <ImgSection src={images.felnott_600} />
            <Section>
              <p>{i18n.t("programs.adultPrograms")}</p>
            </Section>
          </Child>
          <Child>
            <ImgSection src={images.bent_600} />
            <Section>
              <p>{i18n.t("programs.indorPrograms")}</p>
            </Section>
          </Child>
          <Child>
            <ImgSection src={images.kint_600} />
            <Section>
              <p>{i18n.t("programs.outdorPrograms")}</p>
            </Section>
          </Child>
        </Parent>
      </Container>
    </BackColor>
  );
};
export default ProgramsSection;
