import React from "react";
import HeaderCard from "../HeaderCard/HeaderCard";
import "./HeaderCards.css";

export default function HeaderCards() {
  return (
    <div className="header__cards-wrapper">
      <div className="header__cards-container">
        <HeaderCard
          img="images/groups-icon.png"
          title="Registered User"
          subTitle="We develop the relationships that under the next phase in your."
        />
        <HeaderCard
          img="images/groups-icon-2.png"
          title="Withdraw"
          subTitle="We develop the relationships that under the next phase in your."
        />
        <HeaderCard
          img="images/groups-icon.png"
          title="Country Support"
          subTitle="We develop the relationships that under the next phase in your."
        />
        <HeaderCard
          img="images/groups-icon-2.png"
          title="Active Investor Daily"
          subTitle="We develop the relationships that under the next phase in your."
        />
      </div>
    </div>
  );
}
