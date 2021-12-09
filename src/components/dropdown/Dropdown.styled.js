import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  position: relative;
  top: 25px;
  left: 0;
  right: 0;
  border: 1px solid #b0b0b0;
  border-radius: 5px;
  background-color: #ffffff;
  overflow: hidden;
  z-index: 1;
`;

export const DropDownItem = styled.button`
  padding: 7px;
  line-height: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  span {
    width: 2rem;
    height: 2.5rem;
    /* margin: 5px; */
  }
  p {
    font-size: 1.3rem;
    margin: auto;
    /* display: none; */
    padding: 3px;
  }

  &:hover {
    background-color: #fafafa;
  }
  @media (max-width: 360px) {
    p {
      display: none;
    }
  }
`;
