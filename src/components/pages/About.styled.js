import styled from "styled-components";
import BgImg from "../../img/BgImg.jpg";

export const BackImg = styled.div`
  width: auto;
  height: 100vh;
  background-image: url(${BgImg});
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
