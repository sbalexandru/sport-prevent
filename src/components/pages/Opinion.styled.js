import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: auto;
  position: relative;
  padding-bottom: 70px;
  .slick-next,
  .slick-prev {
    padding: 14px;
    width: 2vw;
    height: 2vw;
    cursor: pointer;
    border: none;
    border-radius: 5vw;
    background-color: #fff;
    z-index: 99 !important;
    box-shadow: rgb(35 35 35 / 50%) 0px 0px 20px 5px;
    top: 40%;
    &:hover {
      background-color: #fff;
    }
  }
  .card_container {
    padding: 10px;
  }
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 360px) {
    width: 80%;
  }
`;

export const Title = styled.h2`
  color: black;
  text-align: center;
  padding: 4rem;
`;

export const Child = styled.div`
  width: 90%;
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
`;
