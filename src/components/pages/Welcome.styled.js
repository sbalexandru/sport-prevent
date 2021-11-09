import styled from "styled-components";
import { images } from "../../img/Images";

export const Container = styled.div`
  width: 80%;
  height: 100vh;
`;

export const BackImg = styled.div`
  width: auto;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 124px;
  animation: animate 16s ease-in-out infinite;
  @media (max-width: 768px) {
    width: auto;
  }
  @keyframes animate {
    0%,
    100% {
      background-image: url(${images.bgImg1});
    }
    33% {
      background-image: url(${images.bgImg2});
    }
    66% {
      background-image: url(${images.bgImg3});
    }
    /* 75% {
      background-image: url(${images.bgImg1});
    } */
  }
`;
