import AboutImg from "./../assets/female-lawyer-business-suit-ai-generated_921479-6683.avif";
import "./css/About.css";

function About() {
  
  return (
    <div className="about__section" id="about">
      <div className="aboutText__section">
        <p className="lawyerAbout">prawnik</p>
        <h2 className="h2About">Martyna Winiarska</h2>
        <p className="textAbout">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam sunt
          ea facere sint quaerat id, nemo animi earum voluptatem at laborum
        </p>
      </div>
      <div className="aboutImg__section">
        <img className="aboutImg" src={AboutImg} alt="Woman lawyer" />
      </div>
      <div className="aboutText__section margin">
        <div>
          <h4 className="educationTitle">Doświadczenie</h4>
          <p className="educationAbout">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            ratione maiores amet reiciendis architecto provident sed quam. Odit
            iure provident corporis cumque, rem enim blanditiis totam
            consequatur sunt voluptatibus consequuntur. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. 
          </p>
        </div>
        <div>
          <h4 className="educationTitle">Edukacja</h4>
          <p className="educationAbout">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            ratione maiores amet reiciendis architecto provident sed quam. Odit
            iure provident corporis cumque, rem enim blanditiis totam
            consequatur sunt voluptatibus consequuntur. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Recusandae enim nobis quae sit
            blanditiis culpa earum, sed voluptatum quos nesciunt provident omnis
            aspernatur, ipsam alias aperiam placeat optio, non laborum. <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
