import React, { useState } from "react";

import { Container, Title, Child, ImgChild, Text } from "./Opinion.styled";
import i18n from "../../i18n";

import Slider from "react-slick";
import { images } from "../../img/Images";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faAngleRight}
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faAngleLeft}
      className={className}
      onClick={onClick}
    />
  );
}

const OpinionSection = () => {
  const sliderContetnt = [
    {
      index: 0,
      classtag: "first",
      img: images.comment1,
      text: i18n.t("opinion.firstOpinion"),
    },
    {
      index: 1,
      classtag: "second",
      img: images.comment2,
      text: i18n.t("opinion.secondOpinion"),
    },
    {
      index: 2,
      classtag: "triad",
      img: images.comment3,
      text: i18n.t("opinion.triedOpinion"),
    },
    {
      index: 3,
      classtag: "four",
      img: images.comment4,
      text: i18n.t("opinion.firstOpinion"),
    },
    {
      index: 4,
      classtag: "five",
      img: images.comment5,
      text: i18n.t("opinion.fiveOpinion"),
    },
  ];

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    arrows: true,
    autoplay: true,
    dots: true,
    centerMode: true,
    infinite: true,
    lazyLoad: true,
    autoplaySpeed: 4000,
    centerPadding: 0,
    cssEase: "linear",
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (oldIndex, newIndex) => setImageIndex(newIndex),
    afterChange: (oldIndex, newInde) => setImageIndex(oldIndex),
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
            {console.log(index, imageIndex)}
            <ImgChild src={img} alt={img} />
            <Text className={classtag}>{text}</Text>
          </Child>
        ))}
      </Slider>
    </Container>
  );
};
export default OpinionSection;
