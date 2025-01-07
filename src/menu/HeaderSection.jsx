import React from "react";
import InfoItem from "./InfoItem";
import BubbleIcon from "./../assets/icons/bubbleIcon.svg";
import PhoneIcon from "./../assets/icons/phoneIcon.svg";
import LetterIcon from "./../assets/icons/mailIcon.svg";
import ClockIcon from "./../assets/icons/clockIcon.svg";
import "./css/HeaderSection.css"; // Optional if there's specific styling

export default function HeaderSection({ onScrollToSection }) {
  return (
    <div className="headerSection">
      <div className="infoSection">
        <InfoItem icon={PhoneIcon} text="123 456 789" />
        <InfoItem icon={LetterIcon} text="martynaw@gmail.com" />
        <InfoItem icon={ClockIcon} text="Pon-Pt 9:00-16:00" />
      </div>
      <button
        className="message__section"
        onClick={() => onScrollToSection("contact")}
      >
        <img className="bubble" src={BubbleIcon} alt="bubble chat icon" />
        NAPISZ WIADOMOŚĆ
      </button>
    </div>
  );
};
