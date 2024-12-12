import { Link } from "react-router-dom";
import Logo from "./../assets/logo.svg";
import "./css/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footerFirst">
        <div class="details decor">
          <img className="logoFooter" src={Logo} alt="logo icon"/>
          <p className="logoFooterText">
            Świadczę usługi prawne w biurze oraz zdalnie, dostosowując się do
            potrzeb klientów w całym kraju.
          </p>
        </div>
        <div class="details decor">
          <h3 className="titleFooter"> Dane Kontaktowe </h3>
          <p> E-mail: martyna@gmail.com</p>
          <p> Nr: +123456789</p>
          <p> Linkedin: linkedin.com/martynaw</p>
        </div>
        <div class="details">
          <h3 className="titleFooter"> Obszary specjalizacji</h3>
          <div>
            <Link className="lawLink" to="/prawo-cywilne">
              <h4>Prawo Cywilne</h4>
            </Link>
            <Link className="lawLink" to="/prawo-rodzinne">
              <h4>Prawo Rodzinne</h4>
            </Link>
            <Link className="lawLink" to="/prawo-gospodarcze">
              <h4>Prawo Gospodarcze</h4>
            </Link>
            <Link className="lawLink" to="/prawo-pracy">
              <h4>Prawo Pracy</h4>
            </Link>
            <Link className="lawLink" to="/prawo-nieruchomosci">
              <h4> Prawo Nieruchomości</h4>
            </Link>
            <Link className="lawLink" to="/prawo-danych">
              <h4>Prawo Ochrony Danych Osobowych</h4>
            </Link>
          </div>
        </div>
      </div>
      <div className="footerSecond">
        <div className="portfolioLink"> Designed and Coded by Laura Głąb</div>
      </div>
    </footer>
  );
}
