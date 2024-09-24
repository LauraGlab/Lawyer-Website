import { Link } from "react-router-dom";
import Logo from "./../assets/logo.svg";
import SubPageImg from "./../assets/subpageImg.jpg";
import "./SubPage.css";

export default function EmployLaw() {
  return (
    <div className="subpage__section">
      <Link to="/">
        <img className="logoSubPage" src={Logo} />
      </Link>
      <div className="subpageInfo__section">
        <div className="firstSection">
          <h2 className="subpageTitle">Prawo Pracy</h2>
          <hr className="hrSubPage" />
          <p>
            W mojej kancelarii zajmuję się doradztwem w sprawach dotyczących
            nawiązywania i rozwiązywania umów o pracę, w tym sporami o niezgodne
            z prawem zwolnienia. Reprezentuję klientów w postępowaniach
            dotyczących mobbingu, dyskryminacji oraz innych naruszeń praw
            pracowniczych. Dodatkowo, przygotowuję i opiniuję regulaminy pracy
            oraz wspieram przedsiębiorców w kwestiach związanych z reorganizacją
            zakładów pracy i zwolnieniami grupowymi.
          </p>
          <img className="imgSubPage" src={SubPageImg} />
        </div>
        <div className="secondSection">
          <h2 className="secondTitle">
            Moja pomoc w zakresie prawa pracy obejmuje:
          </h2>
          <hr className="hrSubPage" />
          <ul className="ulSubPage">
            <li>
              doradztwo w sprawach dotyczących nawiązywania, zmiany i
              rozwiązywania umów o pracę,
            </li>
            <li>
              reprezentację w sporach pracowniczych, w tym w sprawach o
              przywrócenie do pracy i odszkodowania,
            </li>
            <li>
              pomoc w sporach dotyczących mobbingu, dyskryminacji oraz innych
              naruszeń praw pracowniczych,
            </li>
            <li>
              sporządzanie oraz opiniowanie regulaminów pracy, wynagrodzeń i
              innych dokumentów wewnętrznych,
            </li>
            <li>
              wsparcie w sprawach związanych z czasem pracy, wynagrodzeniem oraz
              urlopami,
            </li>
            <li>
              wsparcie w sprawach związanych z czasem pracy, wynagrodzeniem oraz
              urlopami,
            </li>
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
