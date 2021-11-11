import React, { useState, useEffect } from "react";
import {
  Container,
  SelectedValue,
  DropDownItem,
  DropDownWrap,
} from "./Dropdown.styled";
import i18n from "../../i18n";
import { images } from "../../img/Images";

const DropDown = ({ values }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(values[0]);

  const handleValueChange = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };
  useEffect(() => {
    // console.log(changeLanguage());
  });
  const changeLanguage = (ln) => {
    return () => {
      i18n.changeLanguage(ln);
    };
  };

  return (
    <Container>
      <SelectedValue onClick={() => setIsOpen(!isOpen)}>
        {selectedValue}
      </SelectedValue>
      {isOpen && (
        <DropDownWrap>
          <DropDownItem
            onClick={() => handleValueChange("HU") & changeLanguage("hu")}
          >
            <img src={images.hu} alt="hu" />

            <strong>HU</strong>
          </DropDownItem>
          <DropDownItem
            onClick={() => handleValueChange("RO") & changeLanguage("ro")}
          >
            <img src={images.ro} alt="ro" />

            <strong>RO</strong>
          </DropDownItem>

          <DropDownItem
            onClick={() => handleValueChange("EN") & changeLanguage("en")}
          >
            <img src={images.en} alt="en" />
            <strong>EN</strong>
          </DropDownItem>
        </DropDownWrap>
      )}
    </Container>
  );
};

export default DropDown;
