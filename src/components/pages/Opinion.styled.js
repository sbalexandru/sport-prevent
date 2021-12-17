import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;
  position: relative;
  padding-bottom: 70px;

  .slick-next,
  .slick-prev {
    color: #5a5a5a;
    width: 7.5rem;
    height: 7.5rem;
    cursor: pointer;
    border-radius: 50%;
    z-index: 99;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
    top: 45%;
    &:hover {
      background-color: #fbfbfb;
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
        rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
        rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
        rgba(0, 0, 0, 0.07) 0px 32px 64px;
    }
  }

  @media (max-width: 768px) {
    width: 80%;
    .slick-next,
    .slick-prev {
      width: 4rem;
      height: 4rem;
    }
  }
  @media (max-width: 360px) {
    height: 400px;
  }
`;

export const Title = styled.h2`
  color: black;
  text-align: center;
  padding: 4rem;
`;

export const Child = styled.div`
  padding-bottom: 50px;
  position: relative;
  text-overflow: ellipsis;
  overflow: hidden;

  &.slide {
    transform: scale(0.7);
    transition: transform 300ms;
    opacity: 0.5;
  }

  &.activeSlide {
    transform: scale(1);
    opacity: 1;
  }
  @media (max-width: 768px) {
    padding: 30px 0 30px 0;
    &.slide {
      transform: scale(0.2);
      transition: transform 300ms;
      opacity: 0.5;
    }
    &.activeSlide {
      transform: scale(1);
      opacity: 1;
    }
  }

  @media (max-width: 360px) {
    width: 80%;
    &.slide {
      transform: scale(0.1);
      transition: transform 300ms;
      opacity: 0.5;
      width: 10px;
    }
    &.activeSlide {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const ImgChild = styled.img`
  width: 100%;
  height: auto;
`;

export const Text = styled.p`
  position: absolute;
  width: 38%;
  height: 45%;
  /* border: 1px solid black; */
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 0.9rem;
  &.first {
    left: 48%;
    right: 15%;
    top: 15%;
    bottom: 27%;
  }
  &.second {
    left: 45%;
    right: 15%;
    top: 19%;
    bottom: 23%;
  }
  &.triad {
    left: 17%;
    right: 45%;
    top: 18%;
    bottom: 17%;
  }
  &.four {
    left: 17%;
    right: 45%;
    top: 18%;
    bottom: 17%;
  }
  &.five {
    left: 45%;
    right: 15%;
    top: 21%;
    bottom: 23%;
  }
  @media (max-width: 760px) {
    font-size: 1.2rem;

    &.first {
      left: 48%;
      right: 15%;
      top: 25%;
      bottom: 27%;
    }
    &.second {
      left: 45%;
      right: 15%;
      top: 28%;
      bottom: 23%;
    }
    &.triad {
      left: 17%;
      right: 45%;
      top: 25%;
      bottom: 17%;
    }
    &.four {
      left: 17%;
      right: 45%;
      top: 24%;
      bottom: 17%;
    }
    &.five {
      left: 45%;
      right: 15%;
      top: 29%;
      bottom: 23%;
    }
  }
  @media (max-width: 360px) {
  }
`;
