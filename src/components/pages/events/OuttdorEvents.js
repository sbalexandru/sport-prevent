import React from "react"; // , { useState }
import {
  Container,
  Title,
  Text,
  // ImgParent,
  // ImgChild,
  // ImgBox,
  // ImgTitle,
  BackColor,
  // Model,
} from "./Events.styed";
import { images } from "../../../img/Images";

import ImageGallery from "react-image-gallery";

import i18n from "../../../i18n";

const OuttdorEvents = () => {
  let event1 = [
    {
      original: images.gyerek_600,
      thumbnail: images.gyerek_600,
      originalAlt: " images.gyerek_600",
      thumbnailAlt: " images.gyerek_600",
    },
    {
      original: images.comment1,
      thumbnail: images.comment1,
      originalAlt: "images.comment1",
      thumbnailAlt: " images.comment1",
    },
    {
      original: images.gyerek_600,
      thumbnail: images.gyerek_600,
      originalAlt: " images.gyerek_600",
      thumbnailAlt: " images.gyerek_600",
    },
    {
      original: images.comment1,
      thumbnail: images.comment1,
      originalAlt: " images.comment1",
      thumbnailAlt: " images.comment1",
    },

    {
      original: images.gyerek_600,
      thumbnail: images.gyerek_600,
      originalAlt: " images.gyerek_600",
      thumbnailAlt: " images.gyerek_600",
    },
    {
      original: images.comment1,
      thumbnail: images.comment1,
      originalAlt: " images.comment1",
      thumbnailAlt: "images.comment1",
    },
    {
      original: images.comment2,
      thumbnail: images.comment2,
      originalAlt: " images.comment2",
      thumbnailAlt: " images.comment2",
    },
    {
      original: images.comment4,
      thumbnail: images.comment4,
      originalAlt: " images.comment4",
      thumbnailAlt: " images.comment4",
    },
  ];

  let event2 = [
    {
      original: images.gyerek_600,
      thumbnail: images.gyerek_600,
      originalAlt: " images.gyerek_600",
      thumbnailAlt: " images.gyerek_600",
    },
    {
      original: images.comment1,
      thumbnail: images.comment1,
      originalAlt: "images.comment1",
      thumbnailAlt: " images.comment1",
    },
    {
      original: images.gyerek_600,
      thumbnail: images.gyerek_600,
      originalAlt: " images.gyerek_600",
      thumbnailAlt: " images.gyerek_600",
    },
    {
      original: images.comment1,
      thumbnail: images.comment1,
      originalAlt: " images.comment1",
      thumbnailAlt: " images.comment1",
    },

    {
      original: images.gyerek_600,
      thumbnail: images.gyerek_600,
      originalAlt: " images.gyerek_600",
      thumbnailAlt: " images.gyerek_600",
    },
    {
      original: images.comment1,
      thumbnail: images.comment1,
      originalAlt: " images.comment1",
      thumbnailAlt: "images.comment1",
    },
    {
      original: images.comment2,
      thumbnail: images.comment2,
      originalAlt: " images.comment2",
      thumbnailAlt: " images.comment2",
    },
    {
      original: images.comment4,
      thumbnail: images.comment4,
      originalAlt: " images.comment4",
      thumbnailAlt: " images.comment4",
    },
  ];

  let event3 = [
    {
      original: images.gyerek_600,
      thumbnail: images.gyerek_600,
      originalAlt: " images.gyerek_600",
      thumbnailAlt: " images.gyerek_600",
    },
    {
      original: images.comment1,
      thumbnail: images.comment1,
      originalAlt: "images.comment1",
      thumbnailAlt: " images.comment1",
    },
    {
      original: images.gyerek_600,
      thumbnail: images.gyerek_600,
      originalAlt: " images.gyerek_600",
      thumbnailAlt: " images.gyerek_600",
    },
    {
      original: images.comment1,
      thumbnail: images.comment1,
      originalAlt: " images.comment1",
      thumbnailAlt: " images.comment1",
    },

    {
      original: images.gyerek_600,
      thumbnail: images.gyerek_600,
      originalAlt: " images.gyerek_600",
      thumbnailAlt: " images.gyerek_600",
    },
    {
      original: images.comment1,
      thumbnail: images.comment1,
      originalAlt: " images.comment1",
      thumbnailAlt: "images.comment1",
    },
    {
      original: images.comment2,
      thumbnail: images.comment2,
      originalAlt: " images.comment2",
      thumbnailAlt: " images.comment2",
    },
    {
      original: images.comment4,
      thumbnail: images.comment4,
      originalAlt: " images.comment4",
      thumbnailAlt: " images.comment4",
    },
  ];

  return (
    <>
      <BackColor className="outdorEvent">
        <Container>
          <Title>{i18n.t("outtdorEvents.firstEvent.outtdorEventTitle")}</Title>

          <Text>
            {i18n.t("outtdorEvents.firstEvent.outtdorEventDescription")}
          </Text>
          <ImageGallery items={event1} lazyLoad={true} showThumbnails={true} />
        </Container>
      </BackColor>

      <Container className="adjust bottom">
        <Title className="white">
          {i18n.t("outtdorEvents.secondEvent.outtdorEventTitle")}
        </Title>

        <Text>
          {i18n.t("outtdorEvents.secondEvent.outtdorEventDescription")}
        </Text>
        <ImageGallery items={event2} lazyLoad={true} showThumbnails={true} />
      </Container>

      <BackColor className="outdorEvent">
        <Container className="adjust">
          <Title>{i18n.t("outtdorEvents.triedEvent.outtdorEventTitle")}</Title>

          <Text>
            {i18n.t("outtdorEvents.triedEvent.outtdorEventDescription")}
          </Text>
          <ImageGallery items={event3} lazyLoad={true} showThumbnails={true} />
        </Container>
      </BackColor>
    </>
  );
};
export default OuttdorEvents;
