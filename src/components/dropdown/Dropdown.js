import React, { useState } from "react";
import {
  Container,
  SelectedValue,
  DropDownItem,
  DropDownWrap,
} from "./Dropdown.styled";
import { images } from "../../img/Images";

const DropDown = ({ values }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(values[0]);

  const handleValueChange = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <Container>
      <SelectedValue onClick={() => setIsOpen(!isOpen)}>
        {selectedValue}
      </SelectedValue>
      {isOpen && (
        <DropDownWrap>
          <DropDownItem onClick={() => handleValueChange("HU")}>
            <img src={images.hu} alt="hu" />
            <strong>HU</strong>
          </DropDownItem>
          <DropDownItem onClick={() => handleValueChange("RO")}>
            <img src={images.ro} alt="ro" />
            <strong>RO</strong>
          </DropDownItem>

          <DropDownItem onClick={() => handleValueChange("EN")}>
            <img src={images.en} alt="en" />
            <strong>EN</strong>
          </DropDownItem>
        </DropDownWrap>
      )}
    </Container>
  );
};

export default DropDown;
