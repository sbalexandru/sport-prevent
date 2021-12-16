import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 20rem;
  background-color: #252525;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
`;

export const Contact = styled.div`
  width: 10rem;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const Icon = styled.a`
  font-size: 4rem;
  margin: 2rem;
  &.facebook {
    color: #1773ea;
  }
  &.mail {
    /* border-radius: 25% 25% 25% 25%;
    background-color: red;
    padding: 3px; */
    color: #ffffff;
  }
  &.instagram {
    color: #ba009e;
  }
`;

export const Title = styled.h2`
  color: #ffffff;
  padding-top: 2rem;
`;

export const Creator = styled.div`
  color: #ffffff;
  position: absolute;
  bottom: 0;
  font-size: 2rem;
  right: 2%;
  text-align: right;
  h2 {
    font-family: "Estonia", cursive;
    font-size: 3rem;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
