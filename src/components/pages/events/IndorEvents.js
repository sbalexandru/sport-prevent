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
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTimes,
//   faForward,
//   faBackward,
// } from "@fortawesome/free-solid-svg-icons";
import ImageGallery from "react-image-gallery";

import i18n from "../../../i18n";

const IndorEvents = () => {
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
      <BackColor className="indorEvent">
        <Container>
          <Title>{i18n.t("indorEvents.firstEvent.indorEventTitle")}</Title>

          <Text>{i18n.t("indorEvents.firstEvent.indorEventDescription")}</Text>
          <ImageGallery items={event1} lazyLoad={true} showThumbnails={true} />
        </Container>
      </BackColor>

      <Container className="adjust bottom">
        <Title className="white">
          {i18n.t("indorEvents.secondEvent.indorEventTitle")}
        </Title>

        <Text>{i18n.t("indorEvents.secondEvent.indorEventDescription")}</Text>
        <ImageGallery items={event2} lazyLoad={true} showThumbnails={true} />
      </Container>

      <BackColor className="indorEvent">
        <Container className="adjust">
          <Title>{i18n.t("indorEvents.triedEvent.indorEventTitle")}</Title>

          <Text>{i18n.t("indorEvents.triedEvent.indorEventDescription")}</Text>
          <ImageGallery items={event3} lazyLoad={true} showThumbnails={true} />
        </Container>
      </BackColor>
    </>
  );
};
export default IndorEvents;
