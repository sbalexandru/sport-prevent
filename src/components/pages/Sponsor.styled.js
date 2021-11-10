import styled from "styled-components";
import { images } from "../../img/Images";

export const Container = styled.div`
  width: 80%;
  min-height: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const BackImg = styled.div`
  width: 100%;
  background-image: url(${images.tamogatok});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
`;

export const SponsorLogo = styled.img`
  width: 20rem;
  height: 10rem;
  margin-top: 2rem;
`;

export const Title = styled.h2`
  text-align: center;
  color: #ffffff;
`;
