import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import InvestSection from "../sections/section-1/InvestSection";
import FeatureSection from "../sections/section-2/FeatureSection";

export default function HomeScreen() {
  return (
    <div>
      <Navbar />
      <Header />
      <InvestSection />
      <FeatureSection />
    </div>
  );
}
