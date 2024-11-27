import { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/logo.svg";
import SubPageImg from "./../assets/subpageImg.jpg";
import "./SubPage.css";

export default function DataLaw() {
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
          <h2 className="subpageTitle">Prawo Ochrony Danych Osobowych</h2>
          <hr className="hrSubPage" />
          <p>
            W mojej kancelarii zajmuję się doradztwem w zakresie zgodności z
            przepisami RODO oraz krajowymi regulacjami dotyczącymi ochrony
            danych osobowych. Pomagam klientom w przygotowywaniu i wdrażaniu
            polityk ochrony danych oraz przeprowadzam audyty, aby ocenić ryzyko
            związane z przetwarzaniem danych. Reprezentuję również klientów w
            postępowaniach przed organami nadzoru, w tym przed Prezesem Urzędu
            Ochrony Danych Osobowych.
          </p>
          <img className="imgSubPage" src={SubPageImg} />
        </div>
        <div className="secondSection">
          <h2 className="secondTitle">
            Moja pomoc w zakresie prawa ochrony danych osobowych obejmuje:
          </h2>
          <hr className="hrSubPage" />
          <ul className="ulSubPage">
            <li>
              doradztwo w zakresie zgodności z przepisami RODO oraz krajowymi
              regulacjami dotyczącymi ochrony danych osobowych,
            </li>
            <li>
              przygotowywanie i wdrażanie polityk ochrony danych osobowych,
              procedur oraz klauzul informacyjnych,
            </li>
            <li>
              prowadzenie audytów wewnętrznych i oceny ryzyka związanego z
              przetwarzaniem danych,
            </li>
            <li>
              reprezentację przed organami nadzoru, w tym przed Prezesem Urzędu
              Ochrony Danych Osobowych (UODO),
            </li>
            <li>
              wsparcie w procesach zgłaszania naruszeń ochrony danych osobowych
              oraz zarządzania incydentami,
            </li>
            <li>
              szkolenia dla pracowników i kadry zarządzającej w zakresie ochrony
              danych osobowych.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
