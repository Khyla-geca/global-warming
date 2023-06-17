import React from "react";

import HamburgerCSS from "./Hamburger.module.css";

const Hamburger = ({ isActive, setIsActive }) => {
  return (
    <div
      onClick={() => {
        setIsActive((prevState) => !prevState);
      }}
      className={`${HamburgerCSS.hamburger} ${isActive && HamburgerCSS.active}`}
    >
      <hr className={HamburgerCSS.hamburgerLine} />
      <hr className={HamburgerCSS.hamburgerLine} />
    </div>
  );
};

export default Hamburger;