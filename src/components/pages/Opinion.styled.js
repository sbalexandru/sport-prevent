import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  margin: auto;
  position: relative;
  padding-bottom: 70px;
  .slick-next,
  .slick-prev {
    width: 8rem;
    height: 8rem;
    cursor: pointer;
    border-radius: 50%;
    z-index: 99 !important;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
    top: 40%;
    &:hover {
      background-color: #fbfbfb;
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
        rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
        rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
        rgba(0, 0, 0, 0.07) 0px 32px 64px;
    }
  }
  .card_container {
    padding: 10px;
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
    width: 80%;
    .slick-next,
    .slick-prev {
      width: 4rem;
      height: 4rem;
    }
  }
`;

export const Title = styled.h2`
  color: black;
  text-align: center;
  padding: 4rem;
`;

export const Child = styled.div`
  height: auto;
  padding-bottom: 50px;
  position: relative;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ImgChild = styled.img`
  width: 100%;
  height: auto;
`;

export const Text = styled.p`
  position: absolute;
  width: 38%;
  height: 40%;
  /* border: 1px solid black; */
  left: 50%;
  right: 15%;
  top: 17%;
  bottom: 17%;
  text-overflow: ellipsis;
  overflow: hidden;
  &.second {
    left: 50%;
    right: 15%;
    top: 23%;
    bottom: 23%;
  }
  &.triad {
    left: 17%;
    right: 45%;
    top: 17%;
    bottom: 17%;
  }
  &.four {
    left: 17%;
    right: 45%;
    top: 17%;
    bottom: 17%;
  }
  &.five {
    left: 50%;
    right: 15%;
    top: 28%;
    bottom: 23%;
  }
  @media (max-width: 768px) {
    /* font-size: 1rem; */
  }
  @media (max-width: 360px) {
  }
`;
