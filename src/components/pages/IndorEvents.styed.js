import styled from "styled-components";

export const BackColor = styled.div`
  width: 100%;
  height: auto;
  background-color: pink;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 87%);
`;

export const Container = styled.div`
  width: 80%;
  /* height: 100vh; */
  padding-top: 8rem;
  padding-bottom: 8rem;
  margin: auto;
`;

export const Title = styled.h2`
  text-align: center;
  color: #ffffff;
  padding-top: 50px;
`;

export const Text = styled.p`
  padding-top: 2rem;
  line-height: 1.7;
  color: #ffffff;
  text-align: justify;
  font-size: 1.5rem;
`;

export const ImgParent = styled.div`
  width: 100%auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border: 1px solid green;
`;

export const ImgChild = styled.div`
  width: 24%;
  border: 1px solid red;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
`;

export const ImgBox = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid #ffffff;
`;

export const ImgTitle = styled.p`
  color: #ffffff;
  font-size: 1.5rem;
`;
