import styled from "styled-components";

export const NavBar = styled.div`
  position: fixed;
  width: 100%;
  background: transparent;
  margin: 0 auto;
  min-height: 6rem;
  top: 0;
  z-index: 999;
  transition: all 0.3s;
  &.active {
    transition: all 0.3s;
    background: #e81b96e1;
  }
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageImage = styled.img`
  width: 32rem;
  height: 8rem;
`;

export const BtnContainer = styled.div`
  display: inline;
  display: flex;
`;

export const SectionBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 3rem;
  border: 1px solid black;
  cursor: pointer;
  margin: 5px;
  background-color: #ffffff;
  border-radius: 3px;
  transition-duration: 0.4s;
  &:hover {
    background-color: #ddb6cde1;
  }
  p {
    font-size: 1.2rem;
  }
`;

export const LanguageBtn = styled.div`
  margin: 5px;
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
`;
