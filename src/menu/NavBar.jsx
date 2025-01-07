import { useState } from "react";
import HeaderSection from "./HeaderSection.jsx";
import NavSection from "./NavSection.jsx";
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
