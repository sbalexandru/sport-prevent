import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  min-height: 500px;
  margin: auto;
`;

export const Title = styled.h2`
  color: black;
  text-align: center;
  padding: 4rem;
`;

export const Parent = styled.div`
  width: 100%;
  height: 50rem;
  position: relative;

  /* &.carusel {
    display: flex;
    justify-content: center;
    align-items: center;
  } */
`;

export const Child = styled.div`
  width: 50%;
  height: 90%;
  position: relative;
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
