import { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/logo.svg";
import SubPageImg from "./../assets/subpageImg.jpg";
import "./SubPage.css";

export default function CivilLaw() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="subpage__section">
      <Link to="/">
        <img className="logoSubPage" src={Logo} />
      </Link>
      <div className="subpageInfo__section">
        <div className="firstSection">
          <h2 className="subpageTitle">Prawo Cywilne</h2>
          <hr className="hrSubPage" />
          <p>
            W mojej kancelarii zajmuję się kompleksową obsługą spraw z zakresu
            prawa cywilnego, w tym sporządzaniem i analizą umów, dochodzeniem
            roszczeń oraz reprezentacją klientów w postępowaniach sądowych.
            Pomagam w rozwiązywaniu sporów dotyczących zobowiązań, odszkodowań
            oraz ochrony dóbr osobistych. Moim celem jest zapewnienie skutecznej
            ochrony praw klientów oraz wsparcie w negocjacjach i mediacjach.
          </p>
          <img className="imgSubPage" src={SubPageImg} />
        </div>
        <div className="secondSection">
          <h2 className="secondTitle">
            Moja pomoc w zakresie prawa cywilnego obejmuje:
          </h2>
          <hr className="hrSubPage" />
          <ul className="ulSubPage">
            <li>sporządzanie i opiniowanie umów cywilnoprawnych,</li>
            <li>
              doradztwo w sprawach dotyczących praw własności oraz zobowiązań,
            </li>
            <li>
              prowadzenie spraw sądowych związanych z dochodzeniem roszczeń
              cywilnych,
            </li>
            <li>
              reprezentację klientów w sprawach o odszkodowania i
              zadośćuczynienia,
            </li>
            <li>pomoc w sprawach spadkowych,podziału majątku oraz ustalania praw do nieruchomości,</li>
            <li>
              mediacje i negocjacje mające na celu polubowne rozwiązywanie
              sporów.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
