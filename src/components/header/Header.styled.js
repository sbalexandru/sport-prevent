import styled from "styled-components";

export const NavBar = styled.div`
  width: 100%;
  background: transparent;
  margin: 0 auto;
  border: 1px solid red;
  min-height: 6rem;
  top: 0;
  z-index: 999;
  .NavBar.active {
    background: linear-gradient(
      90deg,
      rgb(66, 2, 194) 0%,
      rgb(0, 78, 194) 100%
    );
  }
`;

export const Container = styled.div`
  width: 125rem;
  border: 1px solid black;
  margin: auto;
  margin-top: 2rem;
`;
