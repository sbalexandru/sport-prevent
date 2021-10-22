import styled from "styled-components";
import { images } from "../../img/Images";

export const BackImg = styled.div`
  width: auto;
  height: 100vh;
  background-image: url(${images.bgImg});
  background-position: left;
  background-size: cover;
  padding-top: 124px;
  @media (max-width: 768px) {
    width: auto;
  }
`;

export const Container = styled.div`
  width: 125rem;
  min-height: 150rem;
  margin: auto;
  font-size: 1.5rem;
  border: 1px solid green;
`;

export const PageImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
`;
