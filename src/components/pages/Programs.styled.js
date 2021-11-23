import styled from "styled-components";
// import { images } from "../../img/Images";

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
  padding: 9rem 0 5rem 0;
`;

export const Parent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 13rem;
  margin: auto;
`;

export const Child = styled.div`
  border: 1px solid black;
  margin: 20px;
  position: relative;
  cursor: pointer;
`;

export const Section = styled.div`
  height: 6rem;
  color: #ffffff;
  text-align: right;
  padding-right: 5%;
  background-color: #e81b9686;
  z-index: 9;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  left: 0;
  right: 0;
  bottom: 0;
  p {
    font-size: 3rem;
    left: 20px;
  }
`;

export const ImgSection = styled.img`
  width: 55rem;
  height: 337px;
  z-index: 1;
`;
