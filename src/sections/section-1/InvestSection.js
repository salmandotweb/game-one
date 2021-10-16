import React from "react";
import InvestCard from "../../components/InvestCard/InvestCard";
import SectionContent from "../../components/SectionContent/SectionContent";
import "./InvestSection.css";

export default function InvestSection() {
  return (
    <>
      <div
        className="invest-section"
        style={{
          background: "url(images/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <SectionContent
          special="Profit"
          title="Check the invest profit"
          subTitle=" Cubilia dui pretium inventore ab atque aliquid mollit aliquid laborum?
        Congue dicta!Laboriosam aliqua nulla dictum egestami sapiente! Nisi
        vivamus nostrud"
        />
        <div className="invest-section-cards">
          <InvestCard
            img="images/groups-icon.png"
            profit="$565"
            title="Daily Profit"
            subTitle="We develop the relationships that under the next phase in your."
          />
          <InvestCard
            img="images/groups-icon.png"
            profit="$2365"
            title="Weekly Profit"
            subTitle="We develop the relationships that under the next phase in your."
          />
          <InvestCard
            img="images/groups-icon.png"
            profit="$5565"
            title="Monthly Profit"
            subTitle="We develop the relationships that under the next phase in your."
          />
        </div>
      </div>
    </>
  );
}
