import React from "react";
import { Container, Title, Child, ImgChild, Text } from "./Opinion.styled";
import i18n from "../../i18n";

import Slider from "react-slick";
import { images } from "../../img/Images";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        fontSize: "30px",
        color: "red",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
      }}
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
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus accusamus praesentium repudiandae non. Modi hic et
            ipsum ipsa nobis unde? Ab vitae reiciendis non laboriosam porro
            incidunt assumenda neque similique.
          </Text>
        </Child>

        <Child>
          <ImgChild src={images.comment5} />
          <Text className="five">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus accusamus praesentium repudiandae non. Modi hic et
            ipsum ipsa nobis unde? Ab vitae reiciendis non laboriosam porro
            incidunt assumenda neque similique.
          </Text>
        </Child>

        <Child>
          <ImgChild src={images.comment2} />
          <Text className="second">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus accusamus praesentium repudiandae non. Modi hic et
            ipsum ipsa nobis unde? Ab vitae reiciendis non laboriosam porro
            incidunt assumenda neque similique.
          </Text>
        </Child>

        <Child>
          <ImgChild src={images.comment3} />
          <Text className="triad">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus accusamus praesentium repudiandae non. Modi hic et
            ipsum ipsa nobis unde? Ab vitae reiciendis non laboriosam porro
            incidunt assumenda neque similique.
          </Text>
        </Child>

        <Child>
          <ImgChild src={images.comment4} />
          <Text className="four">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus accusamus praesentium repudiandae non. Modi hic et
            ipsum ipsa nobis unde? Ab vitae reiciendis non laboriosam porro
            incidunt assumenda neque similique.
          </Text>
        </Child>
      </Slider>
    </Container>
  );
};
export default OpinionSection;
