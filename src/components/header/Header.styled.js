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
    background: #ec1f85af;
  }
`;

export const Container = styled.div`
  width: 125rem;
  margin: auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
`;
