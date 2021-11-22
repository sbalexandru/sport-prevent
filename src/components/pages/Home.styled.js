import styled from "styled-components";
import { images } from "../../img/Images";

export const Container = styled.div`
  width: auto;
  height: 100vh;
`;

export const BackImg = styled.div`
  width: auto;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 124px;
  /* background-image: url(${images.Homeback_123}); */
  animation: imgSlider 16s ease-in-out infinite;
  -webkit-animation: imgSlider 16s ease-in-out infinite;
  -moz-animation: imgSlider 16s ease-in-out infinite;

  @keyframes imgSlider {
    0%,
    100% {
      -moz-background-image: url(${images.bgImg1});
      -webkit-background-image: url(${images.bgImg1});
      background-image: url(${images.bgImg1});
    }
    33% {
      -moz-background-image: url(${images.bgImg2});
      -webkit-background-image: url(${images.bgImg2});
      background-image: url(${images.bgImg2});
    }
    66% {
      -moz-background-image: url(${images.bgImg3});
      -webkit-background-image: url(${images.bgImg3});
      background-image: url(${images.bgImg3});
    }
  }
  @-webkit-keyframes imgSlider {
    0%,
    100% {
      -moz-background-image: url(${images.bgImg1});
      -webkit-background-image: url(${images.bgImg1});
      background-image: url(${images.bgImg1});
    }
    33% {
      -moz-background-image: url(${images.bgImg2});
      -webkit-background-image: url(${images.bgImg2});
      background-image: url(${images.bgImg2});
    }
    66% {
      -moz-background-image: url(${images.bgImg3});
      -webkit-background-image: url(${images.bgImg3});
      background-image: url(${images.bgImg3});
    }
  }
  @-webkit-keyframes imgSlider {
    0%,
    100% {
      -moz-background-image: url(${images.bgImg1});
      -webkit-background-image: url(${images.bgImg1});
      background-image: url(${images.bgImg1});
    }
    33% {
      -moz-background-image: url(${images.bgImg2});
      -webkit-background-image: url(${images.bgImg2});
      background-image: url(${images.bgImg2});
    }
    66% {
      -moz-background-image: url(${images.bgImg3});
      -webkit-background-image: url(${images.bgImg3});
      background-image: url(${images.bgImg3});
    }
  }
  @media (max-width: 768px) {
    width: auto;
  }
`;
