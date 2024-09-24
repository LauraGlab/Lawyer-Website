import { Link } from "react-router-dom";
import Logo from "./../assets/logo.svg";
import SubPageImg from "./../assets/subpageImg.jpg";
import "./SubPage.css";

export default function FamilyLaw() {
  return (
    <div className="subpage__section">
      <Link to="/">
        <img className="logoSubPage" src={Logo} />
      </Link>
      <div className="subpageInfo__section">
        <div className="firstSection">
          <h2 className="subpageTitle">Prawo Rodzinne</h2>
          <hr className="hrSubPage" />
          <p>
            W mojej kancelarii prowadzę sprawy o rozwód, separację oraz podział
            majątku, dbając o interesy moich klientów na każdym etapie
            postępowania. Udzielam wsparcia w sprawach dotyczących władzy
            rodzicielskiej, ustalania kontaktów z dziećmi oraz alimentów.
            Dodatkowo, pomagam w rozwiązywaniu sporów związanych z ustaleniem
            lub zaprzeczeniem ojcostwa oraz reprezentuję klientów w procesach
            adopcyjnych.
          </p>
          <img className="imgSubPage" src={SubPageImg} />
        </div>
        <div className="secondSection">
          <h2 className="secondTitle">
            Moja pomoc w zakresie prawa rodzinnego obejmuje:
          </h2>
          <hr className="hrSubPage" />
          <ul className="ulSubPage">
            <li>prowadzenie spraw o rozwód, separację oraz podział majątku,</li>
            <li>
              doradztwo i reprezentację w sprawach dotyczących władzy
              rodzicielskiej oraz ustalania kontaktów z dziećmi,
            </li>
            <li>
              pomoc w sprawach alimentacyjnych, w tym dochodzenie i egzekwowanie
              alimentów,
            </li>
            <li>
              reprezentację klientów w sprawach o odszkodowania i
              zadośćuczynienia,
            </li>
            <li>
              rozwiązywanie spraw związanych z ustaleniem lub zaprzeczeniem
              ojcostwa,
            </li>
            <li>wsparcie w procesach adopcyjnych oraz pieczy zastępczej,</li>
            <li>
              mediacje rodzinne mające na celu polubowne rozwiązywanie
              konfliktów.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
