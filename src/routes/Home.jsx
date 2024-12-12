import About from "../sections/About.jsx";
import Contact from "../sections/Contact.jsx";
import Expertise from "../sections/Expertise.jsx";
import Footer from "../sections/Footer.jsx";
import NavBar from "../menu/NavBar.jsx";
import Mission from "../sections/Mission.jsx";

export default function Home() {
  return (
    <>
      <div className="navBar">
        <NavBar />
      </div>
      <div className="main">
        <Mission />
        <Expertise />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
