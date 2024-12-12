import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import civilIcon from "./../assets/icons/civilIcon.svg";
import economIcon from "./../assets/icons/economicIcon.svg";
import estateIcon from "./../assets/icons/estateIcon.svg";
import familyIcon from "./../assets/icons/familyIcon.svg";
import jobIcon from "./../assets/icons/jobIcon.svg";
import dataIcon from "./../assets/icons/personaldataIcon.svg";
import "./css/Expertise.css";

export default function Expertise() {

  return (
    <div className="expertiseSection" id="expertise">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="expertiseTitle">
          Zapoznaj się z moimi obszarami specjalizacji
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="gridSection">
          <div className="gridElement">
            <img className="gridImg" src={civilIcon} alt="civil icon"/>
            <Link className="lawLink" to="/prawo-cywilne">
              <h3>Prawo Cywilne</h3>
            </Link>
            <p>
              Zajmuję się sprawami dotyczącymi sporządzania i negocjacji umów,
              dochodzenia roszczeń oraz odszkodowań, a także ochroną praw
              osobistych. Reprezentuję klientów w sprawach cywilnych przed sądem
              oraz podczas mediacji.
            </p>
          </div>
          <div className="gridElement">
            <img className="gridImg" src={familyIcon} alt="family icon"/>
            <Link className="lawLink" to="/prawo-rodzinne">
              <h3>Prawo Rodzinne</h3>
            </Link>
            <p>
              Pomagam klientom w kwestiach rozwodowych, ustaleniu opieki nad
              dziećmi, alimentów oraz podziału majątku. Zajmuję się również
              sporami rodzinnymi, zapewniając wsparcie w trudnych sytuacjach
              życiowych.
            </p>
          </div>
          <div className="gridElement">
            <img className="gridImg" src={economIcon} alt="economic icon"/>
            <Link className="lawLink" to="/prawo-gospodarcze">
              <h3>Prawo Gospodarcze</h3>
            </Link>
            <p>
              Doradzam firmom w zakresie tworzenia umów handlowych,
              przekształceń spółek oraz sporów gospodarczych. Wspieram
              przedsiębiorstwa na każdym etapie ich działalności, dbając o
              zgodność z przepisami prawnymi.
            </p>
          </div>
          <div className="gridElement">
            <img className="gridImg" src={jobIcon} alt="job icon"/>
            <Link className="lawLink" to="/prawo-pracy">
              <h3>Prawo Pracy</h3>
            </Link>
            <p>
              Reprezentuję zarówno pracowników, jak i pracodawców w sprawach
              dotyczących umów o pracę, zwolnień, sporów pracowniczych oraz
              mobbingu. Doradzam w zakresie praw i obowiązków wynikających z
              kodeksu pracy.
            </p>
          </div>
          <div className="gridElement">
            <img className="gridImg" src={estateIcon} alt="estate icon"/>
            <Link className="lawLink" to="/prawo-nieruchomosci">
              <h3> Prawo Nieruchomości</h3>
            </Link>
            <p>
              Oferuję kompleksową pomoc prawną w zakresie kupna, sprzedaży,
              wynajmu nieruchomości oraz sporów związanych z prawem własności.
              Pomagam w sporządzaniu umów, negocjacjach oraz prowadzeniu spraw
              sądowych dotyczących nieruchomości.
            </p>
          </div>
          <div className="gridElement">
            <img className="gridImg" src={dataIcon} alt="data icon"/>
            <Link className="lawLink" to="/prawo-danych">
              <h3>Prawo Ochrony Danych Osobowych</h3>
            </Link>
            <p>
              Zajmuję się doradztwem w zakresie przepisów dotyczących ochrony
              danych osobowych (RODO). Pomagam firmom dostosować się do wymogów
              prawnych, sporządzać polityki prywatności oraz chronić dane
              klientów.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
