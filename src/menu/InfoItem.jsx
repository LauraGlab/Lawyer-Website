import React from "react";
import "./css/InfoItem.css"; 

export default function InfoItem({ icon, text }) {
  return (
    <div className="infoItem">
      <img className="icon" src={icon} alt="" />
      <p>{text}</p>
    </div>
  );
};
