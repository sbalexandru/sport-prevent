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
`;

export const Contact = styled.div`
  width: 10rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const Icon = styled.h2`
  color: green;
`;

export const Title = styled.h2`
  color: red;
`;

export const Creator = styled.div`
  color: #ffffff;
  position: absolute;
  bottom: 0;
  right: 2%;
`;
