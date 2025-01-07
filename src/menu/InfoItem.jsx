import React from "react";
import "./css/InfoItem.css"; // Optional if there's specific styling

export default function InfoItem({ icon, text }) {
  return (
    <div className="infoItem">
      <img className="icon" src={icon} alt="" />
      <p>{text}</p>
    </div>
  );
};
