import AboutImg from "./../assets/female-lawyer-business-suit-ai-generated_921479-6683.avif";
import "./css/About.css";

export default function About() {
  
  return (
    <div className="about__section" id="about">
      <div className="aboutImg__section">
        <img className="aboutImg" src={AboutImg} alt="Woman lawyer" />
        <div className="infoAbout">
          <p className="email">
            <span>E-mail: </span>
            martynaw@gmail.com
          </p>
          <p className="tel">
            <span>Tel: </span>
            123-456-789
          </p>
          <p className="weekdays">
            <span>Pon - Pt: </span>
            9:00 - 15:00
          </p>
        </div>
      </div>
      <div className="aboutText__section">
        <h2 className="h2About">Prawnik Martyna Winiarska</h2>
        <p className="educationAbout">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          ratione maiores amet reiciendis architecto provident sed quam. Odit
          iure provident corporis cumque, rem enim blanditiis totam consequatur
          sunt voluptatibus consequuntur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Recusandae enim nobis quae sit blanditiis culpa
          earum, sed voluptatum quos nesciunt provident omnis aspernatur, ipsam
          alias aperiam placeat optio, non laborum. <br />
        </p>
        <p className="education2About">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam sunt
          ea facere sint quaerat id, nemo animi earum voluptatem at laborum
        </p>
        <hr className="hrAbout" />
        <p className="pAbout">
          W mojej kancelarii zajmuję się przede wszystkim obsługą klientów,
          oferując im kompleksową pomoc prawną, w tym sporządzanie dokumentów i
          reprezentację w sądzie. Regularnie przygotowuję umowy oraz pisma
          procesowe, dbając o zgodność z aktualnymi przepisami prawa. Ponadto,
          prowadzę negocjacje i mediacje, dążąc do jak najkorzystniejszych
          rozwiązań dla moich klientów.
        </p>
      </div>
    </div>
  );
}
