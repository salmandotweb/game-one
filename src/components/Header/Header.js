import React from "react";
import HeaderCards from "../HeaderCards/HeaderCards";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <div className="header__bg-img">
          <img src="images/hero-bg.png" alt="backgroundimage" />
        </div>
        <div className="header__content">
          <h1 className="h1-red">World's 1st</h1>
          <h1>Decentralized Social Betting App</h1>
          <p>Where players play against players not computers!</p>
          <button className="btn">
            Learn more <i className="fas fa-arrow-circle-right"></i>
          </button>
        </div>
      </header>
      <HeaderCards />
    </div>
  );
}
