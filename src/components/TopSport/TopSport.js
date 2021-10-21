import React from "react";
import "./TopSport.css";

export default function TopSport({ icon, title }) {
  return (
    <div className="sport-card">
      <i className={icon}></i>
      <p>{title}</p>
    </div>
  );
}
