import { motion } from "framer-motion";
import AboutImg from "./../assets/Martyna.jpg";
import "./css/About.css";

function About() {

  return (
    <div className="aboutSection" id="about">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img className="aboutImg" src={AboutImg} alt="Woman lawyer" />
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="aboutText__section"
      >
        <p className="lawyerAbout">prawnik</p>
        <h2 className="h2About">Martyna Winiarska</h2>
        <p className="aboutText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam sunt
          ea facere sint quaerat id, nemo animi earum voluptatem at laborum
        </p>
        <hr className="hrElement" />
        <h4 className="educationTitle">Doświadczenie</h4>
        <p className="educationAbout">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          ratione maiores amet reiciendis architecto provident sed quam. Odit
          iure provident corporis cumque, rem enim blanditiis totam consequatur
          sunt voluptatibus consequuntur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <h4 className="educationTitle">Edukacja</h4>
        <p className="educationAbout">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          ratione maiores amet reiciendis architecto provident sed quam. Odit
          iure provident corporis cumque, rem enim blanditiis totam consequatur
          sunt voluptatibus consequuntur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Recusandae enim nobis quae sit blanditiis culpa
          earum, sed voluptatum quos nesciunt provident omnis aspernatur, ipsam
          alias aperiam placeat optio, non laborum. <br />
        </p>
      </motion.div>
    </div>
  );
}

export default About;
