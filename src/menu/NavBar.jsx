import { useState } from "react";
import { motion } from "framer-motion";
import HeaderSection from "./HeaderSection.jsx";
import Menu from "./Menu.jsx";
import NavSection from "./NavSection.jsx";
import BubbleIcon from "./../assets/icons/bubbleIcon.svg";
import ClockIcon from "./../assets/icons/clockIcon.svg";
import HamburgerIcon from "./../assets/icons/hamburger-menu.svg";
import LetterIcon from "./../assets/icons/mailIcon.svg";
import PhoneIcon from "./../assets/icons/phoneIcon.svg";
import "./css/NavBar.css";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside>
      <HeaderSection onScrollToSection={scrollToSection} />
      <NavSection showMenu={showMenu} onToggleMenu={toggleMenu} />
    </aside>
  );
};
