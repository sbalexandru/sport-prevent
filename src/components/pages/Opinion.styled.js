import styled from "styled-components";

export const Container = styled.div`
  width: 50%;

  margin: auto;
  position: relative;
  padding-bottom: 70px;
`;

export const Title = styled.h2`
  color: black;
  text-align: center;
  padding: 4rem;
`;

export const Child = styled.div`
  width: 50%;
  height: 90%;
  padding-bottom: 50px;
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
