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
      <svg width="50px" height="50px" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg">
        <g id="color"/>
        <g id="hair"/>
        <g id="skin"/>
        <g id="skin-shadow"/>
        <g id="line">
          <line x1="16" x2="56" y1="26" y2="26" fill="none" stroke="#897455" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
          <line x1="16" x2="56" y1="36" y2="36" fill="none" stroke="#897455" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
          <line x1="16" x2="56" y1="46" y2="46" fill="none" stroke="#897455" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
        </g>
      </svg>
    </div>
  );
};
