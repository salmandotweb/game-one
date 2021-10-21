import React from "react";
import "./Banner.css";

export default function Banner({ title, btn, classN }) {
  return (
    <>
      <div
        className={`banner ${classN}`}
        style={{
          backgroundImage: "url(images/hero-bg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <h1>{title}</h1>
        <button className="btn askBtn">{btn}</button>
      </div>
    </>
  );
}
