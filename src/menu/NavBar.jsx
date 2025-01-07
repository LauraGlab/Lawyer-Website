import { useState } from "react";
import { motion } from "framer-motion";
import Menu from "./Menu.jsx";
import BubbleIcon from "./../assets/icons/bubbleIcon.svg";
import ClockIcon from "./../assets/icons/clockIcon.svg";
import HamburgerIcon from "./../assets/icons/hamburger-menu.svg";
import LetterIcon from "./../assets/icons/mailIcon.svg";
import PhoneIcon from "./../assets/icons/phoneIcon.svg";
import "./css/NavBar.css";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <aside>
        <div className="headerSection">
          <div className="infoSection">
            <div className="phone__section">
              <img className="phone" src={PhoneIcon} alt="phone icon" />
              <p>
                123 456 789<span className="dot">•</span>
              </p>
            </div>
            <div className="email__section">
              <img className="letter" src={LetterIcon} alt="e-mail icon" />
              <p>
                martynaw@gmail.com <span className="dot">•</span>
              </p>
            </div>
            <div className="hours__section">
              <img className="clock" src={ClockIcon} alt="clock icon" />
              <p>Pon-Pt 9:00-16:00</p>
            </div>
          </div>
          <button
            className="message__section"
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <img className="bubble" src={BubbleIcon} alt="bubble chat icon" />
            NAPISZ WIADOMOŚĆ
          </button>
        </div>
        <nav className="navBarSection" id="navBar">
          <div
            className="hamburgerMenu"
            src={HamburgerIcon}
            onClick={() => handleToggle()}
            alt="hamburger menu icon"
            aria-label="Open the menu"
          >
            <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
              <g id="color" />
              <g id="hair" />
              <g id="skin" />
              <g id="skin-shadow" />
              <g id="line">
                <line x1="16" x2="56" y1="26" y2="26" fill="none" stroke="#897455" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                <line x1="16" x2="56" y1="36" y2="36" fill="none" stroke="#897455" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                <line x1="16" x2="56" y1="46" y2="46" fill="none" stroke="#897455" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
              </g>
            </svg>
          </div>
          {showMenu && (
            <Menu
              onClose={() => {
                setShowMenu(false);
              }}
            />
          )}
          <ul className="menuSection">
            <li>
              <button
                className="menuBtn"
                onClick={() => {
                  window.scroll({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="menuBtn"
                onClick={() => {
                  const element = document.getElementById("mission");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Misja
              </button>
            </li>
            <li>
              <button
                className="menuBtn"
                onClick={() => {
                  const element = document.getElementById("expertise");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Czym się zajmuję?
              </button>
            </li>
            <li>
              <button
                className="menuBtn"
                onClick={() => {
                  const element = document.getElementById("about");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                O Mnie
              </button>
            </li>
            <li>
              <button
                className="menuBtn"
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Kontakt
              </button>
            </li>
          </ul>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, delay: 1 }}
            className="logo__section"
          >
            <div className="logo" alt="image of logo" />
          </motion.div>
        </nav>
      </aside>
    </>
  );
}
