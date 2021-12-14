import styled from "styled-components";

export const BackColor = styled.div`
  width: 100%;
  height: auto;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 87%);
  &.adultEvent {
    background-color: #ebebeb;
  }
  &.childEvent {
    background-color: #feecf6;
  }
  &.indorEvent {
    background-color: #979797;
  }
  &.outdorEvent {
    background-color: #e6d6e0;
  }

  @media (max-width: 360px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
`;

export const Container = styled.div`
  width: 80%;
  padding-top: 8rem;
  padding-bottom: 13rem;
  margin: auto;
  &.adjust {
    padding-top: 2rem;
  }
  &.bottom {
    padding-bottom: 3rem;
  }
  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  text-align: center;
  padding-top: 5rem;
  &.white {
    padding-top: 1rem;
  }
`;

export const Text = styled.p`
  padding: 2rem 6rem 2rem 6rem;
  line-height: 1.7;
  text-align: justify;
  font-size: 1.5rem;
  text-indent: 50px;

  @media (max-width: 768px) {
    width: 90%;
    padding: 1rem 1rem 1rem 3rem;
  }

  @media (max-width: 360px) {
    width: 100%;
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  }
`;

export const ImgParent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    /* flex-direction: column; */
  }
`;

export const ImgChild = styled.div`
  width: 24%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  transition: all 350ms ease;
  -webkit-transition: all 350ms ease;
  -moz-transition: all 350ms ease;
  transform: all 350ms ease;
  cursor: pointer;
  :hover {
    filter: opacity(0.8);
  }
  @media (max-width: 768px) {
    width: 40%;
  }

  @media (max-width: 360px) {
    width: 70%;
  }
`;

export const ImgBox = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid #ffffff;
`;

export const ImgTitle = styled.p`
  text-align: center;
  font-size: 1.5rem;
`;

export const Model = styled.div`
  &.model {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    transition: opacity 0.4s ease, visibility 0.4s ease,
      transform 0.5s ease-in-out;
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    z-index: 9999;
  }
  &.open {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
    & .exitBtn {
      position: fixed;
      top: 4rem;
      right: 4rem;
      width: 3rem;
      height: 3rem;
      padding: 5px;
      color: #ffffff;
      cursor: pointer;
    }
    .forwardBtn {
      position: fixed;
      top: 50%;
      right: 2rem;
      width: 3rem;
      height: 3rem;
      padding: 5px;
      color: #ffffff;
      cursor: pointer;
    }
    .backwardBtn {
      position: fixed;
      top: 50%;
      left: 2rem;
      width: 3rem;
      height: 3rem;
      padding: 5px;
      color: #ffffff;
      cursor: pointer;
    }
  }

  img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    display: block;
    padding: 2rem 0 2rem 0;
    margin: 0 auto;
  }
`;
