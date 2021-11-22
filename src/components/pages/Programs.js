import React, { useState } from "react";
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
import { Link } from "react-router-dom";

const ProgramsSection = () => {
  const [isCliked, setIsClicked] = useState(false);

  const HandleChange = () => {
    setIsClicked(false);
  };

  return (
    <BackColor>
      <Container className="programs-section" id="programs">
        <Title>{i18n.t("programs.programsTitle")} </Title>
        <Parent>
          <Link to="/ChildEvents">
            <Child onClick={() => HandleChange(!isCliked)}>
              <ImgSection className="child-program" src={images.gyerek_600} />
              <Section>
                <p>{i18n.t("programs.childPrograms")}</p>
              </Section>
            </Child>
          </Link>

          <Link to="/AdultEvents">
            <Child>
              <ImgSection className="adult-program" src={images.felnott_600} />
              <Section>
                <p>{i18n.t("programs.adultPrograms")}</p>
              </Section>
            </Child>
          </Link>

          <Link to="/IndorEvents">
            <Child>
              <ImgSection className="indor-program" src={images.bent_600} />
              <Section>
                <p>{i18n.t("programs.indorPrograms")}</p>
              </Section>
            </Child>
          </Link>

          <Link to="/OuttdorEvents">
            <Child>
              <ImgSection className="outdor-program" src={images.kint_600} />
              <Section>
                <p>{i18n.t("programs.outdorPrograms")}</p>
              </Section>
            </Child>
          </Link>
        </Parent>
      </Container>
    </BackColor>
  );
};
export default ProgramsSection;
