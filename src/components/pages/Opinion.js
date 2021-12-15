import React, { useState } from "react";

import { Container, Title, Child, ImgChild, Text } from "./Opinion.styled";
import i18n from "../../i18n";

import Slider from "react-slick";
import { images } from "../../img/Images";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <img
      src={images.next}
      alt="next img"
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <img
      src={images.prev}
      alt="prev btn"
      className={className}
      onClick={onClick}
    />
  );
}

const OpinionSection = () => {
  const sliderContetnt = [
    {
      index: 5,
      classtag: "five",
      img: images.comment5,
      text: i18n.t("opinion.fiveOpinion"),
    },
    {
      index: 1,
      classtag: "first",
      img: images.comment1,
      text: i18n.t("opinion.firstOpinion"),
    },
    {
      index: 2,
      classtag: "second",
      img: images.comment2,
      text: i18n.t("opinion.secondOpinion"),
    },
    {
      index: 3,
      classtag: "triad",
      img: images.comment3,
      text: i18n.t("opinion.triedOpinion"),
    },
    {
      index: 4,
      classtag: "four",
      img: images.comment4,
      text: i18n.t("opinion.firstOpinion"),
    },
  ];

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <Container className="opinion-section" id="opinion">
      <Title>{i18n.t("opinion.opinionTitle")}</Title>

      <Slider {...settings}>
        {sliderContetnt.map(({ classtag, img, text, index }) => (
          <Child
            key={index}
            className={index === imageIndex ? "slide activeSlide" : "slide"}
          >
            <ImgChild src={img} alt={img} />
            <Text className={classtag}>{text}</Text>
          </Child>
        ))}
      </Slider>
    </Container>
  );
};
export default OpinionSection;
