import { useState } from "react";
import Menu from "./Menu.jsx";
import BubbleIcon from "./../assets/icons/bubbleIcon.svg";
import ClockIcon from "./../assets/icons/clockIcon.svg";
import HamburgerIcon from "./../assets/icons/hamburger-menu.svg";
import LetterIcon from "./../assets/icons/mailIcon.svg";
import PhoneIcon from "./../assets/icons/phoneIcon.svg";
import "./css/NavBar.css";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);


  function handleToggle() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <aside>
        <div className="header__section">
          <div className="info__section">
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
              const element = document.getElementById("message");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <img className="bubble" src={BubbleIcon} alt="bubble chat icon" />
            NAPISZ WIADOMOŚĆ
          </button>
        </div>
        <nav className="navBar__section" id="navBar">
          <img
            className="hamburgerMenu__section"
            src={HamburgerIcon}
            onClick={handleToggle}
            alt="hamburger menu icon"
            aria-label="Open the menu"
          />
          {showMenu === true && (
            <Menu
              onClose={() => {
                setShowMenu(false);
              }}
            />
          )}
          <ul className="menu__section">
            <li>
              <button
                className="menuBtn"
                onClick={() => {
                  setBorder(true);
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
          <div className="logo__section">
            <div className="logo" alt="image of logo" />
          </div>
        </nav>
      </aside>
    </>
  );
}
