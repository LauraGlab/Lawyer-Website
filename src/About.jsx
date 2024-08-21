import AboutImg from "./assets/aboutImg.png";
import "./About.css";

function About() {
  
  return (
    <div className="about__section" id="about">
      <div className="aboutText">
        <small className="smallAbout">Prawnik</small>
        <h2 className="h2About">Martyna Winiarska</h2>
        <hr className="hrAbout" />
        <p className="pAbout">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta natus
          voluptatibus, accusamus earum praesentium ipsam vero nesciunt quaerat
          odit excepturi dolore deleniti voluptas voluptatum illum dicta
          consequatur adipisci id expedita.
        </p>
      </div>
      <img className="aboutImg" src={AboutImg} alt="Woman lawyer" />
    </div>
  );
}

export default About;
