import { useEffect } from "react";
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
        "; background: padding:5px 0; border-radius: 5px; font-weight: bold; background-color: #897455;",
    ]);
   });

  return (
    <div className="app">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="main">
        <Mission name="mission" />
        <About name="about" />
        <Contact name="contact" />
        <Footer />
      </div>
    </div>
  );
}
export default App;
