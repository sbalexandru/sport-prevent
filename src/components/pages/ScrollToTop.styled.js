import styled from "styled-components";
import { images } from "../../img/Images";

export const ScrollBtn = styled.div`
  &.opacity-100 {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: fixed;
    border: 3px solid #ffffff;
    right: 40px;
    bottom: 70px;
    z-index: 999;
    background-image: url(${images.UpArrow});
    background-position: cover;
    background-position: center;
    background-size: cover;
    background-color: white;
    cursor: pointer;
    transition: all 0.5s;
    :hover {
      transition: all 0.5s;
      background-color: #e81b96e1;
      border: 5px solid #e81b96e1;
    }
  }
  &.opacity-0 {
    opacity: 0;
    bottom: -60px;
    transition: all 0.3s;
  }
`;
