import React, { useState } from "react";
import { Container, PageImage, NavBar } from "./Header.styled";
import { images } from "../../img/Images";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <NavBar className={navbar ? "navbar active" : "navbar"}>
      <Container>
        <PageImage src={images.logo} />

        <div>
          <p>Sport Prevent</p>
        </div>
      </Container>
    </NavBar>
  );
};

export default Header;
