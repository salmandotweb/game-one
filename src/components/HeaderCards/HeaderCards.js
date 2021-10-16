import React from "react";
import HeaderCard from "../HeaderCard/HeaderCard";
import "./HeaderCards.css";

export default function HeaderCards() {
  return (
    <div className="header__cards-wrapper">
      <div className="header__cards-container">
        <HeaderCard
<<<<<<< HEAD
          img="images/create-icon.png"
          title="Create a Bet"
          subTitle="We develop the relationships that under the next phase in your."
        />
        <HeaderCard
          img="images/play-icon.png"
          title="Play a Bet"
=======
          img="images/groups-icon.png"
          title="Registered User"
          subTitle="We develop the relationships that under the next phase in your."
        />
        <HeaderCard
          img="images/groups-icon-2.png"
          title="Withdraw"
>>>>>>> e5e804e3db75cc6112ce83cb988d893bb9127e48
          subTitle="We develop the relationships that under the next phase in your."
        />
        <HeaderCard
          img="images/groups-icon.png"
<<<<<<< HEAD
          title="Follow a Bet"
=======
          title="Country Support"
          subTitle="We develop the relationships that under the next phase in your."
        />
        <HeaderCard
          img="images/groups-icon-2.png"
          title="Active Investor Daily"
>>>>>>> e5e804e3db75cc6112ce83cb988d893bb9127e48
          subTitle="We develop the relationships that under the next phase in your."
        />
      </div>
    </div>
  );
}
