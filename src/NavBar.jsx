import "./NavBar.css";

function NavBar() {

  return (
    <>
      <aside>
        <nav className="navBar__section">
          <ul className="menu__section">
            <li>
              <button
                onClick={() => {
                  const element = document.getElementById("navBar");
                  element?.scrollIntoView({
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
export default NavBar;
