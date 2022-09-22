import React from "react";
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
import { images, adult } from "../../../img/Images";

import ImageGallery from "react-image-gallery";

import i18n from "../../../i18n";

const AdultEvents = () => {
  let event1 = [
    {
      original: adult.event1a,
      thumbnail: adult.event1a,
      originalAlt: "adult.event1a",
      thumbnailAlt: "adult.event1a",
    },
    {
      original: adult.event1b,
      thumbnail: adult.event1b,
      originalAlt: "adult.event1b",
      thumbnailAlt: " adult.event1b",
    },
    {
      original: images.bent_600,
      thumbnail: images.bent_600,
      originalAlt: "images.bent_600",
      thumbnailAlt: "images.bent_600",
    },
    {
      original: images.felnott_600,
      thumbnail: images.felnott_600,
      originalAlt: "images.felnott_600",
      thumbnailAlt: "images.felnott_600",
    },

    // {
    //   original: images.gyerek_600,
    //   thumbnail: images.gyerek_600,
    //   originalAlt: " images.gyerek_600",
    //   thumbnailAlt: " images.gyerek_600",
    // },
    // {
    //   original: images.comment1,
    //   thumbnail: images.comment1,
    //   originalAlt: " images.comment1",
    //   thumbnailAlt: "images.comment1",
    // },
    // {
    //   original: images.comment2,
    //   thumbnail: images.comment2,
    //   originalAlt: " images.comment2",
    //   thumbnailAlt: " images.comment2",
    // },
    // {
    //   original: images.comment4,
    //   thumbnail: images.comment4,
    //   originalAlt: " images.comment4",
    //   thumbnailAlt: " images.comment4",
    // },
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
      <BackColor className="adultEvent">
        <Container>
          <Title>{i18n.t("adultEvents.firstEvent.adultEventTitle")}</Title>
          <Text>{i18n.t("adultEvents.firstEvent.adultEventDescription")}</Text>
          <ImageGallery items={event1} lazyLoad={true} showThumbnails={true} />
        </Container>
      </BackColor>

      {/* <Container className="adjust bottom">
        <Title className="white">
          {i18n.t("adultEvents.secondEvent.adultEventTitle")}
        </Title>
        <Text>{i18n.t("adultEvents.secondEvent.adultEventDescription")}</Text>
        <ImageGallery items={event2} lazyLoad={true} showThumbnails={true} />
      </Container>

      <BackColor className="adultEvent">
        <Container className="adjust">
          <Title>{i18n.t("adultEvents.triedEvent.adultEventTitle")}</Title>
          <Text>{i18n.t("adultEvents.triedEvent.adultEventDescription")}</Text>
          <ImageGallery items={event3} lazyLoad={true} showThumbnails={true} />
        </Container>
      </BackColor> */}
    </>
  );
};
export default AdultEvents;
