import { useEffect } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import NavBar from "./NavBar.jsx";
import Mission from "./Mission.jsx";
import "./App.css";

function App() {

   useEffect(() => {
    console.log.apply(console, [
      "%c Designed and Coded by Laura Głąb",
      "color: white" +
        "; background: padding:5px 0; border-radius: 5px; font-weight: bold; background-color: #ff7dde;",
    ]);

     scrollSpy.update();

     return () => {
       Events.scrollEvent.remove("begin");
       Events.scrollEvent.remove("end");
     };
   });

  return (
    <div className="app">
      <div className="navBar__container">
        <NavBar />
      </div>
      <div className="main" id="containerElement">
        <Mission name="mission" />
        <About name="about" />
        <Contact name="contact" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
