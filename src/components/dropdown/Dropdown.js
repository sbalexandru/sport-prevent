import React, { useState } from "react";
import {
  Container,
  SelectedValue,
  DropDownItem,
  DropDownWrap,
} from "./Dropdown.styled";
import "flag-icon-css/css/flag-icons.min.css";
import i18next from "i18next";
import cookies from "js-cookie";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

const DropDown = () => {
  const currentLanguage = cookies.get("i18next") || "en";
  const [isOpen, setIsOpen] = useState(false);

  const handleValueChange = () => {
    setIsOpen(false);
    refreshPage();
  };

  function refreshPage() {
    window.location.reload();
  }

  const languages = [
    {
      code: "en",
      name: "En",
      country_code: "gb",
    },
    {
      code: "hu",
      name: "Hu",
      country_code: "hu",
    },
    {
      code: "ro",
      name: "Ro",
      country_code: "ro",
    },
  ];

  return (
    <Container>
      <SelectedValue onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faGlobeAmericas} className="fontIcon" />
      </SelectedValue>

      {isOpen &&
        languages.map(({ code, name, country_code }) => (
          <DropDownWrap key={code}>
            <DropDownItem
              onClick={() =>
                i18next.changeLanguage(code) && handleValueChange()
              }
              disabled={code === currentLanguage}
            >
              <span
                className={`flag-icon flag-icon-${country_code} mx-1`}
              ></span>
              <p>{name}</p>
            </DropDownItem>
          </DropDownWrap>
        ))}
    </Container>
  );
};
export default DropDown;
