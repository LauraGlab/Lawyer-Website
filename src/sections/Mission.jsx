import "./css/Mission.css";

export default function Mission() {
  
    return (
      <div className="mission__section" id="mission">
        <h2 className="missionTitle">Dbamy o <br/>naszych klientów</h2>
        <hr className="hrMission" />
        <p className="missionText">
          Jako ambitny, młody prawnik, jestem zaangażowana w dostarczanie
          innowacyjnej i dopasowanej pomocy prawnej, aby sprostać zróżnicowanym
          potrzebom moich klientów. Skupiając się na jasnej komunikacji, empatii
          oraz dogłębnym zrozumieniu prawa, dążę do tego, aby proces prawny był
          jak najbardziej przejrzysty i bezstresowy. Zapoznaj się z oferowanymi
          przeze mnie usługami i dowiedz się, jak mogę Ci pomóc w pewnym i
          spokojnym pokonywaniu wyzwań prawnych.
        </p>
        <button
          className="missionButton"
          onClick={() => {
            const element = document.getElementById("contact");
            element?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          aria-label="Move to contact section"
        >
          <span>Kontakt</span>
        </button>
      </div>
    );
  }


