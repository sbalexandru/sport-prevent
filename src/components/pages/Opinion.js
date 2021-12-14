import React from "react";

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
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Container className="opinion-section" id="opinion">
      <Title>{i18n.t("opinion.opinionTitle")}</Title>

      <Slider {...settings}>
        <Child>
          <ImgChild src={images.comment1} />
          <Text>{i18n.t("opinion.firstOpinion")}</Text>
        </Child>

        <Child>
          <ImgChild src={images.comment5} />
          <Text className="five">{i18n.t("opinion.fiveOpinion")}</Text>
        </Child>

        <Child>
          <ImgChild src={images.comment2} />
          <Text className="second">{i18n.t("opinion.secondOpinion")}</Text>
        </Child>

        <Child>
          <ImgChild src={images.comment3} />
          <Text className="triad">{i18n.t("opinion.triedOpinion")}</Text>
        </Child>

        <Child>
          <ImgChild src={images.comment4} />
          <Text className="four">{i18n.t("opinion.fourOpinion")}</Text>
        </Child>
      </Slider>
    </Container>
  );
};
export default OpinionSection;
