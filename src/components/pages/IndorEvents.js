import React from "react";
import {
  Container,
  Title,
  Text,
  ImgParent,
  ImgChild,
  ImgBox,
  ImgTitle,
  BackColor,
} from "./IndorEvents.styed";
import { images } from "../../img/Images";
// import i18n from "../../i18n";

const IndorEvents = () => {
  return (
    <BackColor>
      <Container>
        <Title>ceva text </Title>
        <Text>
          Our first promo video is coming soon! Sport,Recreation,Pilates,
          Flow-state,Healthy body,Healthy mind= SportPrevent
        </Text>
        <ImgParent>
          <ImgChild>
            <ImgBox src={images.bent_600} />
            <ImgTitle>asfasdf</ImgTitle>
          </ImgChild>

          <ImgChild>
            <ImgBox src={images.bent_600} />
            <ImgTitle>fsdfsdgsdg</ImgTitle>
          </ImgChild>

          <ImgChild>
            <ImgBox src={images.bent_600} />
            <ImgTitle>sdfsdgsdfgf sd f</ImgTitle>
          </ImgChild>

          <ImgChild>
            <ImgBox src={images.bent_600} />
            <ImgTitle>asdfafdsf </ImgTitle>
          </ImgChild>

          <ImgChild>
            <ImgBox src={images.bent_600} />
            <ImgTitle>asfa fsdfsdf</ImgTitle>
          </ImgChild>

          <ImgChild>
            <ImgBox src={images.bent_600} />
            <ImgTitle>asdas asdfsd </ImgTitle>
          </ImgChild>

          <ImgChild>
            <ImgBox src={images.bent_600} />
            <ImgTitle>asd asfsd sdf</ImgTitle>
          </ImgChild>

          <ImgChild>
            <ImgBox src={images.bent_600} />
            <ImgTitle>asda sdfasda fd</ImgTitle>
          </ImgChild>
        </ImgParent>
      </Container>
    </BackColor>
  );
};
export default IndorEvents;