import { Link } from "react-router-dom";
import Logo from "./../assets/logo.svg";
import SubPageImg from "./../assets/subpageImg.jpg";
import "./SubPage.css";

export default function EstateLaw() {
  return (
    <div className="subpage__section">
      <Link to="/">
        <img className="logoSubPage" src={Logo} />
      </Link>
      <div className="subpageInfo__section">
        <div className="firstSection">
          <h2 className="subpageTitle">Prawo Nieruchomości</h2>
          <hr className="hrSubPage" />
          <p>
            W mojej kancelarii zajmuję się doradztwem prawnym przy transakcjach
            dotyczących zakupu, sprzedaży oraz najmu nieruchomości, dbając o
            zgodność z przepisami prawa. Reprezentuję klientów w sporach
            dotyczących prawa własności, zasiedzenia oraz zniesienia
            współwłasności. Dodatkowo, pomagam w sprawach związanych z
            użytkowaniem wieczystym, służebnościami oraz roszczeniami
            wynikającymi z naruszenia prawa do nieruchomości.
          </p>
          <img className="imgSubPage" src={SubPageImg} />
        </div>
        <div className="secondSection">
          <h2 className="secondTitle">
            Moja pomoc w zakresie prawa nieruchomości obejmuje:
          </h2>
          <hr className="hrSubPage" />
          <ul className="ulSubPage">
            <li>
              doradztwo prawne przy zakupie, sprzedaży oraz najmie
              nieruchomości,
            </li>
            <li>
              sporządzanie i opiniowanie umów deweloperskich, sprzedaży oraz
              najmu,
            </li>
            <li>
              pomoc w sprawach dotyczących użytkowania wieczystego, służebności
              oraz hipotek,
            </li>
            <li>
              reprezentację w sprawach związanych z prawem własności,
              zasiedzeniem oraz zniesieniem współwłasności,
            </li>
            <li>
              wsparcie w postępowaniach dotyczących roszczeń o naruszenie
              posiadania lub prawa do nieruchomości,
            </li>
            <li>
              prowadzenie spraw związanych z inwestycjami budowlanymi oraz
              zagospodarowaniem przestrzennym.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
