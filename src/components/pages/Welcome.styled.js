import styled from "styled-components";
import { images } from "../../img/Images";

export const Container = styled.div`
  width: 80%;
  height: 100vh;
`;

export const BackImg = styled.div`
  width: auto;
  height: 100vh;
  background-image: url(${images.bgImg1});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 124px;
  @media (max-width: 768px) {
    width: auto;
  }
`;
