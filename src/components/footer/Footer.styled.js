import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
export const Icon = styled(FontAwesomeIcon)`
  color: green;
  font-size: 3rem;
  margin: 2rem;
`;

export const Title = styled.h2`
  color: red;
  padding-top: 2rem;
`;

export const Creator = styled.div`
  color: #ffffff;
  position: absolute;
  bottom: 0;
  right: 2%;
`;
