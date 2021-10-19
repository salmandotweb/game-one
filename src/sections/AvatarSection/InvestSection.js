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
          backgroundRepeat: "no-repeat",
        }}
      >
        <SectionContent
          special="Avatars"
          title="Yours Social Avatars"
          subTitle="Choose One!"
        />
        <div className="invest-section-cards">
          <InvestCard
            img="images/avatar-1.png"
            subTitle="Samurai employed a range of weapons such as bows and arrows, spears and guns."
          />
          <InvestCard
            img="images/avatar-3.png"
            subTitle="Samurai employed a range of weapons such as bows and arrows, spears and guns."
          />
          <InvestCard
            img="images/avatar-2.png"
            subTitle="Samurai employed a range of weapons such as bows and arrows, spears and guns."
          />
        </div>
      </div>
    </>
  );
}
