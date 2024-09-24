import { Link } from "react-router-dom";
import Logo from "./../assets/logo.svg";
import SubPageImg from "./../assets/subpageImg.jpg";
import "./SubPage.css";

export default function EconLaw() {
  return (
    <div className="subpage__section">
      <Link to="/">
        <img className="logoSubPage" src={Logo} />
      </Link>
      <div className="subpageInfo__section">
        <div className="firstSection">
          <h2 className="subpageTitle">Prawo Gospodarcze</h2>
          <hr className="hrSubPage" />
          <p>
            W mojej kancelarii zajmuję się doradztwem przy zakładaniu,
            przekształcaniu oraz likwidacji spółek, a także przygotowuję umowy
            handlowe dostosowane do potrzeb klientów. Reprezentuję
            przedsiębiorców w sporach gospodarczych przed sądami oraz w
            negocjacjach z partnerami biznesowymi. Ponadto, wspieram klientów w
            sprawach dotyczących odpowiedzialności członków zarządu i ochrony
            tajemnicy przedsiębiorstwa.
          </p>
          <img className="imgSubPage" src={SubPageImg} />
        </div>
        <div className="secondSection">
          <h2 className="secondTitle">
            Moja pomoc w zakresie prawa gospodarczego obejmuje:
          </h2>
          <hr className="hrSubPage" />
          <ul className="ulSubPage">
            <li>
              doradztwo przy zakładaniu, przekształcaniu oraz likwidacji spółek
              i innych form działalności gospodarczej,
            </li>
            <li>
              sporządzanie i opiniowanie umów handlowych, w tym kontraktów z
              partnerami biznesowymi,
            </li>
            <li>
              reprezentację w sporach gospodarczych przed sądami i arbitrażem,
            </li>
            <li>
              wsparcie w negocjacjach i mediacjach dotyczących sporów
              biznesowych,
            </li>
            <li>
              pomoc w sprawach dotyczących odpowiedzialności członków zarządu i
              organów spółek,
            </li>
            <li>
              doradztwo w zakresie prawa konkurencji, ochrony tajemnicy
              przedsiębiorstwa oraz zwalczania nieuczciwej konkurencji.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
