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
import { images, outdor } from "../../../img/Images";

import ImageGallery from "react-image-gallery";

import i18n from "../../../i18n";

const OuttdorEvents = () => {
  let event1 = [
    {
      original: outdor.outdorE1a,
      thumbnail: outdor.outdorE1a,
      originalAlt: "outdor.outdorE1a",
      thumbnailAlt: "outdor.outdorE1a",
    },
    {
      original: outdor.outdorE1b,
      thumbnail: outdor.outdorE1b,
      originalAlt: "outdor.outdorE1b",
      thumbnailAlt: "outdor.outdorE1b",
    },
    {
      original: outdor.outdorE1c,
      thumbnail: outdor.outdorE1c,
      originalAlt: "outdor.outdorE1c",
      thumbnailAlt: "outdor.outdorE1c",
    },
    {
      original: outdor.outdorE1d,
      thumbnail: outdor.outdorE1d,
      originalAlt: "outdor.outdorE1d",
      thumbnailAlt: "outdor.outdorE1d",
    },
    {
      original: outdor.outdorE1e,
      thumbnail: outdor.outdorE1e,
      originalAlt: "outdor.outdorE1e",
      thumbnailAlt: "outdor.outdorE1e",
    },
    {
      original: outdor.outdorE1f,
      thumbnail: outdor.outdorE1f,
      originalAlt: "outdor.outdorE1f",
      thumbnailAlt: "outdor.outdorE1f",
    },
    {
      original: outdor.outdorE1g,
      thumbnail: outdor.outdorE1g,
      originalAlt: "outdor.outdorE1g",
      thumbnailAlt: "outdor.outdorE1g",
    },
    {
      original: images.kint_600,
      thumbnail: images.kint_600,
      originalAlt: "images.kint_600",
      thumbnailAlt: "images.kint_600",
    },
    {
      original: outdor.outdorE1h,
      thumbnail: outdor.outdorE1h,
      originalAlt: "outdor.outdorE1h",
      thumbnailAlt: "outdor.outdorE1h",
    },
    {
      original: outdor.outdorE1i,
      thumbnail: outdor.outdorE1i,
      originalAlt: "outdor.outdorE1i",
      thumbnailAlt: "outdor.outdorE1i",
    },
    {
      original: outdor.outdorE1j,
      thumbnail: outdor.outdorE1j,
      originalAlt: "outdor.outdorE1j",
      thumbnailAlt: "outdor.outdorE1j",
    },
    {
      original: outdor.outdorE1k,
      thumbnail: outdor.outdorE1k,
      originalAlt: "outdor.outdorE1k",
      thumbnailAlt: "outdor.outdorE1k",
    },
    {
      original: outdor.outdorE1l,
      thumbnail: outdor.outdorE1l,
      originalAlt: "outdor.outdorE1l",
      thumbnailAlt: "outdor.outdorE1l",
    },
    {
      original: outdor.outdorE1m,
      thumbnail: outdor.outdorE1m,
      originalAlt: "outdor.outdorE1m",
      thumbnailAlt: "outdor.outdorE1m",
    },
    {
      original: outdor.outdorE1n,
      thumbnail: outdor.outdorE1n,
      originalAlt: "outdor.outdorE1n",
      thumbnailAlt: "outdor.outdorE1n",
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
      <BackColor className="outdorEvent">
        <Container>
          <Title>{i18n.t("outtdorEvents.firstEvent.outtdorEventTitle")}</Title>
          <Text>
            {i18n.t("outtdorEvents.firstEvent.outtdorEventDescription")}
          </Text>
          <ImageGallery items={event1} lazyLoad={true} showThumbnails={true} />
        </Container>
      </BackColor>
      {/*
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
          <Text>{i18n.t("outtdorEvents.triedEvent.outtdorEventDescription")}</Text>
          <ImageGallery items={event3} lazyLoad={true} showThumbnails={true} />
        </Container>
      </BackColor> */}
    </>
  );
};
export default OuttdorEvents;
