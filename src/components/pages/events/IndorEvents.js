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
import { indor } from "../../../img/Images";
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
      original: indor.indorE1a,
      thumbnail: indor.indorE1a,
      originalAlt: "indor.indorE1a",
      thumbnailAlt: "indor.indorE1a",
    },
    {
      original: indor.indorE1b,
      thumbnail: indor.indorE1b,
      originalAlt: "indor.indorE1b",
      thumbnailAlt: "indor.indorE1b",
    },
    {
      original: indor.indorE1c,
      thumbnail: indor.indorE1c,
      originalAlt: "indor.indorE1c",
      thumbnailAlt: "indor.indorE1c",
    },
    {
      original: indor.indorE1d,
      thumbnail: indor.indorE1d,
      originalAlt: "indor.indorE1d",
      thumbnailAlt: "indor.indorE1d",
    },

    {
      original: indor.indorE1e,
      thumbnail: indor.indorE1e,
      originalAlt: "indor.indorE1e",
      thumbnailAlt: "indor.indorE1e",
    },
    {
      original: indor.indorE1f,
      thumbnail: indor.indorE1f,
      originalAlt: "indor.indorE1f",
      thumbnailAlt: "indor.indorE1f",
    },
    {
      original: indor.indorE1g,
      thumbnail: indor.indorE1g,
      originalAlt: "indor.indorE1g",
      thumbnailAlt: "indor.indorE1g",
    },
    {
      original: indor.indorE1h,
      thumbnail: indor.indorE1h,
      originalAlt: "indor.indorE1h",
      thumbnailAlt: "indor.indorE1h",
    },
  ];

  // let event2 = [
  //   {
  //     original: images.gyerek_600,
  //     thumbnail: images.gyerek_600,
  //     originalAlt: " images.gyerek_600",
  //     thumbnailAlt: " images.gyerek_600",
  //   },
  //   {
  //     original: images.comment1,
  //     thumbnail: images.comment1,
  //     originalAlt: "images.comment1",
  //     thumbnailAlt: " images.comment1",
  //   },
  //   {
  //     original: images.gyerek_600,
  //     thumbnail: images.gyerek_600,
  //     originalAlt: " images.gyerek_600",
  //     thumbnailAlt: " images.gyerek_600",
  //   },
  //   {
  //     original: images.comment1,
  //     thumbnail: images.comment1,
  //     originalAlt: " images.comment1",
  //     thumbnailAlt: " images.comment1",
  //   },

  //   {
  //     original: images.gyerek_600,
  //     thumbnail: images.gyerek_600,
  //     originalAlt: " images.gyerek_600",
  //     thumbnailAlt: " images.gyerek_600",
  //   },
  //   {
  //     original: images.comment1,
  //     thumbnail: images.comment1,
  //     originalAlt: " images.comment1",
  //     thumbnailAlt: "images.comment1",
  //   },
  //   {
  //     original: images.comment2,
  //     thumbnail: images.comment2,
  //     originalAlt: " images.comment2",
  //     thumbnailAlt: " images.comment2",
  //   },
  //   {
  //     original: images.comment4,
  //     thumbnail: images.comment4,
  //     originalAlt: " images.comment4",
  //     thumbnailAlt: " images.comment4",
  //   },
  // ];

  // let event3 = [
  //   {
  //     original: images.gyerek_600,
  //     thumbnail: images.gyerek_600,
  //     originalAlt: " images.gyerek_600",
  //     thumbnailAlt: " images.gyerek_600",
  //   },
  //   {
  //     original: images.comment1,
  //     thumbnail: images.comment1,
  //     originalAlt: "images.comment1",
  //     thumbnailAlt: " images.comment1",
  //   },
  //   {
  //     original: images.gyerek_600,
  //     thumbnail: images.gyerek_600,
  //     originalAlt: " images.gyerek_600",
  //     thumbnailAlt: " images.gyerek_600",
  //   },
  //   {
  //     original: images.comment1,
  //     thumbnail: images.comment1,
  //     originalAlt: " images.comment1",
  //     thumbnailAlt: " images.comment1",
  //   },

  //   {
  //     original: images.gyerek_600,
  //     thumbnail: images.gyerek_600,
  //     originalAlt: " images.gyerek_600",
  //     thumbnailAlt: " images.gyerek_600",
  //   },
  //   {
  //     original: images.comment1,
  //     thumbnail: images.comment1,
  //     originalAlt: " images.comment1",
  //     thumbnailAlt: "images.comment1",
  //   },
  //   {
  //     original: images.comment2,
  //     thumbnail: images.comment2,
  //     originalAlt: " images.comment2",
  //     thumbnailAlt: " images.comment2",
  //   },
  //   {
  //     original: images.comment4,
  //     thumbnail: images.comment4,
  //     originalAlt: " images.comment4",
  //     thumbnailAlt: " images.comment4",
  //   },
  // ];

  return (
    <>
      <BackColor className="indorEvent">
        <Container>
          <Title>{i18n.t("indorEvents.firstEvent.indorEventTitle")}</Title>
          <Text>{i18n.t("indorEvents.firstEvent.indorEventDescription")}</Text>
          <ImageGallery items={event1} lazyLoad={true} showThumbnails={true} />
        </Container>
      </BackColor>

      {/* <Container className="adjust bottom">
        <Title className="white">
          {i18n.t("indorEvents.secondEvent.indorEventTitle")}</Title>
        <Text>{i18n.t("indorEvents.secondEvent.indorEventDescription")}</Text>
        <ImageGallery items={event2} lazyLoad={true} showThumbnails={true} />
      </Container>

      <BackColor className="indorEvent">
        <Container className="adjust">
          <Title>{i18n.t("indorEvents.triedEvent.indorEventTitle")}</Title>
          <Text>{i18n.t("indorEvents.triedEvent.indorEventDescription")}</Text>
          <ImageGallery items={event3} lazyLoad={true} showThumbnails={true} />
        </Container>
      </BackColor> */}
    </>
  );
};
export default IndorEvents;
