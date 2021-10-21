import React from "react";
import HeaderCards from "../HeaderCards/HeaderCards";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <header
        className="header"
        style={{
          background: "url(images/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="header__content">
          <h1 className="h1-red">World's 1st</h1>
          <h1 data-aos="fade-down">Decentralized Social Betting App</h1>
          <p data-aos="fade-down">
            Where players play against players not computers!
          </p>
          <button className="btn" data-aos="fade-up">
            Learn more <i className="fas fa-arrow-circle-right"></i>
          </button>
        </div>
      </header>
      <HeaderCards />
    </div>
  );
}
