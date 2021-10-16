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
          special="Arbeter Services"
          title="Betsports predtion features"
          subTitle="Cubilia dui pretium inventore ab atque aliquid mollit aliquid laborum? Congue dicta! Laboriosam aliqua nulla dictum egestami sapiente! Nisi vivamus nostrud"
        />
        <div className="feature-cards card-group">
          <FeatureCard
            img="images/feature-icon-1.png"
            title="Currency Conversion"
            subtitle="Currency conversion sit amet consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
          />
          <FeatureCard
            img="images/feature-icon-2.png"
            title="Transparent"
            subtitle="Currency conversion sit amet consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
          />
          <FeatureCard
            img="images/feature-icon-3.png"
            title="Clean Usability"
            subtitle="Currency conversion sit amet consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
          />
        </div>
        <div className="feature-cards card-group">
          <FeatureCard
            img="images/feature-icon-4.png"
            title="Support 24/7 online"
            subtitle="Currency conversion sit amet consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
          />
          <FeatureCard
            img="images/feature-icon-5.png"
            title="High Security"
            subtitle="Currency conversion sit amet consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
          />
          <FeatureCard
            img="images/feature-icon-6.png"
            title="Net Percentage"
            subtitle="Currency conversion sit amet consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
          />
        </div>
      </div>
    </>
  );
}
