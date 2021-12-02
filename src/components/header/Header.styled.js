import styled from "styled-components";

export const NavBar = styled.div`
  position: fixed;
  width: 100%;
  background: transparent;
  margin: 0 auto;
  min-height: 6rem;
  top: 0;
  z-index: 99;
  transition: all 0.3s;
  &.active {
    transition: all 0.3s;
    background: #e81b96e1;
  }
`;

export const Container = styled.div`
  width: 96%;
  margin: auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageImage = styled.img`
  width: 32rem;
  height: 8rem;
  @media (max-width: 760px) {
    width: 22rem;
    height: 6rem;
  }
  @media (max-width: 410px) {
    width: 18rem;
    height: 5rem;
  }
`;

export const BtnContainer = styled.div`
  display: inline;
  display: flex;
`;

export const SectionBtn = styled.div`
  text-align: center;
  width: 8.5rem;
  height: 3rem;
  border: 1px solid black;
  cursor: pointer;
  margin: 5px;
  padding-top: 4px;
  background-color: #ffffff;
  border-radius: 3px;
  transition-duration: 0.4s;
  &:hover {
    background-color: #ddb6cde1;
  }
  strong {
    font-size: 1.2rem;
  }
  @media (max-width: 996px) {
    display: none;
  }
`;

export const MeniuDropdown = styled.div`
  margin: 5px;
  font-size: 2rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.2rem;
  height: 3rem;
  border: 1px solid black;
  background-color: #ffffff;
  transition-duration: 0.4s;
  &:hover {
    background-color: #ddb6cde1;
  }
  @media (min-width: 996px) {
    display: none;
  }
`;

export const LanguageBtn = styled.div`
  margin: 5px;
  /* border-radius: 3px; */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  width: 10rem;
  height: 3rem;
  cursor: pointer;
  /* border: 1px solid black; */
  /* background-color: #ffffff; */
  /* transition-duration: 0.4s; */
  /* &:hover {
    background-color: #ddb6cde1;
  } */
`;

export const SelectedValue = styled.div`
  font-size: 16px;
  padding: 7px 15px;
  line-height: 24px;
  z-index: 2;
`;

export const DropDownWrap = styled.div`
  position: absolute;
  width: 50%;
  top: 70%;

  right: 30px;
  border: 1px solid #b0b0b0;
  border-radius: 5px;
  background-color: #ffffff;
  overflow: hidden;
  z-index: 1;
`;

export const DropDownItem = styled.div`
  padding: 7px 15px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;

  strong {
    font-size: 1.2rem;
  }
  img {
    width: 2rem;
    height: 2.5rem;
  }
  &:hover {
    background-color: #fafafa;
  }
`;
