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

const AdultEvents = () => {
  let event1 = [
    {
      // id: 1,
      original: images.gyerek_600,
      thumbnail: images.gyerek_600,
      originalAlt: " images.gyerek_600",
      thumbnailAlt: " images.gyerek_600",
    },
    {
      // id: 2,
      original: images.comment1,
      thumbnail: images.comment1,
      originalAlt: "images.comment1",
      thumbnailAlt: " images.comment1",
    },
    {
      // id: 3,
      original: images.gyerek_600,
      thumbnail: images.gyerek_600,
      originalAlt: " images.gyerek_600",
      thumbnailAlt: " images.gyerek_600",
    },
    {
      // id: 4,
      original: images.comment1,
      thumbnail: images.comment1,
      originalAlt: " images.comment1",
      thumbnailAlt: " images.comment1",
    },

    {
      // id: 5,
      original: images.gyerek_600,
      thumbnail: images.gyerek_600,
      originalAlt: " images.gyerek_600",
      thumbnailAlt: " images.gyerek_600",
    },
    {
      // id: 6,
      original: images.comment1,
      thumbnail: images.comment1,
      originalAlt: " images.comment1",
      thumbnailAlt: "images.comment1",
    },
    {
      // id: 7,
      original: images.comment2,
      thumbnail: images.comment2,
      originalAlt: " images.comment2",
      thumbnailAlt: " images.comment2",
    },
    {
      // id: 8,
      original: images.comment4,
      thumbnail: images.comment4,
      originalAlt: " images.comment4",
      thumbnailAlt: " images.comment4",
    },
  ];

  let event2 = [
    {
      // id: 1,
      original: images.gyerek_600,
      thumbnail: images.gyerek_600,
      originalAlt: " images.gyerek_600",
      thumbnailAlt: " images.gyerek_600",
    },
    {
      // id: 2,
      original: images.comment1,
      thumbnail: images.comment1,
      originalAlt: "images.comment1",
      thumbnailAlt: " images.comment1",
    },
    {
      // id: 3,
      original: images.gyerek_600,
      thumbnail: images.gyerek_600,
      originalAlt: " images.gyerek_600",
      thumbnailAlt: " images.gyerek_600",
    },
    {
      // id: 4,
      original: images.comment1,
      thumbnail: images.comment1,
      originalAlt: " images.comment1",
      thumbnailAlt: " images.comment1",
    },

    {
      // id: 5,
      original: images.gyerek_600,
      thumbnail: images.gyerek_600,
      originalAlt: " images.gyerek_600",
      thumbnailAlt: " images.gyerek_600",
    },
    {
      // id: 6,
      original: images.comment1,
      thumbnail: images.comment1,
      originalAlt: " images.comment1",
      thumbnailAlt: "images.comment1",
    },
    {
      // id: 7,
      original: images.comment2,
      thumbnail: images.comment2,
      originalAlt: " images.comment2",
      thumbnailAlt: " images.comment2",
    },
    {
      // id: 8,
      original: images.comment4,
      thumbnail: images.comment4,
      originalAlt: " images.comment4",
      thumbnailAlt: " images.comment4",
    },
  ];

  let event3 = [
    {
      // id: 1,
      original: images.gyerek_600,
      thumbnail: images.gyerek_600,
      originalAlt: " images.gyerek_600",
      thumbnailAlt: " images.gyerek_600",
    },
    {
      // id: 2,
      original: images.comment1,
      thumbnail: images.comment1,
      originalAlt: "images.comment1",
      thumbnailAlt: " images.comment1",
    },
    {
      // id: 3,
      original: images.gyerek_600,
      thumbnail: images.gyerek_600,
      originalAlt: " images.gyerek_600",
      thumbnailAlt: " images.gyerek_600",
    },
    {
      // id: 4,
      original: images.comment1,
      thumbnail: images.comment1,
      originalAlt: " images.comment1",
      thumbnailAlt: " images.comment1",
    },

    {
      // id: 5,
      original: images.gyerek_600,
      thumbnail: images.gyerek_600,
      originalAlt: " images.gyerek_600",
      thumbnailAlt: " images.gyerek_600",
    },
    {
      // id: 6,
      original: images.comment1,
      thumbnail: images.comment1,
      originalAlt: " images.comment1",
      thumbnailAlt: "images.comment1",
    },
    {
      // id: 7,
      original: images.comment2,
      thumbnail: images.comment2,
      originalAlt: " images.comment2",
      thumbnailAlt: " images.comment2",
    },
    {
      // id: 8,
      original: images.comment4,
      thumbnail: images.comment4,
      originalAlt: " images.comment4",
      thumbnailAlt: " images.comment4",
    },
  ];

  // const [model, setModel] = useState(false);
  // const [tempImgSrc, setTempImgSrc] = useState("");

  // const getImg = (imgSrc) => {
  //   setTempImgSrc(imgSrc);
  //   setModel(true);
  // };

  return (
    <>
      {/* <Model className={model ? "model open" : "model"}>
        {event1.map((id) => {
          <>
            <FontAwesomeIcon
              className="exitBtn"
              icon={faTimes}
              onClick={() => setModel(false)}
            />
            <FontAwesomeIcon
              className="forwardBtn"
              icon={faForward}
              onClick={nextSlide && console.log("next", nextSlide)}
            />
            <FontAwesomeIcon
              className="backwardBtn"
              icon={faBackward}
              onClick={prevSlide}
            />
            <img src={tempImgSrc} key={id} alt="img" />
          </>;
        })}
      </Model> */}
      <BackColor className="adultEvent">
        <Container>
          <Title>{i18n.t("adultEvents.firstEvent.adultEventTitle")}</Title>

          <Text>{i18n.t("adultEvents.firstEvent.adultEventDescription")}</Text>
          <ImageGallery items={event1} lazyLoad={true} showThumbnails={true} />
          {/* <ImgParent>
            {event1.map((item) => {
              return (
                <ImgChild key={item.id} onClick={() => getImg(item.imgSrc)}>
                  <ImgBox src={item.imgSrc} alt="img" />
                  <ImgTitle>{item.title}</ImgTitle>
                </ImgChild>
              );
            })}
          </ImgParent> */}
        </Container>
      </BackColor>

      <Container className="adjust bottom">
        <Title className="white">
          {i18n.t("adultEvents.secondEvent.adultEventTitle")}
        </Title>

        <Text>{i18n.t("adultEvents.secondEvent.adultEventDescription")}</Text>
        <ImageGallery items={event2} lazyLoad={true} showThumbnails={true} />
        {/* <ImgParent>
          {event2.map((item) => {
            return (
              <ImgChild key={item.id} onClick={() => getImg(item.imgSrc)}>
                <ImgBox src={item.imgSrc} alt="img" />
                <ImgTitle>{item.title}</ImgTitle>
              </ImgChild>
            );
          })}
        </ImgParent> */}
      </Container>

      <BackColor className="adultEvent">
        <Container className="adjust">
          <Title>{i18n.t("adultEvents.triedEvent.adultEventTitle")}</Title>

          <Text>{i18n.t("adultEvents.triedEvent.adultEventDescription")}</Text>
          <ImageGallery items={event3} lazyLoad={true} showThumbnails={true} />
          {/* <ImgParent>
            {event3.map((item) => {
              return (
                <ImgChild key={item.id} onClick={() => getImg(item.imgSrc)}>
                  <ImgBox src={item.imgSrc} alt="img" />
                  <ImgTitle>{item.title}</ImgTitle>
                </ImgChild>
              );
            })}
          </ImgParent> */}
        </Container>
      </BackColor>
    </>
  );
};
export default AdultEvents;
