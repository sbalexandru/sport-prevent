import styled from "styled-components";

export const BackColor = styled.div`
  width: 100%;
  height: auto;
  background-color: #e6d6e0;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 87%);
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
`;

export const ImgParent = styled.div`
  width: 100%auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const ImgChild = styled.div`
  width: 24%;
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
  text-align: center;
  font-size: 1.5rem;
`;
