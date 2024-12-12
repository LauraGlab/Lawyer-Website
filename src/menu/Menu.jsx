import { useState, useEffect, useRef } from "react";
import MenuExp from "./MenuExp.jsx";
import ArrowDownIcon from "./../assets/icons/icon-arrow-down.svg";
import ArrowUpIcon from "./../assets/icons/icon-arrow-up.svg";
import CloseIcon from "./../assets/icons/closeIcon.svg";
import "./css/Menu.css";

export default function Menu({ onClose }) {
  const [animation, setAnimation] = useState(false);
  const [showExp, setShowExp] = useState(false);
  let menuRef = useRef();
  const onCloseAll = () => {
    setAnimation(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onCloseAll();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [onCloseAll]);

  const handleToggle = () => {
    setShowExp(!showExp);
  }

  return (
    <>
      <div className={`background ${animation ? "close" : ""}`}></div>
      <div className={`menu2Section ${animation ? "close" : ""}`} ref={menuRef}>
        <img
          className="closeIcon"
          src={CloseIcon}
          aria-label="close menu"
          onClick={() => onCloseAll()}
        />
        <ul className="menu2Ul">
          <li className="menu2Li">
            <button
              className="menu2Btn"
              onClick={() => {
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
                onCloseAll();
              }}
            >
              HOME
            </button>
          </li>
          <hr />
          <li className="menu2Li">
            <button
              className="menu2Btn"
              onClick={() => {
                const element = document.getElementById("mission");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
                onCloseAll();
              }}
            >
              MISJA
            </button>
          </li>
          <hr />
          <li className="menu2LiSideMenu">
            <div className="menu2LiSideMenuBtns">
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
              <button className="showExpBtn" onClick={() => handleToggle()}>
                {showExp ? (
                  <img
                    src={ArrowUpIcon}
                    aria-label="open side-menu"
                    alt="arrow up icon"
                  />
                ) : (
                  <img
                    src={ArrowDownIcon}
                    aria-label="close side-menu"
                    alt="arrow down icon"
                  />
                )}
              </button>
            </div>
            {showExp === true && (
              <MenuExp
                onClose={() => {
                  setShowExp(false);
                }}
              />
            )}
          </li>
          <hr />
          <li className="menu2Li">
            <button
              className="menu2Btn"
              onClick={() => {
                const element = document.getElementById("about");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
                onCloseAll();
              }}
            >
              O MNIE
            </button>
          </li>
          <hr />
          <li className="menu2Li">
            <button
              className="menu2Btn"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
                onCloseAll();
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
