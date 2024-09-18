import "./NavBar.css";

export default function NavBar() {

  return (
    <>
      <aside>
        <nav className="navBar__section" id="navBar">
          <ul className="menu__section">
            <div className="link1__section">
              <li>
                <button
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
                  onClick={() => {
                    const element = document.getElementById("mission");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Mission
                </button>
              </li>
            </div>
            <div className="link2__section">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("about");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Contact
                </button>
              </li>
            </div>
          </ul>
          <div className="logo__section">
            <div className="logo" alt="image of logo" />
          </div>
          <div className="number__section">+123-456-789</div>
        </nav>
      </aside>
    </>
  );
}

