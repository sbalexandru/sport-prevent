import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;
`;

export const BackColor = styled.div`
  width: 100%;
  clip-path: polygon(0 6%, 100% 0, 100% 100%, 0 90%);
  background-color: #252525;
`;

export const Title = styled.h2`
  text-align: center;
  color: #ffffff;
  padding-top: 50px;
`;

export const Parent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 60px;
  margin: auto;
`;

export const Child = styled.div`
  border: 1px solid black;
  margin: 20px;
  position: relative;
`;

export const Section = styled.div`
  height: 40px;
  color: #ffffff;
  text-align: right;
  padding-right: 5%;
  background-color: #e81b9686;
  z-index: 9;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  p {
    font-size: 3rem;
    padding-top: 2%;
  }
`;

export const ImgSection = styled.img`
  width: 55rem;
  height: 337;
  z-index: 1;
`;
