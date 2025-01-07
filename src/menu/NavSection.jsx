import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import MenuList from "./MenuList";
import LogoSection from "./LogoSection";
import Menu from "./Menu";
import "./css/NavSection.css";

export default function NavSection({ showMenu, onToggleMenu }) {
  return (
    <nav className="navBarSection" id="navBar">
      <HamburgerMenu onToggle={onToggleMenu} showMenu={showMenu} />
      {showMenu && <Menu onClose={onToggleMenu} />}
      <MenuList />
      <LogoSection />
    </nav>
  );
};
