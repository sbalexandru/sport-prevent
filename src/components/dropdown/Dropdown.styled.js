import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  border-radius: 5px;
  strong {
    font-size: 1.2rem;
  }
`;

export const SelectedValue = styled.div`
  font-size: 16px;
  padding: 7px 15px;
  line-height: 24px;
  z-index: 2;
`;

export const DropDownWrap = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid #b0b0b0;
  border-radius: 5px;
  background-color: #ffffff;
  overflow: hidden;
  z-index: 1;
`;

export const DropDownItem = styled.div`
  padding: 7px 15px;
  /* line-height: 24px; */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;

  p {
    font-size: 1.3rem;
    padding: 0 0 0 3px;
  }
  img {
    width: 2rem;
    height: 2.5rem;
  }
  &:hover {
    background-color: #fafafa;
  }
`;
