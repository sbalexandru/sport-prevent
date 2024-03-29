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
import { images, child } from "../../../img/Images";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTimes,
//   faForward,
//   faBackward,
// } from "@fortawesome/free-solid-svg-icons";
import ImageGallery from "react-image-gallery";

import i18n from "../../../i18n";

const ChildEvents = () => {
  let event1 = [
    {
      original: images.gyerek_600,
      thumbnail: images.gyerek_600,
      originalAlt: "images.gyerek_600",
      thumbnailAlt: "images.gyerek_600",
    },
    {
      original: child.childE1a,
      thumbnail: child.childE1a,
      originalAlt: "child.childE1a",
      thumbnailAlt: "child.childE1a",
    },
    {
      original: child.childE1b,
      thumbnail: child.childE1b,
      originalAlt: "child.childE1b",
      thumbnailAlt: "child.childE1b",
    },
    {
      original: child.childE1c,
      thumbnail: child.childE1c,
      originalAlt: "child.childE1c",
      thumbnailAlt: "child.childE1c",
    },

    {
      original: child.childE1d,
      thumbnail: child.childE1d,
      originalAlt: "child.childE1d",
      thumbnailAlt: "child.childE1d",
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
      <BackColor className="childEvent">
        <Container>
          <Title>{i18n.t("childEvents.firstEvent.childEventTitle")}</Title>
          <Text>{i18n.t("childEvents.firstEvent.childEventDescription")}</Text>
          <ImageGallery items={event1} lazyLoad={true} showThumbnails={true} />
        </Container>
      </BackColor>

      {/* <Container className="adjust bottom">
        <Title className="white">
          {i18n.t("childEvents.secondEvent.childEventTitle")}
        </Title>
        <Text>{i18n.t("childEvents.secondEvent.childEventDescription")}</Text>
        <ImageGallery items={event2} lazyLoad={true} showThumbnails={true} />
      </Container>

      <BackColor className="childEvent">
        <Container className="adjust">
          <Title>{i18n.t("childEvents.triedEvent.childEventTitle")}</Title>
          <Text>{i18n.t("childEvents.triedEvent.childEventDescription")}</Text>
          <ImageGallery items={event3} lazyLoad={true} showThumbnails={true} />
        </Container>
      </BackColor> */}
    </>
  );
};
export default ChildEvents;
