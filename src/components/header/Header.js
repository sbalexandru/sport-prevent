import React, { useState } from "react";

import "./Header.css";

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
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className="container">
        <div>
          <p>Sport Prevent</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
