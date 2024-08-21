import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import Logo from "./assets/logo1.svg";

import "./NavBar.css";

function NavBar() {

    const handleSetActive = (to) => {
      console.log(to);
    };

  return (
    <>
      <aside>
        <nav className="navBar__section">
          <ul className="menu__section">
            <li>
              <Link
                activeClass="active"
                to="mission"
                spy={true}
                smooth={true}
                offset={70}
                hashSpy={true}
                duration={500}
                className="menuLink"
                containerId="containerElement"
                ignoreCancelEvents={true}
                onSetActive={handleSetActive}
              >
                Mission
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="menuLink"
                containerId="containerElement"
                ignoreCancelEvents={true}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="menuLink"
                containerId="containerElement"
                ignoreCancelEvents={false}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="logo__section">
            <div className="logo" alt="image of logo"/>
          </div>
          <div className="number__section">+123-456-789</div>
        </nav>
      </aside>
    </>
  );
}
export default NavBar;
