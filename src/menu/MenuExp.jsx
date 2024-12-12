import {  Link } from "react-router-dom";
import "./css/MenuExp.css";

export default function MenuExp() {
  return (
    <div className="menuExpSection">
      <ul className="menuExpUl">
        <hr />
        <li className="lawMenu">
          <Link className="lawLink" to="/prawo-cywilne">
            Prawo Cywilne
          </Link>
        </li>
        <hr />
        <li className="lawMenu">
          <Link className="lawLink" to="/prawo-rodzinne">
            Prawo Rodzinne
          </Link>
        </li>
        <hr />
        <li className="lawMenu">
          <Link className="lawLink" to="/prawo-gospodarcze">
            Prawo Gospodarcze
          </Link>
        </li>
        <hr />
        <li className="lawMenu">
          <Link className="lawLink" to="/prawo-pracy">
            Prawo Pracy
          </Link>
        </li>
        <hr />
        <li className="lawMenu">
          <Link className="lawLink" to="/prawo-nieruchomosci">
            Prawo Nieruchomości
          </Link>
        </li>
        <hr />
        <li className="lawMenu">
          <Link className="lawLink" to="/prawo-danych">
            Prawo Ochrony Danych Osobowych
          </Link>
        </li>
      </ul>
    </div>
  );
}
