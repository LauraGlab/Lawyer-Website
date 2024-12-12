import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./../assets/logo.svg";
import SubPageImg from "./../assets/subpageImg.jpg";
import "./SubPage.css";

export default function CivilLaw({ title, items, description, subTitle }) {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="subpageSection">
        <Link to="/">
        <img className="subpageLogo" src={Logo} />
        </Link>
        <div
            className="subpageInfoSection">
            <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }} className="firstSection">
                <h2 className="subpageTitle">{title}</h2>
                <hr className="hrSubPage" />
                <p>{description}</p>
                <img className="imgSubPage" src={SubPageImg} alt="woman with books"/>
            </motion.div>
            <div className="secondSection">
                <h2 className="secondTitle">{subTitle}</h2>
                <hr className="hrSubPage" />
                <ul className="ulSubPage">
                    {items.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
}
