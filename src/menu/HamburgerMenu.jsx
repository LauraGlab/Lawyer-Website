import React from "react";
import HamburgerIcon from "./../assets/icons/hamburger-menu.svg";
import "./css/HamburgerMenu.css";

export default function HamburgerMenu({ onToggle, showMenu }) {
  return (
    <div
      className="hamburgerMenu"
      onClick={onToggle}
      aria-label="Toggle menu"
      aria-expanded={showMenu}
    >
      <img src={HamburgerIcon} alt="hamburger menu icon" />
    </div>
  );
};
