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
<<<<<<< HEAD
          <h1 className="h1-red">World's 1st</h1>
          <h1>Decentralized Social Betting App</h1>
          <p>Where players play against players not computers!</p>
=======
          <h1 className="h1-red">Invest Bid a little</h1>
          <h1>& Get More Profitable play</h1>
          <p>
            Mollit nostra at! Voluptatum euismod imperdiet Eiusmod nesciunt
            facilisi praesent. Blanditiis cumque eiusmod volutpat dolore sit{" "}
          </p>
>>>>>>> e5e804e3db75cc6112ce83cb988d893bb9127e48
          <button className="btn">
            Learn more <i className="fas fa-arrow-circle-right"></i>
          </button>
        </div>
      </header>
      <HeaderCards />
    </div>
  );
}
