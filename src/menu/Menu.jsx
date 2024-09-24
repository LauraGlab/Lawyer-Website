import { useState, useEffect, useRef } from "react";
import MenuExp from "./MenuExp.jsx";
import ArrowUpIcon from "./../assets/icons/icon-arrow-up.svg";
import ArrowDownIcon from "./../assets/icons/icon-arrow-down.svg";
import CloseIcon from "./../assets/icons/closeIcon.svg";
import "./css/Menu.css";

export default function Menu({ onClose }) {
  const [animation, setAnimation] = useState(false);
  const [showExp, setShowExp] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        onCloseAll();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  function onCloseAll() {
    setAnimation(true);
    setTimeout(() => {
      onClose();
    }, 500);
  }

  function handleToggle() {
    setShowExp(!showExp);
  }
  return (
    <>
      <div className={`background ${animation ? "close" : ""}`}></div>
      <div
        className={`menu2__section ${animation ? "close" : ""}`}
        ref={menuRef}
      >
        <img
          className="closeIcon"
          src={CloseIcon}
          aria-label="close menu"
          onClick={onCloseAll}
        />
        <ul className="menu2Ul">
          <li>
            <button
              className="menu2Btn"
              onClick={() => {
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              HOME
            </button>
          </li>
          <hr />
          <li>
            <button
              className="menu2Btn"
              onClick={() => {
                const element = document.getElementById("mission");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              MISJA
            </button>
          </li>
          <hr />
          <li>
            <button
              className="menu2Btn"
              onClick={() => {
                const element = document.getElementById("expertise");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              CZYM SIĘ ZAJMUJĘ?
            </button>
            <button className="showExpBtn" onClick={handleToggle}>
              {showExp ? (
                <img src={ArrowUpIcon} aria-label="open side-menu" />
              ) : (
                <img src={ArrowDownIcon} aria-label="close side-menu" />
              )}
            </button>
            {showExp === true && (
              <MenuExp
                onClose={() => {
                  setShowExp(false);
                }}
              />
            )}
          </li>
          <hr />
          <li>
            <button
              className="menu2Btn"
              onClick={() => {
                const element = document.getElementById("about");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              O MNIE
            </button>
          </li>
          <hr />
          <li>
            <button
              className="menu2Btn"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              KONTAKT
            </button>
          </li>
          <hr />
        </ul>
      </div>
    </>
  );
}
