import React from "react";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import SectionContent from "../../components/SectionContent/SectionContent";
import "./FeatureSection.css";

export default function FeatureSection() {
  return (
    <>
      <div className="feature-section">
        <SectionContent
          classN="feature-section-content"
          special="Events"
          title="Events Category"
          subTitle="Write the bet number of the team you wish to bet."
        />
        <div className="feature-cards card-group">
          <FeatureCard
            img="images/soccer.png"
            title="Football"
            subtitle="Write the bet number of the team you wish to bet."
          />
          <FeatureCard
            img="images/basketball.png"
            title="Basketball"
            subtitle="Write the bet number of the team you wish to bet."
          />
          <FeatureCard
            img="images/football.png"
            title="Football"
            subtitle="Write the bet number of the team you wish to bet."
          />
        </div>
        <div className="feature-cards card-group">
          <FeatureCard
            img="images/feature-icon-4.png"
            title="Boxing"
            subtitle="Write the bet number of the team you wish to bet."
          />
          <FeatureCard
            img="images/feature-icon-5.png"
            title="Golf"
            subtitle="Write the bet number of the team you wish to bet."
          />
          <FeatureCard
            img="images/feature-icon-6.png"
            title="Horse Racing"
            subtitle="Write the bet number of the team you wish to bet."
          />
        </div>
      </div>
    </>
  );
}
