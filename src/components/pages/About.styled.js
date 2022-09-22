import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  min-height: 40rem;
  margin: auto;
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: stretch;
  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const TextArea = styled.div`
  width: 50%;
  padding-top: 2rem;
  font-size: 1.5rem;
  margin: 30px;
  h2 {
    text-align: center;
  }
  p {
    padding-top: 2rem;
    line-height: 1.7;
    text-align: justify;
  }
  @media (max-width: 860px) {
    width: 80%;
  }
  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const VideoFrame = styled.iframe`
  width: 460px;
  height: 315px;
  margin: 20px;
  @media (max-width: 760px) {
    width: 400px;
    height: 300px;
  }
`;
export const ImgBox = styled.div`
  width: 460px;
  height: 315px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    padding-top: 50px;
    width: 78%;
    height: auto;
  }
`;
