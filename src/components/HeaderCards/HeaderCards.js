import React from "react";
import HeaderCard from "../HeaderCard/HeaderCard";
import "./HeaderCards.css";

export default function HeaderCards() {
  return (
    <div className="header__cards-wrapper">
      <div className="header__cards-container">
        <HeaderCard
          img="images/create-icon.png"
          title="Create a Bet"
          subTitle="We develop the relationships that under the next phase in your."
        />
        <HeaderCard
          img="images/play-icon.png"
          title="Play a Bet"
          subTitle="We develop the relationships that under the next phase in your."
        />
        <HeaderCard
          img="images/groups-icon.png"
          title="Follow a Bet"
          subTitle="We develop the relationships that under the next phase in your."
        />
      </div>
    </div>
  );
}
